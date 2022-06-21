import adapter from '@sveltejs/adapter-node';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: "@import './src/global.scss';"
		}
	}),

	kit: {
		adapter: adapter({
			output: 'build'
		})
	}
};

export default config;
