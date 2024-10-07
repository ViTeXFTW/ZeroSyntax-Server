import { CandidatesCollection } from "antlr4-c3";
import { ParserRuleContext, TerminalNode, Token } from "antlr4ng";
import { MapIniParser } from "../utils/antlr4ng/MapIniParser";
import { CompletionItem, CompletionItemKind, InsertTextFormat } from "vscode-languageserver";
import * as list from '../utils/lists'
import { RBTree } from "bintrees";



export function findTokenIndex(tokens: Token[], offset: number): number {
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.start <= offset && token.stop + 1 >= offset) {
            return i;
        }
    }
    // If no exact match, return the last token
    return tokens.length - 1;
}

export async function generateCompletionItems(candidates: CandidatesCollection, parser: MapIniParser): Promise<CompletionItem[]> {
    const completionItems: CompletionItem[] = [];

    // Process token candidates (keywords, symbols)
    for (const [tokenType, candidate] of candidates.tokens) {
        const tokenName = parser.vocabulary.getDisplayName(tokenType);

        if (!tokenName) {
            continue
        }

        // Clean up the token name
        let label = tokenName.startsWith("'") && tokenName.endsWith("'")
            ? tokenName.substring(1, tokenName.length - 1)
            : tokenName;

        
        completionItems.push(createCompletionItem(label, CompletionItemKind.Field, tokenType, `Rule: ${label}`));

        switch (label) {

            case 'NEWLINE':
            case 'COMMENT':
                break;

            case 'BOOLEAN':
                completionItems.push(createCompletionItem('Yes', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('No', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;

            case 'PERCENT':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Percentage',
                    insertText: '${0:100}%',
                    documentation: `Snippet: ${label}`
                })
                break

            case 'WEAPONSLOT':
                completionItems.push(createCompletionItem('PRIMARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('SECONDARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('TERTIARY', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;
                

            case 'VETERENCY':
                completionItems.push(createCompletionItem('VETERAN', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('ELITE', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                completionItems.push(createCompletionItem('HEROIC', CompletionItemKind.Field, tokenType, `Rule: ${label}`))
                break;

            case 'RGB':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert RGB',
                    insertText: 'R:${1:0} G:${2:0} B:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'RGBA':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert RGBA',
                    insertText: 'R:${1:0} G:${2:0} B:${3:0} A:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Coords':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Left, Top, Right & Bottom',
                    insertText: 'Coords = Left:${1:0} Top:${2:0} Right:${3:0} Bottom:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'XCOORD':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert X coordinate',
                    insertText: 'X:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'YCOORD':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Y coordinate',
                    insertText: 'Y:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'ZCOORD':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert Z coordinate',
                    insertText: 'Z:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            case 'Location':
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Snippet,
                    insertTextFormat: InsertTextFormat.Snippet,
                    detail: 'Insert X: & Y: coordinate',
                    insertText: 'Location = X:${1:0} Y:${0:0}',
                    documentation: `Snippet: ${label}`
                })
                break;

            default:
                break;
        }
    }

    // Process rule candidates (snippets, templates)
    // for (const [ruleIndex, candidate] of candidates.rules) {
    //     const ruleName = parser.ruleNames[ruleIndex];

    //     completionItems.push({
    //         label: ruleName,
    //         kind: CompletionItemKind.Snippet,
    //         data: ruleIndex,
    //         documentation: `Rule: ${ruleName}`,
    //     });
    // }

    return completionItems;
}

function createCompletionItem(label: string, kind: CompletionItemKind, data: any, documentation: string): CompletionItem {
    return {
        label: label,
        kind: kind,
        data: data,
        documentation: documentation
    }
}

export function findContextAtPosition(tree: ParserRuleContext, position: number): ParserRuleContext | null {
    if (!tree || tree.start === null || tree.stop === null) {
        return null;
    }

    // console.log(`Start: ${tree.start.start}, End: ${tree.stop.stop}, Position: ${position}`)

    const start = tree.start.start;
    const stop = tree.stop.stop + 1;

    if (position < start || position > stop) {
        // console.log('out of range')
        return null;
    }

    // If the node covers the position, check its children
    for (let i = 0; i < tree.getChildCount(); i++) {
        const child = tree.getChild(i);

        if (child instanceof ParserRuleContext) {
            const result = findContextAtPosition(child, position);
            if (result !== null) {
                return result;
            }
        }
    }

    // If no children cover the position, return this node
    return tree;
}

export async function getContextSpecificCompletions(ruleName: string): Promise<CompletionItem[]> {
    const completionItems: CompletionItem[] = [];

    console.log(`Rules: ${ruleName}`)

    //TODO: Add retrievels here
    switch (ruleName) {
        case 'audioevent_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.audioEvent))
            completionItems.push(...getCompletionItemsFromRBTree(list.customAudioEvent))
            break;

        case 'commandbutton_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.commandButtons))
            completionItems.push(...getCompletionItemsFromRBTree(list.customCommandButtons))
            break;
            
        case 'dialogevent_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.dialogEvent))
            completionItems.push(...getCompletionItemsFromRBTree(list.customDialogEvent))
            break;

        case 'fxlist_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.fxLists))
            completionItems.push(...getCompletionItemsFromRBTree(list.customFXLists))
            break;

        case 'mappedimage_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.mappedImages))
            completionItems.push(...getCompletionItemsFromRBTree(list.customMappedImages))
            break;

        case 'object_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.objects))
            completionItems.push(...getCompletionItemsFromRBTree(list.customObjects))
            break;

        case 'science_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.science))
            completionItems.push(...getCompletionItemsFromRBTree(list.customScience))
            break;

        case 'specialpower_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.specialPower))
            completionItems.push(...getCompletionItemsFromRBTree(list.customSpecialPower))
            break;

        case 'rand_value':
            completionItems.push({
                label: 'Random Value Distribution',
                kind: CompletionItemKind.Snippet,
                insertTextFormat: InsertTextFormat.Snippet,
                detail: 'Insert rand_value',
                insertText: '${1:0} ${2:0} ${3|CONSTANT,UNIFORM,GAUSSIAN,TRIANGULAR,LOW_BIAS,HIGH_BIAS|}',
                documentation: `Snippet: Random Value Distribution}`
            })
            break;

        case 'coord3D':
            completionItems.push({
                label: '3D Coordinates',
                kind: CompletionItemKind.Snippet,
                insertTextFormat: InsertTextFormat.Snippet,
                detail: 'Insert X: Y: & Z:',
                insertText: 'X:${1:0} Y:${2:0} Z:${0:0}',
                documentation: `Snippet: 3D Coordinates`
            })
            break;

        case 'particlesystem_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.particleSystem))
            completionItems.push(...getCompletionItemsFromRBTree(list.customParticleSystem))
            break;

        case 'upgrade_value':
            completionItems.push(...getCompletionItemsFromRBTree(list.upgrades));
            completionItems.push(...getCompletionItemsFromRBTree(list.customUpgrades));
            break;

        // Add more cases for different contexts
        default:
            break;
    }

    return completionItems;
}

function getCompletionItemsFromRBTree(tree: RBTree<string>): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    if (tree.size === 0) {
        return completionItems; // Return empty array if tree is empty
    }

    // Proceed with traversal
    tree.each((value: string) => {
        completionItems.push({
            label: value,
            kind: CompletionItemKind.Field,
            data: value,
            documentation: `Value: ${value}`,
        });
    });

    return completionItems;
}

function getCompletionItemsFromStringArray(stringArray: string[]): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    stringArray.forEach(string => {
        completionItems.push({
            label: string,
            kind: CompletionItemKind.Field,
            data: string,
            documentation: `Value: ${string}`,
        });
    });

    return completionItems;
}

export function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
    const timeout = new Promise<T>(resolve => setTimeout(() => resolve(fallback), ms));
    return Promise.race([promise, timeout]);
}