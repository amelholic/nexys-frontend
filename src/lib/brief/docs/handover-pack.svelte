<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { handover } from '$lib/brief/docs/data/handover-data';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;
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

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<!-- Cover -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		style:min-height="500px"
		style:display="flex"
		style:flex-direction="column"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:flex="1" style:display="flex" style:flex-direction="column" style:justify-content="center" style:padding="60px">
			<div style:font-size="10px" style:color={c.cyan} style:text-transform="uppercase" style:letter-spacing="3px" style:margin-bottom="16px">
				Handover Pack · {aiFlowBrand}
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 12px 0" style:line-height="1.2">
				{handover.project}
			</h1>
			<div style:font-size="18px" style:color={c.slate} style:margin-bottom="40px">{handover.client}</div>
			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="24px" style:max-width="400px">
				{#each [{ label: 'Agent', value: handover.agentName }, { label: 'Version', value: handover.version }, { label: 'Go-Live Date', value: handover.goLiveDate }, { label: 'Prepared', value: handover.date }] as item (item.label)}
					<div>
						<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
							{item.label}
						</div>
						<div style:font-size="14px" style:color={c.deepNavy}>{item.value}</div>
					</div>
				{/each}
			</div>
		</div>
		<div
			style:padding="24px 60px"
			style:border-top="1px solid {c.lightSlate}33"
			style:display="flex"
			style:justify-content="space-between"
			style:align-items="center"
		>
			<div style:font-size="11px" style:color={c.lightSlate}>Confidential</div>
			<div style:font-size="11px" style:color={c.lightSlate}>Prepared by {handover.preparedBy}</div>
		</div>
	</div>

	<!-- Page 1 -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="24px 36px 36px">
			{@render sectionTitle('Executive Summary', c.cyan)}
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px" style:margin-bottom="24px">
				<p style:font-size="13px" style:color={c.deepNavy} style:line-height="1.7" style:margin="0">{handover.executiveSummary}</p>
			</div>

			{@render sectionTitle('What Was Built', c.purple)}
			<p style:font-size="12px" style:color={c.slate} style:margin-bottom="16px">{handover.whatWasBuilt.description}</p>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px" style:margin-bottom="24px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.green} style:text-transform="uppercase" style:margin-bottom="10px" style:font-weight="600">
						Included
					</div>
					{#each handover.whatWasBuilt.capabilities as cap (cap)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="8px">
							<span style:color={c.green}>✓</span>
							<span style:font-size="11px" style:color={c.deepNavy}>{cap}</span>
						</div>
					{/each}
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.orange} style:text-transform="uppercase" style:margin-bottom="10px" style:font-weight="600">
						Not Included (Future)
					</div>
					{#each handover.whatWasBuilt.notIncluded as item (item)}
						<div style:display="flex" style:gap="8px" style:margin-bottom="8px">
							<span style:color={c.orange}>○</span>
							<span style:font-size="11px" style:color={c.deepNavy}>{item}</span>
						</div>
					{/each}
				</div>
			</div>

			{@render sectionTitle('Architecture Overview', c.pink)}
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Components
					</div>
					<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
						<thead>
							<tr>
								{#each ['Component', 'Type', 'Location'] as h (h)}
									<th
										style:text-align="left"
										style:padding="6px 8px"
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
							{#each handover.architecture.components as comp (comp.name)}
								<tr>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy} style:font-weight="500">
										{comp.name}
									</td>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
										{comp.type}
									</td>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate} style:font-size="9px">
										{comp.location}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Integrations
					</div>
					<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
						<thead>
							<tr>
								{#each ['System', 'Direction', 'Data'] as h (h)}
									<th
										style:text-align="left"
										style:padding="6px 8px"
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
							{#each handover.architecture.integrations as int (int.system)}
								<tr>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy} style:font-weight="500">
										{int.system}
									</td>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
										{int.direction}
									</td>
									<td style:padding="6px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate} style:font-size="9px">
										{int.data}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Page 2 -->
	<div
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
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>Handover Pack</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 2</span>
			</div>

			{@render sectionTitle('How It Works', c.cyan)}
			<div style:margin-bottom="24px">
				{#each handover.howItWorks.workflow as step (step.step)}
					<div style:display="flex" style:gap="16px" style:margin-bottom="12px">
						<div
							style:width="32px"
							style:height="32px"
							style:border-radius="50%"
							style:background-color={c.cyan}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="14px"
							style:font-weight="700"
							style:flex-shrink="0"
						>
							{step.step}
						</div>
						<div style:flex="1" style:padding-top="6px">
							<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{step.name}</div>
							<div style:font-size="11px" style:color={c.slate}>{step.description}</div>
						</div>
					</div>
				{/each}
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="24px">
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Processing Time
					</div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{handover.howItWorks.processingTime}</div>
				</div>
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Operating Hours
					</div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{handover.howItWorks.operatingHours}</div>
				</div>
			</div>

			{@render sectionTitle('Access Details', c.purple)}
			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
					Dashboards
				</div>
				{#each handover.accessDetails.dashboards as dash (dash.name)}
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px" style:margin-bottom="8px">
						<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
							<div>
								<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy}>{dash.name}</div>
								<div style:font-size="10px" style:color={c.slate}>{dash.purpose}</div>
							</div>
							<div style:font-size="10px" style:color={c.cyan} style:font-family="'JetBrains Mono', monospace">{dash.url}</div>
						</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Support Model', c.pink)}
			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px" style:margin-bottom="16px">
				<thead>
					<tr>
						{#each ['Level', 'Description', 'Owner', 'Hours'] as h (h)}
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
					{#each handover.supportModel.levels as level (level.level)}
						<tr>
							<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="600" style:color={c.purple}>
								{level.level}
							</td>
							<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								{level.description}
							</td>
							<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>{level.owner}</td>
							<td style:padding="10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>{level.hours}</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Support Contacts
					</div>
					{#each handover.supportModel.contacts as contact (contact.role)}
						<div style:margin-bottom="10px">
							<div style:font-size="11px" style:font-weight="600" style:color={c.deepNavy}>{contact.role}</div>
							<div style:font-size="10px" style:color={c.slate}>{contact.email} | {contact.phone}</div>
							<div style:font-size="9px" style:color={c.lightSlate}>{contact.hours}</div>
						</div>
					{/each}
				</div>
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">SLA</div>
					{#each Object.entries(handover.supportModel.sla) as [priority, sla] (priority)}
						<div style:margin-bottom="10px">
							<div style:display="flex" style:justify-content="space-between">
								<span style:font-size="11px" style:font-weight="600" style:color={c.deepNavy}>{priority.toUpperCase()}</span>
								<span style:font-size="10px" style:color={c.slate}>
									Response: {sla.response} | Resolve: {sla.resolution}
								</span>
							</div>
							<div style:font-size="9px" style:color={c.lightSlate}>{sla.definition}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Page 3 -->
	<div
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
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>Handover Pack</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 3</span>
			</div>

			{@render sectionTitle('Common Issues & Resolution', c.orange)}
			{#each handover.commonIssues as issue (issue.issue)}
				<div
					style:background-color={c.offWhite}
					style:border-radius="8px"
					style:padding="16px"
					style:margin-bottom="12px"
					style:border-left="4px solid {c.orange}"
				>
					<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="8px">
						{issue.issue}
					</div>
					<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="12px" style:font-size="11px">
						<div>
							<div style:color={c.lightSlate} style:font-size="9px" style:text-transform="uppercase" style:margin-bottom="2px">
								Symptoms
							</div>
							<div style:color={c.slate}>{issue.symptoms}</div>
						</div>
						<div>
							<div style:color={c.lightSlate} style:font-size="9px" style:text-transform="uppercase" style:margin-bottom="2px">
								Diagnosis
							</div>
							<div style:color={c.slate}>{issue.diagnosis}</div>
						</div>
						<div>
							<div style:color={c.lightSlate} style:font-size="9px" style:text-transform="uppercase" style:margin-bottom="2px">
								Resolution
							</div>
							<div style:color={c.deepNavy}>{issue.resolution}</div>
						</div>
					</div>
				</div>
			{/each}

			{@render sectionTitle('Quick Runbook', c.purple)}
			<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="16px">
				{#each Object.entries(handover.runbook) as [action, steps] (action)}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="14px">
						<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="10px" style:text-transform="capitalize">
							{action}
						</div>
						<ol style:margin="0" style:padding-left="16px">
							{#each steps as step (step)}
								<li style:font-size="10px" style:color={c.slate} style:margin-bottom="4px" style:line-height="1.4">{step}</li>
							{/each}
						</ol>
					</div>
				{/each}
			</div>

			{@render sectionTitle('Documentation Index', c.cyan)}
			<table style:width="100%" style:border-collapse="collapse" style:font-size="10px" style:margin-bottom="20px">
				<thead>
					<tr>
						{#each ['Document', 'Location', 'Description'] as h (h)}
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
					{#each handover.documentation as doc (doc.name)}
						<tr>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="500" style:color={c.deepNavy}>
								{doc.name}
							</td>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.cyan} style:font-size="9px">
								{doc.location}
							</td>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{doc.description}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle('Knowledge Transfer Sessions', c.pink)}
			<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
				<thead>
					<tr>
						{#each ['Session', 'Date', 'Attendees', 'Recording'] as h (h)}
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
					{#each handover.knowledgeTransfer as session (session.session)}
						<tr>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="500" style:color={c.deepNavy}>
								{session.session}
							</td>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>{session.date}</td>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
								{session.attendees}
							</td>
							<td style:padding="8px 10px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.cyan} style:font-size="9px">
								{session.recording}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div
				style:margin-top="28px"
				style:padding-top="14px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>Handover Pack Template</span>
				<span>{aiFlowBrand}</span>
			</div>
		</div>
	</div>
</div>
