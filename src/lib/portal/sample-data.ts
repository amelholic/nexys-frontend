import type {
	PortalActivityFeedItem,
	PortalAgent,
	PortalBoardGraph,
	PortalDashboardKpis,
	PortalEventDetail,
	PortalInboxItem,
	PortalLot,
	PortalMatchEvent,
	PortalExceptionDetail
} from './types';

export const SAMPLE_AGENTS: PortalAgent[] = [
	{
		id: 'inv-intake',
		name: 'Invoice intake',
		owner: 'Finance',
		status: 'live',
		load: 'high',
		lastRunAt: new Date(Date.now() - 120_000).toISOString(),
		description: 'Detects and routes inbound invoices.'
	},
	{
		id: 'po-match',
		name: 'PO matching',
		owner: 'Ops',
		status: 'live',
		load: 'medium',
		lastRunAt: new Date(Date.now() - 1_080_000).toISOString(),
		description: 'Aligns PO lines to receipts and GRNs.'
	},
	{
		id: 'support-triage',
		name: 'Support triage',
		owner: 'CX',
		status: 'pilot',
		load: 'low',
		lastRunAt: new Date(Date.now() - 3_600_000).toISOString(),
		description: 'Classifies and routes support threads.'
	},
	{
		id: 'contract-extract',
		name: 'Contract extraction',
		owner: 'Legal',
		status: 'paused',
		load: 'idle',
		lastRunAt: new Date(Date.now() - 259_200_000).toISOString(),
		description: 'Structured fields from agreements.'
	}
];

export function getAgent(id: string): PortalAgent | undefined {
	return SAMPLE_AGENTS.find((a) => a.id === id);
}

export function sampleDashboardKpis(agents: PortalAgent[]): PortalDashboardKpis {
	const live = agents.filter((a) => a.status === 'live').length;
	return {
		activeAgents: live,
		tasksProcessed24h: 4180,
		openExceptions: 7,
		accuracyRate7d: 98.4
	};
}

export function sampleActivityFeed(agents: PortalAgent[]): PortalActivityFeedItem[] {
	const byId = Object.fromEntries(agents.map((a) => [a.id, a.name]));
	return [
		{
			id: 'act-1',
			at: new Date().toISOString(),
			agentId: 'inv-intake',
			agentName: byId['inv-intake'] ?? 'Agent',
			title: 'Batch cleared',
			detail: 'Batch #482 — 240 items posted',
			tone: 'success'
		},
		{
			id: 'act-2',
			at: new Date(Date.now() - 3_600_000).toISOString(),
			agentId: 'po-match',
			agentName: byId['po-match'] ?? 'Agent',
			title: 'Exception',
			detail: 'Vendor mismatch on PO-9912 — awaiting review',
			tone: 'warning'
		},
		{
			id: 'act-3',
			at: new Date(Date.now() - 86_400_000).toISOString(),
			agentId: 'support-triage',
			agentName: byId['support-triage'] ?? 'Agent',
			title: 'Digest',
			detail: 'Weekly digest generated for CX leads',
			tone: 'info'
		}
	];
}

export function sampleEvents(agentId: string): PortalMatchEvent[] {
	return [
		{
			id: `${agentId}-evt-1`,
			at: new Date(Date.now() - 300_000).toISOString(),
			summary: 'Matched document to vendor ACME · confidence high',
			confidence: 0.94,
			outcome: 'matched'
		},
		{
			id: `${agentId}-evt-2`,
			at: new Date(Date.now() - 3_600_000).toISOString(),
			summary: 'Escalated — missing PO reference',
			confidence: 0.41,
			outcome: 'escalated'
		},
		{
			id: `${agentId}-evt-3`,
			at: new Date(Date.now() - 28_800_000).toISOString(),
			summary: 'Skipped — duplicate hash',
			outcome: 'skipped'
		}
	];
}

export function sampleEventDetail(agentId: string, eventId: string): PortalEventDetail | null {
	const ev = sampleEvents(agentId).find((e) => e.id === eventId);
	if (!ev) return null;
	return {
		...ev,
		agentId,
		history: [
			{ at: ev.at, label: 'Event recorded' },
			{ at: new Date(Date.now() - 120_000).toISOString(), label: 'Policy evaluation complete' }
		]
	};
}

export function sampleInboxItemsForAgent(agentId: string, agents: PortalAgent[]): PortalInboxItem[] {
	return sampleInboxItems(agents).filter((i) => i.agentId === agentId);
}

export function sampleExceptionDetailForAgent(
	agentId: string,
	exceptionId: string,
	agents: PortalAgent[]
): PortalExceptionDetail | null {
	const detail = sampleExceptionDetail(exceptionId, agents);
	if (!detail || detail.agentId !== agentId) return null;
	return detail;
}

export function sampleLots(agentId: string): PortalLot[] {
	return [
		{
			id: `${agentId}-lot-a`,
			label: `Lot A · ${agentId}`,
			itemCount: 42,
			status: 'in_review',
			updatedAt: new Date(Date.now() - 7_200_000).toISOString()
		},
		{
			id: `${agentId}-lot-b`,
			label: `Lot B · staging`,
			itemCount: 18,
			status: 'open',
			updatedAt: new Date(Date.now() - 86_400_000).toISOString()
		}
	];
}

export function sampleBoardGraph(agentId: string): PortalBoardGraph {
	// Per-agent topology template (coordinates are layout hints, not geo).
	const offset = agentId.length % 3;
	return {
		nodes: [
			{ id: 'n1', label: 'Ingress', kind: 'source', status: 'ok', x: 12 + offset, y: 45 },
			{ id: 'n2', label: 'Classify', kind: 'transform', status: 'ok', x: 38 + offset, y: 30 },
			{ id: 'n3', label: 'Policy', kind: 'decision', status: 'degraded', x: 62 + offset, y: 55 },
			{ id: 'n4', label: 'Output', kind: 'sink', status: 'ok', x: 88 + offset, y: 40 }
		],
		edges: [
			{ from: 'n1', to: 'n2' },
			{ from: 'n2', to: 'n3' },
			{ from: 'n3', to: 'n4' }
		]
	};
}

export function sampleInboxItems(agents: PortalAgent[]): PortalInboxItem[] {
	return [
		{
			id: 'exc-1001',
			agentId: 'po-match',
			agentName: 'PO matching',
			title: 'Vendor mismatch',
			subtitle: 'PO-9912 · expected Vendor A, saw Vendor B',
			severity: 'high',
			status: 'open',
			createdAt: new Date(Date.now() - 1_800_000).toISOString(),
			confidence: 0.62
		},
		{
			id: 'exc-1002',
			agentId: 'inv-intake',
			agentName: 'Invoice intake',
			title: 'Low confidence line items',
			subtitle: 'INV-7781 · 3 rows below threshold',
			severity: 'medium',
			status: 'open',
			createdAt: new Date(Date.now() - 6_000_000).toISOString(),
			confidence: 0.55
		},
		{
			id: 'exc-1003',
			agentId: 'support-triage',
			agentName: 'Support triage',
			title: 'Ambiguous intent',
			subtitle: 'Thread #4412 · needs human label',
			severity: 'low',
			status: 'snoozed',
			createdAt: new Date(Date.now() - 86_400_000).toISOString()
		}
	];
}

export function sampleExceptionDetail(id: string, agents: PortalAgent[]): PortalExceptionDetail | null {
	const row = sampleInboxItems(agents).find((i) => i.id === id);
	if (!row) return null;
	return {
		...row,
		history: [
			{ at: row.createdAt, label: 'Opened by detector' },
			{ at: new Date(Date.now() - 900_000).toISOString(), label: 'Assigned to queue' }
		]
	};
}
