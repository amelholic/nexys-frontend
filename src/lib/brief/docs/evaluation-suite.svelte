<script lang="ts">
	import { evaluationSuite as evalSuite } from '$lib/brief/data/evaluationSuite';
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const scheduleColors = [c.cyan, c.purple, c.pink, c.orange, c.cyan, c.purple] as const;

	function labelize(key: string) {
		return key.replace(/([A-Z])/g, ' $1').trim();
	}

	function weightBadge(status: string) {
		const styles: Record<string, { bg: string; color: string }> = {
			Critical: { bg: `${c.pink}20`, color: c.pink },
			High: { bg: `${c.orange}20`, color: c.orange },
			Medium: { bg: `${c.cyan}20`, color: c.cyan },
			Required: { bg: `${c.pink}20`, color: c.pink },
		};
		return styles[status] ?? { bg: c.offWhite, color: c.slate };
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
						Evaluation Suite
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">{evalSuite.agent}</h1>
					<div style="font-size: 11px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;">
						{evalSuite.agentId} • {evalSuite.client}
					</div>
				</div>
				<div style="text-align: right; font-size: 10px; color: {c.lightSlate};">
					v{evalSuite.version}<br />
					{evalSuite.date}<br />
					{evalSuite.preparedBy}
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Evaluation Overview')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each Object.entries(evalSuite.overview) as [key, value]}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
						<div
							style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
						>
							{labelize(key)}
						</div>
						<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.4;">{value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'Golden Dataset')}
			<div style="display: grid; grid-template-columns: 1fr 2fr; gap: 16px; margin-bottom: 20px;">
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
					<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;">
						Dataset Info
					</div>
					<div style="font-size: 24px; font-weight: 700; color: {c.purple}; margin-bottom: 4px;">
						{evalSuite.goldenDataset.size}
					</div>
					<div style="font-size: 11px; color: {c.slate}; margin-bottom: 12px;">
						{evalSuite.goldenDataset.description}
					</div>
					<div style="font-size: 10px; color: {c.lightSlate};">
						<strong>Sources:</strong>
						<ul style="margin: 4px 0 0 16px; padding: 0;">
							{#each evalSuite.goldenDataset.sources as s}
								<li>{s}</li>
							{/each}
						</ul>
					</div>
				</div>
				<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
					<thead>
						<tr>
							{#each ['Category', 'Count', 'Description'] as h}
								<th
									style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each evalSuite.goldenDataset.breakdown as b}
							<tr>
								<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
									{b.category}
								</td>
								<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
									{b.count}
								</td>
								<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
									{b.description}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			{@render sectionTitle(c.pink, 'Accuracy Tests')}
			<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
				<thead>
					<tr>
						{#each ['ID', 'Test', 'Metric', 'Target', 'Weight', 'Method'] as h}
							<th
								style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each evalSuite.accuracyTests as t}
						{@const wb = weightBadge(t.weight)}
						<tr>
							<td
								style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; font-size: 9px; color: {c.lightSlate};"
							>
								{t.id}
							</td>
							<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.name}
							</td>
							<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.metric}
							</td>
							<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								<strong>{t.target}</strong>
							</td>
							<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22;">
								<span
									style="padding: 2px 8px; border-radius: 3px; font-size: 9px; font-weight: 600; background-color: {wb.bg}; color: {wb.color}; text-transform: uppercase;"
								>
									{t.weight}
								</span>
							</td>
							<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.method}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.orange, 'LLM-as-Judge Tests')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
				<thead>
					<tr>
						{#each ['ID', 'Test', 'Evaluation Criteria', 'Target'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each evalSuite.llmJudgeTests as t}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; font-size: 9px; color: {c.lightSlate};"
							>
								{t.id}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.name}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.criteria}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								<strong>{t.target}</strong>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div
		class="page-break"
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};"
					>{evalSuite.agent} — Evaluation Suite</span
				>
				<span style="font-size: 10px; color: {c.lightSlate};">{evalSuite.client} • Page 2</span>
			</div>

			{@render sectionTitle(c.pink, 'Safety Tests')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
				<thead>
					<tr>
						{#each ['ID', 'Test', 'Description', 'Required Pass Rate', 'Status'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each evalSuite.safetyTests as t}
						{@const sb = weightBadge(t.status)}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; font-size: 9px; color: {c.lightSlate};"
							>
								{t.id}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.name}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.description}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								<strong>{t.passRate}</strong>
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22;">
								<span
									style="padding: 2px 8px; border-radius: 3px; font-size: 9px; font-weight: 600; background-color: {sb.bg}; color: {sb.color}; text-transform: uppercase;"
								>
									{t.status}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.orange, 'Red Team Scenarios')}
			<div style="margin-bottom: 20px;">
				{#each evalSuite.redTeamScenarios as rt}
					<div
						style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px; margin-bottom: 8px; border-left: 3px solid {c.orange};"
					>
						<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 6px;">
							{rt.scenario}
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 11px;">
							<div>
								<span style="color: {c.pink}; font-weight: 600;">Attack: </span>
								<span style="color: {c.slate};">{rt.attack}</span>
							</div>
							<div>
								<span style="color: {c.green}; font-weight: 600;">Expected: </span>
								<span style="color: {c.slate};">{rt.expected}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.cyan, 'Performance Tests')}
			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 20px;">
				{#each evalSuite.performanceTests as perf}
					<div style="background-color: {c.deepNavy}; border-radius: 6px; padding: 14px; text-align: center;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;">
							{perf.metric}
						</div>
						<div style="font-size: 16px; font-weight: 700; color: {c.cyan}; margin-bottom: 4px;">
							{perf.target}
						</div>
						<div style="font-size: 9px; color: {c.lightSlate};">{perf.measurement}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'Trajectory Tests')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
				<thead>
					<tr>
						{#each ['ID', 'Scenario', 'Expected Steps', 'Validation'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each evalSuite.trajectoryTests as t}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; font-size: 9px; color: {c.lightSlate};"
							>
								{t.id}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.name}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.steps.join(' ')}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{t.validation}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.orange, 'Test Schedule')}
			<div style="display: flex; gap: 8px; flex-wrap: wrap;">
				{#each evalSuite.schedule as s, i}
					<div
						style="flex: 1; min-width: 120px; background-color: {c.offWhite}; border-radius: 6px; padding: 12px; border-top: 3px solid {scheduleColors[
							i
						]};"
					>
						<div style="font-size: 11px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">
							{s.phase}
						</div>
						<div style="font-size: 10px; color: {c.slate}; margin-bottom: 6px;">{s.duration}</div>
						<div style="font-size: 9px; color: {c.lightSlate};">
							<div>{s.focus}</div>
							<div style="margin-top: 2px;"><strong>Owner:</strong> {s.owner}</div>
						</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Evaluation Suite Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
