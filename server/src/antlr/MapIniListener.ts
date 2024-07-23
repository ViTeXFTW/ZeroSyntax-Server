// Generated from ./server/src/antlr/MapIni.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `MapIniParser`.
 */
export interface MapIniListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `addModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	enterAddModule?: (ctx: AddModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `addModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	exitAddModule?: (ctx: AddModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `replaceModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	enterReplaceModule?: (ctx: ReplaceModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `replaceModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	exitReplaceModule?: (ctx: ReplaceModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `removeModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	enterRemoveModule?: (ctx: RemoveModuleContext) => void;
	/**
	 * Exit a parse tree produced by the `removeModule`
	 * labeled alternative in `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	exitRemoveModule?: (ctx: RemoveModuleContext) => void;

	/**
	 * Enter a parse tree produced by the `draw`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterDraw?: (ctx: DrawContext) => void;
	/**
	 * Exit a parse tree produced by the `draw`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitDraw?: (ctx: DrawContext) => void;

	/**
	 * Enter a parse tree produced by the `body`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by the `body`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by the `behavior`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	enterBehavior?: (ctx: BehaviorContext) => void;
	/**
	 * Exit a parse tree produced by the `behavior`
	 * labeled alternative in `MapIniParser.modules`.
	 * @param ctx the parse tree
	 */
	exitBehavior?: (ctx: BehaviorContext) => void;

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
	 * Enter a parse tree produced by the `conditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterConditionstate?: (ctx: ConditionstateContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitConditionstate?: (ctx: ConditionstateContext) => void;

	/**
	 * Enter a parse tree produced by the `defaultconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterDefaultconditionstate?: (ctx: DefaultconditionstateContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitDefaultconditionstate?: (ctx: DefaultconditionstateContext) => void;

	/**
	 * Enter a parse tree produced by the `transitionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterTransitionstate?: (ctx: TransitionstateContext) => void;
	/**
	 * Exit a parse tree produced by the `transitionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitTransitionstate?: (ctx: TransitionstateContext) => void;

	/**
	 * Enter a parse tree produced by the `aliasconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterAliasconditionstate?: (ctx: AliasconditionstateContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasconditionstate`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitAliasconditionstate?: (ctx: AliasconditionstateContext) => void;

	/**
	 * Enter a parse tree produced by the `ignoreconditionstates`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterIgnoreconditionstates?: (ctx: IgnoreconditionstatesContext) => void;
	/**
	 * Exit a parse tree produced by the `ignoreconditionstates`
	 * labeled alternative in `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitIgnoreconditionstates?: (ctx: IgnoreconditionstatesContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	enterModuleModifier?: (ctx: ModuleModifierContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.moduleModifier`.
	 * @param ctx the parse tree
	 */
	exitModuleModifier?: (ctx: ModuleModifierContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.addModuleTag`.
	 * @param ctx the parse tree
	 */
	enterAddModuleTag?: (ctx: AddModuleTagContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.addModuleTag`.
	 * @param ctx the parse tree
	 */
	exitAddModuleTag?: (ctx: AddModuleTagContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.replaceModuletag`.
	 * @param ctx the parse tree
	 */
	enterReplaceModuletag?: (ctx: ReplaceModuletagContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.replaceModuletag`.
	 * @param ctx the parse tree
	 */
	exitReplaceModuletag?: (ctx: ReplaceModuletagContext) => void;

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
	 * Enter a parse tree produced by `MapIniParser.behaviormodule`.
	 * @param ctx the parse tree
	 */
	enterBehaviormodule?: (ctx: BehaviormoduleContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.behaviormodule`.
	 * @param ctx the parse tree
	 */
	exitBehaviormodule?: (ctx: BehaviormoduleContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.bodymodule`.
	 * @param ctx the parse tree
	 */
	enterBodymodule?: (ctx: BodymoduleContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.bodymodule`.
	 * @param ctx the parse tree
	 */
	exitBodymodule?: (ctx: BodymoduleContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.drawmodule`.
	 * @param ctx the parse tree
	 */
	enterDrawmodule?: (ctx: DrawmoduleContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.drawmodule`.
	 * @param ctx the parse tree
	 */
	exitDrawmodule?: (ctx: DrawmoduleContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	enterConditionstateAssignment?: (ctx: ConditionstateAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.conditionstateAssignment`.
	 * @param ctx the parse tree
	 */
	exitConditionstateAssignment?: (ctx: ConditionstateAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `MapIniParser.removeModuleTag`.
	 * @param ctx the parse tree
	 */
	enterRemoveModuleTag?: (ctx: RemoveModuleTagContext) => void;
	/**
	 * Exit a parse tree produced by `MapIniParser.removeModuleTag`.
	 * @param ctx the parse tree
	 */
	exitRemoveModuleTag?: (ctx: RemoveModuleTagContext) => void;

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

