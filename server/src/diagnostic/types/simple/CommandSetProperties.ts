import { PropertyDefinition } from '../../handlers/interfaces/IPropertyDefinition';
import { IniTypes_t } from '../IniType_t';

export const CommandSetPropertyMap: Map<string, PropertyDefinition> = new Map();
export const CommandSetProperties: PropertyDefinition[] = [
	{
		name: '1',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The first command button of the command set',
	},
	{
		name: '2',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The first command button of the command set',
	},
	{
		name: '3',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The third command button of the command set',
	},
	{	
		name: '4',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The fourth command button of the command set',
	},
	{
		name: '5',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The fifth command button of the command set',
	},
	{
		name: '6',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The sixth command button of the command set',
	},
	{
		name: '7',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The seventh command button of the command set',
	},
	{
		name: '8',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The eighth command button of the command set',
	},
	{
		name: '9',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The ninth command button of the command set',
	},
	{
		name: '10',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The tenth command button of the command set',
	},
	{
		name: '11',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The eleventh command button of the command set',
	},
	{
		name: '12',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The twelfth command button of the command set',
	},
	{
		name: '13',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The thirteenth command button of the command set',
	},
	{
		name: '14',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The fourteenth command button of the command set',
	},
	{
		name: '15',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The fifteenth command button of the command set',
	},
	{
		name: '16',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The sixteenth command button of the command set',
	},
	{
		name: '17',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The seventeenth command button of the command set',
	},
	{
		name: '18',
		type: IniTypes_t.COMMAND_BUTTON,
		description: 'The eighteenth command button of the command set',
	},
];

CommandSetProperties.forEach(property => {
	CommandSetPropertyMap.set(property.name, property);
});