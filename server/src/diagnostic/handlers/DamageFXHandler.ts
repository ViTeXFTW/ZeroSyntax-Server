import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { DamageFXProperties } from '../types/simple/DamageFXProperties';
import { DamageFXPropertyMap } from '../types/simple/DamageFXProperties';
import { Location } from '../../utils/location';

export class DamageFXHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!DamageFXPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `DamageFX doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: DamageFXProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, DamageFXPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
