<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const proposal = {
		client: '[Enterprise Client Name]',
		project: 'AI Agent Implementation Program',
		date: '[Date]',
		validUntil: '[Date + 30 days]',
		version: '1.0',
		preparedFor: '[Executive Sponsor Name]',
		preparedForTitle: '[Title]',
	};

	const summaryStats = [
		{ label: 'Program Duration', value: '[X] months', color: c.cyan },
		{ label: 'Agents Deployed', value: '[X]', color: c.purple },
		{ label: 'Projected Annual Savings', value: '$[X]M', color: c.green },
		{ label: 'Expected ROI', value: '[X]%', color: c.pink },
	];

	const opportunityRows = [
		{ process: '[Process 1]', volume: '[X]/month', fte: '[X]', potential: '70-80%', savings: '$[X]K', priority: 'P1' },
		{ process: '[Process 2]', volume: '[X]/month', fte: '[X]', potential: '60-70%', savings: '$[X]K', priority: 'P1' },
		{ process: '[Process 3]', volume: '[X]/month', fte: '[X]', potential: '50-60%', savings: '$[X]K', priority: 'P2' },
		{ process: '[Process 4]', volume: '[X]/month', fte: '[X]', potential: '65-75%', savings: '$[X]K', priority: 'P2' },
	];

	const programPhases = [
		{
			phase: 'Phase 1: Foundation',
			duration: 'Months 1-3',
			color: c.cyan,
			objectives: [
				'Deploy first AI agent (highest-value process)',
				'Establish integration patterns',
				'Build operational playbook',
				'Prove value with measurable results',
			],
			deliverables: [
				'1 production agent',
				'Integration framework',
				'Monitoring dashboard',
				'Training for operations team',
			],
			outcome: 'Demonstrated success, validated approach',
		},
		{
			phase: 'Phase 2: Expansion',
			duration: 'Months 4-6',
			color: c.purple,
			objectives: [
				'Deploy 2-3 additional agents',
				'Extend to related processes',
				'Optimise based on learnings',
				'Build internal capability',
			],
			deliverables: [
				'2-3 production agents',
				'Enhanced monitoring',
				'Knowledge transfer sessions',
				'Center of Excellence foundation',
			],
			outcome: 'Scaled deployment, growing internal expertise',
		},
		{
			phase: 'Phase 3: Enterprise Scale',
			duration: 'Months 7-12',
			color: c.pink,
			objectives: [
				'Deploy remaining prioritised agents',
				'Cross-functional integration',
				'Self-service capabilities',
				'Continuous improvement program',
			],
			deliverables: [
				'Full agent portfolio',
				'Enterprise dashboard',
				'Internal team enablement',
				'Ongoing support transition',
			],
			outcome: 'Self-sustaining AI operations capability',
		},
	];

	const governanceLeft = [
		'Executive Steering Committee (monthly)',
		'Program Management Office',
		'Change Advisory Board',
		'Weekly delivery stand-ups',
		'Bi-weekly stakeholder reviews',
	];

	const governanceRight = [
		'Real-time program dashboard',
		'Weekly status reports',
		'Monthly executive briefings',
		'Quarterly business reviews',
		'Continuous value tracking',
	];

	const riskRows = [
		{
			category: 'Technical',
			risks: 'Integration complexity, data quality',
			mitigation: 'Phased approach, early technical discovery, proven patterns',
		},
		{
			category: 'Organisational',
			risks: 'Change resistance, resource availability',
			mitigation: 'Executive sponsorship, change management program, dedicated team',
		},
		{
			category: 'Operational',
			risks: 'Business disruption, knowledge gaps',
			mitigation: 'Parallel running, comprehensive training, hypercare support',
		},
		{
			category: 'Vendor',
			risks: 'AI model changes, service disruption',
			mitigation: 'Multi-model capability, SLA guarantees, business continuity planning',
		},
	];

	const investmentRows = [
		{ component: 'Implementation Services', p1: '$[X]', p2: '$[X]', p3: '$[X]', total: '$[X]' },
		{ component: 'Platform & Infrastructure', p1: '$[X]', p2: '$[X]', p3: '$[X]', total: '$[X]' },
		{ component: 'Change Management', p1: '$[X]', p2: '$[X]', p3: '$[X]', total: '$[X]' },
		{ component: 'Training & Enablement', p1: '$[X]', p2: '$[X]', p3: '$[X]', total: '$[X]' },
	];

	const valueSummary = [
		{ label: 'Total Investment', value: '$[X]' },
		{ label: 'Annual Savings (Y1)', value: '$[X]' },
		{ label: '3-Year Savings', value: '$[X]' },
		{ label: 'Payback Period', value: '[X] months' },
		{ label: 'Program ROI', value: '[X]%' },
	];

	const ongoingCosts = [
		{ item: 'Platform & Hosting', cost: '$[X]/month' },
		{ item: 'Support & Maintenance', cost: '$[X]/month' },
		{ item: 'AI/LLM Usage', cost: '$[X]/month (variable)' },
	];

	const whyItems = [
		{ title: 'Enterprise Experience', desc: 'Proven track record delivering AI at scale for [industry] clients' },
		{ title: 'Outcome-Focused', desc: 'We tie success to your business metrics, not just technical delivery' },
		{ title: 'Partnership Approach', desc: 'We build your capability, not dependence on us' },
		{ title: 'Technical Depth', desc: 'Deep expertise in AI, integration, and enterprise systems' },
		{ title: 'Risk Management', desc: 'Structured approach with clear governance and mitigation' },
		{ title: 'Ongoing Support', desc: 'Not just delivery — long-term partnership for success' },
	];

	const nextSteps = [
		{ step: '1', title: 'Review & Questions', desc: 'We welcome the opportunity to present and discuss' },
		{ step: '2', title: 'Commercial Negotiation', desc: 'Finalise terms and conditions' },
		{ step: '3', title: 'Contract Execution', desc: 'Sign MSA and first SOW' },
		{ step: '4', title: 'Kickoff', desc: 'Mobilise team and begin Phase 1' },
	];
</script>

{#snippet sectionHead(title: string, color: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h2
			style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h2>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<!-- Cover -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.deepNavy}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.15); min-height: 500px; display: flex; flex-direction: column;"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 80px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 24px;"
			>
				Enterprise Proposal
			</div>
			<h1 style="font-size: 42px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0; line-height: 1.1;">
				{proposal.project}
			</h1>
			<div style="font-size: 20px; color: {c.lightSlate}; margin-bottom: 48px;">Prepared for {proposal.client}</div>

			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 400px;">
				<div>
					<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Prepared For</div>
					<div style="font-size: 14px; color: {c.white};">{proposal.preparedFor}</div>
					<div style="font-size: 12px; color: {c.lightSlate};">{proposal.preparedForTitle}</div>
				</div>
				<div>
					<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Date</div>
					<div style="font-size: 14px; color: {c.white};">{proposal.date}</div>
					<div style="font-size: 12px; color: {c.lightSlate};">Valid until {proposal.validUntil}</div>
				</div>
			</div>
		</div>
		<div
			style="padding: 24px 80px; border-top: 1px solid {c.slate}; display: flex; justify-content: space-between; align-items: center;"
		>
			<div style="font-size: 11px; color: {c.lightSlate};">Confidential</div>
			<div style="font-size: 14px; font-weight: 600; color: {c.cyan};">AI Flow</div>
		</div>
	</div>

	<!-- Executive Summary -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Executive Summary', c.cyan)}
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
					<p style="font-size: 15px; color: {c.deepNavy}; line-height: 1.7; margin: 0;">
						[2-3 paragraphs summarising: the business challenge, proposed solution, expected outcomes, and why AI
						Flow is the right partner. This should be compelling enough for an executive to understand the value
						without reading further.]
					</p>
				</div>

				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
					{#each summaryStats as item}
						<div
							style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px; text-align: center; border-top: 3px solid {item.color};"
						>
							<div style="font-size: 28px; font-weight: 700; color: {item.color};">{item.value}</div>
							<div style="font-size: 11px; color: {c.slate}; margin-top: 4px;">{item.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Strategic Context -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Strategic Context', c.purple)}
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">
							Business Drivers
						</div>
						<div style="font-size: 13px; color: {c.slate}; line-height: 1.6;">
							[List the key business drivers: cost pressure, growth without headcount, competitive dynamics,
							regulatory requirements, digital transformation mandate, etc.]
						</div>
					</div>
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">
							Current Challenges
						</div>
						<div style="font-size: 13px; color: {c.slate}; line-height: 1.6;">
							[Summarise the operational challenges: manual processes, error rates, capacity constraints,
							scalability concerns, etc.]
						</div>
					</div>
				</div>
			</div>

			<div style="margin-bottom: 32px;">
				{@render sectionHead('Opportunity Assessment', c.pink)}
				<p style="font-size: 13px; color: {c.slate}; margin-bottom: 16px;">
					Based on our discovery engagement, we have identified the following high-value automation opportunities:
				</p>
				<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
					<thead>
						<tr>
							{#each ['Process', 'Volume', 'Current FTE', 'Automation Potential', 'Est. Annual Savings', 'Priority'] as h}
								<th
									style="text-align: left; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each opportunityRows as row}
							<tr>
								<td
									style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; font-weight: 500;"
								>
									{row.process}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
									{row.volume}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.fte}</td>
								<td
									style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.green}; font-weight: 600;"
								>
									{row.potential}
								</td>
								<td
									style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; font-weight: 600;"
								>
									{row.savings}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22;">
									<span
										style="padding: 2px 8px; border-radius: 3px; font-size: 10px; background-color: {row.priority ===
										'P1'
											? `${c.green}20`
											: `${c.cyan}20`}; color: {row.priority === 'P1' ? c.green : c.cyan};"
									>
										{row.priority}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Proposed Program -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Proposed Program Structure', c.orange)}
				<p style="font-size: 13px; color: {c.slate}; margin-bottom: 24px;">
					We recommend a phased program that delivers quick wins while building toward enterprise-scale AI capability.
				</p>

				{#each programPhases as phase}
					<div
						style="background-color: {c.offWhite}; border-radius: 8px; padding: 24px; margin-bottom: 16px; border-left: 4px solid {phase.color};"
					>
						<div
							style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;"
						>
							<div>
								<div style="font-size: 16px; font-weight: 600; color: {c.deepNavy};">{phase.phase}</div>
								<div style="font-size: 12px; color: {phase.color};">{phase.duration}</div>
							</div>
							<div style="font-size: 11px; color: {c.slate}; text-align: right; max-width: 200px;">
								{phase.outcome}
							</div>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
							<div>
								<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">OBJECTIVES</div>
								{#each phase.objectives as obj}
									<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">• {obj}</div>
								{/each}
							</div>
							<div>
								<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">DELIVERABLES</div>
								{#each phase.deliverables as del}
									<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">• {del}</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Governance & Risk -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Governance Framework', c.cyan)}
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">
							Program Governance
						</div>
						{#each governanceLeft as item}
							<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">• {item}</div>
						{/each}
					</div>
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">
							Reporting & Transparency
						</div>
						{#each governanceRight as item}
							<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">• {item}</div>
						{/each}
					</div>
				</div>
			</div>

			<div style="margin-bottom: 32px;">
				{@render sectionHead('Risk Management', c.orange)}
				<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
					<thead>
						<tr>
							{#each ['Risk Category', 'Key Risks', 'Mitigation Strategy'] as h}
								<th
									style="text-align: left; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each riskRows as row}
							<tr>
								<td
									style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; font-weight: 500;"
								>
									{row.category}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
									{row.risks}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
									{row.mitigation}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Investment -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Investment Summary', c.green)}
				<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 24px;">
					<div>
						<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
							<thead>
								<tr>
									{#each ['Component', 'Phase 1', 'Phase 2', 'Phase 3', 'Total'] as h}
										<th
											style="text-align: left; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
										>
											{h}
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each investmentRows as row}
									<tr>
										<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
											{row.component}
										</td>
										<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.p1}</td>
										<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.p2}</td>
										<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.p3}</td>
										<td
											style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; font-weight: 600;"
										>
											{row.total}
										</td>
									</tr>
								{/each}
								<tr>
									<td style="padding: 12px; color: {c.deepNavy}; font-weight: 600;">Total Program Investment</td>
									<td style="padding: 12px; color: {c.deepNavy}; font-weight: 600;">$[X]</td>
									<td style="padding: 12px; color: {c.deepNavy}; font-weight: 600;">$[X]</td>
									<td style="padding: 12px; color: {c.deepNavy}; font-weight: 600;">$[X]</td>
									<td style="padding: 12px; color: {c.green}; font-weight: 700; font-size: 14px;">$[X]</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
						<div style="font-size: 11px; color: {c.cyan}; margin-bottom: 16px;">VALUE SUMMARY</div>
						{#each valueSummary as item}
							<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
								<span style="font-size: 11px; color: {c.lightSlate};">{item.label}</span>
								<span style="font-size: 13px; font-weight: 600; color: {c.white};">{item.value}</span>
							</div>
						{/each}
					</div>
				</div>

				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
					<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">
						Ongoing Costs (Post-Implementation)
					</div>
					<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
						{#each ongoingCosts as item}
							<div style="font-size: 12px;">
								<span style="color: {c.slate};">{item.item}: </span>
								<span style="color: {c.deepNavy}; font-weight: 600;">{item.cost}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div style="margin-bottom: 32px;">
				{@render sectionHead('Commercial Terms', c.purple)}
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">
							Payment Terms
						</div>
						<div style="font-size: 12px; color: {c.slate}; line-height: 1.6;">
							[Standard enterprise terms: e.g., 30% upon signing, 30% at Phase 1 completion, 30% at Phase 2
							completion, 10% at program completion. Net 30 invoicing.]
						</div>
					</div>
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">
							Performance Guarantees
						</div>
						<div style="font-size: 12px; color: {c.slate}; line-height: 1.6;">
							[Include specific commitments: e.g., Minimum 60% auto-processing rate or 50% of Phase 1 fees refunded.
							Uptime SLA of 99.5%.]
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Why AI Flow -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Why AI Flow', c.cyan)}
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
					{#each whyItems as item}
						<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 6px;">
								{item.title}
							</div>
							<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
						</div>
					{/each}
				</div>

				<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
					<div style="font-size: 11px; color: {c.cyan}; margin-bottom: 8px;">CLIENT REFERENCE</div>
					<p
						style="font-size: 14px; color: {c.white}; font-style: italic; margin: 0 0 12px 0; line-height: 1.6;"
					>
						"[Client testimonial about working with AI Flow on a similar enterprise program]"
					</p>
					<div style="font-size: 12px; color: {c.lightSlate};">— [Name], [Title], [Company]</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Next Steps -->
	<div
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 40px 48px;">
			<div style="margin-bottom: 32px;">
				{@render sectionHead('Next Steps', c.green)}
				<div style="display: flex; gap: 16px; margin-bottom: 32px;">
					{#each nextSteps as item}
						<div
							style="flex: 1; background-color: {c.offWhite}; border-radius: 8px; padding: 16px; text-align: center;"
						>
							<div
								style="width: 32px; height: 32px; border-radius: 50%; background-color: {c.green}; color: {c.white}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; margin: 0 auto 8px;"
							>
								{item.step}
							</div>
							<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">
								{item.title}
							</div>
							<div style="font-size: 10px; color: {c.slate};">{item.desc}</div>
						</div>
					{/each}
				</div>
			</div>

			<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 32px;">
				<div style="font-size: 12px; font-weight: 600; color: {c.white}; margin-bottom: 20px;">Proposal Acceptance</div>
				<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 24px;">
					By signing below, [Client Name] accepts this proposal and authorises AI Flow to proceed with the AI Agent
					Implementation Program as described herein.
				</div>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">{proposal.client}</div>
						<div style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 40px; margin-bottom: 8px;"></div>
						<div
							style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 10px; color: {c.lightSlate};"
						>
							<div>Name & Title</div>
							<div>Date</div>
						</div>
					</div>
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">AI Flow</div>
						<div style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 40px; margin-bottom: 8px;"></div>
						<div
							style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 10px; color: {c.lightSlate};"
						>
							<div>Name & Title</div>
							<div>Date</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			style="padding: 20px 48px; border-top: 1px solid {c.lightSlate}22; display: flex; justify-content: space-between; font-size: 11px; color: {c.lightSlate};"
		>
			<span>Enterprise Proposal — {proposal.client}</span>
			<span>AI Flow</span>
		</div>
	</div>
</div>
