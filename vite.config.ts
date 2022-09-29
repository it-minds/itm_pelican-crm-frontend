import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [react(), VitePWA({ registerType: 'autoUpdate', injectRegister: 'script' })],
	plugins: [react(), VitePWA({ injectRegister: 'auto', registerType: 'autoUpdate' })],
	server: {
		port: 3000,
	},
});
