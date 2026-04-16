<script lang="ts">
	import { assessment } from '$lib/brief/data/opportunityAssessment';
	import { briefColors } from '$lib/brief/briefColors';

	const maxScore = assessment.sections.reduce((sum, s) => sum + s.criteria.length, 0) * 3;

	const complexityLevels = [
		{
			level: 'L1',
			name: 'Simple',
			desc: 'Single task, few tools, stateless',
			examples: 'FAQ bot, summarizer, single extraction',
			color: briefColors.green
		},
		{
			level: 'L2',
			name: 'Moderate',
			desc: 'Multi-step, multiple tools, some state',
			examples: 'Invoice processing, contract review',
			color: briefColors.orange
		},
		{
			level: 'L3',
			name: 'Complex',
			desc: 'Multi-agent, long-running, dynamic',
			examples: 'Supply chain, autonomous research',
			color: briefColors.red
		}
	] as const;

	const readinessLevels = [
		{
			level: 'R1',
			name: 'Early',
			desc: 'Small team, limited infra, learning',
			approach: 'Start simple, prove value',
			color: briefColors.cyan
		},
		{
			level: 'R2',
			name: 'Growing',
			desc: 'Mid-size team, some infra, production needs',
			approach: 'Balance speed & robustness',
			color: briefColors.purple
		},
		{
			level: 'R3',
			name: 'Mature',
			desc: 'Large team, robust infra, enterprise requirements',
			approach: 'Full engineering rigor',
			color: briefColors.pink
		}
	] as const;

	const pct50 = Math.round((50 / maxScore) * 100);
	const pct35 = Math.round((35 / maxScore) * 100);
	const pct49 = Math.round((49 / maxScore) * 100);
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	{#snippet sectionTitle(color: string, title: string)}
		<div
			style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; margin-top: 24px;"
		>
			<div
				style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"
			></div>
			<h3
				style="font-size: 11px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
			>
				{title}
			</h3>
		</div>
	{/snippet}

	{#snippet scoreBox(score: number)}
		<div
			style="width: 28px; height: 28px; border-radius: 4px; border: 2px solid {briefColors.lightSlate}44; background-color: transparent; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: {briefColors.lightSlate};"
		>
			{score}
		</div>
	{/snippet}

	<!-- Page 1 -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="background: {briefColors.deepNavy}; padding: 28px 36px; position: relative;"
		>
			<div
				style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
			></div>
			<div
				style="display: flex; justify-content: space-between; align-items: flex-start;"
			>
				<div>
					<div
						style="font-size: 9px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
					>
						Opportunity Assessment
					</div>
					<h1
						style="font-size: 24px; font-weight: 700; color: {briefColors.white}; margin: 0 0 6px 0;"
					>
						AI Fit Scorecard
					</h1>
					<div style="font-size: 12px; color: {briefColors.lightSlate};">
						Quick qualification for AI automation opportunities
					</div>
				</div>
				<div style="text-align: right; font-size: 10px; color: {briefColors.lightSlate};">
					Max Score: {maxScore} points
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			<div
				style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px; margin-bottom: 24px;"
			>
				<div
					style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;"
				>
					{#each [{ label: 'Client', value: assessment.client }, { label: 'Opportunity', value: assessment.opportunity }, { label: 'Assessed By', value: assessment.assessedBy }, { label: 'Date', value: assessment.date }] as item}
						<div>
							<div
								style="font-size: 9px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
							>
								{item.label}
							</div>
							<div
								style="font-size: 13px; color: {briefColors.deepNavy}; border-bottom: 1px solid {briefColors.lightSlate}44; padding-bottom: 4px; min-height: 20px;"
							>
								{item.value}
							</div>
						</div>
					{/each}
				</div>
			</div>

			{@render sectionTitle(briefColors.purple, 'Complexity & Readiness Classification')}
			<div
				style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;"
			>
				<div
					style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px;"
				>
					<div
						style="font-size: 10px; color: {briefColors.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: 600;"
					>
						Use Case Complexity
					</div>
					<div style="display: flex; flex-direction: column; gap: 8px;">
						{#each complexityLevels as item}
							<div
								style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; background-color: {briefColors.white}; border-radius: 6px; border: 2px solid {briefColors.lightSlate}33;"
							>
								<div
									style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid {item.color}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
								>
									<div
										style="width: 8px; height: 8px; border-radius: 50%;"
									></div>
								</div>
								<div style="flex: 1;">
									<div
										style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;"
									>
										<span style="font-size: 11px; font-weight: 700; color: {item.color};"
											>{item.level}</span
										>
										<span
											style="font-size: 11px; font-weight: 600; color: {briefColors.deepNavy};"
											>{item.name}</span
										>
									</div>
									<div style="font-size: 9px; color: {briefColors.slate};">{item.desc}</div>
									<div style="font-size: 8px; color: {briefColors.lightSlate}; margin-top: 2px;">
										e.g., {item.examples}
									</div>
								</div>
							</div>
						{/each}
					</div>
					<div
						style="margin-top: 12px; padding: 8px; background-color: {briefColors.white}; border-radius: 6px;"
					>
						<div style="font-size: 9px; color: {briefColors.lightSlate}; margin-bottom: 4px;">
							Selected Level:
						</div>
						<div style="display: flex; gap: 8px;">
							{#each ['L1', 'L2', 'L3'] as l}
								<div
									style="width: 36px; height: 28px; border: 2px solid {briefColors.lightSlate}44; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: {briefColors.lightSlate};"
								>
									{l}
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div
					style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px;"
				>
					<div
						style="font-size: 10px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: 600;"
					>
						Client Readiness
					</div>
					<div style="display: flex; flex-direction: column; gap: 8px;">
						{#each readinessLevels as item}
							<div
								style="display: flex; align-items: flex-start; gap: 10px; padding: 10px; background-color: {briefColors.white}; border-radius: 6px; border: 2px solid {briefColors.lightSlate}33;"
							>
								<div
									style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid {item.color}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
								>
									<div
										style="width: 8px; height: 8px; border-radius: 50%;"
									></div>
								</div>
								<div style="flex: 1;">
									<div
										style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;"
									>
										<span style="font-size: 11px; font-weight: 700; color: {item.color};"
											>{item.level}</span
										>
										<span
											style="font-size: 11px; font-weight: 600; color: {briefColors.deepNavy};"
											>{item.name}</span
										>
									</div>
									<div style="font-size: 9px; color: {briefColors.slate};">{item.desc}</div>
									<div style="font-size: 8px; color: {item.color}; margin-top: 2px;">
										→ {item.approach}
									</div>
								</div>
							</div>
						{/each}
					</div>
					<div
						style="margin-top: 12px; padding: 8px; background-color: {briefColors.white}; border-radius: 6px;"
					>
						<div style="font-size: 9px; color: {briefColors.lightSlate}; margin-bottom: 4px;">
							Selected Level:
						</div>
						<div style="display: flex; gap: 8px;">
							{#each ['R1', 'R2', 'R3'] as r}
								<div
									style="width: 36px; height: 28px; border: 2px solid {briefColors.lightSlate}44; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: {briefColors.lightSlate};"
								>
									{r}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div
				style="background-color: {briefColors.deepNavy}08; border-radius: 8px; padding: 16px; margin-bottom: 24px; border: 1px solid {briefColors.deepNavy}15;"
			>
				<div
					style="font-size: 10px; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: 600;"
				>
					Architecture Recommendation (Based on L × R)
				</div>
				<div
					style="display: grid; grid-template-columns: 60px 1fr 1fr 1fr; gap: 6px; font-size: 9px;"
				>
					<div></div>
					<div
						style="text-align: center; color: {briefColors.cyan}; font-weight: 600; padding: 6px;"
					>
						R1 Early
					</div>
					<div
						style="text-align: center; color: {briefColors.purple}; font-weight: 600; padding: 6px;"
					>
						R2 Growing
					</div>
					<div
						style="text-align: center; color: {briefColors.pink}; font-weight: 600; padding: 6px;"
					>
						R3 Mature
					</div>

					<div style="color: {briefColors.green}; font-weight: 600; padding: 6px;">L1 Simple</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Native API
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Native API
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Native API
					</div>

					<div style="color: {briefColors.orange}; font-weight: 600; padding: 6px;">L2 Moderate</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Native + Light
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Custom
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Custom
					</div>

					<div style="color: {briefColors.red}; font-weight: 600; padding: 6px;">L3 Complex</div>
					<div
						style="text-align: center; color: {briefColors.red}; padding: 6px; background-color: {briefColors.red}10; border-radius: 4px; font-weight: 600;"
					>
						⚠️ Reconsider
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						LangGraph
					</div>
					<div
						style="text-align: center; color: {briefColors.slate}; padding: 6px; background-color: {briefColors.white}; border-radius: 4px;"
					>
						Enterprise
					</div>
				</div>
				<div
					style="margin-top: 10px; font-size: 9px; color: {briefColors.slate}; font-style: italic;"
				>
					⚠️ L3 + R1 is a red flag: Either reduce complexity or increase readiness before proceeding.
				</div>
			</div>

			{@render sectionTitle(briefColors.purple, 'Scoring Guide')}
			<div
				style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px;"
			>
				{#each assessment.scoringGuide as guide}
					<div
						style="background-color: {briefColors.offWhite}; border-radius: 6px; padding: 12px; border-left: 3px solid {guide.color};"
					>
						<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
							<span style="font-size: 16px; font-weight: 700; color: {guide.color};"
								>{guide.score}</span
							>
							<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
								>{guide.label}</span
							>
						</div>
						<div style="font-size: 10px; color: {briefColors.slate};">{guide.description}</div>
					</div>
				{/each}
			</div>

			{#each assessment.sections.slice(0, 2) as section}
				<div>
					{@render sectionTitle(section.color, section.name)}
					<p style="font-size: 11px; color: {briefColors.slate}; margin-bottom: 12px; margin-top: -8px;">
						{section.description}
					</p>

					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; overflow: hidden;"
					>
						{#each section.criteria as criterion, idx}
							<div
								style="padding: 14px 16px; border-bottom: {idx < section.criteria.length - 1
									? `1px solid ${briefColors.lightSlate}33`
									: 'none'};"
							>
								<div
									style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
								>
									<div style="flex: 1;">
										<div
											style="font-size: 13px; font-weight: 500; color: {briefColors.deepNavy}; margin-bottom: 4px;"
										>
											{criterion.question}
										</div>
										<div
											style="font-size: 10px; color: {briefColors.slate}; font-style: italic;"
										>
											{criterion.guidance}
										</div>
									</div>
									<div style="display: flex; gap: 6px; flex-shrink: 0;">
										{#each [3, 2, 1, 0] as score}
											{@render scoreBox(score)}
										{/each}
									</div>
								</div>
								<div style="margin-top: 10px;">
									<div style="font-size: 9px; color: {briefColors.lightSlate}; margin-bottom: 2px;">
										Notes
									</div>
									<div
										style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 16px;"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Page 2 -->
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
		></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {briefColors.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {briefColors.deepNavy};"
					>Opportunity Assessment</span
				>
				<span style="font-size: 10px; color: {briefColors.lightSlate};">Page 2</span>
			</div>

			{#each assessment.sections.slice(2) as section}
				<div>
					{@render sectionTitle(section.color, section.name)}
					<p style="font-size: 11px; color: {briefColors.slate}; margin-bottom: 12px; margin-top: -8px;">
						{section.description}
					</p>

					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; overflow: hidden;"
					>
						{#each section.criteria as criterion, idx}
							<div
								style="padding: 14px 16px; border-bottom: {idx < section.criteria.length - 1
									? `1px solid ${briefColors.lightSlate}33`
									: 'none'};"
							>
								<div
									style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
								>
									<div style="flex: 1;">
										<div
											style="font-size: 13px; font-weight: 500; color: {briefColors.deepNavy}; margin-bottom: 4px;"
										>
											{criterion.question}
										</div>
										<div
											style="font-size: 10px; color: {briefColors.slate}; font-style: italic;"
										>
											{criterion.guidance}
										</div>
									</div>
									<div style="display: flex; gap: 6px; flex-shrink: 0;">
										{#each [3, 2, 1, 0] as score}
											{@render scoreBox(score)}
										{/each}
									</div>
								</div>
								<div style="margin-top: 10px;">
									<div style="font-size: 9px; color: {briefColors.lightSlate}; margin-bottom: 2px;">
										Notes
									</div>
									<div
										style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 16px;"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Page 3 - Summary -->
	<div
		style="max-width: 850px; margin: 0 auto; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
		></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {briefColors.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {briefColors.deepNavy};"
					>Opportunity Assessment</span
				>
				<span style="font-size: 10px; color: {briefColors.lightSlate};">Page 3 - Summary</span>
			</div>

			{@render sectionTitle(briefColors.purple, 'Score Summary')}
			<div
				style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 24px;"
			>
				{#each assessment.sections as section}
					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px; text-align: center; border-top: 3px solid {section.color};"
					>
						<div
							style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
						>
							{section.name}
						</div>
						<div style="font-size: 10px; color: {briefColors.slate}; margin-bottom: 4px;">Score</div>
						<div
							style="display: flex; justify-content: center; align-items: baseline; gap: 2px;"
						>
							<div
								style="border-bottom: 2px solid {section.color}; width: 30px; min-height: 24px;"
							></div>
							<span style="font-size: 12px; color: {briefColors.lightSlate};"
								>/ {section.criteria.length * 3}</span
							>
						</div>
					</div>
				{/each}
			</div>

			<div
				style="background-color: {briefColors.deepNavy}; border-radius: 8px; padding: 24px; margin-bottom: 24px;"
			>
				<div
					style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: center;"
				>
					<div style="text-align: center;">
						<div
							style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
						>
							Total Score
						</div>
						<div
							style="display: flex; justify-content: center; align-items: baseline; gap: 4px;"
						>
							<div
								style="border-bottom: 2px solid {briefColors.cyan}; width: 50px; min-height: 32px;"
							></div>
							<span style="font-size: 18px; color: {briefColors.lightSlate};">/ {maxScore}</span>
						</div>
					</div>
					<div style="text-align: center;">
						<div
							style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
						>
							Percentage
						</div>
						<div
							style="border-bottom: 2px solid {briefColors.cyan}; width: 60px; margin: 0 auto; min-height: 32px;"
						></div>
					</div>
					<div style="text-align: center;">
						<div
							style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 8px;"
						>
							Recommendation
						</div>
						<div
							style="border-bottom: 2px solid {briefColors.cyan}; width: 100px; margin: 0 auto; min-height: 32px;"
						></div>
					</div>
				</div>
			</div>

			{@render sectionTitle(briefColors.cyan, 'Decision Thresholds')}
			<div
				style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;"
			>
				<div
					style="background-color: {briefColors.green}10; border-radius: 8px; padding: 16px; border-left: 4px solid {briefColors.green};"
				>
					<div style="font-size: 14px; font-weight: 600; color: {briefColors.green}; margin-bottom: 4px;">
						Strong Fit
					</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy}; margin-bottom: 8px;">
						Score: 50+ ({pct50}%+)
					</div>
					<div style="font-size: 11px; color: {briefColors.slate};">Proceed to proposal</div>
				</div>
				<div
					style="background-color: {briefColors.orange}10; border-radius: 8px; padding: 16px; border-left: 4px solid {briefColors.orange};"
				>
					<div style="font-size: 14px; font-weight: 600; color: {briefColors.orange}; margin-bottom: 4px;">
						Conditional Fit
					</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy}; margin-bottom: 8px;">
						Score: 35-49 ({pct35}-{pct49}%)
					</div>
					<div style="font-size: 11px; color: {briefColors.slate};">
						Address gaps before proceeding
					</div>
				</div>
				<div
					style="background-color: {briefColors.red}10; border-radius: 8px; padding: 16px; border-left: 4px solid {briefColors.red};"
				>
					<div style="font-size: 14px; font-weight: 600; color: {briefColors.red}; margin-bottom: 4px;">
						Poor Fit
					</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy}; margin-bottom: 8px;">
						Score: Below 35 (Below {pct35}%)
					</div>
					<div style="font-size: 11px; color: {briefColors.slate};">Decline or revisit scope</div>
				</div>
			</div>

			{@render sectionTitle(briefColors.pink, 'Key Risks & Blockers')}
			<div
				style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 24px; min-height: 80px;"
			>
				<div style="font-size: 10px; color: {briefColors.lightSlate}; font-style: italic;">
					List any criteria scored 0 or 1, and required mitigations:
				</div>
			</div>

			{@render sectionTitle(briefColors.orange, 'Final Recommendation')}
			<div
				style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 24px;"
			>
				{#each [{ label: 'Proceed', border: briefColors.green }, { label: 'Conditional', border: briefColors.orange }, { label: 'Decline', border: briefColors.red }] as rec}
					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px; text-align: center; border: 2px solid {briefColors.lightSlate}33;"
					>
						<div
							style="width: 24px; height: 24px; border-radius: 50%; border: 2px solid {rec.border}; margin: 0 auto 8px;"
						></div>
						<div style="font-size: 13px; font-weight: 600; color: {briefColors.deepNavy};">
							{rec.label}
						</div>
					</div>
				{/each}
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div>
					<div
						style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Assessed By
					</div>
					<div
						style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 24px; margin-bottom: 16px;"
					></div>
					<div
						style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Date
					</div>
					<div style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 24px;"></div>
				</div>
				<div>
					<div
						style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Reviewed By
					</div>
					<div
						style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 24px; margin-bottom: 16px;"
					></div>
					<div
						style="font-size: 10px; color: {briefColors.lightSlate}; text-transform: uppercase; margin-bottom: 6px;"
					>
						Date
					</div>
					<div style="border-bottom: 1px solid {briefColors.lightSlate}; min-height: 24px;"></div>
				</div>
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {briefColors.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {briefColors.lightSlate};"
			>
				<span>Opportunity Assessment Template</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
