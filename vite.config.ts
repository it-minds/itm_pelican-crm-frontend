import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	// plugins: [react(), VitePWA({ registerType: 'autoUpdate', injectRegister: 'script' })],
	plugins: [
		react(),
		VitePWA({ injectRegister: 'auto', registerType: 'autoUpdate' }),
		eslint(),
		svgr(),
	],
	server: {
		port: 3000,
		hmr: {
			overlay: false,
		},
	},
});
