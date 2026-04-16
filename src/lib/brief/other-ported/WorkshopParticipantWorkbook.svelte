<script lang="ts">
	/** Ported from `brief/Workshop_AI_Opportunity/Workshop_ParticipantWorkbook.jsx` — Svelte 5, no React. */
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

	const goodFitItems = [
		{ q: 'Is it repetitive?', help: 'Done many times with similar patterns' },
		{ q: 'Is it rule-based?', help: 'Clear criteria for decisions (even if complex rules)' },
		{ q: 'Is the data digital and accessible?', help: 'Electronic inputs, not handwritten or verbal' },
		{ q: 'Is the volume worth automating?', help: '50+ per month, or high value per instance' },
		{ q: 'Can humans handle exceptions?', help: 'Edge cases can be escalated' }
	] as const;

	const brainstormPrompts = [
		'What feels like it should not need a human?',
		'Where do documents pile up?',
		'What approvals create bottlenecks?',
		'Where do you copy-paste between systems?',
		'What reports take forever?',
		'Where do errors happen due to fatigue?'
	] as const;

	const effortOptions = ['Simple (4-6 weeks)', 'Medium (8-10 weeks)', 'Complex (12+ weeks)'] as const;
</script>

{#snippet sectionHeading(accent: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; margin-top: 28px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {accent};"></div>
		<h3
			style="font-size: 11px; font-weight: 600; color: {colors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

{#snippet writingLines(lines: number, label: string)}
	<div style="margin-bottom: 16px;">
		{#if label}
			<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 6px;">{label}</div>
		{/if}
		{#each Array.from({ length: lines }, (_, i) => i) as i}
			<div
				style="border-bottom: 1px solid {colors.lightSlate}44; height: 28px; margin-bottom: 4px;"
			></div>
		{/each}
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<!-- Cover -->
	<div
		style="max-width: 794px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); min-height: 400px;"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 60px; text-align: center;">
			<div
				style="font-size: 10px; color: {colors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 24px;"
			>
				Workshop Workbook
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {colors.deepNavy}; margin: 0 0 16px 0;">
				AI Opportunity Assessment
			</h1>
			<p style="font-size: 14px; color: {colors.slate}; margin-bottom: 48px;">Participant Workbook</p>
			<div
				style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 400px; margin: 0 auto; text-align: left;"
			>
				{#each ['Your Name', 'Role', 'Organisation', 'Date'] as field}
					<div>
						<div
							style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
						>
							{field}
						</div>
						<div style="border-bottom: 1px solid {colors.lightSlate}; min-height: 24px;"></div>
					</div>
				{/each}
			</div>
		</div>
		<div
			style="padding: 20px 60px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between;"
		>
			<span style="font-size: 11px; color: {colors.lightSlate};">AI Flow</span>
			<span style="font-size: 11px; color: {colors.lightSlate};">aiflow.au</span>
		</div>
	</div>

	<!-- Good fit -->
	<div
		style="max-width: 794px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.cyan, 'The Good Fit Test')}
			<p style="font-size: 12px; color: {colors.slate}; margin-bottom: 20px;">
				Use this checklist to quickly assess whether a process is a good candidate for AI automation.
			</p>
			<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
				{#each goodFitItems as item, i}
					<div
						style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: {i < goodFitItems.length - 1
							? `1px solid ${colors.lightSlate}33`
							: 'none'};"
					>
						<div
							style="width: 24px; height: 24px; border: 2px solid {colors.cyan}; border-radius: 4px; flex-shrink: 0; margin-top: 2px;"
						></div>
						<div>
							<div style="font-size: 13px; font-weight: 600; color: {colors.deepNavy};">{item.q}</div>
							<div style="font-size: 11px; color: {colors.slate};">{item.help}</div>
						</div>
					</div>
				{/each}
			</div>
			<div style="background-color: {colors.deepNavy}; border-radius: 8px; padding: 16px; text-align: center;">
				<span style="font-size: 13px; color: {colors.white};"
					>If you can check all five boxes, it is probably a good candidate for AI automation.</span
				>
			</div>
		</div>
	</div>

	<!-- Brainstorm -->
	<div
		style="max-width: 794px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.purple, 'Process Brainstorm')}
			<p style="font-size: 12px; color: {colors.slate}; margin-bottom: 20px;">
				List every process you can think of that involves repetitive work. Do not filter yet — if it takes time and
				happens regularly, write it down.
			</p>
			<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
				<div style="font-size: 11px; color: {colors.purple}; font-weight: 600; margin-bottom: 10px;">
					Prompts to consider:
				</div>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; color: {colors.slate};">
					{#each brainstormPrompts as p}
						<div>• {p}</div>
					{/each}
				</div>
			</div>
			<div style="margin-bottom: 16px;">
				<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
					<thead>
						<tr>
							<th
								style="width: 30px; padding: 8px; background-color: {colors.offWhite}; text-align: left; color: {colors.slate}; font-size: 9px; text-transform: uppercase;"
								>#</th
							>
							<th
								style="padding: 8px; background-color: {colors.offWhite}; text-align: left; color: {colors.slate}; font-size: 9px; text-transform: uppercase;"
								>Process / Task</th
							>
							<th
								style="width: 80px; padding: 8px; background-color: {colors.offWhite}; text-align: center; color: {colors.slate}; font-size: 9px; text-transform: uppercase;"
								>Good Fit?</th
							>
						</tr>
					</thead>
					<tbody>
						{#each Array.from({ length: 12 }, (_, i) => i) as i}
							<tr>
								<td
									style="padding: 12px 8px; border-bottom: 1px solid {colors.lightSlate}22; color: {colors.lightSlate};"
									>{i + 1}</td
								>
								<td style="padding: 12px 8px; border-bottom: 1px solid {colors.lightSlate}22;"></td>
								<td
									style="padding: 12px 8px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
								>
									<div style="display: flex; justify-content: center; gap: 8px;">
										<div
											style="width: 16px; height: 16px; border: 1px solid {colors.green}; border-radius: 3px;"
										></div>
										<div
											style="width: 16px; height: 16px; border: 1px solid {colors.orange}; border-radius: 3px;"
										></div>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div style="font-size: 10px; color: {colors.lightSlate}; text-align: right;">
				Green = Good fit | Orange = Maybe / Needs discussion
			</div>
		</div>
	</div>

	<!-- Deep-dive x2 -->
	{#each [1, 2] as num (num)}
		<div
			style="max-width: 794px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div
				style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
			></div>
			<div style="padding: 32px 48px;">
				{@render sectionHeading(colors.orange, `Deep-Dive #${num}`)}
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
					<div
						style="font-size: 10px; color: {colors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Process Name
					</div>
					<div style="border-bottom: 2px solid {colors.orange}; min-height: 28px;"></div>
				</div>
				<div style="margin-bottom: 24px;">
					<div style="font-size: 12px; font-weight: 600; color: {colors.cyan}; margin-bottom: 12px;">
						A. Process Basics
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
						{@render writingLines(2, 'What triggers this process?')}
						{@render writingLines(2, 'What are the inputs?')}
						{@render writingLines(2, 'What are the outputs?')}
						{@render writingLines(2, 'Who does this today?')}
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 8px;">
						{#each ['Time per instance', 'Volume per month', 'People involved'] as lab}
							<div>
								<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 6px;">{lab}</div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<div style="border-bottom: 1px solid {colors.lightSlate}; width: 60px; height: 24px;"></div>
									<span style="font-size: 11px; color: {colors.slate};"
										>{lab.includes('Time') ? 'minutes' : lab.includes('Volume') ? 'instances' : 'FTEs'}</span
									>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div style="margin-bottom: 24px;">
					<div style="font-size: 12px; font-weight: 600; color: {colors.pink}; margin-bottom: 12px;">B. Pain Points</div>
					{@render writingLines(2, 'What goes wrong? (errors, delays, rework)')}
					{@render writingLines(2, 'What takes the most time?')}
					{@render writingLines(2, 'What frustrates the team?')}
				</div>
				<div style="margin-bottom: 24px;">
					<div style="font-size: 12px; font-weight: 600; color: {colors.purple}; margin-bottom: 12px;">
						C. Rules & Exceptions
					</div>
					{@render writingLines(2, 'What are the decision rules?')}
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
						{#each ['% Routine (straightforward)', '% Complex (needs judgment)'] as lab}
							<div>
								<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 6px;">{lab}</div>
								<div style="display: flex; align-items: center; gap: 8px;">
									<div style="border-bottom: 1px solid {colors.lightSlate}; width: 50px; height: 24px;"></div>
									<span style="font-size: 11px; color: {colors.slate};">%</span>
								</div>
							</div>
						{/each}
					</div>
					<div style="margin-top: 12px;">
						{@render writingLines(2, 'What exceptions require human judgment?')}
					</div>
				</div>
				<div style="margin-bottom: 24px;">
					<div style="font-size: 12px; font-weight: 600; color: {colors.orange}; margin-bottom: 12px;">
						D. Systems & Data
					</div>
					{@render writingLines(2, 'What systems are involved?')}
					{@render writingLines(1, 'How is data accessed? (APIs, exports, manual)')}
				</div>
				<div style="background-color: {colors.offWhite}; border-radius: 8px; padding: 16px;">
					<div style="font-size: 12px; font-weight: 600; color: {colors.green}; margin-bottom: 12px;">
						E. Quick ROI Estimate
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
						<div>
							<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 8px;">Current Monthly Cost</div>
							<div style="font-size: 10px; color: {colors.slate}; margin-bottom: 4px;">Volume × Time × Hourly Rate</div>
							<div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
								<div style="border-bottom: 1px solid {colors.lightSlate}; width: 50px; height: 24px;"></div>
								<span style="font-size: 11px; color: {colors.slate};">×</span>
								<div style="border-bottom: 1px solid {colors.lightSlate}; width: 50px; height: 24px;"></div>
								<span style="font-size: 11px; color: {colors.slate};">× $</span>
								<div style="border-bottom: 1px solid {colors.lightSlate}; width: 50px; height: 24px;"></div>
								<span style="font-size: 11px; color: {colors.slate};">= $</span>
								<div style="border-bottom: 2px solid {colors.green}; width: 70px; height: 24px;"></div>
							</div>
						</div>
						<div>
							<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 8px;">Potential Monthly Savings</div>
							<div style="font-size: 10px; color: {colors.slate}; margin-bottom: 4px;">Assume 70% of routine work automated</div>
							<div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
								<span style="font-size: 11px; color: {colors.slate};">$</span>
								<div style="border-bottom: 1px solid {colors.lightSlate}; width: 70px; height: 24px;"></div>
								<span style="font-size: 11px; color: {colors.slate};">× 0.7 = $</span>
								<div style="border-bottom: 2px solid {colors.green}; width: 70px; height: 24px;"></div>
								<span style="font-size: 11px; color: {colors.slate};">/month</span>
							</div>
						</div>
					</div>
					<div style="margin-top: 16px;">
						<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 8px;">
							Implementation Effort (circle one)
						</div>
						<div style="display: flex; gap: 16px; flex-wrap: wrap;">
							{#each effortOptions as opt}
								<div
									style="padding: 8px 16px; border: 1px solid {colors.lightSlate}; border-radius: 4px; font-size: 11px; color: {colors.deepNavy};"
								>
									{opt}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<!-- Prioritisation -->
	<div
		style="max-width: 794px; margin: 0 auto 40px; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.cyan, 'Prioritisation Matrix')}
			<p style="font-size: 12px; color: {colors.slate}; margin-bottom: 20px;">
				Score each opportunity 1-5 on the criteria below. Higher is better.
			</p>
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
				<thead>
					<tr>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: left; color: {colors.slate}; font-size: 9px; text-transform: uppercase;"
							>Opportunity</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.cyan}; font-size: 9px; text-transform: uppercase; width: 60px;"
							>Value</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.purple}; font-size: 9px; text-transform: uppercase; width: 60px;"
							>Feasibility</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.pink}; font-size: 9px; text-transform: uppercase; width: 60px;"
							>Readiness</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.orange}; font-size: 9px; text-transform: uppercase; width: 60px;"
							>Urgency</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.deepNavy}; font-size: 9px; text-transform: uppercase; width: 60px;"
							>Total</th
						>
						<th
							style="padding: 10px; background-color: {colors.offWhite}; text-align: center; color: {colors.green}; font-size: 9px; text-transform: uppercase; width: 50px;"
							>Rank</th
						>
					</tr>
				</thead>
				<tbody>
					{#each Array.from({ length: 6 }, (_, i) => i) as i}
						<tr>
							<td style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22;"></td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div style="border-bottom: 1px solid {colors.cyan}; width: 30px; margin: 0 auto;"></div>
							</td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div style="border-bottom: 1px solid {colors.purple}; width: 30px; margin: 0 auto;"></div>
							</td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div style="border-bottom: 1px solid {colors.pink}; width: 30px; margin: 0 auto;"></div>
							</td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div style="border-bottom: 1px solid {colors.orange}; width: 30px; margin: 0 auto;"></div>
							</td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div style="border-bottom: 2px solid {colors.deepNavy}; width: 30px; margin: 0 auto;"></div>
							</td>
							<td
								style="padding: 14px 10px; border-bottom: 1px solid {colors.lightSlate}22; text-align: center;"
							>
								<div
									style="width: 24px; height: 24px; border: 2px solid {colors.green}; border-radius: 50%; margin: 0 auto;"
								></div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; font-size: 10px; color: {colors.slate};">
				<div style="padding: 10px; background-color: {colors.offWhite}; border-radius: 4px;">
					<strong style="color: {colors.cyan};">Value:</strong> Impact, savings, strategic importance
				</div>
				<div style="padding: 10px; background-color: {colors.offWhite}; border-radius: 4px;">
					<strong style="color: {colors.purple};">Feasibility:</strong> Clear scope, proven patterns, low risk
				</div>
				<div style="padding: 10px; background-color: {colors.offWhite}; border-radius: 4px;">
					<strong style="color: {colors.pink};">Readiness:</strong> Data quality, system access, APIs
				</div>
				<div style="padding: 10px; background-color: {colors.offWhite}; border-radius: 4px;">
					<strong style="color: {colors.orange};">Urgency:</strong> Burning platform or nice-to-have
				</div>
			</div>
		</div>
	</div>

	<!-- Notes -->
	<div
		style="max-width: 794px; margin: 0 auto; background-color: {colors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {colors.cyan} 0%, {colors.purple} 35%, {colors.pink} 65%, {colors.orange} 100%);"
		></div>
		<div style="padding: 32px 48px;">
			{@render sectionHeading(colors.green, 'Notes & Next Steps')}
			{@render writingLines(8, 'Key insights from today')}
			<div style="margin-top: 24px;">
				<div style="font-size: 10px; color: {colors.lightSlate}; margin-bottom: 10px;">My action items</div>
				{#each Array.from({ length: 4 }, (_, i) => i) as i}
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
						<div
							style="width: 20px; height: 20px; border: 2px solid {colors.green}; border-radius: 4px; flex-shrink: 0;"
						></div>
						<div style="flex: 1; border-bottom: 1px solid {colors.lightSlate}44; height: 24px;"></div>
					</div>
				{/each}
			</div>
			<div style="margin-top: 24px;">
				{@render writingLines(3, 'Questions to follow up on')}
			</div>
			<div
				style="margin-top: 40px; padding-top: 16px; border-top: 1px solid {colors.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {colors.lightSlate};"
			>
				<span>AI Opportunity Assessment Workshop — Participant Workbook</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
