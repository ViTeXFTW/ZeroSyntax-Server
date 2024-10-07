import { ParseTreeVisitor } from "antlr4ng/dist/tree/ParseTreeVisitor"
import { AbstractParseTreeVisitor } from "antlr4ng/dist/tree/AbstractParseTreeVisitor"
import { Animation2DClassContext, ArmorClassContext, ClassesContext, CommandButtonClassContext, MappedImageClassContext, ParticleSystemClassContext, ProgramContext } from "../utils/antlr4ng/MapIniParser";
import * as list from '../utils/lists'

export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements ParseTreeVisitor<void> {
  
  
  visitProgram(ctx: ProgramContext): void {
    this.visitChildren(ctx)
  }


  visitClasses(ctx: ClassesContext): void {
    const child = ctx.getChild(0)

    if (child instanceof MappedImageClassContext) {
      list.customMappedImages.remove(child.ID().getText().toUpperCase())
      list.customMappedImages.insert(child.ID().getText().toUpperCase())
    } else if (child instanceof Animation2DClassContext) {
      //TODO: Add Animation2D List
    } else if (child instanceof ArmorClassContext) {
      //TODO: Add Armor List
    } else if (child instanceof CommandButtonClassContext) {
      list.customCommandButtons.remove(child.ID().getText().toUpperCase())
      list.customCommandButtons.insert(child.ID().getText().toUpperCase())
    } else if (child instanceof ParticleSystemClassContext) {
      console.log(`"${child.ID().getText()}",`)
    }
  }

}
