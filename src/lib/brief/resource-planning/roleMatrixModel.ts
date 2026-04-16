export type RaciLevel = 'OWNER' | 'CONTRIBUTOR' | 'REVIEWER' | 'INFORMED' | null;

export type PhaseCell = {
	level: RaciLevel;
	hours: number | null;
	deliverables: string[];
};

export type RoleRow = {
	id: string;
	name: string;
	color: string;
	phases: Record<string, PhaseCell>;
};

export type PhaseCol = {
	id: string;
	name: string;
	duration: string;
	/** Relative width weight for column sizing (support ongoing = wider label) */
	weeks: number | null;
};

export const matrixPhases: PhaseCol[] = [
	{ id: 'sell', name: 'Sell', duration: '2–4 wks', weeks: 3 },
	{ id: 'discovery', name: 'Discovery', duration: '1 wk', weeks: 1 },
	{ id: 'design', name: 'Design', duration: '1 wk', weeks: 1 },
	{ id: 'build', name: 'Build', duration: '3–4 wks', weeks: 3.5 },
	{ id: 'test', name: 'Test', duration: '1 wk', weeks: 1 },
	{ id: 'deploy', name: 'Deploy', duration: '1 wk', weeks: 1 },
	{ id: 'hypercare', name: 'Hypercare', duration: '2 wks', weeks: 2 },
	{ id: 'handover', name: 'Handover', duration: '1 wk', weeks: 1 },
	{ id: 'support', name: 'Support', duration: 'Ongoing', weeks: null }
];

export const matrixRoles: RoleRow[] = [
	{
		id: 'sales',
		name: 'Sales / BD',
		color: '#F59E0B',
		phases: {
			sell: { level: 'OWNER', hours: 40, deliverables: ['Qualified lead', 'Pricing', 'Signed contract'] },
			discovery: { level: 'INFORMED', hours: 2, deliverables: [] },
			design: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['Commercial alignment'] },
			build: { level: null, hours: 0, deliverables: [] },
			test: { level: null, hours: 0, deliverables: [] },
			deploy: { level: null, hours: 0, deliverables: [] },
			hypercare: { level: 'CONTRIBUTOR', hours: 2, deliverables: ['Client satisfaction check'] },
			handover: { level: 'CONTRIBUTOR', hours: 2, deliverables: ['Upsell opportunities'] },
			support: { level: null, hours: 0, deliverables: [] }
		}
	},
	{
		id: 'delivery-lead',
		name: 'Delivery Lead',
		color: '#00D4FF',
		phases: {
			sell: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Proposal input', 'Scope validation'] },
			discovery: { level: 'OWNER', hours: 20, deliverables: ['Discovery notes', 'Opportunity assessment'] },
			design: { level: 'OWNER', hours: 16, deliverables: ['Outcome decomposition', 'Project plan'] },
			build: { level: 'CONTRIBUTOR', hours: 16, deliverables: ['Weekly status', 'Client comms'] },
			test: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['UAT coordination'] },
			deploy: { level: 'OWNER', hours: 12, deliverables: ['Go-live checklist', 'Cutover plan'] },
			hypercare: { level: 'OWNER', hours: 16, deliverables: ['Issue triage', 'Client updates'] },
			handover: { level: 'OWNER', hours: 16, deliverables: ['Handover pack', 'Training guide'] },
			support: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['Escalation path'] }
		}
	},
	{
		id: 'ai-engineer',
		name: 'AI Engineer',
		color: '#8B5CF6',
		phases: {
			sell: { level: null, hours: 0, deliverables: [] },
			discovery: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Sample document review', 'Feasibility input'] },
			design: { level: 'CONTRIBUTOR', hours: 16, deliverables: ['Prompt cards draft', 'Tool spec input'] },
			build: { level: 'OWNER', hours: 80, deliverables: ['Working agent', 'Prompt cards', 'Tool specifications'] },
			test: { level: 'OWNER', hours: 24, deliverables: ['Evaluation suite', 'Test results'] },
			deploy: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Production validation'] },
			hypercare: { level: 'CONTRIBUTOR', hours: 12, deliverables: ['Bug fixes', 'Prompt tuning'] },
			handover: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Technical documentation'] },
			support: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Incident support'] }
		}
	},
	{
		id: 'integration-dev',
		name: 'Integration Developer',
		color: '#10B981',
		phases: {
			sell: { level: null, hours: 0, deliverables: [] },
			discovery: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['System access assessment'] },
			design: { level: 'CONTRIBUTOR', hours: 12, deliverables: ['Architecture blueprint input'] },
			build: { level: 'OWNER', hours: 60, deliverables: ['Integrations', 'Exception queue UI', 'Dashboard'] },
			test: { level: 'CONTRIBUTOR', hours: 16, deliverables: ['Integration testing'] },
			deploy: { level: 'OWNER', hours: 16, deliverables: ['Production deployment', 'Runbook'] },
			hypercare: { level: 'CONTRIBUTOR', hours: 12, deliverables: ['Integration fixes'] },
			handover: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Ops documentation'] },
			support: { level: null, hours: 0, deliverables: [] }
		}
	},
	{
		id: 'solutions-architect',
		name: 'Solutions Architect',
		color: '#EC4899',
		phases: {
			sell: { level: null, hours: 0, deliverables: [] },
			discovery: { level: null, hours: 0, deliverables: [] },
			design: { level: 'OWNER', hours: 16, deliverables: ['Architecture blueprint', 'Design approval'] },
			build: { level: 'REVIEWER', hours: 8, deliverables: ['Code review', 'Architecture guidance'] },
			test: { level: null, hours: 0, deliverables: [] },
			deploy: { level: null, hours: 0, deliverables: [] },
			hypercare: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['Architecture review'] },
			handover: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['Knowledge transfer'] },
			support: { level: null, hours: 0, deliverables: [] }
		}
	},
	{
		id: 'operations',
		name: 'Operations / Support',
		color: '#64748B',
		phases: {
			sell: { level: null, hours: 0, deliverables: [] },
			discovery: { level: null, hours: 0, deliverables: [] },
			design: { level: null, hours: 0, deliverables: [] },
			build: { level: null, hours: 0, deliverables: [] },
			test: { level: null, hours: 0, deliverables: [] },
			deploy: { level: 'CONTRIBUTOR', hours: 4, deliverables: ['Monitoring setup'] },
			hypercare: { level: 'OWNER', hours: 40, deliverables: ['Daily monitoring', 'Incident response'] },
			handover: { level: 'CONTRIBUTOR', hours: 8, deliverables: ['Support transition'] },
			support: {
				level: 'OWNER',
				hours: null,
				deliverables: ['Ongoing monitoring', 'Ticket resolution', 'Monthly reports']
			}
		}
	}
];

export function totalHoursForRole(role: RoleRow): number {
	let t = 0;
	for (const p of matrixPhases) {
		const h = role.phases[p.id]?.hours;
		if (typeof h === 'number' && !Number.isNaN(h)) t += h;
	}
	return t;
}

export function totalHoursMatrix(): number {
	return matrixRoles.reduce((n, r) => n + totalHoursForRole(r), 0);
}
