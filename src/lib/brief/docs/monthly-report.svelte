<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { report } from '$lib/brief/docs/data/monthly-report-data';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: 'AUD',
			minimumFractionDigits: 0
		}).format(amount);
	}

	function statusBadgeStyle(status: string) {
		const styles: Record<string, { bg: string; color: string }> = {
			Healthy: { bg: `${c.green}20`, color: c.green },
			Warning: { bg: `${c.orange}20`, color: c.orange },
			Critical: { bg: `${c.red}20`, color: c.red },
			High: { bg: `${c.pink}20`, color: c.pink },
			Medium: { bg: `${c.orange}20`, color: c.orange },
			Low: { bg: `${c.cyan}20`, color: c.cyan }
		};
		return styles[status] ?? styles['Healthy'];
	}
</script>

{#snippet sectionTitle(label: string, color: string)}
	<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px" style:margin-top="28px">
		<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={color}></div>
		<h3
			style:font-size="11px"
			style:font-weight="600"
			style:color={c.deepNavy}
			style:text-transform="uppercase"
			style:letter-spacing="1px"
			style:margin="0"
		>
			{label}
		</h3>
	</div>
{/snippet}

{#snippet statusBadge(status: string)}
	{@const s = statusBadgeStyle(status)}
	<span
		style:padding="3px 10px"
		style:border-radius="3px"
		style:font-size="9px"
		style:font-weight="600"
		style:background-color={s.bg}
		style:color={s.color}
		style:text-transform="uppercase"
	>
		{status}
	</span>
{/snippet}

{#snippet kpiCard(kpi: (typeof report.kpis)[number])}
	{@const isAbove = kpi.status === 'above'}
	<div
		style:background-color={c.offWhite}
		style:border-radius="8px"
		style:padding="16px"
		style:border-left="4px solid {isAbove ? c.green : c.orange}"
	>
		<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
			{kpi.name}
		</div>
		<div style:display="flex" style:justify-content="space-between" style:align-items="flex-end">
			<div style:font-size="24px" style:font-weight="700" style:color={c.deepNavy}>{kpi.value}</div>
			<div style:text-align="right">
				<div style:font-size="11px" style:color={isAbove ? c.green : c.orange} style:font-weight="600">
					{kpi.change}
				</div>
				<div style:font-size="9px" style:color={c.lightSlate}>Target: {kpi.target}</div>
			</div>
		</div>
	</div>
{/snippet}

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<!-- Page 1 -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:background={c.deepNavy} style:padding="28px 36px" style:position="relative">
			<div
				style:position="absolute"
				style:top="0"
				style:left="0"
				style:right="0"
				style:height="4px"
				style:background={gradient}
			></div>
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div
						style:font-size="9px"
						style:color={c.cyan}
						style:text-transform="uppercase"
						style:letter-spacing="2px"
						style:margin-bottom="6px"
					>
						Monthly Performance Report · {aiFlowBrand}
					</div>
					<h1 style:font-size="24px" style:font-weight="700" style:color={c.white} style:margin="0 0 6px 0">
						{report.agent}
					</h1>
					<div style:font-size="11px" style:color={c.lightSlate}>{report.client} • {report.agentId}</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="18px" style:font-weight="700" style:color={c.cyan}>{report.period}</div>
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-top="6px">
						Prepared: {report.date}<br />
						By: {report.preparedBy}
					</div>
				</div>
			</div>
		</div>

		<div style:padding="20px 36px 36px">
			<div
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="20px"
				style:margin-bottom="24px"
				style:display="flex"
				style:gap="20px"
				style:align-items="flex-start"
			>
				{@render statusBadge(report.summary.status)}
				<div style:font-size="13px" style:color={c.deepNavy} style:line-height="1.6">{report.summary.headline}</div>
			</div>

			{@render sectionTitle('Key Performance Indicators', c.cyan)}
			<div
				style:display="grid"
				style:grid-template-columns="repeat(3, 1fr)"
				style:gap="12px"
				style:margin-bottom="24px"
			>
				{#each report.kpis as kpi (kpi.name)}
					{@render kpiCard(kpi)}
				{/each}
			</div>

			{@render sectionTitle('Processing Volume', c.purple)}
			<div style:display="flex" style:gap="12px" style:margin-bottom="24px">
				{#each report.volumeTrend as week (week.week)}
					<div
						style:flex="1"
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:text-align="center"
					>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="8px">{week.week}</div>
						<div style:font-size="20px" style:font-weight="700" style:color={c.deepNavy}>{week.processed}</div>
						<div style:font-size="10px" style:color={c.pink} style:margin-top="4px">{week.exceptions} exceptions</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Exception Analysis', c.pink)}
			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px" style:margin-bottom="20px">
				<thead>
					<tr>
						{#each ['Category', 'Count', '%', 'Trend'] as h (h)}
							<th
								style:text-align="left"
								style:padding="10px 12px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="9px"
								style:text-transform="uppercase"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each report.exceptionBreakdown as exc (exc.category)}
						<tr>
							<td style:padding="10px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								{exc.category}
							</td>
							<td
								style:padding="10px 12px"
								style:border-bottom="1px solid {c.lightSlate}22"
								style:font-weight="600"
								style:color={c.deepNavy}
							>
								{exc.count}
							</td>
							<td style:padding="10px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{exc.pct}
							</td>
							<td style:padding="10px 12px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:color={exc.trend === 'up' ? c.red : exc.trend === 'down' ? c.green : c.slate}
								>
									{exc.trend === 'up' ? '↑' : exc.trend === 'down' ? '↓' : '→'}
									{exc.trend}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Page 2 -->
	<div
		class="page-break"
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="24px 36px 36px">
			<div
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
				style:padding-bottom="14px"
				style:border-bottom="1px solid {c.lightSlate}33"
				style:margin-bottom="8px"
			>
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>
					{report.agent} — {report.period}
				</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 2</span>
			</div>

			{@render sectionTitle('Cost Analysis', c.orange)}
			<div style:display="grid" style:grid-template-columns="2fr 1fr" style:gap="20px" style:margin-bottom="24px">
				<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
					<thead>
						<tr>
							{#each ['Category', 'Amount', '%'] as h (h)}
								<th
									style:text-align="left"
									style:padding="10px 12px"
									style:background-color={c.offWhite}
									style:color={c.slate}
									style:font-weight="600"
									style:font-size="9px"
									style:text-transform="uppercase"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each report.costBreakdown as cost (cost.category)}
							<tr>
								<td style:padding="10px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
									{cost.category}
								</td>
								<td
									style:padding="10px 12px"
									style:border-bottom="1px solid {c.lightSlate}22"
									style:font-weight="500"
									style:color={c.deepNavy}
								>
									{formatCurrency(cost.amount)}
								</td>
								<td style:padding="10px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
									{cost.pct}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
				<div
					style:background-color={c.deepNavy}
					style:border-radius="8px"
					style:padding="20px"
					style:display="flex"
					style:flex-direction="column"
					style:justify-content="center"
					style:align-items="center"
				>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
						Total Monthly Cost
					</div>
					<div style:font-size="28px" style:font-weight="700" style:color={c.cyan}>
						{formatCurrency(report.totalCost)}
					</div>
					<div style:font-size="11px" style:color={c.lightSlate} style:margin-top="8px">
						{formatCurrency(report.totalCost / 2847)}/document
					</div>
				</div>
			</div>

			{@render sectionTitle('Incidents', c.pink)}
			{#if report.incidents.length === 0}
				<div
					style:background-color="{c.green}10"
					style:border-radius="8px"
					style:padding="16px"
					style:text-align="center"
					style:color={c.green}
					style:font-size="13px"
				>
					No incidents this period ✓
				</div>
			{:else}
				{#each report.incidents as inc (inc.id)}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:margin-bottom="12px"
						style:border-left="4px solid {inc.severity === 'High' ? c.red : inc.severity === 'Medium' ? c.orange : c.cyan}"
					>
						<div
							style:display="flex"
							style:justify-content="space-between"
							style:align-items="flex-start"
							style:margin-bottom="10px"
						>
							<div style:display="flex" style:align-items="center" style:gap="10px">
								<span style:font-family="'JetBrains Mono', monospace" style:font-size="11px" style:color={c.slate}>
									{inc.id}
								</span>
								{@render statusBadge(inc.severity)}
							</div>
							<span style:font-size="11px" style:color={c.lightSlate}>{inc.date}</span>
						</div>
						<div style:font-size="12px" style:color={c.deepNavy} style:margin-bottom="8px">
							<strong>Issue:</strong>
							{inc.description}
						</div>
						<div style:font-size="12px" style:color={c.deepNavy} style:margin-bottom="8px">
							<strong>Resolution:</strong>
							{inc.resolution}
						</div>
						<div style:display="flex" style:gap="20px" style:font-size="11px" style:color={c.slate}>
							<span><strong>Downtime:</strong> {inc.downtime}</span>
							<span><strong>Impact:</strong> {inc.impact}</span>
						</div>
					</div>
				{/each}
			{/if}

			{@render sectionTitle('Improvements This Month', c.cyan)}
			{#each report.improvements as imp, i (i)}
				<div
					style:display="flex"
					style:gap="12px"
					style:padding="12px 0"
					style:border-bottom={i < report.improvements.length - 1 ? `1px solid ${c.lightSlate}22` : 'none'}
				>
					<div
						style:width="8px"
						style:height="8px"
						style:border-radius="50%"
						style:background-color={c.cyan}
						style:margin-top="6px"
						style:flex-shrink="0"
					></div>
					<div>
						<div style:font-size="12px" style:font-weight="500" style:color={c.deepNavy}>{imp.change}</div>
						<div style:font-size="11px" style:color={c.slate} style:margin-top="2px">{imp.impact}</div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-top="2px">{imp.date}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Page 3 -->
	<div
		class="page-break"
		style:max-width="850px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="24px 36px 36px">
			<div
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
				style:padding-bottom="14px"
				style:border-bottom="1px solid {c.lightSlate}33"
				style:margin-bottom="8px"
			>
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>
					{report.agent} — {report.period}
				</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 3</span>
			</div>

			{@render sectionTitle('Recommendations', c.purple)}
			{#each report.recommendations as rec (rec.recommendation)}
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="12px">
					<div
						style:display="flex"
						style:justify-content="space-between"
						style:align-items="flex-start"
						style:margin-bottom="10px"
					>
						<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{rec.recommendation}</div>
						{@render statusBadge(rec.priority)}
					</div>
					<div style:font-size="12px" style:color={c.slate} style:margin-bottom="10px">{rec.rationale}</div>
					<div style:display="flex" style:gap="24px" style:font-size="11px">
						<span
							><strong style:color={c.deepNavy}>Impact:</strong>
							<span style:color={c.green}>{rec.estimatedImpact}</span></span
						>
						<span><strong style:color={c.deepNavy}>Effort:</strong> <span style:color={c.slate}>{rec.effort}</span></span>
					</div>
				</div>
			{/each}

			{@render sectionTitle('Looking Ahead: March 2026', c.orange)}
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Planned Work
					</div>
					{#each report.nextMonth.plannedWork as item (item)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="8px">
							<span style:color={c.cyan}>→</span>
							<span style:font-size="12px" style:color={c.deepNavy}>{item}</span>
						</div>
					{/each}
				</div>
				<div style:background-color="{c.orange}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.orange} style:text-transform="uppercase" style:margin-bottom="10px">
						Risks & Considerations
					</div>
					{#each report.nextMonth.risks as item (item)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="8px">
							<span style:color={c.orange}>⚠</span>
							<span style:font-size="12px" style:color={c.deepNavy}>{item}</span>
						</div>
					{/each}
				</div>
			</div>

			{@render sectionTitle('Questions for Discussion', c.cyan)}
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:min-height="80px">
				<div style:font-size="11px" style:color={c.lightSlate} style:font-style="italic">Notes from review meeting:</div>
			</div>

			<div
				style:margin-top="28px"
				style:padding-top="14px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>Monthly Report Template · {aiFlowBrand}</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
