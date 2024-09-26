import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { MapIniVisitor } from "./antlr/MapIniVisitor";
import { Animation2DClassContext, ArmorClassContext, ClassesContext, CommandButtonClassContext, MappedImageClassContext, ProgramContext } from "./antlr/MapIniParser";
import * as list from './lists'

export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
  protected defaultResult(): void {
  }

  visitProgram(ctx: ProgramContext): void {
    this.visitChildren(ctx)
  }


  visitClasses(ctx: ClassesContext): void {
    const child = ctx.getChild(0)

    if (child instanceof MappedImageClassContext) {
      list.customMappedImages.remove(child.ID().text.toUpperCase())
      list.customMappedImages.insert(child.ID().text.toUpperCase())
    } else if (child instanceof Animation2DClassContext) {
      //TODO: Add Animation2D List
    } else if (child instanceof ArmorClassContext) {
      //TODO: Add Armor List
    } else if (child instanceof CommandButtonClassContext) {
      list.customCommandButtons.remove(child.ID().text.toUpperCase())
      list.customCommandButtons.insert(child.ID().text.toUpperCase())
    }
  }

}
