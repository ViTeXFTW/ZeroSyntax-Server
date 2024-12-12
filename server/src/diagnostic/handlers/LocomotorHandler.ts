import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { LocomotorProperties } from '../types/simple/LocomotorProperties';
import { LocomotorPropertyMap } from '../types/simple/LocomotorProperties';
import { Location } from '../../utils/location';


export class LocomotorHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!LocomotorPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `Locomotor doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: LocomotorProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, LocomotorPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
