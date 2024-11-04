import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4ng';
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { Position, TextDocument } from 'vscode-languageserver-textdocument';
import { getObjectPropertyDefinition, objectPropertyNameTree } from '../diagnostic/properties';
import { MapIniLexer } from '../utils/antlr4ng/MapIniLexer';
import { findContextAtPosition } from './helpers';
import { Parser } from '../parser';

enum CompletionContextType {
	PROPERTY = 'property',
	VALUE = 'value',
	OBJECT = 'object',
	MODULE = 'module',
	UNKNOWN = 'unknown'
}

export interface CompletionContext {
    type: CompletionContextType;
	propertyName?: string;
	parentContext?: ParserRuleContext;
}

export class CompletionProvider {
	private parser: Parser;
		
	constructor(parser: Parser) {
		this.parser = parser;
	}

	public getCompletions(document: TextDocument, position: Position): CompletionItem[] {

		const quickContext = this.analyzeQuickContext(document, position);
		if (quickContext.type !== CompletionContextType.UNKNOWN) {
			console.log(`Quick context: ${quickContext.type}`);
			return this.getQuickCompletions(quickContext);
		}

		console.log('Full parse');
		return this.getFullParseCompletions(document, position);
	}

	private analyzeQuickContext(document: TextDocument, position: Position): CompletionContext {
		const line = document.getText({
			start: { line: position.line, character: 0 },
			end: position
		}).trim();
	
		// Common patterns
		const propertyPattern = /^\s*(\w+)\s*=\s*$/;
		const objectPattern = /^\s*Object\s+\w*$/;
		const modulePattern = /^\s*(Draw|Body|Locomotor)\s*=\s*\w*$/;
	
		if (propertyPattern.test(line)) {
			const match = line.match(propertyPattern);
			return {
				type: CompletionContextType.VALUE,
				propertyName: match![1]
			};
		}
	
		if (objectPattern.test(line)) {
			return { type: CompletionContextType.OBJECT };
		}
	
		if (modulePattern.test(line)) {
			return { type: CompletionContextType.MODULE };
		}
	
		return { type: CompletionContextType.UNKNOWN };
	}

	private getQuickCompletions(context: CompletionContext): CompletionItem[] {
		switch (context.type) {
			case 'value':
				return this.getPropertyValueCompletions(context.propertyName!);
	
			case 'object':
				return this.getObjectCompletions();
	
			default:
				return [];
		}
	}

	private getPropertyValueCompletions(propertyName: string): CompletionItem[] {
		const propertyDef = getObjectPropertyDefinition(propertyName);
		if (!propertyDef?.validValues) return [];
	
		return propertyDef.validValues.map(value => ({
			label: value?.toString() ?? '!',
			kind: CompletionItemKind.Value,
			documentation: `Valid value for ${propertyName}`
		}));
	}
	private getObjectCompletions(): CompletionItem[] {
		const completions: CompletionItem[] = [];
		objectPropertyNameTree.reach((property: string) => {
			completions.push({
				label: property,
				kind: CompletionItemKind.Property,
				documentation: getObjectPropertyDefinition(property)?.description
			});
		});
		return completions;
	}

	private getFullParseCompletions(document: TextDocument, position: Position): CompletionItem[] {
		const offset = document.offsetAt(position);
		
		// Parse document
		let inputStream = CharStream.fromString(document.getText());
		let lexer = new MapIniLexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = this.parser.updateParser(document);
		const tree = parser.program();
	
		// Find context
		const contextAtPosition = findContextAtPosition(tree, offset);
		console.log(`Context at position: ${parser.ruleNames[contextAtPosition!.ruleIndex]}`);

		if (!contextAtPosition) return [];
	
		return this.getContextSpecificCompletions(
			parser.ruleNames[contextAtPosition.ruleIndex],
			document,
			position
		);
	}
	
	private getContextSpecificCompletions(
		ruleName: string, 
		document: TextDocument, 
		position: Position
	): CompletionItem[] {
		switch (ruleName) {
			// Add more specific cases
			default:
				return [];
		}
	}

}
