import { Diagnostic, DiagnosticSeverity, _Connection } from 'vscode-languageserver';
import { MapIniListener } from './utils/antlr/MapIniListener';
import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Stack } from 'stack-typescript'
import { AddModuleBlockContext, AliasConditionStateBlockContext, BehaviormoduleBlockContext, BodyModuleBlockContext, ConditionStateBlockContext, DefaultConditionStateBlockContext, DrawModuleBlockContext, IgnoreConditionStateBlockContext, ObjectArmorSetContext, ObjectContext, ObjectUnitSpecificFXContext, ObjectUnitSpecificSoundsContext, ObjectWeaponSetContext, PropertyContext, RemoveModuleBlockContext, ReplaceModuleBlockContext, TransitionStateBlockContext } from './utils/antlr/MapIniParser';
import * as list from './utils/lists'

enum contexts {
	PROGRAM,
	OBJECT,
	PROPERTY,
	ADDMODULETAG,
	REPLACEMODULETAG,
	BODYMODULE,
	BEHAVIORMODULE,
	DRAWMODULE,
	CONDITIONSTATE,
	TRANSITIONSTATE,
	IGNORECONDITIONSTATE,
	ALIASCONDITIONSTATE,
	WEAPONSET,
	ARMORSET,
	UNITSPECIFICSOUNDS,
	UNITSPECIFICFX,
	PREREQUISITE,
	REMOVEMODULETAG
}

enum drawmodules {
	W3DDEBRISDRAW,
	W3DDEFAULTDRAW,
	W3DDEPENDENCYMODELDRAW,
	W3DMODELDRAW,
	W3DOVERLORDTANKDRAW,
	W3DOVERLORDAIRCRAFTDRAW,
	W3DOVERLORDTRUCKDRAW,
	W3DLASERDRAW,
	W3DPOLICECARDRAW,
	W3DTREEDRAW,
	W3DPROPDRAW,
	W3DPROJECTILESTREAMDRAW,
	W3DROPEDRAW,
	W3DSCIENCEMODELDRAW,
	W3DSUPPLYDRAW,
	W3DTANKDRAW,
	W3DTANKTRUCKDRAW,
	W3DTRACERDRAW,
	W3DTRUCKDRAW
}

class DrawModelContext {

	private _drawModule: drawmodules;

	constructor(drawModule: drawmodules) {
		this._drawModule = drawModule;
	}

	getDrawModule(): drawmodules {
		return this._drawModule;
	}

	setDrawModule(drawModule: drawmodules): void {
		this._drawModule = drawModule;
	}

	toString(): string {
		return drawmodules[this._drawModule];
	}

	doesDrawModuleHaveConditionStates(): boolean {
		switch (this._drawModule) {
			case drawmodules.W3DDEBRISDRAW:
			case drawmodules.W3DDEFAULTDRAW:
			case drawmodules.W3DLASERDRAW:
			case drawmodules.W3DTREEDRAW:
			case drawmodules.W3DPROJECTILESTREAMDRAW:
			case drawmodules.W3DROPEDRAW:
			case drawmodules.W3DTRACERDRAW:
				return false;
			case drawmodules.W3DMODELDRAW:
			case drawmodules.W3DOVERLORDTANKDRAW:
			case drawmodules.W3DOVERLORDAIRCRAFTDRAW:
			case drawmodules.W3DOVERLORDTRUCKDRAW:
			case drawmodules.W3DDEPENDENCYMODELDRAW:
			case drawmodules.W3DPOLICECARDRAW:
			case drawmodules.W3DPROPDRAW:
			case drawmodules.W3DSCIENCEMODELDRAW:
			case drawmodules.W3DSUPPLYDRAW:
			case drawmodules.W3DTANKDRAW:
			case drawmodules.W3DTANKTRUCKDRAW:
			case drawmodules.W3DTRUCKDRAW:
			case drawmodules.W3DDEPENDENCYMODELDRAW:
				return true;
			default:
				return false;
		}
	}

}

export class TreeListener implements MapIniListener {
	// private _treeContext = new Stack<contexts>()
	// private _drawModelContext: DrawModelContext = new DrawModelContext(drawmodules.W3DDEFAULTDRAW);

	// private diagnostics: Diagnostic[] = [];
	// private seenValues: Set<string> = new Set();
	// private seenModuletags: Set<string> = new Set();
	// private removedModules: Set<string> = new Set();

	// private _objectProperties: Set<string> = new Set();
	// private _addModuleTagProperties: Set<string> = new Set();
	// private _drawProperties: Set<string> = new Set();
	// private _conditionStateProperties: Set<string> = new Set();

	// private _forceAddModule: boolean = true

	// constructor(forceAddmodule: boolean) {
	// 	this._forceAddModule = forceAddmodule
	// }

	// enterObject(ctx: ObjectContext): void {
	// 	this._treeContext.push(contexts.OBJECT);

	// 	//Reset seenProperties to be used for this specific object
	// 	this.removedModules.clear();
	// }

	// exitObject(ctx: ObjectContext): void {
	// 	this._treeContext.pop();
	// 	this._objectProperties.clear();
	// 	this.removedModules.clear();
	// 	this.seenModuletags.clear();
	// }

	// enterAddModuleBlock(ctx: AddModuleBlockContext): void {
	// 	if(!this._forceAddModule) return

	// 	this._treeContext.push(contexts.ADDMODULETAG);
	// }

	// exitAddModuleBlock(ctx: AddModuleBlockContext): void {
	// 	this._treeContext.pop();
	// 	this._addModuleTagProperties.clear();
	// }

	// enterBodyModuleBlock(ctx: BodyModuleBlockContext): void {
	// 	this._treeContext.push(contexts.BODYMODULE)
	// }

	// exitBodyModuleBlock(ctx: BodyModuleBlockContext): void {
	// 	this._treeContext.pop()
	// }

	// enterBehaviormoduleBlock(ctx: BehaviormoduleBlockContext): void {
	// 	this._treeContext.pop()
	// }

	// enterReplaceModuleBlock(ctx: ReplaceModuleBlockContext): void {
	// 	if(!this._forceAddModule) return
		
	// 	this._treeContext.push(contexts.REPLACEMODULETAG)
	// 	const severity = DiagnosticSeverity.Error;
	// 	const line = ctx.start.line - 1;
	// 	const startchar = ctx.start.charPositionInLine
	// 	const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length
	// 	const message = `ReplaceModule IS FORBIDDEN TO USE!!!!!!!!!`;
	// 	this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.REPLACEMODULETAG.toString()));
	// }

	// exitReplaceModuleBlock(ctx: ReplaceModuleBlockContext): void {
	// 	this._treeContext.pop();
	// }

	// // Change back to generic 'Draw =' ID ID ... 'end' and allow different properties depending on the read drawmodule
	// enterDrawModuleBlock(ctx: DrawModuleBlockContext): void {
	// 	this._treeContext.push(contexts.DRAWMODULE);
	// 	// Check if second child is in ReservedKeywords.modelDraws
	// 	// 'Draw' '=' 'W3DModelDraw' 'ModuleTag' (conditionstate | property)* 'End'
	// 	const drawModuleID = ctx.getChild(2).text;
	// 	const moduletag = ctx.getChild(3).text;
	// 	const modelDraws = list.allowedModelDrawsString

		
	// 	for(let i = 0; i < modelDraws.length; i++) {
	// 		if(modelDraws[i] === drawModuleID) {
	// 			this._drawModelContext.setDrawModule(i);
	// 			break;
	// 		}

	// 		if(i === modelDraws.length - 1) {
	// 			const severity = DiagnosticSeverity.Error;
	// 			const line = ctx.start.line - 1;
	// 			const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 3;
	// 			const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + drawModuleID.length + 3;
	// 			const message = `DrawModule "${drawModuleID}" is not a valid draw module. Allowed draw modules are: ${modelDraws.join(", ")}.`;

	// 			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.DRAWMODULE.toString()));

	// 			return;
	// 		}
	// 	}

	// 	if(this.seenModuletags.has(moduletag)) {
	// 		const severity = DiagnosticSeverity.Warning;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + ctx.getChild(1).text.length + ctx.getChild(2).text.length + 3;
	// 		const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + ctx.getChild(1).text.length + ctx.getChild(2).text.length + moduletag.length + 3;
	// 		const message = `ModuleTag "${moduletag}" is already defined. Can cause savegame issues.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.DRAWMODULE.toString()));

	// 	} else {
	// 		// Add the ID to the set
	// 		this.seenModuletags.add(moduletag);
	// 	}
	// }

	// exitDrawModuleBlock(ctx: DrawModuleBlockContext): void {
	// 	this._treeContext.pop();

	// 	this._drawProperties.clear();
	// }


	// enterConditionStateBlock(ctx: ConditionStateBlockContext): void {
	// 	this._treeContext.push(contexts.CONDITIONSTATE);

	// 	if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
	// 		let length = 0;
	// 		for(let i = 0; i < ctx.childCount; i++) {
	// 			length += ctx.getChild(i).text.length;
	// 		}

	// 		const severity = DiagnosticSeverity.Error;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine;
	// 		const endchar = ctx.stop!.charPositionInLine + length + 1;
	// 		const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.CONDITIONSTATE.toString()));
	// 	}

	// 	const damagestateIDs = ctx.ID();
	// 	const allowedDamageStates = list.allowedConditionStates;

	// 	damagestateIDs.forEach((id) => {
	// 		if(!allowedDamageStates.includes(id.text)) {
	// 			const severity = DiagnosticSeverity.Error;
	// 			const line = ctx.start.line - 1;
	// 			const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 1;
	// 			const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + id.text.length + 1;
	// 			const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

	// 			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.CONDITIONSTATE.toString()));
	// 		}
	// 	});
	// }

	// exitConditionStateBlock(ctx: ConditionStateBlockContext): void {
	// 	this._treeContext.pop();
	// 	this._conditionStateProperties.clear();
	// }

	// enterDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
	// 	this._treeContext.push(contexts.CONDITIONSTATE);

	// 	if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
	// 		const severity = DiagnosticSeverity.Error;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine;
	// 		const endchar = ctx.stop!.charPositionInLine;
	// 		const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.CONDITIONSTATE.toString()));
	// 	}
	// }

	// exitDefaultConditionStateBlock(ctx: DefaultConditionStateBlockContext): void {
	// 	this._treeContext.pop();
	// 	this._conditionStateProperties.clear();
	// }

	// enterTransitionStateBlock(ctx: TransitionStateBlockContext): void {
	// 	this._treeContext.push(contexts.TRANSITIONSTATE);

	// 	if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
	// 		let length = 0;
	// 		for(let i = 0; i < ctx.childCount; i++) {
	// 			length += ctx.getChild(i).text.length;
	// 		}

	// 		const severity = DiagnosticSeverity.Error;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine;
	// 		const endchar = ctx.stop!.charPositionInLine + length + 1;
	// 		const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.TRANSITIONSTATE.toString()));
	// 	}

	// 	const transitionstateID = ctx.ID();

	// 	transitionstateID.forEach((id) => {
	// 		const allowedDamageStates = list.allowedConditionStates; // Update to use symbol table in do time

	// 		if(!allowedDamageStates.includes(id.text)) {
	// 			const severity = DiagnosticSeverity.Error;
	// 			const line = ctx.start.line - 1;
	// 			const startchar = ctx.start.charPositionInLine;
	// 			const endchar = ctx.stop!.charPositionInLine;
	// 			const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

	// 			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.TRANSITIONSTATE.toString()));
	// 		}
	// 	});
	// }

	// exitTransitionStateBlock(ctx: TransitionStateBlockContext): void {
	// 	this._treeContext.pop();
	// 	this._conditionStateProperties.clear();
	// }

	// enterAliasConditionStateBlock(ctx: AliasConditionStateBlockContext): void {
	// 	this._treeContext.push(contexts.ALIASCONDITIONSTATE)

	// 	if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
	// 		let length = 0;
	// 		for(let i = 0; i < ctx.childCount; i++) {
	// 			length += ctx.getChild(i).text.length;
	// 		}

	// 		const severity = DiagnosticSeverity.Error;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine;
	// 		const endchar = ctx.stop!.charPositionInLine + length + 1;
	// 		const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.ALIASCONDITIONSTATE.toString()));
	// 	}

	// 	const aliasconditionstateID = ctx.ID();

	// 	aliasconditionstateID.forEach((id) => {
	// 		const allowedDamageStates = list.allowedConditionStates;
	// 		const offset = "AliasConditionState".length

	// 		if(!allowedDamageStates.includes(id.text)) {
	// 			const severity = DiagnosticSeverity.Error;
	// 			const line = ctx.start.line - 1;
	// 			const startchar = ctx.start.charPositionInLine;
	// 			const endchar = ctx.start.charPositionInLine + offset;
	// 			const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

	// 			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.ALIASCONDITIONSTATE.toString()));
	// 		}
	// 	});
	// }

	// exitAliasConditionStateBlock(ctx: AliasConditionStateBlockContext) {
	// 	this._treeContext.pop()
	// }

	// enterIgnoreConditionStateBlock(ctx: IgnoreConditionStateBlockContext): void {
	// 	this._treeContext.push(contexts.IGNORECONDITIONSTATE)

	// 	if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
	// 		let length = 0;
	// 		for(let i = 0; i < ctx.childCount; i++) {
	// 			length += ctx.getChild(i).text.length;
	// 		}

	// 		const severity = DiagnosticSeverity.Error;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine;
	// 		const endchar = ctx.stop!.charPositionInLine + length + 1;
	// 		const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.IGNORECONDITIONSTATE.toString()));
	// 	}

	// 	const ignoreconditionstatesID = ctx.ID();

	// 	ignoreconditionstatesID.forEach((id) => {
	// 		const allowedDamageStates = list.allowedConditionStates;
	// 		const offset = "IgnoreConditionStates".length

	// 		if(!allowedDamageStates.includes(id.text)) {
	// 			const severity = DiagnosticSeverity.Error;
	// 			const line = ctx.start.line - 1;
	// 			const startchar = ctx.start.charPositionInLine;
	// 			const endchar = ctx.start.charPositionInLine + offset;
	// 			const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

	// 			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.IGNORECONDITIONSTATE.toString()));
	// 		}
	// 	});
	// }
	
	// exitIgnoreConditionStateBlock(ctx: IgnoreConditionStateBlockContext) {
	// 	this._treeContext.pop()
	// }

	// enterRemoveModuleBlock(ctx: RemoveModuleBlockContext): void {
	// 	this._treeContext.push(contexts.REMOVEMODULETAG);

	// 	const moduleID = ctx.ID().text;

	// 	if(this.removedModules.has(moduleID)) {
	// 		const severity = DiagnosticSeverity.Warning;
	// 		const line = ctx.start.line - 1;
	// 		const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 1;
	// 		const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + moduleID.length + 1;
	// 		const message = `Module "${moduleID}" is already removed.`;

	// 		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.REMOVEMODULETAG.toString()));
	// 	} else {
	// 		// Add the ID to the set
	// 		this.removedModules.add(moduleID);
	// 	}
	// }

	// exitRemoveModuleTag(ctx: RemoveModuleBlockContext): void {
	// 	this._treeContext.pop();
	// }

	// enterObjectWeaponSet(ctx: ObjectWeaponSetContext): void {
	// 	this._treeContext.push(contexts.WEAPONSET)
	// }

	// exitObjectWeaponSet(ctx: ObjectWeaponSetContext): void {
	// 	this._treeContext.pop();
	// }

	// enterObjectArmorSet(ctx: ObjectArmorSetContext): void {
	// 	this._treeContext.push(contexts.ARMORSET)
	// }

	// exitObjectArmorSet(ctx: ObjectArmorSetContext): void {
	// 	this._treeContext.pop();
	// }

	// enterObjectUnitSpecificSounds(ctx: ObjectUnitSpecificSoundsContext) {
	// 	this._treeContext.push(contexts.UNITSPECIFICSOUNDS)
	// }

	// exitObjectUnitSpecificSounds(ctx: ObjectUnitSpecificSoundsContext) {
	// 	this._treeContext.pop()
	// }

	// enterObjectUnitSpecificFX(ctx: ObjectUnitSpecificFXContext): void {
	// 	this._treeContext.push(contexts.UNITSPECIFICFX)
	// }

	// exitObjectUnitSpecificFX(ctx: ObjectUnitSpecificFXContext): void {
	// 	this._treeContext.pop()
	// }

	// enterProperty(ctx: PropertyContext): void {
	// 	//Reset seenValues to be used for this specific property
	// 	this.seenValues.clear();

    //     let propertyID = ctx.ID().text;

	// 	let severity = DiagnosticSeverity.Warning;
	// 	const line = ctx.start.line - 1;
	// 	const startchar = ctx.start.charPositionInLine;
	// 	const endchar = ctx.start.charPositionInLine + propertyID.length;

	// 	switch(this._treeContext.top) {
	// 		case contexts.OBJECT:
	// 			const allowedObjectProperties = list.allowedObjectProperties;
	// 			if (!allowedObjectProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is not a valid property for an object. Allowed properties are: ${list.allowedObjectProperties.join(", ")}.`;
	// 				this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else if (this._objectProperties.has(propertyID)) {
	// 				const message = `Property "${propertyID}" is already defined.`;
	// 				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else {
	// 				this._objectProperties.add(propertyID);
	// 			}
	// 			break;
	// 		case contexts.ADDMODULETAG:
	// 			const allowedAddModuleProperties = list.allowedAddModuleProperties;
	// 			if (!allowedAddModuleProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is not a valid property for an addmoduletag. Allowed properties are: ${list.allowedAddModuleProperties.join(", ")}.`;
	// 				this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else if (this._addModuleTagProperties.has(propertyID)) {
	// 				const message = `Property "${propertyID}" is already defined.`;
	// 				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else {
	// 				this._addModuleTagProperties.add(propertyID);
	// 			}
	// 			break;
	// 		case contexts.DRAWMODULE:
	// 			const allowedSingleDrawProperties = this.getAllowedDrawProperties();
	// 			const allowedMultiDrawProperties = list.allowedMultiModelDrawProperties;

	// 			if (!allowedSingleDrawProperties.includes(propertyID) && !allowedMultiDrawProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is not a valid property for a ${this._drawModelContext.toString()}. Allowed properties are: ${allowedSingleDrawProperties.join(", ")}.`;
	// 				this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else if (this._drawProperties.has(propertyID) && !allowedMultiDrawProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is already defined.`;
	// 				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else {
	// 				this._drawProperties.add(propertyID);
	// 			}
	// 			break;
	// 		case contexts.CONDITIONSTATE:
	// 			const allowedSingleConditionProperties = list.allowedSingleConditionProperties;
	// 			const allowedMultiConditionProperties = list.allowedMultiConditionProperties;

	// 			if(!allowedSingleConditionProperties.includes(propertyID) && !allowedMultiConditionProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is not a valid property for a conditionstate. Allowed properties are: ${list.allowedSingleConditionProperties.join(", ")}.`;
	// 				this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else if (this._conditionStateProperties.has(propertyID) && !allowedMultiConditionProperties.includes(propertyID)) {
	// 				const message = `Property "${propertyID}" is already defined.`;
	// 				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			} else {
	// 				this._conditionStateProperties.add(propertyID);
	// 			}
	// 			break;
	// 		}

	// 	const propertyValue = ctx.value();

	// 	switch(propertyID) {
	// 		case "Locomotor":
	// 			const locomotorID = propertyValue[0].text;
	// 			const allowedLocomotors = list.allowedLocomotorProperties;
	// 			if(!allowedLocomotors.includes(locomotorID)) {
	// 				const severity = DiagnosticSeverity.Error;
	// 				const line = propertyValue[0].start.line - 1;
	// 				const startchar = propertyValue[0].start.charPositionInLine;
	// 				const endchar = propertyValue[0].stop!.charPositionInLine;
	// 				const message = `Locomotor "${locomotorID}" is not a valid locomotor. Allowed locomotors are: ${allowedLocomotors.join(", ")}.`;

	// 				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 			}

	// 		default:
	// 			propertyValue.forEach((value) => {
	// 				let valueText = value.text;
		
	// 				if(valueText.startsWith("\"") && valueText.endsWith("\"")) {
	// 					valueText = valueText.substring(1, valueText.length - 1);
	// 				}
		
	// 				if (this.seenValues.has(valueText) && valueText === typeof(String)) {
	// 					const severity = DiagnosticSeverity.Warning;
	// 					const line = value.start.line - 1;
	// 					const startchar = value.start.charPositionInLine;
	// 					const endchar = value.stop!.charPositionInLine;
	// 					const message = `Value "${valueText}" is already defined for ID "${propertyID}".`;
		
	// 					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message, contexts.PROPERTY.toString()));
	// 				} else {
	// 					// Add the ID to the set
	// 					this.seenValues.add(valueText);
	// 				}
	// 			});
	// 			break;
	// 		}
		

	// }

	// private getAllowedDrawProperties(): string[] {
		
	// 	let result: string[] = [];

	// 	switch(this._drawModelContext.getDrawModule()) {
	// 		case drawmodules.W3DDEBRISDRAW:
	// 			return [];

	// 		case drawmodules.W3DDEFAULTDRAW:
	// 			return [];

	// 		case drawmodules.W3DDEPENDENCYMODELDRAW:
	// 			// return ["AttachToBoneInContainer", "OkToChangeModelColor"]
	// 			return list.allowedDependencyDrawProperties

	// 		case drawmodules.W3DMODELDRAW:
	// 			return list.allowedSingleModelDrawProperties;

	// 		case drawmodules.W3DOVERLORDTANKDRAW:
	// 			return list.allowedTankDrawProperties;

	// 		case drawmodules.W3DOVERLORDAIRCRAFTDRAW:
	// 			return list.allowedSingleModelDrawProperties;

	// 		case drawmodules.W3DOVERLORDTRUCKDRAW:
	// 			return list.allowedTankTruckDrawProperties;

	// 		case drawmodules.W3DLASERDRAW:
	// 			return list.allowedLaserDrawProperties;

	// 		case drawmodules.W3DPOLICECARDRAW:
	// 			return list.allowedSingleModelDrawProperties;
			
	// 		case drawmodules.W3DTREEDRAW:
	// 			return list.allowedTreeDrawProperties;

	// 		case drawmodules.W3DPROPDRAW:
	// 			return ["ModelName"];

	// 		case drawmodules.W3DPROJECTILESTREAMDRAW:
	// 			return list.allowedProjectileStreamDrawProperties;

	// 		case drawmodules.W3DROPEDRAW:
	// 			return [];

	// 		case drawmodules.W3DSCIENCEMODELDRAW:
	// 			result = list.allowedSingleModelDrawProperties;
	// 			result.concat("RequiredScience");
	// 			return result;

	// 		case drawmodules.W3DSUPPLYDRAW:
	// 			result = list.allowedSingleModelDrawProperties;
	// 			result.concat("SupplyBonePrefix");
	// 			return result;

	// 		case drawmodules.W3DTANKDRAW:
	// 			return list.allowedTankDrawProperties;

	// 		case drawmodules.W3DTANKTRUCKDRAW:
	// 			return list.allowedTankTruckDrawProperties;

	// 		case drawmodules.W3DTRACERDRAW:
	// 			return [];

	// 		case drawmodules.W3DTRUCKDRAW:
	// 			return list.allowedTruckDrawProperties;

	// 		default:
	// 			return ["Error"];
	// 	}
	// }

	// private createDiagnostic(severity: DiagnosticSeverity, startLine: number, startChar: number, endLine: number, endChar: number, message: string, source: string): Diagnostic {
	// 	return {
	// 		severity,
	// 		range: {
	// 			start: { line: startLine, character: startChar },
	// 			end: { line: endLine, character: endChar }
	// 		},
	// 		message,
	// 		source: `ZHParser-${source}`
	// 	};
	// }

	// enterEveryRule(ctx: any): void {
	// 	//console.log("enterEveryRule");
	// }

	// exitEveryRule(ctx: any): void {
	// 	//console.log("exitEveryRule");
	// }

	// public updateForceAddModule(updateValue: boolean): void {
	// 	this._forceAddModule = updateValue
	// }

	// public getDiagnostics(): Diagnostic[] {
	// 	return this.diagnostics;
	// }

	// public addDiagnostic(diagnostic: Diagnostic): void {
	// 	this.diagnostics.push(diagnostic);
	// }

	// public resetDiagnostics(): void {
	// 	this.diagnostics = [];
	// 	this.seenValues.clear();
	// 	this.seenModuletags.clear();
	// 	this.removedModules.clear();
	// 	this._objectProperties.clear();
	// 	this._drawProperties.clear();
	// 	this._conditionStateProperties.clear();
	// 	this._addModuleTagProperties.clear();
	// }
}

export class CustomErrorListener implements ANTLRErrorListener<Token> {
	textDocument: TextDocument;
	diagnostics: Diagnostic[]

	constructor(textDocument: TextDocument, diagnostics: Diagnostic[]) {
		this.textDocument = textDocument;
		this.diagnostics = diagnostics
	}

    syntaxError(
        recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {

		let message = msg;

		// Create diagnostic for the error
		const severity = DiagnosticSeverity.Error;
		const startchar = charPositionInLine;
		const endchar = charPositionInLine + offendingSymbol!.text!.length;

		const diagnostic: Diagnostic = {
			severity,
			range: {
				start: { line: line - 1, character: startchar },
				end: { line: line - 1, character: endchar }
			},
			message,
			source: 'ZHParser-ErrorListener'
		};

		this.diagnostics.push(diagnostic)
	}
}

