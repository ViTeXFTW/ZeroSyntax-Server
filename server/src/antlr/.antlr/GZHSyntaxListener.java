// Generated from c:/Users/Mads/OneDrive/ZeroSyntax/ZeroSyntax-Server/server/src/antlr/GZHSyntax.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GZHSyntaxParser}.
 */
public interface GZHSyntaxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(GZHSyntaxParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(GZHSyntaxParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#classes}.
	 * @param ctx the parse tree
	 */
	void enterClasses(GZHSyntaxParser.ClassesContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#classes}.
	 * @param ctx the parse tree
	 */
	void exitClasses(GZHSyntaxParser.ClassesContext ctx);
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#object}.
	 * @param ctx the parse tree
	 */
	void enterObject(GZHSyntaxParser.ObjectContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#object}.
	 * @param ctx the parse tree
	 */
	void exitObject(GZHSyntaxParser.ObjectContext ctx);
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(GZHSyntaxParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(GZHSyntaxParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#end}.
	 * @param ctx the parse tree
	 */
	void enterEnd(GZHSyntaxParser.EndContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#end}.
	 * @param ctx the parse tree
	 */
	void exitEnd(GZHSyntaxParser.EndContext ctx);
	/**
	 * Enter a parse tree produced by {@link GZHSyntaxParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(GZHSyntaxParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link GZHSyntaxParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(GZHSyntaxParser.ValueContext ctx);
}