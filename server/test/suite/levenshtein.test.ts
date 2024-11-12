import * as assert from 'assert';

// Import the Levenshtein function (you'll need to create this)
import { levenshtein } from '../../src/utils/quickfix/Algorithms';

suite('Levenshtein Distance Algorithm', () => {
    suite('Basic String Comparisons', () => {
        test('Empty strings should return 0', () => {
            assert.strictEqual(levenshtein('', ''), 0);
        });

        test('Same strings should return 0', () => {
            assert.strictEqual(levenshtein('hello', 'hello'), 0);
            assert.strictEqual(levenshtein('test', 'test'), 0);
        });

        test('String with itself but different case should return non-zero', () => {
            assert.strictEqual(levenshtein('Hello', 'hello'), 1);
            assert.strictEqual(levenshtein('TEST', 'test'), 4);
        });
    });

    suite('Single Character Operations', () => {
        test('Single character insertion', () => {
            assert.strictEqual(levenshtein('cat', 'cats'), 1);
            assert.strictEqual(levenshtein('pig', 'pigs'), 1);
        });

        test('Single character deletion', () => {
            assert.strictEqual(levenshtein('cats', 'cat'), 1);
            assert.strictEqual(levenshtein('pigs', 'pig'), 1);
        });

        test('Single character substitution', () => {
            assert.strictEqual(levenshtein('cat', 'cut'), 1);
            assert.strictEqual(levenshtein('pig', 'peg'), 1);
        });
    });

    suite('Multiple Operations', () => {
        test('Multiple insertions', () => {
            assert.strictEqual(levenshtein('cat', 'catch'), 2);
            assert.strictEqual(levenshtein('pig', 'pings'), 2);
        });

        test('Multiple deletions', () => {
            assert.strictEqual(levenshtein('catch', 'cat'), 2);
            assert.strictEqual(levenshtein('pings', 'pig'), 2);
        });

        test('Multiple substitutions', () => {
            assert.strictEqual(levenshtein('cat', 'dog'), 3);
            assert.strictEqual(levenshtein('pig', 'cat'), 3);
        });

        test('Mixed operations', () => {
            assert.strictEqual(levenshtein('kitten', 'sitting'), 3);
            assert.strictEqual(levenshtein('saturday', 'sunday'), 3);
        });
    });

    suite('Edge Cases', () => {
        test('Empty string to non-empty string', () => {
            assert.strictEqual(levenshtein('', 'test'), 4);
            assert.strictEqual(levenshtein('test', ''), 4);
        });

        test('Very different length strings', () => {
            assert.strictEqual(levenshtein('a', 'aaaaaa'), 5);
            assert.strictEqual(levenshtein('short', 'very long string'), 14);
        });

        test('Special characters', () => {
            assert.strictEqual(levenshtein('hello!', 'hello?'), 1);
            assert.strictEqual(levenshtein('test@', '@test'), 2);
        });

        test('Numbers and mixed content', () => {
            assert.strictEqual(levenshtein('test123', 'test456'), 3);
            assert.strictEqual(levenshtein('abc123', '123abc'), 6);
        });
    });
});