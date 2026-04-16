/**
 * Client portal API contracts (wire to backend when ready).
 * Shapes mirror the brief portal narrative + per-agent / unified inbox plan.
 */

export type AgentStatus = 'live' | 'pilot' | 'paused';

export type PortalAgent = {
	id: string;
	name: string;
	owner: string;
	status: AgentStatus;
	load: 'high' | 'medium' | 'low' | 'idle';
	lastRunAt: string; // ISO
	description?: string;
};

export type PortalDashboardKpis = {
	activeAgents: number;
	tasksProcessed24h: number;
	openExceptions: number;
	accuracyRate7d: number; // 0–100
};

export type PortalActivityFeedItem = {
	id: string;
	at: string; // ISO
	agentId: string;
	agentName: string;
	title: string;
	detail: string;
	tone: 'info' | 'warning' | 'success';
};

export type PortalMatchEvent = {
	id: string;
	at: string;
	summary: string;
	confidence?: number;
	outcome: 'matched' | 'escalated' | 'skipped';
	meta?: Record<string, string>;
};

/** Single event (match) detail — same pattern as `PortalExceptionDetail`. */
export type PortalEventDetail = PortalMatchEvent & {
	agentId: string;
	history: { at: string; label: string }[];
};

export type PortalLot = {
	id: string;
	label: string;
	itemCount: number;
	status: 'open' | 'in_review' | 'closed';
	updatedAt: string;
};

export type PortalBoardNode = {
	id: string;
	label: string;
	kind: 'source' | 'transform' | 'sink' | 'decision';
	status: 'ok' | 'degraded' | 'idle';
	x: number; // 0–100 virtual coords for layout
	y: number;
};

export type PortalBoardEdge = {
	from: string;
	to: string;
};

export type PortalBoardGraph = {
	nodes: PortalBoardNode[];
	edges: PortalBoardEdge[];
};

export type PortalInboxItem = {
	id: string;
	agentId: string;
	agentName: string;
	title: string;
	subtitle: string;
	severity: 'low' | 'medium' | 'high';
	status: 'open' | 'snoozed' | 'resolved';
	createdAt: string;
	confidence?: number;
};

export type PortalExceptionDetail = PortalInboxItem & {
	history: { at: string; label: string }[];
};
