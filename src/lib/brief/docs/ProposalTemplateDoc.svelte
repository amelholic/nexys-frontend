<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: 'AUD',
			minimumFractionDigits: 0,
		}).format(amount);
	}

	const proposal = {
		client: 'Acme Logistics',
		project: 'Invoice Processing Automation',
		date: '19 February 2026',
		validUntil: '19 March 2026',
		version: '1.0',
		preparedFor: 'Sarah Chen, CFO',
		preparedBy: 'AI Flow',
		executiveSummary: `Following our discovery session on 12 February, we propose building an AI-powered invoice processing system that will reduce your invoice handling time by 70% and eliminate manual data entry errors.

Based on your current volume of 2,000 invoices per month and average processing cost of $12 per invoice, this solution will deliver approximately $180,000 in annual savings while freeing your finance team to focus on higher-value work.`,
		currentState: {
			description:
				'Your finance team currently processes invoices manually, involving data entry, PO matching, and approval routing.',
			painPoints: [
				'Manual data entry takes 15 minutes per invoice',
				'Error rate of 8% requires rework and delays',
				'40% of invoices need exception handling',
				'Staff time consumed by low-value repetitive work',
			],
			metrics: [
				{ label: 'Monthly volume', value: '2,000 invoices' },
				{ label: 'Processing time', value: '15 min/invoice' },
				{ label: 'Cost per invoice', value: '$12' },
				{ label: 'Error rate', value: '8%' },
			],
		},
		proposedSolution: {
			description:
				'An AI agent that automatically extracts invoice data, matches to purchase orders, validates amounts, and routes for approval or exception handling.',
			capabilities: [
				{
					name: 'Document extraction',
					desc: 'Automatically extract vendor, amounts, line items, and dates from PDF/image invoices',
				},
				{ name: 'PO matching', desc: 'Match invoices to purchase orders and flag discrepancies' },
				{
					name: 'Validation',
					desc: 'Check amounts, tax calculations, and vendor details against master data',
				},
				{
					name: 'Smart routing',
					desc: 'Route compliant invoices for auto-approval, exceptions to appropriate handlers',
				},
				{ name: 'Audit trail', desc: 'Full logging of all actions for compliance and reporting' },
			],
			outcomes: [
				{ metric: 'Processing time', from: '15 min', to: '< 2 min', improvement: '87% reduction' },
				{ metric: 'Cost per invoice', from: '$12', to: '$3', improvement: '75% reduction' },
				{ metric: 'Error rate', from: '8%', to: '< 1%', improvement: '87% reduction' },
				{ metric: 'Auto-approval rate', from: '0%', to: '> 70%', improvement: 'New capability' },
			],
		},
		approach: {
			phases: [
				{
					name: 'Discovery & Design',
					duration: '2 weeks',
					activities: [
						'Document current invoice workflows in detail',
						'Gather sample invoices across all formats',
						'Define success criteria and edge cases',
						'Design agent architecture and integration points',
						'Produce Agent Design Cards and evaluation criteria',
					],
					deliverables: ['Agent Design Card', 'Architecture Blueprint', 'Evaluation Suite specification'],
				},
				{
					name: 'Build & Test',
					duration: '6 weeks',
					activities: [
						'Build document extraction pipeline',
						'Develop PO matching and validation logic',
						'Integrate with SAP and email systems',
						'Create exception handling workflows',
						'Rigorous testing against golden dataset',
					],
					deliverables: ['Working agent in staging', 'Test results report', 'Integration documentation'],
				},
				{
					name: 'Deploy & Stabilise',
					duration: '2 weeks',
					activities: [
						'Shadow mode deployment (agent suggests, humans verify)',
						'Performance tuning and edge case handling',
						'User training and documentation',
						'Gradual transition to production',
						'Go-live sign-off',
					],
					deliverables: ['Production deployment', 'Training materials', 'Handover documentation'],
				},
			],
		},
		investment: {
			phases: [
				{ phase: 'Discovery & Design', amount: 12000 },
				{ phase: 'Build & Test', amount: 48000 },
				{ phase: 'Deploy & Stabilise', amount: 15000 },
			],
			total: 75000,
			monthly: 3500,
			paymentTerms: '30% on commencement, 40% at build completion, 30% at go-live',
			notes: [
				'All amounts exclude GST',
				'Support retainer is optional but recommended',
				'Scope changes may affect pricing',
			],
		},
		timeline: {
			startDate: 'March 2026',
			endDate: 'May 2026',
			totalWeeks: 10,
		},
		assumptions: [
			'Access to SAP system via existing API',
			'Sample invoices provided within first week',
			'Client stakeholders available for weekly check-ins',
			'No changes to core ERP during build phase',
		],
		risks: [
			{
				risk: 'Invoice format variability',
				mitigation: 'Golden dataset includes edge cases, agent designed for flexibility',
			},
			{ risk: 'SAP integration complexity', mitigation: 'Technical spike in week 1 to validate approach' },
			{ risk: 'User adoption', mitigation: 'Shadow mode allows gradual transition, training included' },
		],
		team: [
			{ role: 'Project Lead', name: '[Name]', responsibility: 'Overall delivery, client relationship' },
			{ role: 'AI Architect', name: '[Name]', responsibility: 'Agent design, prompt engineering' },
			{ role: 'Integration Engineer', name: '[Name]', responsibility: 'SAP and system integration' },
		],
		nextSteps: [
			{ action: 'Review and approve proposal', owner: 'Client', timing: 'By 26 Feb' },
			{ action: 'Sign statement of work', owner: 'Both parties', timing: 'By 1 Mar' },
			{ action: 'Kick-off meeting', owner: 'AI Flow', timing: 'Week of 3 Mar' },
			{ action: 'Begin Discovery phase', owner: 'AI Flow', timing: '3 Mar' },
		],
	};

	const phaseColors = [c.cyan, c.purple, c.pink] as const;

	const keyNumbers = [
		{ label: 'Investment', value: formatCurrency(proposal.investment.total), color: c.purple },
		{ label: 'Timeline', value: `${proposal.timeline.totalWeeks} weeks`, color: c.cyan },
		{ label: 'Annual Savings', value: '$180,000', color: c.pink },
		{ label: 'ROI', value: '< 6 months', color: c.orange },
	];
</script>

{#snippet sectionTitle(title: string, color: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; margin-top: 28px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 11px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<!-- Cover -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); min-height: 600px; display: flex; flex-direction: column;"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px;">
			<div
				style="font-size: 10px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				Proposal
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.deepNavy}; margin: 0 0 12px 0; line-height: 1.2;">
				{proposal.project}
			</h1>
			<div style="font-size: 18px; color: {c.slate}; margin-bottom: 40px;">Prepared for {proposal.client}</div>

			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 400px;">
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Prepared For
					</div>
					<div style="font-size: 14px; color: {c.deepNavy};">{proposal.preparedFor}</div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Prepared By
					</div>
					<div style="font-size: 14px; color: {c.deepNavy};">{proposal.preparedBy}</div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Date
					</div>
					<div style="font-size: 14px; color: {c.deepNavy};">{proposal.date}</div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Valid Until
					</div>
					<div style="font-size: 14px; color: {c.deepNavy};">{proposal.validUntil}</div>
				</div>
			</div>
		</div>

		<div
			style="padding: 24px 60px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; align-items: center;"
		>
			<div style="font-size: 11px; color: {c.lightSlate};">Confidential</div>
			<div style="font-size: 11px; color: {c.lightSlate};">Version {proposal.version}</div>
		</div>
	</div>

	<!-- Executive Summary -->
	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 28px 40px 40px;">
			{@render sectionTitle('Executive Summary', c.cyan)}
			<div style="font-size: 14px; color: {c.deepNavy}; line-height: 1.7; white-space: pre-line; margin-bottom: 24px;">
				{proposal.executiveSummary}
			</div>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;">
				{#each keyNumbers as item}
					<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 20px; text-align: center;">
						<div
							style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
						>
							{item.label}
						</div>
						<div style="font-size: 22px; font-weight: 700; color: {item.color};">{item.value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Current State', c.pink)}
			<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin-bottom: 16px;">
				{proposal.currentState.description}
			</p>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 10px;"
					>
						Pain Points
					</div>
					{#each proposal.currentState.painPoints as point}
						<div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
							<span style="color: {c.pink}; font-size: 12px;">•</span>
							<span style="font-size: 12px; color: {c.deepNavy};">{point}</span>
						</div>
					{/each}
				</div>
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 10px;"
					>
						Current Metrics
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
						{#each proposal.currentState.metrics as m}
							<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
								<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 2px;">{m.label}</div>
								<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">{m.value}</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Proposed Solution -->
	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 28px 40px 40px;">
			{@render sectionTitle('Proposed Solution', c.purple)}
			<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin-bottom: 20px;">
				{proposal.proposedSolution.description}
			</p>

			<div style="margin-bottom: 28px;">
				{#each proposal.proposedSolution.capabilities as cap, i}
					<div
						style="display: flex; gap: 14px; padding: 14px 16px; background-color: {i % 2 === 0
							? c.offWhite
							: c.white}; border-radius: 6px; margin-bottom: 4px;"
					>
						<div
							style="width: 8px; height: 8px; border-radius: 50%; background-color: {c.purple}; margin-top: 6px; flex-shrink: 0;"
						></div>
						<div>
							<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{cap.name}</span>
							<span style="font-size: 13px; color: {c.slate};"> — {cap.desc}</span>
						</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Expected Outcomes', c.cyan)}
			<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
				<thead>
					<tr>
						{#each ['Metric', 'Current', 'Target', 'Improvement'] as h}
							<th
								style="text-align: left; padding: 10px 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each proposal.proposedSolution.outcomes as o}
						<tr>
							<td
								style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; font-weight: 500; color: {c.deepNavy};"
							>
								{o.metric}
							</td>
							<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{o.from}</td>
							<td
								style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.cyan}; font-weight: 600;"
							>
								{o.to}
							</td>
							<td
								style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.purple}; font-weight: 600;"
							>
								{o.improvement}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Approach -->
	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 28px 40px 40px;">
			{@render sectionTitle('Approach & Timeline', c.orange)}
			<p style="font-size: 12px; color: {c.slate}; margin-bottom: 20px;">
				Total duration: <strong>{proposal.timeline.totalWeeks} weeks</strong> ({proposal.timeline.startDate} – {proposal.timeline.endDate})
			</p>

			{#each proposal.approach.phases as phase, i}
				<div
					style="margin-bottom: 24px; background-color: {c.offWhite}; border-radius: 8px; padding: 20px; border-left: 4px solid {phaseColors[i] ?? c.cyan};"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;"
					>
						<div>
							<span
								style="font-size: 10px; color: {phaseColors[i] ?? c.cyan}; font-weight: 600; text-transform: uppercase;"
								>Phase {i + 1}</span
							>
							<h4 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin: 4px 0 0 0;">
								{phase.name}
							</h4>
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">{phase.duration}</div>
					</div>

					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
						<div>
							<div
								style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
							>
								Activities
							</div>
							{#each phase.activities as a}
								<div style="font-size: 11px; color: {c.slate}; padding: 4px 0; display: flex; gap: 8px;">
									<span style="color: {c.lightSlate};">•</span>
									{a}
								</div>
							{/each}
						</div>
						<div>
							<div
								style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
							>
								Deliverables
							</div>
							{#each phase.deliverables as d}
								<div
									style="font-size: 11px; color: {c.deepNavy}; font-weight: 500; padding: 4px 0; display: flex; gap: 8px;"
								>
									<span style="color: {phaseColors[i] ?? c.cyan};">→</span>
									{d}
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Investment -->
	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 28px 40px 40px;">
			{@render sectionTitle('Investment', c.purple)}

			<table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
				<thead>
					<tr>
						<th
							style="text-align: left; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
						>
							Phase
						</th>
						<th
							style="text-align: right; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
						>
							Amount
						</th>
					</tr>
				</thead>
				<tbody>
					{#each proposal.investment.phases as p}
						<tr>
							<td style="padding: 14px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{p.phase}
							</td>
							<td
								style="padding: 14px 12px; border-bottom: 1px solid {c.lightSlate}22; text-align: right; color: {c.deepNavy};"
							>
								{formatCurrency(p.amount)}
							</td>
						</tr>
					{/each}
					<tr style="background-color: {c.deepNavy};">
						<td style="padding: 14px 12px; color: {c.white}; font-weight: 600;">Total Project Investment</td>
						<td
							style="padding: 14px 12px; text-align: right; color: {c.cyan}; font-weight: 700; font-size: 18px;"
						>
							{formatCurrency(proposal.investment.total)}
						</td>
					</tr>
				</tbody>
			</table>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Ongoing Support (Optional)
					</div>
					<div style="font-size: 20px; font-weight: 700; color: {c.purple};">
						{formatCurrency(proposal.investment.monthly)}<span
							style="font-size: 12px; font-weight: 400; color: {c.slate};">/month</span
						>
					</div>
					<div style="font-size: 11px; color: {c.slate}; margin-top: 6px;">
						Monitoring, tuning, support, updates
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Payment Terms
					</div>
					<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">
						{proposal.investment.paymentTerms}
					</div>
				</div>
			</div>

			<div style="font-size: 11px; color: {c.slate};">
				{#each proposal.investment.notes as note}
					<div style="display: flex; gap: 8px; margin-bottom: 4px;">
						<span style="color: {c.lightSlate};">*</span>
						{note}
					</div>
				{/each}
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 28px;">
				<div>
					{@render sectionTitle('Assumptions', c.cyan)}
					{#each proposal.assumptions as a}
						<div style="font-size: 11px; color: {c.slate}; padding: 6px 0; display: flex; gap: 8px;">
							<span style="color: {c.cyan};">•</span>
							{a}
						</div>
					{/each}
				</div>
				<div>
					{@render sectionTitle('Risks & Mitigations', c.orange)}
					{#each proposal.risks as r}
						<div style="font-size: 11px; margin-bottom: 10px;">
							<span style="color: {c.orange}; font-weight: 600;">{r.risk}:</span>
							<span style="color: {c.slate};"> {r.mitigation}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Next Steps -->
	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 28px 40px 40px;">
			{@render sectionTitle('Team', c.pink)}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px;">
				{#each proposal.team as member}
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
						<div
							style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
						>
							{member.role}
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 6px;">
							{member.name}
						</div>
						<div style="font-size: 11px; color: {c.slate};">{member.responsibility}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Next Steps', c.cyan)}
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
				{#each proposal.nextSteps as step, i}
					<div
						style="display: flex; align-items: center; gap: 16px; padding: 12px 0; border-bottom: {i <
						proposal.nextSteps.length - 1
							? `1px solid ${c.lightSlate}33`
							: 'none'};"
					>
						<div
							style="width: 28px; height: 28px; border-radius: 50%; background-color: {c.cyan}; display: flex; align-items: center; justify-content: center; color: {c.white}; font-size: 12px; font-weight: 600; flex-shrink: 0;"
						>
							{i + 1}
						</div>
						<div style="flex: 1;">
							<div style="font-size: 13px; font-weight: 500; color: {c.deepNavy};">{step.action}</div>
							<div style="font-size: 11px; color: {c.slate};">Owner: {step.owner}</div>
						</div>
						<div style="font-size: 12px; font-weight: 600; color: {c.purple};">{step.timing}</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 40px; background-color: {c.deepNavy}; border-radius: 8px; padding: 24px; display: flex; justify-content: space-between; align-items: center;"
			>
				<div>
					<div style="font-size: 16px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
						Ready to proceed?
					</div>
					<div style="font-size: 12px; color: {c.lightSlate};">We're here to answer any questions.</div>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 13px; color: {c.white};">hello@aiflow.au</div>
					<div style="font-size: 13px; color: {c.cyan};">aiflow.au</div>
				</div>
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Proposal Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(body) {
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
		.page-break {
			page-break-before: always;
		}
	}
</style>
