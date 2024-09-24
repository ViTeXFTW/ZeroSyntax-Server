// Generated from ./server/src/utils/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapIniParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MapIniVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by `MapIniParser.aidataClassProperties_single`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAidataClassProperties_single?: (ctx: AidataClassProperties_singleContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.aidataClassproperties_BlockSkirmishBuildList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAidataClassproperties_BlockSkirmishBuildList?: (ctx: AidataClassproperties_BlockSkirmishBuildListContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.skirmishBuildListBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkirmishBuildListBlock?: (ctx: SkirmishBuildListBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.skirmishBuildListBlock_structure_properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkirmishBuildListBlock_structure_properties?: (ctx: SkirmishBuildListBlock_structure_propertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.aidataClassProperties_blockSideinfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAidataClassProperties_blockSideinfo?: (ctx: AidataClassProperties_blockSideinfoContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.sideinfoproperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSideinfoproperties?: (ctx: SideinfopropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.sideinfo_skillset_blocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSideinfo_skillset_blocks?: (ctx: Sideinfo_skillset_blocksContext) => Result;

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
	 * Visit a parse tree produced by `MapIniParser.faction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFaction?: (ctx: FactionContext) => Result;
}

