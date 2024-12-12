import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { BehaviorModule_t } from '../types/complex/object/behaviorModule/BehaviorModule_t';
import { prehandleBehaviorModules, PrehandleBehaviorModules_t } from '../types/complex/object/behaviorModule/PrehandleBehaviorModules';
import { getObjectPropertyDefinition, getObjectPropertyTree, objectProperties, ObjectSoundProperties } from '../types/complex/object/ObjectProperties';
import { ArmorSetPropertyMap, PrerequisitePropertyMap, UnitSpecificFXs, UnitSpecificSounds, WeaponSetPropertyMap } from '../types/complex/object/ObjectSetProperties';
import { DrawModuleAssignmentBlockTypes_t, DrawModulePropertyBlockTypes_t, ObjectModuleTypeNames_t, ObjectSetTypes_t } from '../types/complex/object/ObjectTypes';
import { AddModuleContext, ComplexClassContext, ConditionBlockContext, ObjectModulesContext, PropertyBlockContext, PropertyContext, SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { additionalConditionStates, clearCustomConditionStates, clearTransitionKeys, conditionStates, customConditionStates, transitionKeys } from '../../utils/lists';
import { Location } from '../../utils/location';
import { BaseModuleHandler } from './BaseModuleHandler';
import { ILanguageServerSettings } from './interfaces/ILanguageServerSettings';
import { ForceAddModule_t } from '../types/complex/object/ForceAddModule_t';
import { DrawModule_t } from '../types/complex/object/drawModule/DrawModule_t';
import { getDrawModulePropertyDefinition, getDrawModulePropertyTree } from '../types/complex/object/drawModule/DrawModuleProperties';
import { getConditionStatePropertyDefinition, getConditionStatePropertyTree } from '../types/complex/object/ConditionStateProperties';
import { BodyModule_t } from '../types/complex/object/bodyModule/BodyModule_t';
import { getBodyModulePropertyDefinition, getBodyModulePropertyTree } from '../types/complex/object/bodyModule/BodyModuleProperties';
import { baseDecalProperties, baseTurretProperties, getBehaviorModulePropertyDefinition, getBehaviorModulePropertyTree } from '../types/complex/object/behaviorModule/BehaviorModuleProperties';
import { BehaviorModuleAI_t, BehaviorModuleDecals_t } from '../types/complex/object/behaviorModule/BehaviorModuleAI_t';
import { getClientModulePropertyDefinition, getClientModulePropertyTree } from '../types/complex/object/clientModule/ClientModuleProperties';
import { ClientModule_t } from '../types/complex/object/clientModule/ClientModule_t';
import { kindOfs_t, Locomotor_types_t } from '../types/PropertyTypes';
import { customLocomotorClassList } from '../data/ClassLists';
import { originalLocomotorClassList } from '../data/ClassLists';
import { AbstractParseTreeVisitor } from 'antlr4ng';

export class ComplexObjectHandler extends BaseModuleHandler<SimpleClassContext | ComplexClassContext> {

	/** List of module tags found in the class context */
	private classModuleTags: string[] = [];

	constructor(parseTreeVisitor: AbstractParseTreeVisitor<void>, languageServerSettings?: ILanguageServerSettings) {
		super();
		this.parseTreeVisitor = parseTreeVisitor;
		this.languageServerSettings = languageServerSettings;
	}

	/**
	 * Main handler for processing a complex class context.
	 * Validates the class structure and processes all its components.
	 * @param ctx - The complex class context to process
	 * @returns Array of diagnostic messages from validation
	 */
	handleClass(ctx: ComplexClassContext | SimpleClassContext): Diagnostic[] {
		console.log(`Starting handleClass - ModuleTags: ${this.classModuleTags}`);

		if (!this.checkEnd(ctx)) {
			return this.diagnostics;
		}

		if (ctx instanceof ComplexClassContext) {
			this.preloadBehaviorModules(ctx);
			this.preloadBehaviorModuleList(ctx);

		}

		this.handleObjectProperties(ctx);

		if (ctx instanceof ComplexClassContext) {
			this.handleObjectSets(ctx);

			if (ctx.module_modifier()) {
				for (const modifier of ctx.module_modifier()) {
					if (modifier.addModule()) {
						if (!this.checkEnd(modifier.addModule()!)) {
							return this.diagnostics;
						}

						for (const module of modifier.addModule()!.objectModules()) {
							this.handleObjectModules(module);
						}
					}
				}
			} else {
				for (const module of ctx.objectModules()) {
					if (!this.checkEnd(module)) {
						return this.diagnostics;
					}

					this.handleObjectModules(module);
				}
			}
		}

		return this.diagnostics;
	}

	// =============================
	// ====== PUBLIC METHODS ======
	// =============================


	/**
	 * Handles object modules within a complex class context.
	 * Validates module context and type, and routes to appropriate handlers.
	 * @param ctx - The object modules context to process
	 */
	public handleObjectModules(ctx: ObjectModulesContext): void {
		if (this.languageServerSettings?.forceAddModule === ForceAddModule_t.Yes) {
			if (!(ctx.parent instanceof AddModuleContext)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.start!.line, ctx.start!.column);
				const msg = `This module must be incapsulated in a AddModule block`;
				this.addDiagnostic(severity, start, start, msg, "module");
			} else {
				console.log(`Module: ${ctx.module_name()?.getText()} is incapsulated in a AddModule block`);
			}
		} else {
			if (ctx.parent instanceof AddModuleContext) {
				console.log(`Module: ${ctx.module_name()?.getText()} is incapsulated in a AddModule block`);
			} else {
				console.log(`Module: ${ctx.module_name()?.getText()} is not incapsulated in a AddModule block`);
			}
		}

		const moduleType = ctx.module_type()?.getText();
		const moduleName = ctx.module_name()?.getText();
		const moduleTag = ctx.moduleTag_value()?.getText();

		if (!moduleType || !moduleName || !moduleTag) {
			console.log(`No module type, name, or tag found: ${ctx.getText()}`);
			return;
		}

		console.log(`ModuleTag: ${moduleTag}`);
		console.log(`ClassModuleTags: ${this.classModuleTags}`);

		if (moduleTag && this.classModuleTags.includes(moduleTag)) {
			const severity = DiagnosticSeverity.Warning;
			const start = new Location(ctx.moduleTag_value()!.start!.line, ctx.moduleTag_value()!.start!.column);
			const msg = `ModuleTag ${moduleTag} is already used in another class`;
			this.addDiagnostic(severity, start, start, msg, "module_tag");
		} else {
			this.classModuleTags.push(moduleTag);
		}

		console.log(`ClassModuleTags: ${this.classModuleTags}`);

		switch (moduleType) {
			case ObjectModuleTypeNames_t.DRAW: {
				this.handleDrawModule(ctx);
				break;
			}
			case ObjectModuleTypeNames_t.BODY: {
				this.handleBodyModule(ctx);
				break;
			}
			case ObjectModuleTypeNames_t.BEHAVIOR: {
				this.handleBehaviorModule(ctx);
				break;
			}
			case ObjectModuleTypeNames_t.CLIENT: {
				this.handleClientModule(ctx);
				break;
			}
			case "Locomotor": {
				this.handleLocomotorModule(ctx);
				break;
			}
			case "KindOf": {
				this.handleKindOfModule(ctx);
				break;
			}
			default: {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.module_type()!.start!.line, ctx.module_type()!.start!.column);
				const msg = `Not a valid module type`;
				this.addDiagnostic(severity, start, start, msg, "module");
			}
		}
	}

	/**
	 * Handles condition blocks within a complex class context.
	 * Validates condition block type and routes to appropriate handlers.
	 * @param ctx - The condition block context to process
	 */
	public handleObjectCondtionBlock(ctx: ConditionBlockContext): void {
		const conditionBlockType = ctx.CONDITIONSTATE()?.getText();

		if (!conditionBlockType) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.start!.line, ctx.start!.column);
			const msg = `Not a valid block for DrawModule`;
			this.addDiagnostic(severity, start, start, msg, "draw_module");
		}

		switch (conditionBlockType) {
			case DrawModuleAssignmentBlockTypes_t.TRANSITIONSTATE:
			case DrawModuleAssignmentBlockTypes_t.CONDITIONSTATE:
				this.handleDrawModuleConditionState(ctx);
				break;
			default: {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.start!.line, ctx.start!.column);
				const msg = `Not a valid block for DrawModule`;
				this.addDiagnostic(severity, start, start, msg, "draw_module");
				break;
			}
		}
	}

	// =============================
	// ====== PRIVATE METHODS ======
	// =============================

	/**
	 * Preloads and processes behavior modules from the class context.
	 * Clears any existing custom condition states and handles behavior changes
	 * for both direct object modules and module modifiers.
	 * @param ctx - The complex class context containing module definitions
	 */
	private preloadBehaviorModules(ctx: ComplexClassContext): void {
		clearCustomConditionStates();
		console.log('Preloading behavior modules');

		if (ctx.objectModules()) {
			this.handleBehaviorChanges(ctx.objectModules());
		}

		if (ctx.module_modifier()) {
			for (const modifier of ctx.module_modifier()) {
				if (modifier.addModule()?.objectModules()) {
					this.handleBehaviorChanges(modifier.addModule()!.objectModules());
				}
			}
		}
	}

	/**
	 * Processes behavior changes for a list of object modules.
	 * For each behavior module, calls the appropriate prehandler function.
	 * @param ctx - Array of object module contexts to process
	 */
	private handleBehaviorChanges(ctx: ObjectModulesContext[]): void {
		for (const module of ctx) {
			if (module.module_type()?.getText() === ObjectModuleTypeNames_t.BEHAVIOR) {
				if (module.module_name()?.getText() in prehandleBehaviorModules) {
					prehandleBehaviorModules[module.module_name()?.getText() as PrehandleBehaviorModules_t](module);
					console.log(`Prehandled behavior module ${module.module_name()?.getText()}`);
				}
			}
		}
	}

	/**
	 * Preloads the list of behavior modules from the class context.
	 * Processes both direct object modules and module modifiers to build
	 * the complete list of behavior modules.
	 * @param ctx - The complex class context containing module definitions
	 */
	private preloadBehaviorModuleList(ctx: ComplexClassContext): void {

		if (ctx.objectModules()) {
			this.handleBehaviorModuleList(ctx.objectModules());
		}

		if (ctx.module_modifier()) {
			for (const modifier of ctx.module_modifier()) {
				if (modifier.addModule()?.objectModules()) {
					this.handleBehaviorModuleList(modifier.addModule()!.objectModules());
				}
			}
		}
	}

	/**
	 * Processes a list of object modules to build the behavior module list.
	 * Adds unique behavior module names to the classBehaviorModules array.
	 * @param ctx - Array of object module contexts to process
	 */
	private handleBehaviorModuleList(ctx: ObjectModulesContext[]): void {
		for (const module of ctx) {
			if (module.module_type()?.getText() === ObjectModuleTypeNames_t.BEHAVIOR) {
				if (!this.classBehaviorModules.includes(module.module_name()?.getText() as BehaviorModule_t)) {
					this.classBehaviorModules.push(module.module_name()?.getText() as BehaviorModule_t);
					console.log(`Added behavior module ${module.module_name()?.getText()}`);
				}
			}
		}
	}

	/**
	 * Validates object properties from the class context.
	 * Checks for valid property names and values, adding diagnostics for any issues found.
	 * @param ctx - The complex class context containing properties to validate
	 */
	private handleObjectProperties(ctx: ComplexClassContext | SimpleClassContext): void {
		console.log('Handling object properties');
		if (ctx.property()) {
			for (const property of ctx.property()) {
				if (property.value()) {
					const valueText = property.value()!.getText();

					if (!this.checkEQ(property)) {
						return;
					}

					if (!getObjectPropertyTree().find(valueText)) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.start!.line, property.start!.column);
						const msg = `Object doesn't have property ${valueText}`;

						const data = {
							propertyName: valueText,
							propertyDefinition: objectProperties
						};

						this.addDiagnostic(severity, start, start, msg, 'missing_property', data);
					}

					this.validateProperty(valueText, property, getObjectPropertyDefinition(valueText)!);
				}
			}
		}
	}

	/**
	 * Processes and validates object set blocks in the class context.
	 * Routes each property block to its appropriate handler based on type.
	 * @param ctx - The complex class context containing property blocks
	 */
	private handleObjectSets(ctx: ComplexClassContext): void {
		if (ctx.propertyBlock()) {
			for (const propertyBlock of ctx.propertyBlock()) {

				if (propertyBlock.ID().length > 1) {
					console.log(`Multiple ID found: ${propertyBlock.getText()}`);
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.start!.line, propertyBlock.start!.column);
					const msg = `Multiple strings found: ${propertyBlock.ID().join(', ')}`;
					this.addDiagnostic(severity, start, start, msg, "multiple_id");
					continue;
				}

				const text = propertyBlock.ID()[0]?.getText();

				switch (text) {
					case ObjectSetTypes_t.WEAPONSET:
						this.handleWeaponSet(propertyBlock);
						break;
					case ObjectSetTypes_t.ARMORSET:
						this.handleArmorSet(propertyBlock);
						break;
					case ObjectSetTypes_t.PREREQUISITES:
						this.handlePrerequisites(propertyBlock);
						break;
					case ObjectSetTypes_t.UNITSPECIFICSOUNDS:
						this.handleUnitSpecificSounds(propertyBlock);
						break;
					case ObjectSetTypes_t.UNITSPECIFICFX:
						this.handleUnitSpecificFX(propertyBlock);
						break;
				}
			}
		}
	}

	/**
	 * Validates weapon set properties in the class context.
	 * Checks for valid property names and values within the WeaponSet block.
	 * @param ctx - The complex class context containing weapon set properties
	 */
	private handleWeaponSet(ctx: PropertyBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		for (const property of ctx.property()) {
			const text = property.value().ID()?.getText();

			if (!text) {
				console.log(`No property name found: ${property.getText()}`);
				return;
			}

			if (!this.checkEQ(property)) {
				return;
			}

			if (!WeaponSetPropertyMap.has(text)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.start!.line, property.start!.column);
				const msg = `WeaponSet doesn't have property ${text}`;
				this.addDiagnostic(severity, start, start, msg, "weapon_set");
			}

			this.validateProperty(text, property, WeaponSetPropertyMap.get(text)!);
		}
	}

	/**
	 * Validates armor set properties in the class context.
	 * Checks for valid property names and values within the ArmorSet block.
	 * @param ctx - The complex class context containing armor set properties
	 */
	private handleArmorSet(ctx: PropertyBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		for (const property of ctx.property()) {
			const text = property.value().ID()?.getText();

			if (!text) {
				console.log(`No property name found: ${property.getText()}`);
				return;
			}

			if (!this.checkEQ(property)) {
				continue;
			}

			if (!ArmorSetPropertyMap.has(text)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.start!.line, property.start!.column);
				const msg = `ArmorSet doesn't have property ${text}`;
				this.addDiagnostic(severity, start, start, msg, "armor_set");
			}

			this.validateProperty(text, property, ArmorSetPropertyMap.get(text)!);
		}
	}

	/**
	 * Validates prerequisite properties in the class context.
	 * Checks for valid property names and values within the Prerequisites block.
	 * @param ctx - The complex class context containing prerequisite properties
	 */
	private handlePrerequisites(ctx: PropertyBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		for (const property of ctx.property()) {
			const text = property.value().ID()?.getText();

			if (!text) {
				console.log(`No property name found: ${property.getText()}`);
				return;
			}

			if (!this.checkEQ(property)) {
				return;
			}

			if (!PrerequisitePropertyMap.has(text)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.start!.line, property.start!.column);
				const msg = `Prerequisite doesn't have property ${text}`;
				this.addDiagnostic(severity, start, start, msg, "prerequisite");
			}

			this.validateProperty(text, property, PrerequisitePropertyMap.get(text)!);
		}
	}

	/**
	 * Validates unit-specific sound properties in the class context.
	 * Checks for valid property names, values, and required conditions (KindOfs/Modules)
	 * within the UnitSpecificSounds block.
	 * @param ctx - The complex class context containing unit-specific sound properties
	 */
	private handleUnitSpecificSounds(ctx: PropertyBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		for (const property of ctx.property()) {
			const text = property.value().ID()?.getText();

			if (!text) {
				console.log(`No property name found: ${property.getText()}`);
				return;
			}

			if (!this.checkEQ(property)) {
				return;
			}

			if (ObjectSoundProperties.find(property => property.name === text)) {
				return;
			}

			if (!UnitSpecificSounds[text]) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.start!.line, property.start!.column);
				const msg = `UnitSpecificSounds doesn't have property ${text}`;
				this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
				return;
			}

			if (UnitSpecificSounds[text].requiredKindOfs) {
				const missingKindOfGroups = UnitSpecificSounds[text].requiredKindOfs.filter(kindOfGroup => {
					// Check if any kindOf in the group matches (OR condition)
					return !kindOfGroup.some(kindOf => this.classKindOfs.includes(kindOf));
				});

				if (missingKindOfGroups.length > 0) {
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(property.start!.line, property.start!.column);
					const missingKindOfsFormatted = missingKindOfGroups
						.map(group => `(${group.join(' OR ')})`)
						.join(' AND ');
					const msg = `Sound ${text} will never be played because it requires KindOf ${missingKindOfsFormatted}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
				}
			}

			if (UnitSpecificSounds[text].requiredModules) {
				const missingModuleGroups = UnitSpecificSounds[text].requiredModules.filter(moduleGroup => {
					// Check if any module in the group matches (OR condition)
					return !moduleGroup.some(module => this.classBehaviorModules.includes(module));
				});

				if (missingModuleGroups.length > 0) {
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(property.start!.line, property.start!.column);
					const missingModulesFormatted = missingModuleGroups
						.map(group => `(${group.join(' OR ')})`)
						.join(' AND ');
					const msg = `Sound ${text} will never be played because it requires Module ${missingModulesFormatted}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_sounds");
				}
			}

			this.validateProperty(text, property, UnitSpecificSounds[text].property);
		}
	}

	/**
	 * Validates unit-specific FX properties in the class context.
	 * Checks for valid property names and values within the UnitSpecificFX block.
	 * @param ctx - The complex class context containing unit-specific FX properties
	 */
	private handleUnitSpecificFX(ctx: PropertyBlockContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}
		
		for (const property of ctx.property()) {
			const text = property.value().ID()?.getText();
			
			if (!text) {
				console.log(`No property name found: ${property.getText()}`);
				return;
			}

			if (!this.checkEQ(property)) {
				return;
			}

			if (!UnitSpecificFXs[text]) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.start!.line, property.start!.column);
				const msg = `UnitSpecificFX doesn't have property ${text}`;
				this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
				return;
			}

			if (UnitSpecificFXs[text].requiredModules) {
				const missingModuleGroups = UnitSpecificFXs[text].requiredModules.filter(moduleGroup => {
					return !moduleGroup.some(module => this.classBehaviorModules.includes(module));
				});

				if (missingModuleGroups.length > 0) {
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(property.start!.line, property.start!.column);
					const missingModulesFormatted = missingModuleGroups
						.map(group => `(${group.join(' OR ')})`)
						.join(' AND ');
					const msg = `FX ${text} will never be played because it requires Module ${missingModulesFormatted}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
				}
			}

			if (UnitSpecificFXs[text].requiredKindOfs) {
				const missingKindOfGroups = UnitSpecificFXs[text].requiredKindOfs.filter(kindOfGroup => {
					return !kindOfGroup.some(kindOf => this.classKindOfs.includes(kindOf));
				});

				if (missingKindOfGroups.length > 0) {
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(property.start!.line, property.start!.column);
					const missingKindOfsFormatted = missingKindOfGroups
						.map(group => `(${group.join(' OR ')})`)
						.join(' AND ');
					const msg = `FX ${text} will never be played because it requires KindOf ${missingKindOfsFormatted}`;
					this.addDiagnostic(severity, start, start, msg, "unit_specific_fx");
				}
			}

			this.validateProperty(text, property, UnitSpecificFXs[text].property);
		}
	}

	private handleDrawModuleConditionState(ctx: ConditionBlockContext): void {
		for (const conditionStateValue of ctx.property_values().value()) {
			const conditionStateValueText = conditionStateValue.getText().toUpperCase();

			if (additionalConditionStates[conditionStateValueText]) {
				const additionalConditionState = additionalConditionStates[conditionStateValueText];

				if (additionalConditionState.requiredKindOfs && !additionalConditionState.requiredKindOfs.some(kindOf => this.classKindOfs.includes(kindOf))) {
					const severity = DiagnosticSeverity.Hint;
					const start = new Location(conditionStateValue.start!.line, conditionStateValue.start!.column);
					const msg = additionalConditionState.errorDescription;
					this.addDiagnostic(severity, start, start, msg, 'missing_kind_of');
				}
			} else if (!conditionStates.includes(conditionStateValueText) && !customConditionStates.includes(conditionStateValueText) && !transitionKeys.includes(conditionStateValueText)) {
				const severity = DiagnosticSeverity.Warning;
				const start = new Location(conditionStateValue.start!.line, conditionStateValue.start!.column);
				const msg = `ConditionState doesn't have value ${conditionStateValueText}`;
				this.addDiagnostic(severity, start, start, msg, 'missing_condition_state');
			}
		}

		for (const property of ctx.property()) {
			const propertyName = property.value().ID()!.getText();

			if (!getConditionStatePropertyTree().find(propertyName)) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
				const msg = `ConditionState doesn't have property ${propertyName}`;
				this.addDiagnostic(severity, start, start, msg);
			}

			this.validateProperty(propertyName, property, getConditionStatePropertyDefinition(propertyName)!);
		}
	}

	private handleDrawModule(ctx: ObjectModulesContext): void {
		if (ctx.salvage_value()) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.salvage_value()!.start!.line, ctx.salvage_value()!.start!.column);
			const msg = `Salvage value is not allowed in DrawModule`;
			this.addDiagnostic(severity, start, start, msg, "draw_module");
		}

		if (!this.checkEnd(ctx)) {
			return;
		}

		this.compileTransitionKeys(ctx);

		const drawModule = ctx.module_name()!.ID()!.getText() as DrawModule_t;
		const tree = getDrawModulePropertyTree(drawModule);

		if (!tree) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
			const msg = `Not a valid DrawModule`;
			this.addDiagnostic(severity, start, start, msg);
			return;
		}

		if (ctx.conditionBlock()) {
			for (const conditionBlock of ctx.conditionBlock()) {
				this.handleDrawModuleConditionState(conditionBlock);
			}
		}

		if (ctx.property()) {
			for (const [propertyIndex, property] of ctx.property().entries()) {
				const propertyName = property.value().ID()!.getText();

				if (!tree.find(propertyName)) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
					const msg = `DrawModule ${drawModule} doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "draw_module");
					continue;
				}

				if (propertyName === 'AliasConditionState' || propertyName === 'IgnoreConditionStates') {
					for (const conditionStateValue of property.property_values().value()) {
						const conditionStateValueText = conditionStateValue.getText().toUpperCase();
						if (additionalConditionStates[conditionStateValueText]) {
							const additionalConditionState = additionalConditionStates[conditionStateValueText];
							if (additionalConditionState.requiredKindOfs && !additionalConditionState.requiredKindOfs.some(kindOf => this.classKindOfs.includes(kindOf))) {
								const severity = DiagnosticSeverity.Hint;
								const start = new Location(conditionStateValue.start!.line, conditionStateValue.start!.column);
								const msg = additionalConditionState.errorDescription;
								this.addDiagnostic(severity, start, start, msg, 'missing_kind_of');
							}
						} else if (!conditionStates.includes(conditionStateValueText) && !customConditionStates.includes(conditionStateValueText) && !transitionKeys.includes(conditionStateValueText)) {
							const severity = DiagnosticSeverity.Warning;
							const start = new Location(conditionStateValue.start!.line, conditionStateValue.start!.column);
							const msg = `ConditionState doesn't have value ${conditionStateValueText}`;
							this.addDiagnostic(severity, start, start, msg, 'missing_condition_state');
						}
					}
				} else {
					this.validateProperty(propertyName, property, getDrawModulePropertyDefinition(drawModule, propertyName)!);
				}
			}
		}

		if (ctx.propertyBlock()) {
			for (const propertyBlock of ctx.propertyBlock()) {
				this.handleDrawModulePropertyBlock(propertyBlock);
			}
		}
	}

	private handleDrawModulePropertyBlock(ctx: PropertyBlockContext): void {
		if (ctx.ID().length > 1) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.ID()[0]!.symbol.line, ctx.ID()[0]!.symbol.column);
			const msg = `Multiple strings found: ${ctx.ID().join(', ')}`;
			this.addDiagnostic(severity, start, start, msg, "multiple_id");
			return;
		}

		const propertyBlockType = ctx.ID()[0]!.getText();

		switch (propertyBlockType) {
			case DrawModulePropertyBlockTypes_t.DEFAULTCONDITIONSTATE: {
				for (const property of ctx.property()) {
					const propertyName = property.value().ID()!.getText();
					if (!getConditionStatePropertyTree().find(propertyName)) {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
						const msg = `ConditionState doesn't have property ${propertyName}`;
						this.addDiagnostic(severity, start, start, msg);
					}

					this.validateProperty(propertyName, property, getConditionStatePropertyDefinition(propertyName)!);
				}
				break;
			}
			default: {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.ID()[0]!.symbol.line, ctx.ID()[0]!.symbol.column);
				const msg = `Not a valid DrawModule property block`;
				this.addDiagnostic(severity, start, start, msg, "draw_module");
				break;
			}
		}
	}

	private compileTransitionKeys(ctx: ObjectModulesContext): void {
		clearTransitionKeys();

		for (const conditionBlock of ctx.conditionBlock()) {
			for (const property of conditionBlock.property()) {
				const propertyName = property.value().ID()!.getText();

				if (propertyName?.startsWith("TransitionKey")) {
					console.log(`TransitionKey: ${propertyName}`);
					for (const transitionKey of property.property_values().value()) {
						console.log(`Adding TransitionKey: ${transitionKey.getText().toUpperCase()}`);
						if (!transitionKeys.includes(transitionKey.getText().toUpperCase())) {
							transitionKeys.push(transitionKey.getText().toUpperCase());
						}
					}
				}
			}
		}

		for (const propertyBlock of ctx.propertyBlock()) {
			for (const property of propertyBlock.property()) {
				const propertyName = property.value().ID()!.getText();
				if (propertyName?.startsWith("TransitionKey")) {
					for (const transitionKey of property.property_values().value()) {
						console.log(`Adding TransitionKey: ${transitionKey.getText().toUpperCase()}`);
						if (!transitionKeys.includes(transitionKey.getText().toUpperCase())) {
							transitionKeys.push(transitionKey.getText().toUpperCase());
						}
					}
				}
			}
		}
	}

	private handleBodyModule(ctx: ObjectModulesContext): void {
		if (ctx.salvage_value()) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.salvage_value()!.start!.line, ctx.salvage_value()!.start!.column);
			const msg = `Salvage value is not allowed in BodyModule`;
			this.addDiagnostic(severity, start, start, msg, "body_module");
		}

		if (!this.checkEnd(ctx)) {
			return;
		}

		const bodyModule = ctx.module_name()!.ID()!.getText() as BodyModule_t;
		const tree = getBodyModulePropertyTree(bodyModule);

		if (!tree) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
			const msg = `Not a valid BodyModule`;
			this.addDiagnostic(severity, start, start, msg);
			return;
		}

		if (ctx.property()) {
			for (const property of ctx.property()) {
				this.validateProperty(property.value().ID()!.getText(), property, getBodyModulePropertyDefinition(bodyModule, property.value().ID()!.getText())!);

				if (!tree.find(property.value().ID()!.getText())) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
					const msg = `BodyModule ${bodyModule} doesn't have property ${property.value().ID()!.getText()}`;
					this.addDiagnostic(severity, start, start, msg, "body_module");
				}

				this.validateProperty(property.value().ID()!.getText(), property, getBodyModulePropertyDefinition(bodyModule, property.value().ID()!.getText())!);
			}
		}
	}

	private handleBehaviorModule(ctx: ObjectModulesContext): void {
		if (!this.checkEnd(ctx)) {
			return;
		}

		const behaviorModule = ctx.module_name()!.ID()!.getText() as BehaviorModule_t;
		const tree = getBehaviorModulePropertyTree(behaviorModule);

		if (!tree) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
			const msg = `Not a valid BehaviorModule`;
			this.addDiagnostic(severity, start, start, msg);
			return;
		}

		if (ctx.module_name()!.ID()!.getText() !== 'CreateCrateDie') {
			if (ctx.salvage_value()) {
				const severity = DiagnosticSeverity.Error;
				const start = new Location(ctx.salvage_value()!.start!.line, ctx.salvage_value()!.start!.column);
				const msg = `Salvage value is not allowed in BehaviorModule`;
				this.addDiagnostic(severity, start, start, msg, "behavior_module");
			}
		}

		if (ctx.propertyBlock()) {
			for (const propertyBlock of ctx.propertyBlock()) {
				if (propertyBlock.ID().length > 1) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
					const msg = `Multiple strings found: ${propertyBlock.ID().join(', ')}`;
					this.addDiagnostic(severity, start, start, msg, "multiple_id");
					continue;
				}

				if (BehaviorModuleAI_t.includes(behaviorModule)) {
					if (propertyBlock.ID()[0]!.getText() !== 'Turret' && propertyBlock.ID()[0]!.getText() !== 'AltTurret') {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
						const msg = `Only allowed blocks are Turret and AltTurret`;
						this.addDiagnostic(severity, start, start, msg, "behavior_module");
						break;
					}

					this.checkEnd(propertyBlock);

					for (const property of propertyBlock.property()) {
						this.handleTurretProperty(property);
					}
				} else if (BehaviorModuleDecals_t.includes(behaviorModule)) {
					if (propertyBlock.ID()[0]!.getText() !== 'AttackAreaDecal' && propertyBlock.ID()[0]!.getText() !== 'TargetingReticleDecal') {
						const severity = DiagnosticSeverity.Error;
						const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
						const msg = `Only allowed blocks are AttackAreaDecal and TargetingReticleDecal`;
						this.addDiagnostic(severity, start, start, msg, "behavior_module");
						break;
					}

					this.checkEnd(propertyBlock);

					for (const property of propertyBlock.property()) {
						this.handleDecalProperty(property);
					}
				} else {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(propertyBlock.ID()[0]!.symbol.line, propertyBlock.ID()[0]!.symbol.column);
					const msg = `BehaviorModule ${behaviorModule} doesn't have Turret or AltTurret block`;
					this.addDiagnostic(severity, start, start, msg, "behavior_module");
				}
			}
		}

		if (ctx.property()) {
			for (const property of ctx.property()) {
				const propertyName = property.value().ID()!.getText();

				if (!tree.find(propertyName)) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
					const msg = `BehaviorModule ${behaviorModule} doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "behavior_module");
					continue;
				}

				this.validateProperty(propertyName, property, getBehaviorModulePropertyDefinition(behaviorModule, propertyName)!);
			}
		}
	}

	private handleTurretProperty(property: PropertyContext): void {
		const propertyName = property.value().ID()!.getText();

		if (!baseTurretProperties[propertyName]) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
			const msg = `Turret doesn't have property ${propertyName}`;
			this.addDiagnostic(severity, start, start, msg, "behavior_module");
		}

		this.validateProperty(propertyName, property, baseTurretProperties[propertyName]);
	}

	private handleDecalProperty(property: PropertyContext): void {
		const propertyName = property.value().ID()!.getText();

		if (!baseDecalProperties[propertyName]) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
			const msg = `Decal doesn't have property ${propertyName}`;
			this.addDiagnostic(severity, start, start, msg, "behavior_module");
		}

		this.validateProperty(propertyName, property, baseDecalProperties[propertyName]);
	}

	private handleClientModule(ctx: ObjectModulesContext): void {
		if (ctx.salvage_value()) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.salvage_value()!.start!.line, ctx.salvage_value()!.start!.column);
			const msg = `Salvage value is not allowed in ClientModule`;
			this.addDiagnostic(severity, start, start, msg, "client_module");
		}

		if (!this.checkEnd(ctx)) {
			return;
		}

		const clientModule = ctx.module_name()!.ID()!.getText() as ClientModule_t;
		const tree = getClientModulePropertyTree(clientModule);

		if (!tree) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.ID()!.symbol.line, ctx.module_name()!.ID()!.symbol.column);
			const msg = `Not a valid ClientModule`;
			this.addDiagnostic(severity, start, start, msg);
			return;
		}

		if (ctx.property()) {
			for (const property of ctx.property()) {
				const propertyName = property.value().ID()!.getText();

				if (!tree.find(propertyName)) {
					const severity = DiagnosticSeverity.Error;
					const start = new Location(property.value().ID()!.symbol.line, property.value().ID()!.symbol.column);
					const msg = `ClientModule ${clientModule} doesn't have property ${propertyName}`;
					this.addDiagnostic(severity, start, start, msg, "client_module");
				}

				this.validateProperty(propertyName, property, getClientModulePropertyDefinition(clientModule, propertyName)!);
			}
		}
	}

	private handleLocomotorModule(ctx: ObjectModulesContext): void {
		if (!this.checkEQ(ctx)) {
			return;
		}

		if (ctx.module_name() && !Object.values(Locomotor_types_t).includes(ctx.module_name()!.getText() as Locomotor_types_t)) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.start!.line, ctx.module_name()!.start!.column);
			const msg = `Not a valid LocomotorType`;
			this.addDiagnostic(severity, start, start, msg);
		}

		if (ctx.moduleTag_value() && !originalLocomotorClassList.includes(ctx.moduleTag_value()!.getText()) && !customLocomotorClassList.includes(ctx.moduleTag_value()!.getText())) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.moduleTag_value()!.start!.line, ctx.moduleTag_value()!.start!.column);
			const msg = `Not a valid LocomotorClass`;
			this.addDiagnostic(severity, start, start, msg);
		}
	}

	private handleKindOfModule(ctx: ObjectModulesContext): void {
		if (!this.checkEQ(ctx)) {
			return;
		}

		if (ctx.module_name() && !Object.values(kindOfs_t).includes(ctx.module_name()!.getText() as kindOfs_t)) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.module_name()!.start!.line, ctx.module_name()!.start!.column);
			const msg = `Not a valid KindOf`;
			this.addDiagnostic(severity, start, start, msg);
		}

		if (ctx.moduleTag_value() && !Object.values(kindOfs_t).includes(ctx.moduleTag_value()!.getText() as kindOfs_t)) {
			const severity = DiagnosticSeverity.Error;
			const start = new Location(ctx.moduleTag_value()!.start!.line, ctx.moduleTag_value()!.start!.column);
			const msg = `Not a valid KindOf`;
			this.addDiagnostic(severity, start, start, msg);
		}
	}
}