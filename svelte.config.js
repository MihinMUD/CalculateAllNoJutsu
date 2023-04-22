import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	base: dev ? '' : process.env.BASE_PATH,
	kit: {
		adapter: adapter()
	}
};

export default config;