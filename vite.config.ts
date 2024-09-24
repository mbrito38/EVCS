import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
	  port: 3000,
	  //open: true //Dont put this here because of docker container
	},
	plugins: [sveltekit()]
};

export default config;
