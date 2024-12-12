import * as assert from 'assert';
import { PropertyDefinition } from '../../src/diagnostic/handlers/interfaces/IPropertyDefinition';

suite('propertiesValue', () => {
	
	suite('Basic validation', () => {
		test('Validate integers', () => {
			const propertyDefinition: PropertyDefinition = {
				name: 'BuildCost',
				type: 'integer',
				description: 'An integer value'
			};

			// assert.strictEqual(isValidPropertyValue('1000', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('-1000', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('4.5', propertyDefinition, 0), false);
		});

		test('Validate floats', () => {
			const propertyDefinition: PropertyDefinition = {
				name: 'BuildTime',
				type: 'float',
				description: 'A float value'
			};

			// assert.strictEqual(isValidPropertyValue('1000.5', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('-1000.5', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('4', propertyDefinition, 0), true);
		});

		test('Validate percentages', () => {
			const propertyDefinition: PropertyDefinition = {
				name: 'BuildTime',
				type: 'percent',
				description: 'A percentage value'
			};

			// assert.strictEqual(isValidPropertyValue('100%', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('0%', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('-50%', propertyDefinition, 0), true);
			
			// assert.strictEqual(isValidPropertyValue('100.5', propertyDefinition, 0), false);
			// assert.strictEqual(isValidPropertyValue('4.5%', propertyDefinition, 0), false);
		});

		test('Validate booleans', () => {
			const propertyDefinition: PropertyDefinition = {
				name: 'BuildTime',
				type: 'boolean',
				description: 'A boolean value'
			};

			// assert.strictEqual(isValidPropertyValue('yes', propertyDefinition, 0), true);
			// assert.strictEqual(isValidPropertyValue('no', propertyDefinition, 0), true);

			// assert.strictEqual(isValidPropertyValue('1', propertyDefinition, 0), false);
			// assert.strictEqual(isValidPropertyValue('0', propertyDefinition, 0), false);
			// assert.strictEqual(isValidPropertyValue('true', propertyDefinition, 0), false);
			// assert.strictEqual(isValidPropertyValue('false', propertyDefinition, 0), false);
			// assert.strictEqual(isValidPropertyValue('4.5', propertyDefinition, 0), false);
		});
	});



});
