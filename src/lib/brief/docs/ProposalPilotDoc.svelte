<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const included = [
		'Single process / use case',
		'Core automation workflow',
		'Primary system integration',
		'Production-ready agent',
		'2-week live testing period',
		'Success metrics tracking',
	];

	const deferred = [
		'Additional processes',
		'Complex edge cases',
		'Secondary integrations',
		'Advanced analytics',
		'Multi-user training',
		'Long-term optimisation',
	];

	const pilotMeta = [
		{ label: 'Duration', value: '4 weeks' },
		{ label: 'Test Volume', value: '[X] transactions' },
		{ label: 'Success Threshold', value: '[X]% automation' },
	];

	const successRows = [
		{
			metric: 'Auto-processing rate',
			target: '≥[X]%',
			measure: 'Transactions processed without human intervention',
		},
		{ metric: 'Accuracy', target: '≥[X]%', measure: 'Correct outputs vs manual verification' },
		{ metric: 'Processing time', target: '<[X] seconds', measure: 'Average time from input to output' },
		{ metric: 'Error rate', target: '<[X]%', measure: 'Errors requiring manual correction' },
	];

	const timelinePhases = [
		{
			week: 'Week 1',
			title: 'Discover',
			color: c.cyan,
			tasks: ['Process deep-dive', 'Rules documentation', 'Data access setup'],
		},
		{
			week: 'Week 2',
			title: 'Build',
			color: c.purple,
			tasks: ['Agent development', 'Integration build', 'Initial testing'],
		},
		{
			week: 'Week 3',
			title: 'Test',
			color: c.pink,
			tasks: ['Live testing', 'Edge case handling', 'Refinement'],
		},
		{
			week: 'Week 4',
			title: 'Prove',
			color: c.green,
			tasks: ['Full volume test', 'Metrics collection', 'Results review'],
		},
	];

	const includes = ['All discovery and build work', '4 weeks of support', 'Production-ready agent', 'Results report'];

	const commitments = [
		{ title: 'Transparency', desc: 'Weekly updates. No surprises. Full access to progress.' },
		{ title: 'Honesty', desc: "If it's not working, we'll tell you. We don't push bad fits." },
		{ title: 'Speed', desc: '4 weeks is 4 weeks. We respect your time and budget.' },
	];
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 800px; margin: 0 auto; background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>

		<div style="padding: 40px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div
						style="display: inline-block; padding: 4px 12px; background-color: {c.orange}20; color: {c.orange}; border-radius: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
					>
						Pilot Program
					</div>
					<h1 style="font-size: 28px; font-weight: 700; color: {c.deepNavy}; margin: 0 0 8px 0;">
						[Process Name] Automation
					</h1>
					<div style="font-size: 16px; color: {c.slate};">Proof of Value for [Client Name]</div>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 14px; font-weight: 600; color: {c.cyan};">AI Flow</div>
					<div style="font-size: 11px; color: {c.lightSlate}; margin-top: 4px;">[Date]</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; background-color: {c.offWhite}; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.orange}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
			>
				Why Start with a Pilot?
			</div>
			<p style="font-size: 14px; color: {c.deepNavy}; line-height: 1.7; margin: 0;">
				A pilot lets you see real results before committing to a full rollout. In 4 weeks, we'll build a working
				agent, prove the value, and give you the confidence to scale — or walk away with no further obligation.
			</p>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Pilot Scope
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
				<div
					style="background-color: {c.green}10; border-radius: 8px; padding: 20px; border: 1px solid {c.green}30;"
				>
					<div style="font-size: 12px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">
						✓ Included in Pilot
					</div>
					{#each included as item}
						<div style="font-size: 12px; color: {c.deepNavy}; margin-bottom: 4px;">• {item}</div>
					{/each}
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
					<div style="font-size: 12px; font-weight: 600; color: {c.slate}; margin-bottom: 12px;">
						↳ Deferred to Full Rollout
					</div>
					{#each deferred as item}
						<div style="font-size: 12px; color: {c.slate}; margin-bottom: 4px;">• {item}</div>
					{/each}
				</div>
			</div>

			<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 20px;">
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; text-align: center;">
					{#each pilotMeta as item}
						<div>
							<div style="font-size: 10px; color: {c.lightSlate};">{item.label}</div>
							<div style="font-size: 18px; font-weight: 600; color: {c.white};">{item.value}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Success Criteria
			</div>
			<p style="font-size: 13px; color: {c.slate}; margin-bottom: 16px;">
				We'll measure the pilot against these agreed criteria. If we hit them, you'll have confidence to proceed. If
				we don't, you'll know before investing further.
			</p>

			<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
				<thead>
					<tr>
						{#each ['Metric', 'Target', "How We'll Measure"] as h}
							<th
								style="text-align: left; padding: 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each successRows as row}
						<tr>
							<td
								style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; font-weight: 500;"
							>
								{row.metric}
							</td>
							<td
								style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.green}; font-weight: 600;"
							>
								{row.target}
							</td>
							<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{row.measure}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.pink}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				4-Week Pilot Timeline
			</div>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
				{#each timelinePhases as phase}
					<div
						style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px; border-top: 3px solid {phase.color};"
					>
						<div style="font-size: 10px; color: {phase.color}; margin-bottom: 4px;">{phase.week}</div>
						<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
							{phase.title}
						</div>
						{#each phase.tasks as task}
							<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">• {task}</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Pilot Investment
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 24px;">
					<div style="font-size: 32px; font-weight: 700; color: {c.deepNavy};">$[XX,XXX]</div>
					<div style="font-size: 13px; color: {c.slate}; margin-top: 4px;">Fixed price, all-inclusive</div>
					<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid {c.lightSlate};">
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Includes:</div>
						{#each includes as item}
							<div style="font-size: 11px; color: {c.deepNavy};">✓ {item}</div>
						{/each}
					</div>
				</div>

				<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
					<div style="font-size: 11px; color: {c.cyan}; margin-bottom: 12px;">PILOT-TO-PRODUCTION CREDIT</div>
					<p style="font-size: 13px; color: {c.white}; line-height: 1.6; margin: 0 0 16px 0;">
						If you proceed to full rollout within 30 days of pilot completion, we'll credit <strong
							style="color: {c.green};">[50-100]%</strong
						> of your pilot investment toward the production project.
					</p>
					<div style="font-size: 11px; color: {c.lightSlate};">Pilot risk: minimal. Pilot value: proven.</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				After the Pilot
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
				<div
					style="background-color: {c.green}10; border-radius: 8px; padding: 20px; border: 1px solid {c.green}30;"
				>
					<div style="font-size: 14px; font-weight: 600; color: {c.green}; margin-bottom: 8px;">
						If Success Criteria Met ✓
					</div>
					<div style="font-size: 12px; color: {c.slate}; line-height: 1.6;">
						We'll present a full production proposal with clear pricing for rollout. Your pilot agent stays live
						while we expand. Credit applies to production investment.
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.slate}; margin-bottom: 8px;">
						If Not Quite There
					</div>
					<div style="font-size: 12px; color: {c.slate}; line-height: 1.6;">
						We'll provide a clear analysis of gaps and what it would take to close them. You decide whether to
						continue, pivot, or stop. No obligation.
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; background-color: {c.offWhite}; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.orange}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
			>
				Our Commitment
			</div>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each commitments as item}
					<div style="text-align: center;">
						<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">
							{item.title}
						</div>
						<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="padding: 32px 48px;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Ready to Start?
			</div>

			<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
				<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 16px;">
					To kick off the pilot, sign below or reply "let's go" to this email. We can start as soon as next week.
				</div>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 16px;">
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 6px;">[Client Name]</div>
						<div style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 32px; margin-bottom: 6px;"></div>
						<div style="font-size: 10px; color: {c.lightSlate};">Signature & Date</div>
					</div>
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 6px;">AI Flow</div>
						<div style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 32px; margin-bottom: 6px;"></div>
						<div style="font-size: 10px; color: {c.lightSlate};">Signature & Date</div>
					</div>
				</div>
				<div style="font-size: 10px; color: {c.lightSlate};">
					Valid for 14 days from date above. 50% due on signing, 50% on completion.
				</div>
			</div>
		</div>

		<div
			style="padding: 20px 48px; border-top: 1px solid {c.lightSlate}22; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: {c.lightSlate};"
		>
			<span>Questions? hello@aiflow.au</span>
			<span style="color: {c.cyan}; font-weight: 600;">aiflow.au</span>
		</div>
	</div>
</div>
