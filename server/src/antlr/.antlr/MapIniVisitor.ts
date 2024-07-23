// Generated from ./server/src/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapIniParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MapIniVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionState?: (ctx: ConditionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `DefaultConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultConditionState?: (ctx: DefaultConditionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `TransitionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionState?: (ctx: TransitionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `AliasConditionState`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasConditionState?: (ctx: AliasConditionStateContext) => Result;

	/**
	 * Visit a parse tree produced by the `IgnoreConditionStates`
	 * labeled alternative in `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnoreConditionStates?: (ctx: IgnoreConditionStatesContext) => Result;

	/**
	 * Visit a parse tree produced by the `DrawModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawModule?: (ctx: DrawModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `BodyModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyModule?: (ctx: BodyModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `BehaviorModule`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviorModule?: (ctx: BehaviorModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddModule?: (ctx: AddModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReplaceModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceModule?: (ctx: ReplaceModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `RemoveModule`
	 * labeled alternative in `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveModule?: (ctx: RemoveModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `filetype`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFiletype?: (ctx: FiletypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `float`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `bool`
	 * labeled alternative in `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.moduleBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBlocks?: (ctx: ModuleBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.addModuleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddModuleBlock?: (ctx: AddModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.replaceModuleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceModuleBlock?: (ctx: ReplaceModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModules?: (ctx: ModulesContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.behaviormoduleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviormoduleBlock?: (ctx: BehaviormoduleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.bodyModuleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyModuleBlock?: (ctx: BodyModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.drawModuleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawModuleBlock?: (ctx: DrawModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.conditionStateBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionStateBlocks?: (ctx: ConditionStateBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.removeModuleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveModuleBlock?: (ctx: RemoveModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.ftype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFtype?: (ctx: FtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.rgb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRgb?: (ctx: RgbContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.procent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcent?: (ctx: ProcentContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.intRang`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntRang?: (ctx: IntRangContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.floatRang`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatRang?: (ctx: FloatRangContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.quoutedID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoutedID?: (ctx: QuoutedIDContext) => Result;
}

