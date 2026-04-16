<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const agent = {
		name: 'Invoice Processing Agent',
		id: 'AGT-001',
		version: '1.0',
		status: 'Draft',
		date: '2026-02-19',
		owner: 'Client Name',
		goal: 'Automatically process incoming invoices by extracting key data, validating against purchase orders, and routing for approval or exception handling.',
		businessOutcome: 'Reduce invoice processing time by 70% and eliminate manual data entry errors.',
		metrics: [
			{ name: 'Processing time', target: '< 2 min', baseline: '15 min' },
			{ name: 'Accuracy rate', target: '> 98%', baseline: '92%' },
			{ name: 'Auto-approval rate', target: '> 70%', baseline: '0%' },
		],
		trigger: {
			type: 'System-led',
			description: 'New email in invoices@company.com or file uploaded to /invoices folder',
		},
		oversight: {
			level: 'Human-on-the-loop',
			description: 'Agent processes automatically. Human reviews exceptions and weekly summary.',
		},
		inputs: [
			{ name: 'Invoice document', type: 'PDF / Image', source: 'Email / Upload' },
			{ name: 'Purchase orders', type: 'Structured', source: 'ERP (SAP)' },
			{ name: 'Vendor master', type: 'Structured', source: 'ERP (SAP)' },
		],
		outputs: [
			{ name: 'Extracted data', type: 'JSON', destination: 'ERP system' },
			{ name: 'Approval request', type: 'Workflow', destination: 'Approval system' },
			{ name: 'Exception alert', type: 'Notification', destination: 'Finance team' },
		],
		tools: [
			'Document OCR — Extract text from PDF/images',
			'ERP Connector — Query SAP for PO and vendor data',
			'Email Reader — Monitor inbox, extract attachments',
			'Approval Router — Trigger workflows based on rules',
		],
		fallbacks: [
			{ condition: 'Cannot extract data', action: 'Route to manual queue' },
			{ condition: 'No matching PO', action: 'Flag exception, notify procurement' },
			{ condition: 'Amount exceeds PO by >10%', action: 'Hold for human review' },
			{ condition: 'System unavailable', action: 'Queue for retry, alert after 3 failures' },
		],
		constraints: [
			'Must complete within 5 minutes',
			'Cannot approve invoices > $50,000 without human',
			'Must log all actions for audit',
			'Cannot modify vendor master data',
		],
		dataAccess: [
			{ system: 'SAP ERP', level: 'Read PO/Vendor, Write Invoice' },
			{ system: 'Microsoft 365', level: 'Read invoices inbox' },
			{ system: 'SharePoint', level: 'Read/Write invoices folder' },
		],
		compliance: 'SOX compliant. Full audit trail. 7-year retention.',
		escalation: 'Finance Manager → Finance Director → CFO',
	};

	const statusStyles: Record<string, { bg: string; color: string }> = {
		Draft: { bg: `${c.lightSlate}30`, color: c.slate },
		'In Review': { bg: `${c.cyan}20`, color: c.cyan },
		Approved: { bg: `${c.purple}20`, color: c.purple },
		Production: { bg: `${c.green}20`, color: c.green },
	};

	const oversightLevels = ['Agent-assisted', 'Human-in-the-loop', 'Human-on-the-loop', 'Autonomous'];
</script>

{#snippet sectionTitle(color: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; margin-top: 24px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 10px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

{#snippet statusBadge(status: string)}
	{@const s = statusStyles[status] ?? statusStyles['Draft']}
	<span
		style="padding: 3px 10px; border-radius: 3px; font-size: 9px; font-weight: 600; background-color: {s.bg}; color: {s.color}; text-transform: uppercase; letter-spacing: 0.5px;"
	>
		{status}
	</span>
{/snippet}

{#snippet oversightScale(level: string)}
	{@const idx = oversightLevels.indexOf(level)}
	<div style="display: flex; align-items: center; gap: 3px; margin-top: 6px;">
		{#each oversightLevels as _, i}
			<div style="display: flex; align-items: center;">
				<div
					style="width: 8px; height: 8px; border-radius: 50%; background-color: {i <= idx ? c.purple : `${c.lightSlate}40`};"
				></div>
				{#if i < 3}
					<div
						style="width: 16px; height: 2px; background-color: {i < idx ? c.purple : `${c.lightSlate}40`};"
					></div>
				{/if}
			</div>
		{/each}
		<span style="font-size: 9px; color: {c.slate}; margin-left: 6px;">{level}</span>
	</div>
{/snippet}

{#snippet miniTable(headers: string[], rows: string[][])}
	<table style="width: 100%; border-collapse: collapse; font-size: 10px;">
		<thead>
			<tr>
				{#each headers as h}
					<th
						style="text-align: left; padding: 6px 8px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase; letter-spacing: 0.3px;"
					>
						{h}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					{#each row as cell}
						<td style="padding: 6px 8px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};">
							{cell}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="background: {c.deepNavy}; padding: 28px 36px; position: relative;">
			<div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: {gradient};"></div>
			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div
						style="font-size: 9px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
					>
						Agent Design Card
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">{agent.name}</h1>
					<div style="font-size: 11px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;">
						{agent.id} • v{agent.version}
					</div>
				</div>
				<div style="text-align: right;">
					{@render statusBadge(agent.status)}
					<div style="font-size: 10px; color: {c.lightSlate}; margin-top: 10px;">
						{agent.date}<br />{agent.owner}
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Purpose')}
			<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px; margin-bottom: 12px;">
				<div style="margin-bottom: 12px;">
					<div
						style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
					>
						Goal
					</div>
					<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">{agent.goal}</div>
				</div>
			</div>
			<div
				style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px; border-left: 3px solid {c.cyan};"
			>
				<div
					style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
				>
					Business Outcome
				</div>
				<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">{agent.businessOutcome}</div>
			</div>

			{@render sectionTitle(c.purple, 'Success Metrics')}
			{@render miniTable(
				['Metric', 'Target', 'Baseline'],
				agent.metrics.map((m) => [m.name, m.target, m.baseline]),
			)}

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
				<div>
					{@render sectionTitle(c.pink, 'Trigger')}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
						<div style="margin-bottom: 12px;">
							<div
								style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
							>
								Type
							</div>
							<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">{agent.trigger.type}</div>
						</div>
						<div>
							<div
								style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
							>
								Description
							</div>
							<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">
								{agent.trigger.description}
							</div>
						</div>
					</div>
				</div>
				<div>
					{@render sectionTitle(c.orange, 'Human Oversight')}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
						<div style="margin-bottom: 12px;">
							<div
								style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
							>
								Level
							</div>
							{@render oversightScale(agent.oversight.level)}
						</div>
						<div>
							<div
								style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
							>
								Description
							</div>
							<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">
								{agent.oversight.description}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
				<div>
					{@render sectionTitle(c.cyan, 'Inputs')}
					{@render miniTable(
						['Input', 'Type', 'Source'],
						agent.inputs.map((i) => [i.name, i.type, i.source]),
					)}
				</div>
				<div>
					{@render sectionTitle(c.purple, 'Outputs')}
					{@render miniTable(
						['Output', 'Type', 'Destination'],
						agent.outputs.map((o) => [o.name, o.type, o.destination]),
					)}
				</div>
			</div>

			{@render sectionTitle(c.pink, 'Tools')}
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
				{#each agent.tools as tool}
					<div style="font-size: 11px; color: {c.deepNavy}; padding: 10px 12px; background-color: {c.offWhite}; border-radius: 4px;">
						{tool}
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.orange, 'Fallback Behavior')}
			{@render miniTable(
				['Condition', 'Action'],
				agent.fallbacks.map((f) => [f.condition, f.action]),
			)}
			<div style="margin-top: 10px; padding: 10px 14px; background-color: {c.offWhite}; border-radius: 4px; font-size: 11px;">
				<strong style="color: {c.slate};">Escalation:</strong>
				<span style="color: {c.deepNavy};">{agent.escalation}</span>
			</div>

			{@render sectionTitle(c.cyan, 'Constraints')}
			<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
				{#each agent.constraints as item}
					<div style="display: flex; align-items: flex-start; gap: 8px; padding: 5px 0; font-size: 11px; color: {c.deepNavy};">
						<span style="color: {c.pink};">•</span>
						{item}
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'Security & Compliance')}
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
				{@render miniTable(
					['System', 'Access Level'],
					agent.dataAccess.map((d) => [d.system, d.level]),
				)}
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
					<div
						style="font-size: 9px; font-weight: 600; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
					>
						Compliance
					</div>
					<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.5;">{agent.compliance}</div>
				</div>
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Agent Design Card Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
