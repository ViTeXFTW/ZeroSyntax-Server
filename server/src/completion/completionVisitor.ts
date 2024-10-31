import { AbstractParseTreeVisitor, ParserRuleContext } from 'antlr4ng';
import { MapIniVisitor } from '../utils/antlr4ng/MapIniVisitor';
import { ObjectPropertyContext, ObjectClassContext, Locomotor_modifierContext } from '../utils/antlr4ng/MapIniParser';
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { getObjectPropertyDefinition, objectPropertyNameTree } from '../diagnostic/properties';
import * as list from '../utils/lists';

export class CompletionVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
	protected defaultResult(): void {
	}

	completionList: CompletionItem[] = []

	constructor(private offset: number) {
		super()
	}

	public getCompletionList(): CompletionItem[] {
		return this.completionList
	}

}
