import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { CommandButtonProperties, CommandButtonPropertyMap } from '../types/simple/CommandButtonProperties';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { Location } from '../../utils/location';
import { BaseModuleHandler } from './BaseModuleHandler';



export class CommandButtonHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!CommandButtonPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `CommandButton doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: CommandButtonProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, CommandButtonPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
