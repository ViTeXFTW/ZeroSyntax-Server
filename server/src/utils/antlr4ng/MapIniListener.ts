// Generated from ./server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
import { PropertyBlockContext } from "./MapIniParser.js";
import { ConditionBlockContext } from "./MapIniParser.js";
import { PropertyContext } from "./MapIniParser.js";
import { Property_valuesContext } from "./MapIniParser.js";
import { ValueContext } from "./MapIniParser.js";
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
     * Enter a parse tree produced by `MapIniParser.simpleClass`.
     * @param ctx the parse tree
     */
    enterSimpleClass?: (ctx: SimpleClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.simpleClass`.
     * @param ctx the parse tree
     */
    exitSimpleClass?: (ctx: SimpleClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.complexClass`.
     * @param ctx the parse tree
     */
    enterComplexClass?: (ctx: ComplexClassContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.complexClass`.
     * @param ctx the parse tree
     */
    exitComplexClass?: (ctx: ComplexClassContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.class_identifier`.
     * @param ctx the parse tree
     */
    enterClass_identifier?: (ctx: Class_identifierContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.class_identifier`.
     * @param ctx the parse tree
     */
    exitClass_identifier?: (ctx: Class_identifierContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.class_value`.
     * @param ctx the parse tree
     */
    enterClass_value?: (ctx: Class_valueContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.class_value`.
     * @param ctx the parse tree
     */
    exitClass_value?: (ctx: Class_valueContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.objectModules`.
     * @param ctx the parse tree
     */
    enterObjectModules?: (ctx: ObjectModulesContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.objectModules`.
     * @param ctx the parse tree
     */
    exitObjectModules?: (ctx: ObjectModulesContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.module_type`.
     * @param ctx the parse tree
     */
    enterModule_type?: (ctx: Module_typeContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.module_type`.
     * @param ctx the parse tree
     */
    exitModule_type?: (ctx: Module_typeContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.module_name`.
     * @param ctx the parse tree
     */
    enterModule_name?: (ctx: Module_nameContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.module_name`.
     * @param ctx the parse tree
     */
    exitModule_name?: (ctx: Module_nameContext) => void;
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
     * Enter a parse tree produced by `MapIniParser.propertyBlock`.
     * @param ctx the parse tree
     */
    enterPropertyBlock?: (ctx: PropertyBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.propertyBlock`.
     * @param ctx the parse tree
     */
    exitPropertyBlock?: (ctx: PropertyBlockContext) => void;
    /**
     * Enter a parse tree produced by `MapIniParser.conditionBlock`.
     * @param ctx the parse tree
     */
    enterConditionBlock?: (ctx: ConditionBlockContext) => void;
    /**
     * Exit a parse tree produced by `MapIniParser.conditionBlock`.
     * @param ctx the parse tree
     */
    exitConditionBlock?: (ctx: ConditionBlockContext) => void;
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

