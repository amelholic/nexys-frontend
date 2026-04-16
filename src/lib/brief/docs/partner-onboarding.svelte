<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = c.pageBgDark;

	const sections = [
		{ id: 'overview', name: 'Overview', icon: '🏠' },
		{ id: 'solution', name: 'Our Solution', icon: '🤖' },
		{ id: 'icp', name: 'Ideal Client', icon: '🎯' },
		{ id: 'opportunities', name: 'Spot Opportunities', icon: '🔍' },
		{ id: 'models', name: 'Engagement Models', icon: '🤝' },
		{ id: 'process', name: 'Sales Process', icon: '📈' },
		{ id: 'pricing', name: 'Pricing & Economics', icon: '💰' },
		{ id: 'resources', name: 'Resources', icon: '📚' },
	] as const;

	type SectionId = (typeof sections)[number]['id'];

	let activeSection = $state<SectionId>('overview');

	const useCases = [
		{ name: 'Invoice Processing', desc: 'Extract, match PO, validate, route approval', icon: '📄' },
		{ name: 'Contract Review', desc: 'Key terms, risks, obligations extraction', icon: '📝' },
		{ name: 'Employee Onboarding', desc: 'Process applications, verify docs, create accounts', icon: '👤' },
		{ name: 'Vendor Management', desc: 'Onboard vendors, validate compliance', icon: '🏢' },
		{ name: 'Customer Service', desc: 'Triage requests, draft responses, route', icon: '💬' },
	];

	const partnerModels = [
		{
			name: 'Referral Partner',
			color: c.cyan,
			effort: 'Low',
			yourRole: 'Introduce, qualify, warm handoff',
			ourRole: 'Sales, delivery, support',
			compensation: '10-15% of first-year contract',
			ongoing: '5% of renewals for 2 years',
			bestFor: "Partners who identify opportunities but don't deliver",
		},
		{
			name: 'Co-Delivery Partner',
			color: c.purple,
			effort: 'Medium',
			yourRole: 'Discovery, change management, client relationship',
			ourRole: 'Technical delivery, AI development, integration',
			compensation: 'Bill your services directly',
			ongoing: 'You can provide L1 support',
			bestFor: 'Partners with consulting/technical capability',
		},
		{
			name: 'White-Label Partner',
			color: c.pink,
			effort: 'High',
			yourRole: 'Sales, delivery lead, client relationship',
			ourRole: 'Technical delivery (behind the scenes)',
			compensation: 'You set pricing, pay us wholesale (~60%)',
			ongoing: 'You own support relationship',
			bestFor: 'Partners who want to offer AI agents under their brand',
		},
	];

	const qualificationQuestions = [
		{ question: 'What specific process is causing pain?', bad: 'Vague "efficiency"', good: 'Clear process named' },
		{ question: 'How many transactions per month?', bad: 'Under 500', good: '500+ for good ROI' },
		{ question: 'Who owns this process?', bad: 'No clear owner', good: 'Named individual with authority' },
		{ question: 'What systems are involved?', bad: 'Legacy, no APIs', good: 'Modern, accessible systems' },
		{ question: "What's the timeline?", bad: '"Someday"', good: 'Urgency, defined timeline' },
		{ question: 'Is there budget?', bad: 'No budget allocated', good: 'Budget allocated or allocatable' },
	];

	const triggerPhrases = [
		"We're drowning in invoices/applications/requests",
		"We can't hire fast enough",
		'Our team spends all day on data entry',
		'We have a backlog of [X]',
		'Month-end is always a scramble',
		'We keep making errors because of volume',
		"Our RPA project isn't delivering",
	];
</script>

<div style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh;">
	<div
		style="background: linear-gradient(135deg, {c.deepNavy} 0%, {pageBg} 100%); border-bottom: 1px solid {c.slate}33; padding: 32px 40px;"
	>
		<div style="max-width: 1200px; margin: 0 auto;">
			<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
				<div>
					<div
						style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 8px;"
					>
						Partner Program
					</div>
					<h1 style="font-size: 32px; font-weight: 700; color: {c.white}; margin: 0;">Partner Onboarding Guide</h1>
				</div>
				<div style="font-size: 16px; font-weight: 600; color: {c.cyan};">AI Flow</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: minmax(200px, 240px) 1fr; gap: 32px; padding: 32px 40px; align-items: start;"
		class="partner-grid"
	>
		<div style="position: sticky; top: 32px;">
			<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 16px;">
				{#each sections as section}
					<button
						type="button"
						onclick={() => (activeSection = section.id)}
						style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 16px; border-radius: 8px; cursor: pointer; background-color: {activeSection === section.id
							? `${c.cyan}33`
							: 'transparent'}; margin-bottom: 4px; border: none; text-align: left;"
					>
						<span style="font-size: 16px;">{section.icon}</span>
						<span
							style="font-size: 13px; color: {activeSection === section.id ? c.white : c.lightSlate}; font-weight: {activeSection === section.id
								? '600'
								: '400'};"
						>
							{section.name}
						</span>
					</button>
				{/each}
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 20px; margin-top: 16px;">
				<div style="font-size: 12px; font-weight: 600; color: {c.orange}; margin-bottom: 12px;">First 30 Days</div>
				{#each ['Read this guide', 'Complete certification', 'Access partner portal', 'Schedule intro call', 'Review sales materials', 'Identify 2-3 opportunities', 'Register first deal'] as item}
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
						<div
							style="width: 16px; height: 16px; border-radius: 4px; border: 2px solid {c.slate}; flex-shrink: 0;"
						></div>
						<span style="font-size: 11px; color: {c.lightSlate};">{item}</span>
					</div>
				{/each}
			</div>
		</div>

		<div>
			{#if activeSection === 'overview'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0;">
							Welcome to the Partnership
						</h2>
						<p style="font-size: 15px; color: {c.lightSlate}; line-height: 1.7; margin: 0 0 24px 0;">
							AI Flow builds AI agents that automate knowledge work. We partner with consultancies, system integrators,
							and technology firms to bring AI agent capability to their clients.
						</p>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
							{#each [{ title: 'Expand Offering', desc: 'Add AI agent capability without building a team', icon: '🚀' }, { title: 'Sticky Relationships', desc: 'AI agents create ongoing client engagement', icon: '🔗' }, { title: 'New Revenue', desc: 'Referral fees, co-delivery, or white-label', icon: '💰' }] as item}
								<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
									<div style="font-size: 24px; margin-bottom: 12px;">{item.icon}</div>
									<div style="font-size: 14px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
										{item.title}
									</div>
									<div style="font-size: 12px; color: {c.lightSlate};">{item.desc}</div>
								</div>
							{/each}
						</div>
					</div>
					<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
						<div
							style="background-color: {`${c.green}26`}; border-radius: 16px; padding: 24px; border: 1px solid {c.green}4d;"
						>
							<div style="font-size: 14px; font-weight: 600; color: {c.green}; margin-bottom: 16px;">What We Are</div>
							{#each ['AI agent specialists (it\'s all we do)', 'Outcome-focused delivery', 'Australian team, your timezone', 'Build, deploy, and support'] as item}
								<div
									style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: {c.lightSlate};"
								>
									<span style="color: {c.green};">✓</span>
									{item}
								</div>
							{/each}
						</div>
						<div style="background-color: {`${c.red}1a`}; border-radius: 16px; padding: 24px; border: 1px solid {c.red}33;">
							<div style="font-size: 14px; font-weight: 600; color: {c.red}; margin-bottom: 16px;">What We're Not</div>
							{#each ['Not an RPA vendor (AI, not screen scraping)', 'Not a platform to buy licenses', 'Not offshore development', 'Not consultants who hand off slides'] as item}
								<div
									style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: {c.lightSlate};"
								>
									<span style="color: {c.red};">✕</span>
									{item}
								</div>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeSection === 'solution'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0;">What AI Agents Do</h2>
						<p style="font-size: 15px; color: {c.lightSlate}; line-height: 1.7; margin: 0 0 24px 0;">
							AI agents read, understand, and act on information — like a skilled employee but infinitely scalable.
						</p>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
							<div
								style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;"
							>
								{#each [{ label: 'Documents/Emails', icon: '📄' }, { label: 'AI Agent', icon: '🤖', highlight: true }, { label: 'Decisions + Actions', icon: '✓' }, { label: 'Your Systems', icon: '🔗' }] as item, i}
									{#if i > 0}
										<span style="font-size: 24px; color: {c.cyan};">→</span>
									{/if}
									<div
										style="background-color: {item.highlight ? `${c.cyan}33` : c.deepNavy}; border: {item.highlight
											? `2px solid ${c.cyan}`
											: 'none'}; border-radius: 12px; padding: 16px 20px; text-align: center;"
									>
										<div style="font-size: 24px; margin-bottom: 8px;">{item.icon}</div>
										<div style="font-size: 11px; color: {item.highlight ? c.white : c.lightSlate};">
											{item.label}
										</div>
									</div>
								{/each}
							</div>
							<div style="text-align: center; margin-top: 16px;">
								<span style="font-size: 12px; color: {c.orange};">↓ Human Review (exceptions only)</span>
							</div>
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">
							Core Use Cases (Start Here)
						</h3>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
							{#each useCases as uc}
								<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px; text-align: center;">
									<div style="font-size: 32px; margin-bottom: 12px;">{uc.icon}</div>
									<div style="font-size: 13px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
										{uc.name}
									</div>
									<div style="font-size: 10px; color: {c.slate};">{uc.desc}</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeSection === 'icp'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0;">Ideal Client Profile</h2>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
							{#each [{ label: 'Size', value: '200-5,000 employees', desc: 'Mid-market sweet spot' }, { label: 'Industry', value: 'Manufacturing, Prof Services, Finance, Healthcare', desc: 'Document-heavy operations' }, { label: 'Budget', value: '$50K-$300K', desc: 'For initial project' }, { label: 'Pain', value: 'Manual processes', desc: "Growing volume, can't hire fast enough" }, { label: 'Readiness', value: 'Digital data', desc: 'Modern systems, engaged IT' }, { label: 'Sponsor', value: 'CFO, COO, Ops Leader', desc: 'With authority and budget' }] as item}
								<div style="background-color: {pageBg}; border-radius: 12px; padding: 16px;">
									<div style="font-size: 10px; color: {c.cyan}; margin-bottom: 4px;">{item.label}</div>
									<div style="font-size: 14px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
										{item.value}
									</div>
									<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
								</div>
							{/each}
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Qualification Questions</h3>
						<div style="display: flex; flex-direction: column; gap: 12px;">
							{#each qualificationQuestions as q}
								<div
									style="background-color: {pageBg}; border-radius: 12px; padding: 16px; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; align-items: center;"
									class="qual-row"
								>
									<div style="font-size: 13px; color: {c.white};">{q.question}</div>
									<div style="display: flex; align-items: center; gap: 6px;">
										<span style="color: {c.red};">✕</span>
										<span style="font-size: 11px; color: {c.lightSlate};">{q.bad}</span>
									</div>
									<div style="display: flex; align-items: center; gap: 6px;">
										<span style="color: {c.green};">✓</span>
										<span style="font-size: 11px; color: {c.lightSlate};">{q.good}</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeSection === 'opportunities'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0;">
							How to Spot Opportunities
						</h2>
						<p style="font-size: 15px; color: {c.lightSlate}; margin: 0 0 24px 0;">
							Listen for these trigger phrases in client conversations:
						</p>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
							{#each triggerPhrases as phrase}
								<div
									style="background-color: {`${c.orange}26`}; border: 1px solid {c.orange}4d; border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;"
								>
									<span style="font-size: 18px;">💬</span>
									<span style="font-size: 13px; color: {c.white};">"{phrase}"</span>
								</div>
							{/each}
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Conversation Starters</h3>
						<div style="display: flex; flex-direction: column; gap: 16px;">
							{#each ['"A lot of our clients are struggling with manual processes that are eating up their teams. Where are you seeing that in your business?"', "\"We've been helping companies automate things like invoice processing and contract review. Is that relevant to what you're dealing with?\"", '"What would your team do with an extra 20 hours a week if they weren\'t doing [repetitive task]?"'] as starter}
								<div
									style="background-color: {pageBg}; border-radius: 12px; padding: 20px; border-left: 4px solid {c.cyan};"
								>
									<p style="font-size: 14px; color: {c.lightSlate}; margin: 0; font-style: italic;">{starter}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeSection === 'models'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0;">Engagement Models</h2>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
							{#each partnerModels as model}
								<div style="background-color: {pageBg}; border-radius: 16px; overflow: hidden;">
									<div style="height: 4px; background-color: {model.color};"></div>
									<div style="padding: 24px;">
										<div
											style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 8px;"
										>
											<h3 style="font-size: 16px; font-weight: 700; color: {c.white}; margin: 0;">{model.name}</h3>
											<span
												style="font-size: 10px; padding: 4px 8px; background-color: {model.color}33; color: {model.color}; border-radius: 4px; white-space: nowrap;"
											>
												{model.effort} Effort
											</span>
										</div>
										<div style="font-size: 11px; color: {c.slate}; margin-bottom: 16px;">{model.bestFor}</div>
										<div style="display: flex; flex-direction: column; gap: 12px;">
											<div>
												<div style="font-size: 10px; color: {c.cyan}; margin-bottom: 2px;">Your Role</div>
												<div style="font-size: 12px; color: {c.lightSlate};">{model.yourRole}</div>
											</div>
											<div>
												<div style="font-size: 10px; color: {c.purple}; margin-bottom: 2px;">Our Role</div>
												<div style="font-size: 12px; color: {c.lightSlate};">{model.ourRole}</div>
											</div>
											<div>
												<div style="font-size: 10px; color: {c.green}; margin-bottom: 2px;">Compensation</div>
												<div style="font-size: 12px; color: {c.white}; font-weight: 600;">{model.compensation}</div>
											</div>
											<div>
												<div style="font-size: 10px; color: {c.orange}; margin-bottom: 2px;">Ongoing</div>
												<div style="font-size: 12px; color: {c.lightSlate};">{model.ongoing}</div>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Choosing the Right Model</h3>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 24px;">
							<div style="display: flex; flex-direction: column; gap: 16px;">
								<div style="display: flex; align-items: center; gap: 16px;">
									<span style="font-size: 14px; color: {c.white};">Do you want to deliver services?</span>
								</div>
								<div style="display: flex; gap: 24px; margin-left: 12px; flex-wrap: wrap;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<span style="color: {c.red};">No →</span>
										<span
											style="padding: 4px 12px; background-color: {`${c.cyan}33`}; border-radius: 4px; font-size: 12px; color: {c.cyan};"
											>Referral Partner</span
										>
									</div>
									<div style="display: flex; align-items: center; gap: 8px;">
										<span style="color: {c.green};">Yes →</span>
										<span style="font-size: 14px; color: {c.lightSlate};">Do you want to own the client relationship?</span>
									</div>
								</div>
								<div style="display: flex; gap: 24px; margin-left: 12px; flex-wrap: wrap;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<span style="color: {c.red};">No →</span>
										<span
											style="padding: 4px 12px; background-color: {`${c.purple}33`}; border-radius: 4px; font-size: 12px; color: {c.purple};"
											>Co-Delivery Partner</span
										>
									</div>
									<div style="display: flex; align-items: center; gap: 8px;">
										<span style="color: {c.green};">Yes →</span>
										<span
											style="padding: 4px 12px; background-color: {`${c.pink}33`}; border-radius: 4px; font-size: 12px; color: {c.pink};"
											>White-Label Partner</span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else if activeSection === 'process'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0;">Sales Process</h2>
						<div
							style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; gap: 8px; flex-wrap: wrap;"
						>
							{#each [{ step: 'Identify', owner: 'Partner', color: c.pink }, { step: 'Qualify', owner: 'Partner + HC', color: c.orange }, { step: 'Discovery', owner: 'AI Flow + P', color: c.purple }, { step: 'Propose', owner: 'AI Flow', color: c.cyan }, { step: 'Close', owner: 'Partner + HC', color: c.green }, { step: 'Deliver', owner: 'Per Model', color: c.green }] as stage, i}
								<div style="text-align: center;">
									<div
										style="width: 64px; height: 64px; border-radius: 50%; background-color: {stage.color}33; border: 3px solid {stage.color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px;"
									>
										<span style="font-size: 18px; font-weight: 700; color: {stage.color};">{i + 1}</span>
									</div>
									<div style="font-size: 13px; font-weight: 600; color: {c.white};">{stage.step}</div>
									<div style="font-size: 10px; color: {c.slate};">{stage.owner}</div>
								</div>
								{#if i < 5}
									<div style="color: {c.cyan}; font-size: 20px;">→</div>
								{/if}
							{/each}
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Typical Timeline</h3>
						<div style="display: flex; align-items: stretch; gap: 4px; flex-wrap: wrap;">
							{#each [{ phase: 'Identify → Qualify', time: '1 week', width: 10, color: c.pink }, { phase: 'Qualify → Discovery', time: '1-2 weeks', width: 15, color: c.orange }, { phase: 'Discovery → Proposal', time: '1 week', width: 10, color: c.purple }, { phase: 'Proposal → Close', time: '2-4 weeks', width: 25, color: c.cyan }, { phase: 'Close → Go-Live', time: '6-10 weeks', width: 40, color: c.green }] as item}
								<div
									style="flex: {item.width}; min-width: 120px; background-color: {item.color}; border-radius: 8px; padding: 12px 8px; text-align: center;"
								>
									<div style="font-size: 11px; font-weight: 600; color: {c.white};">{item.phase}</div>
									<div style="font-size: 10px; color: rgba(255,255,255,0.7);">{item.time}</div>
								</div>
							{/each}
						</div>
						<div style="text-align: center; margin-top: 16px; font-size: 14px; color: {c.cyan}; font-weight: 600;">
							Total: 3-4 months from first conversation to live agent
						</div>
					</div>
				</div>
			{:else if activeSection === 'pricing'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0;">
							Pricing & Partner Economics
						</h2>
						<div style="margin-bottom: 32px;">
							<h3 style="font-size: 16px; font-weight: 600; color: {c.white}; margin: 0 0 16px 0;">Typical Project Pricing</h3>
							<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
								{#each [{ type: 'Pilot', price: '$25-40K', duration: '4 weeks', desc: 'Single process, prove value' }, { type: 'Standard', price: '$60-100K', duration: '6-10 weeks', desc: 'One agent, full deployment' }, { type: 'Enterprise', price: '$150-300K', duration: '3-6 months', desc: 'Multi-agent program' }] as item}
									<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px; text-align: center;">
										<div style="font-size: 12px; color: {c.slate}; margin-bottom: 4px;">{item.type}</div>
										<div style="font-size: 24px; font-weight: 700; color: {c.green}; margin-bottom: 4px;">
											{item.price}
										</div>
										<div style="font-size: 12px; color: {c.cyan}; margin-bottom: 8px;">{item.duration}</div>
										<div style="font-size: 11px; color: {c.lightSlate};">{item.desc}</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Partner Economics</h3>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
							<div style="background-color: {`${c.cyan}26`}; border-radius: 12px; padding: 20px; border: 1px solid {c.cyan}4d;">
								<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">Referral Partner</div>
								<div style="font-size: 24px; font-weight: 700; color: {c.white}; margin-bottom: 4px;">10-15%</div>
								<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 12px;">of implementation fees</div>
								<div style="font-size: 11px; color: {c.slate};">Example: $80K project = $8-12K fee</div>
								<div style="font-size: 11px; color: {c.cyan}; margin-top: 8px;">+ 5% of renewals for 2 years</div>
							</div>
							<div style="background-color: {`${c.purple}26`}; border-radius: 12px; padding: 20px; border: 1px solid {c.purple}4d;">
								<div style="font-size: 14px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">Co-Delivery Partner</div>
								<div style="font-size: 24px; font-weight: 700; color: {c.white}; margin-bottom: 4px;">$20-40K</div>
								<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 12px;">your services on $100K project</div>
								<div style="font-size: 11px; color: {c.slate};">Bill your services at your rates</div>
								<div style="font-size: 11px; color: {c.purple}; margin-top: 8px;">+ referral fee on AI Flow portion</div>
							</div>
							<div style="background-color: {`${c.pink}26`}; border-radius: 12px; padding: 20px; border: 1px solid {c.pink}4d;">
								<div style="font-size: 14px; font-weight: 600; color: {c.pink}; margin-bottom: 12px;">White-Label Partner</div>
								<div style="font-size: 24px; font-weight: 700; color: {c.white}; margin-bottom: 4px;">~40%</div>
								<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 12px;">margin on wholesale pricing</div>
								<div style="font-size: 11px; color: {c.slate};">Example: $100K project, pay ~$60K</div>
								<div style="font-size: 11px; color: {c.pink}; margin-top: 8px;">You set pricing, own relationship</div>
							</div>
						</div>
					</div>
				</div>
			{:else if activeSection === 'resources'}
				<div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
						<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0;">Partner Resources</h2>
						<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
							<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
								<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 16px;">📁 Sales Materials</div>
								{#each ['Solution one-pager (co-brandable)', 'Sales presentation deck', 'Pricing calculator', 'ROI calculator', 'Case studies', 'FAQ document', 'Competitor battle cards'] as item}
									<div
										style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 12px; color: {c.lightSlate};"
									>
										<span>☐</span>
										{item}
									</div>
								{/each}
							</div>
							<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
								<div style="font-size: 14px; font-weight: 600; color: {c.purple}; margin-bottom: 16px;">📚 Enablement</div>
								{#each [{ name: 'Partner certification', desc: '4-hour self-paced' }, { name: 'Technical deep-dive', desc: '2-hour session' }, { name: 'Shadow opportunity', desc: 'Join a real deal' }, { name: 'Quarterly partner calls', desc: 'Updates & learnings' }] as item}
									<div style="margin-bottom: 10px;">
										<div style="font-size: 12px; color: {c.white};">{item.name}</div>
										<div style="font-size: 10px; color: {c.slate};">{item.desc}</div>
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
						<h3 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0 0 20px 0;">Your Partner Team</h3>
						<div
							style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;"
						>
							{#each [{ role: 'Partner Manager', desc: 'Strategy, escalations, commercial', icon: '👤' }, { role: 'Partner Sales', desc: 'Deal support, proposals, pricing', icon: '📈' }, { role: 'Partner Success', desc: 'Enablement, resources, onboarding', icon: '🎯' }] as contact}
								<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px; text-align: center;">
									<div style="font-size: 32px; margin-bottom: 12px;">{contact.icon}</div>
									<div style="font-size: 14px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
										{contact.role}
									</div>
									<div style="font-size: 11px; color: {c.slate};">{contact.desc}</div>
								</div>
							{/each}
						</div>
						<div
							style="background-color: {`${c.cyan}26`}; border-radius: 12px; padding: 20px; border: 1px solid {c.cyan}4d; text-align: center;"
						>
							<div style="font-size: 13px; color: {c.white}; margin-bottom: 8px;">Ready to get started?</div>
							<div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
								<div style="font-size: 14px; color: {c.cyan};">📧 partners@example.com</div>
								<div style="font-size: 14px; color: {c.cyan};">🌐 https://partners.example.com</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div style="text-align: center; padding: 40px; font-size: 12px; color: {c.slate};">
		<div style="color: {c.cyan}; font-weight: 600;">AI Flow Partner Program</div>
		<div style="margin-top: 4px;">Partner Onboarding Guide v1.0</div>
	</div>
</div>

<style>
	@media (max-width: 900px) {
		:global(.partner-grid) {
			grid-template-columns: 1fr !important;
		}
	}
	@media (max-width: 720px) {
		:global(.qual-row) {
			grid-template-columns: 1fr !important;
		}
	}
</style>
