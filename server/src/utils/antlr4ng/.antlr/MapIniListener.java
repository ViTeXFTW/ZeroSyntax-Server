// Generated from c:/Users/mads2/Desktop/ZeroSyntax-Server/server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1
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
	 * Enter a parse tree produced by {@link MapIniParser#class}.
	 * @param ctx the parse tree
	 */
	void enterClass(MapIniParser.ClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#class}.
	 * @param ctx the parse tree
	 */
	void exitClass(MapIniParser.ClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#mappedImageClass}.
	 * @param ctx the parse tree
	 */
	void enterMappedImageClass(MapIniParser.MappedImageClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#mappedImageClass}.
	 * @param ctx the parse tree
	 */
	void exitMappedImageClass(MapIniParser.MappedImageClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectClass}.
	 * @param ctx the parse tree
	 */
	void enterObjectClass(MapIniParser.ObjectClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectClass}.
	 * @param ctx the parse tree
	 */
	void exitObjectClass(MapIniParser.ObjectClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#module_modifier}.
	 * @param ctx the parse tree
	 */
	void enterModule_modifier(MapIniParser.Module_modifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#module_modifier}.
	 * @param ctx the parse tree
	 */
	void exitModule_modifier(MapIniParser.Module_modifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#addModule}.
	 * @param ctx the parse tree
	 */
	void enterAddModule(MapIniParser.AddModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#addModule}.
	 * @param ctx the parse tree
	 */
	void exitAddModule(MapIniParser.AddModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#removeModule}.
	 * @param ctx the parse tree
	 */
	void enterRemoveModule(MapIniParser.RemoveModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#removeModule}.
	 * @param ctx the parse tree
	 */
	void exitRemoveModule(MapIniParser.RemoveModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#module}.
	 * @param ctx the parse tree
	 */
	void enterModule(MapIniParser.ModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#module}.
	 * @param ctx the parse tree
	 */
	void exitModule(MapIniParser.ModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectSets}.
	 * @param ctx the parse tree
	 */
	void enterObjectSets(MapIniParser.ObjectSetsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectSets}.
	 * @param ctx the parse tree
	 */
	void exitObjectSets(MapIniParser.ObjectSetsContext ctx);
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
	 * Enter a parse tree produced by {@link MapIniParser#propertyCondition}.
	 * @param ctx the parse tree
	 */
	void enterPropertyCondition(MapIniParser.PropertyConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#propertyCondition}.
	 * @param ctx the parse tree
	 */
	void exitPropertyCondition(MapIniParser.PropertyConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectWeaponSetWeapon}.
	 * @param ctx the parse tree
	 */
	void enterObjectWeaponSetWeapon(MapIniParser.ObjectWeaponSetWeaponContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectWeaponSetWeapon}.
	 * @param ctx the parse tree
	 */
	void exitObjectWeaponSetWeapon(MapIniParser.ObjectWeaponSetWeaponContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#weaponSlot_value}.
	 * @param ctx the parse tree
	 */
	void enterWeaponSlot_value(MapIniParser.WeaponSlot_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#weaponSlot_value}.
	 * @param ctx the parse tree
	 */
	void exitWeaponSlot_value(MapIniParser.WeaponSlot_valueContext ctx);
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
	 * Enter a parse tree produced by {@link MapIniParser#objectArmorSetArmor}.
	 * @param ctx the parse tree
	 */
	void enterObjectArmorSetArmor(MapIniParser.ObjectArmorSetArmorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectArmorSetArmor}.
	 * @param ctx the parse tree
	 */
	void exitObjectArmorSetArmor(MapIniParser.ObjectArmorSetArmorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectPrerequisite}.
	 * @param ctx the parse tree
	 */
	void enterObjectPrerequisite(MapIniParser.ObjectPrerequisiteContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectPrerequisite}.
	 * @param ctx the parse tree
	 */
	void exitObjectPrerequisite(MapIniParser.ObjectPrerequisiteContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectPrerequisite_object}.
	 * @param ctx the parse tree
	 */
	void enterObjectPrerequisite_object(MapIniParser.ObjectPrerequisite_objectContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectPrerequisite_object}.
	 * @param ctx the parse tree
	 */
	void exitObjectPrerequisite_object(MapIniParser.ObjectPrerequisite_objectContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#objectPrerequisite_science}.
	 * @param ctx the parse tree
	 */
	void enterObjectPrerequisite_science(MapIniParser.ObjectPrerequisite_scienceContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#objectPrerequisite_science}.
	 * @param ctx the parse tree
	 */
	void exitObjectPrerequisite_science(MapIniParser.ObjectPrerequisite_scienceContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#drawModule}.
	 * @param ctx the parse tree
	 */
	void enterDrawModule(MapIniParser.DrawModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#drawModule}.
	 * @param ctx the parse tree
	 */
	void exitDrawModule(MapIniParser.DrawModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#conditionState}.
	 * @param ctx the parse tree
	 */
	void enterConditionState(MapIniParser.ConditionStateContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#conditionState}.
	 * @param ctx the parse tree
	 */
	void exitConditionState(MapIniParser.ConditionStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#aliasCondition}.
	 * @param ctx the parse tree
	 */
	void enterAliasCondition(MapIniParser.AliasConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#aliasCondition}.
	 * @param ctx the parse tree
	 */
	void exitAliasCondition(MapIniParser.AliasConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#bodyModule}.
	 * @param ctx the parse tree
	 */
	void enterBodyModule(MapIniParser.BodyModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#bodyModule}.
	 * @param ctx the parse tree
	 */
	void exitBodyModule(MapIniParser.BodyModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#behaviorModule}.
	 * @param ctx the parse tree
	 */
	void enterBehaviorModule(MapIniParser.BehaviorModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#behaviorModule}.
	 * @param ctx the parse tree
	 */
	void exitBehaviorModule(MapIniParser.BehaviorModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#clientModule}.
	 * @param ctx the parse tree
	 */
	void enterClientModule(MapIniParser.ClientModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#clientModule}.
	 * @param ctx the parse tree
	 */
	void exitClientModule(MapIniParser.ClientModuleContext ctx);
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
	 * Enter a parse tree produced by {@link MapIniParser#drawModuleProperty}.
	 * @param ctx the parse tree
	 */
	void enterDrawModuleProperty(MapIniParser.DrawModulePropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#drawModuleProperty}.
	 * @param ctx the parse tree
	 */
	void exitDrawModuleProperty(MapIniParser.DrawModulePropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#conditionStateProperty}.
	 * @param ctx the parse tree
	 */
	void enterConditionStateProperty(MapIniParser.ConditionStatePropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#conditionStateProperty}.
	 * @param ctx the parse tree
	 */
	void exitConditionStateProperty(MapIniParser.ConditionStatePropertyContext ctx);
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
	 * Enter a parse tree produced by {@link MapIniParser#drawModule_type}.
	 * @param ctx the parse tree
	 */
	void enterDrawModule_type(MapIniParser.DrawModule_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#drawModule_type}.
	 * @param ctx the parse tree
	 */
	void exitDrawModule_type(MapIniParser.DrawModule_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#conditionState_values}.
	 * @param ctx the parse tree
	 */
	void enterConditionState_values(MapIniParser.ConditionState_valuesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#conditionState_values}.
	 * @param ctx the parse tree
	 */
	void exitConditionState_values(MapIniParser.ConditionState_valuesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#bodyModule_type}.
	 * @param ctx the parse tree
	 */
	void enterBodyModule_type(MapIniParser.BodyModule_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#bodyModule_type}.
	 * @param ctx the parse tree
	 */
	void exitBodyModule_type(MapIniParser.BodyModule_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#behaviorModule_type}.
	 * @param ctx the parse tree
	 */
	void enterBehaviorModule_type(MapIniParser.BehaviorModule_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#behaviorModule_type}.
	 * @param ctx the parse tree
	 */
	void exitBehaviorModule_type(MapIniParser.BehaviorModule_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#clientModule_type}.
	 * @param ctx the parse tree
	 */
	void enterClientModule_type(MapIniParser.ClientModule_typeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#clientModule_type}.
	 * @param ctx the parse tree
	 */
	void exitClientModule_type(MapIniParser.ClientModule_typeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#moduleTag_value}.
	 * @param ctx the parse tree
	 */
	void enterModuleTag_value(MapIniParser.ModuleTag_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#moduleTag_value}.
	 * @param ctx the parse tree
	 */
	void exitModuleTag_value(MapIniParser.ModuleTag_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#mappedImage_value}.
	 * @param ctx the parse tree
	 */
	void enterMappedImage_value(MapIniParser.MappedImage_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#mappedImage_value}.
	 * @param ctx the parse tree
	 */
	void exitMappedImage_value(MapIniParser.MappedImage_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#object_value}.
	 * @param ctx the parse tree
	 */
	void enterObject_value(MapIniParser.Object_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#object_value}.
	 * @param ctx the parse tree
	 */
	void exitObject_value(MapIniParser.Object_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#locomotor_modifier}.
	 * @param ctx the parse tree
	 */
	void enterLocomotor_modifier(MapIniParser.Locomotor_modifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#locomotor_modifier}.
	 * @param ctx the parse tree
	 */
	void exitLocomotor_modifier(MapIniParser.Locomotor_modifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#property_value}.
	 * @param ctx the parse tree
	 */
	void enterProperty_value(MapIniParser.Property_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#property_value}.
	 * @param ctx the parse tree
	 */
	void exitProperty_value(MapIniParser.Property_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MapIniParser#property_values}.
	 * @param ctx the parse tree
	 */
	void enterProperty_values(MapIniParser.Property_valuesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MapIniParser#property_values}.
	 * @param ctx the parse tree
	 */
	void exitProperty_values(MapIniParser.Property_valuesContext ctx);
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
}