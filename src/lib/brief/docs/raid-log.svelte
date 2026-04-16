<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = '#0F172A';

	let activeTab = $state<'risks' | 'actions' | 'issues' | 'decisions'>('risks');

	const risks = [
		{
			id: 'R-001',
			category: 'Technical',
			description: 'AI model accuracy may not meet 95% target on edge cases',
			likelihood: 'Medium',
			impact: 'High',
			score: 12,
			status: 'Open',
			owner: 'AI Engineer',
			mitigation: 'Expand evaluation suite, include more edge cases in testing',
			contingency: 'Extend hypercare, manual review for low-confidence',
			dueDate: '15 Apr 2026',
		},
		{
			id: 'R-002',
			category: 'Integration',
			description: 'SAP API rate limits may impact processing throughput',
			likelihood: 'Low',
			impact: 'High',
			score: 8,
			status: 'Mitigating',
			owner: 'Integration Dev',
			mitigation: 'Implement request queuing and batching',
			contingency: 'Process in off-peak hours',
			dueDate: '10 Apr 2026',
		},
		{
			id: 'R-003',
			category: 'Organisational',
			description: 'Key stakeholder (CFO) leaving mid-project',
			likelihood: 'Low',
			impact: 'Critical',
			score: 10,
			status: 'Watching',
			owner: 'Delivery Lead',
			mitigation: 'Engage multiple stakeholders, document decisions',
			contingency: 'Pause and re-engage with successor',
			dueDate: 'Ongoing',
		},
		{
			id: 'R-004',
			category: 'Resource',
			description: 'AI Engineer availability due to concurrent project',
			likelihood: 'Medium',
			impact: 'Medium',
			score: 9,
			status: 'Open',
			owner: 'Delivery Lead',
			mitigation: 'Confirm resource allocation, identify backup',
			contingency: 'Contractor on standby',
			dueDate: '01 Apr 2026',
		},
		{
			id: 'R-005',
			category: 'Scope',
			description: 'Client may request additional document types post-discovery',
			likelihood: 'High',
			impact: 'Medium',
			score: 12,
			status: 'Open',
			owner: 'Delivery Lead',
			mitigation: 'Clear scope definition, change request process',
			contingency: 'Phase 2 for additional types',
			dueDate: '20 Mar 2026',
		},
	];

	const actions = [
		{
			id: 'A-001',
			description: 'Obtain SAP API credentials for production',
			owner: 'Integration Dev',
			dueDate: '25 Mar 2026',
			status: 'In Progress',
			priority: 'High',
		},
		{
			id: 'A-002',
			description: 'Schedule UAT sessions with client team',
			owner: 'Delivery Lead',
			dueDate: '01 Apr 2026',
			status: 'Not Started',
			priority: 'Medium',
		},
		{
			id: 'A-003',
			description: 'Complete prompt card documentation',
			owner: 'AI Engineer',
			dueDate: '28 Mar 2026',
			status: 'In Progress',
			priority: 'Medium',
		},
		{
			id: 'A-004',
			description: 'Confirm go-live date with client IT',
			owner: 'Delivery Lead',
			dueDate: '15 Apr 2026',
			status: 'Not Started',
			priority: 'High',
		},
		{
			id: 'A-005',
			description: 'Set up monitoring dashboards',
			owner: 'Integration Dev',
			dueDate: '10 Apr 2026',
			status: 'Not Started',
			priority: 'Medium',
		},
	];

	const issues = [
		{
			id: 'I-001',
			description: 'Sample invoices provided are lower quality than expected',
			severity: 'Medium',
			status: 'Open',
			owner: 'AI Engineer',
			resolution: 'Request better quality samples, adjust extraction confidence thresholds',
			raisedDate: '18 Mar 2026',
		},
		{
			id: 'I-002',
			description: 'Client IT delayed providing VPN access by 1 week',
			severity: 'High',
			status: 'Resolved',
			owner: 'Delivery Lead',
			resolution: 'Escalated to client sponsor, access granted 20 Mar',
			raisedDate: '12 Mar 2026',
		},
	];

	const decisions = [
		{
			id: 'D-001',
			description:
				'Use Azure OpenAI instead of direct Anthropic API due to client data residency requirements',
			madeBy: 'Solutions Architect',
			date: '10 Mar 2026',
			rationale: 'Client requires Australian data residency, Azure provides this',
			impact: 'Minor latency increase, no functional change',
		},
		{
			id: 'D-002',
			description: 'Phase 2 will include contract review; Phase 1 limited to invoices only',
			madeBy: 'Delivery Lead + Client',
			date: '15 Mar 2026',
			rationale: 'Reduce Phase 1 risk, prove value before expanding',
			impact: 'Reduced Phase 1 scope, clearer success criteria',
		},
		{
			id: 'D-003',
			description: 'Exception threshold set at 80% confidence (below = human review)',
			madeBy: 'AI Engineer + Client',
			date: '18 Mar 2026',
			rationale: 'Balances automation rate with accuracy requirements',
			impact: 'Estimated 85% auto-processing rate',
		},
	];

	const tabOrder = ['risks', 'actions', 'issues', 'decisions'] as const;

	function likelihoodColor(likelihood: string) {
		switch (likelihood) {
			case 'High':
				return c.red;
			case 'Medium':
				return c.orange;
			case 'Low':
				return c.green;
			default:
				return c.slate;
		}
	}

	function impactColor(impact: string) {
		switch (impact) {
			case 'Critical':
				return c.red;
			case 'High':
				return c.orange;
			case 'Medium':
				return c.yellow;
			case 'Low':
				return c.green;
			default:
				return c.slate;
		}
	}

	function statusColor(status: string) {
		switch (status) {
			case 'Open':
				return c.orange;
			case 'In Progress':
				return c.cyan;
			case 'Mitigating':
				return c.purple;
			case 'Watching':
				return c.yellow;
			case 'Closed':
				return c.green;
			case 'Resolved':
				return c.green;
			case 'Not Started':
				return c.slate;
			default:
				return c.slate;
		}
	}

	function priorityColor(priority: string) {
		switch (priority) {
			case 'High':
				return c.red;
			case 'Medium':
				return c.orange;
			case 'Low':
				return c.green;
			default:
				return c.slate;
		}
	}

	const stats = [
		{
			label: 'Open Risks',
			value: risks.filter((r) => r.status !== 'Closed').length,
			total: risks.length,
			color: c.red,
			icon: '⚠️',
			tab: 'risks' as const,
		},
		{
			label: 'Open Actions',
			value: actions.filter((a) => a.status !== 'Closed').length,
			total: actions.length,
			color: c.cyan,
			icon: '📋',
			tab: 'actions' as const,
		},
		{
			label: 'Open Issues',
			value: issues.filter((i) => i.status === 'Open').length,
			total: issues.length,
			color: c.orange,
			icon: '🚨',
			tab: 'issues' as const,
		},
		{
			label: 'Decisions',
			value: decisions.length,
			total: decisions.length,
			color: c.purple,
			icon: '✓',
			tab: 'decisions' as const,
		},
	];
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1200px; margin: 0 auto;">
		<div
			style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px;"
		>
			<div>
				<div
					style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 8px;"
				>
					Project Management
				</div>
				<h1 style="font-size: 32px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">RAID Log</h1>
				<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">Risks, Actions, Issues, Decisions</p>
			</div>
			<div style="text-align: right;">
				<div style="font-size: 12px; color: {c.slate};">
					Project: Coastal Manufacturing - Invoice Processing
				</div>
				<div style="font-size: 12px; color: {c.slate};">Last Updated: 22 Mar 2026</div>
			</div>
		</div>

		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;">
			{#each stats as stat, i}
				<button
					type="button"
					onclick={() => (activeTab = tabOrder[i])}
					style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px; cursor: pointer; border: {activeTab === stat.tab
						? `2px solid ${stat.color}`
						: '2px solid transparent'}; text-align: left;"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;"
					>
						<span style="font-size: 20px;">{stat.icon}</span>
						<div style="width: 8px; height: 8px; border-radius: 50%; background-color: {stat.color};"></div>
					</div>
					<div style="font-size: 28px; font-weight: 700; color: {c.white};">
						{stat.value}<span style="font-size: 16px; color: {c.slate};">/{stat.total}</span>
					</div>
					<div style="font-size: 12px; color: {c.lightSlate};">{stat.label}</div>
				</button>
			{/each}
		</div>

		<div
			style="display: flex; gap: 4px; margin-bottom: 24px; background-color: {c.deepNavy}; border-radius: 12px; padding: 4px;"
		>
			{#each [{ id: 'risks' as const, label: 'Risks', icon: '⚠️' }, { id: 'actions' as const, label: 'Actions', icon: '📋' }, { id: 'issues' as const, label: 'Issues', icon: '🚨' }, { id: 'decisions' as const, label: 'Decisions', icon: '✓' }] as tab}
				<button
					type="button"
					onclick={() => (activeTab = tab.id)}
					style="flex: 1; padding: 12px 16px; text-align: center; background-color: {activeTab === tab.id
						? pageBg
						: 'transparent'}; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: {activeTab === tab.id
						? '600'
						: '400'}; color: {activeTab === tab.id ? c.white : c.lightSlate};"
				>
					<span style="margin-right: 8px;">{tab.icon}</span>
					{tab.label}
				</button>
			{/each}
		</div>

		{#if activeTab === 'risks'}
			<div style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden;">
				<div style="padding: 20px 24px; border-bottom: 1px solid {c.slate}33;">
					<h2 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0;">Risk Register</h2>
				</div>

				<div style="padding: 16px 24px; background-color: {pageBg}; border-bottom: 1px solid {c.slate}33;">
					<div style="display: flex; gap: 24px; align-items: center; font-size: 11px; flex-wrap: wrap;">
						<span style="color: {c.slate};">Risk Score = Likelihood × Impact</span>
						<div style="display: flex; gap: 16px; flex-wrap: wrap;">
							<span><span style="color: {c.red};">●</span> Critical (15-20)</span>
							<span><span style="color: {c.orange};">●</span> High (10-14)</span>
							<span><span style="color: {c.yellow};">●</span> Medium (5-9)</span>
							<span><span style="color: {c.green};">●</span> Low (1-4)</span>
						</div>
					</div>
				</div>

				<div style="padding: 24px;">
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each risks as risk}
							<div
								style="background-color: {pageBg}; border-radius: 12px; padding: 20px; border-left: 4px solid {risk.score >= 15
									? c.red
									: risk.score >= 10
										? c.orange
										: risk.score >= 5
											? c.yellow
											: c.green};"
							>
								<div
									style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;"
								>
									<div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
										<span style="font-size: 12px; color: {c.cyan}; font-weight: 600;">{risk.id}</span>
										<span
											style="font-size: 10px; padding: 2px 8px; background-color: {c.purple}20; color: {c.purple}; border-radius: 4px;"
											>{risk.category}</span
										>
										<span
											style="font-size: 10px; padding: 2px 8px; background-color: {statusColor(risk.status)}20; color: {statusColor(
												risk.status,
											)}; border-radius: 4px;">{risk.status}</span
										>
									</div>
									<div style="text-align: center; padding: 4px 12px; background-color: {c.deepNavy}; border-radius: 6px;">
										<div
											style="font-size: 18px; font-weight: 700; color: {risk.score >= 15
												? c.red
												: risk.score >= 10
													? c.orange
													: risk.score >= 5
														? c.yellow
														: c.green};"
										>
											{risk.score}
										</div>
										<div style="font-size: 9px; color: {c.slate};">Score</div>
									</div>
								</div>

								<p style="font-size: 14px; color: {c.white}; margin: 0 0 16px 0;">{risk.description}</p>

								<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px;">
									<div>
										<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">Likelihood</div>
										<div style="font-size: 12px; color: {likelihoodColor(risk.likelihood)};">{risk.likelihood}</div>
									</div>
									<div>
										<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">Impact</div>
										<div style="font-size: 12px; color: {impactColor(risk.impact)};">{risk.impact}</div>
									</div>
									<div>
										<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">Owner</div>
										<div style="font-size: 12px; color: {c.lightSlate};">{risk.owner}</div>
									</div>
									<div>
										<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">Due Date</div>
										<div style="font-size: 12px; color: {c.lightSlate};">{risk.dueDate}</div>
									</div>
								</div>

								<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
									<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 12px;">
										<div style="font-size: 10px; color: {c.green}; margin-bottom: 4px;">Mitigation</div>
										<div style="font-size: 11px; color: {c.lightSlate};">{risk.mitigation}</div>
									</div>
									<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 12px;">
										<div style="font-size: 10px; color: {c.orange}; margin-bottom: 4px;">Contingency</div>
										<div style="font-size: 11px; color: {c.lightSlate};">{risk.contingency}</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if activeTab === 'actions'}
			<div style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden;">
				<div style="padding: 20px 24px; border-bottom: 1px solid {c.slate}33;">
					<h2 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0;">Action Items</h2>
				</div>
				<div style="padding: 24px;">
					<table style="width: 100%; border-collapse: collapse;">
						<thead>
							<tr>
								{#each ['ID', 'Action', 'Owner', 'Due Date', 'Priority', 'Status'] as h}
									<th
										style="text-align: left; padding: 12px; font-size: 11px; color: {c.slate}; text-transform: uppercase; border-bottom: 1px solid {c.slate}33;"
									>
										{h}
									</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each actions as action}
								<tr style="border-bottom: 1px solid {c.slate}22;">
									<td style="padding: 16px 12px; font-size: 12px; color: {c.cyan}; font-weight: 600;">
										{action.id}
									</td>
									<td style="padding: 16px 12px; font-size: 13px; color: {c.white};">{action.description}</td>
									<td style="padding: 16px 12px; font-size: 12px; color: {c.lightSlate};">{action.owner}</td>
									<td style="padding: 16px 12px; font-size: 12px; color: {c.lightSlate};">{action.dueDate}</td>
									<td style="padding: 16px 12px;">
										<span
											style="font-size: 10px; padding: 4px 10px; background-color: {priorityColor(action.priority)}20; color: {priorityColor(
												action.priority,
											)}; border-radius: 4px;"
										>
											{action.priority}
										</span>
									</td>
									<td style="padding: 16px 12px;">
										<span
											style="font-size: 10px; padding: 4px 10px; background-color: {statusColor(action.status)}20; color: {statusColor(
												action.status,
											)}; border-radius: 4px;"
										>
											{action.status}
										</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{:else if activeTab === 'issues'}
			<div style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden;">
				<div style="padding: 20px 24px; border-bottom: 1px solid {c.slate}33;">
					<h2 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0;">Issues Log</h2>
				</div>
				<div style="padding: 24px;">
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each issues as issue}
							<div
								style="background-color: {pageBg}; border-radius: 12px; padding: 20px; border-left: 4px solid {issue.status === 'Open'
									? c.orange
									: c.green};"
							>
								<div
									style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;"
								>
									<div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
										<span style="font-size: 12px; color: {c.cyan}; font-weight: 600;">{issue.id}</span>
										<span
											style="font-size: 10px; padding: 2px 8px; background-color: {priorityColor(issue.severity)}20; color: {priorityColor(
												issue.severity,
											)}; border-radius: 4px;">{issue.severity} Severity</span
										>
										<span
											style="font-size: 10px; padding: 2px 8px; background-color: {statusColor(issue.status)}20; color: {statusColor(
												issue.status,
											)}; border-radius: 4px;">{issue.status}</span
										>
									</div>
									<div style="font-size: 11px; color: {c.slate};">Raised: {issue.raisedDate}</div>
								</div>
								<p style="font-size: 14px; color: {c.white}; margin: 0 0 12px 0;">{issue.description}</p>
								<div style="display: flex; gap: 24px; flex-wrap: wrap;">
									<div>
										<div style="font-size: 10px; color: {c.slate}; margin-bottom: 2px;">Owner</div>
										<div style="font-size: 12px; color: {c.lightSlate};">{issue.owner}</div>
									</div>
									<div style="flex: 1; min-width: 200px;">
										<div style="font-size: 10px; color: {c.green}; margin-bottom: 2px;">Resolution</div>
										<div style="font-size: 12px; color: {c.lightSlate};">{issue.resolution}</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden;">
				<div style="padding: 20px 24px; border-bottom: 1px solid {c.slate}33;">
					<h2 style="font-size: 18px; font-weight: 600; color: {c.white}; margin: 0;">Decision Log</h2>
				</div>
				<div style="padding: 24px;">
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each decisions as decision}
							<div
								style="background-color: {pageBg}; border-radius: 12px; padding: 20px; border-left: 4px solid {c.purple};"
							>
								<div
									style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;"
								>
									<span style="font-size: 12px; color: {c.cyan}; font-weight: 600;">{decision.id}</span>
									<div style="font-size: 11px; color: {c.slate};">
										{decision.date} • {decision.madeBy}
									</div>
								</div>
								<p style="font-size: 14px; color: {c.white}; margin: 0 0 16px 0;">{decision.description}</p>
								<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
									<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 12px;">
										<div style="font-size: 10px; color: {c.purple}; margin-bottom: 4px;">Rationale</div>
										<div style="font-size: 11px; color: {c.lightSlate};">{decision.rationale}</div>
									</div>
									<div style="background-color: {c.deepNavy}; border-radius: 8px; padding: 12px;">
										<div style="font-size: 10px; color: {c.cyan}; margin-bottom: 4px;">Impact</div>
										<div style="font-size: 11px; color: {c.lightSlate};">{decision.impact}</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">RAID Log Template v1.0</div>
		</div>
	</div>
</div>
