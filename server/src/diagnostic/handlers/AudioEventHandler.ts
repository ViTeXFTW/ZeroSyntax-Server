import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { AudioEventProperties } from '../types/simple/AudioEventProperties';
import { AudioEventPropertyMap } from '../types/simple/AudioEventProperties';
import { Location } from '../../utils/location';


export class AudioEventHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
            for (const property of ctx.property()) {
                const text = property.value().ID()?.getText();

                if (text) {
                    if (!AudioEventPropertyMap.has(text)) {
                        const severity = DiagnosticSeverity.Error;
                        const start = new Location(property.start!.line, property.start!.column);
                        const msg = `AudioEvent doesn't have property ${text}`;

                        const data = {
                            propertyName: text,
                            propertyDefinition: AudioEventProperties
                        };

                        this.addDiagnostic(severity, start, start, msg, "missing_property", data);
                    }

                    this.validateProperty(text, property, AudioEventPropertyMap.get(text)!);
                }
            }
        }

		return this.diagnostics;
	}
}
