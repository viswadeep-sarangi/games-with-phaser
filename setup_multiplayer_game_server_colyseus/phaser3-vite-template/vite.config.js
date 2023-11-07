import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [],
	server: { host: '0.0.0.0', port: 8000 },
	clearScreen: false,
	root: path.resolve(__dirname, 'src/client'),
	build: {
		outDir: path.resolve(__dirname, 'dist')
	}
})
