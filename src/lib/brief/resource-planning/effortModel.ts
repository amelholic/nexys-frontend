export type EngagementKey = 'pilot' | 'standard' | 'enterprise';

export type RoleKey =
	| 'sales'
	| 'deliveryLead'
	| 'aiEngineer'
	| 'integrationDev'
	| 'solutionsArchitect'
	| 'operations';

export const engagementTypes: Record<
	EngagementKey,
	{ name: string; weeks: number; defaultValue: number }
> = {
	pilot: { name: 'Pilot', weeks: 4, defaultValue: 40_000 },
	standard: { name: 'Standard', weeks: 8, defaultValue: 80_000 },
	enterprise: { name: 'Enterprise', weeks: 16, defaultValue: 200_000 }
};

/** Internal hourly rates (AUD) — illustrative for planning. */
export const roleRates: Record<
	RoleKey,
	{ name: string; rate: number; color: string; revenueShare: number }
> = {
	sales: { name: 'Sales / BD', rate: 0, color: '#F59E0B', revenueShare: 0.06 },
	deliveryLead: { name: 'Delivery Lead', rate: 150, color: '#00D4FF', revenueShare: 0.25 },
	aiEngineer: { name: 'AI Engineer', rate: 175, color: '#8B5CF6', revenueShare: 0.35 },
	integrationDev: { name: 'Integration Dev', rate: 140, color: '#10B981', revenueShare: 0.22 },
	solutionsArchitect: { name: 'Solutions Architect', rate: 200, color: '#EC4899', revenueShare: 0.08 },
	operations: { name: 'Operations', rate: 100, color: '#64748B', revenueShare: 0.04 }
};

const roleOrder: RoleKey[] = [
	'sales',
	'deliveryLead',
	'aiEngineer',
	'integrationDev',
	'solutionsArchitect',
	'operations'
];

/** Total hours by role for each engagement archetype (planning model). */
const hoursByEngagement: Record<EngagementKey, Record<RoleKey, number>> = {
	standard: {
		sales: 50,
		deliveryLead: 100,
		aiEngineer: 156,
		integrationDev: 128,
		solutionsArchitect: 32,
		operations: 52
	},
	pilot: {
		sales: 22,
		deliveryLead: 44,
		aiEngineer: 68,
		integrationDev: 56,
		solutionsArchitect: 14,
		operations: 24
	},
	enterprise: {
		sales: 105,
		deliveryLead: 205,
		aiEngineer: 320,
		integrationDev: 265,
		solutionsArchitect: 68,
		operations: 105
	}
};

export type EffortRow = {
	key: RoleKey;
	name: string;
	hours: number;
	rate: number;
	cost: number;
	revenueSharePct: number;
	revenueShareAud: number;
	color: string;
};

export function buildEffortRows(contractValue: number, engagement: EngagementKey): EffortRow[] {
	const hours = hoursByEngagement[engagement];
	return roleOrder.map((key) => {
		const meta = roleRates[key];
		const h = hours[key];
		const cost = h * meta.rate;
		const revenueShareAud = contractValue * meta.revenueShare;
		return {
			key,
			name: meta.name,
			hours: h,
			rate: meta.rate,
			cost,
			revenueSharePct: meta.revenueShare * 100,
			revenueShareAud,
			color: meta.color
		};
	});
}

export function totals(rows: EffortRow[], contractValue: number) {
	const totalHours = rows.reduce((n, r) => n + r.hours, 0);
	const totalCost = rows.reduce((n, r) => n + r.cost, 0);
	const totalRevAlloc = rows.reduce((n, r) => n + r.revenueShareAud, 0);
	const margin = contractValue - totalCost;
	const marginPct = contractValue > 0 ? (margin / contractValue) * 100 : 0;
	return { totalHours, totalCost, totalRevAlloc, margin, marginPct };
}

/** Phase hour weights for stacked bar (relative). */
export const phaseWeights: Record<string, number> = {
	sell: 3,
	discovery: 1,
	design: 1,
	build: 3.5,
	test: 1,
	deploy: 1,
	hypercare: 2,
	handover: 1
};

export function phaseHourSlices(totalHours: number): { id: string; label: string; hours: number }[] {
	const labels: Record<string, string> = {
		sell: 'Sell',
		discovery: 'Discovery',
		design: 'Design',
		build: 'Build',
		test: 'Test',
		deploy: 'Deploy',
		hypercare: 'Hypercare',
		handover: 'Handover'
	};
	const wsum = Object.values(phaseWeights).reduce((a, b) => a + b, 0);
	return Object.entries(phaseWeights).map(([id, w]) => ({
		id,
		label: labels[id] ?? id,
		hours: Math.round((totalHours * w) / wsum)
	}));
}
