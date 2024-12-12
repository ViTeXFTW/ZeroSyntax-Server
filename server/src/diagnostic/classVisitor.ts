import { AbstractParseTreeVisitor } from "antlr4ng";
import { ClassContext, ProgramContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { IniTypes_t } from './types/IniType_t';
import { animation, armor, audioEvent, commandButtons, commandSets, customAnimation, customArmor, customAudioEvent, customCommandButtons, customCommandSets, customDialogEvent, customFXLists, customLocomotor, customMappedImages, customScience, dialogEvent, fxLists, locomotor, objects, particleSystem, science, mappedImages, customParticleSystem, customUpgrade, upgrade, customSpecialPower, specialPower, weapon, customWeapon, customObjects } from '../utils/lists';

export class ClassVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {

	defaultResult(): void {
		return;
	}

	visitProgram(ctx: ProgramContext): void {
		this.visitChildren(ctx);
	}

	visitClass(ctx: ClassContext): void {
		
		if (ctx.complexClass()) {
			const className = ctx.complexClass()!.class_identifier()!.getText();
			if (!objects.includes(className) || !customObjects.includes(className)) {
				customObjects.push(className);
			}
		} else if (ctx.simpleClass()) {
			const classType = ctx.simpleClass()!.class_identifier()!.getText();
			const className = ctx.simpleClass()!.class_value()!.getText();

			switch (classType as IniTypes_t) {
				case IniTypes_t.ANIMATION:
					if (!animation.includes(className) || !customAnimation.includes(className)) {
						customAnimation.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.ARMOR:
					if (!armor.includes(className) || !customArmor.includes(className)) {
						customArmor.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.AUDIO_EVENT:
					if (!audioEvent.includes(className) || !customAudioEvent.includes(className)) {
						customAudioEvent.push(className);
						console.log(`Added ${className} to ${classType}`);
					}

					break;
				case IniTypes_t.COMMAND_BUTTON:
					if (!commandButtons.includes(className) || !customCommandButtons.includes(className)) {
						customCommandButtons.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.COMMAND_SET:
					if (!commandSets.includes(className) || !customCommandSets.includes(className)) {
						customCommandSets.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.DIALOG_EVENT:
					if (!dialogEvent.includes(className) || !customDialogEvent.includes(className)) {
						customDialogEvent.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.FXLIST:
					if (!fxLists.includes(className) || !customFXLists.includes(className)) {
						customFXLists.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.LOCOMOTOR:
					if (!locomotor.includes(className) || !customLocomotor.includes(className)) {
						customLocomotor.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.MAPPED_IMAGE:
					if (!mappedImages.includes(className) || !customMappedImages.includes(className)) {
						customMappedImages.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.PARTICLE_SYSTEM:
					if (!particleSystem.includes(className) || !customParticleSystem.includes(className)) {
						customParticleSystem.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.SCIENCE:
					if (!science.includes(className) || !customScience.includes(className)) {
						customScience.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.SPECIAL_POWER:
					if (!specialPower.includes(className) || !customSpecialPower.includes(className)) {
						customSpecialPower.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.UPGRADE:
					if (!upgrade.includes(className) || !customUpgrade.includes(className)) {
						customUpgrade.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.WEAPON:
					if (!weapon.includes(className) || !customWeapon.includes(className)) {
						customWeapon.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				default:
					break;
			}
		}

		this.visitChildren(ctx);
	}

}
