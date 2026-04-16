import adapterAmplify from 'amplify-adapter';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** Use `SVELTEKIT_ADAPTER=amplify` for AWS Amplify Hosting (SSR). Default: Docker / generic Node. */
const useAmplify = process.env.SVELTEKIT_ADAPTER === 'amplify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: useAmplify ? adapterAmplify() : adapterNode()
	}
};

export default config;
