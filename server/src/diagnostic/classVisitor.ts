import { AbstractParseTreeVisitor } from "antlr4ng";
import { ClassContext, ProgramContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { customAnimationClassList, customArmorClassList, customAudioEventClassList, customCommandButtonClassList, customCommandSetClassList, customDialogEventClassList, customFXClassList, customLocomotorClassList, customMappedImageClassList, customObjectClassList, customParticleSystemClassList, customScienceClassList, customSpecialPowerClassList, customUpgradeClassList, customWeaponClassList, originalAnimationClassList, originalArmorClassList, originalAudioEventClassList, originalCommandButtonClassList, originalCommandSetClassList, originalDialogEventList, originalFXClassList, originalLocomotorClassList, originalMappedImageClassList, originalObjectClassList, originalParticleSystemClassList, originalScienceClassList, originalSpecialPowerClassList, originalUpgradeClassList, originalWeaponClassList } from './data/ClassLists';
import { IniTypes_t } from './types/IniType_t';

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
			if (!originalObjectClassList.includes(className) || !customObjectClassList.includes(className)) {
				customObjectClassList.push(className);
			}
		} else if (ctx.simpleClass()) {
			const classType = ctx.simpleClass()!.class_identifier()!.getText();
			const className = ctx.simpleClass()!.class_value()!.getText();

			switch (classType as IniTypes_t) {
				case IniTypes_t.ANIMATION:
					if (!originalAnimationClassList.includes(className) || !customAnimationClassList.includes(className)) {
						customAnimationClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.ARMOR:
					if (!originalArmorClassList.includes(className) || !customArmorClassList.includes(className)) {
						customArmorClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.AUDIO_EVENT:
					if (!originalAudioEventClassList.includes(className) || !customAudioEventClassList.includes(className)) {
						customAudioEventClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}

					break;
				case IniTypes_t.COMMAND_BUTTON:
					if (!originalCommandButtonClassList.includes(className) || !customCommandButtonClassList.includes(className)) {
						customCommandButtonClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.COMMAND_SET:
					if (!originalCommandSetClassList.includes(className) || !customCommandSetClassList.includes(className)) {
						customCommandSetClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.DIALOG_EVENT:
					if (!originalDialogEventList.includes(className) || !customDialogEventClassList.includes(className)) {
						customDialogEventClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.FXLIST:
					if (!originalFXClassList.includes(className) || !customFXClassList.includes(className)) {
						customFXClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.LOCOMOTOR:
					if (!originalLocomotorClassList.includes(className) || !customLocomotorClassList.includes(className)) {
						customLocomotorClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.MAPPED_IMAGE:
					if (!originalMappedImageClassList.includes(className) || !customMappedImageClassList.includes(className)) {
						customMappedImageClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.PARTICLE_SYSTEM:
					if (!originalParticleSystemClassList.includes(className) || !customParticleSystemClassList.includes(className)) {
						customParticleSystemClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.SCIENCE:
					if (!originalScienceClassList.includes(className) || !customScienceClassList.includes(className)) {
						customScienceClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.SPECIAL_POWER:
					if (!originalSpecialPowerClassList.includes(className) || !customSpecialPowerClassList.includes(className)) {
						customSpecialPowerClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.UPGRADE:
					if (!originalUpgradeClassList.includes(className) || !customUpgradeClassList.includes(className)) {
						customUpgradeClassList.push(className);
						console.log(`Added ${className} to ${classType}`);
					}
					break;
				case IniTypes_t.WEAPON:
					if (!originalWeaponClassList.includes(className) || !customWeaponClassList.includes(className)) {
						customWeaponClassList.push(className);
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
