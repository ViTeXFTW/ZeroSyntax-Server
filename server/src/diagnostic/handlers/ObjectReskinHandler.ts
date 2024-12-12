import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ComplexObjectHandler } from './ObjectHandler';
import { ILanguageServerSettings } from './interfaces/ILanguageServerSettings';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { ComplexClassContext, SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { Location } from '../../utils/location';
import * as list from '../../utils/lists';


export class ObjectReskinHandler extends ComplexObjectHandler {
	constructor(parseTreeVisitor: AbstractParseTreeVisitor<void>, languageServerSettings?: ILanguageServerSettings) {
		super(parseTreeVisitor, languageServerSettings);
	}

	handleClass(ctx: ComplexClassContext | SimpleClassContext): Diagnostic[] {
		
		// Check that the Class_value is an object
		if (ctx instanceof SimpleClassContext) {
			const classValue = ctx.class_value()?.getText();
			if (!classValue) {
				return [];
			}

			if (!list.objects.includes(classValue)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.class_value()!.start!.line, ctx.class_value()!.start!.column);
				const msg = `Class value ${classValue} is not an object`;
				this.addDiagnostic(severity, start, start, msg);
				return this.diagnostics;
			}
		} else {
			// Check if the class_values are an object
			const classValues = ctx.class_value();

			for (const classValue of classValues) {
				if (!list.objects.includes(classValue.getText())) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(classValue.start!.line, classValue.start!.column);
					const msg = `Class value ${classValue.getText()} is not an object`;
					this.addDiagnostic(severity, start, start, msg);
					return this.diagnostics;
				}
			}
		}

		return super.handleClass(ctx);
	}
}