import * as fs from 'fs';
import { glob } from 'glob';
import * as lists from '../lists';

export interface IniNames {
	name: string;
	values: string[];
}

/**
 * Extracts the name of all ini classes from a given folder path
 * 
 * @param folderPath - The path to the folder containing the ini files
 * @param toPath - The path to the file to write the names to
 */
export async function extractNames(folderPath: string, toPath: string, extraPath?: string): Promise<void> {
	if (folderPath === "") {
		return;
	}

    // Find all ini files in the folder and subfolders
    const iniFiles = await getIniFiles(folderPath);

    console.log(`Found ${iniFiles.length} ini files`);
    
    // Initialize an object to collect all values
    const collectedData: { [key: string]: string[] } = {};

    for (const iniFile of iniFiles) {
        const iniContent = fs.readFileSync(iniFile, 'utf8');
        const classNames = extractClassNames(iniContent);
        
        // Add or append to existing array
        if (!collectedData[classNames.name]) {
            collectedData[classNames.name] = [];
        }
        collectedData[classNames.name].push(...classNames.values);
    }

    // Write the complete data structure as JSON
    fs.writeFileSync(toPath, JSON.stringify(collectedData, null, 2));

    // If extraPath is provided, write the readable format
    if (extraPath) {
        fs.writeFileSync(extraPath, JSON.stringify(collectedData, null, 2));
    }

}

async function getIniFiles(folderPath: string): Promise<string[]> {
	const iniFiles = await glob(`${folderPath}/**/*.ini`);
	return iniFiles;
}

const regexPatterns = [
	/^(MappedImage)\s+(\w+)/,
	/^(Object)\s+(\w+)/,
	/^(ObjectReskin)\s+(\w+)\s+(\w+)/,
	/^(AudioEvent)\s+(\w+)/,
	/^(Animation)\s+(\w+)/,
	/^(Armor)\s+(\w+)/,
	/^(CommandButton)\s+(\w+)/,
	/^(CommandSet)\s+(\w+)/,
	/^(CrateData)\s+(\w+)/,
	/^(DamageFX)\s+(\w+)/,
	/^(DialogEvent)\s+(\w+)/,
	/^(EvaEvent)\s+(\w+)/,
	/^(FXList)\s+(\w+)/,
	/^(Locomotor)\s+(\w+)/,
	/^(MouseCursor)\s+(\w+)/,
	/^(ObjectCreationList)\s+(\w+)/,
	/^(ParticleSystem)\s+(\w+)/,
	/^(PlayerTemplate)\s+(\w+)/,
	/^(Science)\s+(\w+)/,
	/^(SpecialPower)\s+(\w+)/,
	/^(Upgrade)\s+(\w+)/,
	/^(Weapon)\s+(\w+)/,
];

function extractClassNames(iniContent: string): IniNames {
	const classNames: IniNames = {
		name: "",
		values: []
	};

	// Split content into lines and process each line
	const lines = iniContent.split(/\r?\n/);
	
	for (const line of lines) {
		for (const pattern of regexPatterns) {
			const matches = line.match(pattern);
			if (matches) {
				classNames.name = matches[1];
				classNames.values.push(matches[2]);
			}
		}
	}

	if (classNames.name === "AudioEvent") {
		classNames.values.push("NoSound");
		classNames.values.push('None');
		classNames.values.push('NONE');
		classNames.values.push('none');
	} else {
		classNames.values.push('None');
		classNames.values.push('NONE');
		classNames.values.push('none');
	}

	if (classNames.name === "Upgrade") {
		classNames.values.push("Upgrade_Veterancy_VETERAN");
		classNames.values.push("Upgrade_Veterancy_ELITE");
		classNames.values.push("Upgrade_Veterancy_HEROIC");
	}
	
	return classNames;
}

export function loadIniNames(iniPath: string): void {
	// Load the ini names into the IniClass arrays

	const iniNames = JSON.parse(fs.readFileSync(iniPath, 'utf8'));

	Object.assign(lists, {
		audioEvent: iniNames.AudioEvent || [],
		animation: iniNames.Animation || [],
		armor: iniNames.Armor || [],
		commandButtons: iniNames.CommandButton || [],
		commandSets: iniNames.CommandSet || [],
		crateData: iniNames.CrateData || [],
		damageFX: iniNames.DamageFX || [],
		dialogEvent: iniNames.DialogEvent || [],
		evaEvent: iniNames.EvaEvent || [],
		fxLists: iniNames.FXList || [],
		locomotor: iniNames.Locomotor || [],
		mappedImages: iniNames.MappedImage || [],
		mouseCursor: iniNames.MouseCursor || [],
		objects: iniNames.Object || [],
		objectReskin: iniNames.ObjectReskin || [],
		ocls: iniNames.ObjectCreationList || [],
		particleSystem: iniNames.ParticleSystem || [],
		playerTemplate: iniNames.PlayerTemplate || [],
		science: iniNames.Science || [],
		specialPower: iniNames.SpecialPower || [],
		upgrade: iniNames.Upgrade || [],
		weapon: iniNames.Weapon || [],
	});
}
