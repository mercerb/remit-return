import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ["./class-data"]
		}
	}
};

export default config;
