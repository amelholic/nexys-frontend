<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { runbook } from '$lib/brief/docs/data/runbook-data';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;
	const phaseColors = [c.cyan, c.purple, c.pink, c.orange, c.green] as const;

	function severityBadge(level: string) {
		const styles: Record<string, { bg: string; color: string }> = {
			P1: { bg: `${c.red}20`, color: c.red },
			P2: { bg: `${c.orange}20`, color: c.orange },
			P3: { bg: `${c.yellow}20`, color: c.yellow },
			P4: { bg: `${c.cyan}20`, color: c.cyan }
		};
		return styles[level] ?? styles['P3'];
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

{#snippet cardShell(children: import('svelte').Snippet)}
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		{@render children()}
	</div>
{/snippet}

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	{@render cardShell(snippetCover)}
	{@render cardShell(snippetContacts)}
	{@render cardShell(snippetDeploy)}
	{@render cardShell(snippetRollback)}
	{@render cardShell(snippetIncidents)}
	{@render cardShell(snippetIssues)}
	{@render cardShell(snippetMaintenance)}
</div>

{#snippet snippetCover()}
	<div style:background={c.deepNavy} style:padding="48px 60px">
		<div
			style:font-size="10px"
			style:color={c.cyan}
			style:text-transform="uppercase"
			style:letter-spacing="3px"
			style:margin-bottom="16px"
		>
			Operations · {aiFlowBrand}
		</div>
		<h1 style:font-size="36px" style:font-weight="700" style:color={c.white} style:margin="0 0 12px 0">Runbook</h1>
		<div style:font-size="18px" style:color={c.lightSlate} style:margin-bottom="32px">{runbook.agent}</div>
		<div style:display="flex" style:gap="32px" style:font-size="12px" style:color={c.lightSlate}>
			<span>{runbook.agentId}</span>
			<span>v{runbook.version}</span>
			<span>{runbook.date}</span>
			<span>{runbook.client}</span>
		</div>
	</div>
	<div style:padding="24px 60px">
		<p style:font-size="13px" style:color={c.deepNavy} style:line-height="1.6">{runbook.overview.description}</p>
		<div style:display="flex" style:gap="16px" style:margin-top="16px">
			<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px">
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
					Environment
				</div>
				<div style:font-size="12px" style:color={c.deepNavy}>{runbook.overview.environment}</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px" style:flex="1">
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
					Critical Systems
				</div>
				<div style:font-size="12px" style:color={c.deepNavy}>{runbook.overview.criticalSystems.join(' • ')}</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet snippetContacts()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Support Contacts', c.cyan)}
		<table style:width="100%" style:border-collapse="collapse" style:font-size="11px" style:margin-bottom="16px">
			<thead>
				<tr>
					{#each ['Role', 'Team', 'Contact', 'Hours'] as h (h)}
						<th
							style:text-align="left"
							style:padding="8px 10px"
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
				{#each runbook.contacts.oncall as row (row.contact)}
					<tr>
						<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="500" style:color={c.deepNavy}>
							{row.role}
						</td>
						<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>{row.team}</td>
						<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.cyan}>{row.contact}</td>
						<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>{row.hours}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px" style:font-size="12px">
			<strong style:color={c.deepNavy}>Escalation Path:</strong>
			<span style:color={c.slate}>{runbook.contacts.escalation}</span>
		</div>

		{@render sectionTitle('Health Checks', c.purple)}
		<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
			<thead>
				<tr>
					{#each ['Check', 'Endpoint/Location', 'Expected', 'Frequency'] as h (h)}
						<th
							style:text-align="left"
							style:padding="8px 10px"
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
				{#each runbook.healthChecks as hc (hc.check)}
					<tr>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="500" style:color={c.deepNavy}>
							{hc.check}
						</td>
						<td
							style:padding="8px 10px"
							style:border-bottom="1px solid {c.lightSlate}22"
							style:color={c.slate}
							style:font-family="'JetBrains Mono', monospace"
							style:font-size="9px"
						>
							{hc.endpoint}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.green}>
							{hc.expected}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
							{hc.frequency}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/snippet}

{#snippet snippetDeploy()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Deployment Procedure', c.green)}
		<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="20px">
			<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
				Prerequisites
			</div>
			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="8px">
				{#each runbook.deployment.prerequisites as p (p)}
					<div style:display="flex" style:align-items="center" style:gap="8px">
						<div
							style:width="16px"
							style:height="16px"
							style:border-radius="3px"
							style:border="2px solid {c.green}"
							style:flex-shrink="0"
						></div>
						<span style:font-size="11px" style:color={c.deepNavy}>{p}</span>
					</div>
				{/each}
			</div>
		</div>
		<div style:margin-bottom="20px">
			{#each runbook.deployment.steps as step (step.step)}
				<div style:display="flex" style:gap="16px" style:margin-bottom="12px">
					<div
						style:width="28px"
						style:height="28px"
						style:border-radius="50%"
						style:background-color={c.green}
						style:display="flex"
						style:align-items="center"
						style:justify-content="center"
						style:color={c.white}
						style:font-size="12px"
						style:font-weight="600"
						style:flex-shrink="0"
					>
						{step.step}
					</div>
					<div style:flex="1">
						<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{step.action}</div>
						<div style:font-size="11px" style:color={c.slate}>{step.detail}</div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-top="2px">Owner: {step.role}</div>
					</div>
				</div>
			{/each}
		</div>
		<div style:display="flex" style:gap="16px">
			<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px">
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
					Estimated Time
				</div>
				<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>
					{runbook.deployment.estimatedTime}
				</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px">
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
					Rollback Window
				</div>
				<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>
					{runbook.deployment.rollbackWindow}
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet snippetRollback()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Rollback Procedure', c.orange)}
		<div
			style:background-color="{c.orange}10"
			style:border-radius="8px"
			style:padding="16px"
			style:margin-bottom="20px"
			style:border-left="4px solid {c.orange}"
		>
			<div
				style:font-size="10px"
				style:color={c.orange}
				style:text-transform="uppercase"
				style:margin-bottom="10px"
				style:font-weight="600"
			>
				Rollback Triggers
			</div>
			{#each runbook.rollback.triggers as t (t)}
				<div style:display="flex" style:gap="8px" style:margin-bottom="6px">
					<span style:color={c.orange}>•</span>
					<span style:font-size="11px" style:color={c.deepNavy}>{t}</span>
				</div>
			{/each}
		</div>
		<div style:margin-bottom="20px">
			{#each runbook.rollback.steps as step (step.step)}
				<div style:display="flex" style:gap="16px" style:margin-bottom="12px">
					<div
						style:width="28px"
						style:height="28px"
						style:border-radius="50%"
						style:background-color={c.orange}
						style:display="flex"
						style:align-items="center"
						style:justify-content="center"
						style:color={c.white}
						style:font-size="12px"
						style:font-weight="600"
						style:flex-shrink="0"
					>
						{step.step}
					</div>
					<div style:flex="1">
						<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{step.action}</div>
						<div style:font-size="11px" style:color={c.slate}>{step.detail}</div>
					</div>
				</div>
			{/each}
		</div>
		<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px 16px" style:display="inline-block">
			<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
				Estimated Time
			</div>
			<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{runbook.rollback.estimatedTime}</div>
		</div>
	</div>
{/snippet}

{#snippet snippetIncidents()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Incident Severity Levels', c.red)}
		<table style:width="100%" style:border-collapse="collapse" style:font-size="10px" style:margin-bottom="24px">
			<thead>
				<tr>
					{#each ['Level', 'Name', 'Definition', 'Response', 'Resolution', 'Notification'] as h (h)}
						<th
							style:text-align="left"
							style:padding="8px 10px"
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
				{#each runbook.incidents.severity as s (s.level)}
					<tr>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22">
							<span
								style:padding="2px 8px"
								style:border-radius="3px"
								style:font-size="9px"
								style:font-weight="700"
								style:background-color={severityBadge(s.level).bg}
								style:color={severityBadge(s.level).color}
							>
								{s.level}
							</span>
						</td>
						<td
							style:padding="8px 10px"
							style:border-bottom="1px solid {c.lightSlate}22"
							style:font-weight="500"
							style:color={c.deepNavy}
						>
							{s.name}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
							{s.definition}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
							{s.response}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
							{s.resolution}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate} style:font-size="9px">
							{s.notify}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		{@render sectionTitle('Incident Response Process', c.pink)}
		<div style:display="flex" style:gap="12px">
			{#each runbook.incidents.responseProcess as phase, i (phase.phase)}
				<div
					style:flex="1"
					style:background-color={c.offWhite}
					style:border-radius="8px"
					style:padding="14px"
					style:border-top="3px solid {phaseColors[i] ?? c.cyan}"
				>
					<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="10px">
						{phase.phase}
					</div>
					{#each phase.actions as a (a)}
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="4px" style:display="flex" style:gap="6px">
							<span style:color={phaseColors[i] ?? c.cyan}>•</span>
							{a}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet snippetIssues()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Common Issues & Resolution', c.purple)}
		{#each runbook.commonIssues as issue (issue.issue)}
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px" style:margin-bottom="16px">
				<div
					style:display="flex"
					style:justify-content="space-between"
					style:align-items="flex-start"
					style:margin-bottom="12px"
				>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{issue.issue}</div>
					<span
						style:font-size="10px"
						style:color={c.slate}
						style:background-color={c.white}
						style:padding="2px 8px"
						style:border-radius="3px"
					>
						{issue.severity}
					</span>
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="16px">
					<div>
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
							Symptoms
						</div>
						{#each issue.symptoms as s, j (j)}
							<div style:font-size="10px" style:color={c.slate} style:margin-bottom="3px">• {s}</div>
						{/each}
					</div>
					<div>
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
							Diagnosis
						</div>
						{#each issue.diagnosis as d, j (j)}
							<div style:font-size="10px" style:color={c.slate} style:margin-bottom="3px">{j + 1}. {d}</div>
						{/each}
					</div>
					<div>
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
							Resolution
						</div>
						{#each issue.resolution as r, j (j)}
							<div style:font-size="10px" style:color={c.deepNavy} style:margin-bottom="3px">• {r}</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet snippetMaintenance()}
	<div style:padding="24px 36px 36px">
		{@render sectionTitle('Scheduled Maintenance', c.cyan)}
		<table style:width="100%" style:border-collapse="collapse" style:font-size="10px" style:margin-bottom="24px">
			<thead>
				<tr>
					{#each ['Task', 'Frequency', 'Owner', 'Duration'] as h (h)}
						<th
							style:text-align="left"
							style:padding="8px 10px"
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
				{#each runbook.maintenance.scheduled as m (m.task)}
					<tr>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
							{m.task}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
							{m.frequency}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
							{m.owner}
						</td>
						<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
							{m.duration}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		{@render sectionTitle('Disaster Recovery', c.pink)}
		<div style:display="grid" style:grid-template-columns="1fr 2fr" style:gap="20px">
			<div>
				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="12px" style:margin-bottom="16px">
					<div style:background-color={c.deepNavy} style:border-radius="6px" style:padding="16px" style:text-align="center">
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
							RPO
						</div>
						<div style:font-size="18px" style:font-weight="700" style:color={c.cyan}>{runbook.disasterRecovery.rpo}</div>
					</div>
					<div style:background-color={c.deepNavy} style:border-radius="6px" style:padding="16px" style:text-align="center">
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
							RTO
						</div>
						<div style:font-size="18px" style:font-weight="700" style:color={c.pink}>{runbook.disasterRecovery.rto}</div>
					</div>
				</div>
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Backups
					</div>
					{#each runbook.disasterRecovery.backups as b (b.component)}
						<div style:font-size="10px" style:margin-bottom="6px">
							<span style:color={c.deepNavy} style:font-weight="500">{b.component}:</span>
							<span style:color={c.slate}> {b.method} ({b.retention})</span>
						</div>
					{/each}
				</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="16px">
				<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
					Recovery Procedure
				</div>
				{#each runbook.disasterRecovery.recoveryProcedure as step, i (i)}
					<div style:display="flex" style:gap="10px" style:margin-bottom="8px">
						<div
							style:width="20px"
							style:height="20px"
							style:border-radius="50%"
							style:background-color={c.pink}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="10px"
							style:font-weight="600"
							style:flex-shrink="0"
						>
							{i + 1}
						</div>
						<span style:font-size="11px" style:color={c.deepNavy} style:padding-top="2px">{step}</span>
					</div>
				{/each}
			</div>
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
			<span>Runbook Template</span>
			<span>{aiFlowBrand}</span>
		</div>
	</div>
{/snippet}
