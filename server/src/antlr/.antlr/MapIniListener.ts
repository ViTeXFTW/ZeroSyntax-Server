// Generated from ./server/src/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ConditionStateContext } from "./MapIniParser";
import { DefaultConditionStateContext } from "./MapIniParser";
import { TransitionStateContext } from "./MapIniParser";
import { AliasConditionStateContext } from "./MapIniParser";
import { IgnoreConditionStatesContext } from "./MapIniParser";
import { DrawModuleContext } from "./MapIniParser";
import { BodyModuleContext } from "./MapIniParser";
import { BehaviorModuleContext } from "./MapIniParser";
import { AddModuleContext } from "./MapIniParser";
import { ReplaceModuleContext } from "./MapIniParser";
import { RemoveModuleContext } from "./MapIniParser";
import { StringContext } from "./MapIniParser";
import { FiletypeContext } from "./MapIniParser";
import { IdContext } from "./MapIniParser";
import { IntContext } from "./MapIniParser";
import { FloatContext } from "./MapIniParser";
import { BoolContext } from "./MapIniParser";
import { ProgramContext } from "./MapIniParser";
import { ObjectContext } from "./MapIniParser";
import { ModuleBlocksContext } from "./MapIniParser";
import { AddModuleBlockContext } from "./MapIniParser";
import { ReplaceModuleBlockContext } from "./MapIniParser";
import { ModulesContext } from "./MapIniParser";
import { BehaviormoduleBlockContext } from "./MapIniParser";
import { BodyModuleBlockContext } from "./MapIniParser";
import { DrawModuleBlockContext } from "./MapIniParser";
import { ConditionStateBlocksContext } from "./MapIniParser";
import { RemoveModuleBlockContext } from "./MapIniParser";
import { PropertyContext } from "./MapIniParser";
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
	 * Enter a parse tree produced by the `ConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterConditionState?: (ctx: ConditionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `ConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitConditionState?: (ctx: ConditionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `DefaultConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterDefaultConditionState?: (ctx: DefaultConditionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `DefaultConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitDefaultConditionState?: (ctx: DefaultConditionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `TransitionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterTransitionState?: (ctx: TransitionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `TransitionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitTransitionState?: (ctx: TransitionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `AliasConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterAliasConditionState?: (ctx: AliasConditionStateContext) => void;
	/**
	 * Exit a parse tree produced by the `AliasConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitAliasConditionState?: (ctx: AliasConditionStateContext) => void;

	/**
	 * Enter a parse tree produced by the `IgnoreConditionStates`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	enterIgnoreConditionStates?: (ctx: IgnoreConditionStatesContext) => void;
	/**
	 * Exit a parse tree produced by the `IgnoreConditionStates`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 */
	exitIgnoreConditionStates?: (ctx: IgnoreConditionStatesContext) => void;

	/**
	 * Enter a parse tree produced by the `DrawModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterDrawModule?: (ctx: DrawModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `DrawModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitDrawModule?: (ctx: DrawModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `BodyModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterBodyModule?: (ctx: BodyModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `BodyModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitBodyModule?: (ctx: BodyModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `BehaviorModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterBehaviorModule?: (ctx: BehaviorModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `BehaviorModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitBehaviorModule?: (ctx: BehaviorModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `AddModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	enterAddModule?: (ctx: AddModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `AddModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	exitAddModule?: (ctx: AddModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `ReplaceModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	enterReplaceModule?: (ctx: ReplaceModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `ReplaceModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	exitReplaceModule?: (ctx: ReplaceModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `RemoveModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	enterRemoveModule?: (ctx: RemoveModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `RemoveModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 */
	exitRemoveModule?: (ctx: RemoveModuleContext) => void;

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

