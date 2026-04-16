<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = '#0F172A';

	const project = {
		name: 'Coastal Manufacturing - Invoice Processing',
		contractValue: 85000,
		startDate: '24 Feb 2026',
		endDate: '15 Apr 2026',
		status: 'In Progress',
	};

	const revenue = [
		{
			milestone: 'Project Kickoff',
			planned: 25500,
			actual: 25500,
			invoiced: '25 Feb 2026',
			paid: '10 Mar 2026',
		},
		{
			milestone: 'Design Complete',
			planned: 17000,
			actual: 17000,
			invoiced: '15 Mar 2026',
			paid: '28 Mar 2026',
		},
		{
			milestone: 'Build Complete',
			planned: 25500,
			actual: 25500,
			invoiced: '01 Apr 2026',
			paid: null as string | null,
		},
		{
			milestone: 'Go-Live',
			planned: 17000,
			actual: null as number | null,
			invoiced: null as string | null,
			paid: null as string | null,
		},
	];

	const costs = {
		labor: [
			{
				role: 'Delivery Lead',
				rate: 150,
				plannedHours: 80,
				actualHours: 72,
				plannedCost: 12000,
				actualCost: 10800,
			},
			{
				role: 'AI Engineer',
				rate: 175,
				plannedHours: 120,
				actualHours: 115,
				plannedCost: 21000,
				actualCost: 20125,
			},
			{
				role: 'Integration Dev',
				rate: 140,
				plannedHours: 100,
				actualHours: 88,
				plannedCost: 14000,
				actualCost: 12320,
			},
			{
				role: 'Solutions Architect',
				rate: 200,
				plannedHours: 20,
				actualHours: 18,
				plannedCost: 4000,
				actualCost: 3600,
			},
		],
		direct: [
			{ item: 'AI/LLM API Costs (Claude)', planned: 800, actual: 720 },
			{ item: 'Cloud Infrastructure (Azure)', planned: 400, actual: 380 },
			{ item: 'Development Tools', planned: 200, actual: 150 },
			{ item: 'Travel & Expenses', planned: 500, actual: 0 },
		],
		overhead: [
			{ item: 'Project Management Tools', planned: 100, actual: 100 },
			{ item: 'Communication Tools', planned: 50, actual: 50 },
		],
	};

	const totalPlannedLabor = costs.labor.reduce((acc, l) => acc + l.plannedCost, 0);
	const totalActualLabor = costs.labor.reduce((acc, l) => acc + l.actualCost, 0);
	const totalPlannedDirect = costs.direct.reduce((acc, d) => acc + d.planned, 0);
	const totalActualDirect = costs.direct.reduce((acc, d) => acc + d.actual, 0);
	const totalPlannedOverhead = costs.overhead.reduce((acc, o) => acc + o.planned, 0);
	const totalActualOverhead = costs.overhead.reduce((acc, o) => acc + o.actual, 0);

	const totalPlannedCost = totalPlannedLabor + totalPlannedDirect + totalPlannedOverhead;
	const totalActualCost = totalActualLabor + totalActualDirect + totalActualOverhead;

	const totalPlannedRevenue = revenue.reduce((acc, r) => acc + r.planned, 0);
	const totalActualRevenue = revenue.filter((r) => r.actual).reduce((acc, r) => acc + (r.actual ?? 0), 0);
	const totalInvoiced = revenue.filter((r) => r.invoiced).reduce((acc, r) => acc + (r.actual ?? r.planned), 0);
	const totalPaid = revenue.filter((r) => r.paid).reduce((acc, r) => acc + (r.actual ?? r.planned), 0);

	const plannedMargin = totalPlannedRevenue - totalPlannedCost;
	const plannedMarginPct = Math.round((plannedMargin / totalPlannedRevenue) * 100);
	const actualMargin = totalActualRevenue - totalActualCost;
	const actualMarginPct = Math.round((actualMargin / totalActualRevenue) * 100);

	function rowStatus(row: (typeof revenue)[0]) {
		if (row.paid) return { label: 'Paid', bg: `${c.green}20`, fg: c.green };
		if (row.invoiced) return { label: 'Invoiced', bg: `${c.cyan}20`, fg: c.cyan };
		if (row.actual) return { label: 'Complete', bg: `${c.orange}20`, fg: c.orange };
		return { label: 'Pending', bg: `${c.slate}20`, fg: c.slate };
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1000px; margin: 0 auto;">
		<div
			style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px;"
		>
			<div>
				<div
					style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 8px;"
				>
					Financial Tracking
				</div>
				<h1 style="font-size: 28px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">Project Budget</h1>
				<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">{project.name}</p>
			</div>
			<div style="text-align: right;">
				<div style="font-size: 12px; color: {c.slate};">
					{project.startDate} → {project.endDate}
				</div>
				<div
					style="padding: 4px 12px; background-color: {c.cyan}20; color: {c.cyan}; border-radius: 6px; font-size: 11px; margin-top: 8px; display: inline-block;"
				>
					{project.status}
				</div>
			</div>
		</div>

		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;">
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Contract Value</div>
				<div style="font-size: 28px; font-weight: 700; color: {c.white};">
					${project.contractValue.toLocaleString()}
				</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Revenue Recognized</div>
				<div style="font-size: 28px; font-weight: 700; color: {c.green};">
					${totalActualRevenue.toLocaleString()}
				</div>
				<div style="font-size: 11px; color: {c.lightSlate};">
					{Math.round((totalActualRevenue / totalPlannedRevenue) * 100)}% of total
				</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Costs to Date</div>
				<div style="font-size: 28px; font-weight: 700; color: {c.orange};">
					${totalActualCost.toLocaleString()}
				</div>
				<div
					style="font-size: 11px; color: {totalActualCost <= totalPlannedCost * 0.8 ? c.green : c.lightSlate};"
				>
					${(totalPlannedCost - totalActualCost).toLocaleString()} under budget
				</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Current Margin</div>
				<div
					style="font-size: 28px; font-weight: 700; color: {actualMarginPct >= plannedMarginPct ? c.green : c.orange};"
				>
					{actualMarginPct}%
				</div>
				<div style="font-size: 11px; color: {c.lightSlate};">Target: {plannedMarginPct}%</div>
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Revenue</h2>

			<table style="width: 100%; border-collapse: collapse;">
				<thead>
					<tr>
						{#each ['Milestone', 'Planned', 'Actual', 'Invoiced', 'Paid', 'Status'] as h}
							<th
								style="text-align: left; padding: 12px; font-size: 11px; color: {c.slate}; text-transform: uppercase; border-bottom: 1px solid {c.slate}33;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each revenue as row}
						{@const st = rowStatus(row)}
						<tr style="border-bottom: 1px solid {c.slate}22;">
							<td style="padding: 14px 12px; font-size: 13px; color: {c.white};">{row.milestone}</td>
							<td style="padding: 14px 12px; font-size: 13px; color: {c.lightSlate};">
								${row.planned.toLocaleString()}
							</td>
							<td style="padding: 14px 12px; font-size: 13px; color: {row.actual ? c.white : c.slate};">
								{row.actual ? `$${row.actual.toLocaleString()}` : '—'}
							</td>
							<td style="padding: 14px 12px; font-size: 12px; color: {c.lightSlate};">
								{row.invoiced || '—'}
							</td>
							<td style="padding: 14px 12px; font-size: 12px; color: {row.paid ? c.green : c.slate};">
								{row.paid || '—'}
							</td>
							<td style="padding: 14px 12px;">
								<span
									style="font-size: 10px; padding: 4px 10px; background-color: {st.bg}; color: {st.fg}; border-radius: 4px;"
								>
									{st.label}
								</span>
							</td>
						</tr>
					{/each}
					<tr style="background-color: {pageBg};">
						<td style="padding: 14px 12px; font-size: 13px; font-weight: 700; color: {c.white};">Total</td>
						<td style="padding: 14px 12px; font-size: 13px; font-weight: 700; color: {c.white};">
							${totalPlannedRevenue.toLocaleString()}
						</td>
						<td style="padding: 14px 12px; font-size: 13px; font-weight: 700; color: {c.green};">
							${totalActualRevenue.toLocaleString()}
						</td>
						<td style="padding: 14px 12px; font-size: 12px; color: {c.cyan};">
							${totalInvoiced.toLocaleString()}
						</td>
						<td style="padding: 14px 12px; font-size: 12px; color: {c.green};">
							${totalPaid.toLocaleString()}
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Costs</h2>

			<div style="margin-bottom: 24px;">
				<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">Labor</div>
				<table style="width: 100%; border-collapse: collapse;">
					<thead>
						<tr>
							{#each ['Role', 'Rate/hr', 'Planned Hrs', 'Actual Hrs', 'Planned Cost', 'Actual Cost', 'Variance'] as h}
								<th
									style="text-align: left; padding: 10px; font-size: 10px; color: {c.slate}; text-transform: uppercase; border-bottom: 1px solid {c.slate}33;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each costs.labor as row}
							<tr style="border-bottom: 1px solid {c.slate}22;">
								<td style="padding: 12px 10px; font-size: 12px; color: {c.white};">{row.role}</td>
								<td style="padding: 12px 10px; font-size: 12px; color: {c.lightSlate};">${row.rate}</td>
								<td style="padding: 12px 10px; font-size: 12px; color: {c.lightSlate};">
									{row.plannedHours}
								</td>
								<td style="padding: 12px 10px; font-size: 12px; color: {c.white};">{row.actualHours}</td>
								<td style="padding: 12px 10px; font-size: 12px; color: {c.lightSlate};">
									${row.plannedCost.toLocaleString()}
								</td>
								<td style="padding: 12px 10px; font-size: 12px; color: {c.white};">
									${row.actualCost.toLocaleString()}
								</td>
								<td
									style="padding: 12px 10px; font-size: 12px; color: {row.actualCost <= row.plannedCost ? c.green : c.red};"
								>
									{row.actualCost <= row.plannedCost ? '-' : '+'}${Math.abs(
										row.plannedCost - row.actualCost,
									).toLocaleString()}
								</td>
							</tr>
						{/each}
						<tr style="background-color: {pageBg};">
							<td colspan="4" style="padding: 12px 10px; font-size: 12px; font-weight: 600; color: {c.white};">
								Labor Subtotal
							</td>
							<td style="padding: 12px 10px; font-size: 12px; font-weight: 600; color: {c.white};">
								${totalPlannedLabor.toLocaleString()}
							</td>
							<td style="padding: 12px 10px; font-size: 12px; font-weight: 600; color: {c.white};">
								${totalActualLabor.toLocaleString()}
							</td>
							<td style="padding: 12px 10px; font-size: 12px; font-weight: 600; color: {c.green};">
								-${(totalPlannedLabor - totalActualLabor).toLocaleString()}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div style="margin-bottom: 24px;">
				<div style="font-size: 14px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">Direct Costs</div>
				<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
					{#each costs.direct as item}
						<div
							style="background-color: {pageBg}; border-radius: 8px; padding: 16px; display: flex; justify-content: space-between; align-items: center;"
						>
							<span style="font-size: 13px; color: {c.white};">{item.item}</span>
							<div style="text-align: right;">
								<div style="font-size: 13px; color: {c.white};">${item.actual.toLocaleString()}</div>
								<div style="font-size: 10px; color: {c.slate};">of ${item.planned.toLocaleString()}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 14px; font-weight: 600; color: {c.white}; margin-bottom: 16px;">Cost Summary</div>
				<div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 16px;">
					<div style="font-size: 12px; color: {c.slate};">Category</div>
					<div style="font-size: 12px; color: {c.slate}; text-align: right;">Planned</div>
					<div style="font-size: 12px; color: {c.slate}; text-align: right;">Actual</div>
					<div style="font-size: 12px; color: {c.slate}; text-align: right;">Variance</div>

					<div style="font-size: 13px; color: {c.lightSlate};">Labor</div>
					<div style="font-size: 13px; color: {c.lightSlate}; text-align: right;">
						${totalPlannedLabor.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.white}; text-align: right;">
						${totalActualLabor.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.green}; text-align: right;">
						-${(totalPlannedLabor - totalActualLabor).toLocaleString()}
					</div>

					<div style="font-size: 13px; color: {c.lightSlate};">Direct Costs</div>
					<div style="font-size: 13px; color: {c.lightSlate}; text-align: right;">
						${totalPlannedDirect.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.white}; text-align: right;">
						${totalActualDirect.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.green}; text-align: right;">
						-${(totalPlannedDirect - totalActualDirect).toLocaleString()}
					</div>

					<div style="font-size: 13px; color: {c.lightSlate};">Overhead</div>
					<div style="font-size: 13px; color: {c.lightSlate}; text-align: right;">
						${totalPlannedOverhead.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.white}; text-align: right;">
						${totalActualOverhead.toLocaleString()}
					</div>
					<div style="font-size: 13px; color: {c.slate}; text-align: right;">$0</div>

					<div
						style="font-size: 14px; font-weight: 700; color: {c.white}; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						Total Costs
					</div>
					<div
						style="font-size: 14px; font-weight: 700; color: {c.white}; text-align: right; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						${totalPlannedCost.toLocaleString()}
					</div>
					<div
						style="font-size: 14px; font-weight: 700; color: {c.orange}; text-align: right; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						${totalActualCost.toLocaleString()}
					</div>
					<div
						style="font-size: 14px; font-weight: 700; color: {c.green}; text-align: right; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						-${(totalPlannedCost - totalActualCost).toLocaleString()}
					</div>
				</div>
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Profitability Summary</h2>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div style="background-color: {pageBg}; border-radius: 12px; padding: 24px;">
					<div style="font-size: 12px; color: {c.slate}; margin-bottom: 8px;">Planned</div>
					<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
						<span style="font-size: 13px; color: {c.lightSlate};">Revenue</span>
						<span style="font-size: 13px; color: {c.white};">${totalPlannedRevenue.toLocaleString()}</span>
					</div>
					<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
						<span style="font-size: 13px; color: {c.lightSlate};">Costs</span>
						<span style="font-size: 13px; color: {c.white};">-${totalPlannedCost.toLocaleString()}</span>
					</div>
					<div
						style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						<span style="font-size: 14px; font-weight: 600; color: {c.white};">Margin</span>
						<span style="font-size: 14px; font-weight: 600; color: {c.cyan};">
							${plannedMargin.toLocaleString()} ({plannedMarginPct}%)
						</span>
					</div>
				</div>

				<div style="background-color: {pageBg}; border-radius: 12px; padding: 24px;">
					<div style="font-size: 12px; color: {c.slate}; margin-bottom: 8px;">Actual (to date)</div>
					<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
						<span style="font-size: 13px; color: {c.lightSlate};">Revenue</span>
						<span style="font-size: 13px; color: {c.green};">${totalActualRevenue.toLocaleString()}</span>
					</div>
					<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
						<span style="font-size: 13px; color: {c.lightSlate};">Costs</span>
						<span style="font-size: 13px; color: {c.orange};">-${totalActualCost.toLocaleString()}</span>
					</div>
					<div
						style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid {c.slate}33;"
					>
						<span style="font-size: 14px; font-weight: 600; color: {c.white};">Margin</span>
						<span
							style="font-size: 14px; font-weight: 600; color: {actualMarginPct >= plannedMarginPct ? c.green : c.orange};"
						>
							${actualMargin.toLocaleString()} ({actualMarginPct}%)
						</span>
					</div>
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Project Budget Template v1.0</div>
		</div>
	</div>
</div>
