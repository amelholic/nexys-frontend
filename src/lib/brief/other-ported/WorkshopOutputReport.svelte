<script lang="ts">
	/** Ported from `brief/Workshop_AI_Opportunity/Workshop_OutputReport.jsx` — Svelte 5. */
	const colors = {
		deepNavy: '#1E293B',
		slate: '#475569',
		lightSlate: '#94A3B8',
		offWhite: '#F8FAFC',
		cyan: '#00B4FF',
		purple: '#8B5CF6',
		pink: '#EC4899',
		orange: '#F97316',
		white: '#FFFFFF',
		green: '#10B981'
	} as const;

	const report = {
		client: '[Client Name]',
		workshopDate: '[Date]',
		reportDate: '[Date]',
		preparedBy: 'AI Flow',
		participants: ['[Name, Role]', '[Name, Role]', '[Name, Role]', '[Name, Role]'],
		executiveSummary:
			'[2-3 sentences summarising the workshop outcome, top opportunities identified, and recommended next step]',
		opportunities: [
			{
				rank: 1,
				name: '[Process Name]',
				description: '[1-2 sentence description]',
				scores: { value: 0, feasibility: 0, readiness: 0, urgency: 0, total: 0 },
				currentState: {
					volume: '[X per month]',
					timePerInstance: '[X minutes]',
					peopleInvolved: '[X FTE]',
					currentCost: '[$ per month]'
				},
				painPoints: ['[Pain point 1]', '[Pain point 2]', '[Pain point 3]'],
				proposedSolution: '[Brief description of what the AI agent would do]',
				estimatedBenefits: {
					timeSavings: '[X%]',
					annualSavings: '[$X]',
					qualitative: ['[Benefit 1]', '[Benefit 2]']
				},
				risks: ['[Risk 1]', '[Risk 2]'],
				nextSteps: '[Recommended next step for this opportunity]',
				effort: '[Simple/Medium/Complex]',
				timeline: '[X weeks]',
				investment: '[$X-$X]'
			}
		],
		priorityMatrix: {
			doFirst: ['[Opportunity name]'],
			quickWins: ['[Opportunity name]'],
			invest: ['[Opportunity name]'],
			deprioritise: ['[Opportunity name]']
		},
		recommendations: [
			{
				recommendation: '[Primary recommendation]',
				rationale: '[Why we recommend this]'
			}
		],
		nextSteps: [{ action: '[Action item]', owner: '[Owner]', timing: '[Timing]' }]
	};

	const opp0 = report.opportunities[0]!;

	function formatStateKey(key: string): string {
		return key.replace(/([A-Z])/g, ' $1').trim();
	}
</script>

{#snippet sectionHeading(accent: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; margin-top: 32px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {accent};"></div>
		<h3
			style="font-size: 12px; font-weight: 600; color: {colors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
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
		style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); min-height: 500px; display: flex; flex-direction: column;"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px;">
			<div
				style="font-size: 10px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				Workshop Report
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 12px 0; line-height: 1.2;">
				AI Opportunity Assessment
			</h1>
			<div style="font-size: 18px; color: {colors.slate}; margin-bottom: 40px;">{report.client}</div>
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 400px;">
				<div>
					<div
						style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Workshop Date
					</div>
					<div style="font-size: 14px; color: {colors.deepNavy};">{report.workshopDate}</div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Report Date
					</div>
					<div style="font-size: 14px; color: {colors.deepNavy};">{report.reportDate}</div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Prepared By
					</div>
					<div style="font-size: 14px; color: {colors.deepNavy};">{report.preparedBy}</div>
				</div>
			</div>
		</div>
		<div
			style="padding: 24px 60px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between; align-items: center;"
		>
			<div style="font-size: 11px; color: {colors.lightSlate};">Confidential</div>
			<div style="font-size: 11px; color: {colors.lightSlate};">AI Flow</div>
		</div>
	</div>

	<!-- Executive summary -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.cyan, 'Executive Summary')}
			<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
				<p style="font-size: 14px; color: {colors.deepNavy}; line-height: 1.7; margin: 0;">
					{report.executiveSummary}
				</p>
			</div>
			<div style="margin-bottom: 24px;">
				<div style="font-size: 11px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 10px;">
					Workshop Participants
				</div>
				<div style="display: flex; flex-wrap: wrap; gap: 8px;">
					{#each report.participants as p}
						<span
							style="font-size: 11px; color: {colors.deepNavy}; background-color: {colors.offWhite}; padding: 4px 10px; border-radius: 4px;"
							>{p}</span
						>
					{/each}
				</div>
			</div>
			{@render sectionHeading(colors.purple, 'Priority Overview')}
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
				{#each [{ label: 'Do First', items: report.priorityMatrix.doFirst, color: colors.green }, { label: 'Quick Wins', items: report.priorityMatrix.quickWins, color: colors.cyan }, { label: 'Invest', items: report.priorityMatrix.invest, color: colors.orange }, { label: 'Deprioritise', items: report.priorityMatrix.deprioritise, color: colors.slate }] as quadrant}
					<div
						style="background-color: {colors.offWhite}; border-radius: 8px; padding: 14px; border-top: 3px solid {quadrant.color};"
					>
						<div style="font-size: 11px; font-weight: 600; color: {quadrant.color}; margin-bottom: 8px;">
							{quadrant.label}
						</div>
						{#each quadrant.items as item}
							<div style="font-size: 11px; color: {colors.deepNavy}; margin-bottom: 4px;">• {item}</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Opportunity detail -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
				<div>
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
						<div
							style="width: 32px; height: 32px; border-radius: 50%; background-color: {colors.green}; display: flex; align-items: center; justify-content: center; color: {colors.white}; font-size: 14px; font-weight: 700;"
						>
							#1
						</div>
						<h2 style="font-size: 24px; font-weight: 700; color: {colors.deepNavy}; margin: 0;">{opp0.name}</h2>
					</div>
					<p style="font-size: 13px; color: {colors.slate}; margin: 0;">{opp0.description}</p>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 4px;">Priority Score</div>
					<div style="font-size: 28px; font-weight: 700; color: {colors.green};">{opp0.scores.total}/20</div>
				</div>
			</div>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px;">
				{#each [{ label: 'Value', score: opp0.scores.value, color: colors.cyan }, { label: 'Feasibility', score: opp0.scores.feasibility, color: colors.purple }, { label: 'Readiness', score: opp0.scores.readiness, color: colors.pink }, { label: 'Urgency', score: opp0.scores.urgency, color: colors.orange }] as item}
					<div
						style="background-color: {colors.offWhite}; border-radius: 6px; padding: 12px; text-align: center;"
					>
						<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 4px;">{item.label}</div>
						<div style="font-size: 24px; font-weight: 700; color: {item.color};">{item.score}</div>
					</div>
				{/each}
			</div>
			{@render sectionHeading(colors.pink, 'Current State')}
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 16px;">
				{#each Object.entries(opp0.currentState) as [key, value]}
					<div style="background-color: {colors.offWhite}; border-radius: 6px; padding: 12px;">
						<div
							style="font-size: 10px; color: {colors.lightSlate}; text-transform: capitalize; margin-bottom: 4px;"
						>
							{formatStateKey(key)}
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {colors.deepNavy};">{value}</div>
					</div>
				{/each}
			</div>
			<div style="margin-bottom: 24px;">
				<div style="font-size: 11px; color: {colors.lightSlate}; margin-bottom: 8px;">Key Pain Points</div>
				<div style="display: flex; flex-wrap: wrap; gap: 8px;">
					{#each opp0.painPoints as pain}
						<span
							style="font-size: 11px; color: {colors.pink}; background-color: {colors.pink}15; padding: 6px 12px; border-radius: 4px;"
							>{pain}</span
						>
					{/each}
				</div>
			</div>
			{@render sectionHeading(colors.purple, 'Proposed Solution')}
			<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
				<p style="font-size: 13px; color: {colors.deepNavy}; line-height: 1.6; margin: 0;">{opp0.proposedSolution}</p>
			</div>
			{@render sectionHeading(colors.green, 'Estimated Benefits')}
			<div style="display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 16px; margin-bottom: 24px;">
				<div style="background-color: {colors.green}15; border-radius: 8px; padding: 16px; text-align: center;">
					<div style="font-size: 10px; color: {colors.green}; margin-bottom: 4px;">Time Savings</div>
					<div style="font-size: 24px; font-weight: 700; color: {colors.green};">
						{opp0.estimatedBenefits.timeSavings}
					</div>
				</div>
				<div style="background-color: {colors.green}15; border-radius: 8px; padding: 16px; text-align: center;">
					<div style="font-size: 10px; color: {colors.green}; margin-bottom: 4px;">Annual Savings</div>
					<div style="font-size: 24px; font-weight: 700; color: {colors.green};">
						{opp0.estimatedBenefits.annualSavings}
					</div>
				</div>
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px;">
					<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 8px;">Qualitative Benefits</div>
					{#each opp0.estimatedBenefits.qualitative as benefit}
						<div style="font-size: 12px; color: {colors.deepNavy}; margin-bottom: 4px;">✓ {benefit}</div>
					{/each}
				</div>
			</div>
			<div style="margin-bottom: 24px;">
				<div style="font-size: 11px; color: {colors.lightSlate}; margin-bottom: 8px;">Key Risks & Considerations</div>
				<div style="display: flex; flex-wrap: wrap; gap: 8px;">
					{#each opp0.risks as risk}
						<span
							style="font-size: 11px; color: {colors.orange}; background-color: {colors.orange}15; padding: 6px 12px; border-radius: 4px;"
							>⚠ {risk}</span
						>
					{/each}
				</div>
			</div>
			{@render sectionHeading(colors.cyan, 'Implementation Outlook')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; text-align: center;">
					<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 4px;">Effort</div>
					<div style="font-size: 16px; font-weight: 600; color: {colors.deepNavy};">{opp0.effort}</div>
				</div>
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; text-align: center;">
					<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 4px;">Timeline</div>
					<div style="font-size: 16px; font-weight: 600; color: {colors.deepNavy};">{opp0.timeline}</div>
				</div>
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; text-align: center;">
					<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 4px;">Investment Range</div>
					<div style="font-size: 16px; font-weight: 600; color: {colors.deepNavy};">{opp0.investment}</div>
				</div>
			</div>
			<div style="background-color: {colors.deepNavy}; border-radius: 8px; padding: 16px;">
				<div style="font-size: 11px; color: {colors.cyan}; margin-bottom: 6px;">Recommended Next Step</div>
				<div style="font-size: 14px; color: {colors.white};">{opp0.nextSteps}</div>
			</div>
		</div>
	</div>

	<!-- Recommendations -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.purple, 'Recommendations')}
			{#each report.recommendations as rec}
				<div
					style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 12px; border-left: 4px solid {colors.purple};"
				>
					<div style="font-size: 14px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 6px;">
						{rec.recommendation}
					</div>
					<div style="font-size: 12px; color: {colors.slate};">{rec.rationale}</div>
				</div>
			{/each}
			{@render sectionHeading(colors.green, 'Next Steps')}
			<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
				<thead>
					<tr>
						{#each ['Action', 'Owner', 'Timing'] as h}
							<th
								style="text-align: left; padding: 10px 12px; background-color: {colors.offWhite}; color: {colors.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
								>{h}</th
							>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each report.nextSteps as step}
						<tr>
							<td style="padding: 12px; border-bottom: 1px solid {colors.lightSlate}22; color: {colors.deepNavy};"
								>{step.action}</td
							>
							<td style="padding: 12px; border-bottom: 1px solid {colors.lightSlate}22; color: {colors.slate};"
								>{step.owner}</td
							>
							<td
								style="padding: 12px; border-bottom: 1px solid {colors.lightSlate}22; color: {colors.green}; font-weight: 500;"
								>{step.timing}</td
							>
						</tr>
					{/each}
				</tbody>
			</table>
			<div
				style="margin-top: 32px; background-color: {colors.deepNavy}; border-radius: 8px; padding: 24px; display: flex; justify-content: space-between; align-items: center;"
			>
				<div>
					<div style="font-size: 16px; font-weight: 600; color: {colors.white}; margin-bottom: 4px;">Questions?</div>
					<div style="font-size: 12px; color: {colors.lightSlate};">We are here to help you move forward.</div>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 14px; color: {colors.cyan}; font-weight: 600;">hello@aiflow.au</div>
					<div style="font-size: 12px; color: {colors.lightSlate};">aiflow.au</div>
				</div>
			</div>
			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {colors.lightSlate};"
			>
				<span>AI Opportunity Assessment Report — {report.client}</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
