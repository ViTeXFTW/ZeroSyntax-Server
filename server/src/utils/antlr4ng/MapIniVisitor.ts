// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./MapIniParser.js";
import { ClassContext } from "./MapIniParser.js";
import { SimpleClassContext } from "./MapIniParser.js";
import { Class_identifierContext } from "./MapIniParser.js";
import { Class_valueContext } from "./MapIniParser.js";
import { ObjectReskinClassContext } from "./MapIniParser.js";
import { ObjectReskin_identifierContext } from "./MapIniParser.js";
import { ObjectClassContext } from "./MapIniParser.js";
import { Object_identifierContext } from "./MapIniParser.js";
import { Module_modifierContext } from "./MapIniParser.js";
import { AddModuleContext } from "./MapIniParser.js";
import { RemoveModuleContext } from "./MapIniParser.js";
import { ModuleContext } from "./MapIniParser.js";
import { ObjectSetsContext } from "./MapIniParser.js";
import { ObjectWeaponSetContext } from "./MapIniParser.js";
import { ObjectWeaponSetPropertyContext } from "./MapIniParser.js";
import { ObjectArmorSetContext } from "./MapIniParser.js";
import { ObjectArmorSetPropertyContext } from "./MapIniParser.js";
import { ObjectPrerequisiteContext } from "./MapIniParser.js";
import { ObjectPrerequisitePropertyContext } from "./MapIniParser.js";
import { ObjectUnitSpecificSoundsContext } from "./MapIniParser.js";
import { ObjectUnitSpecificSoundsPropertyContext } from "./MapIniParser.js";
import { ObjectUnitSpecificFXContext } from "./MapIniParser.js";
import { ObjectUnitSpecificFXPropertyContext } from "./MapIniParser.js";
import { DrawModuleContext } from "./MapIniParser.js";
import { ConditionStateContext } from "./MapIniParser.js";
import { DefaultConditionStateBlockContext } from "./MapIniParser.js";
import { ConditionStateBlockContext } from "./MapIniParser.js";
import { TransitionStateBlockContext } from "./MapIniParser.js";
import { AliasConditionContext } from "./MapIniParser.js";
import { BodyModuleContext } from "./MapIniParser.js";
import { BodyModulePropertyContext } from "./MapIniParser.js";
import { BehaviorModuleContext } from "./MapIniParser.js";
import { BehaviorModulePropertyContext } from "./MapIniParser.js";
import { TurretBlockContext } from "./MapIniParser.js";
import { TurretPropertyContext } from "./MapIniParser.js";
import { ClientModuleContext } from "./MapIniParser.js";
import { ClientModulePropertyContext } from "./MapIniParser.js";
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
import { Property_valuesContext } from "./MapIniParser.js";
import { Property_valueContext } from "./MapIniParser.js";
import { EndContext } from "./MapIniParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MapIniParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MapIniVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MapIniParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClass?: (ctx: ClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.simpleClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleClass?: (ctx: SimpleClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.class_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClass_identifier?: (ctx: Class_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.class_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClass_value?: (ctx: Class_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectReskinClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectReskinClass?: (ctx: ObjectReskinClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectReskin_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectReskin_identifier?: (ctx: ObjectReskin_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass?: (ctx: ObjectClassContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.object_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_identifier?: (ctx: Object_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.module_modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_modifier?: (ctx: Module_modifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.addModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddModule?: (ctx: AddModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.removeModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveModule?: (ctx: RemoveModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.module`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule?: (ctx: ModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectSets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSets?: (ctx: ObjectSetsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectWeaponSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectWeaponSet?: (ctx: ObjectWeaponSetContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectWeaponSetProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectWeaponSetProperty?: (ctx: ObjectWeaponSetPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectArmorSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectArmorSet?: (ctx: ObjectArmorSetContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectArmorSetProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectArmorSetProperty?: (ctx: ObjectArmorSetPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectPrerequisite`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPrerequisite?: (ctx: ObjectPrerequisiteContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectPrerequisiteProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPrerequisiteProperty?: (ctx: ObjectPrerequisitePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectUnitSpecificSounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectUnitSpecificSounds?: (ctx: ObjectUnitSpecificSoundsContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectUnitSpecificSoundsProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectUnitSpecificSoundsProperty?: (ctx: ObjectUnitSpecificSoundsPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectUnitSpecificFX`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectUnitSpecificFX?: (ctx: ObjectUnitSpecificFXContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectUnitSpecificFXProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectUnitSpecificFXProperty?: (ctx: ObjectUnitSpecificFXPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule?: (ctx: DrawModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.conditionState`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionState?: (ctx: ConditionStateContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.defaultConditionStateBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultConditionStateBlock?: (ctx: DefaultConditionStateBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.conditionStateBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionStateBlock?: (ctx: ConditionStateBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.transitionStateBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionStateBlock?: (ctx: TransitionStateBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.aliasCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasCondition?: (ctx: AliasConditionContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule?: (ctx: BodyModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModuleProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModuleProperty?: (ctx: BodyModulePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule?: (ctx: BehaviorModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModuleProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModuleProperty?: (ctx: BehaviorModulePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.turretBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTurretBlock?: (ctx: TurretBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.turretProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTurretProperty?: (ctx: TurretPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule?: (ctx: ClientModuleContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModuleProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModuleProperty?: (ctx: ClientModulePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.objectProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectProperty?: (ctx: ObjectPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModuleProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModuleProperty?: (ctx: DrawModulePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.conditionStateProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionStateProperty?: (ctx: ConditionStatePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.drawModule_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrawModule_type?: (ctx: DrawModule_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.conditionState_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionState_values?: (ctx: ConditionState_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.bodyModule_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBodyModule_type?: (ctx: BodyModule_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.behaviorModule_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBehaviorModule_type?: (ctx: BehaviorModule_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.clientModule_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClientModule_type?: (ctx: ClientModule_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleTag_value?: (ctx: ModuleTag_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.mappedImage_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappedImage_value?: (ctx: MappedImage_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.object_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_value?: (ctx: Object_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.locomotor_modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocomotor_modifier?: (ctx: Locomotor_modifierContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.property_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_values?: (ctx: Property_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.property_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_value?: (ctx: Property_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.end`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd?: (ctx: EndContext) => Result;
}

