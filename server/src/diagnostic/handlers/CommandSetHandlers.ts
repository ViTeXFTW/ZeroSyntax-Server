import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { CommandSetProperties } from '../types/simple/CommandSetProperties';
import { CommandSetPropertyMap } from '../types/simple/CommandSetProperties';
import { Location } from '../../utils/location';


export class CommandSetHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!CommandSetPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `CommandSet doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: CommandSetProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, CommandSetPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
