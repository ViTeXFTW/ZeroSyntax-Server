// Generated from ./server/src/antlr/GZHSyntax.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./GZHSyntaxParser";
import { PropertyContext } from "./GZHSyntaxParser";
import { ValueContext } from "./GZHSyntaxParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GZHSyntaxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GZHSyntaxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GZHSyntaxParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `GZHSyntaxParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `GZHSyntaxParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

