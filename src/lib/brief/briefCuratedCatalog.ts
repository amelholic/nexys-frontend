import curated from './brief-curated-catalog.json';

const dirPrefixes = curated.dirPrefixes as readonly string[];
const rootBasenames = new Set(curated.rootBasenames as string[]);

/** True if this path is already covered by the curated Brief Flow index (`/brief`). */
export function isBriefFlowCuratedRel(rel: string): boolean {
	const normalized = rel.split('\\').join('/');
	for (const p of dirPrefixes) {
		if (normalized === p.slice(0, -1) || normalized.startsWith(p)) return true;
	}
	const base = normalized.split('/').pop() ?? normalized;
	const noExt = base.replace(/\.jsx$/i, '');
	return rootBasenames.has(noExt);
}
