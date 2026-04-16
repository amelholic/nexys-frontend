<script lang="ts">
	import { toolSpecification as tool } from '$lib/brief/data/toolSpecification';
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	function labelize(key: string) {
		return key.replace(/([A-Z])/g, ' $1').trim();
	}

	function statusStyle(status: string) {
		const styles: Record<string, { bg: string; color: string }> = {
			Production: { bg: `${c.green}20`, color: c.green },
			Staging: { bg: `${c.orange}20`, color: c.orange },
			Development: { bg: `${c.cyan}20`, color: c.cyan },
			Deprecated: { bg: `${c.red}20`, color: c.red },
			Read: { bg: `${c.cyan}20`, color: c.cyan },
			Write: { bg: `${c.pink}20`, color: c.pink },
		};
		return styles[status] ?? { bg: c.offWhite, color: c.slate };
	}
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
	{@const s = statusStyle(status)}
	<span
		style="padding: 2px 8px; border-radius: 3px; font-size: 9px; font-weight: 600; background-color: {s.bg}; color: {s.color}; text-transform: uppercase;"
	>
		{status}
	</span>
{/snippet}

{#snippet codeBlock(text: string)}
	<pre
		style="background-color: {c.deepNavy}; color: #E2E8F0; padding: 12px; border-radius: 4px; font-size: 10px; line-height: 1.4; overflow: auto; margin: 0; font-family: JetBrains Mono, monospace; white-space: pre-wrap; word-break: break-word;"
	>{text}</pre>
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
						Tool Specification
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">{tool.name}</h1>
					<div style="font-size: 11px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;">
						{tool.toolId} v{tool.version}
					</div>
				</div>
				<div style="text-align: right;">
					{@render statusBadge(tool.status)}
					<div style="font-size: 10px; color: {c.lightSlate}; margin-top: 10px;">
						Updated: {tool.lastUpdated}<br />
						Owner: {tool.owner}
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Overview')}
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
				<p style="font-size: 12px; color: {c.deepNavy}; line-height: 1.6; margin: 0;">{tool.overview.description}</p>
			</div>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each [{ label: 'Protocol', value: tool.overview.protocol }, { label: 'Transport', value: tool.overview.transport }, { label: 'Base URL', value: tool.overview.baseUrl }] as item}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{item.label}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy}; font-family: JetBrains Mono, monospace;">
							{item.value}
						</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'Capabilities')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 20px;">
				<thead>
					<tr>
						{#each ['Method', 'Description', 'Type'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each tool.capabilities as cap}
						<tr>
							<td
								style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.purple};"
							>
								{cap.name}
							</td>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{cap.description}
							</td>
							<td style="padding: 10px; border-bottom: 1px solid {c.lightSlate}22;">
								{@render statusBadge(cap.category)}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.pink, 'Authentication')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each [{ label: 'Method', value: tool.authentication.method }, { label: 'Token Endpoint', value: tool.authentication.tokenEndpoint }, { label: 'Token Lifetime', value: tool.authentication.tokenLifetime }, { label: 'Refresh Strategy', value: tool.authentication.refreshStrategy }] as item}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{item.label}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy};">{item.value}</div>
					</div>
				{/each}
			</div>
			<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
				<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;">
					Required Scopes
				</div>
				<div style="display: flex; flex-wrap: wrap; gap: 6px;">
					{#each tool.authentication.scopes as scope}
						<span
							style="font-size: 10px; color: {c.purple}; background-color: {c.purple}15; padding: 3px 8px; border-radius: 3px; font-family: JetBrains Mono, monospace;"
						>
							{scope}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{tool.name}</span>
				<span style="font-size: 10px; color: {c.lightSlate};">Page 2 - Method Details</span>
			</div>

			{#each tool.methods as method}
				<div style="margin-bottom: 32px;">
					{@render sectionTitle(method.category === 'Read' ? c.cyan : c.pink, method.name)}
					<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
						{@render statusBadge(method.category)}
						<span style="font-size: 12px; color: {c.slate};">{method.description}</span>
					</div>

					<div style="margin-bottom: 16px;">
						<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;">
							Inputs
						</div>
						<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
							<thead>
								<tr>
									{#each ['Parameter', 'Type', 'Required', 'Default', 'Description'] as h}
										<th
											style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
										>
											{h}
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each method.inputs as input}
									<tr>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.purple};"
										>
											{input.name}
										</td>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.slate};"
										>
											{input.type}
										</td>
										<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22;">
											{#if input.required}
												<span style="color: {c.pink};">Yes</span>
											{:else}
												No
											{/if}
										</td>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.slate};"
										>
											{'default' in input ? String((input as { default?: string }).default) : '-'}
										</td>
										<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
											{input.description}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<div style="margin-bottom: 16px;">
						<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;">
							Outputs
						</div>
						<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
							<thead>
								<tr>
									{#each ['Field', 'Type', 'Description'] as h}
										<th
											style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
										>
											{h}
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each method.outputs as output}
									<tr>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.cyan};"
										>
											{output.name}
										</td>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.slate};"
										>
											{output.type}
										</td>
										<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
											{output.description}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<div style="margin-bottom: 16px;">
						<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;">
							Error Codes
						</div>
						<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
							<thead>
								<tr>
									{#each ['Code', 'Description', 'Agent Action'] as h}
										<th
											style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
										>
											{h}
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each method.errors as err}
									<tr>
										<td
											style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.red};"
										>
											{err.code}
										</td>
										<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
											{err.description}
										</td>
										<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
											{err.action}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
						<div>
							<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;">
								Example Request
							</div>
							{@render codeBlock(method.example.request)}
						</div>
						<div>
							<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;">
								Example Response
							</div>
							{@render codeBlock(method.example.response)}
						</div>
					</div>

					<div style="display: flex; gap: 16px;">
						<div style="font-size: 10px;">
							<strong style="color: {c.slate};">Rate Limit:</strong>
							<span style="color: {c.deepNavy};">{method.rateLimit}</span>
						</div>
						<div style="font-size: 10px;">
							<strong style="color: {c.slate};">Timeout:</strong>
							<span style="color: {c.deepNavy};">{method.timeout}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>

		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{tool.name}</span>
				<span style="font-size: 10px; color: {c.lightSlate};">Page 3 - Operations</span>
			</div>

			{@render sectionTitle(c.purple, 'Permissions Matrix')}
			<table style="width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 20px;">
				<thead>
					<tr>
						{#each ['Scope', 'Description', 'Granted To'] as h}
							<th
								style="text-align: left; padding: 8px 10px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each tool.permissions as perm}
						<tr>
							<td
								style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; font-family: JetBrains Mono, monospace; color: {c.purple};"
							>
								{perm.scope}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
								{perm.description}
							</td>
							<td style="padding: 8px 10px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{perm.grantedTo.join(', ')}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.orange, 'Rate Limits')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each Object.entries(tool.rateLimits) as [key, value]}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{labelize(key)}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy};">{value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.pink, 'Error Handling')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each Object.entries(tool.errorHandling) as [key, value]}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{labelize(key)}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy};">{value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.cyan, 'Monitoring & Alerts')}
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
					<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
						Health Endpoint
					</div>
					<div style="font-size: 11px; color: {c.deepNavy}; font-family: JetBrains Mono, monospace;">
						{tool.monitoring.healthEndpoint}
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px;">
					<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
						Metrics Endpoint
					</div>
					<div style="font-size: 11px; color: {c.deepNavy}; font-family: JetBrains Mono, monospace;">
						{tool.monitoring.metricsEndpoint}
					</div>
				</div>
			</div>
			<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
				<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 8px;">
					Alert Rules
				</div>
				{#each tool.monitoring.alerts as alert, i}
					<div
						style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: {i < tool.monitoring.alerts.length - 1
							? `1px solid ${c.lightSlate}33`
							: 'none'};"
					>
						<span style="font-size: 11px; color: {c.deepNavy};">{alert.condition}</span>
						<span style="font-size: 11px; color: {c.orange};">{alert.action}</span>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.pink, 'Security')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
				{#each Object.entries(tool.security) as [key, value]}
					<div
						style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px; border-left: 3px solid {c.pink};"
					>
						<div style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">
							{labelize(key)}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy};">{value}</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Tool Specification Template</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
