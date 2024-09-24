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
import { Commandbutton_valueContext } from "./MapIniParser";
import { Cursorname_valueContext } from "./MapIniParser";
import { Radius_cursorname_valueContext } from "./MapIniParser";
import { Invalid_cursorname_valueContext } from "./MapIniParser";
import { Mappedimage_valueContext } from "./MapIniParser";
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
import { FactionContext } from "./MapIniParser";


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
	 * Enter a parse tree produced by `MapIniParser.faction`.
	 * @param ctx the parse tree
	 */
	enterFaction?: (ctx: FactionContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.faction`.
	 * @param ctx the parse tree
	 */
	exitFaction?: (ctx: FactionContext) => void;
}

