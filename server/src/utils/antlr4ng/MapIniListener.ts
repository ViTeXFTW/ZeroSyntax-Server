// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./MapIniParser.js";
import { ClassContext } from "./MapIniParser.js";
import { MappedImageClassContext } from "./MapIniParser.js";
import { ObjectClassContext } from "./MapIniParser.js";
import { Module_modifierContext } from "./MapIniParser.js";
import { AddModuleContext } from "./MapIniParser.js";
import { RemoveModuleContext } from "./MapIniParser.js";
import { ModuleContext } from "./MapIniParser.js";
import { ObjectSetsContext } from "./MapIniParser.js";
import { ObjectWeaponSetContext } from "./MapIniParser.js";
import { PropertyConditionContext } from "./MapIniParser.js";
import { ObjectWeaponSetWeaponContext } from "./MapIniParser.js";
import { WeaponSlot_valueContext } from "./MapIniParser.js";
import { ObjectArmorSetContext } from "./MapIniParser.js";
import { ObjectArmorSetArmorContext } from "./MapIniParser.js";
import { ObjectPrerequisiteContext } from "./MapIniParser.js";
import { ObjectPrerequisite_objectContext } from "./MapIniParser.js";
import { ObjectPrerequisite_scienceContext } from "./MapIniParser.js";
import { DrawModuleContext } from "./MapIniParser.js";
import { ConditionStateContext } from "./MapIniParser.js";
import { AliasConditionContext } from "./MapIniParser.js";
import { BodyModuleContext } from "./MapIniParser.js";
import { BehaviorModuleContext } from "./MapIniParser.js";
import { ClientModuleContext } from "./MapIniParser.js";
import { ObjectPropertyContext } from "./MapIniParser.js";
import { DrawModulePropertyContext } from "./MapIniParser.js";
import { ConditionStatePropertyContext } from "./MapIniParser.js";
import { PropertyContext } from "./MapIniParser.js";
import { DrawModule_typeContext } from "./MapIniParser.js";
import { ConditionState_valuesContext } from "./MapIniParser.js";
import { BodyModule_typeContext } from "./MapIniParser.js";
import { BehaviorModule_typeContext } from "./MapIniParser.js";
import { ClientModule_typeContext } from "./MapIniParser.js";
import { ModuleTag_valueContext } from "./MapIniParser.js";
import { MappedImage_valueContext } from "./MapIniParser.js";
import { Object_valueContext } from "./MapIniParser.js";
import { Locomotor_modifierContext } from "./MapIniParser.js";
import { Property_valueContext } from "./MapIniParser.js";
import { Property_valuesContext } from "./MapIniParser.js";
import { EndContext } from "./MapIniParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MapIniParser`.
 */
export class MapIniListener implements ParseTreeListener {
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
     * Enter a parse tree produced by `MapIniParser.class`.
     * @param ctx the parse tree
     */
    enterClass?: (ctx: ClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.class`.
     * @param ctx the parse tree
     */
    exitClass?: (ctx: ClassContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     */
    enterObjectClass?: (ctx: ObjectClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     */
    exitObjectClass?: (ctx: ObjectClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.module_modifier`.
     * @param ctx the parse tree
     */
    enterModule_modifier?: (ctx: Module_modifierContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.module_modifier`.
     * @param ctx the parse tree
     */
    exitModule_modifier?: (ctx: Module_modifierContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.addModule`.
     * @param ctx the parse tree
     */
    enterAddModule?: (ctx: AddModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.addModule`.
     * @param ctx the parse tree
     */
    exitAddModule?: (ctx: AddModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.removeModule`.
     * @param ctx the parse tree
     */
    enterRemoveModule?: (ctx: RemoveModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.removeModule`.
     * @param ctx the parse tree
     */
    exitRemoveModule?: (ctx: RemoveModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.module`.
     * @param ctx the parse tree
     */
    enterModule?: (ctx: ModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.module`.
     * @param ctx the parse tree
     */
    exitModule?: (ctx: ModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectSets`.
     * @param ctx the parse tree
     */
    enterObjectSets?: (ctx: ObjectSetsContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectSets`.
     * @param ctx the parse tree
     */
    exitObjectSets?: (ctx: ObjectSetsContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.propertyCondition`.
     * @param ctx the parse tree
     */
    enterPropertyCondition?: (ctx: PropertyConditionContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.propertyCondition`.
     * @param ctx the parse tree
     */
    exitPropertyCondition?: (ctx: PropertyConditionContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectWeaponSetWeapon`.
     * @param ctx the parse tree
     */
    enterObjectWeaponSetWeapon?: (ctx: ObjectWeaponSetWeaponContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectWeaponSetWeapon`.
     * @param ctx the parse tree
     */
    exitObjectWeaponSetWeapon?: (ctx: ObjectWeaponSetWeaponContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.weaponSlot_value`.
     * @param ctx the parse tree
     */
    enterWeaponSlot_value?: (ctx: WeaponSlot_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.weaponSlot_value`.
     * @param ctx the parse tree
     */
    exitWeaponSlot_value?: (ctx: WeaponSlot_valueContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.objectArmorSetArmor`.
     * @param ctx the parse tree
     */
    enterObjectArmorSetArmor?: (ctx: ObjectArmorSetArmorContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectArmorSetArmor`.
     * @param ctx the parse tree
     */
    exitObjectArmorSetArmor?: (ctx: ObjectArmorSetArmorContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectPrerequisite`.
     * @param ctx the parse tree
     */
    enterObjectPrerequisite?: (ctx: ObjectPrerequisiteContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectPrerequisite`.
     * @param ctx the parse tree
     */
    exitObjectPrerequisite?: (ctx: ObjectPrerequisiteContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectPrerequisite_object`.
     * @param ctx the parse tree
     */
    enterObjectPrerequisite_object?: (ctx: ObjectPrerequisite_objectContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectPrerequisite_object`.
     * @param ctx the parse tree
     */
    exitObjectPrerequisite_object?: (ctx: ObjectPrerequisite_objectContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.objectPrerequisite_science`.
     * @param ctx the parse tree
     */
    enterObjectPrerequisite_science?: (ctx: ObjectPrerequisite_scienceContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectPrerequisite_science`.
     * @param ctx the parse tree
     */
    exitObjectPrerequisite_science?: (ctx: ObjectPrerequisite_scienceContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.drawModule`.
     * @param ctx the parse tree
     */
    enterDrawModule?: (ctx: DrawModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule`.
     * @param ctx the parse tree
     */
    exitDrawModule?: (ctx: DrawModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.conditionState`.
     * @param ctx the parse tree
     */
    enterConditionState?: (ctx: ConditionStateContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.conditionState`.
     * @param ctx the parse tree
     */
    exitConditionState?: (ctx: ConditionStateContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.aliasCondition`.
     * @param ctx the parse tree
     */
    enterAliasCondition?: (ctx: AliasConditionContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.aliasCondition`.
     * @param ctx the parse tree
     */
    exitAliasCondition?: (ctx: AliasConditionContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule`.
     * @param ctx the parse tree
     */
    enterBodyModule?: (ctx: BodyModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule`.
     * @param ctx the parse tree
     */
    exitBodyModule?: (ctx: BodyModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule`.
     * @param ctx the parse tree
     */
    enterBehaviorModule?: (ctx: BehaviorModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule`.
     * @param ctx the parse tree
     */
    exitBehaviorModule?: (ctx: BehaviorModuleContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule`.
     * @param ctx the parse tree
     */
    enterClientModule?: (ctx: ClientModuleContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule`.
     * @param ctx the parse tree
     */
    exitClientModule?: (ctx: ClientModuleContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.drawModuleProperty`.
     * @param ctx the parse tree
     */
    enterDrawModuleProperty?: (ctx: DrawModulePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModuleProperty`.
     * @param ctx the parse tree
     */
    exitDrawModuleProperty?: (ctx: DrawModulePropertyContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.conditionStateProperty`.
     * @param ctx the parse tree
     */
    enterConditionStateProperty?: (ctx: ConditionStatePropertyContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.conditionStateProperty`.
     * @param ctx the parse tree
     */
    exitConditionStateProperty?: (ctx: ConditionStatePropertyContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.drawModule_type`.
     * @param ctx the parse tree
     */
    enterDrawModule_type?: (ctx: DrawModule_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.drawModule_type`.
     * @param ctx the parse tree
     */
    exitDrawModule_type?: (ctx: DrawModule_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.conditionState_values`.
     * @param ctx the parse tree
     */
    enterConditionState_values?: (ctx: ConditionState_valuesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.conditionState_values`.
     * @param ctx the parse tree
     */
    exitConditionState_values?: (ctx: ConditionState_valuesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.bodyModule_type`.
     * @param ctx the parse tree
     */
    enterBodyModule_type?: (ctx: BodyModule_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.bodyModule_type`.
     * @param ctx the parse tree
     */
    exitBodyModule_type?: (ctx: BodyModule_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.behaviorModule_type`.
     * @param ctx the parse tree
     */
    enterBehaviorModule_type?: (ctx: BehaviorModule_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.behaviorModule_type`.
     * @param ctx the parse tree
     */
    exitBehaviorModule_type?: (ctx: BehaviorModule_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.clientModule_type`.
     * @param ctx the parse tree
     */
    enterClientModule_type?: (ctx: ClientModule_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.clientModule_type`.
     * @param ctx the parse tree
     */
    exitClientModule_type?: (ctx: ClientModule_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     */
    enterModuleTag_value?: (ctx: ModuleTag_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     */
    exitModuleTag_value?: (ctx: ModuleTag_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.mappedImage_value`.
     * @param ctx the parse tree
     */
    enterMappedImage_value?: (ctx: MappedImage_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.mappedImage_value`.
     * @param ctx the parse tree
     */
    exitMappedImage_value?: (ctx: MappedImage_valueContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.locomotor_modifier`.
     * @param ctx the parse tree
     */
    enterLocomotor_modifier?: (ctx: Locomotor_modifierContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.locomotor_modifier`.
     * @param ctx the parse tree
     */
    exitLocomotor_modifier?: (ctx: Locomotor_modifierContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.property_value`.
     * @param ctx the parse tree
     */
    enterProperty_value?: (ctx: Property_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.property_value`.
     * @param ctx the parse tree
     */
    exitProperty_value?: (ctx: Property_valueContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.property_values`.
     * @param ctx the parse tree
     */
    enterProperty_values?: (ctx: Property_valuesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.property_values`.
     * @param ctx the parse tree
     */
    exitProperty_values?: (ctx: Property_valuesContext) => void;
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

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

