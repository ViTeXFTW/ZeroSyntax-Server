import { Diagnostic, DiagnosticSeverity, _Connection } from 'vscode-languageserver';
import { MapIniListener } from './antlr/MapIniListener';
import { AddModuleTagContext, AliasconditionstateContext, ConditionstateContext, DefaultconditionstateContext, DrawmoduleContext, IgnoreconditionstatesContext, ObjectContext, PropertyContext, RemoveModuleTagContext, ReplaceModuleContext, ReplaceModuletagContext, TransitionstateContext } from './antlr/MapIniParser';
import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { ReservedKeywords } from './lists';
import { TextDocument } from 'vscode-languageserver-textdocument';

enum contexts {
	PROGRAM,
	OBJECT,
	PROPERTY,
	ADDMODULETAG,
	MODELDRAW,
	CONDITIONSTATE,
	REMOVEMODULETAG
}

class TreeContext {
	
	private _context: contexts;
	private storedContext: contexts | null;

	constructor(context: contexts) {
		this._context = context;
		this.storedContext = context;
	}
	
	currentState(): contexts {
		return this._context;
	}

	setContext(context: contexts): void {
		this._context = context;
	}

	toString(): string {
		return contexts[this._context];
	}

	getStoredContext(): contexts {
		return this.storedContext!;
	}

	setStoredContext(context: contexts): void {
		this.storedContext = context;
	}

	resetStoredContext(): void {
		this.storedContext = null;
	}

	storedContextToString(): string {
		return contexts[this.storedContext!];
	}
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
			case drawmodules.W3DDEPENDENCYMODELDRAW:
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
			case drawmodules.W3DPOLICECARDRAW:
			case drawmodules.W3DPROPDRAW:
			case drawmodules.W3DSCIENCEMODELDRAW:
			case drawmodules.W3DSUPPLYDRAW:
			case drawmodules.W3DTANKDRAW:
			case drawmodules.W3DTANKTRUCKDRAW:
			case drawmodules.W3DTRUCKDRAW:
				return true;
			default:
				return false;
		}
	}

}

export class TreeListener implements MapIniListener {

	private _treeContext: TreeContext = new TreeContext(contexts.PROGRAM);
	private _drawModelContext: DrawModelContext = new DrawModelContext(drawmodules.W3DDEFAULTDRAW);

	private diagnostics: Diagnostic[] = [];
	private seenValues: Set<string> = new Set();
	private seenModuletags: Set<string> = new Set();
	private removedModules: Set<string> = new Set();

	private ReservedKeywords: ReservedKeywords = new ReservedKeywords();

	private _objectProperties: Set<string> = new Set();
	private _addModuleTagProperties: Set<string> = new Set();
	private _drawProperties: Set<string> = new Set();
	private _conditionStateProperties: Set<string> = new Set();

	enterObject(ctx: ObjectContext): void {
		this._treeContext.setContext(contexts.OBJECT);

		//Reset seenProperties to be used for this specific object
		this.removedModules.clear();
	}

	exitObject(ctx: ObjectContext): void {
		this._treeContext.setContext(contexts.PROGRAM);
		this._objectProperties.clear();
		this.removedModules.clear();
		this.seenModuletags.clear();
	}

	enterAddModuleTag(ctx: AddModuleTagContext): void {
		this._treeContext.setContext(contexts.ADDMODULETAG);
	}

	exitAddModuleTag(ctx: AddModuleTagContext): void {
		this._treeContext.setContext(contexts.OBJECT);
		this._addModuleTagProperties.clear();
	}

	enterReplaceModuletag(ctx: ReplaceModuletagContext): void {
		const severity = DiagnosticSeverity.Error;
		const line = ctx.start.line - 1;
		const startchar = ctx.start.charPositionInLine
		const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length
		const message = `ReplaceModule IS FORBIDDEN TO USE!!!!!!!!!`;
		this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
	}	

	// Change back to generic 'Draw =' ID ID ... 'end' and allow different properties depending on the read drawmodule
	enterDrawmodule(ctx: DrawmoduleContext): void {
		this._treeContext.setContext(contexts.MODELDRAW);
		// Check if second child is in ReservedKeywords.modelDraws
		// 'Draw' '=' 'W3DModelDraw' 'ModuleTag' (conditionstate | property)* 'End'
		const drawModuleID = ctx.getChild(2).text;
		const moduletag = ctx.getChild(3).text;
		const modelDraws = this.ReservedKeywords.getAllowedModelDraws();

		
		for(let i = 0; i < modelDraws.length; i++) {
			if(modelDraws[i] === drawModuleID) {
				this._drawModelContext.setDrawModule(i);
				break;
			}

			if(i === modelDraws.length - 1) {
				const severity = DiagnosticSeverity.Error;
				const line = ctx.start.line - 1;
				const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 3;
				const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + drawModuleID.length + 3;
				const message = `DrawModule "${drawModuleID}" is not a valid draw module. Allowed draw modules are: ${modelDraws.join(", ")}.`;

				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));

				return;
			}
		}

		if(this.seenModuletags.has(moduletag)) {
			const severity = DiagnosticSeverity.Warning;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + ctx.getChild(1).text.length + ctx.getChild(2).text.length + 3;
			const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + ctx.getChild(1).text.length + ctx.getChild(2).text.length + moduletag.length + 3;
			const message = `ModuleTag "${moduletag}" is already defined. Can cause savegame issues.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));

		} else {
			// Add the ID to the set
			this.seenModuletags.add(moduletag);
		}
	}

	exitDrawmodule(ctx: DrawmoduleContext): void {
		this._treeContext.setContext(contexts.ADDMODULETAG);

		this._drawProperties.clear();
	}


	enterConditionstate(ctx: ConditionstateContext): void {
		this._treeContext.setContext(contexts.CONDITIONSTATE);

		if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
			let length = 0;
			for(let i = 0; i < ctx.childCount; i++) {
				length += ctx.getChild(i).text.length;
			}

			const severity = DiagnosticSeverity.Error;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine;
			const endchar = ctx.stop!.charPositionInLine + length + 1;
			const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		}

		const damagestateIDs = ctx.ID();
		const allowedDamageStates = this.ReservedKeywords.getAllowedConditionStates();

		damagestateIDs.forEach((id) => {
			if(!allowedDamageStates.includes(id.text)) {
				const severity = DiagnosticSeverity.Error;
				const line = ctx.start.line - 1;
				const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 1;
				const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + id.text.length + 1;
				const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
			}
		});
	}

	exitConditionstate(ctx: ConditionstateContext): void {
		this._treeContext.setContext(contexts.MODELDRAW);
		this._conditionStateProperties.clear();
	}

	enterDefaultconditionstate(ctx: DefaultconditionstateContext): void {
		this._treeContext.setContext(contexts.CONDITIONSTATE);

		if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
			const severity = DiagnosticSeverity.Error;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine;
			const endchar = ctx.stop!.charPositionInLine;
			const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		}
	}

	exitDefaultconditionstate(ctx: DefaultconditionstateContext): void {
		this._treeContext.setContext(contexts.MODELDRAW);
		this._conditionStateProperties.clear();
	}

	enterTransitionstate(ctx: TransitionstateContext): void {
		this._treeContext.setContext(contexts.CONDITIONSTATE);

		if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
			let length = 0;
			for(let i = 0; i < ctx.childCount; i++) {
				length += ctx.getChild(i).text.length;
			}

			const severity = DiagnosticSeverity.Error;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine;
			const endchar = ctx.stop!.charPositionInLine + length + 1;
			const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		}

		const transitionstateID = ctx.ID();

		transitionstateID.forEach((id) => {
			const allowedDamageStates = this.ReservedKeywords.getAllowedConditionStates();

			if(!allowedDamageStates.includes(id.text)) {
				const severity = DiagnosticSeverity.Error;
				const line = ctx.start.line - 1;
				const startchar = ctx.start.charPositionInLine;
				const endchar = ctx.stop!.charPositionInLine;
				const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
			}
		});
	}

	exitTransitionstate(ctx: TransitionstateContext): void {
		this._treeContext.setContext(contexts.MODELDRAW);
		this._conditionStateProperties.clear();
	}

	enterAliasconditionstate(ctx: AliasconditionstateContext): void {

		if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
			let length = 0;
			for(let i = 0; i < ctx.childCount; i++) {
				length += ctx.getChild(i).text.length;
			}

			const severity = DiagnosticSeverity.Error;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine;
			const endchar = ctx.stop!.charPositionInLine + length + 1;
			const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		}

		const aliasconditionstateID = ctx.ID();

		aliasconditionstateID.forEach((id) => {
			const allowedDamageStates = this.ReservedKeywords.getAllowedConditionStates();
			const offset = "AliasConditionState".length

			if(!allowedDamageStates.includes(id.text)) {
				const severity = DiagnosticSeverity.Error;
				const line = ctx.start.line - 1;
				const startchar = ctx.start.charPositionInLine;
				const endchar = ctx.start.charPositionInLine + offset;
				const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
			}
		});
	}

	enterIgnoreconditionstates(ctx: IgnoreconditionstatesContext): void {

		if(!this._drawModelContext.doesDrawModuleHaveConditionStates()) {
			let length = 0;
			for(let i = 0; i < ctx.childCount; i++) {
				length += ctx.getChild(i).text.length;
			}

			const severity = DiagnosticSeverity.Error;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine;
			const endchar = ctx.stop!.charPositionInLine + length + 1;
			const message = `DrawModule "${this._drawModelContext.toString()}" does not support conditionstates.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		}

		const ignoreconditionstatesID = ctx.ID();

		ignoreconditionstatesID.forEach((id) => {
			const allowedDamageStates = this.ReservedKeywords.getAllowedConditionStates();
			const offset = "IgnoreConditionStates".length

			if(!allowedDamageStates.includes(id.text)) {
				const severity = DiagnosticSeverity.Error;
				const line = ctx.start.line - 1;
				const startchar = ctx.start.charPositionInLine;
				const endchar = ctx.start.charPositionInLine + offset;
				const message = `Damagestate "${id.text}" is not a valid damagestate. Allowed damagestates are: ${allowedDamageStates.join(", ")}.`;

				this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
			}
		});
	}

	enterRemoveModuleTag(ctx: RemoveModuleTagContext): void {
		this._treeContext.setContext(contexts.REMOVEMODULETAG);

		const moduleID = ctx.ID().text;

		if(this.removedModules.has(moduleID)) {
			const severity = DiagnosticSeverity.Warning;
			const line = ctx.start.line - 1;
			const startchar = ctx.start.charPositionInLine + ctx.getChild(0).text.length + 1;
			const endchar = ctx.stop!.charPositionInLine + ctx.getChild(0).text.length + moduleID.length + 1;
			const message = `Module "${moduleID}" is already removed.`;

			this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
		} else {
			// Add the ID to the set
			this.removedModules.add(moduleID);
		}
	}

	exitRemoveModuleTag(ctx: RemoveModuleTagContext): void {
		this._treeContext.setContext(contexts.OBJECT);
	}

	enterProperty(ctx: PropertyContext): void {
		//Reset seenValues to be used for this specific property
		this.seenValues.clear();

        let propertyID = ctx.ID().text;

		let severity = DiagnosticSeverity.Warning;
		const line = ctx.start.line - 1;
		const startchar = ctx.start.charPositionInLine;
		const endchar = ctx.start.charPositionInLine + propertyID.length;

		switch(this._treeContext.currentState()) {
			case contexts.OBJECT:
				const allowedObjectProperties = this.ReservedKeywords.getAllowedObjectProperties();
				if (!allowedObjectProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is not a valid property for an object. Allowed properties are: ${this.ReservedKeywords.getAllowedObjectProperties().join(", ")}.`;
					this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message));
				} else if (this._objectProperties.has(propertyID)) {
					const message = `Property "${propertyID}" is already defined.`;
					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
				} else {
					this._objectProperties.add(propertyID);
				}
				break;
			case contexts.ADDMODULETAG:
				const allowedAddModuleProperties = this.ReservedKeywords.getAllowedAddModuleProperties();
				if (!allowedAddModuleProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is not a valid property for an addmoduletag. Allowed properties are: ${this.ReservedKeywords.getAllowedAddModuleProperties().join(", ")}.`;
					this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message));
				} else if (this._addModuleTagProperties.has(propertyID)) {
					const message = `Property "${propertyID}" is already defined.`;
					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
				} else {
					this._addModuleTagProperties.add(propertyID);
				}
				break;
			case contexts.MODELDRAW:
				const allowedSingleDrawProperties = this.getAllowedDrawProperties();
				const allowedMultiDrawProperties = this.ReservedKeywords.getAllowedMultiModelDrawProperties();

				if (!allowedSingleDrawProperties.includes(propertyID) && !allowedMultiDrawProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is not a valid property for a ${this._drawModelContext.toString()}. Allowed properties are: ${allowedSingleDrawProperties.join(", ")}.`;
					this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message));
				} else if (this._drawProperties.has(propertyID) && !allowedMultiDrawProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is already defined.`;
					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
				} else {
					this._drawProperties.add(propertyID);
				}
				break;
			case contexts.CONDITIONSTATE:
				const allowedSingleConditionProperties = this.ReservedKeywords.getAllowedSingleConditionProperties();
				const allowedMultiConditionProperties = this.ReservedKeywords.getAllowedMultiConditionProperties();

				if(!allowedSingleConditionProperties.includes(propertyID) && !allowedMultiConditionProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is not a valid property for a conditionstate. Allowed properties are: ${this.ReservedKeywords.getAllowedSingleConditionProperties().join(", ")}.`;
					this.diagnostics.push(this.createDiagnostic(DiagnosticSeverity.Error, line, startchar, line, endchar, message));
				} else if (this._conditionStateProperties.has(propertyID) && !allowedMultiConditionProperties.includes(propertyID)) {
					const message = `Property "${propertyID}" is already defined.`;
					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
				} else {
					this._conditionStateProperties.add(propertyID);
				}
				break;
			}

		const propertyValue = ctx.value();

		switch(propertyID) {
			case "Locomotor":
				const locomotorID = propertyValue[0].text;
				const allowedLocomotors = this.ReservedKeywords.getAllowedLocomotorProperties();
				if(!allowedLocomotors.includes(locomotorID)) {
					const severity = DiagnosticSeverity.Error;
					const line = propertyValue[0].start.line - 1;
					const startchar = propertyValue[0].start.charPositionInLine;
					const endchar = propertyValue[0].stop!.charPositionInLine;
					const message = `Locomotor "${locomotorID}" is not a valid locomotor. Allowed locomotors are: ${allowedLocomotors.join(", ")}.`;

					this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
				}

			default:
				propertyValue.forEach((value) => {
					let valueText = value.text;
		
					if(valueText.startsWith("\"") && valueText.endsWith("\"")) {
						valueText = valueText.substring(1, valueText.length - 1);
					}
		
					if (this.seenValues.has(valueText)) {
						const severity = DiagnosticSeverity.Warning;
						const line = value.start.line - 1;
						const startchar = value.start.charPositionInLine;
						const endchar = value.stop!.charPositionInLine;
						const message = `Value "${valueText}" is already defined for ID "${propertyID}".`;
		
						this.diagnostics.push(this.createDiagnostic(severity, line, startchar, line, endchar, message));
					} else {
						// Add the ID to the set
						this.seenValues.add(valueText);
					}
				});
				break;
			}
		

	}

	private getAllowedDrawProperties(): string[] {
		
		let result: string[] = [];

		switch(this._drawModelContext.getDrawModule()) {
			case drawmodules.W3DDEBRISDRAW:
				return [];

			case drawmodules.W3DDEFAULTDRAW:
				return [];

			case drawmodules.W3DDEPENDENCYMODELDRAW:
				return ["AttachToBoneInContainer"];

			case drawmodules.W3DMODELDRAW:
				return this.ReservedKeywords.getAllowedSingleModelDrawProperties();

			case drawmodules.W3DOVERLORDTANKDRAW:
				return this.ReservedKeywords.getAllowedTankDrawProperties();

			case drawmodules.W3DOVERLORDAIRCRAFTDRAW:
				return this.ReservedKeywords.getAllowedSingleModelDrawProperties();

			case drawmodules.W3DOVERLORDTRUCKDRAW:
				return this.ReservedKeywords.getAllowedTankTruckDrawProperties();

			case drawmodules.W3DLASERDRAW:
				return this.ReservedKeywords.getAllowedLaserDrawProperties();

			case drawmodules.W3DPOLICECARDRAW:
				return this.ReservedKeywords.getAllowedSingleModelDrawProperties();
			
			case drawmodules.W3DTREEDRAW:
				return this.ReservedKeywords.getAllowedTreesDrawProperties();

			case drawmodules.W3DPROPDRAW:
				return ["ModelName"];

			case drawmodules.W3DPROJECTILESTREAMDRAW:
				return this.ReservedKeywords.getAllowedProjectileStreamDrawProperties();

			case drawmodules.W3DROPEDRAW:
				return [];

			case drawmodules.W3DSCIENCEMODELDRAW:
				result = this.ReservedKeywords.getAllowedSingleModelDrawProperties();
				result.concat("RequiredScience");
				return result;

			case drawmodules.W3DSUPPLYDRAW:
				result = this.ReservedKeywords.getAllowedSingleModelDrawProperties();
				result.concat("SupplyBonePrefix");
				return result;

			case drawmodules.W3DTANKDRAW:
				return this.ReservedKeywords.getAllowedTankDrawProperties();

			case drawmodules.W3DTANKTRUCKDRAW:
				return this.ReservedKeywords.getAllowedTankTruckDrawProperties();

			case drawmodules.W3DTRACERDRAW:
				return [];

			case drawmodules.W3DTRUCKDRAW:
				return this.ReservedKeywords.getAllowedTruckDrawProperties();

			default:
				return ["Error"];
		}
	}

	private createDiagnostic(severity: DiagnosticSeverity, startLine: number, startChar: number, endLine: number, endChar: number, message: string): Diagnostic {
		return {
			severity,
			range: {
				start: { line: startLine, character: startChar },
				end: { line: endLine, character: endChar }
			},
			message,
			source: 'ZHParser'
		};
	}

	enterEveryRule(ctx: any): void {
		//console.log("enterEveryRule");
	}

	exitEveryRule(ctx: any): void {
		//console.log("exitEveryRule");
	}

	public getDiagnostics(): Diagnostic[] {
		return this.diagnostics;
	}

	public addDiagnostic(diagnostic: Diagnostic): void {
		this.diagnostics.push(diagnostic);
	}

	public resetDiagnostics(): void {
		this.diagnostics = [];
		this.seenValues.clear();
		this.seenModuletags.clear();
		this.removedModules.clear();
		this._objectProperties.clear();
		this._drawProperties.clear();
		this._conditionStateProperties.clear();
		this._addModuleTagProperties.clear();
	}
}

export class CustomErrorListener implements ANTLRErrorListener<Token> {
	textDocument: TextDocument;
	treeListener: TreeListener;

	constructor(textDocument: TextDocument, treeListener: TreeListener) {
		this.textDocument = textDocument;
		this.treeListener = treeListener;
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
			source: 'ZHParser'
		};

		// Push the diagnostic to the array
		this.treeListener.addDiagnostic(diagnostic);
	}

}

