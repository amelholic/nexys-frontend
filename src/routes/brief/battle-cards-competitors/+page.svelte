<script lang="ts">
	import BattleCard from '$lib/components/brief/BattleCard.svelte';
	import Section from '$lib/components/brief/Section.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	let activeTab = $state('rpa');

	const rpaEncounter = [
		'Enterprise accounts with existing RPA investments',
		'IT-led automation initiatives',
		'Clients who\'ve heard "RPA" as the answer',
		'Competitive RFPs for automation projects',
	];

	const rpaStrengths = [
		'Brand recognition and enterprise trust',
		'Large partner and implementation ecosystem',
		'Works with legacy systems (screen scraping)',
		'Orchestration and bot management at scale',
		'Strong governance and audit capabilities',
		'Existing enterprise agreements in place',
	];

	const rpaWeaknesses = [
		{ weakness: 'Brittle automation', detail: 'Breaks when UI changes. Move a button, bot fails. High maintenance burden.' },
		{ weakness: 'No understanding', detail: 'RPA doesn\'t read or reason. It clicks. AI agents understand documents, make decisions.' },
		{ weakness: 'High TCO', detail: 'License costs + infrastructure + maintenance + CoE team. Often 3-5x initial estimate.' },
		{ weakness: 'Long implementation', detail: 'Typical RPA projects: 3-6 months. We deliver in 6-10 weeks.' },
		{ weakness: 'Limited to structured processes', detail: 'Struggles with variability, judgment, unstructured data.' },
	];

	const rpaDifferentiators = [
		{ title: 'AI-Native', desc: 'We read, understand, and reason. Not just click.' },
		{ title: 'Handles Variability', desc: 'Different formats, edge cases, exceptions — no problem.' },
		{ title: 'Faster Delivery', desc: '6-10 weeks vs 3-6 months typical RPA.' },
		{ title: 'Lower TCO', desc: 'No bot licenses, no infrastructure, no CoE team.' },
		{ title: 'Future-Proof', desc: 'AI gets better. RPA scripts just get older.' },
		{ title: 'Outcome-Based', desc: 'We guarantee results, not just deliverables.' },
	];

	const rpaObjections = [
		{
			objection: '"We already have UiPath/AA licenses."',
			response: 'Great — we\'re not asking you to rip it out. RPA is good for structured, stable UI automation. AI agents handle the unstructured, variable work RPA can\'t. Many clients use both. Let\'s look at where RPA is struggling or where you haven\'t automated because it\'s "too complex."'
		},
		{
			objection: '"Our RPA team can do this."',
			response: 'RPA teams are great at what they do, but they\'re often backlogged and focused on maintaining existing bots. AI agents are a different skillset. We can work alongside your RPA team — we handle the AI work, they focus on what they\'re good at.'
		},
		{
			objection: '"UiPath now has AI features."',
			response: 'They\'re adding AI as a feature. We\'re AI-native — it\'s our entire approach. Their AI is bolted on; ours is foundational. Ask them: can their AI read an invoice it\'s never seen and extract data correctly? We do that every day.'
		},
	];

	const rpaKillerQuestions = [
		'What percentage of your RPA bots break each month?',
		'How much time does your team spend maintaining bots vs building new ones?',
		'What processes have you not automated because they\'re "too variable"?',
		'How do your bots handle documents they\'ve never seen before?',
		'What\'s your actual ROI on RPA so far vs what was projected?',
	];

	const big4Encounter = [
		'Large enterprise deals ($500K+)',
		'Clients who want "safe" choices',
		'Transformation programs with AI components',
		'When client already has Big 4 relationship',
	];

	const big4Strengths = [
		'Brand trust and "nobody got fired" factor',
		'Existing enterprise relationships',
		'Can staff large programs',
		'Broad capability (strategy + tech + change)',
		'Global presence',
		'Deep pockets for complex deals',
	];

	const big4Weaknesses = [
		{ weakness: 'Expensive', detail: 'Partner rates $500-800/hr. Junior consultants doing actual work. You\'re paying for the brand.' },
		{ weakness: 'Slow', detail: 'Large teams, governance overhead, scope creep. 6-month "discovery" phases.' },
		{ weakness: 'Generalists', detail: 'AI agents aren\'t their core. They\'re doing AI because clients ask, not because it\'s their expertise.' },
		{ weakness: 'Subcontracting', detail: 'They often subcontract technical delivery to shops like us anyway. You\'re paying markup.' },
		{ weakness: 'Incentive misalignment', detail: 'Paid by the hour. More complexity = more hours = more revenue for them.' },
	];

	const big4Differentiators = [
		{ title: 'Specialists', desc: 'AI agents are all we do. Deep expertise, not a side practice.' },
		{ title: 'Faster', desc: 'No bureaucracy. Senior people on your project. 6-10 weeks to live.' },
		{ title: 'Better Value', desc: '50-70% less cost for comparable outcomes.' },
		{ title: 'Outcome-Based', desc: 'We can tie fees to results. They rarely will.' },
		{ title: 'Skin in the Game', desc: 'We build, deploy, and support. No handoff to someone else.' },
		{ title: 'Practical', desc: 'We deliver working agents, not PowerPoint strategies.' },
	];

	const big4Objections = [
		{
			objection: '"We need a big firm for a project this important."',
			response: 'I understand the instinct. But ask: who actually does the work? Big firms staff projects with juniors and subcontractors. With us, you get senior people who\'ve done this dozens of times. For AI agents specifically, specialists beat generalists every time.'
		},
		{
			objection: '"They can do the strategy AND implementation."',
			response: 'They can — but should they? Their incentive is to expand scope. Ours is to deliver fast and prove value. Many clients use Big 4 for strategy, then bring us in for implementation. Or start with us for a pilot, then scale if needed.'
		},
		{
			objection: '"We already have [Big 4] on retainer."',
			response: 'Perfect — we work alongside Big 4 regularly. They bring the relationship and program management, we bring the AI agent expertise. It\'s not either/or.'
		},
	];

	const big4KillerQuestions = [
		'How many AI agent deployments has the proposed team actually delivered?',
		'Who specifically will be working on this day-to-day — partners or juniors?',
		'What\'s their track record on AI projects delivered on time and on budget?',
		'Will they commit to outcome-based pricing?',
		'What happens after deployment — who supports it?',
	];

	const offshoreEncounter = [
		'Price-sensitive buyers',
		'IT-led projects with development mindset',
		'Companies with existing offshore relationships',
		'When client says "we\'ll just build it ourselves"',
	];

	const offshoreStrengths = [
		'Lower hourly rates',
		'Can scale team size quickly',
		'Often have existing relationship',
		'24-hour development cycles possible',
		'Good for well-defined, stable requirements',
		'Some have genuine AI expertise',
	];

	const offshoreWeaknesses = [
		{ weakness: 'Communication overhead', detail: 'Timezone differences, language barriers, cultural gaps. 30% of project time lost to coordination.' },
		{ weakness: 'Requires detailed specs', detail: 'They build what you spec. AI agent design requires iteration and domain expertise they don\'t have.' },
		{ weakness: 'Hidden costs', detail: 'Management overhead, rework, extended timelines. "Cheap" hourly rate often costs more total.' },
		{ weakness: 'No domain expertise', detail: 'They\'re coders, not process experts. They can\'t tell you what to build — only build what you tell them.' },
		{ weakness: 'Quality variance', detail: 'Good resources get pulled to other projects. High turnover. You\'re constantly retraining.' },
		{ weakness: 'No outcome ownership', detail: 'They\'re paid to code, not to make it work in production.' },
	];

	const offshoreDifferentiators = [
		{ title: 'Turnkey Delivery', desc: 'We design, build, and deploy. You don\'t manage us.' },
		{ title: 'Domain Expertise', desc: 'We know AP, contracts, onboarding — not just code.' },
		{ title: 'Same Timezone', desc: 'Australian team. Real-time collaboration.' },
		{ title: 'Outcome-Based', desc: 'We own the result, not just the deliverables.' },
		{ title: 'Production Focus', desc: 'We don\'t hand off code. We deploy working systems.' },
		{ title: 'True Cost Lower', desc: 'Factor in management, rework, delays — we\'re often cheaper.' },
	];

	const offshoreObjections = [
		{
			objection: '"Your rates are 3x higher."',
			response: 'Hourly rate isn\'t total cost. Factor in: your team\'s management time, rework cycles, extended timelines, and the cost of delays. Clients who\'ve done both tell us we\'re actually cheaper when you count everything. Plus, we guarantee outcomes — they guarantee hours.'
		},
		{
			objection: '"We have an offshore team that can do this."',
			response: 'They can code, absolutely. But can they design an AI agent? Understand your AP process? Tune prompts for your document types? Handle production issues at 9am your time? For custom development, offshore works. For AI agent delivery, you need specialists.'
		},
		{
			objection: '"We\'ll just give them detailed specs."',
			response: 'That\'s the challenge — AI agents can\'t be fully spec\'d upfront. They need iteration, domain knowledge, and constant refinement. You\'d need to become AI experts to write good specs, and at that point you might as well work with us.'
		},
	];

	const offshoreKillerQuestions = [
		'How many hours per week will you spend managing the offshore team?',
		'What\'s your rework rate on offshore projects typically?',
		'Who writes the specs? Do you have AI agent design expertise in-house?',
		'What happens when something breaks at 2pm and their team is asleep?',
		'How will they tune prompts for your specific document types and edge cases?',
	];
</script>

<div style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px">
	<div style="max-width: 900px; margin: 0 auto">

		<!-- Header -->
		<div style="text-align: center; margin-bottom: 48px">
			<div style="font-size: 11px; color: #00B4FF; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 8px">Sales Enablement</div>
			<h1 style="font-size: 36px; font-weight: 700; color: #1E293B; margin: 0 0 12px 0">Competitor Battle Cards</h1>
			<p style="font-size: 14px; color: #475569">Internal use only — not for distribution</p>
		</div>

		<Tabs.Root bind:value={activeTab} class="flex w-full min-w-0 flex-col gap-6">
			<Tabs.List
				variant="default"
				class="!grid h-auto w-full min-w-0 grid-cols-1 gap-1 rounded-lg border border-slate-200/80 bg-slate-100/90 p-1.5 shadow-sm sm:grid-cols-3"
			>
				<Tabs.Trigger
					value="rpa"
					class="min-h-11 justify-center px-3 py-2.5 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-[#0c4a6e] data-[state=active]:shadow-md data-[state=inactive]:text-slate-500"
				>
					UiPath / RPA
				</Tabs.Trigger>
				<Tabs.Trigger
					value="big4"
					class="min-h-11 justify-center px-3 py-2.5 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-[#0c4a6e] data-[state=active]:shadow-md data-[state=inactive]:text-slate-500"
				>
					Big 4 & consultancies
				</Tabs.Trigger>
				<Tabs.Trigger
					value="offshore"
					class="min-h-11 justify-center px-3 py-2.5 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-[#0c4a6e] data-[state=active]:shadow-md data-[state=inactive]:text-slate-500"
				>
					Offshore teams
				</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="rpa" class="w-full min-w-0">
		<BattleCard competitor="UiPath / Automation Anywhere (RPA)">
			<Section title="Who They Are" color="#00B4FF">
				<p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0">
					Traditional RPA vendors. UiPath is the market leader. They automate by recording and replaying mouse clicks and keystrokes. Strong enterprise presence, large partner ecosystems, IPO'd companies with big sales teams.
				</p>
			</Section>

			<Section title="When You'll Encounter Them" color="#8B5CF6">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
					{#each rpaEncounter as item}
						<div style="font-size: 12px; color: #1E293B; display: flex; align-items: flex-start; gap: 8px">
							<span style="color: #8B5CF6">•</span> {item}
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Their Strengths (Acknowledge)" color="#10B981">
				<div style="background-color: #10B98110; border-radius: 8px; padding: 16px">
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; color: #1E293B">
						{#each rpaStrengths as item}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #10B981">✓</span> {item}
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Their Weaknesses (Attack)" color="#EF4444">
				<div style="background-color: #EF444408; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 12px; font-size: 12px">
						{#each rpaWeaknesses as item}
							<div>
								<div style="font-weight: 600; color: #EF4444">{item.weakness}</div>
								<div style="color: #475569">{item.detail}</div>
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Our Differentiators" color="#00B4FF">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
					{#each rpaDifferentiators as item}
						<div style="background-color: #F8FAFC; border-radius: 6px; padding: 12px">
							<div style="font-size: 13px; font-weight: 600; color: #00B4FF; margin-bottom: 4px">{item.title}</div>
							<div style="font-size: 11px; color: #475569">{item.desc}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Objection Handling" color="#F97316">
				<div style="display: flex; flex-direction: column; gap: 16px">
					{#each rpaObjections as item}
						<div style="background-color: #F8FAFC; border-radius: 8px; padding: 16px">
							<div style="font-size: 13px; font-weight: 600; color: #F97316; margin-bottom: 8px">"{item.objection}"</div>
							<div style="font-size: 12px; color: #1E293B; line-height: 1.6">{item.response}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Killer Questions to Ask" color="#EC4899">
				<div style="background-color: #1E293B; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: #FFFFFF">
						{#each rpaKillerQuestions as q}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #EC4899">→</span> {q}
							</div>
						{/each}
					</div>
				</div>
			</Section>
		</BattleCard>
			</Tabs.Content>

			<Tabs.Content value="big4" class="w-full min-w-0">
		<BattleCard competitor="Big 4 / Accenture / Large Consultancies">
			<Section title="Who They Are" color="#00B4FF">
				<p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0">
					Deloitte, PwC, EY, KPMG, Accenture, Capgemini, etc. Large consulting firms with AI/automation practices. They bring brand credibility and enterprise relationships but often subcontract actual delivery.
				</p>
			</Section>

			<Section title="When You'll Encounter Them" color="#8B5CF6">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
					{#each big4Encounter as item}
						<div style="font-size: 12px; color: #1E293B; display: flex; align-items: flex-start; gap: 8px">
							<span style="color: #8B5CF6">•</span> {item}
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Their Strengths (Acknowledge)" color="#10B981">
				<div style="background-color: #10B98110; border-radius: 8px; padding: 16px">
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; color: #1E293B">
						{#each big4Strengths as item}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #10B981">✓</span> {item}
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Their Weaknesses (Attack)" color="#EF4444">
				<div style="background-color: #EF444408; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 12px; font-size: 12px">
						{#each big4Weaknesses as item}
							<div>
								<div style="font-weight: 600; color: #EF4444">{item.weakness}</div>
								<div style="color: #475569">{item.detail}</div>
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Our Differentiators" color="#00B4FF">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
					{#each big4Differentiators as item}
						<div style="background-color: #F8FAFC; border-radius: 6px; padding: 12px">
							<div style="font-size: 13px; font-weight: 600; color: #00B4FF; margin-bottom: 4px">{item.title}</div>
							<div style="font-size: 11px; color: #475569">{item.desc}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Objection Handling" color="#F97316">
				<div style="display: flex; flex-direction: column; gap: 16px">
					{#each big4Objections as item}
						<div style="background-color: #F8FAFC; border-radius: 8px; padding: 16px">
							<div style="font-size: 13px; font-weight: 600; color: #F97316; margin-bottom: 8px">"{item.objection}"</div>
							<div style="font-size: 12px; color: #1E293B; line-height: 1.6">{item.response}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Killer Questions to Ask" color="#EC4899">
				<div style="background-color: #1E293B; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: #FFFFFF">
						{#each big4KillerQuestions as q}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #EC4899">→</span> {q}
							</div>
						{/each}
					</div>
				</div>
			</Section>
		</BattleCard>
			</Tabs.Content>

			<Tabs.Content value="offshore" class="w-full min-w-0">
		<BattleCard competitor="Offshore Development Teams">
			<Section title="Who They Are" color="#00B4FF">
				<p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0">
					Development teams in India, Philippines, Eastern Europe, etc. Either direct hire or through outsourcing firms like Infosys, Wipro, TCS, or smaller dev shops. Attractive price point but often hidden costs.
				</p>
			</Section>

			<Section title="When You'll Encounter Them" color="#8B5CF6">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
					{#each offshoreEncounter as item}
						<div style="font-size: 12px; color: #1E293B; display: flex; align-items: flex-start; gap: 8px">
							<span style="color: #8B5CF6">•</span> {item}
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Their Strengths (Acknowledge)" color="#10B981">
				<div style="background-color: #10B98110; border-radius: 8px; padding: 16px">
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; color: #1E293B">
						{#each offshoreStrengths as item}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #10B981">✓</span> {item}
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Their Weaknesses (Attack)" color="#EF4444">
				<div style="background-color: #EF444408; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 12px; font-size: 12px">
						{#each offshoreWeaknesses as item}
							<div>
								<div style="font-weight: 600; color: #EF4444">{item.weakness}</div>
								<div style="color: #475569">{item.detail}</div>
							</div>
						{/each}
					</div>
				</div>
			</Section>

			<Section title="Our Differentiators" color="#00B4FF">
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
					{#each offshoreDifferentiators as item}
						<div style="background-color: #F8FAFC; border-radius: 6px; padding: 12px">
							<div style="font-size: 13px; font-weight: 600; color: #00B4FF; margin-bottom: 4px">{item.title}</div>
							<div style="font-size: 11px; color: #475569">{item.desc}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Objection Handling" color="#F97316">
				<div style="display: flex; flex-direction: column; gap: 16px">
					{#each offshoreObjections as item}
						<div style="background-color: #F8FAFC; border-radius: 8px; padding: 16px">
							<div style="font-size: 13px; font-weight: 600; color: #F97316; margin-bottom: 8px">"{item.objection}"</div>
							<div style="font-size: 12px; color: #1E293B; line-height: 1.6">{item.response}</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Killer Questions to Ask" color="#EC4899">
				<div style="background-color: #1E293B; border-radius: 8px; padding: 16px">
					<div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: #FFFFFF">
						{#each offshoreKillerQuestions as q}
							<div style="display: flex; align-items: flex-start; gap: 8px">
								<span style="color: #EC4899">→</span> {q}
							</div>
						{/each}
					</div>
				</div>
			</Section>
		</BattleCard>
			</Tabs.Content>
		</Tabs.Root>

		<!-- Footer -->
		<div style="text-align: center; padding: 32px; color: #475569; font-size: 12px">
			<div>Internal use only — do not distribute to clients</div>
		</div>
	</div>
</div>
