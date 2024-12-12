import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { ArmorProperties } from '../types/simple/ArmorProperties';
import { ArmorPropertyMap } from '../types/simple/ArmorProperties';
import { Location } from '../../utils/location';


export class ArmorHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!ArmorPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Armor doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: ArmorProperties,
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, ArmorPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
