import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocessor({
    scss: {
      prependData: "@import './src/scss/global.scss';"
    }
  }),

  kit: {
    adapter: adapter({
      output: 'build',
      assets: 'build',
      fallback: '200.html'
    }),

    prerender: {
      default: true
    }
  }
};

export default config;
