export type FlowNodeKind = 'activity' | 'decision' | 'milestone';

export type FlowNode = {
	id: string;
	label: string;
	sub?: string;
	/** Brief Flow slug (becomes `{base}/brief/{slug}` in UI). */
	slug?: string;
	kind?: FlowNodeKind;
};

export type FlowPhase = {
	id: string;
	title: string;
	owner: string;
	color: string;
	nodes: FlowNode[][];
	notes?: string[];
};

export const engagementPhases: FlowPhase[] = [
	{
		id: 'sell',
		title: 'Phase 1: Sell',
		owner: 'Sales / BD',
		color: '#F59E0B',
		nodes: [
			[
				{ id: 'lead', label: 'Lead received', kind: 'activity' },
				{ id: 'qual', label: 'Qualification', sub: 'Scorecard', slug: 'qualification-scorecard', kind: 'activity' },
				{ id: 'prop', label: 'Proposal prepared', slug: 'client-proposal', kind: 'activity' },
				{ id: 'contract', label: 'Contract signed', slug: 'proposal-template', kind: 'milestone' }
			]
		],
		notes: ['Inbound / referral', 'Score ≥70?', 'Delivery lead review', 'Deposit']
	},
	{
		id: 'discovery',
		title: 'Phase 2: Discovery',
		owner: 'Delivery Lead',
		color: '#00D4FF',
		nodes: [
			[
				{ id: 'kick', label: 'Kickoff call', slug: 'project-kickoff', kind: 'activity' },
				{ id: 'sess', label: 'Discovery session', slug: 'discovery-session-guide', kind: 'activity' },
				{ id: 'opp', label: 'Opportunity assessment', slug: 'opportunity-assessment', kind: 'activity' },
				{ id: 'brief', label: 'Design brief', slug: 'outcome-decomposition', kind: 'activity' }
			]
		],
		notes: ['AI engineer present', 'Feasibility gate']
	},
	{
		id: 'design',
		title: 'Phase 3: Design',
		owner: 'Solutions Architect',
		color: '#EC4899',
		nodes: [
			[
				{ id: 'decomp', label: 'Outcome decompose', slug: 'outcome-decomposition', kind: 'activity' },
				{ id: 'arch', label: 'Architecture blueprint', slug: 'architecture-blueprint', kind: 'activity' },
				{ id: 'adc', label: 'Agent design card', slug: 'agent-design-card', kind: 'activity' },
				{ id: 'sign', label: 'Design sign-off', kind: 'milestone' }
			]
		],
		notes: ['Integration input', 'AI engineer input']
	},
	{
		id: 'build',
		title: 'Phase 4: Build',
		owner: 'AI Engineer + Integration Dev',
		color: '#8B5CF6',
		nodes: [
			[
				{ id: 'pc', label: 'Prompt cards', slug: 'prompt-card', kind: 'activity' },
				{ id: 'ts', label: 'Tool specs', slug: 'tool-specification', kind: 'activity' },
				{ id: 'int', label: 'Connectors & UI', slug: 'portal-dashboard', kind: 'activity' },
				{ id: 'agent', label: 'Working agent', slug: 'evaluation-suite', kind: 'milestone' }
			],
			[{ id: 'wsr', label: 'Weekly status', slug: 'weekly-status-report', kind: 'activity', sub: 'Delivery Lead' }]
		]
	},
	{
		id: 'test',
		title: 'Phase 5: Test',
		owner: 'AI Engineer',
		color: '#8B5CF6',
		nodes: [
			[
				{ id: 'ev', label: 'Evaluation suite', slug: 'evaluation-suite', kind: 'activity' },
				{ id: 'runs', label: 'Test runs', kind: 'activity' },
				{ id: 'uat', label: 'UAT', slug: 'qa-checklist', kind: 'activity' },
				{ id: 'qa', label: 'QA pass', kind: 'milestone' }
			]
		],
		notes: ['Client sign-off']
	},
	{
		id: 'deploy',
		title: 'Phase 6: Deploy',
		owner: 'Integration Developer',
		color: '#10B981',
		nodes: [
			[
				{ id: 'rb', label: 'Runbook ready', slug: 'runbook', kind: 'activity' },
				{ id: 'stg', label: 'Staging deploy', kind: 'activity' },
				{ id: 'prod', label: 'Production deploy', kind: 'activity' },
				{ id: 'gl', label: 'Go-live checklist', slug: 'go-live-checklist', kind: 'milestone' }
			]
		]
	},
	{
		id: 'hypercare',
		title: 'Phase 7: Hypercare',
		owner: 'Operations',
		color: '#64748B',
		nodes: [
			[
				{ id: 'mon', label: 'Daily monitoring', kind: 'activity' },
				{ id: 'inc', label: 'Incident response', slug: 'runbook', kind: 'activity' },
				{ id: 'tune', label: 'Tuning & fixes', kind: 'activity' }
			]
		],
		notes: ['AI + Integration on-call']
	},
	{
		id: 'handover',
		title: 'Phase 8: Handover',
		owner: 'Delivery Lead',
		color: '#00D4FF',
		nodes: [
			[
				{ id: 'hp', label: 'Handover pack', slug: 'handover-pack', kind: 'activity' },
				{ id: 'tr', label: 'Training sessions', slug: 'training-guide', kind: 'activity' },
				{ id: 'kt', label: 'Knowledge transfer', kind: 'activity' },
				{ id: 'retro', label: 'Retro', slug: 'retrospective', kind: 'activity' }
			]
		],
		notes: ['Sales upsell check-in']
	},
	{
		id: 'support',
		title: 'Phase 9: Support (ongoing)',
		owner: 'Operations',
		color: '#64748B',
		nodes: [
			[
				{ id: 'om', label: 'Ongoing monitoring', kind: 'activity' },
				{ id: 'mr', label: 'Monthly reports', slug: 'monthly-report', kind: 'activity' },
				{ id: 'qbr', label: 'QBR', slug: 'qbr', kind: 'activity' }
			]
		],
		notes: ['Continue / expand loop']
	}
];
