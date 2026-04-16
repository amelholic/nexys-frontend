<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	type Props = { currentSlide: number };
	let { currentSlide }: Props = $props();

	const serif = "Georgia, 'Times New Roman', serif";
	const sans = 'Inter, system-ui, sans-serif';

	const opportunityLeft = [
		'450+ drivers across WA and NT',
		'Manual scheduling consuming hours daily',
		'Fatigue compliance tracked in spreadsheets',
		'Last-minute changes causing chaos',
	];

	const opportunityRight = [
		'AI handles routine scheduling decisions',
		'Compliance built into every assignment',
		'Real-time adjustments in minutes, not hours',
		'Coordinators focused on exceptions, not data entry',
	];

	const solutionCards = [
		{
			num: '01',
			title: 'AI Scheduling Engine',
			desc: 'Intelligent assignment considering qualifications, availability, location, and preferences. Learns patterns. Suggests optimisations.',
			color: c.cyan,
		},
		{
			num: '02',
			title: 'Compliance & Fatigue',
			desc: 'WA/NT fatigue regulations built in. Automatic breach prevention. Real-time alerts. Complete audit trail.',
			color: c.purple,
		},
		{
			num: '03',
			title: 'Communication Hub',
			desc: 'Instant driver notifications. Two-way confirmation. Availability updates. Shift swap requests.',
			color: c.pink,
		},
	];

	const timelinePhases = [
		{
			phase: 'Phase 1',
			title: 'Discovery',
			weeks: 'Weeks 1-4',
			items: ['Stakeholder interviews', 'System audit', 'Data mapping', 'Architecture design'],
		},
		{
			phase: 'Phase 2',
			title: 'Core Build',
			weeks: 'Weeks 5-12',
			items: ['Scheduling engine', 'Compliance rules', 'Driver mobile app', 'Admin dashboard'],
		},
		{
			phase: 'Phase 3',
			title: 'Integration',
			weeks: 'Weeks 13-16',
			items: ['TMS connection', 'Payroll sync', 'UAT testing', 'Performance tuning'],
		},
		{
			phase: 'Phase 4',
			title: 'Launch',
			weeks: 'Weeks 17-20',
			items: ['Pilot rollout', 'Team training', 'Full deployment', 'Handover'],
		},
	];

	const deliverables = [
		{ title: 'AI Scheduling Platform', desc: 'Web-based scheduling system with intelligent assignment engine' },
		{ title: 'Driver Mobile App', desc: 'iOS and Android apps for schedules, notifications, and availability' },
		{ title: 'Compliance Dashboard', desc: 'Real-time fatigue monitoring with alerts and audit trails' },
		{ title: 'Admin Console', desc: 'Full control over rules, overrides, and system configuration' },
		{ title: 'TMS Integration', desc: 'Bi-directional sync with your transport management system' },
		{ title: 'Documentation & Training', desc: 'Technical docs, user guides, and hands-on training sessions' },
	];

	const team = [
		{ name: 'Amel Holic', role: 'Project Lead', focus: 'Client relationship, strategic oversight', years: '20+ years' },
		{ name: 'Eugene van Aurich', role: 'Delivery Lead', focus: 'Day-to-day delivery, integrations', years: '20 years' },
		{ name: 'Phillip Whillier', role: 'Technical Architect', focus: 'AI engine, system architecture', years: '35+ years' },
		{ name: 'Luke Fordham', role: 'Lead Developer', focus: 'Platform development, mobile apps', years: '7 years' },
	];

	const investmentPhases = [
		{ phase: 'Phase 1', amount: '$28,500', milestone: 'Discovery complete' },
		{ phase: 'Phase 2', amount: '$57,000', milestone: 'Core build complete' },
		{ phase: 'Phase 3', amount: '$28,500', milestone: 'Integration complete' },
		{ phase: 'Phase 4', amount: '$28,500', milestone: 'Go-live' },
	];

	const fromUs = [
		'Weekly progress updates',
		'Fortnightly steering meetings',
		'Dedicated Slack channel',
		'Transparent issue tracking',
		'Monthly executive summary',
	];

	const fromYou = [
		'Project sponsor with decision authority',
		'Access to key stakeholders',
		'Timely feedback (48hr target)',
		'Test environment access',
		'Subject matter expertise',
	];

	function initials(name: string) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('');
	}
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
			fill="url(#client-proposal-logo-grad)"
			opacity="0.5"
			transform="translate(6, 2)"
		/>
		<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill="url(#client-proposal-logo-grad)" />
		<path d="M18 28 L28 18 L28 38 L18 48 Z" fill={bgInner === 'transparent' ? c.white : bgInner} />
	</svg>
{/snippet}

{#snippet slideFooter(slideNum: number, dark = false)}
	<div
		style="padding: 20px 72px; border-top: 1px solid {dark ? c.slate + '44' : c.lightSlate + '33'}; display: flex; justify-content: space-between; align-items: center;"
	>
		<div style="display: flex; align-items: center; gap: 10px;">
			{@render logo(16, dark ? c.deepNavy : c.white)}
			<span style="color: {dark ? c.lightSlate : c.slate}; font-size: 13px;">AI Flow</span>
		</div>
		<span style="color: {dark ? c.slate : c.lightSlate}; font-size: 13px;">Client proposal · AI scheduling</span>
		<span style="color: {dark ? c.slate : c.lightSlate}; font-size: 13px;">{slideNum} / 9</span>
	</div>
{/snippet}

<div style="width: 100%; height: 100%; font-family: {sans}; position: relative;">
	<svg width="0" height="0" style="position: absolute" aria-hidden="true">
		<defs>
			<linearGradient id="client-proposal-logo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stop-color={c.cyan} />
				<stop offset="35%" stop-color={c.purple} />
				<stop offset="65%" stop-color={c.pink} />
				<stop offset="100%" stop-color={c.orange} />
			</linearGradient>
		</defs>
	</svg>
	{#if currentSlide === 0}
		<div
			style="width: 100%; height: 100%; background-color: {c.deepNavy}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="position: absolute; top: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
			<div
				style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px; text-align: center;"
			>
				<div style="margin-bottom: 48px;">
					{@render logo(56, c.deepNavy)}
				</div>
				<div
					style="font-size: 14px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 24px;"
				>
					Proposal
				</div>
				<h1
					style="font-family: {serif}; font-size: 48px; color: {c.white}; font-weight: 400; margin: 0 0 16px 0; letter-spacing: -1px; line-height: 1.1;"
				>
					AI-Powered Scheduling System
				</h1>
				<p style="font-size: 20px; color: {c.lightSlate}; margin: 0 0 48px 0;">for your logistics operations</p>
				<div style="display: flex; gap: 32px; font-size: 14px; color: {c.lightSlate};">
					<span>February 2026</span>
					<span style="color: {c.slate};">•</span>
					<span>20-Week Engagement</span>
					<span style="color: {c.slate};">•</span>
					<span>$142,500</span>
				</div>
			</div>
			<div
				style="padding: 24px 60px; border-top: 1px solid {c.slate}44; display: flex; justify-content: space-between; align-items: center;"
			>
				<div style="display: flex; align-items: center; gap: 12px;">
					{@render logo(20, c.deepNavy)}
					<span style="color: {c.lightSlate}; font-size: 14px;">AI Flow</span>
				</div>
				<span style="color: {c.slate}; font-size: 13px;">aiflow.au</span>
			</div>
		</div>
	{:else if currentSlide === 1}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					The Opportunity
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 32px 0; letter-spacing: -0.5px; line-height: 1.2; max-width: 700px;"
				>
					Your fleet is growing. Your scheduling shouldn't hold you back.
				</h2>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 40px;">
					<div>
						<h3 style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 16px;">
							Where you are
						</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each opportunityLeft as item}
								<li
									style="font-size: 15px; color: {c.slate}; padding: 10px 0; padding-left: 24px; position: relative; border-bottom: 1px solid {c.lightSlate}33;"
								>
									<span
										style="position: absolute; left: 0; top: 14px; width: 8px; height: 8px; border-radius: 50%; background-color: {c.lightSlate};"
									></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<h3 style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 16px;">
							Where you could be
						</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each opportunityRight as item}
								<li
									style="font-size: 15px; color: {c.deepNavy}; padding: 10px 0; padding-left: 24px; position: relative; border-bottom: 1px solid {c.lightSlate}33; font-weight: 500;"
								>
									<span
										style="position: absolute; left: 0; top: 12px; width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple});"
									></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			{@render slideFooter(2)}
		</div>
	{:else if currentSlide === 2}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					The Solution
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 48px 0; letter-spacing: -0.5px;"
				>
					Three integrated capabilities
				</h2>
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
					{#each solutionCards as item}
						<div
							style="background-color: {c.offWhite}; border-radius: 12px; padding: 32px; position: relative; border-top: 4px solid {item.color};"
						>
							<div style="font-size: 32px; font-weight: 700; color: {item.color}; opacity: 0.3; margin-bottom: 16px;">
								{item.num}
							</div>
							<h3 style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 12px;">
								{item.title}
							</h3>
							<p style="font-size: 14px; color: {c.slate}; line-height: 1.6; margin: 0;">{item.desc}</p>
						</div>
					{/each}
				</div>
				<div
					style="margin-top: 40px; padding: 24px 32px; background-color: {c.deepNavy}; border-radius: 12px; display: flex; align-items: center; gap: 24px;"
				>
					<div
						style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple}); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
						</svg>
					</div>
					<div>
						<div style="font-size: 16px; color: {c.white}; font-weight: 600; margin-bottom: 4px;">
							Integrates with your existing systems
						</div>
						<div style="font-size: 14px; color: {c.lightSlate};">
							TMS integration, payroll sync, existing driver database — we work with what you have.
						</div>
					</div>
				</div>
			</div>
			{@render slideFooter(3)}
		</div>
	{:else if currentSlide === 3}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					The Plan
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 40px 0; letter-spacing: -0.5px;"
				>
					20 weeks to production
				</h2>
				<div style="position: relative;">
					<div
						style="position: absolute; top: 24px; left: 120px; right: 0; height: 4px; background-color: {c.lightSlate}33; border-radius: 2px;"
					>
						<div
							style="height: 100%; width: 100%; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
						></div>
					</div>
					<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
						{#each timelinePhases as phase}
							<div style="padding-top: 48px;">
								<div
									style="width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple}); margin-bottom: 16px; border: 3px solid white; box-shadow: 0 0 0 2px {c.purple};"
								></div>
								<div
									style="font-size: 11px; color: {c.purple}; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;"
								>
									{phase.phase}
								</div>
								<div style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 4px;">
									{phase.title}
								</div>
								<div style="font-size: 13px; color: {c.slate}; margin-bottom: 16px;">{phase.weeks}</div>
								<ul style="margin: 0; padding: 0; list-style: none;">
									{#each phase.items as item}
										<li
											style="font-size: 13px; color: {c.slate}; padding: 4px 0; padding-left: 16px; position: relative;"
										>
											<span
												style="position: absolute; left: 0; top: 10px; width: 4px; height: 4px; border-radius: 50%; background-color: {c.lightSlate};"
											></span>
											{item}
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			</div>
			{@render slideFooter(4)}
		</div>
	{:else if currentSlide === 4}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					Deliverables
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 40px 0; letter-spacing: -0.5px;"
				>
					What you get
				</h2>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px 48px;">
					{#each deliverables as item}
						<div
							style="display: flex; gap: 16px; padding: 20px 0; border-bottom: 1px solid {c.lightSlate}33;"
						>
							<div
								style="width: 40px; height: 40px; border-radius: 8px; background: linear-gradient(135deg, {c.cyan}22, {c.purple}22); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.purple} stroke-width="2">
									<path d="M20 6L9 17l-5-5" />
								</svg>
							</div>
							<div>
								<div style="font-size: 16px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 4px;">
									{item.title}
								</div>
								<div style="font-size: 14px; color: {c.slate}; line-height: 1.5;">{item.desc}</div>
							</div>
						</div>
					{/each}
				</div>
				<div
					style="margin-top: 32px; padding: 20px 24px; background-color: {c.offWhite}; border-radius: 8px; border-left: 4px solid {c.cyan};"
				>
					<div style="font-size: 14px; color: {c.slate};">
						<strong style="color: {c.deepNavy};">Plus:</strong> 12-month warranty on defects, 40 hours post-launch
						support, and full source code ownership.
					</div>
				</div>
			</div>
			{@render slideFooter(5)}
		</div>
	{:else if currentSlide === 5}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					Your Team
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 16px 0; letter-spacing: -0.5px;"
				>
					Senior people. Start to finish.
				</h2>
				<p style="font-size: 16px; color: {c.slate}; margin: 0 0 40px 0; max-width: 600px;">
					No juniors, no handoffs. The people you meet today are the people who deliver your project.
				</p>
				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
					{#each team as person}
						<div style="text-align: center;">
							<div
								style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, {c.deepNavy}, {c.slate}); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;"
							>
								<span style="font-size: 24px; font-weight: 600; color: {c.white};">{initials(person.name)}</span>
							</div>
							<div style="font-size: 16px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 4px;">
								{person.name}
							</div>
							<div style="font-size: 13px; color: {c.purple}; font-weight: 500; margin-bottom: 8px;">
								{person.role}
							</div>
							<div style="font-size: 12px; color: {c.slate}; line-height: 1.5; margin-bottom: 8px;">
								{person.focus}
							</div>
							<div
								style="font-size: 11px; color: {c.lightSlate}; background-color: {c.offWhite}; padding: 4px 12px; border-radius: 12px; display: inline-block;"
							>
								{person.years}
							</div>
						</div>
					{/each}
				</div>
				<div
					style="margin-top: 40px; text-align: center; padding: 24px; background-color: {c.offWhite}; border-radius: 12px;"
				>
					<div style="font-size: 14px; color: {c.slate};">
						Combined experience: <strong style="color: {c.deepNavy};">80+ years</strong> in software development and
						technical leadership
					</div>
				</div>
			</div>
			{@render slideFooter(6)}
		</div>
	{:else if currentSlide === 6}
		<div
			style="width: 100%; height: 100%; background-color: {c.deepNavy}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="position: absolute; top: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
			<div
				style="padding: 56px 72px; flex: 1; display: flex; flex-direction: column; justify-content: center;"
			>
				<div
					style="font-size: 12px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					Investment
				</div>
				<h2
					style="font-family: {serif}; font-size: 56px; color: {c.white}; font-weight: 400; margin: 0 0 8px 0; letter-spacing: -1px;"
				>
					$142,500
				</h2>
				<p style="font-size: 16px; color: {c.lightSlate}; margin: 0 0 48px 0;">excluding GST</p>
				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 48px;">
					{#each investmentPhases as item}
						<div
							style="background-color: {c.slate}33; border-radius: 12px; padding: 24px; text-align: center;"
						>
							<div
								style="font-size: 12px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;"
							>
								{item.phase}
							</div>
							<div style="font-size: 24px; color: {c.white}; font-weight: 600; margin-bottom: 8px;">
								{item.amount}
							</div>
							<div style="font-size: 12px; color: {c.lightSlate};">{item.milestone}</div>
						</div>
					{/each}
				</div>
				<div style="display: flex; gap: 48px;">
					<div>
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Duration</div>
						<div style="font-size: 20px; color: {c.white}; font-weight: 600;">20 weeks</div>
					</div>
					<div>
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Payment Terms</div>
						<div style="font-size: 20px; color: {c.white}; font-weight: 600;">Milestone-based</div>
					</div>
					<div>
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Warranty</div>
						<div style="font-size: 20px; color: {c.white}; font-weight: 600;">12 months</div>
					</div>
				</div>
			</div>
			{@render slideFooter(7, true)}
		</div>
	{:else if currentSlide === 7}
		<div
			style="width: 100%; height: 100%; background-color: {c.white}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="padding: 56px 72px; flex: 1;">
				<div
					style="font-size: 12px; color: {c.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
				>
					Working Together
				</div>
				<h2
					style="font-family: {serif}; font-size: 40px; color: {c.deepNavy}; font-weight: 400; margin: 0 0 40px 0; letter-spacing: -0.5px;"
				>
					How we'll collaborate
				</h2>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px;">
					<div>
						<h3 style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 20px;">From us</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each fromUs as item}
								<li
									style="font-size: 15px; color: {c.slate}; padding: 12px 0; padding-left: 32px; position: relative; border-bottom: 1px solid {c.lightSlate}33;"
								>
									<span
										style="position: absolute; left: 0; top: 14px; width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}22, {c.purple}22); display: flex; align-items: center; justify-content: center;"
									>
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c.purple} stroke-width="3">
											<path d="M20 6L9 17l-5-5" />
										</svg>
									</span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<h3 style="font-size: 18px; color: {c.deepNavy}; font-weight: 600; margin-bottom: 20px;">From you</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each fromYou as item}
								<li
									style="font-size: 15px; color: {c.slate}; padding: 12px 0; padding-left: 32px; position: relative; border-bottom: 1px solid {c.lightSlate}33;"
								>
									<span
										style="position: absolute; left: 0; top: 14px; width: 20px; height: 20px; border-radius: 50%; background-color: {c.offWhite}; border: 2px solid {c.lightSlate}; display: flex; align-items: center; justify-content: center;"
									></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div
					style="margin-top: 40px; padding: 24px 32px; background-color: {c.offWhite}; border-radius: 12px; display: flex; align-items: center; gap: 16px;"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c.purple} stroke-width="2">
						<circle cx="12" cy="12" r="10" />
						<path d="M12 16v-4M12 8h.01" />
					</svg>
					<div style="font-size: 14px; color: {c.slate};">
						We'll identify a <strong style="color: {c.deepNavy};">Project Sponsor</strong> from your organisation during
						kickoff — someone with authority to make decisions and keep things moving.
					</div>
				</div>
			</div>
			{@render slideFooter(8)}
		</div>
	{:else}
		<div
			style="width: 100%; height: 100%; background-color: {c.deepNavy}; display: flex; flex-direction: column; position: relative; overflow: hidden;"
		>
			<div style="position: absolute; top: 0; left: 0; right: 0;">
				{@render gradientBar(5)}
			</div>
			<div
				style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px; text-align: center;"
			>
				<div
					style="font-size: 12px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px; font-weight: 600;"
				>
					Next Steps
				</div>
				<h2
					style="font-family: {serif}; font-size: 44px; color: {c.white}; font-weight: 400; margin: 0 0 48px 0; letter-spacing: -0.5px; max-width: 600px;"
				>
					Ready to move forward?
				</h2>
				<div style="display: flex; gap: 32px; margin-bottom: 56px;">
					{#each [{ num: '1', text: 'Sign SOW' }, { num: '2', text: 'Schedule kickoff' }, { num: '3', text: 'Discovery begins Week 1' }] as step, i}
						<div style="display: flex; align-items: center; gap: 16px;">
							<div
								style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple}); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 600; color: {c.white};"
							>
								{step.num}
							</div>
							<span style="font-size: 18px; color: {c.white};">{step.text}</span>
							{#if i < 2}
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke={c.lightSlate}
									stroke-width="2"
									style="margin-left: 16px;"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							{/if}
						</div>
					{/each}
				</div>
				<div
					style="background-color: {c.slate}33; border-radius: 16px; padding: 32px 48px; display: flex; align-items: center; gap: 48px;"
				>
					<div style="text-align: left;">
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Questions?</div>
						<div style="font-size: 18px; color: {c.white}; font-weight: 500;">Amel Holic</div>
					</div>
					<div style="text-align: left;">
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Email</div>
						<div style="font-size: 16px; color: {c.cyan};">hello@aiflow.au</div>
					</div>
					<div style="text-align: left;">
						<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 4px;">Web</div>
						<div style="font-size: 16px; color: {c.cyan};">aiflow.au</div>
					</div>
				</div>
			</div>
			<div
				style="padding: 24px 60px; border-top: 1px solid {c.slate}44; display: flex; justify-content: space-between; align-items: center;"
			>
				<div style="display: flex; align-items: center; gap: 12px;">
					{@render logo(20, c.deepNavy)}
					<span style="color: {c.lightSlate}; font-size: 14px;">AI Flow</span>
				</div>
				<span style="color: {c.slate}; font-size: 13px;">Technical partnership. Senior-led. Outcome-driven.</span>
			</div>
		</div>
	{/if}
</div>
