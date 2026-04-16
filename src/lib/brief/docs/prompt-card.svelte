<script lang="ts">
	import { promptCard as p } from '$lib/brief/data/promptCard';
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const statusStyles: Record<string, { bg: string; color: string }> = {
		Draft: { bg: `${c.lightSlate}30`, color: c.slate },
		Testing: { bg: `${c.orange}20`, color: c.orange },
		Production: { bg: `${c.green}20`, color: c.green },
		Deprecated: { bg: `${c.pink}20`, color: c.pink },
	};
</script>

{#snippet sectionTitle(color: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; margin-top: 24px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 11px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

{#snippet statusBadge(status: string)}
	{@const s = statusStyles[status] ?? statusStyles['Draft']}
	<span
		style="padding: 3px 10px; border-radius: 3px; font-size: 9px; font-weight: 600; background-color: {s.bg}; color: {s.color}; text-transform: uppercase;"
	>
		{status}
	</span>
{/snippet}

{#snippet codeBlock(body: string)}
	<pre
		style="background-color: {c.deepNavy}; color: #E2E8F0; padding: 16px; border-radius: 6px; font-size: 11px; line-height: 1.5; overflow: auto; margin: 0; font-family: JetBrains Mono, monospace; white-space: pre-wrap; word-break: break-word;"
	>{body}</pre>
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
						Prompt Card
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">{p.agentName}</h1>
					<div style="font-size: 11px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;">
						{p.agentId} • {p.promptId} • v{p.version}
					</div>
				</div>
				<div style="text-align: right;">
					{@render statusBadge(p.status)}
					<div style="font-size: 10px; color: {c.lightSlate}; margin-top: 10px;">
						Updated: {p.lastUpdated}<br />
						By: {p.updatedBy}
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Model Configuration')}
			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each [{ label: 'Primary Model', value: p.model.primary }, { label: 'Fallback', value: p.model.fallback }, { label: 'Temperature', value: String(p.model.temperature) }, { label: 'Max Tokens', value: String(p.model.maxTokens) }, { label: 'Timeout', value: p.model.timeout }] as item}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 10px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 2px;">
							{item.label}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy}; font-family: JetBrains Mono, monospace;">
							{item.value}
						</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'System Prompt')}
			{@render codeBlock(p.systemPrompt)}

			{@render sectionTitle(c.orange, 'Version History')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
				<thead>
					<tr>
						{#each ['Version', 'Date', 'Change', 'Author'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each p.changelog as log, i}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {i === 0
									? c.green
									: c.slate};"
							>
								{log.version}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{log.date}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{log.change}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{log.author}
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
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{p.agentName}</span>
				<span style="font-size: 10px; color: {c.lightSlate};">{p.promptId} v{p.version} • Page 2</span>
			</div>

			{@render sectionTitle(c.pink, 'User Prompt Template')}
			{@render codeBlock(p.userPromptTemplate)}

			{@render sectionTitle(c.cyan, 'Output Schema')}
			<div style="font-size: 11px; color: {c.slate}; margin-bottom: 10px;">
				Schema: <strong style="color: {c.deepNavy};">{p.outputSchema.name}</strong>
			</div>
			<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
				<thead>
					<tr>
						{#each ['Field', 'Type', 'Required', 'Description'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each p.outputSchema.fields as field}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.purple};"
							>
								{field.name}
							</td>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.slate};"
							>
								{field.type}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22;">
								{#if field.required}
									<span style="color: {c.pink};">✓</span>
								{:else}
									<span style="color: {c.lightSlate};">—</span>
								{/if}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{field.desc}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.orange, 'Context Sources')}
			<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
				<thead>
					<tr>
						{#each ['Source', 'System', 'Refresh', 'Fields'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each p.contextSources as ctx}
						<tr>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-weight: 500; color: {c.deepNavy};">
								{ctx.name}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{ctx.source}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{ctx.refresh}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate}; font-size: 9px;">
								{ctx.fields}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
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
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{p.agentName}</span>
				<span style="font-size: 10px; color: {c.lightSlate};">{p.promptId} v{p.version} • Page 3</span>
			</div>

			{@render sectionTitle(c.purple, 'Few-Shot Examples')}
			{#each p.fewShotExamples as ex}
				<div style="margin-bottom: 20px; background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">{ex.name}</div>
					<div style="margin-bottom: 10px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							Input
						</div>
						<div
							style="font-size: 11px; color: {c.slate}; background-color: {c.white}; padding: 10px; border-radius: 4px; border: 1px solid {c.lightSlate}33;"
						>
							{ex.input}
						</div>
					</div>
					<div>
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							Output
						</div>
						<pre
							style="font-size: 10px; color: {c.deepNavy}; background-color: {c.white}; padding: 10px; border-radius: 4px; border: 1px solid {c.lightSlate}33; margin: 0; font-family: JetBrains Mono, monospace; white-space: pre-wrap;"
						>{ex.output}</pre>
					</div>
				</div>
			{/each}

			{@render sectionTitle(c.pink, 'Guardrails')}
			<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
				<thead>
					<tr>
						{#each ['Type', 'Rule', 'Action'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each p.guardrails as g}
						<tr>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22;">
								<span
									style="font-size: 9px; padding: 2px 6px; border-radius: 3px; background-color: {g.type === 'Input'
										? `${c.cyan}20`
										: g.type === 'Output'
											? `${c.purple}20`
											: `${c.pink}20`}; color: {g.type === 'Input' ? c.cyan : g.type === 'Output' ? c.purple : c.pink};"
								>
									{g.type}
								</span>
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{g.rule}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{g.action}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.cyan, 'Latest Test Results')}
			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;">
				{#each [{ label: 'Dataset Size', value: String(p.testing.goldenDatasetSize), highlight: false }, { label: 'Last Test', value: p.testing.lastTestDate, highlight: false }, { label: 'Accuracy', value: p.testing.accuracy, highlight: true }, { label: 'Avg Latency', value: p.testing.avgLatency, highlight: false }, { label: 'Pass Rate', value: p.testing.passRate, highlight: true }] as item}
					<div
						style="background-color: {item.highlight ? c.deepNavy : c.offWhite}; border-radius: 6px; padding: 14px; text-align: center;"
					>
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{item.label}
						</div>
						<div
							style="font-size: 16px; font-weight: 700; color: {item.highlight ? c.cyan : c.deepNavy};"
						>
							{item.value}
						</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Prompt Card Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
