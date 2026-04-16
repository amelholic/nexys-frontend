<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const architecture = {
		client: 'Client Name',
		project: 'Finance Automation Platform',
		version: '1.0',
		date: '2026-02-19',
		preparedBy: 'AxTech',
		overview:
			'Multi-agent system for end-to-end finance process automation, including invoice processing, expense management, and compliance checking.',
		agents: [
			{
				id: 'orchestrator',
				name: 'Finance Orchestrator',
				type: 'Orchestrator',
				description: 'Routes work to specialist agents, manages workflow state, handles exceptions',
				color: c.purple,
			},
			{
				id: 'invoice',
				name: 'Invoice Agent',
				type: 'Specialist',
				description: 'Extracts invoice data, validates against POs, routes for approval',
				color: c.cyan,
			},
			{
				id: 'expense',
				name: 'Expense Agent',
				type: 'Specialist',
				description: 'Validates expenses against policy, auto-approves compliant items',
				color: c.pink,
			},
			{
				id: 'compliance',
				name: 'Compliance Agent',
				type: 'Specialist',
				description: 'Checks documents against regulatory rules, flags violations',
				color: c.orange,
			},
		],
		integrations: [
			{
				name: 'SAP ERP',
				type: 'ERP',
				protocol: 'REST API',
				direction: 'Bidirectional',
				data: 'POs, Vendors, Invoices',
			},
			{
				name: 'Microsoft 365',
				type: 'Email/Files',
				protocol: 'Graph API',
				direction: 'Read',
				data: 'Emails, Attachments, SharePoint',
			},
			{
				name: 'Concur',
				type: 'Expense',
				protocol: 'REST API',
				direction: 'Bidirectional',
				data: 'Expense reports, Receipts',
			},
			{
				name: 'Approval System',
				type: 'Workflow',
				protocol: 'Webhook',
				direction: 'Write',
				data: 'Approval requests',
			},
			{
				name: 'Slack',
				type: 'Notification',
				protocol: 'Webhook',
				direction: 'Write',
				data: 'Alerts, Summaries',
			},
		],
		dataFlows: [
			{
				from: 'Microsoft 365',
				to: 'Finance Orchestrator',
				data: 'Incoming invoices/expenses',
				trigger: 'New email arrival',
			},
			{
				from: 'Finance Orchestrator',
				to: 'Invoice Agent',
				data: 'Invoice documents',
				trigger: 'Invoice detected',
			},
			{
				from: 'Finance Orchestrator',
				to: 'Expense Agent',
				data: 'Expense reports',
				trigger: 'Expense detected',
			},
			{
				from: 'Invoice Agent',
				to: 'SAP ERP',
				data: 'Validated invoice data',
				trigger: 'Validation complete',
			},
			{
				from: 'Invoice Agent',
				to: 'Compliance Agent',
				data: 'High-value invoices',
				trigger: 'Amount > threshold',
			},
			{
				from: 'Expense Agent',
				to: 'Concur',
				data: 'Approval status',
				trigger: 'Policy check complete',
			},
			{
				from: 'Compliance Agent',
				to: 'Approval System',
				data: 'Compliance flags',
				trigger: 'Violation detected',
			},
			{ from: 'All Agents', to: 'Slack', data: 'Exception alerts', trigger: 'Exception raised' },
		],
		infrastructure: {
			cloud: 'AWS (ap-southeast-2)',
			compute: 'Lambda + ECS Fargate',
			storage: 'S3 (documents), DynamoDB (state)',
			vectorDb: 'OpenSearch (knowledge base)',
			gateway: 'API Gateway + Model Gateway',
			monitoring: 'CloudWatch + custom dashboards',
			security: 'IAM, Secrets Manager, VPC',
		},
		platform: [
			{
				component: 'Model Gateway',
				purpose: 'Unified LLM access, fallback, cost tracking',
				tech: 'Custom on API Gateway',
			},
			{
				component: 'Agent Runtime',
				purpose: 'Agent execution, state management',
				tech: 'AWS Strands SDK',
			},
			{
				component: 'Memory Store',
				purpose: 'Short-term context, long-term knowledge',
				tech: 'DynamoDB + OpenSearch',
			},
			{
				component: 'Tool Registry',
				purpose: 'MCP servers, tool definitions',
				tech: 'S3 + Lambda',
			},
			{
				component: 'Guardrails',
				purpose: 'Input/output filtering, PII detection',
				tech: 'Custom middleware',
			},
			{
				component: 'Observability',
				purpose: 'Tracing, logging, metrics',
				tech: 'CloudWatch + X-Ray',
			},
		],
		security: {
			authentication: 'IAM roles per agent, service accounts for integrations',
			authorization: 'Least privilege, scoped permissions per tool',
			dataProtection: 'AES-256 at rest, TLS 1.3 in transit',
			auditLogging: 'All agent actions logged to CloudWatch, 90-day retention',
			secrets: 'AWS Secrets Manager, rotated quarterly',
			network: 'Private VPC, no public endpoints except API Gateway',
		},
		scalability: {
			agents: 'Stateless, horizontally scalable via ECS',
			throughput: 'Target: 1000 documents/hour',
			latency: 'Target: <30s per document',
			availability: '99.9% uptime SLA',
		},
	};

	function labelize(key: string) {
		return key.replace(/([A-Z])/g, ' $1').trim();
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

{#snippet agentNode(agent: (typeof architecture.agents)[0])}
	<div
		style="background-color: {c.white}; border: 2px solid {agent.color}; border-radius: 8px; padding: 14px; width: 180px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);"
	>
		<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
			<div style="width: 10px; height: 10px; border-radius: 50%; background-color: {agent.color};"></div>
			<span style="font-size: 10px; color: {agent.color}; font-weight: 600; text-transform: uppercase;"
				>{agent.type}</span
			>
		</div>
		<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 6px;">{agent.name}</div>
		<div style="font-size: 10px; color: {c.slate}; line-height: 1.4;">{agent.description}</div>
	</div>
{/snippet}

{#snippet miniTable(headers: string[], rows: string[][], compact = false)}
	<table style="width: 100%; border-collapse: collapse; font-size: {compact ? '10px' : '11px'};">
		<thead>
			<tr>
				{#each headers as h}
					<th
						style="text-align: left; padding: {compact ? '6px 8px' : '8px 10px'}; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase; letter-spacing: 0.3px;"
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
						<td
							style="padding: {compact ? '6px 8px' : '8px 10px'}; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; vertical-align: top;"
						>
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
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="background: {c.deepNavy}; padding: 28px 36px; position: relative;">
			<div
				style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: {gradient};"
			></div>
			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div
						style="font-size: 9px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
					>
						Architecture Blueprint
					</div>
					<h1 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">
						{architecture.project}
					</h1>
					<div style="font-size: 11px; color: {c.lightSlate};">{architecture.client}</div>
				</div>
				<div style="text-align: right; font-size: 10px; color: {c.lightSlate};">
					v{architecture.version}<br />
					{architecture.date}<br />
					{architecture.preparedBy}
				</div>
			</div>
		</div>

		<div style="padding: 20px 36px 36px;">
			{@render sectionTitle(c.cyan, 'Overview')}
			<div
				style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px; font-size: 13px; color: {c.deepNavy}; line-height: 1.6;"
			>
				{architecture.overview}
			</div>

			{@render sectionTitle(c.purple, 'Agent Topology')}
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
				<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
					{@render agentNode(architecture.agents[0])}
					<div style="display: flex; align-items: center; gap: 8px;">
						{#each [c.cyan, c.pink, c.orange] as lineColor}
							<div style="width: 60px; height: 2px; background-color: {lineColor};"></div>
						{/each}
					</div>
					<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
						{#each architecture.agents.slice(1) as agent}
							{@render agentNode(agent)}
						{/each}
					</div>
				</div>
			</div>

			{@render sectionTitle(c.pink, 'External Integrations')}
			{@render miniTable(
				['System', 'Type', 'Protocol', 'Direction', 'Data'],
				architecture.integrations.map((i) => [i.name, i.type, i.protocol, i.direction, i.data]),
			)}

			{@render sectionTitle(c.orange, 'Data Flows')}
			{@render miniTable(
				['From', 'To', 'Data', 'Trigger'],
				architecture.dataFlows.map((f) => [f.from, f.to, f.data, f.trigger]),
				true,
			)}
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
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{architecture.project}</span>
				<span style="font-size: 10px; color: {c.lightSlate};">{architecture.client} • Page 2</span>
			</div>

			{@render sectionTitle(c.cyan, 'Infrastructure')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each Object.entries(architecture.infrastructure) as [key, value]}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px 14px;">
						<div
							style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
						>
							{labelize(key)}
						</div>
						<div style="font-size: 12px; color: {c.deepNavy};">{value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.purple, 'Platform Components')}
			{@render miniTable(
				['Component', 'Purpose', 'Technology'],
				architecture.platform.map((p) => [p.component, p.purpose, p.tech]),
			)}

			{@render sectionTitle(c.pink, 'Security Architecture')}
			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
				{#each Object.entries(architecture.security) as [key, value]}
					<div
						style="background-color: {c.offWhite}; border-radius: 6px; padding: 12px 14px; border-left: 3px solid {c.pink};"
					>
						<div
							style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px;"
						>
							{labelize(key)}
						</div>
						<div style="font-size: 11px; color: {c.deepNavy}; line-height: 1.4;">{value}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(c.orange, 'Scalability & Performance')}
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
				{#each Object.entries(architecture.scalability) as [key, value]}
					<div style="background-color: {c.deepNavy}; border-radius: 6px; padding: 14px; text-align: center;">
						<div
							style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;"
						>
							{key}
						</div>
						<div style="font-size: 13px; color: {c.white}; font-weight: 600;">{value}</div>
					</div>
				{/each}
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Architecture Blueprint Template</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
