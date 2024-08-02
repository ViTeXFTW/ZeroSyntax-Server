import { ConditionStateBlockContext, DefaultConditionStateBlockContext, DrawModuleBlockContext, EndContext, MapIniParser, ObjectContext, ObjectPrerequisitesContext, ObjectPrerequisitesobjectPropertyContext, ProgramContext, TransitionKeyPropertyContext } from '../antlr/MapIniParser';
import { MapIniVisitor } from '../antlr/MapIniVisitor';
import { AbstractParseTreeVisitor} from '../../../../node_modules/antlr4ts/tree/AbstractParseTreeVisitor'
import { SymbolTable } from './SymbolTable';
import { Symbol, IniType } from './Symbol';
import { Location } from '../location';
import { tokenModifierEnum, tokenTypeEnum } from '../tokenTypes';
import * as list from '../lists'
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MapIniLexer } from '../antlr/MapIniLexer';


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
		const objectSymbol = new Symbol(objectName, IniType.OBJECT, objectLocation, tokenTypeEnum.class, [tokenModifierEnum.DEFINITION])
		this.symbolTable.addSymbol(objectSymbol)

		this.symbolTable.enterScope(objectName, IniType.OBJECT)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectPrerequisites(ctx: ObjectPrerequisitesContext): void {
		const name = 'Prerequisite'
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const symbol = new Symbol(name, IniType.OBJECTPREREQUISITE, location)
		this.symbolTable.addSymbol(symbol)

		this.symbolTable.enterScope(name, IniType.OBJECTPREREQUISITE)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectPrerequisitesobjectProperty(ctx: ObjectPrerequisitesobjectPropertyContext): void {
		const variableNameArray = ctx.ID()

		variableNameArray.forEach(name => {
			const variableName = name.text
			const variableLocation = new Location(ctx.start.line, ctx.start.charPositionInLine)
			const variableSymbol = new Symbol(variableName, IniType.OBJECT, variableLocation, tokenTypeEnum.class, [])
			this.symbolTable.addSymbol(variableSymbol)	
		})
	}

	visitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
		const moduelType = ctx.getChild(0).text
		const drawModuleName = ctx.getChild(3).text
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const methodSymbol = new Symbol(drawModuleName, IniType.DRAWMODULE, location);
		this.symbolTable.addSymbol(methodSymbol);

		this.symbolTable.enterScope(moduelType, IniType.DRAWMODULE)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}


	// ConditionState = NONE DAMAGED (TransitionKey)?
	// End
	visitConditionStateBlock(ctx: ConditionStateBlockContext): void {
		const conditionStateName = 'ConditionStateBlock'
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const conditionStateSymbol = new Symbol(conditionStateName, IniType.CONDITIONSTATEBLOCK, location)
		this.symbolTable.addSymbol(conditionStateSymbol)

		this.symbolTable.enterScope(conditionStateName, IniType.CONDITIONSTATEBLOCK)

		// Creates a symbol for each condition state
		ctx.ID().forEach((idCtx) => {
			const conditionStateName = idCtx.text;

			if (list.allowedConditionStates.includes(conditionStateName.toUpperCase())) {
				const location = new Location(idCtx.symbol.line, idCtx.symbol.charPositionInLine)
				const conditionStateSymbol = new Symbol(conditionStateName, IniType.CONDITIONSTATE, location, tokenTypeEnum.variable, [tokenModifierEnum.DEFINITION, tokenModifierEnum.READONLY])
				this.symbolTable.addSymbol(conditionStateSymbol)
			}
		});

		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
		const conditionStateName = 'DefaultConditionStateBlock'
		const location = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const conditionStateSymbol = new Symbol(conditionStateName, IniType.DEFAULTCONDITIONSTATEBLOCK, location)
		this.symbolTable.addSymbol(conditionStateSymbol)

		this.symbolTable.enterScope(conditionStateName, IniType.DEFAULTCONDITIONSTATEBLOCK)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitTransitionKeyProperty(ctx: TransitionKeyPropertyContext): void {
		const transitionKeyName = ctx.ID().text
		const transitionKeyLocation = new Location(ctx.start.line, ctx.start.charPositionInLine)
		const transitionKeySymbol = new Symbol(transitionKeyName, IniType.TRANSITIONKEY, transitionKeyLocation, tokenTypeEnum.variable, [tokenModifierEnum.DEFINITION, tokenModifierEnum.READONLY])
		this.symbolTable.addSymbol(transitionKeySymbol)

		// Add to allowed conditionStates
		list.allowedConditionStates.push(transitionKeyName.toUpperCase())
	}

	public getSymbolTable(): SymbolTable {
		return this.symbolTable
	}
}

export function computeSymbolTable(document: TextDocument): SymbolTable {

	const inputStream = CharStreams.fromString(document.getText());
	const lexer = new MapIniLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new MapIniParser(tokenStream);

	console.log('SymbolTable: Created antlr variables')

	const tree = parser.program()
	const symbolTable = new SymbolTable()
	const vistor = new SymbolVisitor(symbolTable)

	vistor.visitProgram(tree)
	vistor.getSymbolTable().printAllSymbols()

	return symbolTable
}