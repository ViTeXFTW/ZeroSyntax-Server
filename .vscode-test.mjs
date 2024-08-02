import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
	files: 'client/out/test/**/*.test.js',
});