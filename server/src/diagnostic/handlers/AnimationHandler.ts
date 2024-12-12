import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { Location } from '../../utils/location';
import { AnimationProperties, AnimationPropertyMap } from '../types/simple/AnimationProperties';
import { BaseModuleHandler } from './BaseModuleHandler';


export class AnimationHandler extends BaseModuleHandler<SimpleClassContext> {
	handleClass(ctx: SimpleClassContext): Diagnostic[] {
		if (!this.checkEnd(ctx)) {
            return this.diagnostics;
        }

		if (ctx.property()) {
			let numberImages: number = -1;
			let numberImagesLocation: Location = new Location(ctx.start!.line, ctx.start!.column);
			let images: number = 0;

			ctx.property().forEach(property => {
				if (property.property_values().value()[0].getText() === "NumberImages" && numberImages != 0) {
					numberImages = Number(property.property_values().value()[0].getText());
					numberImagesLocation = new Location(property.start!.line, property.start!.column);
				} else if (property.property_values().value()[0].getText() === "Image") {
					images++;
				}

				const text = property.value().ID()?.getText();

				if (text) {
					if (!AnimationPropertyMap.has(text)) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.start!.line, property.start!.column);
						const msg = `Animation doesn't have property ${text}`;

						const data = {
							propertyName: text,
							propertyDefinition: AnimationProperties
						};

						this.addDiagnostic(severity, start, start, msg, "missing_property", data);
						return;
					}

					this.validateProperty(text, property, AnimationPropertyMap.get(text)!);
				}
			});

			if (numberImages != -1 && numberImages != images) {
				const severity = DiagnosticSeverity.Error;
				const start = numberImagesLocation;
				const msg = `Number of images doesn't match`;

				const data = {
					numberImages,
					images
				};

				this.addDiagnostic(severity, start, start, msg, "missing_images", data);
			}
		}
		
		return this.diagnostics;
	}
}