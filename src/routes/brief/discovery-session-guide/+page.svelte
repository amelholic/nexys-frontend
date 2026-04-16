<script lang="ts">
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as colors } from '$lib/brief/briefColors';

	type Question = { q: string; notes: string };
	type SessionSection = {
		id: number;
		title: string;
		duration: string;
		color: string;
		purpose: string;
		questions: Question[];
	};

	const session: {
		client: string;
		date: string;
		attendees: string;
		facilitator: string;
		duration: string;
		sections: SessionSection[];
		outputChecklist: string[];
	} = {
		client: '[Client Name]',
		date: '[Date]',
		attendees: '[Names and roles]',
		facilitator: '[Facilitator]',
		duration: '2-3 hours',
		sections: [
			{
				id: 1,
				title: 'Business Context',
				duration: '20 min',
				color: colors.cyan,
				purpose: 'Understand the business, its goals, and what success looks like',
				questions: [
					{ q: 'What does your business do? Who are your customers?', notes: '' },
					{ q: 'What are your top 3 business priorities for the next 12 months?', notes: '' },
					{ q: 'What does success look like? How do you measure it?', notes: '' },
					{
						q: 'What is your biggest constraint right now - time, people, money, or something else?',
						notes: '',
					},
					{ q: 'How would you describe your appetite for technology change?', notes: '' },
				],
			},
			{
				id: 2,
				title: 'Pain Points & Processes',
				duration: '40 min',
				color: colors.purple,
				purpose:
					'Identify manual, repetitive, or broken processes that could benefit from automation',
				questions: [
					{
						q: 'Walk me through a typical day/week for your team. Where do they spend most of their time?',
						notes: '',
					},
					{ q: 'What tasks do people complain about? What is tedious or frustrating?', notes: '' },
					{ q: 'Where do errors happen most often? What is the cost when they do?', notes: '' },
					{ q: 'What processes involve a lot of copying data between systems?', notes: '' },
					{
						q: 'Are there tasks that require expertise but are actually quite repetitive?',
						notes: '',
					},
					{ q: 'What would you automate if you could wave a magic wand?', notes: '' },
					{ q: 'Have you tried to solve these problems before? What happened?', notes: '' },
				],
			},
			{
				id: 3,
				title: 'Current Technology',
				duration: '20 min',
				color: colors.pink,
				purpose: 'Understand the existing systems, data, and integration landscape',
				questions: [
					{ q: 'What are your core business systems? (ERP, CRM, email, etc.)', notes: '' },
					{ q: 'How old are these systems? Any planned replacements?', notes: '' },
					{ q: 'Where does your data live? Is it clean and accessible?', notes: '' },
					{ q: 'Do you have an IT team or external support?', notes: '' },
					{ q: 'Any previous AI or automation projects? What worked or did not?', notes: '' },
					{ q: 'What is your cloud situation? (AWS, Azure, on-prem, hybrid)', notes: '' },
				],
			},
			{
				id: 4,
				title: 'Compliance & Security',
				duration: '15 min',
				color: colors.orange,
				purpose: 'Understand regulatory requirements and risk tolerance',
				questions: [
					{
						q: 'What industry regulations apply to you? (Privacy, financial, industry-specific)',
						notes: '',
					},
					{ q: 'Do you handle sensitive data? (PII, health, financial)', notes: '' },
					{ q: 'What are your data residency requirements?', notes: '' },
					{ q: 'Do you have security policies we need to work within?', notes: '' },
					{ q: 'Who needs to approve technology changes?', notes: '' },
				],
			},
			{
				id: 5,
				title: 'Opportunity Deep-Dive',
				duration: '30 min',
				color: colors.cyan,
				purpose: 'Pick 1-2 promising opportunities and explore in detail',
				questions: [
					{ q: 'Of the pain points we discussed, which one hurts the most?', notes: '' },
					{ q: 'Walk me through this process step by step. Who does what?', notes: '' },
					{ q: 'How many times does this happen per day/week/month?', notes: '' },
					{ q: 'How long does it take? What does it cost?', notes: '' },
					{ q: 'What would "good" look like? What would change if this was solved?', notes: '' },
					{ q: 'Who would need to be involved in a pilot?', notes: '' },
					{ q: 'What would make you confident this was working?', notes: '' },
				],
			},
			{
				id: 6,
				title: 'Wrap-Up & Next Steps',
				duration: '15 min',
				color: colors.purple,
				purpose: 'Summarize findings and agree on next steps',
				questions: [
					{ q: 'Summarize back what you heard - confirm understanding', notes: '' },
					{ q: 'What questions do you have for us?', notes: '' },
					{ q: 'What is your timeline? Any deadlines or drivers?', notes: '' },
					{ q: 'Who else should we talk to?', notes: '' },
					{ q: 'What would make this a "no" for you?', notes: '' },
				],
			},
		],
		outputChecklist: [
			'Business context and priorities documented',
			'3-5 pain points identified and ranked',
			'1-2 opportunities selected for deeper assessment',
			'Current technology landscape mapped',
			'Compliance and security requirements noted',
			'Key stakeholders identified',
			'Next steps agreed',
		],
	};

	const sessionDetailFields = [
		{ label: 'Client', value: session.client },
		{ label: 'Date', value: session.date },
		{ label: 'Attendees', value: session.attendees },
		{ label: 'Facilitator', value: session.facilitator },
	] as const;

	const tips = [
		{
			title: 'Listen more than you talk',
			desc: 'Your job is to understand, not to pitch. Aim for 70% them, 30% you.',
		},
		{
			title: 'Follow the energy',
			desc: 'When they light up about a problem, dig deeper. That is where the value is.',
		},
		{
			title: 'Get specific',
			desc: '"Tell me about the last time this happened" beats "How often does this occur?"',
		},
		{
			title: 'Do not solutionize yet',
			desc: 'Resist the urge to propose solutions. Understand first, design later.',
		},
		{
			title: 'Capture quotes',
			desc: 'Write down their exact words. These are gold for proposals and design.',
		},
		{
			title: 'Watch for politics',
			desc: 'Note who defers to whom, what topics get avoided, where there is tension.',
		},
	] as const;

	const gradientBar = `linear-gradient(90deg, ${colors.cyan} 0%, ${colors.purple} 35%, ${colors.pink} 65%, ${colors.orange} 100%)`;
</script>

{#snippet questionBlock(section: SessionSection, item: Question, qIdx: number)}
	<div style="margin-bottom: 20px">
		<div style="display: flex; gap: 12px; margin-bottom: 8px">
			<div
				style="width: 24px; height: 24px; border-radius: 50%; background-color: {section.color}20; display: flex; align-items: center; justify-content: center; color: {section.color}; font-size: 11px; font-weight: 600; flex-shrink: 0"
			>
				{qIdx + 1}
			</div>
			<div
				style="font-size: 13px; font-weight: 500; color: {colors.deepNavy}; line-height: 1.5; padding-top: 2px"
			>
				{item.q}
			</div>
		</div>
		<div
			style="margin-left: 36px; background-color: {colors.offWhite}; border-radius: 6px; padding: 12px; min-height: 60px; border: 1px dashed {colors.lightSlate}44"
		>
			<div style="font-size: 10px; color: {colors.lightSlate}; font-style: italic">Notes:</div>
		</div>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px"
>
	<!-- Page 1 - Cover & Overview -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style="background: {colors.deepNavy}; padding: 32px 40px; position: relative">
			<div
				style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: {gradientBar}"
			></div>
			<div style="display: flex; justify-content: space-between; align-items: flex-start">
				<div>
					<div
						style="font-size: 9px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px"
					>
						Discovery Session
					</div>
					<h1 style="font-size: 28px; font-weight: 700; color: {colors.white}; margin: 0 0 8px 0">
						Facilitation Guide
					</h1>
					<div style="font-size: 13px; color: {colors.lightSlate}">
						Structured framework for initial client engagement
					</div>
				</div>
				<div style="text-align: right; font-size: 11px; color: {colors.lightSlate}">
					Duration: {session.duration}
				</div>
			</div>
		</div>

		<div style="padding: 24px 40px 40px">
			<div
				style="background-color: {colors.offWhite}; border-radius: 8px; padding: 20px; margin-bottom: 24px"
			>
				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px">
					{#each sessionDetailFields as item}
						<div>
							<div
								style="font-size: 9px; color: {colors.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px"
							>
								{item.label}
							</div>
							<div
								style="font-size: 13px; color: {colors.deepNavy}; min-height: 20px; border-bottom: 1px solid {colors.lightSlate}44; padding-bottom: 4px"
							>
								{item.value}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<Section title="Session Agenda" color={colors.purple}>
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px">
					{#each session.sections as section (section.id)}
						<div
							style="background-color: {colors.offWhite}; border-radius: 6px; padding: 14px; border-left: 3px solid {section.color}"
						>
							<div
								style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px"
							>
								<span style="font-size: 12px; font-weight: 600; color: {colors.deepNavy}"
									>{section.id}. {section.title}</span
								>
								<span style="font-size: 10px; color: {colors.lightSlate}">{section.duration}</span>
							</div>
							<div style="font-size: 10px; color: {colors.slate}; line-height: 1.4">
								{section.purpose}
							</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Facilitation Tips" color={colors.cyan}>
				<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px">
					{#each tips as tip}
						<div style="background-color: {colors.offWhite}; border-radius: 6px; padding: 12px">
							<div
								style="font-size: 11px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 4px"
							>
								{tip.title}
							</div>
							<div style="font-size: 10px; color: {colors.slate}; line-height: 1.4">{tip.desc}</div>
						</div>
					{/each}
				</div>
			</Section>
		</div>
	</div>

	{#each session.sections as section (section.id)}
		<div
			style="max-width: 850px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08)"
		>
			<div style="height: 4px; background: {gradientBar}"></div>

			<div style="padding: 24px 40px 40px">
				<div
					style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid {colors.lightSlate}33"
				>
					<div>
						<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px">
							<div
								style="width: 32px; height: 32px; border-radius: 6px; background-color: {section.color}; display: flex; align-items: center; justify-content: center; color: {colors.white}; font-size: 14px; font-weight: 700"
							>
								{section.id}
							</div>
							<h2 style="font-size: 20px; font-weight: 700; color: {colors.deepNavy}; margin: 0">
								{section.title}
							</h2>
						</div>
						<div style="font-size: 12px; color: {colors.slate}; margin-left: 42px">{section.purpose}</div>
					</div>
					<div style="text-align: right">
						<div style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase">
							Duration
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {section.color}">{section.duration}</div>
					</div>
				</div>

				{#each section.questions as item, qIdx}
					{@render questionBlock(section, item, qIdx)}
				{/each}

				<div
					style="margin-top: 24px; padding-top: 12px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {colors.lightSlate}"
				>
					<span>AI Flow</span>
					<span>Section {section.id} of {session.sections.length}</span>
				</div>
			</div>
		</div>
	{/each}

	<!-- Output Checklist Page -->
	<div
		style="max-width: 850px; margin: 0 auto; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style="height: 4px; background: {gradientBar}"></div>

		<div style="padding: 24px 40px 40px">
			<Section title="Session Output Checklist" color={colors.orange}>
				<p style="font-size: 12px; color: {colors.slate}; margin-bottom: 20px">
					Before you leave, confirm you have captured the following:
				</p>

				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 20px">
					{#each session.outputChecklist as item, i}
						<div
							style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: {i <
							session.outputChecklist.length - 1
								? `1px solid ${colors.lightSlate}33`
								: 'none'}"
						>
							<div
								style="width: 20px; height: 20px; border-radius: 4px; border: 2px solid {colors.lightSlate}; flex-shrink: 0"
							></div>
							<span style="font-size: 13px; color: {colors.deepNavy}">{item}</span>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Opportunity Summary" color={colors.purple}>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
					{#each [1, 2] as num}
						<div
							style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; border-top: 3px solid {num ===
							1
								? colors.cyan
								: colors.pink}"
						>
							<div
								style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 8px"
							>
								Opportunity {num}
							</div>
							<div style="margin-bottom: 12px">
								<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">
									Process/Pain Point
								</div>
								<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 24px"></div>
							</div>
							<div style="margin-bottom: 12px">
								<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">
									Estimated Impact
								</div>
								<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 24px"></div>
							</div>
							<div>
								<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">Next Step</div>
								<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 24px"></div>
							</div>
						</div>
					{/each}
				</div>
			</Section>

			<Section title="Agreed Next Steps" color={colors.cyan}>
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px">
					{#each [1, 2, 3] as num}
						<div style="display: flex; gap: 12px; margin-bottom: 12px">
							<div
								style="width: 24px; height: 24px; border-radius: 50%; background-color: {colors.cyan}; display: flex; align-items: center; justify-content: center; color: {colors.white}; font-size: 11px; font-weight: 600; flex-shrink: 0"
							>
								{num}
							</div>
							<div style="flex: 1">
								<div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px">
									<div>
										<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">Action</div>
										<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 20px"></div>
									</div>
									<div>
										<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">Owner</div>
										<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 20px"></div>
									</div>
									<div>
										<div style="font-size: 9px; color: {colors.lightSlate}; margin-bottom: 2px">Due</div>
										<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 20px"></div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</Section>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {colors.lightSlate}"
			>
				<span>AI Flow</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
