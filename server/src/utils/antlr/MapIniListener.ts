// Generated from ./server/src/utils/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StringContext } from "./MapIniParser";
import { FiletypeContext } from "./MapIniParser";
import { ProcentageContext } from "./MapIniParser";
import { IdContext } from "./MapIniParser";
import { IntContext } from "./MapIniParser";
import { FloatContext } from "./MapIniParser";
import { BoolContext } from "./MapIniParser";
import { TurretValueContext } from "./MapIniParser";
import { AltTurretValueContext } from "./MapIniParser";
import { ProgramContext } from "./MapIniParser";
import { ObjectContext } from "./MapIniParser";
import { ModuleBlocksContext } from "./MapIniParser";
import { AddModuleBlockContext } from "./MapIniParser";
import { ReplaceModuleBlockContext } from "./MapIniParser";
import { ModulesContext } from "./MapIniParser";
import { ObjectBlocksContext } from "./MapIniParser";
import { ObjectPrerequisitesContext } from "./MapIniParser";
import { ObjectPropertyContext } from "./MapIniParser";
import { SciencePropetyContext } from "./MapIniParser";
import { ObjectWeaponSetContext } from "./MapIniParser";
import { ObjectArmorSetContext } from "./MapIniParser";
import { ObjectUnitSpecificSoundsContext } from "./MapIniParser";
import { ObjectUnitSpecificFXContext } from "./MapIniParser";
import { BehaviormoduleBlockContext } from "./MapIniParser";
import { BehaviorTurretContext } from "./MapIniParser";
import { BodyModuleBlockContext } from "./MapIniParser";
import { DrawModuleBlockContext } from "./MapIniParser";
import { ConditionStateBlocksContext } from "./MapIniParser";
import { ConditionStateBlockContext } from "./MapIniParser";
import { DefaultConditionStateBlockContext } from "./MapIniParser";
import { TransitionStateBlockContext } from "./MapIniParser";
import { AliasConditionStateBlockContext } from "./MapIniParser";
import { IgnoreConditionStateBlockContext } from "./MapIniParser";
import { RemoveModuleBlockContext } from "./MapIniParser";
import { PropertyContext } from "./MapIniParser";
import { GenericPropertyContext } from "./MapIniParser";
import { TurretPropertyContext } from "./MapIniParser";
import { AltTurretPropertyContext } from "./MapIniParser";
import { EndContext } from "./MapIniParser";
import { ValueContext } from "./MapIniParser";
import { FtypeContext } from "./MapIniParser";
import { RgbContext } from "./MapIniParser";
import { ProcentContext } from "./MapIniParser";
import { IntRangContext } from "./MapIniParser";
import { FloatRangContext } from "./MapIniParser";
import { QuoutedIDContext } from "./MapIniParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MapIniParser`.
 */
export interface MapIniListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `filetype`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterFiletype?: (ctx: FiletypeContext) => void;
	/**
	 * Exit a parse tree produced by the `filetype`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitFiletype?: (ctx: FiletypeContext) => void;

	/**
	 * Enter a parse tree produced by the `procentage`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterProcentage?: (ctx: ProcentageContext) => void;
	/**
	 * Exit a parse tree produced by the `procentage`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitProcentage?: (ctx: ProcentageContext) => void;

	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `float`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterFloat?: (ctx: FloatContext) => void;
	/**
	 * Exit a parse tree produced by the `float`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitFloat?: (ctx: FloatContext) => void;

	/**
	 * Enter a parse tree produced by the `bool`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by the `bool`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by the `turretValue`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterTurretValue?: (ctx: TurretValueContext) => void;
	/**
	 * Exit a parse tree produced by the `turretValue`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitTurretValue?: (ctx: TurretValueContext) => void;

	/**
	 * Enter a parse tree produced by the `altTurretValue`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterAltTurretValue?: (ctx: AltTurretValueContext) => void;
	/**
	 * Exit a parse tree produced by the `altTurretValue`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitAltTurretValue?: (ctx: AltTurretValueContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	enterModuleBlocks?: (ctx: ModuleBlocksContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	exitModuleBlocks?: (ctx: ModuleBlocksContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.addModuleBlock`.
	 * @param ctx the parse tree
	 */
	enterAddModuleBlock?: (ctx: AddModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.addModuleBlock`.
	 * @param ctx the parse tree
	 */
	exitAddModuleBlock?: (ctx: AddModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.replaceModuleBlock`.
	 * @param ctx the parse tree
	 */
	enterReplaceModuleBlock?: (ctx: ReplaceModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.replaceModuleBlock`.
	 * @param ctx the parse tree
	 */
	exitReplaceModuleBlock?: (ctx: ReplaceModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterModules?: (ctx: ModulesContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitModules?: (ctx: ModulesContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectBlocks`.
	 * @param ctx the parse tree
	 */
	enterObjectBlocks?: (ctx: ObjectBlocksContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectBlocks`.
	 * @param ctx the parse tree
	 */
	exitObjectBlocks?: (ctx: ObjectBlocksContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectPrerequisites`.
	 * @param ctx the parse tree
	 */
	enterObjectPrerequisites?: (ctx: ObjectPrerequisitesContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectPrerequisites`.
	 * @param ctx the parse tree
	 */
	exitObjectPrerequisites?: (ctx: ObjectPrerequisitesContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectProperty`.
	 * @param ctx the parse tree
	 */
	enterObjectProperty?: (ctx: ObjectPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectProperty`.
	 * @param ctx the parse tree
	 */
	exitObjectProperty?: (ctx: ObjectPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.sciencePropety`.
	 * @param ctx the parse tree
	 */
	enterSciencePropety?: (ctx: SciencePropetyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.sciencePropety`.
	 * @param ctx the parse tree
	 */
	exitSciencePropety?: (ctx: SciencePropetyContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectWeaponSet`.
	 * @param ctx the parse tree
	 */
	enterObjectWeaponSet?: (ctx: ObjectWeaponSetContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectWeaponSet`.
	 * @param ctx the parse tree
	 */
	exitObjectWeaponSet?: (ctx: ObjectWeaponSetContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectArmorSet`.
	 * @param ctx the parse tree
	 */
	enterObjectArmorSet?: (ctx: ObjectArmorSetContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectArmorSet`.
	 * @param ctx the parse tree
	 */
	exitObjectArmorSet?: (ctx: ObjectArmorSetContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectUnitSpecificSounds`.
	 * @param ctx the parse tree
	 */
	enterObjectUnitSpecificSounds?: (ctx: ObjectUnitSpecificSoundsContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectUnitSpecificSounds`.
	 * @param ctx the parse tree
	 */
	exitObjectUnitSpecificSounds?: (ctx: ObjectUnitSpecificSoundsContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.objectUnitSpecificFX`.
	 * @param ctx the parse tree
	 */
	enterObjectUnitSpecificFX?: (ctx: ObjectUnitSpecificFXContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.objectUnitSpecificFX`.
	 * @param ctx the parse tree
	 */
	exitObjectUnitSpecificFX?: (ctx: ObjectUnitSpecificFXContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.behaviormoduleBlock`.
	 * @param ctx the parse tree
	 */
	enterBehaviormoduleBlock?: (ctx: BehaviormoduleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.behaviormoduleBlock`.
	 * @param ctx the parse tree
	 */
	exitBehaviormoduleBlock?: (ctx: BehaviormoduleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.behaviorTurret`.
	 * @param ctx the parse tree
	 */
	enterBehaviorTurret?: (ctx: BehaviorTurretContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.behaviorTurret`.
	 * @param ctx the parse tree
	 */
	exitBehaviorTurret?: (ctx: BehaviorTurretContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.bodyModuleBlock`.
	 * @param ctx the parse tree
	 */
	enterBodyModuleBlock?: (ctx: BodyModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.bodyModuleBlock`.
	 * @param ctx the parse tree
	 */
	exitBodyModuleBlock?: (ctx: BodyModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.drawModuleBlock`.
	 * @param ctx the parse tree
	 */
	enterDrawModuleBlock?: (ctx: DrawModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.drawModuleBlock`.
	 * @param ctx the parse tree
	 */
	exitDrawModuleBlock?: (ctx: DrawModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterConditionStateBlocks?: (ctx: ConditionStateBlocksContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitConditionStateBlocks?: (ctx: ConditionStateBlocksContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.conditionStateBlock`.
	 * @param ctx the parse tree
	 */
	enterConditionStateBlock?: (ctx: ConditionStateBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.conditionStateBlock`.
	 * @param ctx the parse tree
	 */
	exitConditionStateBlock?: (ctx: ConditionStateBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.defaultConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	enterDefaultConditionStateBlock?: (ctx: DefaultConditionStateBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.defaultConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	exitDefaultConditionStateBlock?: (ctx: DefaultConditionStateBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.transitionStateBlock`.
	 * @param ctx the parse tree
	 */
	enterTransitionStateBlock?: (ctx: TransitionStateBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.transitionStateBlock`.
	 * @param ctx the parse tree
	 */
	exitTransitionStateBlock?: (ctx: TransitionStateBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.aliasConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	enterAliasConditionStateBlock?: (ctx: AliasConditionStateBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.aliasConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	exitAliasConditionStateBlock?: (ctx: AliasConditionStateBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.ignoreConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	enterIgnoreConditionStateBlock?: (ctx: IgnoreConditionStateBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.ignoreConditionStateBlock`.
	 * @param ctx the parse tree
	 */
	exitIgnoreConditionStateBlock?: (ctx: IgnoreConditionStateBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.removeModuleBlock`.
	 * @param ctx the parse tree
	 */
	enterRemoveModuleBlock?: (ctx: RemoveModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.removeModuleBlock`.
	 * @param ctx the parse tree
	 */
	exitRemoveModuleBlock?: (ctx: RemoveModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.genericProperty`.
	 * @param ctx the parse tree
	 */
	enterGenericProperty?: (ctx: GenericPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.genericProperty`.
	 * @param ctx the parse tree
	 */
	exitGenericProperty?: (ctx: GenericPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.turretProperty`.
	 * @param ctx the parse tree
	 */
	enterTurretProperty?: (ctx: TurretPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.turretProperty`.
	 * @param ctx the parse tree
	 */
	exitTurretProperty?: (ctx: TurretPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.altTurretProperty`.
	 * @param ctx the parse tree
	 */
	enterAltTurretProperty?: (ctx: AltTurretPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.altTurretProperty`.
	 * @param ctx the parse tree
	 */
	exitAltTurretProperty?: (ctx: AltTurretPropertyContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.ftype`.
	 * @param ctx the parse tree
	 */
	enterFtype?: (ctx: FtypeContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.ftype`.
	 * @param ctx the parse tree
	 */
	exitFtype?: (ctx: FtypeContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.rgb`.
	 * @param ctx the parse tree
	 */
	enterRgb?: (ctx: RgbContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.rgb`.
	 * @param ctx the parse tree
	 */
	exitRgb?: (ctx: RgbContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.procent`.
	 * @param ctx the parse tree
	 */
	enterProcent?: (ctx: ProcentContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.procent`.
	 * @param ctx the parse tree
	 */
	exitProcent?: (ctx: ProcentContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.intRang`.
	 * @param ctx the parse tree
	 */
	enterIntRang?: (ctx: IntRangContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.intRang`.
	 * @param ctx the parse tree
	 */
	exitIntRang?: (ctx: IntRangContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.floatRang`.
	 * @param ctx the parse tree
	 */
	enterFloatRang?: (ctx: FloatRangContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.floatRang`.
	 * @param ctx the parse tree
	 */
	exitFloatRang?: (ctx: FloatRangContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.quoutedID`.
	 * @param ctx the parse tree
	 */
	enterQuoutedID?: (ctx: QuoutedIDContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.quoutedID`.
	 * @param ctx the parse tree
	 */
	exitQuoutedID?: (ctx: QuoutedIDContext) => void;
}

