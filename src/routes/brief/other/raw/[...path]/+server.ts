import fs from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';
import { resolveBriefRepoRoot } from '$lib/server/briefRepoIndex';
import type { RequestHandler } from './$types';

function contentTypeFor(ext: string): string {
	switch (ext) {
		case '.pdf':
			return 'application/pdf';
		case '.png':
			return 'image/png';
		case '.jpg':
		case '.jpeg':
			return 'image/jpeg';
		case '.gif':
			return 'image/gif';
		case '.webp':
			return 'image/webp';
		case '.svg':
			return 'image/svg+xml; charset=utf-8';
		case '.html':
		case '.htm':
			return 'text/html; charset=utf-8';
		case '.md':
		case '.mdx':
			return 'text/markdown; charset=utf-8';
		case '.json':
			return 'application/json; charset=utf-8';
		default:
			return 'text/plain; charset=utf-8';
	}
}

export const GET: RequestHandler = async ({ params }) => {
	const root = resolveBriefRepoRoot();
	if (!root) throw error(503, 'Brief repository not available');

	const raw = params.path ?? '';
	if (!raw || raw.includes('..')) throw error(400, 'Invalid path');

	let segments: string[];
	try {
		segments = raw.split('/').map((s) => decodeURIComponent(s));
	} catch {
		throw error(400, 'Invalid encoding');
	}

	if (segments.some((s) => s === '' || s === '..' || s.includes(path.sep))) {
		throw error(400, 'Invalid path');
	}

	const rel = segments.join(path.sep);
	const full = path.resolve(root, rel);

	let rootReal: string;
	let fullReal: string;
	try {
		rootReal = fs.realpathSync.native(root);
		fullReal = fs.existsSync(full) ? fs.realpathSync.native(full) : full;
	} catch {
		throw error(404, 'Not found');
	}

	const prefix = rootReal.endsWith(path.sep) ? rootReal : rootReal + path.sep;
	if (fullReal !== rootReal && !fullReal.startsWith(prefix)) {
		throw error(403, 'Forbidden');
	}

	let stat: fs.Stats;
	try {
		stat = fs.statSync(fullReal);
	} catch {
		throw error(404, 'Not found');
	}

	if (!stat.isFile()) throw error(404, 'Not found');

	const buf = fs.readFileSync(fullReal);
	const ext = path.extname(fullReal).toLowerCase();

	return new Response(buf, {
		headers: {
			'Content-Type': contentTypeFor(ext),
			'Cache-Control': 'private, max-age=60',
			'X-Content-Type-Options': 'nosniff'
		}
	});
};
