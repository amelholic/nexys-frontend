import { Buffer } from 'node:buffer';

/** URL-safe slug for a `brief/` relative path (includes `.jsx`). */
export function briefRelToSlug(rel: string): string {
	return Buffer.from(rel, 'utf8').toString('base64url');
}

export function briefSlugToRel(slug: string): string | null {
	try {
		const rel = Buffer.from(slug, 'base64url').toString('utf8');
		if (!rel || rel.includes('..') || rel.startsWith('/')) return null;
		if (!rel.endsWith('.jsx')) return null;
		return rel;
	} catch {
		return null;
	}
}
