import { integer, Range, TextEdit } from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';

/**
 * Formats a ini document in accordens with map.ini
 * @param document Document to format
 * @param indentSize amount of spaces to use when indenting
 * @returns edits for vscode document
 */
export function formatDocument(document: TextDocument, indentSize: integer = 2): TextEdit[] {
	const edits: TextEdit[] = [];
	let indentlevel = 0;
	
	for(let i = 0; i < document.lineCount; i++) {
		const lineText = document.getText({
            start: { line: i, character: 0 },
            end: { line: i, character: document.getText({ start: { line: i, character: 0 }, end: { line: i + 1, character: 0 } }).length }
        });

		const trimmedLine = lineText.trim();

		for(let block of EndRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel = Math.max(0, indentlevel - 1);
			}
		}

		const indentedLine = " ".repeat(indentSize * indentlevel) + trimmedLine;
		const range = Range.create(i, 0, i, lineText.length)
		edits.push(TextEdit.replace(range, indentedLine));
		
		for(let block of ObjectsRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of SimpleClassesRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of FXlistRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
		for(let block of OCLRegex) {
			if(checkLineWithRegex(trimmedLine, block)) {	
				indentlevel++;
			}
		}
	}

	return edits;
}

function checkLineWithRegex(line: string, regex: string) {
	let Regex = new RegExp(regex, "g");
	return Regex.test(line);
}

const ObjectsRegex = ["^\\b([Oo]bject)\\s+[a-zA-Z0-9_]", "^\\b([Oo]bject[Rr]eskin)\\s+[a-zA-Z0-9_]", "^\\b([Aa]dd[Mm]odule)$", "^\\b([Rr]eplace[Mm]odule)", "^\\b([Dd]efault[Cc]ondition[Ss]tate)$", "^\\b([Uu]nit[Ss]pecific[Ss]ounds)$", "^\\b([Pp]rerequisites)$", "^\\b([Aa]rmor[Ss]et)$", "^\\b([Ww]eapon[Ss]et)$", "^\\b([Dd]raw)\\s*=", "^\\b([Cc]ondition[Ss]tate)\\s*=", "^\\b([Tt]ransition[Ss]tate)\\s*=", "^\\b([Bb]ody)\\s*=", "^\\b([Bb]ehavior)\\s*=", "^\\b([Cc]lient[Uu]pdate)\\s*=", "^\\b(Turret)$"];
const SimpleClassesRegex = ["^\\b([Mm]apped[Ii]mage)\\s+[a-zA-Z0-9_]", "^\\b([Pp]article[Ss]ystem)\\s+[a-zA-Z0-9_]", "^\\b([Ll]ocomotor)\\s+[a-zA-Z0-9_]", "^\\b([Aa]udio[Ee]vent)\\s+[a-zA-Z0-9_]", "^\\b([Dd]ialog[Ee]vent)\\s+[a-zA-Z0-9_]", "^\\b([Aa]rmor)\\s+[a-zA-Z0-9_]", "^\\b([Cc]ommand[Ss]et)\\s+[a-zA-Z0-9_]", "^\\b([Cc]ommand[Bb]utton)\\s+[a-zA-Z0-9_]", "^\\b([Ww]eapon)\\s+[a-zA-Z0-9_]", "^\\b([Dd]amage[Ff][Xx])\\s+[A-Za-z0-9_]", "^\\b([Uu]pgrade)\\s+[a-zA-Z0-9_]", "^\\b([Pp]layer[Tt]emplate)\\s+[a-zA-Z0-9_]", "^\\b(Rank)\\s+[1-8]$", "^\\b([Ii]n[Gg]ame[Uu][Ii])$", "^\\b(A10StrikeRadiusCursor)$", "^\\b(AmbushRadiusCursor)$", "^\\b(ClusterMinesRadiusCursor)$", "^\\b(AnthraxBombRadiusCursor)$"];
const OCLRegex = ["^\\b([Oo]bject[Cc]reation[Ll]ist)\\s+[a-zA-Z0-9_]", "^\\b([Cc]reate[Oo]bject)$", "^\\b([Cc]reate[Dd]ebris)$", "^\\b([Aa]pply[Rr]andom[Ff]orce)$", "^\\b([Dd]eliver[Pp]ayload)$", "^\\b([Dd]elivery[Dd]ecal)$", "^\\b([Ff]ire[Ww]eapon)$", "^\\b([Aa]ttack)$"];
const FXlistRegex = ["^\\b([Ff][Xx][Ll]ist)\\s+[a-zA-Z0-9_]", "^\\b([Pp]article[Ss]ystem)$", "^\\b([Ss]ound)$", "^\\b([Tt]errain[Ss]corch)$", "^\\b([Tt]racer)$", "^\\b([Ll]ight[Pp]ulse)$", "^\\b([Vv]iew[Ss]hake)$", "^\\b([Ff][Xx][Ll]ist[Aa]t[Bb]one[Pp]os)$"];
const EndRegex = ["^\\b([Ee]nd)$", "^\\b(END)$"];