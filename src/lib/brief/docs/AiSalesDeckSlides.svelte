<script lang="ts">
	import type { Snippet } from 'svelte';
	import { briefColors } from '$lib/brief/briefColors';

	const grad = `linear-gradient(90deg, ${briefColors.cyan} 0%, ${briefColors.purple} 35%, ${briefColors.pink} 65%, ${briefColors.orange} 100%)`;

	const problemStats = [
		{ stat: '40%', label: 'of knowledge worker time spent on repetitive tasks', color: briefColors.pink },
		{ stat: '3-5', label: 'days average for routine approvals', color: briefColors.purple },
		{ stat: '$50K+', label: 'annual cost of manual data entry per FTE', color: briefColors.orange },
	] as const;

	const solutionCards = [
		{
			title: 'Reads documents',
			desc: 'Invoices, contracts, emails, forms — extracted and structured automatically',
		},
		{
			title: 'Makes decisions',
			desc: 'Route, approve, flag, escalate — following your business rules',
		},
		{
			title: 'Moves data',
			desc: 'Between systems, formats, and teams — no more copy-paste',
		},
		{
			title: 'Keeps humans informed',
			desc: 'Summaries, alerts, exceptions — you stay in control',
		},
	] as const;

	const solutionColors = [briefColors.cyan, briefColors.purple, briefColors.pink, briefColors.orange] as const;

	const buildCards = [
		{ title: 'Document Processing', desc: 'Invoices, contracts, applications', color: briefColors.cyan },
		{ title: 'Workflow Automation', desc: 'Approvals, routing, escalations', color: briefColors.purple },
		{ title: 'Customer Response', desc: 'Triage, drafts, categorisation', color: briefColors.pink },
		{ title: 'Data Entry', desc: 'Extraction, validation, sync', color: briefColors.orange },
		{ title: 'Compliance Checking', desc: 'Monitoring, flagging, reporting', color: briefColors.cyan },
		{ title: 'Report Generation', desc: 'Analysis, summaries, dashboards', color: briefColors.purple },
	] as const;

	const processSteps = [
		{
			num: 1,
			title: 'Discover',
			desc: 'Map your process, identify pain points, define success',
			weeks: '1-2 weeks',
			color: briefColors.cyan,
		},
		{
			num: 2,
			title: 'Design',
			desc: 'Spec the agent, design integrations, plan testing',
			weeks: '1-2 weeks',
			color: briefColors.purple,
		},
		{
			num: 3,
			title: 'Build',
			desc: 'Develop, test, refine until it works reliably',
			weeks: '4-6 weeks',
			color: briefColors.pink,
		},
		{
			num: 4,
			title: 'Deploy',
			desc: 'Roll out carefully, monitor, tune',
			weeks: '1-2 weeks',
			color: briefColors.orange,
		},
	] as const;

	const resultStats = [
		{ stat: '70%', label: 'reduction in processing time', color: briefColors.cyan },
		{ stat: '95%+', label: 'accuracy on routine tasks', color: briefColors.purple },
		{ stat: '< 6 mo', label: 'payback period', color: briefColors.pink },
		{ stat: '80%', label: 'of staff time freed up', color: briefColors.orange },
	] as const;

	const whyCards = [
		{
			title: 'We have been doing this for 20 years',
			desc: 'Same team that has built enterprise software for ASX companies and government. AI is a new tool, not our whole identity.',
			color: briefColors.cyan,
		},
		{
			title: 'We design for reliability',
			desc: 'Not demos. We build agents that work in production, handle edge cases, and fail gracefully when they need to.',
			color: briefColors.purple,
		},
		{
			title: 'We keep humans in control',
			desc: 'Agents that help your team, not replace them. Clear oversight, easy intervention, transparent decisions.',
			color: briefColors.pink,
		},
		{
			title: 'We stick around',
			desc: 'Ongoing support, monitoring, tuning. We do not just hand over and disappear.',
			color: briefColors.orange,
		},
	] as const;

	const tiers: {
		tier: string;
		price: string;
		timeline: string;
		scope: string;
		includes: string[];
		color: string;
		highlight?: boolean;
	}[] = [
		{
			tier: 'Pilot',
			price: '$30K - $50K',
			timeline: '6-8 weeks',
			scope: 'Single process, proof of value',
			includes: [
				'Discovery workshop',
				'Agent design',
				'Build and test',
				'Production deployment',
				'30 days support',
			],
			color: briefColors.cyan,
		},
		{
			tier: 'Standard',
			price: '$50K - $100K',
			timeline: '8-12 weeks',
			scope: 'Full process automation',
			includes: [
				'Comprehensive discovery',
				'Multi-step workflow',
				'System integrations',
				'Training and handover',
				'90 days support',
			],
			color: briefColors.purple,
			highlight: true,
		},
		{
			tier: 'Enterprise',
			price: '$100K+',
			timeline: '12+ weeks',
			scope: 'Multiple agents, complex integrations',
			includes: [
				'Multiple processes',
				'Orchestrated agents',
				'Custom integrations',
				'Dedicated support',
				'Ongoing optimisation',
			],
			color: briefColors.pink,
		},
	];

	const caseMetrics = [
		{ label: 'Processing time', before: '15 min', after: '< 2 min' },
		{ label: 'Auto-approval rate', before: '0%', after: '72%' },
		{ label: 'Accuracy', before: '92%', after: '97%' },
		{ label: 'Staff time on invoices', before: '6 hrs/day', after: '1.5 hrs/day' },
	] as const;

	const goodFit = [
		'Staff spending hours on repetitive data work',
		'Processes that follow clear rules (even if complex)',
		'High volume of similar transactions',
		'Errors causing rework, delays, or risk',
		'Growth constrained by manual capacity',
		'Modern-ish systems with APIs or exports',
	] as const;

	const badFit = [
		'Processes that require pure human judgment',
		'Very low volume (< 50/month)',
		'No clear rules or documentation',
		'Legacy systems with no integration options',
		'Organisation not ready for change',
		'No executive sponsor or budget',
	] as const;

	const nextSteps = [
		{
			num: 1,
			title: 'Discovery call',
			desc: '30 minutes to understand your situation and identify potential opportunities',
			color: briefColors.cyan,
		},
		{
			num: 2,
			title: 'Opportunity assessment',
			desc: 'We evaluate fit and provide a preliminary view of scope and investment',
			color: briefColors.purple,
		},
		{
			num: 3,
			title: 'Proposal',
			desc: 'Detailed scope, timeline, and pricing for your specific needs',
			color: briefColors.pink,
		},
	] as const;
</script>

{#snippet slideBar()}
	<div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: {grad};"></div>
{/snippet}

{#snippet logo(dark: boolean)}
	<div
		style="position: absolute; bottom: 24px; left: 40px; font-size: 14px; font-weight: 700; color: {dark
			? briefColors.cyan
			: briefColors.deepNavy}; letter-spacing: -0.5px;"
	>
		AI Flow
	</div>
{/snippet}

{#snippet slideNum(num: number, total: number, dark: boolean)}
	<div
		style="position: absolute; bottom: 24px; right: 40px; font-size: 12px; color: {briefColors.lightSlate}; font-family: JetBrains Mono, monospace;"
	>
		{num} / {total}
	</div>
{/snippet}

{#snippet deckSlide(dark: boolean, num: number, body: Snippet)}
	<div
		style="max-width: 960px; margin: 0 auto 40px; background-color: {dark
			? briefColors.deepNavy
			: briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); aspect-ratio: 16/9; position: relative; overflow: hidden; display: flex; flex-direction: column;"
	>
		{@render slideBar()}
		{@render body()}
		{@render logo(dark)}
		{@render slideNum(num, 12, dark)}
	</div>
{/snippet}

<div style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;">
	{#snippet s1()}
		<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px 80px;">
			<div
				style="font-size: 14px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px;"
			>
				AI Flow
			</div>
			<h1 style="font-size: 56px; font-weight: 700; color: {briefColors.white}; margin: 0 0 24px 0; line-height: 1.1;">
				AI agents that<br />actually work
			</h1>
			<p style="font-size: 20px; color: {briefColors.lightSlate}; max-width: 600px; line-height: 1.5;">
				We build AI systems that handle repetitive tasks, so your team can focus on work that matters.
			</p>
		</div>
	{/snippet}
	{@render deckSlide(true, 1, s1)}

	{#snippet s2()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				The Problem
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 40px 0;">
				Your best people are stuck doing repetitive work
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
				{#each problemStats as item, i (i)}
					<div>
						<div style="font-size: 48px; font-weight: 700; color: {item.color}; margin-bottom: 12px;">
							{item.stat}
						</div>
						<div style="font-size: 16px; color: {briefColors.slate}; line-height: 1.5;">{item.label}</div>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 48px; padding: 24px; background-color: {briefColors.offWhite}; border-radius: 8px; border-left: 4px solid {briefColors.cyan};"
			>
				<p style="font-size: 18px; color: {briefColors.deepNavy}; margin: 0; line-height: 1.6;">
					The work gets done, but at what cost? Errors, delays, frustrated staff, and no time left for strategic
					thinking.
				</p>
			</div>
		</div>
	{/snippet}
	{@render deckSlide(false, 2, s2)}

	{#snippet s3()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				The Solution
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.white}; margin: 0 0 40px 0;">
				AI agents handle the repetitive stuff
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				{#each solutionCards as item, i (i)}
					<div
						style="background-color: rgba(255,255,255,0.05); border-radius: 8px; padding: 24px; border-left: 3px solid {solutionColors[
							i
						]};"
					>
						<div style="font-size: 18px; font-weight: 600; color: {briefColors.white}; margin-bottom: 8px;">
							{item.title}
						</div>
						<div style="font-size: 14px; color: {briefColors.lightSlate}; line-height: 1.5;">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render deckSlide(true, 3, s3)}

	{#snippet s4()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				What We Build
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 32px 0;">
				Agents for real business processes
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
				{#each buildCards as item, i (i)}
					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px; border-top: 3px solid {item.color};"
					>
						<div style="font-size: 16px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 6px;">
							{item.title}
						</div>
						<div style="font-size: 13px; color: {briefColors.slate};">{item.desc}</div>
					</div>
				{/each}
			</div>
			<p style="font-size: 14px; color: {briefColors.slate}; margin-top: 32px; text-align: center;">
				If it is repetitive, rule-based, and eating up time — there is probably an agent for that.
			</p>
		</div>
	{/snippet}
	{@render deckSlide(false, 4, s4)}

	{#snippet s5()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				How It Works
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 40px 0;">
				From idea to production in 8-12 weeks
			</h2>
			<div style="position: relative; display: flex; align-items: flex-start; gap: 16px;">
				{#each processSteps as item, i (i)}
					<div style="flex: 1; text-align: center; position: relative;">
						<div
							style="width: 56px; height: 56px; border-radius: 50%; background-color: {item.color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: {briefColors.white}; font-size: 24px; font-weight: 700;"
						>
							{item.num}
						</div>
						<div style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 8px;">
							{item.title}
						</div>
						<div style="font-size: 13px; color: {briefColors.slate}; line-height: 1.5; margin-bottom: 12px;">
							{item.desc}
						</div>
						<div style="font-size: 12px; color: {item.color}; font-weight: 600;">{item.weeks}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render deckSlide(false, 5, s5)}

	{#snippet s6()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Results
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.white}; margin: 0 0 48px 0;">
				What clients typically see
			</h2>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
				{#each resultStats as item, i (i)}
					<div style="text-align: center;">
						<div style="font-size: 56px; font-weight: 700; color: {item.color}; margin-bottom: 12px;">
							{item.stat}
						</div>
						<div style="font-size: 14px; color: {briefColors.lightSlate}; line-height: 1.4;">{item.label}</div>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 48px; padding: 24px; background-color: rgba(255,255,255,0.05); border-radius: 8px; text-align: center;"
			>
				<p style="font-size: 18px; color: {briefColors.white}; margin: 0;">
					"We went from 15 minutes per invoice to under 2 minutes. The agent paid for itself in 3 months."
				</p>
				<p style="font-size: 14px; color: {briefColors.lightSlate}; margin: 12px 0 0 0;">
					— Finance Director, Manufacturing Company
				</p>
			</div>
		</div>
	{/snippet}
	{@render deckSlide(true, 6, s6)}

	{#snippet s7()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Why AI Flow
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 40px 0;">
				Not your typical AI vendor
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				{#each whyCards as item, i (i)}
					<div
						style="padding: 24px; background-color: {briefColors.offWhite}; border-radius: 8px; border-left: 4px solid {item.color};"
					>
						<div style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 12px;">
							{item.title}
						</div>
						<div style="font-size: 14px; color: {briefColors.slate}; line-height: 1.6;">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render deckSlide(false, 7, s7)}

	{#snippet s8()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Investment
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 40px 0;">
				Typical engagement structure
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
				{#each tiers as item, i (i)}
					<div
						style="padding: 28px; background-color: {item.highlight
							? briefColors.deepNavy
							: briefColors.offWhite}; border-radius: 8px; border-top: 4px solid {item.color}; color: {item.highlight
							? briefColors.white
							: briefColors.deepNavy};"
					>
						<div style="font-size: 14px; color: {item.color}; font-weight: 600; margin-bottom: 8px;">
							{item.tier}
						</div>
						<div style="font-size: 32px; font-weight: 700; margin-bottom: 4px;">{item.price}</div>
						<div
							style="font-size: 13px; color: {item.highlight ? briefColors.lightSlate : briefColors.slate}; margin-bottom: 16px;"
						>
							{item.timeline}
						</div>
						<div style="font-size: 14px; font-weight: 500; margin-bottom: 16px;">{item.scope}</div>
						<div
							style="border-top: 1px solid {item.highlight
								? 'rgba(255,255,255,0.1)'
								: `${briefColors.lightSlate}33`}; padding-top: 16px;"
						>
							{#each item.includes as inc, j (j)}
								<div
									style="font-size: 12px; color: {item.highlight
										? briefColors.lightSlate
										: briefColors.slate}; margin-bottom: 6px; display: flex; gap: 8px;"
								>
									<span style="color: {item.color};">✓</span>
									{inc}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<p style="font-size: 13px; color: {briefColors.slate}; margin-top: 24px; text-align: center;">
				Ongoing support retainers available from $3K/month. All amounts exclude GST.
			</p>
		</div>
	{/snippet}
	{@render deckSlide(false, 8, s8)}

	{#snippet s9()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Case Example
			</div>
			<h2 style="font-size: 32px; font-weight: 700; color: {briefColors.white}; margin: 0 0 32px 0;">
				Invoice processing for a logistics company
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
				<div>
					<div style="font-size: 14px; color: {briefColors.pink}; font-weight: 600; margin-bottom: 12px;">
						The Problem
					</div>
					<p style="font-size: 14px; color: {briefColors.lightSlate}; line-height: 1.6; margin-bottom: 24px;">
						Finance team processing 2,000+ invoices monthly. 15 minutes per invoice, 8% error rate, 3-day approval
						cycle. Staff spending 60% of time on data entry.
					</p>
					<div style="font-size: 14px; color: {briefColors.cyan}; font-weight: 600; margin-bottom: 12px;">
						The Solution
					</div>
					<p style="font-size: 14px; color: {briefColors.lightSlate}; line-height: 1.6;">
						AI agent monitors inbox, extracts invoice data, matches to POs, validates amounts, routes for approval or
						flags exceptions. Humans handle exceptions only.
					</p>
				</div>
				<div>
					<div style="font-size: 14px; color: {briefColors.purple}; font-weight: 600; margin-bottom: 16px;">
						The Results
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
						{#each caseMetrics as item, i (i)}
							<div style="padding: 16px; background-color: rgba(255,255,255,0.05); border-radius: 6px;">
								<div style="font-size: 11px; color: {briefColors.lightSlate}; margin-bottom: 8px;">
									{item.label}
								</div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<span style="font-size: 14px; color: {briefColors.slate}; text-decoration: line-through;"
										>{item.before}</span
									>
									<span style="color: {briefColors.cyan};">→</span>
									<span style="font-size: 18px; font-weight: 600; color: {briefColors.white};">{item.after}</span>
								</div>
							</div>
						{/each}
					</div>
					<div style="margin-top: 20px; padding: 16px; background-color: {briefColors.green}20; border-radius: 6px;">
						<div style="font-size: 14px; color: {briefColors.green}; font-weight: 600;">
							$180K annual savings • 5-month payback
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
	{@render deckSlide(true, 9, s9)}

	{#snippet s10()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Fit Assessment
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 32px 0;">
				AI automation might be right for you if...
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
				<div>
					<div
						style="font-size: 16px; font-weight: 600; color: {briefColors.green}; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
					>
						<span>✓</span> Good fit
					</div>
					{#each goodFit as item, i (i)}
						<div
							style="font-size: 14px; color: {briefColors.deepNavy}; padding: 10px 0; border-bottom: 1px solid {briefColors.lightSlate}22; display: flex; gap: 10px;"
						>
							<span style="color: {briefColors.green};">•</span>
							{item}
						</div>
					{/each}
				</div>
				<div>
					<div
						style="font-size: 16px; font-weight: 600; color: {briefColors.orange}; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
					>
						<span>○</span> Maybe not yet
					</div>
					{#each badFit as item, i (i)}
						<div
							style="font-size: 14px; color: {briefColors.slate}; padding: 10px 0; border-bottom: 1px solid {briefColors.lightSlate}22; display: flex; gap: 10px;"
						>
							<span style="color: {briefColors.orange};">•</span>
							{item}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/snippet}
	{@render deckSlide(false, 10, s10)}

	{#snippet s11()}
		<div style="flex: 1; padding: 60px 80px;">
			<div
				style="font-size: 12px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
			>
				Next Steps
			</div>
			<h2 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 40px 0;">
				How to get started
			</h2>
			<div style="display: flex; gap: 32px; margin-bottom: 48px;">
				{#each nextSteps as item, i (i)}
					<div style="flex: 1; text-align: center;">
						<div
							style="width: 64px; height: 64px; border-radius: 50%; background-color: {item.color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: {briefColors.white}; font-size: 28px; font-weight: 700;"
						>
							{item.num}
						</div>
						<div style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 10px;">
							{item.title}
						</div>
						<div style="font-size: 14px; color: {briefColors.slate}; line-height: 1.5;">{item.desc}</div>
					</div>
				{/each}
			</div>
			<div
				style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 32px; text-align: center;"
			>
				<p style="font-size: 18px; color: {briefColors.deepNavy}; margin: 0 0 8px 0;">
					Most businesses have 3-5 processes perfect for AI automation.
				</p>
				<p style="font-size: 16px; color: {briefColors.slate}; margin: 0;">
					We can help you identify them in a single conversation.
				</p>
			</div>
		</div>
	{/snippet}
	{@render deckSlide(false, 11, s11)}

	{#snippet s12()}
		<div
			style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px 80px; text-align: center;"
		>
			<div
				style="font-size: 14px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 24px;"
			>
				AI Flow
			</div>
			<h2 style="font-size: 42px; font-weight: 700; color: {briefColors.white}; margin: 0 0 32px 0;">Let us talk</h2>
			<div style="display: flex; gap: 48px; margin-bottom: 48px; flex-wrap: wrap; justify-content: center;">
				<div>
					<div style="font-size: 14px; color: {briefColors.lightSlate}; margin-bottom: 8px;">Email</div>
					<div style="font-size: 18px; color: {briefColors.white};">hello@aiflow.example</div>
				</div>
				<div>
					<div style="font-size: 14px; color: {briefColors.lightSlate}; margin-bottom: 8px;">Phone</div>
					<div style="font-size: 18px; color: {briefColors.white};">(08) XXXX XXXX</div>
				</div>
				<div>
					<div style="font-size: 14px; color: {briefColors.lightSlate}; margin-bottom: 8px;">Web</div>
					<div style="font-size: 18px; color: {briefColors.cyan};">aiflow.example</div>
				</div>
			</div>
			<div
				style="padding: 16px 40px; background-color: {briefColors.cyan}; border-radius: 8px; color: {briefColors.deepNavy}; font-size: 16px; font-weight: 600;"
			>
				Book a discovery call
			</div>
		</div>
	{/snippet}
	<div
		style="max-width: 960px; margin: 0 auto 40px; background-color: {briefColors.deepNavy}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); aspect-ratio: 16/9; position: relative; overflow: hidden; display: flex; flex-direction: column;"
	>
		{@render slideBar()}
		{@render s12()}
		{@render slideNum(12, 12, true)}
	</div>
</div>
