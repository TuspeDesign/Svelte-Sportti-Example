import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwind,
				autoprefixer
			]
		}
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte'
	}
};

export default config;
