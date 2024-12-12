import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { DialogEventPropertyMap } from '../types/simple/DialogEventProperties';
import { DialogEventProperties } from '../types/simple/DialogEventProperties';
import { Location } from '../../utils/location';



export class DialogEventHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!DialogEventPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `DialogEvent doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: DialogEventProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, DialogEventPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
