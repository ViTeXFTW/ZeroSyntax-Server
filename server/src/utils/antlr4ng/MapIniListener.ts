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
import { ObjectClassContext } from "./MapIniParser.js";
import { ObjectClass_propertiesContext } from "./MapIniParser.js";
import { ObjectClass_addModuleContext } from "./MapIniParser.js";
import { ObjectClass_modulesContext } from "./MapIniParser.js";
import { ObjectClass_drawModulesContext } from "./MapIniParser.js";
import { DrawModule_typeBlock1ValueContext } from "./MapIniParser.js";
import { DrawModule_type1ValueContext } from "./MapIniParser.js";
import { DrawModule_typeBlock2ValueContext } from "./MapIniParser.js";
import { DrawModule_type2ValueContext } from "./MapIniParser.js";
import { DrawModule_typeBlock2propertiesContext } from "./MapIniParser.js";
import { DrawModule_typeBlock3ValueContext } from "./MapIniParser.js";
import { DrawModule_type3ValueContext } from "./MapIniParser.js";
import { DrawModule_typeBlock3propertiesContext } from "./MapIniParser.js";
import { DrawModule_typeBlock4ValueContext } from "./MapIniParser.js";
import { DrawModule_type4ValueContext } from "./MapIniParser.js";
import { DrawModule_typeBlock4propertiesContext } from "./MapIniParser.js";
import { DrawModule_typeBlock5ValueContext } from "./MapIniParser.js";
import { DrawModule_type5ValueContext } from "./MapIniParser.js";
import { DrawModule_typeBlock5propertiesContext } from "./MapIniParser.js";
import { DrawModule_conditionBlockContext } from "./MapIniParser.js";
import { DrawModule_defaultconditionBlockContext } from "./MapIniParser.js";
import { DrawModule_conditionStateValueContext } from "./MapIniParser.js";
import { DrawModule_conditionStatePropertiesContext } from "./MapIniParser.js";
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
import { Commandbutton_valueContext } from "./MapIniParser.js";
import { CommandSet_valueContext } from "./MapIniParser.js";
import { Cursorname_valueContext } from "./MapIniParser.js";
import { Radius_cursorname_valueContext } from "./MapIniParser.js";
import { Invalid_cursorname_valueContext } from "./MapIniParser.js";
import { Mappedimage_valueContext } from "./MapIniParser.js";
import { Particlesystem_valueContext } from "./MapIniParser.js";
import { Fxlist_valueContext } from "./MapIniParser.js";
import { Object_propertyContext } from "./MapIniParser.js";
import { Object_valueContext } from "./MapIniParser.js";
import { Kindof_valueContext } from "./MapIniParser.js";
import { Ocl_valueContext } from "./MapIniParser.js";
import { Science_propertyContext } from "./MapIniParser.js";
import { Science_valueContext } from "./MapIniParser.js";
import { Specialpower_propertyContext } from "./MapIniParser.js";
import { Specialpower_valueContext } from "./MapIniParser.js";
import { Audioevent_valueContext } from "./MapIniParser.js";
import { Upgrade_propertyContext } from "./MapIniParser.js";
import { Upgrade_valueContext } from "./MapIniParser.js";
import { Weapon_valueContext } from "./MapIniParser.js";
import { Weaponslot_propertyContext } from "./MapIniParser.js";
import { Rand_valueContext } from "./MapIniParser.js";
import { Coord3DContext } from "./MapIniParser.js";


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
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock1Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock1Value?: (ctx: DrawModule_typeBlock1ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock1Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock1Value?: (ctx: DrawModule_typeBlock1ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_type1Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_type1Value?: (ctx: DrawModule_type1ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type1Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_type1Value?: (ctx: DrawModule_type1ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock2Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock2Value?: (ctx: DrawModule_typeBlock2ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock2Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock2Value?: (ctx: DrawModule_typeBlock2ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_type2Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_type2Value?: (ctx: DrawModule_type2ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type2Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_type2Value?: (ctx: DrawModule_type2ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock2properties`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock2properties?: (ctx: DrawModule_typeBlock2propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock2properties`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock2properties?: (ctx: DrawModule_typeBlock2propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock3Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock3Value?: (ctx: DrawModule_typeBlock3ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock3Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock3Value?: (ctx: DrawModule_typeBlock3ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_type3Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_type3Value?: (ctx: DrawModule_type3ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type3Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_type3Value?: (ctx: DrawModule_type3ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock3properties`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock3properties?: (ctx: DrawModule_typeBlock3propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock3properties`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock3properties?: (ctx: DrawModule_typeBlock3propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock4Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock4Value?: (ctx: DrawModule_typeBlock4ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock4Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock4Value?: (ctx: DrawModule_typeBlock4ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_type4Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_type4Value?: (ctx: DrawModule_type4ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type4Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_type4Value?: (ctx: DrawModule_type4ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock4properties`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock4properties?: (ctx: DrawModule_typeBlock4propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock4properties`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock4properties?: (ctx: DrawModule_typeBlock4propertiesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock5Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock5Value?: (ctx: DrawModule_typeBlock5ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock5Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock5Value?: (ctx: DrawModule_typeBlock5ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_type5Value`.
     * @param ctx the parse tree
     */
    enterDrawModule_type5Value?: (ctx: DrawModule_type5ValueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type5Value`.
     * @param ctx the parse tree
     */
    exitDrawModule_type5Value?: (ctx: DrawModule_type5ValueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule_typeBlock5properties`.
     * @param ctx the parse tree
     */
    enterDrawModule_typeBlock5properties?: (ctx: DrawModule_typeBlock5propertiesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_typeBlock5properties`.
     * @param ctx the parse tree
     */
    exitDrawModule_typeBlock5properties?: (ctx: DrawModule_typeBlock5propertiesContext) => void;
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

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

