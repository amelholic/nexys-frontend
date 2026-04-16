import {
	groupBriefFiles,
	resolveBriefRepoRoot,
	walkBriefJsxFiles,
	type BriefRepoFile
} from '$lib/server/briefRepoIndex';
import { isBriefFlowCuratedRel } from '$lib/brief/briefCuratedCatalog';
import { briefRelToSlug } from '$lib/brief/briefOtherSlug';
import fallbackManifest from '$lib/generated/brief-other-manifest.json';
import type { PageServerLoad } from './$types';

const STAGE_COLORS = ['#8B5CF6', '#00B4FF', '#EC4899', '#F97316', '#10B981'] as const;

function humanizeSegment(segment: string): string {
	if (segment === '(root)') return 'Brief root';
	if (segment === 'AI_Flow_Internal') return 'AI Flow internal';
	return segment
		.split(/[_-]+/)
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
		.join(' ');
}

function displayNameForJsx(rel: string): string {
	const base = rel.split('/').pop() ?? rel;
	const without = base.replace(/\.jsx$/i, '');
	return humanizeSegment(without);
}

export type OtherBriefDoc = {
	name: string;
	rel: string;
	slug: string;
};

export type OtherBriefStage = {
	id: string;
	label: string;
	color: string;
	docs: OtherBriefDoc[];
};

function toStages(groups: { label: string; items: BriefRepoFile[] }[]): OtherBriefStage[] {
	return groups.map((g, i) => ({
		id: g.label === '(root)' ? 'root' : g.label.replace(/[^\w-]+/g, '-').toLowerCase(),
		label: humanizeSegment(g.label),
		color: STAGE_COLORS[i % STAGE_COLORS.length],
		docs: g.items
			.filter((f) => f.ext === '.jsx' && !isBriefFlowCuratedRel(f.rel))
			.map((f) => ({
				name: displayNameForJsx(f.rel),
				rel: f.rel,
				slug: briefRelToSlug(f.rel)
			}))
	}));
}

type Snapshot = { stages: OtherBriefStage[]; totalJsx: number };

const snapshot = fallbackManifest as Snapshot;

export const load: PageServerLoad = async () => {
	const root = resolveBriefRepoRoot();
	if (root) {
		const jsxFiles = walkBriefJsxFiles(root).filter((f) => !isBriefFlowCuratedRel(f.rel));
		const groups = groupBriefFiles(jsxFiles);
		const stages = toStages(groups).filter((s) => s.docs.length > 0);
		return {
			available: true as const,
			source: 'live' as const,
			stages,
			totalJsx: jsxFiles.length
		};
	}

	if (snapshot.stages.length > 0) {
		return {
			available: true as const,
			source: 'snapshot' as const,
			stages: snapshot.stages,
			totalJsx: snapshot.totalJsx
		};
	}

	return {
		available: false as const,
		source: 'none' as const,
		stages: [] as OtherBriefStage[],
		totalJsx: 0
	};
};
