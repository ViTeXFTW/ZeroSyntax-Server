import * as fs from 'fs';
import * as path from 'path';
import * as jsonc from 'jsonc-parser';

export function loadTestCaseJSONC(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parse the JSONC content using jsonc-parser
  const parsedContent = jsonc.parse(fileContent);
  
  return parsedContent;
}