// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
import { WaterTransparencyClassContext } from "./MapIniParser.js";
import { WaterTransparency_propertiesContext } from "./MapIniParser.js";
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
 * This interface defines a complete listener for a parse tree produced by
 * `MapIniParser`.
 */
export class MapIniListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `MapIniParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.classes`.
     * @param ctx the parse tree
     */
    enterClasses?: (ctx: ClassesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.classes`.
     * @param ctx the parse tree
     */
    exitClasses?: (ctx: ClassesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass`.
     * @param ctx the parse tree
     */
    enterAiDataClass?: (ctx: AiDataClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass`.
     * @param ctx the parse tree
     */
    exitAiDataClass?: (ctx: AiDataClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_properties`.
     * @param ctx the parse tree
     */
    enterAiDataClass_properties?: (ctx: AiDataClass_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_properties`.
     * @param ctx the parse tree
     */
    exitAiDataClass_properties?: (ctx: AiDataClass_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_structureProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_structureProperty?: (ctx: AiDataClass_structurePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_structureProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_structureProperty?: (ctx: AiDataClass_structurePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_teamProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_teamProperty?: (ctx: AiDataClass_teamPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_teamProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_teamProperty?: (ctx: AiDataClass_teamPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_wealthProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_wealthProperty?: (ctx: AiDataClass_wealthPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_wealthProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_wealthProperty?: (ctx: AiDataClass_wealthPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_poorProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_poorProperty?: (ctx: AiDataClass_poorPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_poorProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_poorProperty?: (ctx: AiDataClass_poorPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_structureWealthyProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_structureWealthyProperty?: (ctx: AiDataClass_structureWealthyPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_structureWealthyProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_structureWealthyProperty?: (ctx: AiDataClass_structureWealthyPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_structurePoorProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_structurePoorProperty?: (ctx: AiDataClass_structurePoorPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_structurePoorProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_structurePoorProperty?: (ctx: AiDataClass_structurePoorPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_teamWealthProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_teamWealthProperty?: (ctx: AiDataClass_teamWealthPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_teamWealthProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_teamWealthProperty?: (ctx: AiDataClass_teamWealthPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_teamPoorProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_teamPoorProperty?: (ctx: AiDataClass_teamPoorPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_teamPoorProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_teamPoorProperty?: (ctx: AiDataClass_teamPoorPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_teamResourcesProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_teamResourcesProperty?: (ctx: AiDataClass_teamResourcesPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_teamResourcesProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_teamResourcesProperty?: (ctx: AiDataClass_teamResourcesPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardInnerAIProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardInnerAIProperty?: (ctx: AiDataClass_guardInnerAIPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardInnerAIProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardInnerAIProperty?: (ctx: AiDataClass_guardInnerAIPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardOuterAIProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardOuterAIProperty?: (ctx: AiDataClass_guardOuterAIPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardOuterAIProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardOuterAIProperty?: (ctx: AiDataClass_guardOuterAIPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardInnerHumanProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardInnerHumanProperty?: (ctx: AiDataClass_guardInnerHumanPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardInnerHumanProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardInnerHumanProperty?: (ctx: AiDataClass_guardInnerHumanPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardOuterHumanProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardOuterHumanProperty?: (ctx: AiDataClass_guardOuterHumanPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardOuterHumanProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardOuterHumanProperty?: (ctx: AiDataClass_guardOuterHumanPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardChaseUnitsProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardChaseUnitsProperty?: (ctx: AiDataClass_guardChaseUnitsPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardChaseUnitsProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardChaseUnitsProperty?: (ctx: AiDataClass_guardChaseUnitsPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardEnemyScanProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardEnemyScanProperty?: (ctx: AiDataClass_guardEnemyScanPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardEnemyScanProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardEnemyScanProperty?: (ctx: AiDataClass_guardEnemyScanPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_guardEnemyReturnScanProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_guardEnemyReturnScanProperty?: (ctx: AiDataClass_guardEnemyReturnScanPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_guardEnemyReturnScanProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_guardEnemyReturnScanProperty?: (ctx: AiDataClass_guardEnemyReturnScanPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_alertRangeModifierProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_alertRangeModifierProperty?: (ctx: AiDataClass_alertRangeModifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_alertRangeModifierProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_alertRangeModifierProperty?: (ctx: AiDataClass_alertRangeModifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_aggressiveRangeModifierProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_aggressiveRangeModifierProperty?: (ctx: AiDataClass_aggressiveRangeModifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_aggressiveRangeModifierProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_aggressiveRangeModifierProperty?: (ctx: AiDataClass_aggressiveRangeModifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_attackProrityDistanceModifierProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_attackProrityDistanceModifierProperty?: (ctx: AiDataClass_attackProrityDistanceModifierPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_attackProrityDistanceModifierProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_attackProrityDistanceModifierProperty?: (ctx: AiDataClass_attackProrityDistanceModifierPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_maxRecruitRadiusProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_maxRecruitRadiusProperty?: (ctx: AiDataClass_maxRecruitRadiusPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_maxRecruitRadiusProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_maxRecruitRadiusProperty?: (ctx: AiDataClass_maxRecruitRadiusPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBaseDefenseExtraDistanceProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBaseDefenseExtraDistanceProperty?: (ctx: AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBaseDefenseExtraDistanceProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBaseDefenseExtraDistanceProperty?: (ctx: AiDataClass_skirmishBaseDefenseExtraDistancePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_forceIdleMSECProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_forceIdleMSECProperty?: (ctx: AiDataClass_forceIdleMSECPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_forceIdleMSECProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_forceIdleMSECProperty?: (ctx: AiDataClass_forceIdleMSECPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_forceSkirmishAIProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_forceSkirmishAIProperty?: (ctx: AiDataClass_forceSkirmishAIPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_forceSkirmishAIProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_forceSkirmishAIProperty?: (ctx: AiDataClass_forceSkirmishAIPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_rotateSkirmishBaseProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_rotateSkirmishBaseProperty?: (ctx: AiDataClass_rotateSkirmishBasePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_rotateSkirmishBaseProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_rotateSkirmishBaseProperty?: (ctx: AiDataClass_rotateSkirmishBasePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_attackUsesLineOfSightProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_attackUsesLineOfSightProperty?: (ctx: AiDataClass_attackUsesLineOfSightPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_attackUsesLineOfSightProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_attackUsesLineOfSightProperty?: (ctx: AiDataClass_attackUsesLineOfSightPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_enableRepulsorProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_enableRepulsorProperty?: (ctx: AiDataClass_enableRepulsorPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_enableRepulsorProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_enableRepulsorProperty?: (ctx: AiDataClass_enableRepulsorPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_repulsedDistanceProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_repulsedDistanceProperty?: (ctx: AiDataClass_repulsedDistancePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_repulsedDistanceProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_repulsedDistanceProperty?: (ctx: AiDataClass_repulsedDistancePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_wallHeighProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_wallHeighProperty?: (ctx: AiDataClass_wallHeighPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_wallHeighProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_wallHeighProperty?: (ctx: AiDataClass_wallHeighPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_attackIgnoreInsignificantBuildingsProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_attackIgnoreInsignificantBuildingsProperty?: (ctx: AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_attackIgnoreInsignificantBuildingsProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_attackIgnoreInsignificantBuildingsProperty?: (ctx: AiDataClass_attackIgnoreInsignificantBuildingsPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishGroupFudgeDistanceProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishGroupFudgeDistanceProperty?: (ctx: AiDataClass_skirmishGroupFudgeDistancePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishGroupFudgeDistanceProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishGroupFudgeDistanceProperty?: (ctx: AiDataClass_skirmishGroupFudgeDistancePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_minInfantryGroupProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_minInfantryGroupProperty?: (ctx: AiDataClass_minInfantryGroupPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_minInfantryGroupProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_minInfantryGroupProperty?: (ctx: AiDataClass_minInfantryGroupPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_minVehicleGroupProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_minVehicleGroupProperty?: (ctx: AiDataClass_minVehicleGroupPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_minVehicleGroupProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_minVehicleGroupProperty?: (ctx: AiDataClass_minVehicleGroupPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_minDistanceGroupProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_minDistanceGroupProperty?: (ctx: AiDataClass_minDistanceGroupPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_minDistanceGroupProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_minDistanceGroupProperty?: (ctx: AiDataClass_minDistanceGroupPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_distanceRequiresGroupProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_distanceRequiresGroupProperty?: (ctx: AiDataClass_distanceRequiresGroupPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_distanceRequiresGroupProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_distanceRequiresGroupProperty?: (ctx: AiDataClass_distanceRequiresGroupPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_infantryPathfindDiameterProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_infantryPathfindDiameterProperty?: (ctx: AiDataClass_infantryPathfindDiameterPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_infantryPathfindDiameterProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_infantryPathfindDiameterProperty?: (ctx: AiDataClass_infantryPathfindDiameterPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_vehiclePathfindDiameterProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_vehiclePathfindDiameterProperty?: (ctx: AiDataClass_vehiclePathfindDiameterPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_vehiclePathfindDiameterProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_vehiclePathfindDiameterProperty?: (ctx: AiDataClass_vehiclePathfindDiameterPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_supplycenterSaveDistanceProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_supplycenterSaveDistanceProperty?: (ctx: AiDataClass_supplycenterSaveDistancePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_supplycenterSaveDistanceProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_supplycenterSaveDistanceProperty?: (ctx: AiDataClass_supplycenterSaveDistancePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_rebuildDelayTimeSecProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_rebuildDelayTimeSecProperty?: (ctx: AiDataClass_rebuildDelayTimeSecPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_rebuildDelayTimeSecProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_rebuildDelayTimeSecProperty?: (ctx: AiDataClass_rebuildDelayTimeSecPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_aiDozerBoredRadiusProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_aiDozerBoredRadiusProperty?: (ctx: AiDataClass_aiDozerBoredRadiusPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_aiDozerBoredRadiusProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_aiDozerBoredRadiusProperty?: (ctx: AiDataClass_aiDozerBoredRadiusPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_aiCrushesInfantryProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_aiCrushesInfantryProperty?: (ctx: AiDataClass_aiCrushesInfantryPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_aiCrushesInfantryProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_aiCrushesInfantryProperty?: (ctx: AiDataClass_aiCrushesInfantryPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_maxRetaliationDistanceProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_maxRetaliationDistanceProperty?: (ctx: AiDataClass_maxRetaliationDistancePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_maxRetaliationDistanceProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_maxRetaliationDistanceProperty?: (ctx: AiDataClass_maxRetaliationDistancePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_retailationFriendsRadiusProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_retailationFriendsRadiusProperty?: (ctx: AiDataClass_retailationFriendsRadiusPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_retailationFriendsRadiusProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_retailationFriendsRadiusProperty?: (ctx: AiDataClass_retailationFriendsRadiusPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo?: (ctx: AiDataClass_sideInfoContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo?: (ctx: AiDataClass_sideInfoContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfoProperties`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfoProperties?: (ctx: AiDataClass_sideInfoPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfoProperties`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfoProperties?: (ctx: AiDataClass_sideInfoPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresEasy`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo_resourceGatheresEasy?: (ctx: AiDataClass_sideInfo_resourceGatheresEasyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresEasy`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo_resourceGatheresEasy?: (ctx: AiDataClass_sideInfo_resourceGatheresEasyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresMedium`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo_resourceGatheresMedium?: (ctx: AiDataClass_sideInfo_resourceGatheresMediumContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresMedium`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo_resourceGatheresMedium?: (ctx: AiDataClass_sideInfo_resourceGatheresMediumContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresHard`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo_resourceGatheresHard?: (ctx: AiDataClass_sideInfo_resourceGatheresHardContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_resourceGatheresHard`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo_resourceGatheresHard?: (ctx: AiDataClass_sideInfo_resourceGatheresHardContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo_baseDefenseStructure`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo_baseDefenseStructure?: (ctx: AiDataClass_sideInfo_baseDefenseStructureContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_baseDefenseStructure`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo_baseDefenseStructure?: (ctx: AiDataClass_sideInfo_baseDefenseStructureContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_sideInfo_skillSet`.
     * @param ctx the parse tree
     */
    enterAiDataClass_sideInfo_skillSet?: (ctx: AiDataClass_sideInfo_skillSetContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_sideInfo_skillSet`.
     * @param ctx the parse tree
     */
    exitAiDataClass_sideInfo_skillSet?: (ctx: AiDataClass_sideInfo_skillSetContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList?: (ctx: AiDataClass_skirmishBuildListContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList?: (ctx: AiDataClass_skirmishBuildListContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure?: (ctx: AiDataClass_skirmishBuildList_structureContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure?: (ctx: AiDataClass_skirmishBuildList_structureContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_properties`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_properties?: (ctx: AiDataClass_skirmishBuildList_structure_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_properties`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_properties?: (ctx: AiDataClass_skirmishBuildList_structure_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_locationProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_locationProperty?: (ctx: AiDataClass_skirmishBuildList_structure_locationPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_locationProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_locationProperty?: (ctx: AiDataClass_skirmishBuildList_structure_locationPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_rebuildsProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_rebuildsProperty?: (ctx: AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_rebuildsProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_rebuildsProperty?: (ctx: AiDataClass_skirmishBuildList_structure_rebuildsPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_angleProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_angleProperty?: (ctx: AiDataClass_skirmishBuildList_structure_anglePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_angleProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_angleProperty?: (ctx: AiDataClass_skirmishBuildList_structure_anglePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_initiallyBuildProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_initiallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_initiallyBuildProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_initiallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_initiallyBuildPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty`.
     * @param ctx the parse tree
     */
    enterAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aiDataClass_skirmishBuildList_structure_automaticallyBuildProperty`.
     * @param ctx the parse tree
     */
    exitAiDataClass_skirmishBuildList_structure_automaticallyBuildProperty?: (ctx: AiDataClass_skirmishBuildList_structure_automaticallyBuildPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass`.
     * @param ctx the parse tree
     */
    enterMappedImageClass?: (ctx: MappedImageClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass`.
     * @param ctx the parse tree
     */
    exitMappedImageClass?: (ctx: MappedImageClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClassProperties`.
     * @param ctx the parse tree
     */
    enterMappedImageClassProperties?: (ctx: MappedImageClassPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClassProperties`.
     * @param ctx the parse tree
     */
    exitMappedImageClassProperties?: (ctx: MappedImageClassPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass_textureProperty`.
     * @param ctx the parse tree
     */
    enterMappedImageClass_textureProperty?: (ctx: MappedImageClass_texturePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass_textureProperty`.
     * @param ctx the parse tree
     */
    exitMappedImageClass_textureProperty?: (ctx: MappedImageClass_texturePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass_textureWidthProperty`.
     * @param ctx the parse tree
     */
    enterMappedImageClass_textureWidthProperty?: (ctx: MappedImageClass_textureWidthPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass_textureWidthProperty`.
     * @param ctx the parse tree
     */
    exitMappedImageClass_textureWidthProperty?: (ctx: MappedImageClass_textureWidthPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass_textureHeightProperty`.
     * @param ctx the parse tree
     */
    enterMappedImageClass_textureHeightProperty?: (ctx: MappedImageClass_textureHeightPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass_textureHeightProperty`.
     * @param ctx the parse tree
     */
    exitMappedImageClass_textureHeightProperty?: (ctx: MappedImageClass_textureHeightPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass_coordsProperty`.
     * @param ctx the parse tree
     */
    enterMappedImageClass_coordsProperty?: (ctx: MappedImageClass_coordsPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass_coordsProperty`.
     * @param ctx the parse tree
     */
    exitMappedImageClass_coordsProperty?: (ctx: MappedImageClass_coordsPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImageClass_statusProperty`.
     * @param ctx the parse tree
     */
    enterMappedImageClass_statusProperty?: (ctx: MappedImageClass_statusPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImageClass_statusProperty`.
     * @param ctx the parse tree
     */
    exitMappedImageClass_statusProperty?: (ctx: MappedImageClass_statusPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass?: (ctx: Animation2DClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass?: (ctx: Animation2DClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClassProperties`.
     * @param ctx the parse tree
     */
    enterAnimation2DClassProperties?: (ctx: Animation2DClassPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClassProperties`.
     * @param ctx the parse tree
     */
    exitAnimation2DClassProperties?: (ctx: Animation2DClassPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass_animationModeProperty`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass_animationModeProperty?: (ctx: Animation2DClass_animationModePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass_animationModeProperty`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass_animationModeProperty?: (ctx: Animation2DClass_animationModePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass_animationdelayProperty`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass_animationdelayProperty?: (ctx: Animation2DClass_animationdelayPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass_animationdelayProperty`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass_animationdelayProperty?: (ctx: Animation2DClass_animationdelayPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass_randomizeStartFrameProperty`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass_randomizeStartFrameProperty?: (ctx: Animation2DClass_randomizeStartFramePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass_randomizeStartFrameProperty`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass_randomizeStartFrameProperty?: (ctx: Animation2DClass_randomizeStartFramePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass_numberImagesProperty`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass_numberImagesProperty?: (ctx: Animation2DClass_numberImagesPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass_numberImagesProperty`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass_numberImagesProperty?: (ctx: Animation2DClass_numberImagesPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2DClass_imageProperty`.
     * @param ctx the parse tree
     */
    enterAnimation2DClass_imageProperty?: (ctx: Animation2DClass_imagePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2DClass_imageProperty`.
     * @param ctx the parse tree
     */
    exitAnimation2DClass_imageProperty?: (ctx: Animation2DClass_imagePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.armorClass`.
     * @param ctx the parse tree
     */
    enterArmorClass?: (ctx: ArmorClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.armorClass`.
     * @param ctx the parse tree
     */
    exitArmorClass?: (ctx: ArmorClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.armorClassProperties`.
     * @param ctx the parse tree
     */
    enterArmorClassProperties?: (ctx: ArmorClassPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.armorClassProperties`.
     * @param ctx the parse tree
     */
    exitArmorClassProperties?: (ctx: ArmorClassPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.armorClass_armorProperty`.
     * @param ctx the parse tree
     */
    enterArmorClass_armorProperty?: (ctx: ArmorClass_armorPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.armorClass_armorProperty`.
     * @param ctx the parse tree
     */
    exitArmorClass_armorProperty?: (ctx: ArmorClass_armorPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandButtonClass`.
     * @param ctx the parse tree
     */
    enterCommandButtonClass?: (ctx: CommandButtonClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandButtonClass`.
     * @param ctx the parse tree
     */
    exitCommandButtonClass?: (ctx: CommandButtonClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandButtonClassProperties`.
     * @param ctx the parse tree
     */
    enterCommandButtonClassProperties?: (ctx: CommandButtonClassPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandButtonClassProperties`.
     * @param ctx the parse tree
     */
    exitCommandButtonClassProperties?: (ctx: CommandButtonClassPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_command_property`.
     * @param ctx the parse tree
     */
    enterCb_command_property?: (ctx: Cb_command_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_command_property`.
     * @param ctx the parse tree
     */
    exitCb_command_property?: (ctx: Cb_command_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_options_property`.
     * @param ctx the parse tree
     */
    enterCb_options_property?: (ctx: Cb_options_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_options_property`.
     * @param ctx the parse tree
     */
    exitCb_options_property?: (ctx: Cb_options_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_options_value`.
     * @param ctx the parse tree
     */
    enterCb_options_value?: (ctx: Cb_options_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_options_value`.
     * @param ctx the parse tree
     */
    exitCb_options_value?: (ctx: Cb_options_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_buttonimage_property`.
     * @param ctx the parse tree
     */
    enterCb_buttonimage_property?: (ctx: Cb_buttonimage_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_buttonimage_property`.
     * @param ctx the parse tree
     */
    exitCb_buttonimage_property?: (ctx: Cb_buttonimage_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_buttonbordertype_property`.
     * @param ctx the parse tree
     */
    enterCb_buttonbordertype_property?: (ctx: Cb_buttonbordertype_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_buttonbordertype_property`.
     * @param ctx the parse tree
     */
    exitCb_buttonbordertype_property?: (ctx: Cb_buttonbordertype_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_textlabel_property`.
     * @param ctx the parse tree
     */
    enterCb_textlabel_property?: (ctx: Cb_textlabel_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_textlabel_property`.
     * @param ctx the parse tree
     */
    exitCb_textlabel_property?: (ctx: Cb_textlabel_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_descriptionlabel_property`.
     * @param ctx the parse tree
     */
    enterCb_descriptionlabel_property?: (ctx: Cb_descriptionlabel_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_descriptionlabel_property`.
     * @param ctx the parse tree
     */
    exitCb_descriptionlabel_property?: (ctx: Cb_descriptionlabel_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_conflictinglabel_property`.
     * @param ctx the parse tree
     */
    enterCb_conflictinglabel_property?: (ctx: Cb_conflictinglabel_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_conflictinglabel_property`.
     * @param ctx the parse tree
     */
    exitCb_conflictinglabel_property?: (ctx: Cb_conflictinglabel_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_cursorname_propery`.
     * @param ctx the parse tree
     */
    enterCb_cursorname_propery?: (ctx: Cb_cursorname_properyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_cursorname_propery`.
     * @param ctx the parse tree
     */
    exitCb_cursorname_propery?: (ctx: Cb_cursorname_properyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_radius_cursorname_value`.
     * @param ctx the parse tree
     */
    enterCb_radius_cursorname_value?: (ctx: Cb_radius_cursorname_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_radius_cursorname_value`.
     * @param ctx the parse tree
     */
    exitCb_radius_cursorname_value?: (ctx: Cb_radius_cursorname_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_invalid_cursorname_propery`.
     * @param ctx the parse tree
     */
    enterCb_invalid_cursorname_propery?: (ctx: Cb_invalid_cursorname_properyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_invalid_cursorname_propery`.
     * @param ctx the parse tree
     */
    exitCb_invalid_cursorname_propery?: (ctx: Cb_invalid_cursorname_properyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_unitspecificsound_property`.
     * @param ctx the parse tree
     */
    enterCb_unitspecificsound_property?: (ctx: Cb_unitspecificsound_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_unitspecificsound_property`.
     * @param ctx the parse tree
     */
    exitCb_unitspecificsound_property?: (ctx: Cb_unitspecificsound_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_maxshotsfire_property`.
     * @param ctx the parse tree
     */
    enterCb_maxshotsfire_property?: (ctx: Cb_maxshotsfire_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_maxshotsfire_property`.
     * @param ctx the parse tree
     */
    exitCb_maxshotsfire_property?: (ctx: Cb_maxshotsfire_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cb_purchasedlabel_property`.
     * @param ctx the parse tree
     */
    enterCb_purchasedlabel_property?: (ctx: Cb_purchasedlabel_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cb_purchasedlabel_property`.
     * @param ctx the parse tree
     */
    exitCb_purchasedlabel_property?: (ctx: Cb_purchasedlabel_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandSetClass`.
     * @param ctx the parse tree
     */
    enterCommandSetClass?: (ctx: CommandSetClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandSetClass`.
     * @param ctx the parse tree
     */
    exitCommandSetClass?: (ctx: CommandSetClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandSetClassProperty`.
     * @param ctx the parse tree
     */
    enterCommandSetClassProperty?: (ctx: CommandSetClassPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandSetClassProperty`.
     * @param ctx the parse tree
     */
    exitCommandSetClassProperty?: (ctx: CommandSetClassPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.damageFXClass`.
     * @param ctx the parse tree
     */
    enterDamageFXClass?: (ctx: DamageFXClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.damageFXClass`.
     * @param ctx the parse tree
     */
    exitDamageFXClass?: (ctx: DamageFXClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.damageFXClassProperties`.
     * @param ctx the parse tree
     */
    enterDamageFXClassProperties?: (ctx: DamageFXClassPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.damageFXClassProperties`.
     * @param ctx the parse tree
     */
    exitDamageFXClassProperties?: (ctx: DamageFXClassPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_throttletime_property`.
     * @param ctx the parse tree
     */
    enterDfx_throttletime_property?: (ctx: Dfx_throttletime_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_throttletime_property`.
     * @param ctx the parse tree
     */
    exitDfx_throttletime_property?: (ctx: Dfx_throttletime_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_amountformajorfx_property`.
     * @param ctx the parse tree
     */
    enterDfx_amountformajorfx_property?: (ctx: Dfx_amountformajorfx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_amountformajorfx_property`.
     * @param ctx the parse tree
     */
    exitDfx_amountformajorfx_property?: (ctx: Dfx_amountformajorfx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_majorfx_property`.
     * @param ctx the parse tree
     */
    enterDfx_majorfx_property?: (ctx: Dfx_majorfx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_majorfx_property`.
     * @param ctx the parse tree
     */
    exitDfx_majorfx_property?: (ctx: Dfx_majorfx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_minorfx_property`.
     * @param ctx the parse tree
     */
    enterDfx_minorfx_property?: (ctx: Dfx_minorfx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_minorfx_property`.
     * @param ctx the parse tree
     */
    exitDfx_minorfx_property?: (ctx: Dfx_minorfx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_vetmajorfx_property`.
     * @param ctx the parse tree
     */
    enterDfx_vetmajorfx_property?: (ctx: Dfx_vetmajorfx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_vetmajorfx_property`.
     * @param ctx the parse tree
     */
    exitDfx_vetmajorfx_property?: (ctx: Dfx_vetmajorfx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dfx_vetminorfx_property`.
     * @param ctx the parse tree
     */
    enterDfx_vetminorfx_property?: (ctx: Dfx_vetminorfx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dfx_vetminorfx_property`.
     * @param ctx the parse tree
     */
    exitDfx_vetminorfx_property?: (ctx: Dfx_vetminorfx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawGroupInfoClass`.
     * @param ctx the parse tree
     */
    enterDrawGroupInfoClass?: (ctx: DrawGroupInfoClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawGroupInfoClass`.
     * @param ctx the parse tree
     */
    exitDrawGroupInfoClass?: (ctx: DrawGroupInfoClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawgroupinfoProperties`.
     * @param ctx the parse tree
     */
    enterDrawgroupinfoProperties?: (ctx: DrawgroupinfoPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawgroupinfoProperties`.
     * @param ctx the parse tree
     */
    exitDrawgroupinfoProperties?: (ctx: DrawgroupinfoPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxListClass`.
     * @param ctx the parse tree
     */
    enterFxListClass?: (ctx: FxListClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxListClass`.
     * @param ctx the parse tree
     */
    exitFxListClass?: (ctx: FxListClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlistblocks`.
     * @param ctx the parse tree
     */
    enterFxlistblocks?: (ctx: FxlistblocksContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlistblocks`.
     * @param ctx the parse tree
     */
    exitFxlistblocks?: (ctx: FxlistblocksContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_block`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_block?: (ctx: Fxlist_ps_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_block`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_block?: (ctx: Fxlist_ps_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_name_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_name_property?: (ctx: Fxlist_ps_name_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_name_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_name_property?: (ctx: Fxlist_ps_name_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_count_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_count_property?: (ctx: Fxlist_ps_count_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_count_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_count_property?: (ctx: Fxlist_ps_count_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_offset_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_offset_property?: (ctx: Fxlist_ps_offset_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_offset_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_offset_property?: (ctx: Fxlist_ps_offset_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_radius_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_radius_property?: (ctx: Fxlist_ps_radius_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_radius_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_radius_property?: (ctx: Fxlist_ps_radius_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_height_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_height_property?: (ctx: Fxlist_ps_height_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_height_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_height_property?: (ctx: Fxlist_ps_height_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_initialDelay_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_initialDelay_property?: (ctx: Fxlist_ps_initialDelay_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_initialDelay_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_initialDelay_property?: (ctx: Fxlist_ps_initialDelay_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_rotateX_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_rotateX_property?: (ctx: Fxlist_ps_rotateX_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_rotateX_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_rotateX_property?: (ctx: Fxlist_ps_rotateX_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_rotatey_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_rotatey_property?: (ctx: Fxlist_ps_rotatey_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_rotatey_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_rotatey_property?: (ctx: Fxlist_ps_rotatey_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_rotateZ_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_rotateZ_property?: (ctx: Fxlist_ps_rotateZ_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_rotateZ_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_rotateZ_property?: (ctx: Fxlist_ps_rotateZ_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_orienttoobject_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_orienttoobject_property?: (ctx: Fxlist_ps_orienttoobject_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_orienttoobject_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_orienttoobject_property?: (ctx: Fxlist_ps_orienttoobject_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_ricochet_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_ricochet_property?: (ctx: Fxlist_ps_ricochet_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_ricochet_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_ricochet_property?: (ctx: Fxlist_ps_ricochet_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_usecallerradius_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_usecallerradius_property?: (ctx: Fxlist_ps_usecallerradius_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_usecallerradius_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_usecallerradius_property?: (ctx: Fxlist_ps_usecallerradius_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_attachtoobject_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_attachtoobject_property?: (ctx: Fxlist_ps_attachtoobject_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_attachtoobject_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_attachtoobject_property?: (ctx: Fxlist_ps_attachtoobject_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_ps_creategroundheight_property`.
     * @param ctx the parse tree
     */
    enterFxlist_ps_creategroundheight_property?: (ctx: Fxlist_ps_creategroundheight_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_ps_creategroundheight_property`.
     * @param ctx the parse tree
     */
    exitFxlist_ps_creategroundheight_property?: (ctx: Fxlist_ps_creategroundheight_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_sound_block`.
     * @param ctx the parse tree
     */
    enterFxlist_sound_block?: (ctx: Fxlist_sound_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_sound_block`.
     * @param ctx the parse tree
     */
    exitFxlist_sound_block?: (ctx: Fxlist_sound_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_sound_property`.
     * @param ctx the parse tree
     */
    enterFxlist_sound_property?: (ctx: Fxlist_sound_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_sound_property`.
     * @param ctx the parse tree
     */
    exitFxlist_sound_property?: (ctx: Fxlist_sound_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_rayeffect_block`.
     * @param ctx the parse tree
     */
    enterFxlist_rayeffect_block?: (ctx: Fxlist_rayeffect_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_rayeffect_block`.
     * @param ctx the parse tree
     */
    exitFxlist_rayeffect_block?: (ctx: Fxlist_rayeffect_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_rayeffect_primaryoffset_property`.
     * @param ctx the parse tree
     */
    enterFxlist_rayeffect_primaryoffset_property?: (ctx: Fxlist_rayeffect_primaryoffset_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_rayeffect_primaryoffset_property`.
     * @param ctx the parse tree
     */
    exitFxlist_rayeffect_primaryoffset_property?: (ctx: Fxlist_rayeffect_primaryoffset_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_rayeffect_secondaryoffset_proprety`.
     * @param ctx the parse tree
     */
    enterFxlist_rayeffect_secondaryoffset_proprety?: (ctx: Fxlist_rayeffect_secondaryoffset_propretyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_rayeffect_secondaryoffset_proprety`.
     * @param ctx the parse tree
     */
    exitFxlist_rayeffect_secondaryoffset_proprety?: (ctx: Fxlist_rayeffect_secondaryoffset_propretyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_rayeffect_object_propety`.
     * @param ctx the parse tree
     */
    enterFxlist_rayeffect_object_propety?: (ctx: Fxlist_rayeffect_object_propetyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_rayeffect_object_propety`.
     * @param ctx the parse tree
     */
    exitFxlist_rayeffect_object_propety?: (ctx: Fxlist_rayeffect_object_propetyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_block`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_block?: (ctx: Fxlist_tracer_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_block`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_block?: (ctx: Fxlist_tracer_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_name_propety`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_name_propety?: (ctx: Fxlist_tracer_name_propetyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_name_propety`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_name_propety?: (ctx: Fxlist_tracer_name_propetyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_bonename_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_bonename_property?: (ctx: Fxlist_tracer_bonename_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_bonename_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_bonename_property?: (ctx: Fxlist_tracer_bonename_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_speed_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_speed_property?: (ctx: Fxlist_tracer_speed_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_speed_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_speed_property?: (ctx: Fxlist_tracer_speed_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_decayat_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_decayat_property?: (ctx: Fxlist_tracer_decayat_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_decayat_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_decayat_property?: (ctx: Fxlist_tracer_decayat_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_length_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_length_property?: (ctx: Fxlist_tracer_length_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_length_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_length_property?: (ctx: Fxlist_tracer_length_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_width_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_width_property?: (ctx: Fxlist_tracer_width_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_width_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_width_property?: (ctx: Fxlist_tracer_width_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_color_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_color_property?: (ctx: Fxlist_tracer_color_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_color_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_color_property?: (ctx: Fxlist_tracer_color_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_tracer_probability_property`.
     * @param ctx the parse tree
     */
    enterFxlist_tracer_probability_property?: (ctx: Fxlist_tracer_probability_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_tracer_probability_property`.
     * @param ctx the parse tree
     */
    exitFxlist_tracer_probability_property?: (ctx: Fxlist_tracer_probability_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_block`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_block?: (ctx: Fxlist_lightpulse_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_block`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_block?: (ctx: Fxlist_lightpulse_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_color_property`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_color_property?: (ctx: Fxlist_lightpulse_color_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_color_property`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_color_property?: (ctx: Fxlist_lightpulse_color_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_radius_property`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_radius_property?: (ctx: Fxlist_lightpulse_radius_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_radius_property`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_radius_property?: (ctx: Fxlist_lightpulse_radius_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_radiuspercentobjectsize_property`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_radiuspercentobjectsize_property?: (ctx: Fxlist_lightpulse_radiuspercentobjectsize_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_radiuspercentobjectsize_property`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_radiuspercentobjectsize_property?: (ctx: Fxlist_lightpulse_radiuspercentobjectsize_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_increasetime_property`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_increasetime_property?: (ctx: Fxlist_lightpulse_increasetime_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_increasetime_property`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_increasetime_property?: (ctx: Fxlist_lightpulse_increasetime_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_lightpulse_decreasetime_property`.
     * @param ctx the parse tree
     */
    enterFxlist_lightpulse_decreasetime_property?: (ctx: Fxlist_lightpulse_decreasetime_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_lightpulse_decreasetime_property`.
     * @param ctx the parse tree
     */
    exitFxlist_lightpulse_decreasetime_property?: (ctx: Fxlist_lightpulse_decreasetime_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_viewshake_block`.
     * @param ctx the parse tree
     */
    enterFxlist_viewshake_block?: (ctx: Fxlist_viewshake_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_viewshake_block`.
     * @param ctx the parse tree
     */
    exitFxlist_viewshake_block?: (ctx: Fxlist_viewshake_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_viewshake_type_property`.
     * @param ctx the parse tree
     */
    enterFxlist_viewshake_type_property?: (ctx: Fxlist_viewshake_type_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_viewshake_type_property`.
     * @param ctx the parse tree
     */
    exitFxlist_viewshake_type_property?: (ctx: Fxlist_viewshake_type_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_viewshake_type_value`.
     * @param ctx the parse tree
     */
    enterFxlist_viewshake_type_value?: (ctx: Fxlist_viewshake_type_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_viewshake_type_value`.
     * @param ctx the parse tree
     */
    exitFxlist_viewshake_type_value?: (ctx: Fxlist_viewshake_type_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_terrainscorch_block`.
     * @param ctx the parse tree
     */
    enterFxlist_terrainscorch_block?: (ctx: Fxlist_terrainscorch_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_terrainscorch_block`.
     * @param ctx the parse tree
     */
    exitFxlist_terrainscorch_block?: (ctx: Fxlist_terrainscorch_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_scorch_type_property`.
     * @param ctx the parse tree
     */
    enterFxlist_scorch_type_property?: (ctx: Fxlist_scorch_type_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_scorch_type_property`.
     * @param ctx the parse tree
     */
    exitFxlist_scorch_type_property?: (ctx: Fxlist_scorch_type_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_scorch_radius_property`.
     * @param ctx the parse tree
     */
    enterFxlist_scorch_radius_property?: (ctx: Fxlist_scorch_radius_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_scorch_radius_property`.
     * @param ctx the parse tree
     */
    exitFxlist_scorch_radius_property?: (ctx: Fxlist_scorch_radius_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_fxlistatbone_block`.
     * @param ctx the parse tree
     */
    enterFxlist_fxlistatbone_block?: (ctx: Fxlist_fxlistatbone_blockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_fxlistatbone_block`.
     * @param ctx the parse tree
     */
    exitFxlist_fxlistatbone_block?: (ctx: Fxlist_fxlistatbone_blockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_atbonepos_fx_property`.
     * @param ctx the parse tree
     */
    enterFxlist_atbonepos_fx_property?: (ctx: Fxlist_atbonepos_fx_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_atbonepos_fx_property`.
     * @param ctx the parse tree
     */
    exitFxlist_atbonepos_fx_property?: (ctx: Fxlist_atbonepos_fx_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_atbonepos_bonename_property`.
     * @param ctx the parse tree
     */
    enterFxlist_atbonepos_bonename_property?: (ctx: Fxlist_atbonepos_bonename_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_atbonepos_bonename_property`.
     * @param ctx the parse tree
     */
    exitFxlist_atbonepos_bonename_property?: (ctx: Fxlist_atbonepos_bonename_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_atbonepos_orienttoobject_property`.
     * @param ctx the parse tree
     */
    enterFxlist_atbonepos_orienttoobject_property?: (ctx: Fxlist_atbonepos_orienttoobject_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_atbonepos_orienttoobject_property`.
     * @param ctx the parse tree
     */
    exitFxlist_atbonepos_orienttoobject_property?: (ctx: Fxlist_atbonepos_orienttoobject_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.inGameUIClass`.
     * @param ctx the parse tree
     */
    enterInGameUIClass?: (ctx: InGameUIClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.inGameUIClass`.
     * @param ctx the parse tree
     */
    exitInGameUIClass?: (ctx: InGameUIClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.igui_properties`.
     * @param ctx the parse tree
     */
    enterIgui_properties?: (ctx: Igui_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.igui_properties`.
     * @param ctx the parse tree
     */
    exitIgui_properties?: (ctx: Igui_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.igui_blocks`.
     * @param ctx the parse tree
     */
    enterIgui_blocks?: (ctx: Igui_blocksContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.igui_blocks`.
     * @param ctx the parse tree
     */
    exitIgui_blocks?: (ctx: Igui_blocksContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.ingui_block_properties`.
     * @param ctx the parse tree
     */
    enterIngui_block_properties?: (ctx: Ingui_block_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.ingui_block_properties`.
     * @param ctx the parse tree
     */
    exitIngui_block_properties?: (ctx: Ingui_block_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotorClass`.
     * @param ctx the parse tree
     */
    enterLocomotorClass?: (ctx: LocomotorClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotorClass`.
     * @param ctx the parse tree
     */
    exitLocomotorClass?: (ctx: LocomotorClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_properties`.
     * @param ctx the parse tree
     */
    enterLocomotor_properties?: (ctx: Locomotor_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_properties`.
     * @param ctx the parse tree
     */
    exitLocomotor_properties?: (ctx: Locomotor_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_surface_property`.
     * @param ctx the parse tree
     */
    enterLocomotor_surface_property?: (ctx: Locomotor_surface_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_surface_property`.
     * @param ctx the parse tree
     */
    exitLocomotor_surface_property?: (ctx: Locomotor_surface_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_zbehavior_property`.
     * @param ctx the parse tree
     */
    enterLocomotor_zbehavior_property?: (ctx: Locomotor_zbehavior_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_zbehavior_property`.
     * @param ctx the parse tree
     */
    exitLocomotor_zbehavior_property?: (ctx: Locomotor_zbehavior_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_appereance_property`.
     * @param ctx the parse tree
     */
    enterLocomotor_appereance_property?: (ctx: Locomotor_appereance_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_appereance_property`.
     * @param ctx the parse tree
     */
    exitLocomotor_appereance_property?: (ctx: Locomotor_appereance_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_movepriority_property`.
     * @param ctx the parse tree
     */
    enterLocomotor_movepriority_property?: (ctx: Locomotor_movepriority_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_movepriority_property`.
     * @param ctx the parse tree
     */
    exitLocomotor_movepriority_property?: (ctx: Locomotor_movepriority_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.surface_value`.
     * @param ctx the parse tree
     */
    enterSurface_value?: (ctx: Surface_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.surface_value`.
     * @param ctx the parse tree
     */
    exitSurface_value?: (ctx: Surface_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.zbehavior_value`.
     * @param ctx the parse tree
     */
    enterZbehavior_value?: (ctx: Zbehavior_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.zbehavior_value`.
     * @param ctx the parse tree
     */
    exitZbehavior_value?: (ctx: Zbehavior_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.appereance_value`.
     * @param ctx the parse tree
     */
    enterAppereance_value?: (ctx: Appereance_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.appereance_value`.
     * @param ctx the parse tree
     */
    exitAppereance_value?: (ctx: Appereance_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.movepriority_value`.
     * @param ctx the parse tree
     */
    enterMovepriority_value?: (ctx: Movepriority_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.movepriority_value`.
     * @param ctx the parse tree
     */
    exitMovepriority_value?: (ctx: Movepriority_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectReskinClass`.
     * @param ctx the parse tree
     */
    enterObjectReskinClass?: (ctx: ObjectReskinClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectReskinClass`.
     * @param ctx the parse tree
     */
    exitObjectReskinClass?: (ctx: ObjectReskinClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     */
    enterObjectClass?: (ctx: ObjectClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     */
    exitObjectClass?: (ctx: ObjectClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_properties`.
     * @param ctx the parse tree
     */
    enterObjectClass_properties?: (ctx: ObjectClass_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_properties`.
     * @param ctx the parse tree
     */
    exitObjectClass_properties?: (ctx: ObjectClass_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_sounds`.
     * @param ctx the parse tree
     */
    enterObjectClass_sounds?: (ctx: ObjectClass_soundsContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_sounds`.
     * @param ctx the parse tree
     */
    exitObjectClass_sounds?: (ctx: ObjectClass_soundsContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_sets`.
     * @param ctx the parse tree
     */
    enterObjectClass_sets?: (ctx: ObjectClass_setsContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_sets`.
     * @param ctx the parse tree
     */
    exitObjectClass_sets?: (ctx: ObjectClass_setsContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_weaponSetBlock`.
     * @param ctx the parse tree
     */
    enterObjectClass_weaponSetBlock?: (ctx: ObjectClass_weaponSetBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_weaponSetBlock`.
     * @param ctx the parse tree
     */
    exitObjectClass_weaponSetBlock?: (ctx: ObjectClass_weaponSetBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_weaponSetProperties`.
     * @param ctx the parse tree
     */
    enterObjectClass_weaponSetProperties?: (ctx: ObjectClass_weaponSetPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_weaponSetProperties`.
     * @param ctx the parse tree
     */
    exitObjectClass_weaponSetProperties?: (ctx: ObjectClass_weaponSetPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_armorSetBlock`.
     * @param ctx the parse tree
     */
    enterObjectClass_armorSetBlock?: (ctx: ObjectClass_armorSetBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_armorSetBlock`.
     * @param ctx the parse tree
     */
    exitObjectClass_armorSetBlock?: (ctx: ObjectClass_armorSetBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_armorSetProperties`.
     * @param ctx the parse tree
     */
    enterObjectClass_armorSetProperties?: (ctx: ObjectClass_armorSetPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_armorSetProperties`.
     * @param ctx the parse tree
     */
    exitObjectClass_armorSetProperties?: (ctx: ObjectClass_armorSetPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_setConditions`.
     * @param ctx the parse tree
     */
    enterObjectClass_setConditions?: (ctx: ObjectClass_setConditionsContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_setConditions`.
     * @param ctx the parse tree
     */
    exitObjectClass_setConditions?: (ctx: ObjectClass_setConditionsContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_prerequisiteSetBlock`.
     * @param ctx the parse tree
     */
    enterObjectClass_prerequisiteSetBlock?: (ctx: ObjectClass_prerequisiteSetBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_prerequisiteSetBlock`.
     * @param ctx the parse tree
     */
    exitObjectClass_prerequisiteSetBlock?: (ctx: ObjectClass_prerequisiteSetBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_prerequisiteSetProperties`.
     * @param ctx the parse tree
     */
    enterObjectClass_prerequisiteSetProperties?: (ctx: ObjectClass_prerequisiteSetPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_prerequisiteSetProperties`.
     * @param ctx the parse tree
     */
    exitObjectClass_prerequisiteSetProperties?: (ctx: ObjectClass_prerequisiteSetPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_unitSpecificSoundsBlock`.
     * @param ctx the parse tree
     */
    enterObjectClass_unitSpecificSoundsBlock?: (ctx: ObjectClass_unitSpecificSoundsBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_unitSpecificSoundsBlock`.
     * @param ctx the parse tree
     */
    exitObjectClass_unitSpecificSoundsBlock?: (ctx: ObjectClass_unitSpecificSoundsBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_unitSpecificFXBlock`.
     * @param ctx the parse tree
     */
    enterObjectClass_unitSpecificFXBlock?: (ctx: ObjectClass_unitSpecificFXBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_unitSpecificFXBlock`.
     * @param ctx the parse tree
     */
    exitObjectClass_unitSpecificFXBlock?: (ctx: ObjectClass_unitSpecificFXBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_unitSpecificFXProperties`.
     * @param ctx the parse tree
     */
    enterObjectClass_unitSpecificFXProperties?: (ctx: ObjectClass_unitSpecificFXPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_unitSpecificFXProperties`.
     * @param ctx the parse tree
     */
    exitObjectClass_unitSpecificFXProperties?: (ctx: ObjectClass_unitSpecificFXPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_removeModule`.
     * @param ctx the parse tree
     */
    enterObjectClass_removeModule?: (ctx: ObjectClass_removeModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_removeModule`.
     * @param ctx the parse tree
     */
    exitObjectClass_removeModule?: (ctx: ObjectClass_removeModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_addModule`.
     * @param ctx the parse tree
     */
    enterObjectClass_addModule?: (ctx: ObjectClass_addModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_addModule`.
     * @param ctx the parse tree
     */
    exitObjectClass_addModule?: (ctx: ObjectClass_addModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_replaceModule`.
     * @param ctx the parse tree
     */
    enterObjectClass_replaceModule?: (ctx: ObjectClass_replaceModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_replaceModule`.
     * @param ctx the parse tree
     */
    exitObjectClass_replaceModule?: (ctx: ObjectClass_replaceModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_modules`.
     * @param ctx the parse tree
     */
    enterObjectClass_modules?: (ctx: ObjectClass_modulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_modules`.
     * @param ctx the parse tree
     */
    exitObjectClass_modules?: (ctx: ObjectClass_modulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_drawModules`.
     * @param ctx the parse tree
     */
    enterObjectClass_drawModules?: (ctx: ObjectClass_drawModulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_drawModules`.
     * @param ctx the parse tree
     */
    exitObjectClass_drawModules?: (ctx: ObjectClass_drawModulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dDebrisDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dDebrisDrawModule?: (ctx: W3dDebrisDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dDebrisDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dDebrisDrawModule?: (ctx: W3dDebrisDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dDefaultDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dDefaultDrawModule?: (ctx: W3dDefaultDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dDefaultDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dDefaultDrawModule?: (ctx: W3dDefaultDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dModelDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dModelDrawModule?: (ctx: W3dModelDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dModelDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dModelDrawModule?: (ctx: W3dModelDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dModelDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dModelDrawProperties?: (ctx: W3dModelDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dModelDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dModelDrawProperties?: (ctx: W3dModelDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dLaserDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dLaserDrawModule?: (ctx: W3dLaserDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dLaserDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dLaserDrawModule?: (ctx: W3dLaserDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dLaserDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dLaserDrawProperties?: (ctx: W3dLaserDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dLaserDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dLaserDrawProperties?: (ctx: W3dLaserDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dDependencyDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dDependencyDrawModule?: (ctx: W3dDependencyDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dDependencyDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dDependencyDrawModule?: (ctx: W3dDependencyDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dDependencyDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dDependencyDrawProperties?: (ctx: W3dDependencyDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dDependencyDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dDependencyDrawProperties?: (ctx: W3dDependencyDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dVehicleDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dVehicleDrawModule?: (ctx: W3dVehicleDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dVehicleDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dVehicleDrawModule?: (ctx: W3dVehicleDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dVehicleDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dVehicleDrawProperties?: (ctx: W3dVehicleDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dVehicleDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dVehicleDrawProperties?: (ctx: W3dVehicleDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dOverlordTankDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dOverlordTankDrawModule?: (ctx: W3dOverlordTankDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dOverlordTankDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dOverlordTankDrawModule?: (ctx: W3dOverlordTankDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dOverlordTankDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dOverlordTankDrawProperties?: (ctx: W3dOverlordTankDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dOverlordTankDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dOverlordTankDrawProperties?: (ctx: W3dOverlordTankDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dProjectileStreamDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dProjectileStreamDrawModule?: (ctx: W3dProjectileStreamDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dProjectileStreamDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dProjectileStreamDrawModule?: (ctx: W3dProjectileStreamDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dProjectileStreamDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dProjectileStreamDrawProperties?: (ctx: W3dProjectileStreamDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dProjectileStreamDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dProjectileStreamDrawProperties?: (ctx: W3dProjectileStreamDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dScienceModelDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dScienceModelDrawModule?: (ctx: W3dScienceModelDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dScienceModelDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dScienceModelDrawModule?: (ctx: W3dScienceModelDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dScienceModelDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dScienceModelDrawProperties?: (ctx: W3dScienceModelDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dScienceModelDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dScienceModelDrawProperties?: (ctx: W3dScienceModelDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dSupplyDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dSupplyDrawModule?: (ctx: W3dSupplyDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dSupplyDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dSupplyDrawModule?: (ctx: W3dSupplyDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dSupplyDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dSupplyDrawProperties?: (ctx: W3dSupplyDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dSupplyDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dSupplyDrawProperties?: (ctx: W3dSupplyDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dTreeDrawModule`.
     * @param ctx the parse tree
     */
    enterW3dTreeDrawModule?: (ctx: W3dTreeDrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dTreeDrawModule`.
     * @param ctx the parse tree
     */
    exitW3dTreeDrawModule?: (ctx: W3dTreeDrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.w3dTreeDrawProperties`.
     * @param ctx the parse tree
     */
    enterW3dTreeDrawProperties?: (ctx: W3dTreeDrawPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.w3dTreeDrawProperties`.
     * @param ctx the parse tree
     */
    exitW3dTreeDrawProperties?: (ctx: W3dTreeDrawPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_conditionBlock`.
     * @param ctx the parse tree
     */
    enterDrawModule_conditionBlock?: (ctx: DrawModule_conditionBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_conditionBlock`.
     * @param ctx the parse tree
     */
    exitDrawModule_conditionBlock?: (ctx: DrawModule_conditionBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_defaultconditionBlock`.
     * @param ctx the parse tree
     */
    enterDrawModule_defaultconditionBlock?: (ctx: DrawModule_defaultconditionBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_defaultconditionBlock`.
     * @param ctx the parse tree
     */
    exitDrawModule_defaultconditionBlock?: (ctx: DrawModule_defaultconditionBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_transitionStateBlock`.
     * @param ctx the parse tree
     */
    enterDrawModule_transitionStateBlock?: (ctx: DrawModule_transitionStateBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_transitionStateBlock`.
     * @param ctx the parse tree
     */
    exitDrawModule_transitionStateBlock?: (ctx: DrawModule_transitionStateBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_conditionStateValue`.
     * @param ctx the parse tree
     */
    enterDrawModule_conditionStateValue?: (ctx: DrawModule_conditionStateValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_conditionStateValue`.
     * @param ctx the parse tree
     */
    exitDrawModule_conditionStateValue?: (ctx: DrawModule_conditionStateValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_conditionStateProperties`.
     * @param ctx the parse tree
     */
    enterDrawModule_conditionStateProperties?: (ctx: DrawModule_conditionStatePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_conditionStateProperties`.
     * @param ctx the parse tree
     */
    exitDrawModule_conditionStateProperties?: (ctx: DrawModule_conditionStatePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_transitionKeyProperty`.
     * @param ctx the parse tree
     */
    enterDrawModule_transitionKeyProperty?: (ctx: DrawModule_transitionKeyPropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_transitionKeyProperty`.
     * @param ctx the parse tree
     */
    exitDrawModule_transitionKeyProperty?: (ctx: DrawModule_transitionKeyPropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_bodyModules`.
     * @param ctx the parse tree
     */
    enterObjectClass_bodyModules?: (ctx: ObjectClass_bodyModulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_bodyModules`.
     * @param ctx the parse tree
     */
    exitObjectClass_bodyModules?: (ctx: ObjectClass_bodyModulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule_value`.
     * @param ctx the parse tree
     */
    enterBodyModule_value?: (ctx: BodyModule_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule_value`.
     * @param ctx the parse tree
     */
    exitBodyModule_value?: (ctx: BodyModule_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule_properties`.
     * @param ctx the parse tree
     */
    enterBodyModule_properties?: (ctx: BodyModule_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule_properties`.
     * @param ctx the parse tree
     */
    exitBodyModule_properties?: (ctx: BodyModule_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule_highlander`.
     * @param ctx the parse tree
     */
    enterBodyModule_highlander?: (ctx: BodyModule_highlanderContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule_highlander`.
     * @param ctx the parse tree
     */
    exitBodyModule_highlander?: (ctx: BodyModule_highlanderContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule_highlander_properties`.
     * @param ctx the parse tree
     */
    enterBodyModule_highlander_properties?: (ctx: BodyModule_highlander_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule_highlander_properties`.
     * @param ctx the parse tree
     */
    exitBodyModule_highlander_properties?: (ctx: BodyModule_highlander_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_behaviorModules`.
     * @param ctx the parse tree
     */
    enterObjectClass_behaviorModules?: (ctx: ObjectClass_behaviorModulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_behaviorModules`.
     * @param ctx the parse tree
     */
    exitObjectClass_behaviorModules?: (ctx: ObjectClass_behaviorModulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_value`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_value?: (ctx: BehaviorModule_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_value`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_value?: (ctx: BehaviorModule_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_animationSteeringUpdate?: (ctx: BehaviorModule_animationSteeringUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_animationSteeringUpdate?: (ctx: BehaviorModule_animationSteeringUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_animationSteeringUpdate_properties?: (ctx: BehaviorModule_animationSteeringUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_animationSteeringUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_animationSteeringUpdate_properties?: (ctx: BehaviorModule_animationSteeringUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_armorUpgradeUpdate?: (ctx: BehaviorModule_armorUpgradeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_armorUpgradeUpdate?: (ctx: BehaviorModule_armorUpgradeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_armorUpgradeUpdate_properties?: (ctx: BehaviorModule_armorUpgradeUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_armorUpgradeUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_armorUpgradeUpdate_properties?: (ctx: BehaviorModule_armorUpgradeUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_assistedTargetingUpdate?: (ctx: BehaviorModule_assistedTargetingUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_assistedTargetingUpdate?: (ctx: BehaviorModule_assistedTargetingUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_assistedTargetingUpdate_properties?: (ctx: BehaviorModule_assistedTargetingUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_assistedTargetingUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_assistedTargetingUpdate_properties?: (ctx: BehaviorModule_assistedTargetingUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoDepositUpdate?: (ctx: BehaviorModule_autoDepositUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoDepositUpdate?: (ctx: BehaviorModule_autoDepositUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoDepositUpdate_properties?: (ctx: BehaviorModule_autoDepositUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoDepositUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoDepositUpdate_properties?: (ctx: BehaviorModule_autoDepositUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoFindHealingUpdate?: (ctx: BehaviorModule_autoFindHealingUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoFindHealingUpdate?: (ctx: BehaviorModule_autoFindHealingUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoFindHealingUpdate_properties?: (ctx: BehaviorModule_autoFindHealingUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoFindHealingUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoFindHealingUpdate_properties?: (ctx: BehaviorModule_autoFindHealingUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoHealBehavior?: (ctx: BehaviorModule_autoHealBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoHealBehavior?: (ctx: BehaviorModule_autoHealBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_autoHealBehavior_properties?: (ctx: BehaviorModule_autoHealBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_autoHealBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_autoHealBehavior_properties?: (ctx: BehaviorModule_autoHealBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_baikonourLaunchPower?: (ctx: BehaviorModule_baikonourLaunchPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_baikonourLaunchPower?: (ctx: BehaviorModule_baikonourLaunchPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_baikonourLaunchPower_properties?: (ctx: BehaviorModule_baikonourLaunchPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_baikonourLaunchPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_baikonourLaunchPower_properties?: (ctx: BehaviorModule_baikonourLaunchPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_baseRegenerateUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_baseRegenerateUpdate?: (ctx: BehaviorModule_baseRegenerateUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_baseRegenerateUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_baseRegenerateUpdate?: (ctx: BehaviorModule_baseRegenerateUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_battleBusSlowDeathBehavior?: (ctx: BehaviorModule_battleBusSlowDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_battleBusSlowDeathBehavior?: (ctx: BehaviorModule_battleBusSlowDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_battleBusSlowDeathBehavior_properties?: (ctx: BehaviorModule_battleBusSlowDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_battleBusSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_battleBusSlowDeathBehavior_properties?: (ctx: BehaviorModule_battleBusSlowDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_battlePlanUpdate?: (ctx: BehaviorModule_battlePlanUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_battlePlanUpdate?: (ctx: BehaviorModule_battlePlanUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_battlePlanUpdate_properties?: (ctx: BehaviorModule_battlePlanUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_battlePlanUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_battlePlanUpdate_properties?: (ctx: BehaviorModule_battlePlanUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_boneFXDamage`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_boneFXDamage?: (ctx: BehaviorModule_boneFXDamageContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_boneFXDamage`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_boneFXDamage?: (ctx: BehaviorModule_boneFXDamageContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_boneFXUpdate?: (ctx: BehaviorModule_boneFXUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_boneFXUpdate?: (ctx: BehaviorModule_boneFXUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_boneFXUpdate_properties?: (ctx: BehaviorModule_boneFXUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_boneFXUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_boneFXUpdate_properties?: (ctx: BehaviorModule_boneFXUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fXList`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fXList?: (ctx: BehaviorModule_fXListContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fXList`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fXList?: (ctx: BehaviorModule_fXListContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_ocl`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_ocl?: (ctx: BehaviorModule_oclContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_ocl`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_ocl?: (ctx: BehaviorModule_oclContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_particleSystem`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_particleSystem?: (ctx: BehaviorModule_particleSystemContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_particleSystem`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_particleSystem?: (ctx: BehaviorModule_particleSystemContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeBehavior?: (ctx: BehaviorModule_bridgeBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeBehavior?: (ctx: BehaviorModule_bridgeBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeBehavior_properties?: (ctx: BehaviorModule_bridgeBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeBehavior_properties?: (ctx: BehaviorModule_bridgeBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeScaffoldBehavior?: (ctx: BehaviorModule_bridgeScaffoldBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeScaffoldBehavior?: (ctx: BehaviorModule_bridgeScaffoldBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeScaffoldBehavior_properties?: (ctx: BehaviorModule_bridgeScaffoldBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeScaffoldBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeScaffoldBehavior_properties?: (ctx: BehaviorModule_bridgeScaffoldBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeTowerBehavior?: (ctx: BehaviorModule_bridgeTowerBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeTowerBehavior?: (ctx: BehaviorModule_bridgeTowerBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bridgeTowerBehavior_properties?: (ctx: BehaviorModule_bridgeTowerBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bridgeTowerBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bridgeTowerBehavior_properties?: (ctx: BehaviorModule_bridgeTowerBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bunkerBusterBehavior?: (ctx: BehaviorModule_bunkerBusterBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bunkerBusterBehavior?: (ctx: BehaviorModule_bunkerBusterBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_bunkerBusterBehavior_properties?: (ctx: BehaviorModule_bunkerBusterBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_bunkerBusterBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_bunkerBusterBehavior_properties?: (ctx: BehaviorModule_bunkerBusterBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cashBountyPower?: (ctx: BehaviorModule_cashBountyPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cashBountyPower?: (ctx: BehaviorModule_cashBountyPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cashBountyPower_properties?: (ctx: BehaviorModule_cashBountyPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cashBountyPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cashBountyPower_properties?: (ctx: BehaviorModule_cashBountyPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cashHackSpecialPower?: (ctx: BehaviorModule_cashHackSpecialPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cashHackSpecialPower?: (ctx: BehaviorModule_cashHackSpecialPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cashHackSpecialPower_properties?: (ctx: BehaviorModule_cashHackSpecialPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cashHackSpecialPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cashHackSpecialPower_properties?: (ctx: BehaviorModule_cashHackSpecialPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_checkpointUpdate?: (ctx: BehaviorModule_checkpointUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_checkpointUpdate?: (ctx: BehaviorModule_checkpointUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_checkpointUpdate_properties?: (ctx: BehaviorModule_checkpointUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_checkpointUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_checkpointUpdate_properties?: (ctx: BehaviorModule_checkpointUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cleanupAreaPower?: (ctx: BehaviorModule_cleanupAreaPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cleanupAreaPower?: (ctx: BehaviorModule_cleanupAreaPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cleanupAreaPower_properties?: (ctx: BehaviorModule_cleanupAreaPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cleanupAreaPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cleanupAreaPower_properties?: (ctx: BehaviorModule_cleanupAreaPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cleanupHazardUpdate?: (ctx: BehaviorModule_cleanupHazardUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cleanupHazardUpdate?: (ctx: BehaviorModule_cleanupHazardUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_cleanupHazardUpdate_properties?: (ctx: BehaviorModule_cleanupHazardUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_cleanupHazardUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_cleanupHazardUpdate_properties?: (ctx: BehaviorModule_cleanupHazardUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_commandButtonHuntUpdate?: (ctx: BehaviorModule_commandButtonHuntUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_commandButtonHuntUpdate?: (ctx: BehaviorModule_commandButtonHuntUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_commandButtonHuntUpdate_properties?: (ctx: BehaviorModule_commandButtonHuntUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_commandButtonHuntUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_commandButtonHuntUpdate_properties?: (ctx: BehaviorModule_commandButtonHuntUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_commandSetUpgrade?: (ctx: BehaviorModule_commandSetUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_commandSetUpgrade?: (ctx: BehaviorModule_commandSetUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_commandSetUpgrade_properties?: (ctx: BehaviorModule_commandSetUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_commandSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_commandSetUpgrade_properties?: (ctx: BehaviorModule_commandSetUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_convertToCarBombCrateCollide?: (ctx: BehaviorModule_convertToCarBombCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_convertToCarBombCrateCollide?: (ctx: BehaviorModule_convertToCarBombCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_convertToCarBombCrateCollide_properties?: (ctx: BehaviorModule_convertToCarBombCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_convertToCarBombCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_convertToCarBombCrateCollide_properties?: (ctx: BehaviorModule_convertToCarBombCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_costModifierUpgrade?: (ctx: BehaviorModule_costModifierUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_costModifierUpgrade?: (ctx: BehaviorModule_costModifierUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_costModifierUpgrade_properties?: (ctx: BehaviorModule_costModifierUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_costModifierUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_costModifierUpgrade_properties?: (ctx: BehaviorModule_costModifierUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_countermeasuresBehavior?: (ctx: BehaviorModule_countermeasuresBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_countermeasuresBehavior?: (ctx: BehaviorModule_countermeasuresBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_countermeasuresBehavior_properties?: (ctx: BehaviorModule_countermeasuresBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_countermeasuresBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_countermeasuresBehavior_properties?: (ctx: BehaviorModule_countermeasuresBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_createCrateDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_createCrateDie?: (ctx: BehaviorModule_createCrateDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_createCrateDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_createCrateDie?: (ctx: BehaviorModule_createCrateDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_createCrateDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_createCrateDie_properties?: (ctx: BehaviorModule_createCrateDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_createCrateDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_createCrateDie_properties?: (ctx: BehaviorModule_createCrateDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_createObjectDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_createObjectDie?: (ctx: BehaviorModule_createObjectDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_createObjectDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_createObjectDie?: (ctx: BehaviorModule_createObjectDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_createObjectDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_createObjectDie_properties?: (ctx: BehaviorModule_createObjectDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_createObjectDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_createObjectDie_properties?: (ctx: BehaviorModule_createObjectDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_convertToHijackedVehicleCrateCollide?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_convertToHijackedVehicleCrateCollide?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_convertToHijackedVehicleCrateCollide_properties?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_convertToHijackedVehicleCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_convertToHijackedVehicleCrateCollide_properties?: (ctx: BehaviorModule_convertToHijackedVehicleCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_crushDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_crushDie?: (ctx: BehaviorModule_crushDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_crushDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_crushDie?: (ctx: BehaviorModule_crushDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_crushDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_crushDie_properties?: (ctx: BehaviorModule_crushDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_crushDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_crushDie_properties?: (ctx: BehaviorModule_crushDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_damDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_damDie?: (ctx: BehaviorModule_damDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_damDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_damDie?: (ctx: BehaviorModule_damDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_damDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_damDie_properties?: (ctx: BehaviorModule_damDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_damDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_damDie_properties?: (ctx: BehaviorModule_damDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_defaultProductionExitUpdate?: (ctx: BehaviorModule_defaultProductionExitUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_defaultProductionExitUpdate?: (ctx: BehaviorModule_defaultProductionExitUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_defaultProductionExitUpdate_properties?: (ctx: BehaviorModule_defaultProductionExitUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_defaultProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_defaultProductionExitUpdate_properties?: (ctx: BehaviorModule_defaultProductionExitUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deletionUpdate?: (ctx: BehaviorModule_deletionUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deletionUpdate?: (ctx: BehaviorModule_deletionUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deletionUpdate_properties?: (ctx: BehaviorModule_deletionUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deletionUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deletionUpdate_properties?: (ctx: BehaviorModule_deletionUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_demoTrapUpdate?: (ctx: BehaviorModule_demoTrapUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_demoTrapUpdate?: (ctx: BehaviorModule_demoTrapUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_demoTrapUpdate_properties?: (ctx: BehaviorModule_demoTrapUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_demoTrapUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_demoTrapUpdate_properties?: (ctx: BehaviorModule_demoTrapUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_destroyDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_destroyDie?: (ctx: BehaviorModule_destroyDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_destroyDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_destroyDie?: (ctx: BehaviorModule_destroyDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_destroyDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_destroyDie_properties?: (ctx: BehaviorModule_destroyDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_destroyDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_destroyDie_properties?: (ctx: BehaviorModule_destroyDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dumbProjectileBehavior?: (ctx: BehaviorModule_dumbProjectileBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dumbProjectileBehavior?: (ctx: BehaviorModule_dumbProjectileBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dumbProjectileBehavior_properties?: (ctx: BehaviorModule_dumbProjectileBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dumbProjectileBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dumbProjectileBehavior_properties?: (ctx: BehaviorModule_dumbProjectileBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dynamicShroudClearingRangeUpdate?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dynamicShroudClearingRangeUpdate?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dynamicShroudClearingRangeUpdate_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dynamicShroudClearingRangeUpdate_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dynamicShroudClearingRangeUpdate_decal?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decalContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dynamicShroudClearingRangeUpdate_decal?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decalContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dynamicShroudClearingRangeUpdate_decal_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decal_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dynamicShroudClearingRangeUpdate_decal_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dynamicShroudClearingRangeUpdate_decal_properties?: (ctx: BehaviorModule_dynamicShroudClearingRangeUpdate_decal_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_empUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_empUpdate?: (ctx: BehaviorModule_empUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_empUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_empUpdate?: (ctx: BehaviorModule_empUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_empUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_empUpdate_properties?: (ctx: BehaviorModule_empUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_empUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_empUpdate_properties?: (ctx: BehaviorModule_empUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_ejectPilotDie?: (ctx: BehaviorModule_ejectPilotDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_ejectPilotDie?: (ctx: BehaviorModule_ejectPilotDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_ejectPilotDie_properties?: (ctx: BehaviorModule_ejectPilotDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_ejectPilotDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_ejectPilotDie_properties?: (ctx: BehaviorModule_ejectPilotDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_enemyNearUpdate?: (ctx: BehaviorModule_enemyNearUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_enemyNearUpdate?: (ctx: BehaviorModule_enemyNearUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_enemyNearUpdate_properties?: (ctx: BehaviorModule_enemyNearUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_enemyNearUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_enemyNearUpdate_properties?: (ctx: BehaviorModule_enemyNearUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_experienceScalarUpgrade?: (ctx: BehaviorModule_experienceScalarUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_experienceScalarUpgrade?: (ctx: BehaviorModule_experienceScalarUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_experienceScalarUpgrade_properties?: (ctx: BehaviorModule_experienceScalarUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_experienceScalarUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_experienceScalarUpgrade_properties?: (ctx: BehaviorModule_experienceScalarUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fxListDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fxListDie?: (ctx: BehaviorModule_fxListDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fxListDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fxListDie?: (ctx: BehaviorModule_fxListDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fxListDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fxListDie_properties?: (ctx: BehaviorModule_fxListDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fxListDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fxListDie_properties?: (ctx: BehaviorModule_fxListDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireOCLAfterWeaponCooldownUpdate?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireOCLAfterWeaponCooldownUpdate?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireOCLAfterWeaponCooldownUpdate_properties?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireOCLAfterWeaponCooldownUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireOCLAfterWeaponCooldownUpdate_properties?: (ctx: BehaviorModule_fireOCLAfterWeaponCooldownUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireSpreadUpdate?: (ctx: BehaviorModule_fireSpreadUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireSpreadUpdate?: (ctx: BehaviorModule_fireSpreadUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireSpreadUpdate_properties?: (ctx: BehaviorModule_fireSpreadUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireSpreadUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireSpreadUpdate_properties?: (ctx: BehaviorModule_fireSpreadUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponCollide?: (ctx: BehaviorModule_fireWeaponCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponCollide?: (ctx: BehaviorModule_fireWeaponCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponCollide_properties?: (ctx: BehaviorModule_fireWeaponCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponCollide_properties?: (ctx: BehaviorModule_fireWeaponCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponPower?: (ctx: BehaviorModule_fireWeaponPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponPower?: (ctx: BehaviorModule_fireWeaponPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponPower_properties?: (ctx: BehaviorModule_fireWeaponPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponPower_properties?: (ctx: BehaviorModule_fireWeaponPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponUpdate?: (ctx: BehaviorModule_fireWeaponUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponUpdate?: (ctx: BehaviorModule_fireWeaponUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponUpdate_properties?: (ctx: BehaviorModule_fireWeaponUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponUpdate_properties?: (ctx: BehaviorModule_fireWeaponUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponWhenDamagedBehavior?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponWhenDamagedBehavior?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponWhenDamagedBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDamagedBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponWhenDamagedBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDamagedBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponWhenDeadBehavior?: (ctx: BehaviorModule_fireWeaponWhenDeadBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponWhenDeadBehavior?: (ctx: BehaviorModule_fireWeaponWhenDeadBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fireWeaponWhenDeadBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDeadBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fireWeaponWhenDeadBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fireWeaponWhenDeadBehavior_properties?: (ctx: BehaviorModule_fireWeaponWhenDeadBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_firestormDynamicGeometryInfoUpdate?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_firestormDynamicGeometryInfoUpdate?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_firestormDynamicGeometryInfoUpdate_properties?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_firestormDynamicGeometryInfoUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_firestormDynamicGeometryInfoUpdate_properties?: (ctx: BehaviorModule_firestormDynamicGeometryInfoUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_flammableUpdate?: (ctx: BehaviorModule_flammableUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_flammableUpdate?: (ctx: BehaviorModule_flammableUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_flammableUpdate_properties?: (ctx: BehaviorModule_flammableUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_flammableUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_flammableUpdate_properties?: (ctx: BehaviorModule_flammableUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_flightDeckBehavior?: (ctx: BehaviorModule_flightDeckBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_flightDeckBehavior?: (ctx: BehaviorModule_flightDeckBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_flightDeckBehavior_properties?: (ctx: BehaviorModule_flightDeckBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_flightDeckBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_flightDeckBehavior_properties?: (ctx: BehaviorModule_flightDeckBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_floatUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_floatUpdate?: (ctx: BehaviorModule_floatUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_floatUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_floatUpdate?: (ctx: BehaviorModule_floatUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_floatUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_floatUpdate_properties?: (ctx: BehaviorModule_floatUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_floatUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_floatUpdate_properties?: (ctx: BehaviorModule_floatUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_garrisonContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_garrisonContain?: (ctx: BehaviorModule_garrisonContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_garrisonContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_garrisonContain?: (ctx: BehaviorModule_garrisonContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_garrisonContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_garrisonContain_properties?: (ctx: BehaviorModule_garrisonContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_garrisonContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_garrisonContain_properties?: (ctx: BehaviorModule_garrisonContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_generateMinefieldBehavior?: (ctx: BehaviorModule_generateMinefieldBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_generateMinefieldBehavior?: (ctx: BehaviorModule_generateMinefieldBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_generateMinefieldBehavior_properties?: (ctx: BehaviorModule_generateMinefieldBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_generateMinefieldBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_generateMinefieldBehavior_properties?: (ctx: BehaviorModule_generateMinefieldBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantScienceUpgrade?: (ctx: BehaviorModule_grantScienceUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantScienceUpgrade?: (ctx: BehaviorModule_grantScienceUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantScienceUpgrade_properties?: (ctx: BehaviorModule_grantScienceUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantScienceUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantScienceUpgrade_properties?: (ctx: BehaviorModule_grantScienceUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantStealthBehavior?: (ctx: BehaviorModule_grantStealthBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantStealthBehavior?: (ctx: BehaviorModule_grantStealthBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantStealthBehavior_properties?: (ctx: BehaviorModule_grantStealthBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantStealthBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantStealthBehavior_properties?: (ctx: BehaviorModule_grantStealthBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantUpgradeCreate?: (ctx: BehaviorModule_grantUpgradeCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantUpgradeCreate?: (ctx: BehaviorModule_grantUpgradeCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_grantUpgradeCreate_properties?: (ctx: BehaviorModule_grantUpgradeCreate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_grantUpgradeCreate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_grantUpgradeCreate_properties?: (ctx: BehaviorModule_grantUpgradeCreate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_healContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_healContain?: (ctx: BehaviorModule_healContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_healContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_healContain?: (ctx: BehaviorModule_healContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_healContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_healContain_properties?: (ctx: BehaviorModule_healContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_healContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_healContain_properties?: (ctx: BehaviorModule_healContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_heightDieUpdate?: (ctx: BehaviorModule_heightDieUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_heightDieUpdate?: (ctx: BehaviorModule_heightDieUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_heightDieUpdate_properties?: (ctx: BehaviorModule_heightDieUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_heightDieUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_heightDieUpdate_properties?: (ctx: BehaviorModule_heightDieUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_helicopterSlowDeathBehavior?: (ctx: BehaviorModule_helicopterSlowDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_helicopterSlowDeathBehavior?: (ctx: BehaviorModule_helicopterSlowDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_helicopterSlowDeathBehavior_properties?: (ctx: BehaviorModule_helicopterSlowDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_helicopterSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_helicopterSlowDeathBehavior_properties?: (ctx: BehaviorModule_helicopterSlowDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_helixContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_helixContain?: (ctx: BehaviorModule_helixContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_helixContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_helixContain?: (ctx: BehaviorModule_helixContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_helixContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_helixContain_properties?: (ctx: BehaviorModule_helixContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_helixContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_helixContain_properties?: (ctx: BehaviorModule_helixContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hijackerUpdate?: (ctx: BehaviorModule_hijackerUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hijackerUpdate?: (ctx: BehaviorModule_hijackerUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hijackerUpdate_properties?: (ctx: BehaviorModule_hijackerUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hijackerUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hijackerUpdate_properties?: (ctx: BehaviorModule_hijackerUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hordeUpdate?: (ctx: BehaviorModule_hordeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hordeUpdate?: (ctx: BehaviorModule_hordeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hordeUpdate_properties?: (ctx: BehaviorModule_hordeUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hordeUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hordeUpdate_properties?: (ctx: BehaviorModule_hordeUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_instantDeathBehavior?: (ctx: BehaviorModule_instantDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_instantDeathBehavior?: (ctx: BehaviorModule_instantDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_instantDeathBehavior_properties?: (ctx: BehaviorModule_instantDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_instantDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_instantDeathBehavior_properties?: (ctx: BehaviorModule_instantDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_internetHackContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_internetHackContain?: (ctx: BehaviorModule_internetHackContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_internetHackContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_internetHackContain?: (ctx: BehaviorModule_internetHackContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_internetHackContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_internetHackContain_properties?: (ctx: BehaviorModule_internetHackContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_internetHackContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_internetHackContain_properties?: (ctx: BehaviorModule_internetHackContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_jetSlowDeathBehavior?: (ctx: BehaviorModule_jetSlowDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_jetSlowDeathBehavior?: (ctx: BehaviorModule_jetSlowDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_jetSlowDeathBehavior_properties?: (ctx: BehaviorModule_jetSlowDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_jetSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_jetSlowDeathBehavior_properties?: (ctx: BehaviorModule_jetSlowDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_keepObjectDie?: (ctx: BehaviorModule_keepObjectDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_keepObjectDie?: (ctx: BehaviorModule_keepObjectDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_keepObjectDie_properties?: (ctx: BehaviorModule_keepObjectDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_keepObjectDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_keepObjectDie_properties?: (ctx: BehaviorModule_keepObjectDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_leafletDropBehavior?: (ctx: BehaviorModule_leafletDropBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_leafletDropBehavior?: (ctx: BehaviorModule_leafletDropBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_leafletDropBehavior_properties?: (ctx: BehaviorModule_leafletDropBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_leafletDropBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_leafletDropBehavior_properties?: (ctx: BehaviorModule_leafletDropBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_lifetimeUpdate?: (ctx: BehaviorModule_lifetimeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_lifetimeUpdate?: (ctx: BehaviorModule_lifetimeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_lifetimeUpdate_properties?: (ctx: BehaviorModule_lifetimeUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_lifetimeUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_lifetimeUpdate_properties?: (ctx: BehaviorModule_lifetimeUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_lockWeaponCreate?: (ctx: BehaviorModule_lockWeaponCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_lockWeaponCreate?: (ctx: BehaviorModule_lockWeaponCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_lockWeaponCreate_properties?: (ctx: BehaviorModule_lockWeaponCreate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_lockWeaponCreate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_lockWeaponCreate_properties?: (ctx: BehaviorModule_lockWeaponCreate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_locomotorSetUpgrade?: (ctx: BehaviorModule_locomotorSetUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_locomotorSetUpgrade?: (ctx: BehaviorModule_locomotorSetUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_locomotorSetUpgrade_properties?: (ctx: BehaviorModule_locomotorSetUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_locomotorSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_locomotorSetUpgrade_properties?: (ctx: BehaviorModule_locomotorSetUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_maxHealthUpgrade?: (ctx: BehaviorModule_maxHealthUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_maxHealthUpgrade?: (ctx: BehaviorModule_maxHealthUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_maxHealthUpgrade_properties?: (ctx: BehaviorModule_maxHealthUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_maxHealthUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_maxHealthUpgrade_properties?: (ctx: BehaviorModule_maxHealthUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_minefieldBehavior?: (ctx: BehaviorModule_minefieldBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_minefieldBehavior?: (ctx: BehaviorModule_minefieldBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_minefieldBehavior_properties?: (ctx: BehaviorModule_minefieldBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_minefieldBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_minefieldBehavior_properties?: (ctx: BehaviorModule_minefieldBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_missileLauncherBuildingUpdate?: (ctx: BehaviorModule_missileLauncherBuildingUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_missileLauncherBuildingUpdate?: (ctx: BehaviorModule_missileLauncherBuildingUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_missileLauncherBuildingUpdate_properties?: (ctx: BehaviorModule_missileLauncherBuildingUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_missileLauncherBuildingUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_missileLauncherBuildingUpdate_properties?: (ctx: BehaviorModule_missileLauncherBuildingUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_mobMemberSlavedUpdate?: (ctx: BehaviorModule_mobMemberSlavedUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_mobMemberSlavedUpdate?: (ctx: BehaviorModule_mobMemberSlavedUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_mobMemberSlavedUpdate_properties?: (ctx: BehaviorModule_mobMemberSlavedUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_mobMemberSlavedUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_mobMemberSlavedUpdate_properties?: (ctx: BehaviorModule_mobMemberSlavedUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_modelConditionUpgrade?: (ctx: BehaviorModule_modelConditionUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_modelConditionUpgrade?: (ctx: BehaviorModule_modelConditionUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_modelConditionUpgrade_properties?: (ctx: BehaviorModule_modelConditionUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_modelConditionUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_modelConditionUpgrade_properties?: (ctx: BehaviorModule_modelConditionUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_moneyCrateCollide?: (ctx: BehaviorModule_moneyCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_moneyCrateCollide?: (ctx: BehaviorModule_moneyCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_moneyCrateCollide_properties?: (ctx: BehaviorModule_moneyCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_moneyCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_moneyCrateCollide_properties?: (ctx: BehaviorModule_moneyCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronBlastBehavior?: (ctx: BehaviorModule_neutronBlastBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronBlastBehavior?: (ctx: BehaviorModule_neutronBlastBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronBlastBehavior_properties?: (ctx: BehaviorModule_neutronBlastBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronBlastBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronBlastBehavior_properties?: (ctx: BehaviorModule_neutronBlastBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileSlowDeathBehavior?: (ctx: BehaviorModule_neutronMissileSlowDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileSlowDeathBehavior?: (ctx: BehaviorModule_neutronMissileSlowDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileSlowDeathBehavior_properties?: (ctx: BehaviorModule_neutronMissileSlowDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileSlowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileSlowDeathBehavior_properties?: (ctx: BehaviorModule_neutronMissileSlowDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileUpdate?: (ctx: BehaviorModule_neutronMissileUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileUpdate?: (ctx: BehaviorModule_neutronMissileUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileUpdate_properties?: (ctx: BehaviorModule_neutronMissileUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileUpdate_properties?: (ctx: BehaviorModule_neutronMissileUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileUpdate_properties_decal?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decalContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileUpdate_properties_decal?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decalContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_neutronMissileUpdate_properties_decal_properties?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decal_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_neutronMissileUpdate_properties_decal_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_neutronMissileUpdate_properties_decal_properties?: (ctx: BehaviorModule_neutronMissileUpdate_properties_decal_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_oclSpecialPower?: (ctx: BehaviorModule_oclSpecialPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_oclSpecialPower?: (ctx: BehaviorModule_oclSpecialPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_oclSpecialPower_properties?: (ctx: BehaviorModule_oclSpecialPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_oclSpecialPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_oclSpecialPower_properties?: (ctx: BehaviorModule_oclSpecialPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_oclUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_oclUpdate?: (ctx: BehaviorModule_oclUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_oclUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_oclUpdate?: (ctx: BehaviorModule_oclUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_oclUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_oclUpdate_properties?: (ctx: BehaviorModule_oclUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_oclUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_oclUpdate_properties?: (ctx: BehaviorModule_oclUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_objectCreationUpgrade?: (ctx: BehaviorModule_objectCreationUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_objectCreationUpgrade?: (ctx: BehaviorModule_objectCreationUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_objectCreationUpgrade_properties?: (ctx: BehaviorModule_objectCreationUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_objectCreationUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_objectCreationUpgrade_properties?: (ctx: BehaviorModule_objectCreationUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_overchargeBehavior?: (ctx: BehaviorModule_overchargeBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_overchargeBehavior?: (ctx: BehaviorModule_overchargeBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_overchargeBehavior_properties?: (ctx: BehaviorModule_overchargeBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_overchargeBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_overchargeBehavior_properties?: (ctx: BehaviorModule_overchargeBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_overlordContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_overlordContain?: (ctx: BehaviorModule_overlordContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_overlordContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_overlordContain?: (ctx: BehaviorModule_overlordContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_overlordContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_overlordContain_properties?: (ctx: BehaviorModule_overlordContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_overlordContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_overlordContain_properties?: (ctx: BehaviorModule_overlordContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_parachuteContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_parachuteContain?: (ctx: BehaviorModule_parachuteContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_parachuteContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_parachuteContain?: (ctx: BehaviorModule_parachuteContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_parachuteContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_parachuteContain_properties?: (ctx: BehaviorModule_parachuteContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_parachuteContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_parachuteContain_properties?: (ctx: BehaviorModule_parachuteContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_parkingPlaceBehavior?: (ctx: BehaviorModule_parkingPlaceBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_parkingPlaceBehavior?: (ctx: BehaviorModule_parkingPlaceBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_parkingPlaceBehavior_properties?: (ctx: BehaviorModule_parkingPlaceBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_parkingPlaceBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_parkingPlaceBehavior_properties?: (ctx: BehaviorModule_parkingPlaceBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_particleUplinkCannonUpdate?: (ctx: BehaviorModule_particleUplinkCannonUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_particleUplinkCannonUpdate?: (ctx: BehaviorModule_particleUplinkCannonUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_particleUplinkCannonUpdate_properties?: (ctx: BehaviorModule_particleUplinkCannonUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_particleUplinkCannonUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_particleUplinkCannonUpdate_properties?: (ctx: BehaviorModule_particleUplinkCannonUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_passengersFireUpgrade?: (ctx: BehaviorModule_passengersFireUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_passengersFireUpgrade?: (ctx: BehaviorModule_passengersFireUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_passengersFireUpgrade_properties?: (ctx: BehaviorModule_passengersFireUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_passengersFireUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_passengersFireUpgrade_properties?: (ctx: BehaviorModule_passengersFireUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_physicsBehavior?: (ctx: BehaviorModule_physicsBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_physicsBehavior?: (ctx: BehaviorModule_physicsBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_physicsBehavior_properties?: (ctx: BehaviorModule_physicsBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_physicsBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_physicsBehavior_properties?: (ctx: BehaviorModule_physicsBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_pilotFindVehicleUpdate?: (ctx: BehaviorModule_pilotFindVehicleUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_pilotFindVehicleUpdate?: (ctx: BehaviorModule_pilotFindVehicleUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_pilotFindVehicleUpdate_properties?: (ctx: BehaviorModule_pilotFindVehicleUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_pilotFindVehicleUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_pilotFindVehicleUpdate_properties?: (ctx: BehaviorModule_pilotFindVehicleUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_pointDefenseLaserUpdate?: (ctx: BehaviorModule_pointDefenseLaserUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_pointDefenseLaserUpdate?: (ctx: BehaviorModule_pointDefenseLaserUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_pointDefenseLaserUpdate_properties?: (ctx: BehaviorModule_pointDefenseLaserUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_pointDefenseLaserUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_pointDefenseLaserUpdate_properties?: (ctx: BehaviorModule_pointDefenseLaserUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_poisonedBehavior?: (ctx: BehaviorModule_poisonedBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_poisonedBehavior?: (ctx: BehaviorModule_poisonedBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_poisonedBehavior_properties?: (ctx: BehaviorModule_poisonedBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_poisonedBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_poisonedBehavior_properties?: (ctx: BehaviorModule_poisonedBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_powerPlantUpdate?: (ctx: BehaviorModule_powerPlantUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_powerPlantUpdate?: (ctx: BehaviorModule_powerPlantUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_powerPlantUpdate_properties?: (ctx: BehaviorModule_powerPlantUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_powerPlantUpdate_properties?: (ctx: BehaviorModule_powerPlantUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_powerPlantUpgrade?: (ctx: BehaviorModule_powerPlantUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_powerPlantUpgrade?: (ctx: BehaviorModule_powerPlantUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_powerPlantUpgrade_properties?: (ctx: BehaviorModule_powerPlantUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_powerPlantUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_powerPlantUpgrade_properties?: (ctx: BehaviorModule_powerPlantUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_preorderCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_preorderCreate?: (ctx: BehaviorModule_preorderCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_preorderCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_preorderCreate?: (ctx: BehaviorModule_preorderCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_projectileStreamUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_projectileStreamUpdate?: (ctx: BehaviorModule_projectileStreamUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_projectileStreamUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_projectileStreamUpdate?: (ctx: BehaviorModule_projectileStreamUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_propagandaTowerBehavior?: (ctx: BehaviorModule_propagandaTowerBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_propagandaTowerBehavior?: (ctx: BehaviorModule_propagandaTowerBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_propagandaTowerBehavior_properties?: (ctx: BehaviorModule_propagandaTowerBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_propagandaTowerBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_propagandaTowerBehavior_properties?: (ctx: BehaviorModule_propagandaTowerBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_productionUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_productionUpdate?: (ctx: BehaviorModule_productionUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_productionUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_productionUpdate?: (ctx: BehaviorModule_productionUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_productionUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_productionUpdate_properties?: (ctx: BehaviorModule_productionUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_productionUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_productionUpdate_properties?: (ctx: BehaviorModule_productionUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_queueProductionExitUpdate?: (ctx: BehaviorModule_queueProductionExitUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_queueProductionExitUpdate?: (ctx: BehaviorModule_queueProductionExitUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_queueProductionExitUpdate_properties?: (ctx: BehaviorModule_queueProductionExitUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_queueProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_queueProductionExitUpdate_properties?: (ctx: BehaviorModule_queueProductionExitUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_radarUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_radarUpdate?: (ctx: BehaviorModule_radarUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_radarUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_radarUpdate?: (ctx: BehaviorModule_radarUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_radarUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_radarUpdate_properties?: (ctx: BehaviorModule_radarUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_radarUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_radarUpdate_properties?: (ctx: BehaviorModule_radarUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_radarUpgrade?: (ctx: BehaviorModule_radarUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_radarUpgrade?: (ctx: BehaviorModule_radarUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_radarUpgrade_properties?: (ctx: BehaviorModule_radarUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_radarUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_radarUpgrade_properties?: (ctx: BehaviorModule_radarUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_radiusDecalUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_radiusDecalUpdate?: (ctx: BehaviorModule_radiusDecalUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_radiusDecalUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_radiusDecalUpdate?: (ctx: BehaviorModule_radiusDecalUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportContain?: (ctx: BehaviorModule_railedTransportContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportContain?: (ctx: BehaviorModule_railedTransportContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportContain_properties?: (ctx: BehaviorModule_railedTransportContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportContain_properties?: (ctx: BehaviorModule_railedTransportContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportDockUpdate?: (ctx: BehaviorModule_railedTransportDockUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportDockUpdate?: (ctx: BehaviorModule_railedTransportDockUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportDockUpdate_properties?: (ctx: BehaviorModule_railedTransportDockUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportDockUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportDockUpdate_properties?: (ctx: BehaviorModule_railedTransportDockUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railroadBehavior?: (ctx: BehaviorModule_railroadBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railroadBehavior?: (ctx: BehaviorModule_railroadBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railroadBehavior_properties?: (ctx: BehaviorModule_railroadBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railroadBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railroadBehavior_properties?: (ctx: BehaviorModule_railroadBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_rebuildHoleBehavior?: (ctx: BehaviorModule_rebuildHoleBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_rebuildHoleBehavior?: (ctx: BehaviorModule_rebuildHoleBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_rebuildHoleBehavior_properties?: (ctx: BehaviorModule_rebuildHoleBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_rebuildHoleBehavior_properties?: (ctx: BehaviorModule_rebuildHoleBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_rebuildHoleExposeDie?: (ctx: BehaviorModule_rebuildHoleExposeDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_rebuildHoleExposeDie?: (ctx: BehaviorModule_rebuildHoleExposeDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_rebuildHoleExposeDie_properties?: (ctx: BehaviorModule_rebuildHoleExposeDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_rebuildHoleExposeDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_rebuildHoleExposeDie_properties?: (ctx: BehaviorModule_rebuildHoleExposeDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_repairDockUpdate?: (ctx: BehaviorModule_repairDockUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_repairDockUpdate?: (ctx: BehaviorModule_repairDockUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_repairDockUpdate_properties?: (ctx: BehaviorModule_repairDockUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_repairDockUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_repairDockUpdate_properties?: (ctx: BehaviorModule_repairDockUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_replaceObjectUpgrade?: (ctx: BehaviorModule_replaceObjectUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_replaceObjectUpgrade?: (ctx: BehaviorModule_replaceObjectUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_replaceObjectUpgrade_properties?: (ctx: BehaviorModule_replaceObjectUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_replaceObjectUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_replaceObjectUpgrade_properties?: (ctx: BehaviorModule_replaceObjectUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_riderChangeContain?: (ctx: BehaviorModule_riderChangeContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_riderChangeContain?: (ctx: BehaviorModule_riderChangeContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_riderChangeContain_properties?: (ctx: BehaviorModule_riderChangeContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_riderChangeContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_riderChangeContain_properties?: (ctx: BehaviorModule_riderChangeContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageCommandCenterCrateCollide?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageCommandCenterCrateCollide?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageCommandCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageCommandCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageCommandCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageCommandCenterCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageFakeBuildingCrateCollide?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageFakeBuildingCrateCollide?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageFakeBuildingCrateCollide_properties?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageFakeBuildingCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageFakeBuildingCrateCollide_properties?: (ctx: BehaviorModule_sabotageFakeBuildingCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageInternetCenterCrateCollide?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageInternetCenterCrateCollide?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageInternetCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageInternetCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageInternetCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageInternetCenterCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageMilitaryFactoryCrateCollide?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageMilitaryFactoryCrateCollide?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageMilitaryFactoryCrateCollide_properties?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageMilitaryFactoryCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageMilitaryFactoryCrateCollide_properties?: (ctx: BehaviorModule_sabotageMilitaryFactoryCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotagePowerPlantCrateCollide?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotagePowerPlantCrateCollide?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotagePowerPlantCrateCollide_properties?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotagePowerPlantCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotagePowerPlantCrateCollide_properties?: (ctx: BehaviorModule_sabotagePowerPlantCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageSuperweaponCrateCollide?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageSuperweaponCrateCollide?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageSuperweaponCrateCollide_properties?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageSuperweaponCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageSuperweaponCrateCollide_properties?: (ctx: BehaviorModule_sabotageSuperweaponCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageSupplyCenterCrateCollide?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageSupplyCenterCrateCollide?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_sabotageSupplyCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_sabotageSupplyCenterCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_sabotageSupplyCenterCrateCollide_properties?: (ctx: BehaviorModule_sabotageSupplyCenterCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_salvageCrateCollide?: (ctx: BehaviorModule_salvageCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_salvageCrateCollide?: (ctx: BehaviorModule_salvageCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_salvageCrateCollide_properties?: (ctx: BehaviorModule_salvageCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_salvageCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_salvageCrateCollide_properties?: (ctx: BehaviorModule_salvageCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_slavedUpdate?: (ctx: BehaviorModule_slavedUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_slavedUpdate?: (ctx: BehaviorModule_slavedUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_slavedUpdate_properties?: (ctx: BehaviorModule_slavedUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_slavedUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_slavedUpdate_properties?: (ctx: BehaviorModule_slavedUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_slowDeathBehavior?: (ctx: BehaviorModule_slowDeathBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_slowDeathBehavior?: (ctx: BehaviorModule_slowDeathBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_slowDeathBehavior_properties?: (ctx: BehaviorModule_slowDeathBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_slowDeathBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_slowDeathBehavior_properties?: (ctx: BehaviorModule_slowDeathBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_smartBombTargetHomingUpdate?: (ctx: BehaviorModule_smartBombTargetHomingUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_smartBombTargetHomingUpdate?: (ctx: BehaviorModule_smartBombTargetHomingUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_smartBombTargetHomingUpdate_properties?: (ctx: BehaviorModule_smartBombTargetHomingUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_smartBombTargetHomingUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_smartBombTargetHomingUpdate_properties?: (ctx: BehaviorModule_smartBombTargetHomingUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spawnBehavior?: (ctx: BehaviorModule_spawnBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spawnBehavior?: (ctx: BehaviorModule_spawnBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spawnBehavior_properties?: (ctx: BehaviorModule_spawnBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spawnBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spawnBehavior_properties?: (ctx: BehaviorModule_spawnBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spawnPointProductionExitUpdate?: (ctx: BehaviorModule_spawnPointProductionExitUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spawnPointProductionExitUpdate?: (ctx: BehaviorModule_spawnPointProductionExitUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spawnPointProductionExitUpdate_properties?: (ctx: BehaviorModule_spawnPointProductionExitUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spawnPointProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spawnPointProductionExitUpdate_properties?: (ctx: BehaviorModule_spawnPointProductionExitUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialAbility`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialAbility?: (ctx: BehaviorModule_specialAbilityContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialAbility`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialAbility?: (ctx: BehaviorModule_specialAbilityContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialAbility_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialAbility_properties?: (ctx: BehaviorModule_specialAbility_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialAbility_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialAbility_properties?: (ctx: BehaviorModule_specialAbility_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialAbilityUpdate?: (ctx: BehaviorModule_specialAbilityUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialAbilityUpdate?: (ctx: BehaviorModule_specialAbilityUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialAbilityUpdate_properties?: (ctx: BehaviorModule_specialAbilityUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialAbilityUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialAbilityUpdate_properties?: (ctx: BehaviorModule_specialAbilityUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialPowerCompletionDie?: (ctx: BehaviorModule_specialPowerCompletionDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialPowerCompletionDie?: (ctx: BehaviorModule_specialPowerCompletionDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialPowerCompletionDie_properties?: (ctx: BehaviorModule_specialPowerCompletionDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCompletionDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialPowerCompletionDie_properties?: (ctx: BehaviorModule_specialPowerCompletionDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_specialPowerCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_specialPowerCreate?: (ctx: BehaviorModule_specialPowerCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_specialPowerCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_specialPowerCreate?: (ctx: BehaviorModule_specialPowerCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipDeploymentUpdate?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipDeploymentUpdate?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipDeploymentUpdate_properties?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipDeploymentUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipDeploymentUpdate_properties?: (ctx: BehaviorModule_spectreGunshipDeploymentUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate?: (ctx: BehaviorModule_spectreGunshipUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate?: (ctx: BehaviorModule_spectreGunshipUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate_attackareadecal?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecalContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate_attackareadecal?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecalContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate_attackareadecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecal_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_attackareadecal_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate_attackareadecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_attackareadecal_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate_targetingreticleDecal?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecalContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate_targetingreticleDecal?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecalContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecal_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spectreGunshipUpdate_targetingreticleDecal_properties?: (ctx: BehaviorModule_spectreGunshipUpdate_targetingreticleDecal_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spyVisionSpecialPower?: (ctx: BehaviorModule_spyVisionSpecialPowerContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spyVisionSpecialPower?: (ctx: BehaviorModule_spyVisionSpecialPowerContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spyVisionSpecialPower_properties?: (ctx: BehaviorModule_spyVisionSpecialPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spyVisionSpecialPower_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spyVisionSpecialPower_properties?: (ctx: BehaviorModule_spyVisionSpecialPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spyVisionUpdate?: (ctx: BehaviorModule_spyVisionUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spyVisionUpdate?: (ctx: BehaviorModule_spyVisionUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_spyVisionUpdate_properties?: (ctx: BehaviorModule_spyVisionUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_spyVisionUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_spyVisionUpdate_properties?: (ctx: BehaviorModule_spyVisionUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_squishCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_squishCollide?: (ctx: BehaviorModule_squishCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_squishCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_squishCollide?: (ctx: BehaviorModule_squishCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_statusBitUpgrade?: (ctx: BehaviorModule_statusBitUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_statusBitUpgrade?: (ctx: BehaviorModule_statusBitUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_statusBitUpgrade_properties?: (ctx: BehaviorModule_statusBitUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_statusBitUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_statusBitUpgrade_properties?: (ctx: BehaviorModule_statusBitUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthDetectorUpdate?: (ctx: BehaviorModule_stealthDetectorUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthDetectorUpdate?: (ctx: BehaviorModule_stealthDetectorUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthDetectorUpdate_properties?: (ctx: BehaviorModule_stealthDetectorUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthDetectorUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthDetectorUpdate_properties?: (ctx: BehaviorModule_stealthDetectorUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthUpdate?: (ctx: BehaviorModule_stealthUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthUpdate?: (ctx: BehaviorModule_stealthUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthUpdate_properties?: (ctx: BehaviorModule_stealthUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthUpdate_properties?: (ctx: BehaviorModule_stealthUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthUpgrade?: (ctx: BehaviorModule_stealthUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthUpgrade?: (ctx: BehaviorModule_stealthUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stealthUpgrade_properties?: (ctx: BehaviorModule_stealthUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stealthUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stealthUpgrade_properties?: (ctx: BehaviorModule_stealthUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stickyBombUpdate?: (ctx: BehaviorModule_stickyBombUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stickyBombUpdate?: (ctx: BehaviorModule_stickyBombUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_stickyBombUpdate_properties?: (ctx: BehaviorModule_stickyBombUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_stickyBombUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_stickyBombUpdate_properties?: (ctx: BehaviorModule_stickyBombUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_structureCollapseUpdate?: (ctx: BehaviorModule_structureCollapseUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_structureCollapseUpdate?: (ctx: BehaviorModule_structureCollapseUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_structureCollapseUpdate_properties?: (ctx: BehaviorModule_structureCollapseUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_structureCollapseUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_structureCollapseUpdate_properties?: (ctx: BehaviorModule_structureCollapseUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_structureToppleUpdate?: (ctx: BehaviorModule_structureToppleUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_structureToppleUpdate?: (ctx: BehaviorModule_structureToppleUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_structureToppleUpdate_properties?: (ctx: BehaviorModule_structureToppleUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_structureToppleUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_structureToppleUpdate_properties?: (ctx: BehaviorModule_structureToppleUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_subObjectsUpgrade?: (ctx: BehaviorModule_subObjectsUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_subObjectsUpgrade?: (ctx: BehaviorModule_subObjectsUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_subObjectsUpgrade_properties?: (ctx: BehaviorModule_subObjectsUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_subObjectsUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_subObjectsUpgrade_properties?: (ctx: BehaviorModule_subObjectsUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyCenterCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyCenterCreate?: (ctx: BehaviorModule_supplyCenterCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyCenterCreate?: (ctx: BehaviorModule_supplyCenterCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyCenterDockUpdate?: (ctx: BehaviorModule_supplyCenterDockUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyCenterDockUpdate?: (ctx: BehaviorModule_supplyCenterDockUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyCenterDockUpdate_properties?: (ctx: BehaviorModule_supplyCenterDockUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterDockUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyCenterDockUpdate_properties?: (ctx: BehaviorModule_supplyCenterDockUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyCenterProductionExitUpdate?: (ctx: BehaviorModule_supplyCenterProductionExitUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyCenterProductionExitUpdate?: (ctx: BehaviorModule_supplyCenterProductionExitUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyCenterProductionExitUpdate_properties?: (ctx: BehaviorModule_supplyCenterProductionExitUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyCenterProductionExitUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyCenterProductionExitUpdate_properties?: (ctx: BehaviorModule_supplyCenterProductionExitUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyWarehouseCreate?: (ctx: BehaviorModule_supplyWarehouseCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyWarehouseCreate?: (ctx: BehaviorModule_supplyWarehouseCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyWarehouseCripplingBehavior?: (ctx: BehaviorModule_supplyWarehouseCripplingBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyWarehouseCripplingBehavior?: (ctx: BehaviorModule_supplyWarehouseCripplingBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyWarehouseCripplingBehavior_properties?: (ctx: BehaviorModule_supplyWarehouseCripplingBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseCripplingBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyWarehouseCripplingBehavior_properties?: (ctx: BehaviorModule_supplyWarehouseCripplingBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyWarehouseDockUpdate?: (ctx: BehaviorModule_supplyWarehouseDockUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyWarehouseDockUpdate?: (ctx: BehaviorModule_supplyWarehouseDockUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyWarehouseDockUpdate_properties?: (ctx: BehaviorModule_supplyWarehouseDockUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyWarehouseDockUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyWarehouseDockUpdate_properties?: (ctx: BehaviorModule_supplyWarehouseDockUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_techBuildingBehavior?: (ctx: BehaviorModule_techBuildingBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_techBuildingBehavior?: (ctx: BehaviorModule_techBuildingBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_techBuildingBehavior_properties?: (ctx: BehaviorModule_techBuildingBehavior_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_techBuildingBehavior_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_techBuildingBehavior_properties?: (ctx: BehaviorModule_techBuildingBehavior_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_tensileFormationUpdate?: (ctx: BehaviorModule_tensileFormationUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_tensileFormationUpdate?: (ctx: BehaviorModule_tensileFormationUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_tensileFormationUpdate_properties?: (ctx: BehaviorModule_tensileFormationUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_tensileFormationUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_tensileFormationUpdate_properties?: (ctx: BehaviorModule_tensileFormationUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_toppleUpdate?: (ctx: BehaviorModule_toppleUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_toppleUpdate?: (ctx: BehaviorModule_toppleUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_toppleUpdate_properties?: (ctx: BehaviorModule_toppleUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_toppleUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_toppleUpdate_properties?: (ctx: BehaviorModule_toppleUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transitionDamageFX?: (ctx: BehaviorModule_transitionDamageFXContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transitionDamageFX?: (ctx: BehaviorModule_transitionDamageFXContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transitionDamageFX_properties?: (ctx: BehaviorModule_transitionDamageFX_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transitionDamageFX_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transitionDamageFX_properties?: (ctx: BehaviorModule_transitionDamageFX_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transportContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transportContain?: (ctx: BehaviorModule_transportContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transportContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transportContain?: (ctx: BehaviorModule_transportContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transportContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transportContain_properties?: (ctx: BehaviorModule_transportContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transportContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transportContain_properties?: (ctx: BehaviorModule_transportContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_tunnelContain`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_tunnelContain?: (ctx: BehaviorModule_tunnelContainContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_tunnelContain`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_tunnelContain?: (ctx: BehaviorModule_tunnelContainContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_tunnelContain_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_tunnelContain_properties?: (ctx: BehaviorModule_tunnelContain_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_tunnelContain_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_tunnelContain_properties?: (ctx: BehaviorModule_tunnelContain_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_unitCrateCollide?: (ctx: BehaviorModule_unitCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_unitCrateCollide?: (ctx: BehaviorModule_unitCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_unitCrateCollide_properties?: (ctx: BehaviorModule_unitCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_unitCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_unitCrateCollide_properties?: (ctx: BehaviorModule_unitCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_unpauseSpecialPowerUpgrade?: (ctx: BehaviorModule_unpauseSpecialPowerUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_unpauseSpecialPowerUpgrade?: (ctx: BehaviorModule_unpauseSpecialPowerUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_unpauseSpecialPowerUpgrade_properties?: (ctx: BehaviorModule_unpauseSpecialPowerUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_unpauseSpecialPowerUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_unpauseSpecialPowerUpgrade_properties?: (ctx: BehaviorModule_unpauseSpecialPowerUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_upgradeDie`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_upgradeDie?: (ctx: BehaviorModule_upgradeDieContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_upgradeDie`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_upgradeDie?: (ctx: BehaviorModule_upgradeDieContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_upgradeDie_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_upgradeDie_properties?: (ctx: BehaviorModule_upgradeDie_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_upgradeDie_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_upgradeDie_properties?: (ctx: BehaviorModule_upgradeDie_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_veterancyCrateCollide?: (ctx: BehaviorModule_veterancyCrateCollideContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_veterancyCrateCollide?: (ctx: BehaviorModule_veterancyCrateCollideContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_veterancyCrateCollide_properties?: (ctx: BehaviorModule_veterancyCrateCollide_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_veterancyCrateCollide_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_veterancyCrateCollide_properties?: (ctx: BehaviorModule_veterancyCrateCollide_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_veterancyGainCreate?: (ctx: BehaviorModule_veterancyGainCreateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_veterancyGainCreate?: (ctx: BehaviorModule_veterancyGainCreateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_veterancyGainCreate_properties?: (ctx: BehaviorModule_veterancyGainCreate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_veterancyGainCreate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_veterancyGainCreate_properties?: (ctx: BehaviorModule_veterancyGainCreate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_waveGuideUpdate?: (ctx: BehaviorModule_waveGuideUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_waveGuideUpdate?: (ctx: BehaviorModule_waveGuideUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_waveGuideUpdate_properties?: (ctx: BehaviorModule_waveGuideUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_waveGuideUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_waveGuideUpdate_properties?: (ctx: BehaviorModule_waveGuideUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponBonusUpdate?: (ctx: BehaviorModule_weaponBonusUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponBonusUpdate?: (ctx: BehaviorModule_weaponBonusUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponBonusUpdate_properties?: (ctx: BehaviorModule_weaponBonusUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponBonusUpdate_properties?: (ctx: BehaviorModule_weaponBonusUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponBonusUpgrade?: (ctx: BehaviorModule_weaponBonusUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponBonusUpgrade?: (ctx: BehaviorModule_weaponBonusUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponBonusUpgrade_properties?: (ctx: BehaviorModule_weaponBonusUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponBonusUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponBonusUpgrade_properties?: (ctx: BehaviorModule_weaponBonusUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponSetUpgrade?: (ctx: BehaviorModule_weaponSetUpgradeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponSetUpgrade?: (ctx: BehaviorModule_weaponSetUpgradeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_weaponSetUpgrade_properties?: (ctx: BehaviorModule_weaponSetUpgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_weaponSetUpgrade_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_weaponSetUpgrade_properties?: (ctx: BehaviorModule_weaponSetUpgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_turretBlock`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_turretBlock?: (ctx: BehaviorModule_turretBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_turretBlock`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_turretBlock?: (ctx: BehaviorModule_turretBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_turretBlock_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_turretBlock_properties?: (ctx: BehaviorModule_turretBlock_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_turretBlock_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_turretBlock_properties?: (ctx: BehaviorModule_turretBlock_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_aiUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_aiUpdate_properties?: (ctx: BehaviorModule_aiUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_aiUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_aiUpdate_properties?: (ctx: BehaviorModule_aiUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_aiUpdateInterface?: (ctx: BehaviorModule_aiUpdateInterfaceContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_aiUpdateInterface?: (ctx: BehaviorModule_aiUpdateInterfaceContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_aiUpdateInterface_properties?: (ctx: BehaviorModule_aiUpdateInterface_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_aiUpdateInterface_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_aiUpdateInterface_properties?: (ctx: BehaviorModule_aiUpdateInterface_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_assultTroopAIUpdate?: (ctx: BehaviorModule_assultTroopAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_assultTroopAIUpdate?: (ctx: BehaviorModule_assultTroopAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_assultTroopAIUpdate_properties?: (ctx: BehaviorModule_assultTroopAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_assultTroopAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_assultTroopAIUpdate_properties?: (ctx: BehaviorModule_assultTroopAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_chinookAIUpdate?: (ctx: BehaviorModule_chinookAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_chinookAIUpdate?: (ctx: BehaviorModule_chinookAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_chinookAIUpdate_properties?: (ctx: BehaviorModule_chinookAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_chinookAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_chinookAIUpdate_properties?: (ctx: BehaviorModule_chinookAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deliverPayloadAIUpdate?: (ctx: BehaviorModule_deliverPayloadAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deliverPayloadAIUpdate?: (ctx: BehaviorModule_deliverPayloadAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deliverPayloadAIUpdate_properties?: (ctx: BehaviorModule_deliverPayloadAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deliverPayloadAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deliverPayloadAIUpdate_properties?: (ctx: BehaviorModule_deliverPayloadAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deployableAIUpdate?: (ctx: BehaviorModule_deployableAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deployableAIUpdate?: (ctx: BehaviorModule_deployableAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deployableAIUpdate_properties?: (ctx: BehaviorModule_deployableAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deployableAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deployableAIUpdate_properties?: (ctx: BehaviorModule_deployableAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dozerAIUpdate?: (ctx: BehaviorModule_dozerAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dozerAIUpdate?: (ctx: BehaviorModule_dozerAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_dozerAIUpdate_properties?: (ctx: BehaviorModule_dozerAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_dozerAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_dozerAIUpdate_properties?: (ctx: BehaviorModule_dozerAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hackInternetAIUpdate?: (ctx: BehaviorModule_hackInternetAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hackInternetAIUpdate?: (ctx: BehaviorModule_hackInternetAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_hackInternetAIUpdate_properties?: (ctx: BehaviorModule_hackInternetAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_hackInternetAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_hackInternetAIUpdate_properties?: (ctx: BehaviorModule_hackInternetAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_jetAIUpdate?: (ctx: BehaviorModule_jetAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_jetAIUpdate?: (ctx: BehaviorModule_jetAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_jetAIUpdate_properties?: (ctx: BehaviorModule_jetAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_jetAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_jetAIUpdate_properties?: (ctx: BehaviorModule_jetAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_missileAIUpdate?: (ctx: BehaviorModule_missileAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_missileAIUpdate?: (ctx: BehaviorModule_missileAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_missileAIUpdate_properties?: (ctx: BehaviorModule_missileAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_missileAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_missileAIUpdate_properties?: (ctx: BehaviorModule_missileAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportAIUpdate?: (ctx: BehaviorModule_railedTransportAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportAIUpdate?: (ctx: BehaviorModule_railedTransportAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_railedTransportAIUpdate_properties?: (ctx: BehaviorModule_railedTransportAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_railedTransportAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_railedTransportAIUpdate_properties?: (ctx: BehaviorModule_railedTransportAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyTruckAIUpdate?: (ctx: BehaviorModule_supplyTruckAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyTruckAIUpdate?: (ctx: BehaviorModule_supplyTruckAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_supplyTruckAIUpdate_properties?: (ctx: BehaviorModule_supplyTruckAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_supplyTruckAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_supplyTruckAIUpdate_properties?: (ctx: BehaviorModule_supplyTruckAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transportAIUpdate?: (ctx: BehaviorModule_transportAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transportAIUpdate?: (ctx: BehaviorModule_transportAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_transportAIUpdate_properties?: (ctx: BehaviorModule_transportAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_transportAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_transportAIUpdate_properties?: (ctx: BehaviorModule_transportAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_wanderAIUpdate?: (ctx: BehaviorModule_wanderAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_wanderAIUpdate?: (ctx: BehaviorModule_wanderAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_wanderAIUpdate_properties?: (ctx: BehaviorModule_wanderAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_wanderAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_wanderAIUpdate_properties?: (ctx: BehaviorModule_wanderAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_workerAIUpdate?: (ctx: BehaviorModule_workerAIUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_workerAIUpdate?: (ctx: BehaviorModule_workerAIUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate_properties`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_workerAIUpdate_properties?: (ctx: BehaviorModule_workerAIUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_workerAIUpdate_properties`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_workerAIUpdate_properties?: (ctx: BehaviorModule_workerAIUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_deathTypes`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_deathTypes?: (ctx: BehaviorModule_deathTypesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_deathTypes`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_deathTypes?: (ctx: BehaviorModule_deathTypesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_allowInsideKindOf`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_allowInsideKindOf?: (ctx: BehaviorModule_allowInsideKindOfContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_allowInsideKindOf`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_allowInsideKindOf?: (ctx: BehaviorModule_allowInsideKindOfContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_forbidInsideKindOf`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_forbidInsideKindOf?: (ctx: BehaviorModule_forbidInsideKindOfContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_forbidInsideKindOf`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_forbidInsideKindOf?: (ctx: BehaviorModule_forbidInsideKindOfContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_fxlistNValue`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_fxlistNValue?: (ctx: BehaviorModule_fxlistNValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_fxlistNValue`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_fxlistNValue?: (ctx: BehaviorModule_fxlistNValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_particleSystemNValue`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_particleSystemNValue?: (ctx: BehaviorModule_particleSystemNValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_particleSystemNValue`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_particleSystemNValue?: (ctx: BehaviorModule_particleSystemNValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectClass_clientModules`.
     * @param ctx the parse tree
     */
    enterObjectClass_clientModules?: (ctx: ObjectClass_clientModulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass_clientModules`.
     * @param ctx the parse tree
     */
    exitObjectClass_clientModules?: (ctx: ObjectClass_clientModulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientUpdate_modules`.
     * @param ctx the parse tree
     */
    enterClientUpdate_modules?: (ctx: ClientUpdate_modulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientUpdate_modules`.
     * @param ctx the parse tree
     */
    exitClientUpdate_modules?: (ctx: ClientUpdate_modulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate`.
     * @param ctx the parse tree
     */
    enterClientModule_animatedSysBoneClientUpdate?: (ctx: ClientModule_animatedSysBoneClientUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate`.
     * @param ctx the parse tree
     */
    exitClientModule_animatedSysBoneClientUpdate?: (ctx: ClientModule_animatedSysBoneClientUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate_properties`.
     * @param ctx the parse tree
     */
    enterClientModule_animatedSysBoneClientUpdate_properties?: (ctx: ClientModule_animatedSysBoneClientUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_animatedSysBoneClientUpdate_properties`.
     * @param ctx the parse tree
     */
    exitClientModule_animatedSysBoneClientUpdate_properties?: (ctx: ClientModule_animatedSysBoneClientUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_beaconUpdate`.
     * @param ctx the parse tree
     */
    enterClientModule_beaconUpdate?: (ctx: ClientModule_beaconUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_beaconUpdate`.
     * @param ctx the parse tree
     */
    exitClientModule_beaconUpdate?: (ctx: ClientModule_beaconUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_beaconUpdate_properties`.
     * @param ctx the parse tree
     */
    enterClientModule_beaconUpdate_properties?: (ctx: ClientModule_beaconUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_beaconUpdate_properties`.
     * @param ctx the parse tree
     */
    exitClientModule_beaconUpdate_properties?: (ctx: ClientModule_beaconUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_laserUpdate`.
     * @param ctx the parse tree
     */
    enterClientModule_laserUpdate?: (ctx: ClientModule_laserUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_laserUpdate`.
     * @param ctx the parse tree
     */
    exitClientModule_laserUpdate?: (ctx: ClientModule_laserUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_laserUpdate_properties`.
     * @param ctx the parse tree
     */
    enterClientModule_laserUpdate_properties?: (ctx: ClientModule_laserUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_laserUpdate_properties`.
     * @param ctx the parse tree
     */
    exitClientModule_laserUpdate_properties?: (ctx: ClientModule_laserUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_swayClientUpdate`.
     * @param ctx the parse tree
     */
    enterClientModule_swayClientUpdate?: (ctx: ClientModule_swayClientUpdateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_swayClientUpdate`.
     * @param ctx the parse tree
     */
    exitClientModule_swayClientUpdate?: (ctx: ClientModule_swayClientUpdateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_swayClientUpdate_properties`.
     * @param ctx the parse tree
     */
    enterClientModule_swayClientUpdate_properties?: (ctx: ClientModule_swayClientUpdate_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_swayClientUpdate_properties`.
     * @param ctx the parse tree
     */
    exitClientModule_swayClientUpdate_properties?: (ctx: ClientModule_swayClientUpdate_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.rankClass`.
     * @param ctx the parse tree
     */
    enterRankClass?: (ctx: RankClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.rankClass`.
     * @param ctx the parse tree
     */
    exitRankClass?: (ctx: RankClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.rank_properties`.
     * @param ctx the parse tree
     */
    enterRank_properties?: (ctx: Rank_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.rank_properties`.
     * @param ctx the parse tree
     */
    exitRank_properties?: (ctx: Rank_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.scienceClass`.
     * @param ctx the parse tree
     */
    enterScienceClass?: (ctx: ScienceClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.scienceClass`.
     * @param ctx the parse tree
     */
    exitScienceClass?: (ctx: ScienceClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.science_properties`.
     * @param ctx the parse tree
     */
    enterScience_properties?: (ctx: Science_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.science_properties`.
     * @param ctx the parse tree
     */
    exitScience_properties?: (ctx: Science_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.specialPowerClass`.
     * @param ctx the parse tree
     */
    enterSpecialPowerClass?: (ctx: SpecialPowerClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.specialPowerClass`.
     * @param ctx the parse tree
     */
    exitSpecialPowerClass?: (ctx: SpecialPowerClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.specialPower_properties`.
     * @param ctx the parse tree
     */
    enterSpecialPower_properties?: (ctx: SpecialPower_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.specialPower_properties`.
     * @param ctx the parse tree
     */
    exitSpecialPower_properties?: (ctx: SpecialPower_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.soundEffectClasses`.
     * @param ctx the parse tree
     */
    enterSoundEffectClasses?: (ctx: SoundEffectClassesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.soundEffectClasses`.
     * @param ctx the parse tree
     */
    exitSoundEffectClasses?: (ctx: SoundEffectClassesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.audioEventClass`.
     * @param ctx the parse tree
     */
    enterAudioEventClass?: (ctx: AudioEventClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.audioEventClass`.
     * @param ctx the parse tree
     */
    exitAudioEventClass?: (ctx: AudioEventClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dialogEventClass`.
     * @param ctx the parse tree
     */
    enterDialogEventClass?: (ctx: DialogEventClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dialogEventClass`.
     * @param ctx the parse tree
     */
    exitDialogEventClass?: (ctx: DialogEventClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.audioevent_properties`.
     * @param ctx the parse tree
     */
    enterAudioevent_properties?: (ctx: Audioevent_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.audioevent_properties`.
     * @param ctx the parse tree
     */
    exitAudioevent_properties?: (ctx: Audioevent_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass?: (ctx: ObjectCreationListClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass?: (ctx: ObjectCreationListClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_blocks`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_blocks?: (ctx: ObjectCreationListClass_blocksContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_blocks`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_blocks?: (ctx: ObjectCreationListClass_blocksContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_createDebrisBlock?: (ctx: ObjectCreationListClass_createDebrisBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_createDebrisBlock?: (ctx: ObjectCreationListClass_createDebrisBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_createDebrisProperties?: (ctx: ObjectCreationListClass_createDebrisPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_createDebrisProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_createDebrisProperties?: (ctx: ObjectCreationListClass_createDebrisPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.disposition_value`.
     * @param ctx the parse tree
     */
    enterDisposition_value?: (ctx: Disposition_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.disposition_value`.
     * @param ctx the parse tree
     */
    exitDisposition_value?: (ctx: Disposition_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_createObjectBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_createObjectBlock?: (ctx: ObjectCreationListClass_createObjectBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_createObjectBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_createObjectBlock?: (ctx: ObjectCreationListClass_createObjectBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_createObjectProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_createObjectProperties?: (ctx: ObjectCreationListClass_createObjectPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_createObjectProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_createObjectProperties?: (ctx: ObjectCreationListClass_createObjectPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_applyRandomForceBlock?: (ctx: ObjectCreationListClass_applyRandomForceBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_applyRandomForceBlock?: (ctx: ObjectCreationListClass_applyRandomForceBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_applyRandomForceProperties?: (ctx: ObjectCreationListClass_applyRandomForcePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_applyRandomForceProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_applyRandomForceProperties?: (ctx: ObjectCreationListClass_applyRandomForcePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_attackBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_attackBlock?: (ctx: ObjectCreationListClass_attackBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_attackBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_attackBlock?: (ctx: ObjectCreationListClass_attackBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_attackProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_attackProperties?: (ctx: ObjectCreationListClass_attackPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_attackProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_attackProperties?: (ctx: ObjectCreationListClass_attackPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_fireWeaponBlock?: (ctx: ObjectCreationListClass_fireWeaponBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_fireWeaponBlock?: (ctx: ObjectCreationListClass_fireWeaponBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_fireWeaponProperties?: (ctx: ObjectCreationListClass_fireWeaponPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_fireWeaponProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_fireWeaponProperties?: (ctx: ObjectCreationListClass_fireWeaponPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadBlock`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_deliveryPayloadBlock?: (ctx: ObjectCreationListClass_deliveryPayloadBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadBlock`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_deliveryPayloadBlock?: (ctx: ObjectCreationListClass_deliveryPayloadBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadProperties`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_deliveryPayloadProperties?: (ctx: ObjectCreationListClass_deliveryPayloadPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryPayloadProperties`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_deliveryPayloadProperties?: (ctx: ObjectCreationListClass_deliveryPayloadPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectCreationListClass_deliveryDecal`.
     * @param ctx the parse tree
     */
    enterObjectCreationListClass_deliveryDecal?: (ctx: ObjectCreationListClass_deliveryDecalContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectCreationListClass_deliveryDecal`.
     * @param ctx the parse tree
     */
    exitObjectCreationListClass_deliveryDecal?: (ctx: ObjectCreationListClass_deliveryDecalContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass?: (ctx: ParticleSystemClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass?: (ctx: ParticleSystemClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_properties`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_properties?: (ctx: ParticleSystemClass_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_properties`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_properties?: (ctx: ParticleSystemClass_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_priorityValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_priorityValue?: (ctx: ParticleSystemClass_priorityValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_priorityValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_priorityValue?: (ctx: ParticleSystemClass_priorityValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_shaderValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_shaderValue?: (ctx: ParticleSystemClass_shaderValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_shaderValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_shaderValue?: (ctx: ParticleSystemClass_shaderValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_typeValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_typeValue?: (ctx: ParticleSystemClass_typeValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_typeValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_typeValue?: (ctx: ParticleSystemClass_typeValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_velocityTypeValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_velocityTypeValue?: (ctx: ParticleSystemClass_velocityTypeValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_velocityTypeValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_velocityTypeValue?: (ctx: ParticleSystemClass_velocityTypeValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_volumeTypeValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_volumeTypeValue?: (ctx: ParticleSystemClass_volumeTypeValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_volumeTypeValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_volumeTypeValue?: (ctx: ParticleSystemClass_volumeTypeValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particleSystemClass_windTypeValue`.
     * @param ctx the parse tree
     */
    enterParticleSystemClass_windTypeValue?: (ctx: ParticleSystemClass_windTypeValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particleSystemClass_windTypeValue`.
     * @param ctx the parse tree
     */
    exitParticleSystemClass_windTypeValue?: (ctx: ParticleSystemClass_windTypeValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.playerTemplateClass`.
     * @param ctx the parse tree
     */
    enterPlayerTemplateClass?: (ctx: PlayerTemplateClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.playerTemplateClass`.
     * @param ctx the parse tree
     */
    exitPlayerTemplateClass?: (ctx: PlayerTemplateClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.playerTemplateClass_properties`.
     * @param ctx the parse tree
     */
    enterPlayerTemplateClass_properties?: (ctx: PlayerTemplateClass_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.playerTemplateClass_properties`.
     * @param ctx the parse tree
     */
    exitPlayerTemplateClass_properties?: (ctx: PlayerTemplateClass_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.upgradeClass`.
     * @param ctx the parse tree
     */
    enterUpgradeClass?: (ctx: UpgradeClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.upgradeClass`.
     * @param ctx the parse tree
     */
    exitUpgradeClass?: (ctx: UpgradeClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.upgrade_properties`.
     * @param ctx the parse tree
     */
    enterUpgrade_properties?: (ctx: Upgrade_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.upgrade_properties`.
     * @param ctx the parse tree
     */
    exitUpgrade_properties?: (ctx: Upgrade_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.academyclassifier_value`.
     * @param ctx the parse tree
     */
    enterAcademyclassifier_value?: (ctx: Academyclassifier_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.academyclassifier_value`.
     * @param ctx the parse tree
     */
    exitAcademyclassifier_value?: (ctx: Academyclassifier_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weaponClass`.
     * @param ctx the parse tree
     */
    enterWeaponClass?: (ctx: WeaponClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weaponClass`.
     * @param ctx the parse tree
     */
    exitWeaponClass?: (ctx: WeaponClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_properties`.
     * @param ctx the parse tree
     */
    enterWeapon_properties?: (ctx: Weapon_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_properties`.
     * @param ctx the parse tree
     */
    exitWeapon_properties?: (ctx: Weapon_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_damagetype_property`.
     * @param ctx the parse tree
     */
    enterWeapon_damagetype_property?: (ctx: Weapon_damagetype_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_damagetype_property`.
     * @param ctx the parse tree
     */
    exitWeapon_damagetype_property?: (ctx: Weapon_damagetype_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_deathtype_property`.
     * @param ctx the parse tree
     */
    enterWeapon_deathtype_property?: (ctx: Weapon_deathtype_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_deathtype_property`.
     * @param ctx the parse tree
     */
    exitWeapon_deathtype_property?: (ctx: Weapon_deathtype_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_damageaffects_property`.
     * @param ctx the parse tree
     */
    enterWeapon_damageaffects_property?: (ctx: Weapon_damageaffects_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_damageaffects_property`.
     * @param ctx the parse tree
     */
    exitWeapon_damageaffects_property?: (ctx: Weapon_damageaffects_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_weaponbonus_property`.
     * @param ctx the parse tree
     */
    enterWeapon_weaponbonus_property?: (ctx: Weapon_weaponbonus_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_weaponbonus_property`.
     * @param ctx the parse tree
     */
    exitWeapon_weaponbonus_property?: (ctx: Weapon_weaponbonus_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_lasterbone_property`.
     * @param ctx the parse tree
     */
    enterWeapon_lasterbone_property?: (ctx: Weapon_lasterbone_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_lasterbone_property`.
     * @param ctx the parse tree
     */
    exitWeapon_lasterbone_property?: (ctx: Weapon_lasterbone_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_weaponbonus_condition_value`.
     * @param ctx the parse tree
     */
    enterWeapon_weaponbonus_condition_value?: (ctx: Weapon_weaponbonus_condition_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_weaponbonus_condition_value`.
     * @param ctx the parse tree
     */
    exitWeapon_weaponbonus_condition_value?: (ctx: Weapon_weaponbonus_condition_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_weaponbonus_bonus_value`.
     * @param ctx the parse tree
     */
    enterWeapon_weaponbonus_bonus_value?: (ctx: Weapon_weaponbonus_bonus_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_weaponbonus_bonus_value`.
     * @param ctx the parse tree
     */
    exitWeapon_weaponbonus_bonus_value?: (ctx: Weapon_weaponbonus_bonus_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.deathType_value`.
     * @param ctx the parse tree
     */
    enterDeathType_value?: (ctx: DeathType_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.deathType_value`.
     * @param ctx the parse tree
     */
    exitDeathType_value?: (ctx: DeathType_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.damageAffects_value`.
     * @param ctx the parse tree
     */
    enterDamageAffects_value?: (ctx: DamageAffects_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.damageAffects_value`.
     * @param ctx the parse tree
     */
    exitDamageAffects_value?: (ctx: DamageAffects_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.projectileColide_value`.
     * @param ctx the parse tree
     */
    enterProjectileColide_value?: (ctx: ProjectileColide_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.projectileColide_value`.
     * @param ctx the parse tree
     */
    exitProjectileColide_value?: (ctx: ProjectileColide_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.damageType_value`.
     * @param ctx the parse tree
     */
    enterDamageType_value?: (ctx: DamageType_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.damageType_value`.
     * @param ctx the parse tree
     */
    exitDamageType_value?: (ctx: DamageType_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.armorType_value`.
     * @param ctx the parse tree
     */
    enterArmorType_value?: (ctx: ArmorType_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.armorType_value`.
     * @param ctx the parse tree
     */
    exitArmorType_value?: (ctx: ArmorType_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.waterTransparencyClass`.
     * @param ctx the parse tree
     */
    enterWaterTransparencyClass?: (ctx: WaterTransparencyClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.waterTransparencyClass`.
     * @param ctx the parse tree
     */
    exitWaterTransparencyClass?: (ctx: WaterTransparencyClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.waterTransparency_properties`.
     * @param ctx the parse tree
     */
    enterWaterTransparency_properties?: (ctx: WaterTransparency_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.waterTransparency_properties`.
     * @param ctx the parse tree
     */
    exitWaterTransparency_properties?: (ctx: WaterTransparency_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weatherClass`.
     * @param ctx the parse tree
     */
    enterWeatherClass?: (ctx: WeatherClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weatherClass`.
     * @param ctx the parse tree
     */
    exitWeatherClass?: (ctx: WeatherClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weather_properties`.
     * @param ctx the parse tree
     */
    enterWeather_properties?: (ctx: Weather_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weather_properties`.
     * @param ctx the parse tree
     */
    exitWeather_properties?: (ctx: Weather_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.end`.
     * @param ctx the parse tree
     */
    enterEnd?: (ctx: EndContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.end`.
     * @param ctx the parse tree
     */
    exitEnd?: (ctx: EndContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.file`.
     * @param ctx the parse tree
     */
    enterFile?: (ctx: FileContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.file`.
     * @param ctx the parse tree
     */
    exitFile?: (ctx: FileContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_useplayercolor_property`.
     * @param ctx the parse tree
     */
    enterDgi_useplayercolor_property?: (ctx: Dgi_useplayercolor_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_useplayercolor_property`.
     * @param ctx the parse tree
     */
    exitDgi_useplayercolor_property?: (ctx: Dgi_useplayercolor_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_colorfortext_property`.
     * @param ctx the parse tree
     */
    enterDgi_colorfortext_property?: (ctx: Dgi_colorfortext_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_colorfortext_property`.
     * @param ctx the parse tree
     */
    exitDgi_colorfortext_property?: (ctx: Dgi_colorfortext_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_colordropshadow_property`.
     * @param ctx the parse tree
     */
    enterDgi_colordropshadow_property?: (ctx: Dgi_colordropshadow_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_colordropshadow_property`.
     * @param ctx the parse tree
     */
    exitDgi_colordropshadow_property?: (ctx: Dgi_colordropshadow_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_dropshadowoffsetX_property`.
     * @param ctx the parse tree
     */
    enterDgi_dropshadowoffsetX_property?: (ctx: Dgi_dropshadowoffsetX_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_dropshadowoffsetX_property`.
     * @param ctx the parse tree
     */
    exitDgi_dropshadowoffsetX_property?: (ctx: Dgi_dropshadowoffsetX_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_dropshadowoffsetY_property`.
     * @param ctx the parse tree
     */
    enterDgi_dropshadowoffsetY_property?: (ctx: Dgi_dropshadowoffsetY_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_dropshadowoffsetY_property`.
     * @param ctx the parse tree
     */
    exitDgi_dropshadowoffsetY_property?: (ctx: Dgi_dropshadowoffsetY_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_fontname_property`.
     * @param ctx the parse tree
     */
    enterDgi_fontname_property?: (ctx: Dgi_fontname_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_fontname_property`.
     * @param ctx the parse tree
     */
    exitDgi_fontname_property?: (ctx: Dgi_fontname_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_fontsize_property`.
     * @param ctx the parse tree
     */
    enterDgi_fontsize_property?: (ctx: Dgi_fontsize_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_fontsize_property`.
     * @param ctx the parse tree
     */
    exitDgi_fontsize_property?: (ctx: Dgi_fontsize_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_fontisbold_property`.
     * @param ctx the parse tree
     */
    enterDgi_fontisbold_property?: (ctx: Dgi_fontisbold_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_fontisbold_property`.
     * @param ctx the parse tree
     */
    exitDgi_fontisbold_property?: (ctx: Dgi_fontisbold_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_drawposXperc_property`.
     * @param ctx the parse tree
     */
    enterDgi_drawposXperc_property?: (ctx: Dgi_drawposXperc_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_drawposXperc_property`.
     * @param ctx the parse tree
     */
    exitDgi_drawposXperc_property?: (ctx: Dgi_drawposXperc_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.dgi_drawposYperc_property`.
     * @param ctx the parse tree
     */
    enterDgi_drawposYperc_property?: (ctx: Dgi_drawposYperc_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.dgi_drawposYperc_property`.
     * @param ctx the parse tree
     */
    exitDgi_drawposYperc_property?: (ctx: Dgi_drawposYperc_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.faction_value`.
     * @param ctx the parse tree
     */
    enterFaction_value?: (ctx: Faction_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.faction_value`.
     * @param ctx the parse tree
     */
    exitFaction_value?: (ctx: Faction_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.factionEx_value`.
     * @param ctx the parse tree
     */
    enterFactionEx_value?: (ctx: FactionEx_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.factionEx_value`.
     * @param ctx the parse tree
     */
    exitFactionEx_value?: (ctx: FactionEx_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.armor_value`.
     * @param ctx the parse tree
     */
    enterArmor_value?: (ctx: Armor_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.armor_value`.
     * @param ctx the parse tree
     */
    exitArmor_value?: (ctx: Armor_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.animation2d_value`.
     * @param ctx the parse tree
     */
    enterAnimation2d_value?: (ctx: Animation2d_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.animation2d_value`.
     * @param ctx the parse tree
     */
    exitAnimation2d_value?: (ctx: Animation2d_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.crate_value`.
     * @param ctx the parse tree
     */
    enterCrate_value?: (ctx: Crate_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.crate_value`.
     * @param ctx the parse tree
     */
    exitCrate_value?: (ctx: Crate_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandbutton_value`.
     * @param ctx the parse tree
     */
    enterCommandbutton_value?: (ctx: Commandbutton_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandbutton_value`.
     * @param ctx the parse tree
     */
    exitCommandbutton_value?: (ctx: Commandbutton_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.commandSet_value`.
     * @param ctx the parse tree
     */
    enterCommandSet_value?: (ctx: CommandSet_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.commandSet_value`.
     * @param ctx the parse tree
     */
    exitCommandSet_value?: (ctx: CommandSet_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.damageFX_value`.
     * @param ctx the parse tree
     */
    enterDamageFX_value?: (ctx: DamageFX_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.damageFX_value`.
     * @param ctx the parse tree
     */
    exitDamageFX_value?: (ctx: DamageFX_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.cursorname_value`.
     * @param ctx the parse tree
     */
    enterCursorname_value?: (ctx: Cursorname_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.cursorname_value`.
     * @param ctx the parse tree
     */
    exitCursorname_value?: (ctx: Cursorname_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.radius_cursorname_value`.
     * @param ctx the parse tree
     */
    enterRadius_cursorname_value?: (ctx: Radius_cursorname_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.radius_cursorname_value`.
     * @param ctx the parse tree
     */
    exitRadius_cursorname_value?: (ctx: Radius_cursorname_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.invalid_cursorname_value`.
     * @param ctx the parse tree
     */
    enterInvalid_cursorname_value?: (ctx: Invalid_cursorname_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.invalid_cursorname_value`.
     * @param ctx the parse tree
     */
    exitInvalid_cursorname_value?: (ctx: Invalid_cursorname_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedimage_value`.
     * @param ctx the parse tree
     */
    enterMappedimage_value?: (ctx: Mappedimage_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedimage_value`.
     * @param ctx the parse tree
     */
    exitMappedimage_value?: (ctx: Mappedimage_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.particlesystem_value`.
     * @param ctx the parse tree
     */
    enterParticlesystem_value?: (ctx: Particlesystem_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.particlesystem_value`.
     * @param ctx the parse tree
     */
    exitParticlesystem_value?: (ctx: Particlesystem_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.fxlist_value`.
     * @param ctx the parse tree
     */
    enterFxlist_value?: (ctx: Fxlist_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.fxlist_value`.
     * @param ctx the parse tree
     */
    exitFxlist_value?: (ctx: Fxlist_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_value`.
     * @param ctx the parse tree
     */
    enterLocomotor_value?: (ctx: Locomotor_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_value`.
     * @param ctx the parse tree
     */
    exitLocomotor_value?: (ctx: Locomotor_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.locomotor_type`.
     * @param ctx the parse tree
     */
    enterLocomotor_type?: (ctx: Locomotor_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_type`.
     * @param ctx the parse tree
     */
    exitLocomotor_type?: (ctx: Locomotor_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.object_property`.
     * @param ctx the parse tree
     */
    enterObject_property?: (ctx: Object_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.object_property`.
     * @param ctx the parse tree
     */
    exitObject_property?: (ctx: Object_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.object_value`.
     * @param ctx the parse tree
     */
    enterObject_value?: (ctx: Object_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.object_value`.
     * @param ctx the parse tree
     */
    exitObject_value?: (ctx: Object_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.kindof_value`.
     * @param ctx the parse tree
     */
    enterKindof_value?: (ctx: Kindof_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.kindof_value`.
     * @param ctx the parse tree
     */
    exitKindof_value?: (ctx: Kindof_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.status_value`.
     * @param ctx the parse tree
     */
    enterStatus_value?: (ctx: Status_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.status_value`.
     * @param ctx the parse tree
     */
    exitStatus_value?: (ctx: Status_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.ocl_value`.
     * @param ctx the parse tree
     */
    enterOcl_value?: (ctx: Ocl_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.ocl_value`.
     * @param ctx the parse tree
     */
    exitOcl_value?: (ctx: Ocl_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.science_property`.
     * @param ctx the parse tree
     */
    enterScience_property?: (ctx: Science_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.science_property`.
     * @param ctx the parse tree
     */
    exitScience_property?: (ctx: Science_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.science_value`.
     * @param ctx the parse tree
     */
    enterScience_value?: (ctx: Science_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.science_value`.
     * @param ctx the parse tree
     */
    exitScience_value?: (ctx: Science_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.specialpower_property`.
     * @param ctx the parse tree
     */
    enterSpecialpower_property?: (ctx: Specialpower_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.specialpower_property`.
     * @param ctx the parse tree
     */
    exitSpecialpower_property?: (ctx: Specialpower_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.specialpower_value`.
     * @param ctx the parse tree
     */
    enterSpecialpower_value?: (ctx: Specialpower_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.specialpower_value`.
     * @param ctx the parse tree
     */
    exitSpecialpower_value?: (ctx: Specialpower_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.audioevent_value`.
     * @param ctx the parse tree
     */
    enterAudioevent_value?: (ctx: Audioevent_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.audioevent_value`.
     * @param ctx the parse tree
     */
    exitAudioevent_value?: (ctx: Audioevent_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.upgrade_property`.
     * @param ctx the parse tree
     */
    enterUpgrade_property?: (ctx: Upgrade_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.upgrade_property`.
     * @param ctx the parse tree
     */
    exitUpgrade_property?: (ctx: Upgrade_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.upgrade_value`.
     * @param ctx the parse tree
     */
    enterUpgrade_value?: (ctx: Upgrade_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.upgrade_value`.
     * @param ctx the parse tree
     */
    exitUpgrade_value?: (ctx: Upgrade_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_value`.
     * @param ctx the parse tree
     */
    enterWeapon_value?: (ctx: Weapon_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_value`.
     * @param ctx the parse tree
     */
    exitWeapon_value?: (ctx: Weapon_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.turret_property`.
     * @param ctx the parse tree
     */
    enterTurret_property?: (ctx: Turret_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.turret_property`.
     * @param ctx the parse tree
     */
    exitTurret_property?: (ctx: Turret_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.alt_turret_property`.
     * @param ctx the parse tree
     */
    enterAlt_turret_property?: (ctx: Alt_turret_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.alt_turret_property`.
     * @param ctx the parse tree
     */
    exitAlt_turret_property?: (ctx: Alt_turret_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.transitionKey_value`.
     * @param ctx the parse tree
     */
    enterTransitionKey_value?: (ctx: TransitionKey_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.transitionKey_value`.
     * @param ctx the parse tree
     */
    exitTransitionKey_value?: (ctx: TransitionKey_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weaponslot_property`.
     * @param ctx the parse tree
     */
    enterWeaponslot_property?: (ctx: Weaponslot_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weaponslot_property`.
     * @param ctx the parse tree
     */
    exitWeaponslot_property?: (ctx: Weaponslot_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weapon_property`.
     * @param ctx the parse tree
     */
    enterWeapon_property?: (ctx: Weapon_propertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weapon_property`.
     * @param ctx the parse tree
     */
    exitWeapon_property?: (ctx: Weapon_propertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.veterency_modifier`.
     * @param ctx the parse tree
     */
    enterVeterency_modifier?: (ctx: Veterency_modifierContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.veterency_modifier`.
     * @param ctx the parse tree
     */
    exitVeterency_modifier?: (ctx: Veterency_modifierContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     */
    enterModuleTag_value?: (ctx: ModuleTag_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     */
    exitModuleTag_value?: (ctx: ModuleTag_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.rand_value`.
     * @param ctx the parse tree
     */
    enterRand_value?: (ctx: Rand_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.rand_value`.
     * @param ctx the parse tree
     */
    exitRand_value?: (ctx: Rand_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.coord3D`.
     * @param ctx the parse tree
     */
    enterCoord3D?: (ctx: Coord3DContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.coord3D`.
     * @param ctx the parse tree
     */
    exitCoord3D?: (ctx: Coord3DContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.autochoose_sources`.
     * @param ctx the parse tree
     */
    enterAutochoose_sources?: (ctx: Autochoose_sourcesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.autochoose_sources`.
     * @param ctx the parse tree
     */
    exitAutochoose_sources?: (ctx: Autochoose_sourcesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.object_condition_types`.
     * @param ctx the parse tree
     */
    enterObject_condition_types?: (ctx: Object_condition_typesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.object_condition_types`.
     * @param ctx the parse tree
     */
    exitObject_condition_types?: (ctx: Object_condition_typesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.geometry`.
     * @param ctx the parse tree
     */
    enterGeometry?: (ctx: GeometryContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.geometry`.
     * @param ctx the parse tree
     */
    exitGeometry?: (ctx: GeometryContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.shadow_value`.
     * @param ctx the parse tree
     */
    enterShadow_value?: (ctx: Shadow_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.shadow_value`.
     * @param ctx the parse tree
     */
    exitShadow_value?: (ctx: Shadow_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.condition_flags`.
     * @param ctx the parse tree
     */
    enterCondition_flags?: (ctx: Condition_flagsContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.condition_flags`.
     * @param ctx the parse tree
     */
    exitCondition_flags?: (ctx: Condition_flagsContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.ocl_createLocation`.
     * @param ctx the parse tree
     */
    enterOcl_createLocation?: (ctx: Ocl_createLocationContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.ocl_createLocation`.
     * @param ctx the parse tree
     */
    exitOcl_createLocation?: (ctx: Ocl_createLocationContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.distribution_form`.
     * @param ctx the parse tree
     */
    enterDistribution_form?: (ctx: Distribution_formContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.distribution_form`.
     * @param ctx the parse tree
     */
    exitDistribution_form?: (ctx: Distribution_formContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

