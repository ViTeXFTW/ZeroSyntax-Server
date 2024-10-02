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

export function generateCompletionItems(candidates: CandidatesCollection, parser: MapIniParser): CompletionItem[] {
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

        switch(label) {
        
            case 'NEWLINE':
            case 'COMMENT':
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

            default:
                completionItems.push({
                    label,
                    kind: CompletionItemKind.Field,
                    data: tokenType,
                    documentation: `Keyword: ${label}`,
                });
                break;
        }
    }

    // Process rule candidates (snippets, templates)
    for (const [ruleIndex, candidate] of candidates.rules) {
        const ruleName = parser.ruleNames[ruleIndex];

        completionItems.push({
            label: ruleName,
            kind: CompletionItemKind.Snippet,
            data: ruleIndex,
            documentation: `Rule: ${ruleName}`,
        });
    }

    return completionItems;
}

export function findContextAtPosition(tree: ParserRuleContext, position: number): ParserRuleContext | null {
    if (!tree || tree.start === null || tree.stop === null) {
      return null;
    }

    console.log(`Start: ${tree.start.start}, End: ${tree.stop.stop}, Position: ${position}`)
    
    const start = tree.start.start;
    const stop = tree.stop.stop + 1;
  
    if (position < start || position > stop) {
        console.log('out of range')
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

export function getContextSpecificCompletions(ruleName: string): CompletionItem[] {
    const completionItems: CompletionItem[] = [];

    console.log(`Rules: ${ruleName}`)

    //TODO: Add retrievels here
    switch (ruleName) {
        case 'cb_command_property':
            completionItems.push(...getCompletionItemsFromStringArray(list.CommandButtonCommandValues))
            break;

        case 'cb_options_property':
            completionItems.push(...getCompletionItemsFromStringArray(list.CommandButtonOptionValues))
            break;

        case 'cb_buttonbordertype_property':
            completionItems.push(...getCompletionItemsFromStringArray(list.CommandButtonBorderTypeValues))
            break;

        case 'object_property':
            completionItems.push(...getCompletionItemsFromRBTree(list.objects))
            completionItems.push(...getCompletionItemsFromRBTree(list.customObjects))        
            break;

        case 'science_property':
            completionItems.push(...getCompletionItemsFromRBTree(list.science))
            completionItems.push(...getCompletionItemsFromRBTree(list.customScience))
            break;

        case 'specialpower_property':
            completionItems.push(...getCompletionItemsFromRBTree(list.specialPower))
            completionItems.push(...getCompletionItemsFromRBTree(list.customSpecialPower))
            break;

        case 'upgrade_property':
            // Add completion items relevant to function declarations

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
            kind: CompletionItemKind.Text,
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
            kind: CompletionItemKind.Text,
            data: string,
            documentation: `Value: ${string}`,
        });
    });
    
    return completionItems;
}