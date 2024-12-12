// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./MapIniParser.js";
import { ClassContext } from "./MapIniParser.js";
import { SimpleClassContext } from "./MapIniParser.js";
import { ComplexClassContext } from "./MapIniParser.js";
import { Class_identifierContext } from "./MapIniParser.js";
import { Class_valueContext } from "./MapIniParser.js";
import { Module_modifierContext } from "./MapIniParser.js";
import { AddModuleContext } from "./MapIniParser.js";
import { RemoveModuleContext } from "./MapIniParser.js";
import { ObjectModulesContext } from "./MapIniParser.js";
import { Module_typeContext } from "./MapIniParser.js";
import { Module_nameContext } from "./MapIniParser.js";
import { ModuleTag_valueContext } from "./MapIniParser.js";
import { Salvage_valueContext } from "./MapIniParser.js";
import { PropertyBlockContext } from "./MapIniParser.js";
import { ConditionBlockContext } from "./MapIniParser.js";
import { PropertyContext } from "./MapIniParser.js";
import { Property_valuesContext } from "./MapIniParser.js";
import { ValueContext } from "./MapIniParser.js";
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
     * Visit a parse tree produced by `MapIniParser.complexClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexClass?: (ctx: ComplexClassContext) => Result;
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
     * Visit a parse tree produced by `MapIniParser.objectModules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectModules?: (ctx: ObjectModulesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.module_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_type?: (ctx: Module_typeContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.module_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_name?: (ctx: Module_nameContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.moduleTag_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleTag_value?: (ctx: ModuleTag_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.salvage_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSalvage_value?: (ctx: Salvage_valueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.propertyBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.conditionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionBlock?: (ctx: ConditionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.property_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty_values?: (ctx: Property_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
    /**
     * Visit a parse tree produced by `MapIniParser.end`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd?: (ctx: EndContext) => Result;
}

