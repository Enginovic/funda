import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'http://partnerapi.funda.nl/',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},

	plugins: [vue()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/assets/global.scss";`,
			},
		},
	},
});
