import { join } from 'node:path';
import { BASE_PORT, SOURCE_DIR } from './project.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
	],
	alias: {
		'@': SOURCE_DIR,
		'@components': join(SOURCE_DIR, 'components'),
	},
	devServer: {
		host: '0.0.0.0',
		port: BASE_PORT,
	},
	app: {
		baseURl: '/nuxt/',
	},
});
