/** Static template content for Outcome Decomposition brief */
export const outcomeDecomposition = {
	client: 'Client Name',
	date: '2026-02-19',
	version: '1.0',
	preparedBy: 'AxTech',
	businessOutcome: {
		statement: 'Reduce operational costs by 25% while improving customer satisfaction',
		timeframe: '12 months',
		owner: 'COO',
		currentState: '$2.4M annual operational spend, NPS of 42',
		targetState: '$1.8M annual operational spend, NPS of 55',
	},
	strategicGoals: [
		{
			id: 'SG-1',
			name: 'Reduce manual processing costs',
			contribution: '60% of outcome',
			owner: 'Operations Director',
			tacticalGoals: [
				{
					id: 'TG-1.1',
					name: 'Automate invoice processing',
					metric: 'Processing cost per invoice',
					target: 'Reduce from $12 to $3',
					agentGoals: [
						{ id: 'AG-1.1.1', name: 'Extract invoice data automatically', type: 'Constrained', priority: 'High' },
						{ id: 'AG-1.1.2', name: 'Match invoices to POs', type: 'Single', priority: 'High' },
						{ id: 'AG-1.1.3', name: 'Route exceptions intelligently', type: 'Single', priority: 'Medium' },
					],
				},
				{
					id: 'TG-1.2',
					name: 'Automate expense approvals',
					metric: 'Time to approval',
					target: 'Reduce from 5 days to same-day',
					agentGoals: [
						{ id: 'AG-1.2.1', name: 'Validate expenses against policy', type: 'Constrained', priority: 'High' },
						{ id: 'AG-1.2.2', name: 'Auto-approve compliant expenses', type: 'Single', priority: 'Medium' },
					],
				},
			],
		},
		{
			id: 'SG-2',
			name: 'Improve response times',
			contribution: '25% of outcome',
			owner: 'Customer Service Director',
			tacticalGoals: [
				{
					id: 'TG-2.1',
					name: 'Faster ticket resolution',
					metric: 'Average resolution time',
					target: 'Reduce from 48hrs to 4hrs',
					agentGoals: [
						{ id: 'AG-2.1.1', name: 'Classify and route tickets', type: 'Constrained', priority: 'High' },
						{ id: 'AG-2.1.2', name: 'Draft initial responses', type: 'Single', priority: 'Medium' },
						{ id: 'AG-2.1.3', name: 'Escalate complex issues', type: 'Constrained', priority: 'Medium' },
					],
				},
			],
		},
		{
			id: 'SG-3',
			name: 'Reduce compliance overhead',
			contribution: '15% of outcome',
			owner: 'Compliance Manager',
			tacticalGoals: [
				{
					id: 'TG-3.1',
					name: 'Automate compliance checking',
					metric: 'Hours spent on compliance',
					target: 'Reduce from 40hrs/week to 8hrs/week',
					agentGoals: [
						{ id: 'AG-3.1.1', name: 'Monitor regulatory changes', type: 'Single', priority: 'Low' },
						{ id: 'AG-3.1.2', name: 'Check documents against rules', type: 'Constrained', priority: 'High' },
					],
				},
			],
		},
	],
	priorityMatrix: [
		{ id: 'AG-1.1.1', name: 'Extract invoice data', impact: 'High', feasibility: 'High', priority: 1 },
		{ id: 'AG-1.1.2', name: 'Match invoices to POs', impact: 'High', feasibility: 'High', priority: 2 },
		{ id: 'AG-2.1.1', name: 'Classify tickets', impact: 'High', feasibility: 'Medium', priority: 3 },
		{ id: 'AG-1.2.1', name: 'Validate expenses', impact: 'Medium', feasibility: 'High', priority: 4 },
		{ id: 'AG-3.1.2', name: 'Check compliance', impact: 'Medium', feasibility: 'Medium', priority: 5 },
		{ id: 'AG-2.1.2', name: 'Draft responses', impact: 'Medium', feasibility: 'Medium', priority: 6 },
	],
	phases: [
		{
			phase: 1,
			name: 'Quick Wins',
			agents: ['AG-1.1.1', 'AG-1.1.2'],
			duration: '4 weeks',
			value: '$180K annual savings',
		},
		{
			phase: 2,
			name: 'Core Automation',
			agents: ['AG-2.1.1', 'AG-1.2.1', 'AG-1.1.3'],
			duration: '8 weeks',
			value: '$320K annual savings',
		},
		{
			phase: 3,
			name: 'Extended Coverage',
			agents: ['AG-3.1.2', 'AG-2.1.2', 'AG-1.2.2'],
			duration: '6 weeks',
			value: '$100K annual savings',
		},
	],
} as const;
