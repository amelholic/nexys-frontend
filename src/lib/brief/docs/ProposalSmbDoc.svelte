<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const proposal = {
		client: '[Client Name]',
		project: '[Process Name] Automation',
		date: '[Date]',
		validUntil: '[Date + 14 days]',
	};

	const solutionItems = [
		{ icon: '📄', label: 'Reads invoices' },
		{ icon: '🔗', label: 'Matches to POs' },
		{ icon: '✓', label: 'Validates data' },
		{ icon: '📤', label: 'Routes for approval' },
	];

	const results = [
		{ value: '[65%]', label: 'Processed automatically', desc: 'No human touch needed' },
		{ value: '[80%]', label: 'Time saved', desc: 'On manual processing' },
		{ value: '$[X]K', label: 'Annual savings', desc: 'Estimated first year' },
	];

	const phases = [
		{ week: 'Week 1-2', title: 'Discover', tasks: ['Map your process', 'Document rules', 'Set up systems'] },
		{ week: 'Week 3-5', title: 'Build', tasks: ['Build the agent', 'Integrate systems', 'Test thoroughly'] },
		{ week: 'Week 6-7', title: 'Launch', tasks: ['Train your team', 'Go live', 'Monitor closely'] },
		{ week: 'Week 8+', title: 'Support', tasks: ['Optimise', 'Handle issues', 'Ongoing support'] },
	];

	const deliveryItems = [
		'Discovery and process mapping',
		'AI agent build and configuration',
		'System integrations (up to 3)',
		'Testing and quality assurance',
		'User training (up to 4 hours)',
		'Go-live support',
		'Documentation',
	];

	const ongoingItems = [
		'Agent hosting and monitoring',
		'Support and maintenance',
		'Performance optimisation',
		'Minor enhancements',
		'Quarterly reviews',
	];

	const whyItems = [
		{ title: 'Specialists', desc: "We only do AI agents. It's all we think about." },
		{ title: 'Outcome-focused', desc: 'We measure success by your results, not our effort.' },
		{ title: 'Australian', desc: 'Local team, your timezone, no offshore surprises.' },
	];

	const steps = [
		{ step: '1', action: 'Sign this proposal' },
		{ step: '2', action: 'Kick off next week' },
		{ step: '3', action: 'Go live in 8 weeks' },
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
						style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;"
					>
						Proposal
					</div>
					<h1 style="font-size: 28px; font-weight: 700; color: {c.deepNavy}; margin: 0 0 8px 0;">
						{proposal.project}
					</h1>
					<div style="font-size: 16px; color: {c.slate};">Prepared for {proposal.client}</div>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 14px; font-weight: 600; color: {c.cyan};">AI Flow</div>
					<div style="font-size: 11px; color: {c.lightSlate}; margin-top: 4px;">{proposal.date}</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
			>
				The Problem
			</div>
			<p style="font-size: 15px; color: {c.deepNavy}; line-height: 1.7; margin: 0;">
				[1-2 sentences describing their specific pain point. E.g., "Your team spends 20+ hours per week manually
				processing invoices, leading to delays, errors, and frustrated vendors."]
			</p>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
			>
				The Solution
			</div>
			<p style="font-size: 15px; color: {c.deepNavy}; line-height: 1.7; margin: 0 0 20px 0;">
				[1-2 sentences describing what we'll build. E.g., "We'll build an AI agent that reads your invoices,
				matches them to POs, and routes them for approval — automatically."]
			</p>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
				{#each solutionItems as item}
					<div
						style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px; text-align: center;"
					>
						<div style="font-size: 24px; margin-bottom: 8px;">{item.icon}</div>
						<div style="font-size: 11px; color: {c.deepNavy};">{item.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="padding: 32px 48px; background-color: {c.deepNavy};">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Expected Results
			</div>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each results as item}
					<div style="text-align: center;">
						<div style="font-size: 32px; font-weight: 700; color: {c.white};">{item.value}</div>
						<div style="font-size: 12px; color: {c.cyan}; margin-top: 4px;">{item.label}</div>
						<div style="font-size: 10px; color: {c.lightSlate};">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.pink}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				How We'll Do It
			</div>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
				{#each phases as phase}
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
						<div style="font-size: 10px; color: {c.pink};">{phase.week}</div>
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
				style="font-size: 12px; font-weight: 600; color: {c.orange}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				What's Included
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div>
					<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">
						Delivery
					</div>
					{#each deliveryItems as item}
						<div
							style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: {c.slate}; margin-bottom: 6px;"
						>
							<span style="color: {c.green};">✓</span>
							{item}
						</div>
					{/each}
				</div>
				<div>
					<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">
						Ongoing (optional)
					</div>
					{#each ongoingItems as item}
						<div
							style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: {c.slate}; margin-bottom: 6px;"
						>
							<span style="color: {c.cyan};">+</span>
							{item}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Investment
			</div>

			<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 24px;">
					<table style="width: 100%; font-size: 13px;">
						<tbody>
							<tr>
								<td style="padding: 8px 0; color: {c.deepNavy};">Implementation (one-time)</td>
								<td style="padding: 8px 0; text-align: right; font-weight: 600; color: {c.deepNavy};">
									$[XX,XXX]
								</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— Discovery & design</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[X,XXX]</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— Build & integration</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[X,XXX]</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— Testing & launch</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[X,XXX]</td>
							</tr>
							<tr>
								<td colspan="2" style="padding: 8px 0;">
									<div style="border-top: 1px solid {c.lightSlate};"></div>
								</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.deepNavy};">Monthly support (ongoing)</td>
								<td style="padding: 8px 0; text-align: right; font-weight: 600; color: {c.deepNavy};">
									$[X,XXX]/mo
								</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— Hosting & infrastructure</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[XXX]</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— Support & maintenance</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[XXX]</td>
							</tr>
							<tr>
								<td style="padding: 8px 0; color: {c.slate}; font-size: 12px;">— AI/LLM usage (estimated)</td>
								<td style="padding: 8px 0; text-align: right; color: {c.slate}; font-size: 12px;">$[XXX]</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
					<div style="font-size: 10px; color: {c.cyan}; margin-bottom: 16px;">YOUR ROI</div>
					<div style="margin-bottom: 16px;">
						<div style="font-size: 11px; color: {c.lightSlate};">Annual savings</div>
						<div style="font-size: 24px; font-weight: 700; color: {c.green};">$[XX,XXX]</div>
					</div>
					<div style="margin-bottom: 16px;">
						<div style="font-size: 11px; color: {c.lightSlate};">Payback period</div>
						<div style="font-size: 20px; font-weight: 600; color: {c.white};">[X] months</div>
					</div>
					<div>
						<div style="font-size: 11px; color: {c.lightSlate};">Year 1 ROI</div>
						<div style="font-size: 20px; font-weight: 600; color: {c.white};">[XXX]%</div>
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px; border-bottom: 1px solid {c.lightSlate}22;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Why AI Flow
			</div>

			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each whyItems as item}
					<div style="text-align: center;">
						<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">
							{item.title}
						</div>
						<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="padding: 32px 48px; background-color: {c.offWhite};">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Let's Get Started
			</div>

			<div style="display: flex; gap: 16px; margin-bottom: 24px;">
				{#each steps as item}
					<div
						style="flex: 1; display: flex; align-items: center; gap: 12px; background-color: {c.white}; border-radius: 8px; padding: 16px;"
					>
						<div
							style="width: 32px; height: 32px; border-radius: 50%; background-color: {c.green}; color: {c.white}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0;"
						>
							{item.step}
						</div>
						<div style="font-size: 13px; color: {c.deepNavy};">{item.action}</div>
					</div>
				{/each}
			</div>

			<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 24px;">
				<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 16px;">
					To proceed, sign below or reply "approved" to this email. Valid until {proposal.validUntil}.
				</div>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 6px;">Client</div>
						<div
							style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 32px; margin-bottom: 6px;"
						></div>
						<div style="font-size: 10px; color: {c.lightSlate};">Signature & Date</div>
					</div>
					<div>
						<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 6px;">AI Flow</div>
						<div
							style="border-bottom: 1px solid rgba(255,255,255,0.3); min-height: 32px; margin-bottom: 6px;"
						></div>
						<div style="font-size: 10px; color: {c.lightSlate};">Signature & Date</div>
					</div>
				</div>
			</div>
		</div>

		<div
			style="padding: 20px 48px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: {c.lightSlate};"
		>
			<span>Questions? Call [phone] or email hello@aiflow.au</span>
			<span style="color: {c.cyan}; font-weight: 600;">aiflow.au</span>
		</div>
	</div>
</div>
