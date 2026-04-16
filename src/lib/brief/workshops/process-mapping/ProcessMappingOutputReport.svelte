<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const execStats = [
		{ label: 'Monthly Volume', value: '[X]', color: c.cyan },
		{ label: 'Avg Cycle Time', value: '[X hrs]', color: c.purple },
		{ label: 'Decision Points', value: '[X]', color: c.pink },
		{ label: 'Exception Rate', value: '[X%]', color: c.orange },
	];

	const nextSteps = [
		{ step: '1', action: 'Review and validate this specification', owner: '[Client]', time: 'This week' },
		{ step: '2', action: 'Technical discovery with IT', owner: 'AI Flow + IT', time: 'Next week' },
		{ step: '3', action: 'Finalise proposal and timeline', owner: 'AI Flow', time: '2 weeks' },
	];

	const exceptionRows = [
		{ ex: '[Exception 1]', cat: 'Data', freq: '[X%]', impact: 'Medium', ai: 'Automate' },
		{ ex: '[Exception 2]', cat: 'Rule', freq: '[X%]', impact: 'High', ai: 'Escalate' },
		{ ex: '[Exception 3]', cat: 'System', freq: '[X%]', impact: 'Low', ai: 'Assist' },
	];

	const metrics = [
		{ metric: 'Auto-process rate', target: '[X%]' },
		{ metric: 'Time savings', target: '[X%]' },
		{ metric: 'Accuracy', target: '[X%]' },
		{ metric: 'Exception rate', target: '[X%]' },
	];
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color="#E2E8F0"
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<!-- Cover -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		style:min-height="450px"
		style:display="flex"
		style:flex-direction="column"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:padding="60px"
		>
			<div
				style:font-size="10px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="16px"
			>
				Process Specification
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 12px 0">[Process Name]</h1>
			<div style:font-size="18px" style:color={c.slate} style:margin-bottom="40px">[Client Name]</div>
			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="20px" style:max-width="350px">
				<div>
					<div style:font-size="10px" style:color={c.lightSlate}>Workshop Date</div>
					<div style:font-size="14px" style:color={c.deepNavy}>[Date]</div>
				</div>
				<div>
					<div style:font-size="10px" style:color={c.lightSlate}>Report Date</div>
					<div style:font-size="14px" style:color={c.deepNavy}>[Date]</div>
				</div>
			</div>
		</div>
		<div
			style:padding="20px 60px"
			style:border-top="1px solid {c.lightSlate}33"
			style:display="flex"
			style:justify-content="space-between"
			style:font-size="11px"
			style:color={c.lightSlate}
		>
			<span>Confidential</span><span>AI Flow</span>
		</div>
	</div>

	<!-- Executive summary -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Executive Summary
				</h3>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px" style:margin-bottom="24px">
				<p style:font-size="14px" style:color={c.deepNavy} style:line-height="1.7" style:margin="0">
					[2-3 sentences summarising the process, key findings, automation potential, and recommendation]
				</p>
			</div>
			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
				{#each execStats as stat}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:text-align="center"
						style:border-top="3px solid {stat.color}"
					>
						<div style:font-size="22px" style:font-weight="700" style:color={stat.color}>{stat.value}</div>
						<div style:font-size="10px" style:color={c.slate}>{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Process overview -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.purple}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					1. Process Overview
				</h3>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="20px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="6px">Trigger</div>
					<div style:font-size="13px" style:color={c.deepNavy}>[What initiates this process]</div>
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="6px">Output</div>
					<div style:font-size="13px" style:color={c.deepNavy}>[What the process produces]</div>
				</div>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
				<div>
					<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="8px">
						Roles Involved
					</div>
					<div style:display="flex" style:gap="8px" style:flex-wrap="wrap">
						{#each ['[Role 1]', '[Role 2]', '[Role 3]'] as r}
							<span
								style:padding="4px 10px"
								style:background-color="{c.purple}15"
								style:border-radius="4px"
								style:font-size="11px"
								style:color={c.deepNavy}
							>
								{r}
							</span>
						{/each}
					</div>
				</div>
				<div>
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="8px">
						Systems Involved
					</div>
					<div style:display="flex" style:gap="8px" style:flex-wrap="wrap">
						{#each ['[System 1]', '[System 2]'] as s}
							<span
								style:padding="4px 10px"
								style:background-color="{c.cyan}15"
								style:border-radius="4px"
								style:font-size="11px"
								style:color={c.deepNavy}
							>
								{s}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Process map -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					2. Current State Process Map
				</h3>
			</div>
			<div
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="24px"
				style:margin-bottom="20px"
				style:text-align="center"
				style:min-height="150px"
				style:display="flex"
				style:align-items="center"
				style:justify-content="center"
			>
				<div style:font-size="13px" style:color={c.lightSlate}>[Insert process flow diagram]</div>
			</div>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
				<thead>
					<tr>
						{#each ['#', 'Step', 'Actor', 'System', 'Time'] as h}
							<th
								style:text-align="left"
								style:padding="10px 8px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="10px"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each [1, 2, 3, 4, 5] as n}
						<tr>
							<td
								style:padding="10px 8px"
								style:border-bottom="1px solid {c.lightSlate}22"
								style:color={c.lightSlate}
								style:width="30px"
							>
								{n}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								[Step {n} description]
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								[Role]
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								[System]
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.purple}>
								[X min]
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Decision rules -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.pink}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					3. Decision Rules
				</h3>
			</div>
			{#each [1, 2] as n}
				<div
					style:background-color={c.offWhite}
					style:border-radius="8px"
					style:padding="20px"
					style:margin-bottom="16px"
					style:border-left="4px solid {c.pink}"
				>
					<div style:display="flex" style:justify-content="space-between" style:margin-bottom="12px">
						<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>Decision {n}: [Name]</div>
						<span
							style:font-size="10px"
							style:padding="2px 8px"
							style:background-color="{c.green}20"
							style:color={c.green}
							style:border-radius="3px"
						>
							[X%] coverage
						</span>
					</div>
					<div
						style:font-family="monospace"
						style:font-size="11px"
						style:background-color={c.deepNavy}
						style:color={c.lightSlate}
						style:padding="14px"
						style:border-radius="6px"
						style:line-height="1.7"
					>
						<span style:color={c.pink}>IF</span> [condition 1] <span style:color={c.cyan}>AND</span> [condition 2]<br />
						<span style:color={c.green}>THEN</span> [action A]<br />
						<span style:color={c.orange}>ELSE</span> [escalate]
					</div>
					<div style:margin-top="10px" style:font-size="11px" style:color={c.slate}>
						<strong>Data required:</strong> [List fields needed]
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Exceptions -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.orange}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					4. Exception Catalogue
				</h3>
			</div>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
				<thead>
					<tr>
						{#each ['Exception', 'Category', 'Freq', 'Impact', 'AI Handling'] as h}
							<th
								style:text-align="left"
								style:padding="10px 8px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="10px"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each exceptionRows as row}
						<tr>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								{row.ex}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:padding="2px 6px"
									style:border-radius="3px"
									style:font-size="9px"
									style:background-color="{c.orange}15"
									style:color={c.orange}
								>
									{row.cat}
								</span>
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{row.freq}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:padding="2px 6px"
									style:border-radius="3px"
									style:font-size="9px"
									style:background-color={row.impact === 'High'
										? `${c.pink}15`
										: row.impact === 'Medium'
											? `${c.orange}15`
											: `${c.cyan}15`}
									style:color={row.impact === 'High'
										? c.pink
										: row.impact === 'Medium'
											? c.orange
											: c.cyan}
								>
									{row.impact}
								</span>
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:padding="2px 6px"
									style:border-radius="3px"
									style:font-size="9px"
									style:background-color={row.ai === 'Automate'
										? `${c.green}15`
										: row.ai === 'Assist'
											? `${c.cyan}15`
											: `${c.pink}15`}
									style:color={row.ai === 'Automate' ? c.green : row.ai === 'Assist' ? c.cyan : c.pink}
								>
									{row.ai}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Agent spec -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.green}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					5. Draft Agent Specification
				</h3>
			</div>
			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="24px" style:margin-bottom="20px">
				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
					<div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Agent Name</div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.white}>[Agent Name]</div>
					</div>
					<div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Automation Type</div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.green}>[Full / Assisted / Triage]</div>
					</div>
				</div>
				<div style:margin-top="16px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Primary Function</div>
					<div style:font-size="14px" style:color={c.white}>[What the agent does in one sentence]</div>
				</div>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="20px">
				<div style:background-color="{c.cyan}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">Inputs</div>
					<ul style:font-size="12px" style:color={c.deepNavy} style:margin="0" style:padding-left="16px">
						<li>[Input 1]</li>
						<li>[Input 2]</li>
					</ul>
				</div>
				<div style:background-color="{c.pink}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.pink} style:margin-bottom="10px">Outputs</div>
					<ul style:font-size="12px" style:color={c.deepNavy} style:margin="0" style:padding-left="16px">
						<li>[Output 1]</li>
						<li>[Output 2]</li>
					</ul>
				</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="20px">
				<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="10px">
					Human Touchpoints
				</div>
				<div style:font-size="12px" style:color={c.deepNavy}>
					[Describe when humans are involved: approval thresholds, escalation triggers, exception handling]
				</div>
			</div>
			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
				{#each metrics as m}
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px" style:text-align="center">
						<div style:font-size="18px" style:font-weight="700" style:color={c.green}>{m.target}</div>
						<div style:font-size="10px" style:color={c.slate}>{m.metric}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Recommendations -->
	<div
		style:max-width="850px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					6. Recommendations & Next Steps
				</h3>
			</div>
			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="20px" style:margin-bottom="20px">
				<div style:font-size="11px" style:color={c.cyan} style:margin-bottom="8px">RECOMMENDATION</div>
				<div style:font-size="16px" style:color={c.white} style:line-height="1.6">
					[Primary recommendation: proceed to build, conduct technical discovery first, or address prerequisites]
				</div>
			</div>
			<div style:font-size="11px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="12px">Next Steps</div>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
				<thead>
					<tr>
						{#each ['Step', 'Action', 'Owner', 'Timeline'] as h}
							<th
								style:text-align="left"
								style:padding="10px 8px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="10px"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each nextSteps as row}
						<tr>
							<td
								style:padding="10px 8px"
								style:border-bottom="1px solid {c.lightSlate}22"
								style:color={c.purple}
								style:font-weight="600"
							>
								{row.step}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								{row.action}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{row.owner}
							</td>
							<td style:padding="10px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{row.time}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div
				style:margin-top="32px"
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="20px"
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
			>
				<div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>Questions?</div>
					<div style:font-size="12px" style:color={c.slate}>Ready to discuss next steps</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="14px" style:color={c.cyan} style:font-weight="600">[contact email]</div>
					<div style:font-size="12px" style:color={c.slate}>[website]</div>
				</div>
			</div>

			<div
				style:margin-top="24px"
				style:padding-top="16px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>Process Specification — [Client Name]</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
