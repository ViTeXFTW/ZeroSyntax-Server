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
import { ArmorClassContext } from "./MapIniParser.js";
import { ArmorClassPropertiesContext } from "./MapIniParser.js";
import { CommandButtonClassContext } from "./MapIniParser.js";
import { CommandButtonClassPropertiesContext } from "./MapIniParser.js";
import { CommandSetClassContext } from "./MapIniParser.js";
import { CommandSetClassPropertyContext } from "./MapIniParser.js";
import { DamageFXClassContext } from "./MapIniParser.js";
import { DamageFXClassPropertiesContext } from "./MapIniParser.js";
import { DrawGroupInfoClassContext } from "./MapIniParser.js";
import { DrawgroupinfoPropertiesContext } from "./MapIniParser.js";
import { FxListClassContext } from "./MapIniParser.js";
import { FxlistblocksContext } from "./MapIniParser.js";
import { Fxlist_ps_blockContext } from "./MapIniParser.js";
import { Fxlist_sound_blockContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_blockContext } from "./MapIniParser.js";
import { Fxlist_tracer_blockContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_blockContext } from "./MapIniParser.js";
import { Fxlist_viewshake_blockContext } from "./MapIniParser.js";
import { Fxlist_terrainscorch_blockContext } from "./MapIniParser.js";
import { Fxlist_fxlistatbone_blockContext } from "./MapIniParser.js";
import { InGameUIClassContext } from "./MapIniParser.js";
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
import { DamageType_valueContext } from "./MapIniParser.js";
import { DeathType_valueContext } from "./MapIniParser.js";
import { DamageAffects_valueContext } from "./MapIniParser.js";
import { WeatherClassContext } from "./MapIniParser.js";
import { Weather_propertiesContext } from "./MapIniParser.js";
import { EndContext } from "./MapIniParser.js";
import { FileContext } from "./MapIniParser.js";
import { Cb_command_propertyContext } from "./MapIniParser.js";
import { Cb_command_valueContext } from "./MapIniParser.js";
import { Cb_options_propertyContext } from "./MapIniParser.js";
import { Cb_options_valueContext } from "./MapIniParser.js";
import { Cb_buttonimage_propertyContext } from "./MapIniParser.js";
import { Cb_buttonbordertype_propertyContext } from "./MapIniParser.js";
import { Cb_buttonbordertype_valueContext } from "./MapIniParser.js";
import { Cb_textlabel_propertyContext } from "./MapIniParser.js";
import { Cb_descriptionlabel_propertyContext } from "./MapIniParser.js";
import { Cb_conflictinglabel_propertyContext } from "./MapIniParser.js";
import { Cb_cursorname_properyContext } from "./MapIniParser.js";
import { Cb_radius_cursorname_valueContext } from "./MapIniParser.js";
import { Cb_invalid_cursorname_properyContext } from "./MapIniParser.js";
import { Cb_unitspecificsound_propertyContext } from "./MapIniParser.js";
import { Cb_maxshotsfire_propertyContext } from "./MapIniParser.js";
import { Dfx_throttletime_propertyContext } from "./MapIniParser.js";
import { Dfx_amountformajorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_majorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_minorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_vetmajorfx_propertyContext } from "./MapIniParser.js";
import { Dfx_vetminorfx_propertyContext } from "./MapIniParser.js";
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
import { Fxlist_sound_propertyContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_primaryoffset_propertyContext } from "./MapIniParser.js";
import { Fxlist_rayeffect_secondaryoffset_propretyContext } from "./MapIniParser.js";
import { Fxlist_tracer_name_propetyContext } from "./MapIniParser.js";
import { Fxlist_tracer_bonename_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_speed_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_decayat_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_length_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_width_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_color_propertyContext } from "./MapIniParser.js";
import { Fxlist_tracer_probability_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_color_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_radius_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_radiuspercentobjectsize_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_increasetime_propertyContext } from "./MapIniParser.js";
import { Fxlist_lightpulse_decreasetime_propertyContext } from "./MapIniParser.js";
import { Fxlist_viewshake_type_propertyContext } from "./MapIniParser.js";
import { Fxlist_scorch_type_propertyContext } from "./MapIniParser.js";
import { Fxlist_scorch_radius_propertyContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_fx_propertyContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_bonename_propertyContext } from "./MapIniParser.js";
import { Fxlist_atbonepos_orienttoobject_propertyContext } from "./MapIniParser.js";
import { Fxlist_name_object_propetyContext } from "./MapIniParser.js";
import { Igui_propertiesContext } from "./MapIniParser.js";
import { Faction_valueContext } from "./MapIniParser.js";
import { Commandbutton_valueContext } from "./MapIniParser.js";
import { Cursorname_valueContext } from "./MapIniParser.js";
import { Radius_cursorname_valueContext } from "./MapIniParser.js";
import { Invalid_cursorname_valueContext } from "./MapIniParser.js";
import { Mappedimage_valueContext } from "./MapIniParser.js";
import { Particlesystem_valueContext } from "./MapIniParser.js";
import { Fxlist_valueContext } from "./MapIniParser.js";
import { Object_propertyContext } from "./MapIniParser.js";
import { Object_valueContext } from "./MapIniParser.js";
import { Science_propertyContext } from "./MapIniParser.js";
import { Science_valueContext } from "./MapIniParser.js";
import { Specialpower_propertyContext } from "./MapIniParser.js";
import { Specialpower_valueContext } from "./MapIniParser.js";
import { Audioevent_valueContext } from "./MapIniParser.js";
import { Upgrade_propertyContext } from "./MapIniParser.js";
import { Upgrade_valueContext } from "./MapIniParser.js";
import { Weaponslot_propertyContext } from "./MapIniParser.js";
import { Rand_valueContext } from "./MapIniParser.js";
import { Coord3DContext } from "./MapIniParser.js";


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
     * Visit a parse tree produced by `MapIniParser.fxlist_sound_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_sound_block?: (ctx: Fxlist_sound_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_rayeffect_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_rayeffect_block?: (ctx: Fxlist_rayeffect_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_tracer_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_tracer_block?: (ctx: Fxlist_tracer_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_lightpulse_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_lightpulse_block?: (ctx: Fxlist_lightpulse_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_viewshake_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_viewshake_block?: (ctx: Fxlist_viewshake_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_terrainscorch_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_terrainscorch_block?: (ctx: Fxlist_terrainscorch_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.fxlist_fxlistatbone_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_fxlistatbone_block?: (ctx: Fxlist_fxlistatbone_blockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.inGameUIClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInGameUIClass?: (ctx: InGameUIClassContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.damageType_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDamageType_value?: (ctx: DamageType_valueContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.cb_command_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_command_property?: (ctx: Cb_command_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.cb_command_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_command_value?: (ctx: Cb_command_valueContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.cb_buttonbordertype_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCb_buttonbordertype_value?: (ctx: Cb_buttonbordertype_valueContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.fxlist_sound_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_sound_property?: (ctx: Fxlist_sound_propertyContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.fxlist_viewshake_type_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_viewshake_type_property?: (ctx: Fxlist_viewshake_type_propertyContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.fxlist_name_object_propety`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFxlist_name_object_propety?: (ctx: Fxlist_name_object_propetyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.igui_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgui_properties?: (ctx: Igui_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.faction_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFaction_value?: (ctx: Faction_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.commandbutton_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommandbutton_value?: (ctx: Commandbutton_valueContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.weaponslot_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWeaponslot_property?: (ctx: Weaponslot_propertyContext) => Result;
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
}

