<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';

	const report = {
		client: '[Client Name]',
		project: '[Project Name]',
		projectId: 'PRJ-XXX',
		weekEnding: '[Date]',
		weekNumber: 'X',
		totalWeeks: 'X',
		reportedBy: '[Name]',
		overallStatus: 'On Track' as const,
		summary:
			'[2-3 sentence summary of this weeks progress and any key highlights or concerns]',
		progress: {
			percentComplete: 45,
			phases: [
				{ name: 'Discovery', status: 'Complete', notes: '' },
				{ name: 'Design', status: 'Complete', notes: '' },
				{ name: 'Build', status: 'In Progress', notes: '60% complete' },
				{ name: 'Test', status: 'Not Started', notes: '' },
				{ name: 'Deploy', status: 'Not Started', notes: '' }
			] as const
		},
		completedThisWeek: ['[Completed item 1]', '[Completed item 2]', '[Completed item 3]'],
		plannedNextWeek: ['[Planned item 1]', '[Planned item 2]', '[Planned item 3]'],
		risks: [
			{
				risk: '[Risk description]',
				impact: 'Medium',
				mitigation: '[Mitigation action]',
				owner: '[Owner]',
				status: 'Open'
			}
		] as const,
		blockers: [] as {
			issue: string;
			impact: string;
			action: string;
			owner: string;
			dueDate: string;
		}[],
		decisions: [] as { decision: string; madeBy: string; date: string; impact: string }[],
		metrics: {
			budgetSpent: '$XX,XXX',
			budgetRemaining: '$XX,XXX',
			hoursLogged: 'XX',
			hoursRemaining: 'XX'
		},
		upcomingMilestones: [{ milestone: '[Milestone name]', date: '[Date]', status: 'On Track' }] as const,
		clientActions: [] as { action: string; owner: string; dueDate: string; status: string }[]
	};

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	function statusBadgeStyle(status: string): { bg: string; color: string } {
		const styles: Record<string, { bg: string; color: string }> = {
			'On Track': { bg: `${c.green}20`, color: c.green },
			'At Risk': { bg: `${c.orange}20`, color: c.orange },
			'Off Track': { bg: `${c.red}20`, color: c.red },
			Complete: { bg: `${c.green}20`, color: c.green },
			'In Progress': { bg: `${c.cyan}20`, color: c.cyan },
			'Not Started': { bg: `${c.lightSlate}30`, color: c.slate },
			Open: { bg: `${c.orange}20`, color: c.orange },
			Closed: { bg: `${c.green}20`, color: c.green },
			High: { bg: `${c.red}20`, color: c.red },
			Medium: { bg: `${c.orange}20`, color: c.orange },
			Low: { bg: `${c.cyan}20`, color: c.cyan }
		};
		return styles[status] ?? styles['Open'];
	}

	const progressBarWidth = `${report.progress.percentComplete}%`;
</script>

{#snippet sectionTitle(label: string, color: string)}
	<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="12px" style:margin-top="24px">
		<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={color}></div>
		<h3
			style:font-size="10px"
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
		style:padding="2px 8px"
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

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div
		style:max-width="850px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:background={c.deepNavy} style:padding="24px 36px" style:position="relative">
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
						Weekly Status Report
					</div>
					<h1 style:font-size="22px" style:font-weight="700" style:color={c.white} style:margin="0 0 4px 0">
						{report.project}
					</h1>
					<div style:font-size="12px" style:color={c.lightSlate}>{report.client}</div>
				</div>
				<div style:text-align="right">
					<div style:margin-bottom="8px">
						{@render statusBadge(report.overallStatus)}
					</div>
					<div style:font-size="11px" style:color={c.lightSlate}>
						Week {report.weekNumber} of {report.totalWeeks}<br />
						{report.weekEnding}
					</div>
				</div>
			</div>
		</div>

		<div style:padding="20px 36px 36px">
			<div
				style:background-color={c.offWhite}
				style:border-radius="6px"
				style:padding="14px 16px"
				style:margin-bottom="20px"
			>
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
					Summary
				</div>
				<div style:font-size="12px" style:color={c.deepNavy} style:line-height="1.6">{report.summary}</div>
			</div>

			<div style:margin-bottom="20px">
				<div style:display="flex" style:justify-content="space-between" style:margin-bottom="6px">
					<span style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase">
						Overall Progress
					</span>
					<span style:font-size="12px" style:font-weight="600" style:color={c.cyan}>
						{report.progress.percentComplete}%
					</span>
				</div>
				<div style:height="8px" style:background-color={c.offWhite} style:border-radius="4px" style:overflow="hidden">
					<div
						style:width={progressBarWidth}
						style:height="100%"
						style:background={`linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 100%)`}
						style:border-radius="4px"
					></div>
				</div>
			</div>

			<div style:display="flex" style:gap="8px" style:margin-bottom="20px">
				{#each report.progress.phases as phase (phase.name)}
					<div
						style:flex="1"
						style:background-color={c.offWhite}
						style:border-radius="6px"
						style:padding="10px"
						style:text-align="center"
					>
						<div style:font-size="10px" style:color={c.deepNavy} style:font-weight="500" style:margin-bottom="6px">
							{phase.name}
						</div>
						{@render statusBadge(phase.status)}
						{#if phase.notes}
							<div style:font-size="9px" style:color={c.slate} style:margin-top="4px">{phase.notes}</div>
						{/if}
					</div>
				{/each}
			</div>

			<div
				style:display="grid"
				style:grid-template-columns="1fr 1fr"
				style:gap="16px"
				style:margin-bottom="20px"
			>
				<div
					style:background-color="{c.green}08"
					style:border-radius="6px"
					style:padding="14px"
					style:border-left="3px solid {c.green}"
				>
					<div
						style:font-size="10px"
						style:color={c.green}
						style:font-weight="600"
						style:text-transform="uppercase"
						style:margin-bottom="10px"
					>
						Completed This Week
					</div>
					{#each report.completedThisWeek as item (item)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="6px" style:font-size="11px" style:color={c.deepNavy}>
							<span style:color={c.green}>✓</span>
							<span>{item}</span>
						</div>
					{/each}
				</div>
				<div
					style:background-color="{c.cyan}08"
					style:border-radius="6px"
					style:padding="14px"
					style:border-left="3px solid {c.cyan}"
				>
					<div
						style:font-size="10px"
						style:color={c.cyan}
						style:font-weight="600"
						style:text-transform="uppercase"
						style:margin-bottom="10px"
					>
						Planned Next Week
					</div>
					{#each report.plannedNextWeek as item (item)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="6px" style:font-size="11px" style:color={c.deepNavy}>
							<span style:color={c.cyan}>→</span>
							<span>{item}</span>
						</div>
					{/each}
				</div>
			</div>

			{#if report.blockers.length > 0}
				{@render sectionTitle('Blockers', c.red)}
				<div
					style:background-color="{c.red}08"
					style:border-radius="6px"
					style:padding="14px"
					style:border-left="3px solid {c.red}"
					style:margin-bottom="16px"
				>
					{#each report.blockers as blocker, i (i)}
						<div style:margin-bottom={i < report.blockers.length - 1 ? '12px' : '0'}>
							<div style:font-size="12px" style:font-weight="500" style:color={c.deepNavy} style:margin-bottom="4px">
								{blocker.issue}
							</div>
							<div style:display="flex" style:gap="16px" style:font-size="10px" style:color={c.slate}>
								<span><strong>Impact:</strong> {blocker.impact}</span>
								<span><strong>Owner:</strong> {blocker.owner}</span>
								<span><strong>Due:</strong> {blocker.dueDate}</span>
							</div>
							<div style:font-size="10px" style:color={c.red} style:margin-top="4px">
								<strong>Action:</strong>
								{blocker.action}
							</div>
						</div>
					{/each}
				</div>
			{/if}

			{#if report.risks.length > 0}
				{@render sectionTitle('Risks', c.orange)}
				<table style:width="100%" style:border-collapse="collapse" style:font-size="10px" style:margin-bottom="16px">
					<thead>
						<tr>
							{#each ['Risk', 'Impact', 'Mitigation', 'Owner', 'Status'] as h (h)}
								<th
									style:text-align="left"
									style:padding="8px"
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
						{#each report.risks as risk (risk.risk)}
							<tr>
								<td style:padding="8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
									{risk.risk}
								</td>
								<td style:padding="8px" style:border-bottom="1px solid {c.lightSlate}22">
									{@render statusBadge(risk.impact)}
								</td>
								<td style:padding="8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
									{risk.mitigation}
								</td>
								<td style:padding="8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
									{risk.owner}
								</td>
								<td style:padding="8px" style:border-bottom="1px solid {c.lightSlate}22">
									{@render statusBadge(risk.status)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}

			{#if report.clientActions.length > 0}
				{@render sectionTitle('Client Actions Required', c.purple)}
				<div
					style:background-color="{c.purple}08"
					style:border-radius="6px"
					style:padding="14px"
					style:border-left="3px solid {c.purple}"
					style:margin-bottom="16px"
				>
					{#each report.clientActions as action, i (i)}
						<div
							style:display="flex"
							style:justify-content="space-between"
							style:align-items="center"
							style:padding="8px 0"
							style:border-bottom={i < report.clientActions.length - 1 ? `1px solid ${c.lightSlate}22` : 'none'}
						>
							<div>
								<div style:font-size="11px" style:font-weight="500" style:color={c.deepNavy}>{action.action}</div>
								<div style:font-size="10px" style:color={c.slate}>Owner: {action.owner}</div>
							</div>
							<div style:text-align="right">
								<div style:font-size="10px" style:color={c.purple} style:font-weight="600">{action.dueDate}</div>
								{@render statusBadge(action.status)}
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
				<div>
					{@render sectionTitle('Project Metrics', c.cyan)}
					<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="8px">
						{#each [{ label: 'Budget Spent', value: report.metrics.budgetSpent }, { label: 'Budget Remaining', value: report.metrics.budgetRemaining }, { label: 'Hours Logged', value: report.metrics.hoursLogged }, { label: 'Hours Remaining', value: report.metrics.hoursRemaining }] as m (m.label)}
							<div style:background-color={c.offWhite} style:border-radius="4px" style:padding="10px">
								<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="2px">{m.label}</div>
								<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{m.value}</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					{@render sectionTitle('Upcoming Milestones', c.pink)}
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px">
						{#each report.upcomingMilestones as m, i (i)}
							<div
								style:display="flex"
								style:justify-content="space-between"
								style:align-items="center"
								style:padding="6px 0"
								style:border-bottom={i < report.upcomingMilestones.length - 1 ? `1px solid ${c.lightSlate}22` : 'none'}
							>
								<div>
									<div style:font-size="11px" style:font-weight="500" style:color={c.deepNavy}>{m.milestone}</div>
									<div style:font-size="10px" style:color={c.slate}>{m.date}</div>
								</div>
								{@render statusBadge(m.status)}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div
				style:margin-top="24px"
				style:padding-top="14px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>Prepared by: {report.reportedBy}</span>
				<span>{aiFlowBrand}</span>
			</div>
		</div>
	</div>
</div>
