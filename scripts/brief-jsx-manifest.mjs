/**
 * Writes src/lib/generated/brief-other-manifest.json — JSX under brief/ that are NOT on `/brief`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const briefRoot = path.join(repoRoot, 'brief');
const curatedPath = path.resolve(__dirname, '../src/lib/brief/brief-curated-catalog.json');
const outFile = path.resolve(__dirname, '../src/lib/generated/brief-other-manifest.json');

const STAGE_COLORS = ['#8B5CF6', '#00B4FF', '#EC4899', '#F97316', '#10B981'];

function loadCurated() {
	const raw = fs.readFileSync(curatedPath, 'utf8');
	return JSON.parse(raw);
}

function isCurated(rel, curated) {
	const normalized = rel.split('\\').join('/');
	for (const p of curated.dirPrefixes) {
		if (normalized === p.slice(0, -1) || normalized.startsWith(p)) return true;
	}
	const base = normalized.split('/').pop() ?? normalized;
	const noExt = base.replace(/\.jsx$/i, '');
	return curated.rootBasenames.includes(noExt);
}

function humanizeSegment(segment) {
	if (segment === '(root)') return 'Brief root';
	if (segment === 'AI_Flow_Internal') return 'AI Flow internal';
	return segment
		.split(/[_-]+/)
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
		.join(' ');
}

function displayNameForJsx(rel) {
	const base = rel.split('/').pop() ?? rel;
	const without = base.replace(/\.jsx$/i, '');
	return humanizeSegment(without);
}

function walkJsx(root) {
	const out = [];
	function walk(dir) {
		let entries;
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
			} else if (e.name.endsWith('.jsx')) {
				const rel = path.relative(root, full).split(path.sep).join('/');
				out.push({ rel, ext: '.jsx' });
			}
		}
	}
	walk(root);
	out.sort((a, b) => a.rel.localeCompare(b.rel, undefined, { sensitivity: 'base' }));
	return out;
}

function groupFiles(files) {
	const map = new Map();
	for (const f of files) {
		const label = f.rel.includes('/') ? f.rel.split('/')[0] : '(root)';
		const arr = map.get(label) ?? [];
		arr.push(f);
		map.set(label, arr);
	}
	return [...map.entries()].sort(([a], [b]) => {
		if (a === '(root)') return -1;
		if (b === '(root)') return 1;
		return a.localeCompare(b, undefined, { sensitivity: 'base' });
	});
}

function relToSlug(rel) {
	return Buffer.from(rel, 'utf8').toString('base64url');
}

const curated = loadCurated();

fs.mkdirSync(path.dirname(outFile), { recursive: true });

if (!fs.existsSync(briefRoot)) {
	if (fs.existsSync(outFile)) {
		try {
			const cur = JSON.parse(fs.readFileSync(outFile, 'utf8'));
			if (Array.isArray(cur.stages) && cur.stages.length > 0) {
				console.warn('[brief-other-manifest] brief/ missing; keeping existing', outFile);
				process.exit(0);
			}
		} catch {
			/* fall through */
		}
	}
	console.warn('[brief-other-manifest] brief/ not found — writing empty manifest');
	fs.writeFileSync(outFile, JSON.stringify({ stages: [], totalJsx: 0 }, null, '\t') + '\n');
	process.exit(0);
}

const allFiles = walkJsx(briefRoot);
const files = allFiles.filter((f) => !isCurated(f.rel, curated));
const grouped = groupFiles(files);
const stages = grouped
	.map(([label, items], i) => ({
		id: label === '(root)' ? 'root' : label.replace(/[^\w-]+/g, '-').toLowerCase(),
		label: humanizeSegment(label),
		color: STAGE_COLORS[i % STAGE_COLORS.length],
		docs: items.map((f) => ({
			name: displayNameForJsx(f.rel),
			rel: f.rel,
			slug: relToSlug(f.rel)
		}))
	}))
	.filter((s) => s.docs.length > 0);
const payload = { stages, totalJsx: files.length };

fs.writeFileSync(outFile, JSON.stringify(payload, null, '\t') + '\n');
console.log(
	'[brief-other-manifest] wrote',
	outFile,
	`(${payload.totalJsx} jsx not on /brief, ${payload.stages.length} groups; skipped ${allFiles.length - files.length})`
);
