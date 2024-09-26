// .vscode-test.js
import { defineConfig } from '@vscode/test-cli';

export default defineConfig({ files: 'server/out/test/**/*.test.js' });
