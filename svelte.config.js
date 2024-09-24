import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	kit: {
		adapter: adapter(),
		prerender : {
			crawl: true,
			handleHttpError: 'ignore',
			entries: ['/about-us/','/contact-us/']
		}
	},
	preprocess: [
	  preprocess({
		postcss: true,
	  }),
	],
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
		},
	},
};

export default config;
