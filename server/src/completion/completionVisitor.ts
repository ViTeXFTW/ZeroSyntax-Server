import { AbstractParseTreeVisitor } from 'antlr4ng';
import { MapIniVisitor } from '../utils/antlr4ng/MapIniVisitor';
import { ObjectPropertyContext, ObjectClassContext } from '../utils/antlr4ng/MapIniParser';
import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { getPropertyDefinition, objectPropertiesTree } from '../diagnostic/properties';



export class CompletionVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
	protected defaultResult(): void {
	}

	completionList: CompletionItem[] = []

	constructor(private offset: number) {
		super()
	}

	visitObjectClass(ctx: ObjectClassContext): void {
		if (ctx.start === null || ctx.stop === null) {
			return
		}

		if (ctx.start.start <= this.offset && this.offset <= ctx.stop.stop) {
			// Add all property names from objectPropertiesTree
			objectPropertiesTree.each((propertyName: string) => {
				const propertyDefinition = getPropertyDefinition(propertyName);
				if (propertyDefinition) {
					this.completionList.push({
						label: propertyName,
						kind: CompletionItemKind.Field,
						documentation: propertyDefinition.description
					});
				}
			});
		}
		
		this.visitChildren(ctx)
	}
	
	visitObjectProperty(ctx: ObjectPropertyContext): void {

		if (ctx.start === null || ctx.stop === null) {
			return
		}

		if (ctx.start.start <= this.offset && this.offset <= ctx.stop.stop) {
			if (ctx.property().ID()) {
				const propertyName = ctx.property().ID()!.getText()
				const propertyDefinition = getPropertyDefinition(propertyName)
				if (propertyDefinition?.validValues) {
					this.completionList.push(...propertyDefinition.validValues.map(value => ({ label: value, kind: CompletionItemKind.Field, documentation: propertyDefinition.description })))
				}
			}
		}

		this.visitChildren(ctx)
	}

	public getCompletionList(): CompletionItem[] {
		return this.completionList
	}

}
