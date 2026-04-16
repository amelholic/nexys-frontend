import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export type BriefRepoFile = {
	rel: string;
	ext: string;
	bytes: number;
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Resolve the repo `brief/` directory. Works for local dev (`../brief` from `frontend/`),
 * optional Docker mount at `/brief`, or `BRIEF_ROOT` / `NEXYS_BRIEF_ROOT`.
 *
 * Note: production images that only copy `frontend/build` need `brief/` mounted or `BRIEF_ROOT` set.
 */
/** Walk up from cwd until we find a directory that contains both `brief/` and `frontend/` (monorepo root). */
export function resolveBriefRootViaMonorepoWalk(): string | null {
	let dir = path.resolve(process.cwd());
	for (let i = 0; i < 10; i++) {
		const brief = path.join(dir, 'brief');
		const frontend = path.join(dir, 'frontend');
		try {
			if (
				fs.existsSync(brief) &&
				fs.statSync(brief).isDirectory() &&
				fs.existsSync(frontend) &&
				fs.statSync(frontend).isDirectory()
			) {
				return brief;
			}
		} catch {
			/* continue */
		}
		const parent = path.dirname(dir);
		if (parent === dir) break;
		dir = parent;
	}
	return null;
}

export function resolveBriefRepoRoot(): string | null {
	const seen = new Set<string>();
	const tryDir = (p: string): string | null => {
		const resolved = path.resolve(p);
		if (seen.has(resolved)) return null;
		seen.add(resolved);
		try {
			if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) return resolved;
		} catch {
			/* ignore */
		}
		return null;
	};

	const walkHit = resolveBriefRootViaMonorepoWalk();
	if (walkHit) return walkHit;

	const envRoot = process.env.BRIEF_ROOT || process.env.NEXYS_BRIEF_ROOT;
	if (envRoot) {
		const hit = tryDir(envRoot);
		if (hit) return hit;
	}

	const candidates = [
		'/brief',
		path.join(process.cwd(), '..', 'brief'),
		path.join(process.cwd(), 'brief'),
		path.join(process.cwd(), '..', '..', 'brief'),
		path.resolve(__dirname, '../../../..', 'brief')
	];

	for (const c of candidates) {
		const hit = tryDir(c);
		if (hit) return hit;
	}

	return null;
}

export function walkBriefFiles(root: string): BriefRepoFile[] {
	const out: BriefRepoFile[] = [];

	function walk(dir: string) {
		let entries: fs.Dirent[];
		try {
			entries = fs.readdirSync(dir, { withFileTypes: true });
		} catch {
			return;
		}
		for (const e of entries) {
			if (e.name.startsWith('.')) continue;
			const full = path.join(dir, e.name);
			if (e.isDirectory()) {
				if (e.name === 'node_modules') continue;
				walk(full);
			} else {
				if (e.name === '.DS_Store' || e.name === 'Thumbs.db') continue;
				const rel = path.relative(root, full).split(path.sep).join('/');
				const ext = path.extname(e.name).toLowerCase();
				let bytes = 0;
				try {
					bytes = fs.statSync(full).size;
				} catch {
					/* skip size */
				}
				out.push({ rel, ext, bytes });
			}
		}
	}

	walk(root);
	out.sort((a, b) => a.rel.localeCompare(b.rel, undefined, { sensitivity: 'base' }));
	return out;
}

export function groupBriefFiles(files: BriefRepoFile[]): { label: string; items: BriefRepoFile[] }[] {
	const map = new Map<string, BriefRepoFile[]>();
	for (const f of files) {
		const label = f.rel.includes('/') ? (f.rel.split('/')[0] as string) : '(root)';
		const arr = map.get(label) ?? [];
		arr.push(f);
		map.set(label, arr);
	}
	return [...map.entries()]
		.sort(([a], [b]) => {
			if (a === '(root)') return -1;
			if (b === '(root)') return 1;
			return a.localeCompare(b, undefined, { sensitivity: 'base' });
		})
		.map(([label, items]) => ({ label, items }));
}

/** Only `.jsx` files (source documents), same grouping as `groupBriefFiles`. */
export function walkBriefJsxFiles(root: string): BriefRepoFile[] {
	return walkBriefFiles(root).filter((f) => f.ext === '.jsx');
}
