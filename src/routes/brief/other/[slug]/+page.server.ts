import fs from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';
import { isBriefFlowCuratedRel } from '$lib/brief/briefCuratedCatalog';
import { briefSlugToRel } from '$lib/brief/briefOtherSlug';
import { resolveBriefRepoRoot } from '$lib/server/briefRepoIndex';
import fallbackManifest from '$lib/generated/brief-other-manifest.json';
import type { PageServerLoad } from './$types';

type ManifestDoc = { name: string; rel: string; slug: string };
type Manifest = { stages: { docs: ManifestDoc[] }[] };

function findInManifest(slug: string): ManifestDoc | null {
	const m = fallbackManifest as Manifest;
	for (const s of m.stages) {
		const hit = s.docs.find((d) => d.slug === slug);
		if (hit) return hit;
	}
	return null;
}

function displayNameFromRel(rel: string): string {
	const base = rel.split('/').pop() ?? rel;
	const without = base.replace(/\.jsx$/i, '');
	return without
		.split(/[_-]+/)
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
		.join(' ');
}

export const load: PageServerLoad = async ({ params }) => {
	const rel = briefSlugToRel(params.slug);
	if (!rel) error(404, 'Invalid document');
	if (isBriefFlowCuratedRel(rel)) error(404, 'Not found');

	const root = resolveBriefRepoRoot();
	const onDisk = root ? fs.existsSync(path.join(root, rel)) : false;
	const fromManifest = findInManifest(params.slug);

	if (!onDisk && !fromManifest) error(404, 'Not found');

	return {
		doc: {
			name: fromManifest?.name ?? displayNameFromRel(rel),
			rel,
			slug: params.slug
		}
	};
};
