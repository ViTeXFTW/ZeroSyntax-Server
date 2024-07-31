// Generated from c:/Users/mads2/Desktop/ZeroSyntax/ZeroSyntax-Server/server/src/utils/antlr/MapIni.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MapIniParser}.
 */
public interface MapIniListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MapIniParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MapIniParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MapIniParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#object}.
	 * @param ctx the parse tree
	 */
	void enterObject(MapIniParser.ObjectContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#object}.
	 * @param ctx the parse tree
	 */
	void exitObject(MapIniParser.ObjectContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#moduleBlocks}.
	 * @param ctx the parse tree
	 */
	void enterModuleBlocks(MapIniParser.ModuleBlocksContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#moduleBlocks}.
	 * @param ctx the parse tree
	 */
	void exitModuleBlocks(MapIniParser.ModuleBlocksContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#addModuleBlock}.
	 * @param ctx the parse tree
	 */
	void enterAddModuleBlock(MapIniParser.AddModuleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#addModuleBlock}.
	 * @param ctx the parse tree
	 */
	void exitAddModuleBlock(MapIniParser.AddModuleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#replaceModuleBlock}.
	 * @param ctx the parse tree
	 */
	void enterReplaceModuleBlock(MapIniParser.ReplaceModuleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#replaceModuleBlock}.
	 * @param ctx the parse tree
	 */
	void exitReplaceModuleBlock(MapIniParser.ReplaceModuleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#modules}.
	 * @param ctx the parse tree
	 */
	void enterModules(MapIniParser.ModulesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#modules}.
	 * @param ctx the parse tree
	 */
	void exitModules(MapIniParser.ModulesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectBlocks}.
	 * @param ctx the parse tree
	 */
	void enterObjectBlocks(MapIniParser.ObjectBlocksContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectBlocks}.
	 * @param ctx the parse tree
	 */
	void exitObjectBlocks(MapIniParser.ObjectBlocksContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectPrerequisites}.
	 * @param ctx the parse tree
	 */
	void enterObjectPrerequisites(MapIniParser.ObjectPrerequisitesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectPrerequisites}.
	 * @param ctx the parse tree
	 */
	void exitObjectPrerequisites(MapIniParser.ObjectPrerequisitesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectProperty}.
	 * @param ctx the parse tree
	 */
	void enterObjectProperty(MapIniParser.ObjectPropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectProperty}.
	 * @param ctx the parse tree
	 */
	void exitObjectProperty(MapIniParser.ObjectPropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectWeaponSet}.
	 * @param ctx the parse tree
	 */
	void enterObjectWeaponSet(MapIniParser.ObjectWeaponSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectWeaponSet}.
	 * @param ctx the parse tree
	 */
	void exitObjectWeaponSet(MapIniParser.ObjectWeaponSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectArmorSet}.
	 * @param ctx the parse tree
	 */
	void enterObjectArmorSet(MapIniParser.ObjectArmorSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectArmorSet}.
	 * @param ctx the parse tree
	 */
	void exitObjectArmorSet(MapIniParser.ObjectArmorSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectUnitSpecificSounds}.
	 * @param ctx the parse tree
	 */
	void enterObjectUnitSpecificSounds(MapIniParser.ObjectUnitSpecificSoundsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectUnitSpecificSounds}.
	 * @param ctx the parse tree
	 */
	void exitObjectUnitSpecificSounds(MapIniParser.ObjectUnitSpecificSoundsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#behaviormoduleBlock}.
	 * @param ctx the parse tree
	 */
	void enterBehaviormoduleBlock(MapIniParser.BehaviormoduleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#behaviormoduleBlock}.
	 * @param ctx the parse tree
	 */
	void exitBehaviormoduleBlock(MapIniParser.BehaviormoduleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#bodyModuleBlock}.
	 * @param ctx the parse tree
	 */
	void enterBodyModuleBlock(MapIniParser.BodyModuleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#bodyModuleBlock}.
	 * @param ctx the parse tree
	 */
	void exitBodyModuleBlock(MapIniParser.BodyModuleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#drawModuleBlock}.
	 * @param ctx the parse tree
	 */
	void enterDrawModuleBlock(MapIniParser.DrawModuleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#drawModuleBlock}.
	 * @param ctx the parse tree
	 */
	void exitDrawModuleBlock(MapIniParser.DrawModuleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#conditionStateBlocks}.
	 * @param ctx the parse tree
	 */
	void enterConditionStateBlocks(MapIniParser.ConditionStateBlocksContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#conditionStateBlocks}.
	 * @param ctx the parse tree
	 */
	void exitConditionStateBlocks(MapIniParser.ConditionStateBlocksContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#conditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void enterConditionStateBlock(MapIniParser.ConditionStateBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#conditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void exitConditionStateBlock(MapIniParser.ConditionStateBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#defaultConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void enterDefaultConditionStateBlock(MapIniParser.DefaultConditionStateBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#defaultConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void exitDefaultConditionStateBlock(MapIniParser.DefaultConditionStateBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#transitionStateBlock}.
	 * @param ctx the parse tree
	 */
	void enterTransitionStateBlock(MapIniParser.TransitionStateBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#transitionStateBlock}.
	 * @param ctx the parse tree
	 */
	void exitTransitionStateBlock(MapIniParser.TransitionStateBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#aliasConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void enterAliasConditionStateBlock(MapIniParser.AliasConditionStateBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#aliasConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void exitAliasConditionStateBlock(MapIniParser.AliasConditionStateBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#ignoreConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void enterIgnoreConditionStateBlock(MapIniParser.IgnoreConditionStateBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#ignoreConditionStateBlock}.
	 * @param ctx the parse tree
	 */
	void exitIgnoreConditionStateBlock(MapIniParser.IgnoreConditionStateBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#removeModuleBlock}.
	 * @param ctx the parse tree
	 */
	void enterRemoveModuleBlock(MapIniParser.RemoveModuleBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#removeModuleBlock}.
	 * @param ctx the parse tree
	 */
	void exitRemoveModuleBlock(MapIniParser.RemoveModuleBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(MapIniParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(MapIniParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#end}.
	 * @param ctx the parse tree
	 */
	void enterEnd(MapIniParser.EndContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#end}.
	 * @param ctx the parse tree
	 */
	void exitEnd(MapIniParser.EndContext ctx);
	/**
	 * Enter a parse tree produced by the {@code string}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterString(MapIniParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by the {@code string}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitString(MapIniParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by the {@code filetype}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterFiletype(MapIniParser.FiletypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code filetype}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitFiletype(MapIniParser.FiletypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterId(MapIniParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitId(MapIniParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code int}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterInt(MapIniParser.IntContext ctx);
	/**
	 * Exit a parse tree produced by the {@code int}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitInt(MapIniParser.IntContext ctx);
	/**
	 * Enter a parse tree produced by the {@code float}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterFloat(MapIniParser.FloatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code float}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitFloat(MapIniParser.FloatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bool}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void enterBool(MapIniParser.BoolContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bool}
	 * labeled alternative in {@link MapIniParser#value}.
	 * @param ctx the parse tree
	 */
	void exitBool(MapIniParser.BoolContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#ftype}.
	 * @param ctx the parse tree
	 */
	void enterFtype(MapIniParser.FtypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#ftype}.
	 * @param ctx the parse tree
	 */
	void exitFtype(MapIniParser.FtypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#rgb}.
	 * @param ctx the parse tree
	 */
	void enterRgb(MapIniParser.RgbContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#rgb}.
	 * @param ctx the parse tree
	 */
	void exitRgb(MapIniParser.RgbContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#procent}.
	 * @param ctx the parse tree
	 */
	void enterProcent(MapIniParser.ProcentContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#procent}.
	 * @param ctx the parse tree
	 */
	void exitProcent(MapIniParser.ProcentContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#intRang}.
	 * @param ctx the parse tree
	 */
	void enterIntRang(MapIniParser.IntRangContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#intRang}.
	 * @param ctx the parse tree
	 */
	void exitIntRang(MapIniParser.IntRangContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#floatRang}.
	 * @param ctx the parse tree
	 */
	void enterFloatRang(MapIniParser.FloatRangContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#floatRang}.
	 * @param ctx the parse tree
	 */
	void exitFloatRang(MapIniParser.FloatRangContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#quoutedID}.
	 * @param ctx the parse tree
	 */
	void enterQuoutedID(MapIniParser.QuoutedIDContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#quoutedID}.
	 * @param ctx the parse tree
	 */
	void exitQuoutedID(MapIniParser.QuoutedIDContext ctx);
}