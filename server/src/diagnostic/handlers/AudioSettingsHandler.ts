import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver/node';
import { ComplexClassContext } from '../../utils/antlr4ng/MapIniParser';
import { BaseModuleHandler } from './BaseModuleHandler';
import { Location } from '../../utils/location';
import { AudioSettingsPropertyMap } from '../types/complex/audiosettings/AudioSettingsProperties';



export class AudioSettingsHandler extends BaseModuleHandler<ComplexClassContext> {

	handleClass(ctx: ComplexClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
			ctx.property().forEach(property => {
				const text = property.value().ID()?.getText();

				if (!text) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.start!.line, property.start!.column);
					const msg = `AudioSettings doesn't have property ${text}`;
					this.addDiagnostic(severity, start, start, msg, 'missing_property');
					return;
				}

				if (!AudioSettingsPropertyMap.has(text)) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.start!.line, property.start!.column);
					const msg = `AudioSettings doesn't have property ${text}`;
					this.addDiagnostic(severity, start, start, msg, 'missing_property');
					return;
				}

				this.validateProperty(text, property, AudioSettingsPropertyMap.get(text)!);

			});
		}

		return this.diagnostics;
	}


}
