import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

/** Legacy URL — use `/brief/client-presentation`. */
export const load: PageServerLoad = () => redirect(301, `${base}/brief/client-presentation`);
