// Generated from ./server/src/antlr/GZHSyntax.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./GZHSyntaxParser";
import { PropertyContext } from "./GZHSyntaxParser";
import { ValueContext } from "./GZHSyntaxParser";


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
	 * Enter a parse tree produced by `GZHSyntaxParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `GZHSyntaxParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

