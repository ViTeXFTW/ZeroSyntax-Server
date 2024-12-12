
import { AbstractParseTreeVisitor, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode-languageserver";
import { TextDocument } from 'vscode-languageserver-textdocument';
import { ClassContext, ComplexClassContext, MapIniParser, Module_modifierContext, ObjectModulesContext, ProgramContext, SimpleClassContext } from "../utils/antlr4ng/MapIniParser";
import { MapIniVisitor } from "../utils/antlr4ng/MapIniVisitor";
import { Location } from "../utils/location";
import { ClassVisitor } from './classVisitor';
import { clearAllCustomClassLists } from './data/ClassLists';
import { HandlerFactory } from './handlers/HandlerFactory';
import { ILanguageServerSettings } from './handlers/interfaces/ILanguageServerSettings';
import { IModuleHandler } from './handlers/interfaces/IModuleHandler';
import { BehaviorModule_t } from './types/complex/object/behaviorModule/BehaviorModule_t';
import { ForceAddModule_t } from './types/complex/object/ForceAddModule_t';
import { IniTypes_t } from './types/IniType_t';
import { kindOfs_t } from './types/PropertyTypes';

export class DiagnosticVisitor extends AbstractParseTreeVisitor<void> implements MapIniVisitor<void> {
    protected defaultResult(): void {
    }

    document: TextDocument;
    handler: IModuleHandler<ComplexClassContext | SimpleClassContext> | undefined;

    diagnostics: Diagnostic[];
    languageServerSettings: ILanguageServerSettings;
    forceAddModule_determined: boolean;

    // Module tags
    classModuleTags: string[];
    classBehaviorModules: BehaviorModule_t[];
    classKindOfs: kindOfs_t[];
    classUnitSpecificSounds: string[];

    constructor(document: TextDocument, diagnostics: Diagnostic[], forceAddModule: ForceAddModule_t = ForceAddModule_t.No, precompileTransitionKeys: boolean = false) {
        super();
        this.document = document;
        this.diagnostics = diagnostics;
        this.forceAddModule_determined = false;
        this.languageServerSettings = {
            forceAddModule: forceAddModule,
            precompileTransitionKeys: precompileTransitionKeys
        };

        this.classModuleTags = [];
        this.classBehaviorModules = [];
        this.classKindOfs = [];
        this.classUnitSpecificSounds = [];
    }

    visitProgram(ctx: ProgramContext): void {
        clearAllCustomClassLists();
        this.visitChildren(ctx);
    }

    visitClass(ctx: ClassContext): void {
        this.determineForceAddModule(ctx);
        this.visitChildren(ctx);
    }

    // =====================================
    // ============ SIMPLE CLASS ===========
    // =====================================

    visitSimpleClass(ctx: SimpleClassContext): void {
        this.visitChildren(ctx);

        if (!this.checkEnd(ctx)) {
            return;
        }

        const classType = ctx.class_identifier()?.getText() as IniTypes_t;
        console.log(`Current ${classType}`);

        try {
            this.handler = HandlerFactory.createHandler(classType, this, this.languageServerSettings) as IModuleHandler<SimpleClassContext>;
            const propertyDiagnostics = this.handler.handleClass(ctx);
            this.diagnostics.push(...propertyDiagnostics);
        } catch (error) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.class_identifier()!.start!.line, ctx.class_identifier()!.start!.column);
            const msg = `Great... you broke something - Please report this to the devs :)`;
            this.addDiagnostic(severity, start, start, msg);
        }
    }

    // =====================================
    // =========== OBJECT CLASS ============
    // =====================================

    visitComplexClass(ctx: ComplexClassContext): void {

        if (!this.checkEnd(ctx)) {
            return;
        }

        const classType = ctx.class_identifier()?.getText() as IniTypes_t;

        console.log(`Current ${classType}`);

        try {
            this.handler = HandlerFactory.createHandler(classType, this, this.languageServerSettings) as IModuleHandler<ComplexClassContext>;
            console.log(`got handler`);
            const propertyDiagnostics = this.handler.handleClass(ctx);
            console.log(`got diagnostics`);
            this.diagnostics.push(...propertyDiagnostics);
            console.log(`pushed diagnostics`);
        } catch (error) {
            const severity = DiagnosticSeverity.Error;
            const start = new Location(ctx.class_identifier()!.start!.line, ctx.class_identifier()!.start!.column);
            const msg = `Great... you broke something - Please report this to the devs :)`;
            this.addDiagnostic(severity, start, start, msg);
        }

        this.visitChildren(ctx);
    }
    
    private determineForceAddModule(ctx: ParserRuleContext): void {
        // Determine if the forceAddModule should be Yes or No
        if (this.languageServerSettings.forceAddModule === ForceAddModule_t.Auto && !this.forceAddModule_determined) {
            console.log("Determining ForceAddModule");
            for (const child of ctx.children || []) {
                if (child instanceof ComplexClassContext) {
                    // Look for AddModule or direct module declarations
                    for (const moduleChild of child.children || []) {
                        if (moduleChild instanceof Module_modifierContext) {
                            console.log("Found AddModule - setting to Yes");
                            this.languageServerSettings.forceAddModule = ForceAddModule_t.Yes;
                            this.forceAddModule_determined = true;
                            break;
                        } else if (
                            moduleChild instanceof ObjectModulesContext
                        ) {
                            console.log("Found direct Module - setting to No");
                            this.languageServerSettings.forceAddModule = ForceAddModule_t.No;
                            this.forceAddModule_determined = true;
                            break;
                        }
                    }

                    if (this.forceAddModule_determined) {
                        console.log(`ForceAddModule set to: ${this.languageServerSettings.forceAddModule}`);
                        break;
                    }
                }
            }

            // If we haven't determined the mode yet, default to No
            if (!this.forceAddModule_determined) {
                console.log("No modules found - defaulting to No");
                this.languageServerSettings.forceAddModule = ForceAddModule_t.No;
                this.forceAddModule_determined = true;
            }
        }
    }

    private checkEnd(ctx: ParserRuleContext): boolean {
        if (ctx.children) {
            const lastChild = ctx.children[ctx.children.length - 1];
            if (lastChild.getText().toUpperCase() !== 'END') {
                const severity = DiagnosticSeverity.Error;
                const start = new Location(ctx.start!.line, ctx.start!.column);
                const msg = `${ctx.getChild(ctx.children.length - 1)!.getText()} must be closed with 'End'`;
                this.addDiagnostic(severity, start, start, msg);
                return false;
            }
        }
        return true;
    }

    private addDiagnostic(
        severity: DiagnosticSeverity,
        start: Location,
        end: Location,
        msg: string,
        srcAppend: string = '',
        data?: any
    ): Diagnostic {
        const diagnostic: Diagnostic = {
            severity,
            range: {
                start: start.toPosition(),
                end: end.toPosition()
            },
            message: msg,
            source: `ZeroSyntax-Server_${srcAppend}`,
            data: data
        };
        this.diagnostics.push(diagnostic);
        return diagnostic;
    }

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    public resetDiagnostics(): void {
        this.diagnostics = [];
    }
}

export function computeDiagnostics(document: TextDocument, parser: MapIniParser, forceAddModule: ForceAddModule_t, precompileTransitionKeys: boolean): Diagnostic[] {

    const diagnostics: Diagnostic[] = [];

    parser.removeErrorListeners();
    // parser.addErrorListener(new ErrorListener(diagnostics))

    const tree = parser.program();
    // console.log(`Tree: ${tree.getText()}`)

    const vistor = new DiagnosticVisitor(document, diagnostics, forceAddModule, precompileTransitionKeys);
    const classVisitor = new ClassVisitor();

    classVisitor.visitProgram(tree);
    vistor.visitProgram(tree);

    return diagnostics;
}