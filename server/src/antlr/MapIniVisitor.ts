// Generated from ./server/src/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AddModuleContext } from "./MapIniParser";
import { ReplaceModuleContext } from "./MapIniParser";
import { RemoveModuleContext } from "./MapIniParser";
import { DrawContext } from "./MapIniParser";
import { BodyContext } from "./MapIniParser";
import { BehaviorContext } from "./MapIniParser";
import { StringContext } from "./MapIniParser";
import { FiletypeContext } from "./MapIniParser";
import { IdContext } from "./MapIniParser";
import { IntContext } from "./MapIniParser";
import { FloatContext } from "./MapIniParser";
import { BoolContext } from "./MapIniParser";
import { ConditionstateContext } from "./MapIniParser";
import { DefaultconditionstateContext } from "./MapIniParser";
import { TransitionstateContext } from "./MapIniParser";
import { AliasconditionstateContext } from "./MapIniParser";
import { IgnoreconditionstatesContext } from "./MapIniParser";
import { ProgramContext } from "./MapIniParser";
import { ObjectContext } from "./MapIniParser";
import { ModuleModifierContext } from "./MapIniParser";
import { AddModuleTagContext } from "./MapIniParser";
import { ReplaceModuletagContext } from "./MapIniParser";
import { ModulesContext } from "./MapIniParser";
import { BehaviormoduleContext } from "./MapIniParser";
import { BodymoduleContext } from "./MapIniParser";
import { DrawmoduleContext } from "./MapIniParser";
import { ConditionstateAssignmentContext } from "./MapIniParser";
import { RemoveModuleTagContext } from "./MapIniParser";
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
	 * Visit a parse tree produced by the `addModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddModule?: (ctx: AddModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `replaceModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceModule?: (ctx: ReplaceModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `removeModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveModule?: (ctx: RemoveModuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `draw`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDraw?: (ctx: DrawContext) => Result;

	/**
	 * Visit a parse tree produced by the `body`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by the `behavior`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehavior?: (ctx: BehaviorContext) => Result;

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
	 * Visit a parse tree produced by the `conditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionstate?: (ctx: ConditionstateContext) => Result;

	/**
	 * Visit a parse tree produced by the `defaultconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultconditionstate?: (ctx: DefaultconditionstateContext) => Result;

	/**
	 * Visit a parse tree produced by the `transitionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionstate?: (ctx: TransitionstateContext) => Result;

	/**
	 * Visit a parse tree produced by the `aliasconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasconditionstate?: (ctx: AliasconditionstateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ignoreconditionstates`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnoreconditionstates?: (ctx: IgnoreconditionstatesContext) => Result;

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
	 * Visit a parse tree produced by `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleModifier?: (ctx: ModuleModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.addModuleTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddModuleTag?: (ctx: AddModuleTagContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.replaceModuletag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceModuletag?: (ctx: ReplaceModuletagContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModules?: (ctx: ModulesContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.behaviormodule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviormodule?: (ctx: BehaviormoduleContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.bodymodule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodymodule?: (ctx: BodymoduleContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.drawmodule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawmodule?: (ctx: DrawmoduleContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionstateAssignment?: (ctx: ConditionstateAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `MapIniParser.removeModuleTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveModuleTag?: (ctx: RemoveModuleTagContext) => Result;

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

