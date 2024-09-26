import { Position } from "vscode-languageserver-types"

export class Location {
	line: number
	column: number

	constructor(line: number, column: number) {
		this.line = line
		this.column = column
	}

	/**
	 * Adds another Locations column to its owns.
	 * @param location Location.column to be added.
	 * @returns Location with new column value.
	 */
	addColumns(location: Location): Location | null;

	/**
	 * Adds a number to the column property
	 * @param amount Amount to be added to Location.column
	 */
	addColumns(amount: number): Location | null;
	
	addColumns(value: Location | number): Location | null {
		if(value instanceof Location) {
			return new Location(this.line, this.column + value.column)
		} else if(typeof value === 'number') {
			return new Location(this.line, this.column + value)
		} else {
			return null
		}
	}

	toPosition(): Position {
		return {
			line: this.line - 1,
			character: this.column
		}
	}
}