import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BaseModuleHandler } from './BaseModuleHandler';
import { ComplexClassContext, PropertyBlockContext } from '../../utils/antlr4ng/MapIniParser';
import { AiDataPropertyMap } from '../types/complex/aidata/AiDataProperties';
import { Location } from '../../utils/location';
import { AiDataFactionTypes_t } from '../types/complex/aidata/AiDataFactions';
import { IniTypes_t } from '../types/IniType_t';
import { objects, customObjects, objectReskin, customObjectReskin} from '../../utils/lists';
import { AIDataStructurePropertyMap } from '../types/complex/aidata/AIDataStructureProperties';


export class AiDataHandler extends BaseModuleHandler<ComplexClassContext> {

	handleClass(ctx: ComplexClassContext): Diagnostic[] {
		console.log('AiDataHandler.handleClass() - Start');
		
		if (!this.checkEnd(ctx)) {
			console.log('AiDataHandler.handleClass() - End check failed');
			return this.diagnostics;
		}

		if (ctx.property()) {
			console.log('AiDataHandler.handleClass() - Processing properties');
			
			for (const property of ctx.property()) {
				const text = property.value().ID()?.getText();

				if (!text) {
					console.log('AiDataHandler.handleClass() - Empty property text, skipping');
					continue;
				}

				console.log(`AiDataHandler.handleClass() - Processing property: ${text}`);

				if (!AiDataPropertyMap.has(text)) {
					console.log(`AiDataHandler.handleClass() - Invalid property: ${text}`);
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(property.start!.line, property.start!.column);
					const msg = `Property ${text} is not valid`;
					this.addDiagnostic(severity, start, start, msg, 'invalid_property');
					continue;
				}

				this.validateProperty(text, property, AiDataPropertyMap.get(text)!);
			}
		}

		if (ctx.propertyBlock()) {
			console.log('AiDataHandler.handleClass() - Processing property blocks');
			
			for (const propertyBlock of ctx.propertyBlock()) {
				if (propertyBlock.ID().length !== 2) {
					console.log('AiDataHandler.handleClass() - Invalid property block length');
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
					const msg = `AiData faction property block must have 2 strings`;
					this.addDiagnostic(severity, start, start, msg);
					continue;
				}

				const propertyBlockType = propertyBlock.ID()[0]!.getText();
				const propertyFaction = propertyBlock.ID()[1]!.getText();

				console.log(`AiDataHandler.handleClass() - Processing block type: ${propertyBlockType}, faction: ${propertyFaction}`);

				if (!(propertyBlockType === 'SideInfo' || propertyBlockType === 'SkirmishBuildList')) {
					console.log(`AiDataHandler.handleClass() - Invalid block type: ${propertyBlockType}`);
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
					const msg = `AiData property block ${propertyBlockType} is not valid`;
					this.addDiagnostic(severity, start, start, msg);
				}

				// Handle Faction ID
				if (!Object.values(AiDataFactionTypes_t).includes(propertyFaction as AiDataFactionTypes_t)) {
					console.log(`AiDataHandler.handleClass() - Invalid faction: ${propertyFaction}`);
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.ID()[1]!.symbol.line, propertyBlock.ID()[1]!.symbol.column);
					const msg = `AiData faction ${propertyFaction} is not valid. Valid factions are: ${Object.values(AiDataFactionTypes_t).join(', ')}`;
					this.addDiagnostic(severity, start, start, msg);
				}

				switch (propertyBlockType) {
					case 'SideInfo': {
						console.log('AiDataHandler.handleClass() - Handling SideInfo');
						this.handleSideInfo(propertyBlock, propertyFaction);
						break;
					}

					case 'SkirmishBuildList': {
						console.log('AiDataHandler.handleClass() - Handling SkirmishBuildList');
						this.handleSkirmishBuildList(propertyBlock, propertyFaction);
						break;
					}

					default: {
						console.log(`AiDataHandler.handleClass() - Invalid block type in switch: ${propertyBlockType}`);
						const severity = DiagnosticSeverity.Error;
						const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
						const msg = `AiData property block ${propertyBlockType} is not valid`;
						this.addDiagnostic(severity, start, start, msg);
						break;
					}
				}
			}
		}

		console.log('AiDataHandler.handleClass() - End');
		return this.diagnostics;
	}

	private handleSideInfo(propertyBlock: PropertyBlockContext, propertyFaction: string): void {
		console.log('AiDataHandler.handleSideInfo() - Start');
		
		// SkillSet1-8
		if (propertyBlock.propertyBlock()) {
			for (const innerPropertyBlock of propertyBlock.propertyBlock()) {
				if (innerPropertyBlock.ID().length !== 1) {
					console.log('AiDataHandler.handleSideInfo() - Invalid inner property block length');
					const severity = DiagnosticSeverity.Error;
					const start = new Location(innerPropertyBlock.ID()[0]!.symbol.line, innerPropertyBlock.ID()[0]!.symbol.column);
					const msg = `AiData faction property block must have 1 string`;
					this.addDiagnostic(severity, start, start, msg);
					continue;
				}

				const text = innerPropertyBlock.ID()[0]!.getText();

				if (!text) {
					console.log('AiDataHandler.handleSideInfo() - Empty inner block text, skipping');
					continue;
				}

				console.log(`AiDataHandler.handleSideInfo() - Processing inner block: ${text}`);

				const skillSetMatch = text.match(/^SkillSet([1-8])$/); // <- I hate regex
				if (!skillSetMatch) {
					console.log(`AiDataHandler.handleSideInfo() - Invalid SkillSet: ${text}`);
					const severity = DiagnosticSeverity.Error;
					const start = new Location(innerPropertyBlock.ID()[0]!.symbol.line, innerPropertyBlock.ID()[0]!.symbol.column);
					const msg = `Only blocks supported in SideInfo are SkillSet1-8`;
					this.addDiagnostic(severity, start, start, msg);
					continue;
				}

				// Properties inside SkillSet1-8
				for (const property of innerPropertyBlock.property()) {
					const text = property.value().ID()?.getText();

					if (!text) {
						console.log('AiDataHandler.handleSideInfo() - Empty property text in SkillSet, skipping');
						continue;
					}

					if (!(text === 'Science')) {
						console.log(`AiDataHandler.handleSideInfo() - Invalid property: ${text}`);
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.start!.line, property.start!.column);
						const msg = `Property ${text} is not valid - Only Science is supported in SkillSet`;
						this.addDiagnostic(severity, start, start, msg, 'invalid_property');
						continue;
					}

					console.log(`AiDataHandler.handleSideInfo() - Processing SkillSet property: ${text}`);

					const propertyDefinition = {
						name: 'Science',
						type: IniTypes_t.SCIENCE,
						description: 'The science that should be given to the faction at that level',
					};

					this.validateProperty(text!, property, propertyDefinition);
				}
			}
		}
		console.log('AiDataHandler.handleSideInfo() - End');
	}

	private handleSkirmishBuildList(propertyBlock: PropertyBlockContext, propertyFaction: string): void {
		console.log('AiDataHandler.handleSkirmishBuildList() - Start');
		
		// Handle Structure part
		if (propertyBlock.propertyBlock()) {
			for (const innerPropertyBlock of propertyBlock.propertyBlock()) {
				
				if (innerPropertyBlock.ID().length !== 2) {
					console.log('AiDataHandler.handleSkirmishBuildList() - Invalid inner property block length');
					const severity = DiagnosticSeverity.Error;
					const start = new Location(innerPropertyBlock.ID()[0]!.symbol.line, innerPropertyBlock.ID()[0]!.symbol.column);
					const msg = `AiData faction property block must have 2 strings. 'Structure' *ObjectName*`;
					this.addDiagnostic(severity, start, start, msg);
					continue;
				}

				const ObjectName = innerPropertyBlock.ID()[1]!.getText();
				console.log(`AiDataHandler.handleSkirmishBuildList() - Processing object: ${ObjectName}`);

				// Check if Object exists.
				if(!objects.includes(ObjectName)
					&& !customObjects.includes(ObjectName)
					&& !objectReskin.includes(ObjectName)
					&& !customObjectReskin.includes(ObjectName
				)) {
					console.log(`AiDataHandler.handleSkirmishBuildList() - Invalid object: ${ObjectName}`);
					const severity = DiagnosticSeverity.Error;
					const start = new Location(innerPropertyBlock.ID()[1]!.symbol.line, innerPropertyBlock.ID()[1]!.symbol.column);
					const msg = `Second string must be an object. ${ObjectName} is not valid`;
					this.addDiagnostic(severity, start, start, msg);
					continue;
				}

				if (innerPropertyBlock.property()) {
					console.log('AiDataHandler.handleSkirmishBuildList() - Processing inner block properties');
					for (const property of innerPropertyBlock.property()) {
						const text = property.value().ID()?.getText();

						if (!text) {
							console.log('AiDataHandler.handleSkirmishBuildList() - Empty property text, skipping');
							continue;
						}

						if (!AIDataStructurePropertyMap.has(text)) {
							console.log(`AiDataHandler.handleSkirmishBuildList() - Invalid property: ${text}`);
							const severity = DiagnosticSeverity.Error;
							const start = new Location(property.start!.line, property.start!.column);
							const msg = `Property ${text} is not valid`;
							this.addDiagnostic(severity, start, start, msg, 'invalid_property');
							continue;
						}

						console.log(`AiDataHandler.handleSkirmishBuildList() - Validating property: ${text}`);
						this.validateProperty(text, property, AIDataStructurePropertyMap.get(text)!);
					}
				}
			}
		}
		console.log('AiDataHandler.handleSkirmishBuildList() - End');
	}
}
