import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA({ injectRegister: 'auto', registerType: 'autoUpdate' }), eslint()],
	server: {
		port: 3000,

		hmr: {
			overlay: false,
		},
	},
	root: path.resolve(__dirname, 'src'),
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, 'app/index.html'),
			},
		},
	},
});
