// Generated from ./server/src/antlr/GZHSyntax.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GZHSyntaxParser";
import { Object_classContext } from "./GZHSyntaxParser";
import { PropertyContext } from "./GZHSyntaxParser";
import { EndContext } from "./GZHSyntaxParser";
import { ValueContext } from "./GZHSyntaxParser";
import { FileStringContext } from "./GZHSyntaxParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GZHSyntaxParser`.
 */
export interface GZHSyntaxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.object_class`.
	 * @param ctx the parse tree
	 */
	enterObject_class?: (ctx: Object_classContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.object_class`.
	 * @param ctx the parse tree
	 */
	exitObject_class?: (ctx: Object_classContext) => void;

	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `GZHSyntaxParser.fileString`.
	 * @param ctx the parse tree
	 */
	enterFileString?: (ctx: FileStringContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.fileString`.
	 * @param ctx the parse tree
	 */
	exitFileString?: (ctx: FileStringContext) => void;
}

