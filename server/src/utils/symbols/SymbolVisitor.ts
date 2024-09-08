import { AddModuleBlockContext, AliasConditionStateBlockContext, ConditionStateBlockContext, ConditionStatePropertyContext, DefaultConditionStateBlockContext, DrawModuleBlockContext, EndContext, MapIniParser, ObjectContext, ObjectKindOfPropertyContext, ObjectPrerequisitesContext, ObjectPrerequisitesobjectPropertyContext, ObjectPropertyContext, ProgramContext, TransitionKeyPropertyContext, TransitionStateBlockContext, TransitionStatePropertyContext } from '../antlr/MapIniParser';
import { MapIniVisitor } from '../antlr/MapIniVisitor';
import { AbstractParseTreeVisitor} from '../../../../node_modules/antlr4ts/tree/AbstractParseTreeVisitor'
import { SymbolTable } from './SymbolTable';
import { Symbol, IniType } from './Symbol';
import { tokenModifierEnum, tokenTypeEnum } from '../tokenTypes';
import * as list from '../lists'
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { MapIniLexer } from '../antlr/MapIniLexer';
import { Position, Range } from 'vscode-languageserver';


/**
 * SymbolVisitor, visit all notes from the Abstract Syntax Tree 
 * over the document and adds Symbols to a SymbolTable
 */
export class SymbolVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
	
	protected defaultResult(): void {
		
	}

	// 
	symbolTable: SymbolTable


	// Lists
	objectConditionStates: string[]

	constructor(symbolTable: SymbolTable) {
		super()
		this.symbolTable = symbolTable
		this.objectConditionStates = list.allowedConditionStates
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
		const objectSymbol = new Symbol(objectName, IniType.OBJECT, this.createRange(ctx), tokenTypeEnum.class, [tokenModifierEnum.DEFINITION])
		this.symbolTable.addSymbol(objectSymbol)

		this.symbolTable.enterScope(objectName, IniType.OBJECT)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
		
		// Reset Added ConditionStates for this object
		this.objectConditionStates = list.allowedConditionStates
	}

	visitObjectProperty(ctx: ObjectPropertyContext): void {

	}

	visitObjectPrerequisites(ctx: ObjectPrerequisitesContext): void {
		const name = 'Prerequisite'
		const symbol = new Symbol(name, IniType.OBJECTPREREQUISITE, this.createRange(ctx))
		this.symbolTable.addSymbol(symbol)

		this.symbolTable.enterScope(name, IniType.OBJECTPREREQUISITE)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectPrerequisitesobjectProperty(ctx: ObjectPrerequisitesobjectPropertyContext): void {
		const variableNameArray = ctx.ID()

		variableNameArray.forEach(name => {
			const variableName = name.text
			const variableSymbol = new Symbol(variableName, IniType.OBJECT, this.createRange(ctx), tokenTypeEnum.class, [])
			this.symbolTable.addSymbol(variableSymbol)
		})
	}

	visitAddModuleBlock(ctx: AddModuleBlockContext): void {
		const addModule = ctx.getChild(0).text
		const symbol = new Symbol(addModule, IniType.ADDMODULE, this.createRange(ctx))
		this.symbolTable.addSymbol(symbol)

		this.symbolTable.enterScope(addModule, IniType.ADDMODULE)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitObjectKindOfProperty(ctx: ObjectKindOfPropertyContext): void {
		const kindOfs = ctx.ID()
		kindOfs.forEach(kindOf => {
			if(!list.kindOfs.includes(kindOf.text.toLocaleUpperCase())) {
				return;
			}

			const symbol = new Symbol(kindOf.text, IniType.PROPERTY, this.createRange(ctx), tokenTypeEnum.variable, [tokenModifierEnum.DEFINITION, tokenModifierEnum.READONLY])
			this.symbolTable.addSymbol(symbol)
		})
		
		this.visitChildren(ctx)
	}

	visitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
		const moduelType = ctx.getChild(0).text
		const drawModuleName = ctx.getChild(3).text
		const methodSymbol = new Symbol(drawModuleName, IniType.DRAWMODULE, this.createRange(ctx));
		this.symbolTable.addSymbol(methodSymbol);

		this.symbolTable.enterScope(moduelType, IniType.DRAWMODULE)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}


	// ConditionState = NONE DAMAGED (TransitionKey)?
	// End
	visitConditionStateBlock(ctx: ConditionStateBlockContext): void {
		const conditionStateName = 'ConditionStateBlock'
		const states = ctx.ID()
		const conditionStateSymbol = new Symbol(conditionStateName, IniType.CONDITIONSTATEBLOCK, this.createRange(ctx))
		this.symbolTable.addSymbol(conditionStateSymbol)

		this.symbolTable.enterScope(conditionStateName, IniType.CONDITIONSTATEBLOCK)

		// Creates a symbol for each condition state
		states.forEach((state) => {
			if (!this.objectConditionStates.includes(state.text.toUpperCase())) {
				return;
			}
			const conditionStateSymbol = new Symbol(state.text, IniType.CONDITIONSTATE, this.createRange(ctx), tokenTypeEnum.variable, [tokenModifierEnum.DEFINITION, tokenModifierEnum.READONLY])
			this.symbolTable.addSymbol(conditionStateSymbol)
		});

		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
		const conditionStateName = 'DefaultConditionStateBlock'
		const conditionStateSymbol = new Symbol(conditionStateName, IniType.DEFAULTCONDITIONSTATEBLOCK, this.createRange(ctx))
		this.symbolTable.addSymbol(conditionStateSymbol)

		this.symbolTable.enterScope(conditionStateName, IniType.DEFAULTCONDITIONSTATEBLOCK)
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitConditionStateProperty(ctx: ConditionStatePropertyContext): void {
		const propertyName = ctx.ID().text
		const propertySymbol = new Symbol(propertyName, IniType.PROPERTY, this.createRange(ctx))
		this.symbolTable.addSymbol(propertySymbol)
	}

	visitTransitionKeyProperty(ctx: TransitionKeyPropertyContext): void {
		const transitionKeyName = ctx.ID().text
		const transitionKeySymbol = new Symbol(transitionKeyName, IniType.TRANSITIONKEY, this.createRange(ctx), tokenTypeEnum.variable, [tokenModifierEnum.DEFINITION, tokenModifierEnum.READONLY])
		this.symbolTable.addSymbol(transitionKeySymbol)

		// Add to allowed conditionStates
		this.objectConditionStates.push(transitionKeyName.toUpperCase())
		this.visitChildren(ctx)
	}

	visitTransitionStateBlock(ctx: TransitionStateBlockContext): void {
		const states = ctx.ID()
		const transitionStateName = 'TransitionStateBlock'
		const conditionStateSymbol = new Symbol(transitionStateName, IniType.CONDITIONSTATEBLOCK, this.createRange(ctx))
		this.symbolTable.addSymbol(conditionStateSymbol)
		this.symbolTable.enterScope(transitionStateName, IniType.TRANSITIONKEY)

		states.forEach(state => {
			if(!this.objectConditionStates.includes(state.text)) {
				return
			}
			const conditionStateSymbol = new Symbol(state.text, IniType.CONDITIONSTATE, this.createRange(ctx), tokenTypeEnum.variable, [tokenModifierEnum.READONLY])
			this.symbolTable.addSymbol(conditionStateSymbol)
		})
		this.visitChildren(ctx)
		this.symbolTable.exitScope()
	}

	visitTransitionStateProperty(ctx: TransitionStatePropertyContext): void {
		const propertyName = ctx.ID().text
		const propertySymbol = new Symbol(propertyName, IniType.PROPERTY, this.createRange(ctx))
		this.symbolTable.addSymbol(propertySymbol)
	}

	visitAliasConditionStateBlock(ctx: AliasConditionStateBlockContext): void {
		const states = ctx.ID()
		const transitionStateName = 'AliasConditionState'
		const conditionStateSymbol = new Symbol(transitionStateName, IniType.ALIASCONDITIONSTATEBLCOK, this.createRange(ctx))
		this.symbolTable.addSymbol(conditionStateSymbol)

		states.forEach(state => {
			const stateName = state.text
			const stateSymbol = new Symbol(stateName, IniType.CONDITIONSTATE, this.createRange(ctx), tokenTypeEnum.variable, [tokenModifierEnum.READONLY])
			this.symbolTable.addSymbol(stateSymbol)
		})
		this.visitChildren(ctx)
	}

	private createRange(ctx: ParserRuleContext): Range {
        const start: Position = {
            line: ctx.start.line - 1,
            character: ctx.start.charPositionInLine
        };

		const end: Position = {
			line: ctx.stop ? ctx.stop.line - 1 : 0,
			character: ctx.stop && ctx.stop.text ? ctx.stop.charPositionInLine + ctx.stop.text.length : 0
		};
        return { start, end };
    }

	public getSymbolTable(): SymbolTable {
		return this.symbolTable
	}
}

export async function computeSymbolTable(document: TextDocument): Promise<SymbolTable> {

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