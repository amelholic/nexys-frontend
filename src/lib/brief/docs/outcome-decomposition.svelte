<script lang="ts">
	import { outcomeDecomposition as decomposition } from '$lib/brief/data/outcomeDecomposition';
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const phaseColors = [c.cyan, c.purple, c.pink] as const;

	function priorityDot(priority: string) {
		return priority === 'High' ? c.pink : priority === 'Medium' ? c.orange : c.lightSlate;
	}

	function typeColor(type: string) {
		return type === 'Constrained' ? c.cyan : type === 'Single' ? c.purple : c.pink;
	}
</script>

{#snippet sectionTitle(color: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; margin-top: 28px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 11px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

{#snippet levelBadge(level: string, color: string)}
	<span
		style="font-size: 8px; font-weight: 600; color: {color}; background-color: {color}15; padding: 2px 8px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.5px;"
	>
		{level}
	</span>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="background: {c.deepNavy}; padding: 28px 36px; position: relative;">
			<div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: {gradient};"></div>
			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div
						style="font-size: 9px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
					>
						Outcome Decomposition
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">
						{decomposition.client}
					</h1>
					<div style="font-size: 11px; color: {c.lightSlate};">
						From business outcomes to agent-achievable goals
					</div>
				</div>
				<div style="text-align: right; font-size: 10px; color: {c.lightSlate};">
					v{decomposition.version}<br />
					{decomposition.date}<br />
					{decomposition.preparedBy}
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Business Outcome')}
			<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
				<div style="font-size: 16px; font-weight: 600; color: {c.white}; margin-bottom: 12px; line-height: 1.4;">
					"{decomposition.businessOutcome.statement}"
				</div>
				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
					{#each [{ label: 'Timeframe', value: decomposition.businessOutcome.timeframe }, { label: 'Owner', value: decomposition.businessOutcome.owner }, { label: 'Current State', value: decomposition.businessOutcome.currentState }, { label: 'Target State', value: decomposition.businessOutcome.targetState }] as item}
						<div>
							<div
								style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
							>
								{item.label}
							</div>
							<div style="font-size: 12px; color: {c.white};">{item.value}</div>
						</div>
					{/each}
				</div>
			</div>

			{@render sectionTitle(c.purple, 'Goal Decomposition')}

			{#each decomposition.strategicGoals as sg, sgIdx}
				<div style="margin-bottom: 24px;">
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
						<div
							style="width: 32px; height: 32px; border-radius: 6px; background-color: {c.purple}; display: flex; align-items: center; justify-content: center; color: {c.white}; font-size: 12px; font-weight: 700;"
						>
							{sgIdx + 1}
						</div>
						<div style="flex: 1;">
							<div style="display: flex; align-items: center; gap: 8px;">
								<span style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">{sg.name}</span>
								{@render levelBadge('Strategic', c.purple)}
							</div>
							<div style="font-size: 11px; color: {c.slate};">{sg.contribution} • Owner: {sg.owner}</div>
						</div>
					</div>

					{#each sg.tacticalGoals as tg}
						<div style="margin-left: 44px; margin-bottom: 16px;">
							<div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
								<div
									style="flex: 1; background-color: {c.offWhite}; border-radius: 6px; padding: 14px; border-left: 3px solid {c.pink};"
								>
									<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
										<span style="font-size: 12px; font-weight: 600; color: {c.deepNavy};">{tg.name}</span>
										{@render levelBadge('Tactical', c.pink)}
									</div>
									<div style="font-size: 10px; color: {c.slate}; margin-bottom: 10px;">
										<strong>Metric:</strong>
										{tg.metric} • <strong>Target:</strong>
										{tg.target}
									</div>

									<div style="border-top: 1px solid {c.lightSlate}33; padding-top: 10px;">
										<div
											style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;"
										>
											Agent Goals
										</div>
										{#each tg.agentGoals as ag}
											{@const tc = typeColor(ag.type)}
											<div
												style="display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; background-color: {c.white}; border-radius: 4px; margin-bottom: 4px; border: 1px solid {c.lightSlate}22;"
											>
												<div style="display: flex; align-items: center; gap: 8px;">
													<span
														style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: {priorityDot(
															ag.priority,
														)}; margin-right: 6px;"
													></span>
													<span style="font-size: 11px; color: {c.deepNavy};">{ag.name}</span>
												</div>
												<div style="display: flex; align-items: center; gap: 8px;">
													<span style="font-size: 9px; color: {tc}; background-color: {tc}15; padding: 2px 6px; border-radius: 3px;"
														>{ag.type}</span
													>
													<span
														style="font-size: 9px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;"
														>{ag.id}</span
													>
												</div>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">Outcome Decomposition</span>
				<span style="font-size: 10px; color: {c.lightSlate};">{decomposition.client} • Page 2</span>
			</div>

			{@render sectionTitle(c.orange, 'Priority Matrix')}
			<p style="font-size: 11px; color: {c.slate}; margin-bottom: 14px;">
				Agent goals ranked by Impact × Feasibility. High impact + High feasibility = implement first.
			</p>
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
				<thead>
					<tr>
						{#each ['Priority', 'ID', 'Agent Goal', 'Impact', 'Feasibility'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each decomposition.priorityMatrix as row}
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22; font-weight: 700; color: {c.purple};">
								#{row.priority}
							</td>
							<td
								style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; font-size: 10px; color: {c.lightSlate};"
							>
								{row.id}
							</td>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{row.name}
							</td>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22;">
								<span style="color: {row.impact === 'High' ? c.pink : c.orange};">{row.impact}</span>
							</td>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22;">
								<span style="color: {row.feasibility === 'High' ? c.cyan : c.orange};">{row.feasibility}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.cyan, 'Implementation Phases')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each decomposition.phases as phase, i}
					<div
						style="background-color: {c.offWhite}; border-radius: 8px; padding: 18px; border-top: 4px solid {phaseColors[
							i
						]};"
					>
						<div
							style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
						>
							Phase {phase.phase}
						</div>
						<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
							{phase.name}
						</div>
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 12px;">{phase.duration}</div>
						<div style="margin-bottom: 12px;">
							{#each phase.agents as agId}
								<span
									style="display: inline-block; font-size: 9px; color: {c.slate}; background-color: {c.white}; padding: 3px 8px; border-radius: 3px; margin-right: 4px; margin-bottom: 4px; font-family: JetBrains Mono, monospace;"
								>
									{agId}
								</span>
							{/each}
						</div>
						<div style="font-size: 12px; font-weight: 600; color: {phaseColors[i]};">{phase.value}</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 24px; background-color: {c.deepNavy}; border-radius: 8px; padding: 20px; display: flex; justify-content: space-between; align-items: center;"
			>
				<div>
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
					>
						Total Projected Value
					</div>
					<div style="font-size: 24px; font-weight: 700; color: {c.white};">$600K annual savings</div>
				</div>
				<div style="text-align: right;">
					<div
						style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
					>
						Timeline
					</div>
					<div style="font-size: 18px; font-weight: 600; color: {c.cyan};">18 weeks</div>
				</div>
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Outcome Decomposition Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
