<script lang="ts">
	/** Ported from `brief/Workshop_AI_Opportunity/Workshop_Slides.jsx` — Svelte 5. */
	import type { Snippet } from 'svelte';

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

	const agenda = [
		{ time: '15 min', title: 'Welcome & Context', desc: 'Introductions and goals' },
		{ time: '20 min', title: 'AI Fundamentals', desc: 'What AI can and cannot do' },
		{ time: '45 min', title: 'Process Brainstorm', desc: 'Generate candidate processes' },
		{ time: '15 min', title: 'Break', desc: '' },
		{ time: '90 min', title: 'Deep-Dives', desc: 'Analyse top 2 opportunities' },
		{ time: '15 min', title: 'Break', desc: '' },
		{ time: '30 min', title: 'Prioritisation', desc: 'Score and rank opportunities' },
		{ time: '15 min', title: 'Next Steps', desc: 'Agree actions and close' }
	] as const;

	const goalItems = [
		'A prioritised list of 3-5 AI automation opportunities',
		'Rough ROI estimates for the top candidates',
		'Clear understanding of what makes a good fit',
		'Recommended next steps'
	] as const;

	const goodAt = [
		{ icon: '📄', title: 'Reading documents', desc: 'Extract data from invoices, contracts, forms, emails' },
		{ icon: '🔀', title: 'Following rules', desc: 'Make consistent decisions based on defined criteria' },
		{ icon: '🔄', title: 'Moving data', desc: 'Sync information between systems, validate, transform' },
		{ icon: '📊', title: 'High volume', desc: 'Handle thousands of transactions without fatigue' },
		{ icon: '🕐', title: 'Working 24/7', desc: 'Process requests any time, no breaks needed' },
		{ icon: '📋', title: 'Audit trails', desc: 'Log every decision with full reasoning' }
	] as const;

	const notGoodAt = [
		{ icon: '🤔', title: 'Pure judgment', desc: 'Decisions with no clear criteria or rules' },
		{ icon: '🦾', title: 'Physical action', desc: 'Moving things, manufacturing, repairs' },
		{ icon: '🎨', title: 'Novel creation', desc: 'Truly original creative work' },
		{ icon: '🌀', title: 'No patterns', desc: 'Situations that are completely unique each time' },
		{ icon: '⚠️', title: 'Zero tolerance', desc: 'Tasks where any error is catastrophic' },
		{ icon: '💬', title: 'Deep relationships', desc: 'Building trust, negotiation, empathy' }
	] as const;

	const goodFit = [
		{ q: 'Is it repetitive?', desc: 'Done many times with similar patterns', color: colors.cyan },
		{ q: 'Is it rule-based?', desc: 'Clear criteria for decisions (even if complex)', color: colors.purple },
		{ q: 'Is the data digital?', desc: 'Inputs are electronic and accessible', color: colors.pink },
		{ q: 'Is the volume worth it?', desc: '50+ per month, or high value per instance', color: colors.orange },
		{ q: 'Can humans handle exceptions?', desc: 'Edge cases can be escalated', color: colors.green }
	] as const;

	const brainstorm = [
		'What do you spend time on that feels like it should not need a human?',
		'Where do documents pile up waiting for someone to process them?',
		'What approvals or reviews create bottlenecks?',
		'Where do you see copy-paste between systems?',
		'What reports take forever to compile?',
		'Where do errors happen because someone was tired or rushed?'
	] as const;

	const deepDive = [
		{ letter: 'A', title: 'Process Basics', items: ['Trigger', 'Inputs', 'Outputs', 'Who', 'Time', 'Volume'] },
		{ letter: 'B', title: 'Pain Points', items: ['What goes wrong', 'What takes time', 'What frustrates', 'Cost of errors'] },
		{ letter: 'C', title: 'Rules', items: ['Decision criteria', 'Routine vs complex', 'Exceptions', 'Documentation'] },
		{ letter: 'D', title: 'Systems', items: ['Systems involved', 'Data access', 'APIs', 'Integrations'] },
		{ letter: 'E', title: 'ROI', items: ['Current cost', 'Potential savings', 'Implementation effort'] }
	] as const;

	const scoreCriteria = [
		{ name: 'Business Value', desc: 'How much impact? Savings, strategic value', color: colors.cyan },
		{ name: 'Feasibility', desc: 'How doable? Clear scope, proven patterns', color: colors.purple },
		{ name: 'Readiness', desc: 'How ready? Data quality, system access', color: colors.pink },
		{ name: 'Urgency', desc: 'How pressing? Burning platform or nice-to-have', color: colors.orange }
	] as const;

	const nextSteps = [
		{ num: '1', title: 'Report', desc: 'We will send you a written summary of today within one week', time: 'This week' },
		{ num: '2', title: 'Review', desc: 'Review the report and confirm your top priority', time: 'Next week' },
		{ num: '3', title: 'Proposal', desc: 'We will prepare a detailed proposal for the selected opportunity', time: 'Following week' },
		{ num: '4', title: 'Decide', desc: 'You decide whether to proceed', time: 'Your timeline' }
	] as const;

	const deepColors = [colors.cyan, colors.pink, colors.purple, colors.orange, colors.green] as const;
</script>

{#snippet Slide(dark: boolean, children: Snippet)}
	<div
		style="max-width: 960px; margin: 0 auto 40px; background-color: {dark ? colors.deepNavy : colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); aspect-ratio: 16/9; position: relative; overflow: hidden; display: flex; flex-direction: column;"
	>
		<div
			style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		{@render children()}
		<div
			style="position: absolute; bottom: 20px; left: 40px; font-size: 12px; font-weight: 600; color: {dark ? colors.cyan : colors.deepNavy};"
		>
			AI Flow
		</div>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	{#snippet s1()}
		<div
			style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px 80px;"
		>
			<div
				style="font-size: 12px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px;"
			>
				Workshop
			</div>
			<h1 style="font-size: 48px; font-weight: 700; color: {colors.white}; margin: 0 0 20px 0; line-height: 1.1;">
				AI Opportunity<br />Assessment
			</h1>
			<p style="font-size: 18px; color: {colors.lightSlate}; max-width: 500px;">
				Identifying where AI automation can have the biggest impact in your business
			</p>
		</div>
	{/snippet}
	{@render Slide(true, s1)}

	{#snippet s2()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				Agenda
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				What we will cover today
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
				{#each agenda as item}
					<div style="display: flex; gap: 12px; align-items: flex-start;">
						<div
							style="min-width: 55px; font-size: 11px; font-weight: 600; color: {colors.purple}; padding-top: 1px;"
						>
							{item.time}
						</div>
						<div>
							<div style="font-size: 12px; font-weight: 600; color: {colors.deepNavy};">{item.title}</div>
							{#if item.desc}
								<div style="font-size: 10px; color: {colors.slate};">{item.desc}</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s2)}

	{#snippet s3()}
		<div
			style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 50px 60px;"
		>
			<div
				style="font-size: 11px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;"
			>
				Our Goal
			</div>
			<h2 style="font-size: 30px; font-weight: 700; color: {colors.white}; margin: 0 0 24px 0; line-height: 1.2;">
				By the end of today, you will have:
			</h2>
			<div style="display: flex; flex-direction: column; gap: 14px;">
				{#each goalItems as item, i}
					<div style="display: flex; align-items: center; gap: 14px;">
						<div
							style="width: 28px; height: 28px; border-radius: 50%; background-color: {[colors.cyan, colors.purple, colors.pink, colors.orange][i]}; display: flex; align-items: center; justify-content: center; color: {colors.white}; font-size: 12px; font-weight: 700;"
						>
							{i + 1}
						</div>
						<div style="font-size: 16px; color: {colors.white};">{item}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(true, s3)}

	{#snippet s4()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				AI Fundamentals
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				What AI agents are good at
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
				{#each goodAt as item}
					<div
						style="background-color: {colors.offWhite}; border-radius: 8px; padding: 14px; border-top: 3px solid {colors.cyan};"
					>
						<div style="font-size: 24px; margin-bottom: 8px;">{item.icon}</div>
						<div style="font-size: 13px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 4px;">
							{item.title}
						</div>
						<div style="font-size: 11px; color: {colors.slate}; line-height: 1.4;">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s4)}

	{#snippet s5()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.pink}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				AI Fundamentals
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				What AI agents are NOT good at
			</h2>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
				{#each notGoodAt as item}
					<div
						style="background-color: {colors.offWhite}; border-radius: 8px; padding: 14px; border-top: 3px solid {colors.pink};"
					>
						<div style="font-size: 24px; margin-bottom: 8px;">{item.icon}</div>
						<div style="font-size: 13px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 4px;">
							{item.title}
						</div>
						<div style="font-size: 11px; color: {colors.slate}; line-height: 1.4;">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s5)}

	{#snippet s6()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				AI Fundamentals
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.white}; margin: 0 0 24px 0;">The Good Fit Test</h2>
			<div style="display: flex; flex-direction: column; gap: 12px;">
				{#each goodFit as item}
					<div
						style="display: flex; align-items: center; gap: 16px; padding: 12px 16px; background-color: rgba(255,255,255,0.05); border-radius: 8px; border-left: 4px solid {item.color};"
					>
						<div
							style="width: 24px; height: 24px; border-radius: 4px; border: 2px solid {item.color}; flex-shrink: 0;"
						></div>
						<div>
							<div style="font-size: 14px; font-weight: 600; color: {colors.white};">{item.q}</div>
							<div style="font-size: 11px; color: {colors.lightSlate};">{item.desc}</div>
						</div>
					</div>
				{/each}
			</div>
			<div style="margin-top: 20px; font-size: 13px; color: {colors.lightSlate}; text-align: center;">
				If you can check all five boxes, it is probably a good candidate.
			</div>
		</div>
	{/snippet}
	{@render Slide(true, s6)}

	{#snippet s7()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				Process Brainstorm
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				Think about repetitive work...
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
				{#each brainstorm as prompt}
					<div style="display: flex; gap: 10px; padding: 12px; background-color: {colors.offWhite}; border-radius: 8px;">
						<div style="color: {colors.purple}; font-size: 16px;">?</div>
						<div style="font-size: 12px; color: {colors.deepNavy}; line-height: 1.4;">{prompt}</div>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 20px; padding: 12px 16px; background-color: {colors.deepNavy}; border-radius: 8px; text-align: center;"
			>
				<span style="font-size: 13px; color: {colors.white};">Take 10 minutes. List everything. Do not filter yet.</span>
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s7)}

	{#snippet s8()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.orange}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				Deep-Dive
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				Analysing each opportunity
			</h2>
			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
				{#each deepDive as section, i}
					<div
						style="background-color: {colors.offWhite}; border-radius: 8px; padding: 12px; border-top: 3px solid {deepColors[i]};"
					>
						<div
							style="font-size: 18px; font-weight: 700; color: {deepColors[i]}; margin-bottom: 6px;"
						>
							{section.letter}
						</div>
						<div style="font-size: 11px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 8px;">
							{section.title}
						</div>
						{#each section.items as line}
							<div style="font-size: 9px; color: {colors.slate}; margin-bottom: 2px;">• {line}</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s8)}

	{#snippet s9()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				Prioritisation
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 20px 0;">
				Scoring each opportunity
			</h2>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div>
					<div style="font-size: 13px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 12px;">
						Score 1-5 on each:
					</div>
					{#each scoreCriteria as criteria}
						<div
							style="display: flex; gap: 10px; margin-bottom: 8px; padding: 10px; background-color: {colors.offWhite}; border-radius: 6px; border-left: 3px solid {criteria.color};"
						>
							<div>
								<div style="font-size: 12px; font-weight: 600; color: {colors.deepNavy};">{criteria.name}</div>
								<div style="font-size: 10px; color: {colors.slate};">{criteria.desc}</div>
							</div>
						</div>
					{/each}
				</div>
				<div
					style="background-color: {colors.deepNavy}; border-radius: 8px; padding: 20px; display: flex; flex-direction: column; justify-content: center;"
				>
					<div style="font-size: 11px; color: {colors.lightSlate}; margin-bottom: 12px; text-align: center;">
						Plot on the matrix
					</div>
					<div style="position: relative; height: 150px;">
						<div style="position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background-color: {colors.lightSlate};"></div>
						<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background-color: {colors.lightSlate};"></div>
						<div style="position: absolute; left: -10px; top: 0; font-size: 9px; color: {colors.lightSlate};">High</div>
						<div style="position: absolute; left: -10px; bottom: -5px; font-size: 9px; color: {colors.lightSlate};">Low</div>
						<div style="position: absolute; right: 0; bottom: -16px; font-size: 9px; color: {colors.lightSlate};">High</div>
						<div style="position: absolute; left: 10px; bottom: -16px; font-size: 9px; color: {colors.lightSlate};">Low</div>
						<div
							style="position: absolute; left: 50%; bottom: -16px; font-size: 9px; color: {colors.lightSlate}; transform: translateX(-50%);"
						>
							Feasibility →
						</div>
						<div
							style="position: absolute; right: 16px; top: 16px; background-color: {colors.green}; color: {colors.white}; padding: 3px 6px; border-radius: 3px; font-size: 9px;"
						>
							Do First
						</div>
						<div
							style="position: absolute; left: 16px; top: 16px; background-color: {colors.orange}; color: {colors.white}; padding: 3px 6px; border-radius: 3px; font-size: 9px;"
						>
							Invest
						</div>
						<div
							style="position: absolute; right: 16px; bottom: 16px; background-color: {colors.cyan}; color: {colors.deepNavy}; padding: 3px 6px; border-radius: 3px; font-size: 9px;"
						>
							Quick Win
						</div>
						<div
							style="position: absolute; left: 16px; bottom: 16px; background-color: {colors.slate}; color: {colors.white}; padding: 3px 6px; border-radius: 3px; font-size: 9px;"
						>
							Deprioritise
						</div>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s9)}

	{#snippet s10()}
		<div style="flex: 1; padding: 40px 60px;">
			<div
				style="font-size: 11px; color: {colors.green}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;"
			>
				Next Steps
			</div>
			<h2 style="font-size: 28px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 28px 0;">What happens next</h2>
			<div style="display: flex; gap: 16px;">
				{#each nextSteps as step}
					<div style="flex: 1; text-align: center;">
						<div
							style="width: 40px; height: 40px; border-radius: 50%; background-color: {colors.green}; display: flex; align-items: center; justify-content: center; color: {colors.white}; font-size: 18px; font-weight: 700; margin: 0 auto 12px;"
						>
							{step.num}
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {colors.deepNavy}; margin-bottom: 6px;">
							{step.title}
						</div>
						<div style="font-size: 11px; color: {colors.slate}; margin-bottom: 6px; line-height: 1.4;">{step.desc}</div>
						<div style="font-size: 10px; color: {colors.green}; font-weight: 600;">{step.time}</div>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
	{@render Slide(false, s10)}

	{#snippet s11()}
		<div
			style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 60px 80px; text-align: center;"
		>
			<h2 style="font-size: 42px; font-weight: 700; color: {colors.white}; margin: 0 0 24px 0;">Thank you</h2>
			<p style="font-size: 18px; color: {colors.lightSlate}; margin-bottom: 40px;">Questions?</p>
			<div style="display: flex; gap: 32px;">
				<div>
					<div style="font-size: 12px; color: {colors.lightSlate}; margin-bottom: 4px;">Email</div>
					<div style="font-size: 16px; color: {colors.white};">hello@aiflow.au</div>
				</div>
				<div>
					<div style="font-size: 12px; color: {colors.lightSlate}; margin-bottom: 4px;">Web</div>
					<div style="font-size: 16px; color: {colors.cyan};">aiflow.au</div>
				</div>
			</div>
		</div>
	{/snippet}
	{@render Slide(true, s11)}
</div>
