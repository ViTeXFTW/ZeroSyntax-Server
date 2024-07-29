import { DrawModuleBlockContext, EndContext, ObjectContext, ObjectPrerequisitesContext, ObjectPropertyContext, ProgramContext } from '../antlr/MapIniParser';
import { MapIniVisitor } from '../antlr/MapIniVisitor';
import { AbstractParseTreeVisitor} from '../../../../node_modules/antlr4ts/tree/AbstractParseTreeVisitor'
import { SymbolTable } from './SymbolTable';
import { Symbol, SymbolType } from './Symbol';
import { Location } from '../location';

/**
 * SymbolVisitor, visit all notes from the Abstract Syntax Tree 
 * over the document and adds Symbols to a SymbolTable
 */
export class SymbolVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
	
	protected defaultResult(): void {
		
	}

	symbolTable: SymbolTable

	constructor(symbolTable: SymbolTable) {
		super()
		this.symbolTable = symbolTable
	}

	visitProgram(ctx: ProgramContext): void {
		this.visitChildren(ctx)
		// Do nothing
	}

	visitEnd(ctx: EndContext): void {
		// Do nothing
	}

	visitObject(ctx: ObjectContext): void {
		// Create Symbol
		const objectName = ctx.ID().text
		const objectLocation = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const objectSymbol = new Symbol(objectName, SymbolType.OBJECT, objectLocation)
		this.symbolTable.addSymbol(objectSymbol)

		this.symbolTable.enterScope(objectName)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectPrerequisites(ctx: ObjectPrerequisitesContext): void {
		const name = 'Prerequisite'
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const symbol = new Symbol(name, SymbolType.OBJECTPREREQUISITE, location)
		this.symbolTable.addSymbol(symbol)

		this.symbolTable.enterScope(name)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectProperty(ctx: ObjectPropertyContext): void {
		const variableName = ctx.ID().text
		const variableLocation = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const variableSymbol = new Symbol(variableName, SymbolType.OBJECT, variableLocation)
		this.symbolTable.addSymbol(variableSymbol)
	}

	visitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
		const drawModuleName = ctx.getChild(3).text
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const methodSymbol = new Symbol(drawModuleName, SymbolType.DRAWMODULE, location);
		this.symbolTable.addSymbol(methodSymbol);
	}

	public getSymbolTable(): SymbolTable {
		return this.symbolTable
	}
}