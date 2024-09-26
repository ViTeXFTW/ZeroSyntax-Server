// Generated from ./server/src/utils/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./MapIniParser";
import { ClassesContext } from "./MapIniParser";
import { AiDataClassContext } from "./MapIniParser";
import { AidataClassProperties_singleContext } from "./MapIniParser";
import { AidataClassproperties_BlockSkirmishBuildListContext } from "./MapIniParser";
import { SkirmishBuildListBlockContext } from "./MapIniParser";
import { SkirmishBuildListBlock_structure_propertiesContext } from "./MapIniParser";
import { AidataClassProperties_blockSideinfoContext } from "./MapIniParser";
import { SideinfopropertiesContext } from "./MapIniParser";
import { Sideinfo_skillset_blocksContext } from "./MapIniParser";
import { MappedImageClassContext } from "./MapIniParser";
import { MappedImageClassPropertiesContext } from "./MapIniParser";
import { Animation2DClassContext } from "./MapIniParser";
import { Animation2DClassPropertiesContext } from "./MapIniParser";
import { ArmorClassContext } from "./MapIniParser";
import { ArmorClassPropertiesContext } from "./MapIniParser";
import { CommandButtonClassContext } from "./MapIniParser";
import { CommandButtonClassPropertiesContext } from "./MapIniParser";
import { CommandSetClassContext } from "./MapIniParser";
import { CommandSetClassPropertyContext } from "./MapIniParser";
import { DamageFXClassContext } from "./MapIniParser";
import { DamageFXClassPropertiesContext } from "./MapIniParser";
import { DrawGroupInfoClassContext } from "./MapIniParser";
import { DrawgroupinfoPropertiesContext } from "./MapIniParser";
import { FxListClassContext } from "./MapIniParser";
import { FxlistblocksContext } from "./MapIniParser";
import { Fxlist_ps_blockContext } from "./MapIniParser";
import { Fxlist_sound_blockContext } from "./MapIniParser";
import { Fxlist_rayeffect_blockContext } from "./MapIniParser";
import { Fxlist_tracer_blockContext } from "./MapIniParser";
import { Fxlist_lightpulse_blockContext } from "./MapIniParser";
import { Fxlist_viewshake_blockContext } from "./MapIniParser";
import { Fxlist_terrainscorch_blockContext } from "./MapIniParser";
import { Fxlist_fxlistatbone_blockContext } from "./MapIniParser";
import { InGameUIClassContext } from "./MapIniParser";
import { Igui_blocksContext } from "./MapIniParser";
import { Ingui_block_propertiesContext } from "./MapIniParser";
import { LocomotorClassContext } from "./MapIniParser";
import { Locomotor_propertiesContext } from "./MapIniParser";
import { Locomotor_surface_propertyContext } from "./MapIniParser";
import { Locomotor_zbehavior_propertyContext } from "./MapIniParser";
import { Locomotor_appereance_propertyContext } from "./MapIniParser";
import { Locomotor_movepriority_propertyContext } from "./MapIniParser";
import { Surface_valueContext } from "./MapIniParser";
import { Zbehavior_valueContext } from "./MapIniParser";
import { Appereance_valueContext } from "./MapIniParser";
import { Movepriority_valueContext } from "./MapIniParser";
import { WeaponClassContext } from "./MapIniParser";
import { Weapon_propertiesContext } from "./MapIniParser";
import { Weapon_damagetype_propertyContext } from "./MapIniParser";
import { Weapon_deathtype_propertyContext } from "./MapIniParser";
import { Weapon_damageaffects_propertyContext } from "./MapIniParser";
import { Weapon_weaponbonus_propertyContext } from "./MapIniParser";
import { Weapon_lasterbone_propertyContext } from "./MapIniParser";
import { Weapon_weaponbonus_condition_valueContext } from "./MapIniParser";
import { Weapon_weaponbonus_bonus_valueContext } from "./MapIniParser";
import { DamageType_valueContext } from "./MapIniParser";
import { DeathType_valueContext } from "./MapIniParser";
import { DamageAffects_valueContext } from "./MapIniParser";
import { WeatherClassContext } from "./MapIniParser";
import { Weather_propertiesContext } from "./MapIniParser";
import { EndContext } from "./MapIniParser";
import { FileContext } from "./MapIniParser";
import { Cb_command_propertyContext } from "./MapIniParser";
import { Cb_command_valueContext } from "./MapIniParser";
import { Cb_options_propertyContext } from "./MapIniParser";
import { Cb_options_valueContext } from "./MapIniParser";
import { Cb_buttonimage_propertyContext } from "./MapIniParser";
import { Cb_buttonbordertype_propertyContext } from "./MapIniParser";
import { Cb_buttonbordertype_valueContext } from "./MapIniParser";
import { Cb_textlabel_propertyContext } from "./MapIniParser";
import { Cb_descriptionlabel_propertyContext } from "./MapIniParser";
import { Cb_conflictinglabel_propertyContext } from "./MapIniParser";
import { Cb_cursorname_properyContext } from "./MapIniParser";
import { Cb_radius_cursorname_valueContext } from "./MapIniParser";
import { Cb_invalid_cursorname_properyContext } from "./MapIniParser";
import { Cb_unitspecificsound_propertyContext } from "./MapIniParser";
import { Cb_maxshotsfire_propertyContext } from "./MapIniParser";
import { Dfx_throttletime_propertyContext } from "./MapIniParser";
import { Dfx_amountformajorfx_propertyContext } from "./MapIniParser";
import { Dfx_majorfx_propertyContext } from "./MapIniParser";
import { Dfx_minorfx_propertyContext } from "./MapIniParser";
import { Dfx_vetmajorfx_propertyContext } from "./MapIniParser";
import { Dfx_vetminorfx_propertyContext } from "./MapIniParser";
import { Dgi_useplayercolor_propertyContext } from "./MapIniParser";
import { Dgi_colorfortext_propertyContext } from "./MapIniParser";
import { Dgi_colordropshadow_propertyContext } from "./MapIniParser";
import { Dgi_dropshadowoffsetX_propertyContext } from "./MapIniParser";
import { Dgi_dropshadowoffsetY_propertyContext } from "./MapIniParser";
import { Dgi_fontname_propertyContext } from "./MapIniParser";
import { Dgi_fontsize_propertyContext } from "./MapIniParser";
import { Dgi_fontisbold_propertyContext } from "./MapIniParser";
import { Dgi_drawposXperc_propertyContext } from "./MapIniParser";
import { Dgi_drawposYperc_propertyContext } from "./MapIniParser";
import { Fxlist_ps_name_propertyContext } from "./MapIniParser";
import { Fxlist_ps_count_propertyContext } from "./MapIniParser";
import { Fxlist_ps_offset_propertyContext } from "./MapIniParser";
import { Fxlist_ps_radius_propertyContext } from "./MapIniParser";
import { Fxlist_ps_height_propertyContext } from "./MapIniParser";
import { Fxlist_ps_initialDelay_propertyContext } from "./MapIniParser";
import { Fxlist_ps_rotateX_propertyContext } from "./MapIniParser";
import { Fxlist_ps_rotatey_propertyContext } from "./MapIniParser";
import { Fxlist_ps_rotateZ_propertyContext } from "./MapIniParser";
import { Fxlist_ps_orienttoobject_propertyContext } from "./MapIniParser";
import { Fxlist_ps_ricochet_propertyContext } from "./MapIniParser";
import { Fxlist_ps_usecallerradius_propertyContext } from "./MapIniParser";
import { Fxlist_ps_attachtoobject_propertyContext } from "./MapIniParser";
import { Fxlist_ps_creategroundheight_propertyContext } from "./MapIniParser";
import { Fxlist_sound_propertyContext } from "./MapIniParser";
import { Fxlist_rayeffect_primaryoffset_propertyContext } from "./MapIniParser";
import { Fxlist_rayeffect_secondaryoffset_propretyContext } from "./MapIniParser";
import { Fxlist_tracer_name_propetyContext } from "./MapIniParser";
import { Fxlist_tracer_bonename_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_speed_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_decayat_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_length_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_width_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_color_propertyContext } from "./MapIniParser";
import { Fxlist_tracer_probability_propertyContext } from "./MapIniParser";
import { Fxlist_lightpulse_color_propertyContext } from "./MapIniParser";
import { Fxlist_lightpulse_radius_propertyContext } from "./MapIniParser";
import { Fxlist_lightpulse_radiuspercentobjectsize_propertyContext } from "./MapIniParser";
import { Fxlist_lightpulse_increasetime_propertyContext } from "./MapIniParser";
import { Fxlist_lightpulse_decreasetime_propertyContext } from "./MapIniParser";
import { Fxlist_viewshake_type_propertyContext } from "./MapIniParser";
import { Fxlist_scorch_type_propertyContext } from "./MapIniParser";
import { Fxlist_scorch_radius_propertyContext } from "./MapIniParser";
import { Fxlist_atbonepos_fx_propertyContext } from "./MapIniParser";
import { Fxlist_atbonepos_bonename_propertyContext } from "./MapIniParser";
import { Fxlist_atbonepos_orienttoobject_propertyContext } from "./MapIniParser";
import { Fxlist_name_object_propetyContext } from "./MapIniParser";
import { Igui_propertiesContext } from "./MapIniParser";
import { Faction_valueContext } from "./MapIniParser";
import { Commandbutton_valueContext } from "./MapIniParser";
import { Cursorname_valueContext } from "./MapIniParser";
import { Radius_cursorname_valueContext } from "./MapIniParser";
import { Invalid_cursorname_valueContext } from "./MapIniParser";
import { Mappedimage_valueContext } from "./MapIniParser";
import { Particlesystem_valueContext } from "./MapIniParser";
import { Fxlist_valueContext } from "./MapIniParser";
import { Object_propertyContext } from "./MapIniParser";
import { Object_valueContext } from "./MapIniParser";
import { Science_propertyContext } from "./MapIniParser";
import { Science_valueContext } from "./MapIniParser";
import { Specialpower_propertyContext } from "./MapIniParser";
import { Specialpower_valueContext } from "./MapIniParser";
import { Audioevent_valueContext } from "./MapIniParser";
import { Upgrade_propertyContext } from "./MapIniParser";
import { Upgrade_valueContext } from "./MapIniParser";
import { Weaponslot_propertyContext } from "./MapIniParser";
import { Rand_valueContext } from "./MapIniParser";
import { Coord3DContext } from "./MapIniParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MapIniParser`.
 */
export interface MapIniListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `MapIniParser.aidataClassProperties_single`.
	 * @param ctx the parse tree
	 */
	enterAidataClassProperties_single?: (ctx: AidataClassProperties_singleContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.aidataClassProperties_single`.
	 * @param ctx the parse tree
	 */
	exitAidataClassProperties_single?: (ctx: AidataClassProperties_singleContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.aidataClassproperties_BlockSkirmishBuildList`.
	 * @param ctx the parse tree
	 */
	enterAidataClassproperties_BlockSkirmishBuildList?: (ctx: AidataClassproperties_BlockSkirmishBuildListContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.aidataClassproperties_BlockSkirmishBuildList`.
	 * @param ctx the parse tree
	 */
	exitAidataClassproperties_BlockSkirmishBuildList?: (ctx: AidataClassproperties_BlockSkirmishBuildListContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.skirmishBuildListBlock`.
	 * @param ctx the parse tree
	 */
	enterSkirmishBuildListBlock?: (ctx: SkirmishBuildListBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.skirmishBuildListBlock`.
	 * @param ctx the parse tree
	 */
	exitSkirmishBuildListBlock?: (ctx: SkirmishBuildListBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.skirmishBuildListBlock_structure_properties`.
	 * @param ctx the parse tree
	 */
	enterSkirmishBuildListBlock_structure_properties?: (ctx: SkirmishBuildListBlock_structure_propertiesContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.skirmishBuildListBlock_structure_properties`.
	 * @param ctx the parse tree
	 */
	exitSkirmishBuildListBlock_structure_properties?: (ctx: SkirmishBuildListBlock_structure_propertiesContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.aidataClassProperties_blockSideinfo`.
	 * @param ctx the parse tree
	 */
	enterAidataClassProperties_blockSideinfo?: (ctx: AidataClassProperties_blockSideinfoContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.aidataClassProperties_blockSideinfo`.
	 * @param ctx the parse tree
	 */
	exitAidataClassProperties_blockSideinfo?: (ctx: AidataClassProperties_blockSideinfoContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.sideinfoproperties`.
	 * @param ctx the parse tree
	 */
	enterSideinfoproperties?: (ctx: SideinfopropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.sideinfoproperties`.
	 * @param ctx the parse tree
	 */
	exitSideinfoproperties?: (ctx: SideinfopropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.sideinfo_skillset_blocks`.
	 * @param ctx the parse tree
	 */
	enterSideinfo_skillset_blocks?: (ctx: Sideinfo_skillset_blocksContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.sideinfo_skillset_blocks`.
	 * @param ctx the parse tree
	 */
	exitSideinfo_skillset_blocks?: (ctx: Sideinfo_skillset_blocksContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.cb_command_value`.
	 * @param ctx the parse tree
	 */
	enterCb_command_value?: (ctx: Cb_command_valueContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.cb_command_value`.
	 * @param ctx the parse tree
	 */
	exitCb_command_value?: (ctx: Cb_command_valueContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.cb_buttonbordertype_value`.
	 * @param ctx the parse tree
	 */
	enterCb_buttonbordertype_value?: (ctx: Cb_buttonbordertype_valueContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.cb_buttonbordertype_value`.
	 * @param ctx the parse tree
	 */
	exitCb_buttonbordertype_value?: (ctx: Cb_buttonbordertype_valueContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.fxlist_name_object_propety`.
	 * @param ctx the parse tree
	 */
	enterFxlist_name_object_propety?: (ctx: Fxlist_name_object_propetyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.fxlist_name_object_propety`.
	 * @param ctx the parse tree
	 */
	exitFxlist_name_object_propety?: (ctx: Fxlist_name_object_propetyContext) => void;

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
}

