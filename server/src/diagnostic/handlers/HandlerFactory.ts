import { AbstractParseTreeVisitor } from 'antlr4ng';
import { IniTypes_t } from '../types/IniType_t';
import { ComplexClassContext, SimpleClassContext } from '../../utils/antlr4ng/MapIniParser';
import { AnimationHandler } from './AnimationHandler';
import { ArmorHandler } from './ArmorHandler';
import { AudioEventHandler } from './AudioEventHandler';
import { CommandButtonHandler } from './CommandButtonHandler';
import { CommandSetHandler } from './CommandSetHandlers';
import { DamageFXHandler } from './DamageFXHandler';
import { DialogEventHandler } from './DialogEventHandler';
import { ILanguageServerSettings } from './interfaces/ILanguageServerSettings';
import { IModuleHandler } from './interfaces/IModuleHandler';
import { LocomotorHandler } from './LocomotorHandler';
import { ComplexObjectHandler } from './ObjectHandler';
import { ObjectReskinHandler } from './ObjectReskinHandler';
import { AiDataHandler } from './AiDataHandler';
import { AudioSettingsHandler } from './AudioSettingsHandler';


export class HandlerFactory {
	/**
	 * Creates an instance of a module handler based on the specified INI type.
	 * @param type - The type of INI element to create a handler for
	 * @returns An instance of the appropriate module handler
	 */
	static createHandler(type: IniTypes_t, parseTreeVisitor: AbstractParseTreeVisitor<void>, languageServerSettings: ILanguageServerSettings): IModuleHandler<SimpleClassContext | ComplexClassContext> {

		switch (type) {
			case IniTypes_t.AIDATA:
				return new AiDataHandler();
			case IniTypes_t.ANIMATION:
				return new AnimationHandler();
			case IniTypes_t.ARMOR:
				return new ArmorHandler();
			case IniTypes_t.AUDIO_SETTINGS:
				return new AudioSettingsHandler();
			case IniTypes_t.AUDIO_EVENT:
				return new AudioEventHandler();
			case IniTypes_t.COMMAND_BUTTON:
				return new CommandButtonHandler();
			case IniTypes_t.COMMAND_SET:
				return new CommandSetHandler();
			case IniTypes_t.DIALOG_EVENT:
				return new DialogEventHandler();
			case IniTypes_t.DAMAGE_FX:
				return new DamageFXHandler();
			case IniTypes_t.LOCOMOTOR:
				return new LocomotorHandler();
			case IniTypes_t.OBJECT:
				return new ComplexObjectHandler(parseTreeVisitor, languageServerSettings);
			case IniTypes_t.OBJECT_RESKIN:
				return new ObjectReskinHandler(parseTreeVisitor, languageServerSettings);
			default:
				console.log(`No handler found for type ${type}`);
				throw new Error(`No handler found for type ${type}`);
		}
	}


}
