import { AbstractParseTreeVisitor } from "antlr4ng";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { Animation2DClassContext, ArmorClassContext, ClassesContext, CommandButtonClassContext, CommandSetClassContext, DamageFXClassContext, FxListClassContext, LocomotorClassContext, MappedImageClassContext, ObjectClassContext, ObjectCreationListClassContext, ObjectReskinClassContext, ParticleSystemClassContext, PlayerTemplateClassContext, ProgramContext, RankClassContext, ScienceClassContext, SoundEffectClassesContext, SpecialPowerClassContext, UpgradeClassContext, WeaponClassContext, WeatherClassContext } from "../utils/antlr4ng/MapIniParser";
import * as list from '../utils/lists'

export class ClassVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {


  visitProgram(ctx: ProgramContext): void {
    this.visitChildren(ctx)
  }


  visitClasses(ctx: ClassesContext): void {
    const child = ctx.getChild(0)

    if (child instanceof MappedImageClassContext && child.mappedimage_value()) {
      list.customMappedImages.remove(child.mappedimage_value()!.getText())
      list.customMappedImages.insert(child.mappedimage_value()!.getText())
    } else if (child instanceof Animation2DClassContext && child.animation2d_value()) {
      //TODO: Add Animation2D List
    } else if (child instanceof ArmorClassContext && child.armor_value()) {
      list.definedArmor.remove(child.armor_value()!.getText())
      list.definedArmor.insert(child.armor_value()!.getText())
    } else if (child instanceof CommandButtonClassContext && child.commandbutton_value()) {
      list.customCommandButtons.remove(child.commandbutton_value()!.getText())
      list.customCommandButtons.insert(child.commandbutton_value()!.getText())
    } else if (child instanceof CommandSetClassContext && child.commandSet_value()) {
      list.customCommandSets.remove(child.commandSet_value()!.getText())
      list.customCommandSets.insert(child.commandSet_value()!.getText())
    } else if (child instanceof DamageFXClassContext && child.damageFX_value()) {
      list.customDamageFX.remove(child.damageFX_value()!.getText())
      list.customDamageFX.insert(child.damageFX_value()!.getText())
    } else if (child instanceof FxListClassContext && child.fxlist_value()) {
      list.customFXLists.remove(child.fxlist_value()!.getText())
      list.customFXLists.insert(child.fxlist_value()!.getText())
    } else if (child instanceof LocomotorClassContext && child.locomotor_value()) {
      list.customLocomotor.remove(child.locomotor_value()!.getText())
      list.customLocomotor.insert(child.locomotor_value()!.getText())
    } else if (child instanceof ObjectClassContext && child.object_value()) {
      list.customObjects.remove(child.object_value()!.getText())
      list.customObjects.insert(child.object_value()!.getText())
    } else if (child instanceof ObjectReskinClassContext) {
      // console.log(`"${child.object_value()[0]!.getText()}",`)
      list.customObjects.remove(child.object_value()[0]!.getText())
      list.customObjects.insert(child.object_value()[0]!.getText())
    } else if (child instanceof ObjectCreationListClassContext && child.ocl_value()) {
      list.customOCLs.remove(child.ocl_value()!.getText())
      list.customOCLs.insert(child.ocl_value()!.getText())
    } else if (child instanceof ParticleSystemClassContext && child.particlesystem_value()) {
      list.customParticleSystem.remove(child.particlesystem_value()!.getText())
      list.customParticleSystem.insert(child.particlesystem_value()!.getText())
    } else if (child instanceof PlayerTemplateClassContext) {
      //TODO: Add PlayerTemplate List
    } else if (child instanceof RankClassContext) {
      //TODO: Add Rank List
    } else if (child instanceof ScienceClassContext && child.science_value()) {
      list.customScience.remove(child.science_value()!.getText())
      list.customScience.insert(child.science_value()!.getText())
    } else if (child instanceof SoundEffectClassesContext) {
      //TODO: Add SoundEffect Classes List
    } else if (child instanceof SpecialPowerClassContext && child.specialpower_value()) {
      list.customSpecialPower.remove(child.specialpower_value()!.getText())
      list.customSpecialPower.insert(child.specialpower_value()!.getText())
    } else if (child instanceof UpgradeClassContext && child.upgrade_value()) {
      list.customUpgrades.remove(child.upgrade_value()!.getText())
      list.customUpgrades.insert(child.upgrade_value()!.getText())
    } else if (child instanceof WeaponClassContext && child.weapon_value()) {
      list.customWeapons.remove(child.weapon_value()!.getText())
      list.customWeapons.insert(child.weapon_value()!.getText())
    } else if (child instanceof WeatherClassContext) {
      //TODO: Add Weather List
    }
  }


}
