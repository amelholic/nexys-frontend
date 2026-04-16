import { briefColors as co } from '$lib/brief/briefColors';

export type Phase = {
	id: number;
	name: string;
	duration: string;
	color: string;
	owners: string[];
	activities: { task: string; owner: string }[];
	outputs: string[];
	handoff: string | null;
};

export const deliveryPhases: Phase[] = [
	{
		id: 1,
		name: 'Sell',
		duration: '2-4 wks',
		color: co.pink,
		owners: ['Sales', 'Delivery Lead'],
		activities: [
			{ task: 'Qualify opportunity', owner: 'Sales' },
			{ task: 'Discovery call', owner: 'Sales + DL' },
			{ task: 'Solution shaping', owner: 'Delivery Lead' },
			{ task: 'Proposal development', owner: 'Delivery Lead' },
			{ task: 'Pricing', owner: 'Sales' },
			{ task: 'Negotiation & close', owner: 'Sales' }
		],
		outputs: ['Proposal', 'Pricing', 'Signed Contract'],
		handoff: 'Contract, proposal, discovery notes, client contacts'
	},
	{
		id: 2,
		name: 'Discovery',
		duration: '1 wk',
		color: co.orange,
		owners: ['Delivery Lead'],
		activities: [
			{ task: 'Project kickoff', owner: 'Delivery Lead' },
			{ task: 'Process walkthrough', owner: 'Delivery Lead' },
			{ task: 'Decision rules documentation', owner: 'Delivery Lead' },
			{ task: 'System inventory', owner: 'Integration Dev' },
			{ task: 'Data sampling', owner: 'AI Engineer' },
			{ task: 'Success criteria definition', owner: 'Delivery Lead' }
		],
		outputs: ['Kickoff Deck', 'Discovery Notes', 'Opportunity Assessment', 'Sample Documents'],
		handoff: 'Discovery notes, samples, system access, success criteria'
	},
	{
		id: 3,
		name: 'Design',
		duration: '1 wk',
		color: co.purple,
		owners: ['Delivery Lead', 'Solutions Architect'],
		activities: [
			{ task: 'Outcome decomposition', owner: 'Delivery Lead' },
			{ task: 'Architecture design', owner: 'Solutions Arch' },
			{ task: 'Prompt design (draft)', owner: 'AI Engineer' },
			{ task: 'Integration design', owner: 'Integration Dev' },
			{ task: 'Tool specifications', owner: 'AI Engineer' },
			{ task: 'Client design approval', owner: 'Delivery Lead' }
		],
		outputs: ['Outcome Decomposition', 'Architecture Blueprint', 'Prompt Cards (draft)', 'Tool Specs'],
		handoff: 'Approved designs, specifications, access credentials'
	},
	{
		id: 4,
		name: 'Build',
		duration: '3-4 wks',
		color: co.cyan,
		owners: ['AI Engineer', 'Integration Dev'],
		activities: [
			{ task: 'Prompt development', owner: 'AI Engineer' },
			{ task: 'Agent orchestration', owner: 'AI Engineer' },
			{ task: 'Integration development', owner: 'Integration Dev' },
			{ task: 'Exception queue UI', owner: 'Integration Dev' },
			{ task: 'Evaluation suite', owner: 'AI Engineer' },
			{ task: 'Code review', owner: 'Solutions Arch' }
		],
		outputs: ['Working Agent', 'Prompt Cards (final)', 'Integrations', 'Evaluation Suite', 'Weekly Status'],
		handoff: 'Deployed code (staging), evaluation suite, test data'
	},
	{
		id: 5,
		name: 'Test',
		duration: '1 wk',
		color: co.green,
		owners: ['AI Engineer'],
		activities: [
			{ task: 'Run evaluation suite', owner: 'AI Engineer' },
			{ task: 'Edge case testing', owner: 'AI Engineer' },
			{ task: 'Integration testing', owner: 'Integration Dev' },
			{ task: 'Performance testing', owner: 'Integration Dev' },
			{ task: 'UAT execution', owner: 'Client + DL' },
			{ task: 'Bug fixes', owner: 'AI Eng + Int Dev' }
		],
		outputs: ['Evaluation Results', 'UAT Sign-off', 'Test Summary'],
		handoff: 'All tests passing, UAT sign-off, known issues documented'
	},
	{
		id: 6,
		name: 'Deploy',
		duration: '1 wk',
		color: co.cyan,
		owners: ['Integration Dev', 'Delivery Lead'],
		activities: [
			{ task: 'Go-live checklist', owner: 'Delivery Lead' },
			{ task: 'Production setup', owner: 'Integration Dev' },
			{ task: 'Monitoring & alerting', owner: 'Integration Dev' },
			{ task: 'Go/No-Go decision', owner: 'Delivery Lead' },
			{ task: 'Deployment execution', owner: 'Integration Dev' },
			{ task: 'First transaction verify', owner: 'AI Engineer' }
		],
		outputs: ['Go-Live Checklist', 'Production Environment', 'Agent Live'],
		handoff: 'Production access, runbook, monitoring, escalation contacts'
	},
	{
		id: 7,
		name: 'Hypercare',
		duration: '2 wks',
		color: co.orange,
		owners: ['Delivery Lead', 'Ops'],
		activities: [
			{ task: 'Daily monitoring', owner: 'Ops' },
			{ task: 'Issue triage & resolution', owner: 'All' },
			{ task: 'Daily client check-ins', owner: 'Delivery Lead' },
			{ task: 'Performance tuning', owner: 'AI Engineer' },
			{ task: 'Metrics tracking', owner: 'Delivery Lead' },
			{ task: 'Hypercare exit decision', owner: 'Delivery Lead' }
		],
		outputs: ['Daily Reports', 'Issues Resolved', 'Hypercare Report', 'Metrics Dashboard'],
		handoff: 'Stable system, metrics meeting targets, issues resolved'
	},
	{
		id: 8,
		name: 'Handover',
		duration: '1 wk',
		color: co.purple,
		owners: ['Delivery Lead'],
		activities: [
			{ task: 'Documentation finalization', owner: 'AI Eng + Int Dev' },
			{ task: 'Runbook completion', owner: 'Integration Dev' },
			{ task: 'User training', owner: 'Delivery Lead' },
			{ task: 'Admin training', owner: 'Delivery Lead' },
			{ task: 'Knowledge transfer', owner: 'Solutions Arch' },
			{ task: 'Project sign-off', owner: 'Delivery Lead' }
		],
		outputs: ['Runbook', 'Training Guide', 'Handover Pack', 'Retrospective', 'Sign-off'],
		handoff: 'Handover pack, runbook, support contract, escalation paths'
	},
	{
		id: 9,
		name: 'Support',
		duration: 'Ongoing',
		color: co.green,
		owners: ['Ops'],
		activities: [
			{ task: 'Daily monitoring', owner: 'Ops' },
			{ task: 'L1 issue resolution', owner: 'Ops' },
			{ task: 'L2 escalation', owner: 'AI Engineer' },
			{ task: 'Monthly reporting', owner: 'Ops + DL' },
			{ task: 'Quarterly reviews', owner: 'Delivery Lead' },
			{ task: 'Enhancement requests', owner: 'Delivery Lead' }
		],
		outputs: ['Monthly Reports', 'Resolved Tickets', 'QBR Presentations'],
		handoff: null
	}
];

export const deliveryRoles = [
	{ name: 'Sales', abbrev: 'S', color: co.pink },
	{ name: 'Delivery Lead', abbrev: 'DL', color: co.orange },
	{ name: 'AI Engineer', abbrev: 'AI', color: co.cyan },
	{ name: 'Integration Dev', abbrev: 'ID', color: co.purple },
	{ name: 'Solutions Architect', abbrev: 'SA', color: co.slate },
	{ name: 'Ops', abbrev: 'OP', color: co.green }
] as const;

export const roleOutputCards = [
	{
		role: 'Delivery Lead',
		color: co.orange,
		outputs: [
			'Proposal',
			'Kickoff Deck',
			'Discovery Notes',
			'Opportunity Assessment',
			'Outcome Decomposition',
			'Go-Live Checklist',
			'Weekly Status',
			'Handover Pack',
			'Training Guide'
		]
	},
	{
		role: 'AI Engineer',
		color: co.cyan,
		outputs: [
			'Sample Documents',
			'Prompt Cards',
			'Tool Specifications',
			'Working Agent',
			'Evaluation Suite',
			'Test Results'
		]
	},
	{
		role: 'Integration Dev',
		color: co.purple,
		outputs: [
			'System Access',
			'Architecture Blueprint',
			'Integrations',
			'Exception Queue UI',
			'Dashboard',
			'Runbook',
			'Production Deployment'
		]
	},
	{
		role: 'Solutions Architect',
		color: co.slate,
		outputs: [
			'Architecture Blueprint',
			'Design Approval',
			'Code Review',
			'Security Review',
			'Knowledge Transfer'
		]
	},
	{
		role: 'Sales',
		color: co.pink,
		outputs: ['Qualified Leads', 'Pricing', 'Signed Contracts']
	},
	{
		role: 'Ops',
		color: co.green,
		outputs: ['Daily Monitoring', 'Resolved Tickets', 'Monthly Reports']
	}
] as const;
