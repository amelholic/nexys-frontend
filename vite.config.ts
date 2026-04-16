import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const usePolling =
	process.env.CHOKIDAR_USEPOLLING === 'true' || process.env.WATCHPACK_POLLING === 'true';

/** Set in docker-compose for `web-dev` so the browser (on the host) can open the HMR WebSocket. */
const dockerWebDev = process.env.DOCKER_WEB_DEV === '1';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: true,
		port: 5173,
		strictPort: true,
		// Allow reading monorepo `brief/` for /brief/other and raw source routes.
		fs: { allow: ['..'] },
		// Without this, Vite inside Docker often advertises 0.0.0.0 or the container IP for HMR → no live updates in the browser.
		...(dockerWebDev
			? {
					hmr: {
						protocol: 'ws',
						host: process.env.VITE_HMR_EXTERNAL_HOST ?? 'localhost',
						port: 5173,
						clientPort: Number(process.env.VITE_HMR_CLIENT_PORT ?? '5173')
					}
				}
			: {}),
		...(usePolling ? { watch: { usePolling: true, interval: 800 } } : {})
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
