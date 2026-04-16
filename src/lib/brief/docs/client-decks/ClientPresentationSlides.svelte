<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	type Props = { currentSlide: number };
	let { currentSlide }: Props = $props();

	const serif = "Georgia, 'Times New Roman', serif";
	const sans = 'Inter, system-ui, sans-serif';

	const solutionCards = [
		{
			num: '01',
			title: 'AI Scheduling Engine',
			items: ['Intelligent assignment', 'Skill matching', 'Route optimisation'],
			color: c.cyan,
		},
		{
			num: '02',
			title: 'Compliance & Fatigue',
			items: ['Automated monitoring', 'Breach prevention', 'Audit trails'],
			color: c.purple,
		},
		{
			num: '03',
			title: 'Communication Hub',
			items: ['Driver mobile app', 'Instant notifications', 'Two-way messaging'],
			color: c.pink,
		},
	];

	const timelineRows = [
		{
			phase: '01',
			title: 'Discovery & Foundation',
			weeks: 'Weeks 1-4',
			color: c.cyan,
			items: ['Requirements deep-dive', 'System architecture', 'Integration mapping', 'UI/UX design'],
		},
		{
			phase: '02',
			title: 'Core Development',
			weeks: 'Weeks 5-12',
			color: c.purple,
			items: ['Scheduling engine build', 'Compliance module', 'Mobile app development', 'AI model training'],
		},
		{
			phase: '03',
			title: 'Integration & Testing',
			weeks: 'Weeks 13-16',
			color: c.pink,
			items: ['TMS integration', 'Payroll connection', 'User acceptance testing', 'Performance tuning'],
		},
		{
			phase: '04',
			title: 'Deployment & Handover',
			weeks: 'Weeks 17-20',
			color: c.orange,
			items: ['Staged rollout', 'Team training', 'Documentation', 'Go-live support'],
		},
	];

	const deliverableLines = [
		'AI scheduling engine with optimisation',
		'Web-based scheduling dashboard',
		'Native iOS and Android driver apps',
		'Fatigue management module',
		'Real-time communication system',
		'TMS and payroll integrations',
		'Analytics and reporting dashboard',
		'Complete technical documentation',
		'Administrator training program',
		'Driver onboarding materials',
	];

	const team = [
		{
			name: 'Amel',
			initials: 'AM',
			role: 'CTO',
			focus: 'Client relationship, business strategy, delivery oversight',
			years: '20+',
			color: c.cyan,
		},
		{
			name: '[Name withheld]',
			initials: '\u2014',
			role: 'Delivery Manager',
			focus: 'Operations, team coordination, quality assurance',
			years: '20',
			color: c.purple,
		},
		{
			name: '[Name withheld]',
			initials: '\u2014',
			role: 'Technical Architect',
			focus: 'AI engine, system architecture, integration design',
			years: '35+',
			color: c.pink,
		},
		{
			name: '[Name withheld]',
			initials: '\u2014',
			role: 'Lead Developer',
			focus: 'Core development, mobile apps, API architecture',
			years: '7',
			color: c.orange,
		},
	];

	const payments = [
		{ milestone: 'Project Kickoff', amount: '$28,500', percent: '20%' },
		{ milestone: 'Phase 1 Complete', amount: '$28,500', percent: '20%' },
		{ milestone: 'Phase 2 Complete', amount: '$35,625', percent: '25%' },
		{ milestone: 'Phase 3 Complete', amount: '$28,500', percent: '20%' },
		{ milestone: 'Go-Live', amount: '$21,375', percent: '15%' },
	];

	const fromUs = [
		{ title: 'Dedicated project lead', desc: 'Single point of accountability' },
		{ title: 'Fortnightly steering committee', desc: 'Progress updates with leadership' },
		{ title: 'Weekly status reports', desc: 'Written updates every Friday' },
		{ title: 'Direct communication', desc: 'Slack channel for coordination' },
		{ title: 'Transparent progress', desc: 'Live project tracking access' },
	];

	const fromYou = [
		{ title: 'Project sponsor', desc: 'Executive for key decisions' },
		{ title: 'Subject matter experts', desc: 'Scheduling & compliance knowledge' },
		{ title: 'System access', desc: 'TMS, payroll, IT environment' },
		{ title: 'Driver champions', desc: '2-3 drivers for testing' },
		{ title: 'Timely feedback', desc: '48-hour turnaround on approvals' },
	];
</script>

{#snippet gradientBar(height: number)}
	<div
		style="height: {height}px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
	></div>
{/snippet}

{#snippet logo(size: number, bgInner: string)}
	<svg width={size} height={size * 1.28} viewBox="0 0 56 72" aria-hidden="true">
		<path
			d="M12 20 L28 4 L44 20 L44 52 L28 68 L12 52 Z"
			fill="url(#client-presentation-logo-grad)"
			opacity="0.5"
			transform="translate(6, 2)"
		/>
		<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill="url(#client-presentation-logo-grad)" />
		<path d="M18 28 L28 18 L28 38 L18 48 Z" fill={bgInner === 'transparent' ? c.white : bgInner} />
	</svg>
{/snippet}

<div style="width: 100%; height: 100%; font-family: {sans}; position: relative;">
	<svg width="0" height="0" style="position: absolute" aria-hidden="true">
		<defs>
			<linearGradient id="client-presentation-logo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stop-color={c.cyan} />
				<stop offset="35%" stop-color={c.purple} />
				<stop offset="65%" stop-color={c.pink} />
				<stop offset="100%" stop-color={c.orange} />
			</linearGradient>
		</defs>
	</svg>

	{#if currentSlide === 0}
		<div
			style="height: 100%; background: {c.deepNavy}; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; padding: 40px;"
		>
			<div style="position: absolute; top: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
			<div style="margin-bottom: 32px;">
				{@render logo(48, c.deepNavy)}
			</div>
			<div
				style="font-size: 12px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				Presentation
			</div>
			<h1
				style="font-family: {serif}; font-size: 42px; color: {c.white}; text-align: center; margin: 0 0 12px 0; font-weight: 400; letter-spacing: -1px; line-height: 1.2;"
			>
				AI-Powered Scheduling System
			</h1>
			<p style="font-size: 18px; color: {c.lightSlate}; text-align: center; margin: 0 0 32px 0;">
				for your organisation
			</p>
			<div style="display: flex; gap: 24px; color: {c.lightSlate}; font-size: 13px;">
				<span>February 2026</span>
				<span style="color: {c.slate};">•</span>
				<span>aiflow.au</span>
			</div>
			<div style="position: absolute; bottom: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
		</div>
	{:else if currentSlide === 1}
		<div style="height: 100%; background: {c.white}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				The Opportunity
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.deepNavy}; margin: 0 0 32px 0; font-weight: 400; line-height: 1.2;"
			>
				You're scaling fast. Manual scheduling can't keep up.
			</h2>
			<div style="display: flex; gap: 40px; flex: 1;">
				<div style="flex: 1;">
					<p style="font-size: 15px; color: {c.slate}; line-height: 1.7; margin: 0 0 20px 0;">
						With 200+ drivers across metropolitan Perth and regional WA, your current scheduling process is reaching
						its limits. Coordinators spend hours on manual allocation. Last-minute changes create chaos.
					</p>
					<p style="font-size: 16px; color: {c.deepNavy}; line-height: 1.6; margin: 0; font-weight: 500;">
						There's a better way.
					</p>
				</div>
				<div
					style="width: 200px; background: {c.offWhite}; border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: center; gap: 20px;"
				>
					{#each [{ value: '200+', label: 'Drivers' }, { value: '40%', label: 'Time on scheduling' }, { value: '∞', label: 'Compliance headaches' }] as stat}
						<div>
							<div style="font-size: 28px; font-weight: 700; color: {c.deepNavy}; line-height: 1;">{stat.value}</div>
							<div style="font-size: 12px; color: {c.slate}; margin-top: 2px;">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else if currentSlide === 2}
		<div style="height: 100%; background: {c.white}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				The Solution
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.deepNavy}; margin: 0 0 32px 0; font-weight: 400;"
			>
				What we'll build
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; flex: 1;">
				{#each solutionCards as card}
					<div style="background: {c.offWhite}; border-radius: 12px; padding: 24px; border-top: 4px solid {card.color};">
						<div style="font-size: 24px; font-weight: 700; color: {card.color}; opacity: 0.4; margin-bottom: 12px;">
							{card.num}
						</div>
						<h3 style="font-size: 16px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 12px;">
							{card.title}
						</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each card.items as item}
								<li
									style="font-size: 13px; color: {c.slate}; padding: 4px 0; padding-left: 16px; position: relative;"
								>
									<span
										style="position: absolute; left: 0; top: 10px; width: 5px; height: 5px; border-radius: 50%; background-color: {card.color};"
									></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	{:else if currentSlide === 3}
		<div style="height: 100%; background: {c.deepNavy}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				The Plan
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.white}; margin: 0 0 32px 0; font-weight: 400;"
			>
				20 weeks to transform your operations
			</h2>
			<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 16px;">
				{#each timelineRows as phase}
					<div style="display: flex; align-items: center; gap: 16px;">
						<div
							style="width: 40px; height: 40px; border-radius: 50%; background-color: {phase.color}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: {c.white}; flex-shrink: 0;"
						>
							{phase.phase}
						</div>
						<div
							style="flex: 1; background-color: {phase.color}15; border-radius: 8px; padding: 14px 20px; border-left: 3px solid {phase.color}; display: flex; justify-content: space-between; align-items: center;"
						>
							<div>
								<h3 style="font-size: 15px; font-weight: 600; color: {c.white}; margin: 0 0 6px 0;">
									{phase.title}
								</h3>
								<div style="display: flex; gap: 12px; flex-wrap: wrap;">
									{#each phase.items as item}
										<span
											style="font-size: 11px; color: {c.lightSlate}; background-color: {c.white}10; padding: 3px 10px; border-radius: 4px;"
										>
											{item}
										</span>
									{/each}
								</div>
							</div>
							<span style="font-size: 12px; color: {phase.color}; font-weight: 500; white-space: nowrap; margin-left: 16px;">
								{phase.weeks}
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else if currentSlide === 4}
		<div style="height: 100%; background: {c.white}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				Deliverables
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.deepNavy}; margin: 0 0 28px 0; font-weight: 400;"
			>
				What you get
			</h2>
			<div
				style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px 32px; flex: 1; align-content: start;"
			>
				{#each deliverableLines as item}
					<div
						style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background-color: {c.offWhite}; border-radius: 8px;"
					>
						<div
							style="width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple}); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
						>
							<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
								<path d="M20 6L9 17l-5-5" />
							</svg>
						</div>
						<span style="font-size: 13px; color: {c.deepNavy};">{item}</span>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 16px; padding: 14px 20px; background-color: {c.offWhite}; border-radius: 8px; border-left: 3px solid {c.cyan};"
			>
				<span style="font-size: 13px; color: {c.slate};">
					<strong style="color: {c.deepNavy};">Plus:</strong> 12-month warranty, 40 hours post-launch support, full source
					code ownership
				</span>
			</div>
		</div>
	{:else if currentSlide === 5}
		<div style="height: 100%; background: {c.white}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				Your Team
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.deepNavy}; margin: 0 0 8px 0; font-weight: 400;"
			>
				Senior leaders, not junior consultants
			</h2>
			<p style="font-size: 15px; color: {c.slate}; margin: 0 0 28px 0;">
				The people you meet today are the people who'll deliver your project. No handoffs, no surprises.
			</p>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; flex: 1;">
				{#each team as person}
					<div
						style="background-color: {c.offWhite}; border-radius: 12px; padding: 24px 20px; display: flex; flex-direction: column; align-items: center; text-align: center;"
					>
						<div
							style="width: 64px; height: 64px; border-radius: 50%; background: {person.color}25; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; font-size: 20px; font-weight: 600; color: {person.color};"
						>
							{person.initials}
						</div>
						<h3 style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin: 0 0 4px 0;">{person.name}</h3>
						<div style="font-size: 12px; color: {person.color}; font-weight: 500; margin-bottom: 10px;">
							{person.role}
						</div>
						<p style="font-size: 11px; color: {c.slate}; line-height: 1.4; margin: 0 0 12px 0; flex: 1;">
							{person.focus}
						</p>
						<div style="font-size: 22px; font-weight: 700; color: {c.deepNavy};">{person.years}</div>
						<div
							style="font-size: 10px; color: {c.slate}; text-transform: uppercase; letter-spacing: 0.5px;"
						>
							Years exp.
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else if currentSlide === 6}
		<div style="height: 100%; background: {c.deepNavy}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				Investment
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.white}; margin: 0 0 32px 0; font-weight: 400;"
			>
				Clear pricing, shared milestones
			</h2>
			<div style="display: flex; gap: 40px; flex: 1;">
				<div style="flex: 1;">
					<div style="background-color: {c.white}10; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<div style="font-size: 13px; color: {c.lightSlate}; margin-bottom: 6px;">Total Investment</div>
						<div style="font-size: 48px; font-weight: 700; color: {c.white}; line-height: 1;">$142,500</div>
						<div style="font-size: 14px; color: {c.lightSlate}; margin-top: 6px;">excluding GST</div>
					</div>
					<div style="display: flex; gap: 16px;">
						{#each [{ value: '20', label: 'Weeks', color: c.cyan }, { value: '4', label: 'Phases', color: c.purple }, { value: '5', label: 'Payments', color: c.pink }] as item}
							<div
								style="flex: 1; background-color: {item.color}20; border-radius: 12px; padding: 16px; text-align: center;"
							>
								<div style="font-size: 28px; font-weight: 700; color: {item.color};">{item.value}</div>
								<div style="font-size: 11px; color: {c.lightSlate};">{item.label}</div>
							</div>
						{/each}
					</div>
				</div>
				<div style="width: 280px;">
					<h3 style="font-size: 14px; font-weight: 600; color: {c.white}; margin-bottom: 16px;">Payment Schedule</h3>
					{#each payments as payment, i}
						<div
							style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: {i <
							4
								? `1px solid ${c.white}15`
								: 'none'};"
						>
							<div>
								<div style="font-size: 13px; color: {c.white};">{payment.milestone}</div>
								<div style="font-size: 11px; color: {c.lightSlate};">{payment.percent}</div>
							</div>
							<div style="font-size: 14px; font-weight: 600; color: {c.cyan};">{payment.amount}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else if currentSlide === 7}
		<div style="height: 100%; background: {c.white}; padding: 48px 64px; display: flex; flex-direction: column;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; font-weight: 600;"
			>
				Partnership
			</div>
			<h2
				style="font-family: {serif}; font-size: 36px; color: {c.deepNavy}; margin: 0 0 28px 0; font-weight: 400;"
			>
				How we'll work together
			</h2>
			<div style="display: flex; gap: 40px; flex: 1;">
				<div style="flex: 1;">
					<h3 style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">From us</h3>
					{#each fromUs as item, i}
						<div style="padding: 10px 0; border-bottom: {i < 4 ? `1px solid ${c.lightSlate}33` : 'none'};">
							<div style="font-size: 13px; font-weight: 500; color: {c.deepNavy};">{item.title}</div>
							<div style="font-size: 12px; color: {c.slate}; margin-top: 2px;">{item.desc}</div>
						</div>
					{/each}
				</div>
				<div style="flex: 1;">
					<h3 style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">From you</h3>
					{#each fromYou as item, i}
						<div style="padding: 10px 0; border-bottom: {i < 4 ? `1px solid ${c.lightSlate}33` : 'none'};">
							<div style="font-size: 13px; font-weight: 500; color: {c.deepNavy};">{item.title}</div>
							<div style="font-size: 12px; color: {c.slate}; margin-top: 2px;">{item.desc}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div
			style="height: 100%; background: {c.deepNavy}; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; padding: 48px;"
		>
			<div style="position: absolute; top: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
			>
				Next Steps
			</div>
			<h2
				style="font-family: {serif}; font-size: 40px; color: {c.white}; margin: 0 0 36px 0; font-weight: 400; text-align: center;"
			>
				Ready to move forward?
			</h2>
			<div style="display: flex; gap: 24px; margin-bottom: 40px;">
				{#each [{ num: '1', text: 'Sign the SOW' }, { num: '2', text: 'Schedule kickoff' }, { num: '3', text: 'Discovery begins' }] as step, i}
					<div style="display: flex; align-items: center; gap: 12px;">
						<div
							style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple}); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: {c.white};"
						>
							{step.num}
						</div>
						<span style="font-size: 16px; color: {c.white};">{step.text}</span>
						{#if i < 2}
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke={c.lightSlate}
								stroke-width="2"
								style="margin-left: 12px;"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						{/if}
					</div>
				{/each}
			</div>
			<div style="background-color: {c.white}10; border-radius: 16px; padding: 24px 40px; text-align: center;">
				<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 6px;">Questions? Let's talk.</div>
				<div style="font-size: 20px; color: {c.white}; font-weight: 500;">hello@aiflow.au</div>
			</div>
			<div style="position: absolute; bottom: 32px; display: flex; align-items: center; gap: 10px;">
				{@render logo(20, c.deepNavy)}
				<span style="color: {c.lightSlate}; font-size: 13px;">aiflow.au</span>
			</div>
			<div style="position: absolute; bottom: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
		</div>
	{/if}
</div>
