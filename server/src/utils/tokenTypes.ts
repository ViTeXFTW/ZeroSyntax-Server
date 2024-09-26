// tokenTypes.ts

/**
 * Enum for SemanticToken type. 
 * Used for assigning Semantic tokens for Symbols.
 */
export enum tokenTypeEnum {
	"class",
	"variable"
}

/**
 * String array, 
 */
export const tokenTypes = [
	"class",
	"variable"
];

export enum tokenModifierEnum {
	DECLARATION = "declaration",
	DEFINITION = "definition",
	READONLY = "readonly",
	STATIC = "static",
	DEPRECATED = "deprecated",
	ABSTRACT = "abstract",
	ASYNC = "async",
	MODIFICATION = "modification",
	DOCUMENTATION = "documentation",
	DEFAULTLIBRARY = "defaultLibrary"
}
  
export const tokenModifiers = [
	"declaration",
	"definition",
	"readonly",
	"static",
	"deprecated",
	"abstract",
	"async",
	"modification",
	"documentation",
	"defaultLibrary"
];