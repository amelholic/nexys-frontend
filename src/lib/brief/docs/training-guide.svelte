<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBgLight = c.pageBgLight;

	const guide = {
		client: 'Acme Logistics',
		agentName: 'Invoice Processing Agent',
		version: '1.0',
		date: '2026-03-01',
		audience: 'Finance Team',
		overview: {
			whatItDoes:
				'The Invoice Processing Agent automatically handles incoming invoices - extracting data, matching to purchase orders, and routing for approval. It works 24/7 and processes most invoices in under 2 minutes.',
			whatItDoesNot:
				'The agent does not replace human judgment for complex cases. It flags exceptions for your review and always keeps you in control of final approvals over $5,000.',
			yourRole:
				'You will review exceptions, approve flagged invoices, and monitor the daily summary. The agent handles the routine work so you can focus on exceptions and analysis.',
		},
		gettingStarted: {
			access: [
				{
					step: 1,
					action: 'Log in to the Agent Dashboard',
					detail: 'Use your normal Acme credentials at https://agents.example.com/invoice',
				},
				{ step: 2, action: 'Bookmark the dashboard', detail: 'You will use this daily to review exceptions and monitor processing' },
				{ step: 3, action: 'Check your Slack channel', detail: 'Join #invoice-agent for alerts and daily summaries' },
			],
			firstDay: [
				'Review the dashboard layout and familiarise yourself with each section',
				'Check the exception queue - these are invoices that need your attention',
				'Look at a few processed invoices to see what the agent captured',
				'Try approving one exception to get comfortable with the workflow',
			],
		},
		dailyWorkflow: {
			morning: [
				{ time: '9:00 AM', task: 'Check daily summary in Slack', detail: 'Review overnight processing stats and any alerts' },
				{ time: '9:15 AM', task: 'Review exception queue', detail: 'Handle invoices that need human decision' },
				{ time: '10:00 AM', task: 'Spot check processed invoices', detail: 'Randomly review 2-3 auto-approved invoices' },
			],
			asNeeded: [
				'Respond to exception alerts in Slack',
				'Handle urgent invoices flagged as high-priority',
				'Answer queries from the agent (rare - usually missing PO info)',
			],
			endOfDay: [
				{ time: '4:00 PM', task: 'Clear remaining exceptions', detail: 'Ensure queue is empty before EOD' },
				{ time: '4:30 PM', task: 'Check for stuck invoices', detail: 'Look for anything in "Processing" for >30 min' },
			],
		},
		dashboardGuide: {
			sections: [
				{
					name: 'Summary Cards',
					location: 'Top of dashboard',
					purpose: "Quick view of today's numbers",
					metrics: ['Processed today', 'Pending review', 'Exceptions', 'Auto-approved'],
				},
				{
					name: 'Exception Queue',
					location: 'Main panel',
					purpose: 'Invoices that need your attention',
					actions: ['Review details', 'Approve', 'Reject', 'Request info'],
				},
				{
					name: 'Recent Activity',
					location: 'Right sidebar',
					purpose: 'Stream of processed invoices',
					actions: ['Click to view details', 'Filter by status', 'Search by vendor'],
				},
				{
					name: 'Performance Charts',
					location: 'Bottom section',
					purpose: 'Trends and patterns',
					metrics: ['Volume over time', 'Exception rate', 'Processing time'],
				},
			],
		},
		handlingExceptions: {
			types: [
				{
					type: 'No PO Match',
					icon: '?',
					color: c.orange,
					meaning: 'Agent could not find a matching purchase order',
					actions: [
						'Check if PO number is on the invoice (may be in different format)',
						'Search SAP manually for the PO',
						'If found, link the invoice to the PO and approve',
						'If no PO exists, reject or create PO first',
					],
				},
				{
					type: 'Amount Mismatch',
					icon: '$',
					color: c.pink,
					meaning: 'Invoice amount differs from PO by more than 10%',
					actions: [
						'Review the variance shown',
						'Check for shipping, tax, or price adjustments',
						'If variance is legitimate, approve with note',
						'If unexpected, reject and query vendor',
					],
				},
				{
					type: 'New Vendor',
					icon: '+',
					color: c.purple,
					meaning: 'Vendor is not in the approved vendor list',
					actions: [
						'Verify this is a legitimate new vendor',
						'If approved, request vendor setup from procurement',
						'Once vendor is set up, reprocess the invoice',
					],
				},
				{
					type: 'Extraction Issue',
					icon: '!',
					color: c.red,
					meaning: 'Agent could not read part of the invoice',
					actions: [
						'View the original document',
						'Manually enter or correct the missing data',
						'If document is unreadable, request new copy from vendor',
					],
				},
				{
					type: 'High Value',
					icon: '★',
					color: c.cyan,
					meaning: 'Invoice exceeds $5,000 auto-approval threshold',
					actions: [
						'Review invoice details and PO match',
						'Verify approvals are in place',
						'Approve if everything checks out',
					],
				},
			],
		},
		commonTasks: [
			{
				task: 'Approve an exception',
				steps: [
					'Click on the invoice in the Exception Queue',
					'Review the details and reason for exception',
					'Click "Approve" button',
					'Add a note explaining your decision (optional but recommended)',
					'Invoice moves to SAP automatically',
				],
			},
			{
				task: 'Reject an invoice',
				steps: [
					'Click on the invoice in the Exception Queue',
					'Click "Reject" button',
					'Select a rejection reason from the dropdown',
					'Add details for the vendor',
					'System sends rejection notice automatically',
				],
			},
			{
				task: 'Request more information',
				steps: [
					'Click on the invoice in the Exception Queue',
					'Click "Request Info" button',
					'Select what information is needed',
					'Add a message for the vendor',
					'Invoice moves to "Awaiting Response" status',
				],
			},
			{
				task: 'Search for an invoice',
				steps: [
					'Use the search bar at top of dashboard',
					'Search by invoice number, vendor name, or amount',
					'Filter by date range if needed',
					'Click on result to view details',
				],
			},
			{
				task: 'View processing history',
				steps: [
					'Click on any invoice',
					'Scroll to "Activity Log" section',
					'See full timeline of agent actions',
					'Export log if needed for audit',
				],
			},
		],
		dosDonts: {
			dos: [
				'Do review exceptions promptly - vendors are waiting',
				'Do add notes when approving unusual items',
				'Do check the daily summary for trends',
				'Do report repeated issues to your manager',
				'Do use the feedback button if the agent made a mistake',
			],
			donts: [
				'Do not approve invoices without checking the details',
				'Do not ignore high-value alerts',
				'Do not manually enter invoices that arrived by email (let the agent handle them)',
				'Do not share your dashboard login',
				'Do not delete items from the queue without action',
			],
		},
		troubleshooting: [
			{ problem: 'Dashboard will not load', solution: 'Clear browser cache, try incognito mode, or contact IT' },
			{ problem: 'Invoice stuck in "Processing"', solution: 'Wait 30 minutes, then report to IT if still stuck' },
			{ problem: 'Cannot find an invoice', solution: 'Check "All Invoices" filter, not just today\'s' },
			{ problem: 'Approved but not in SAP', solution: 'Check SAP sync status in invoice details, may take 5 minutes' },
			{ problem: 'Receiving too many alerts', solution: 'Adjust notification settings in your profile' },
		],
		gettingHelp: {
			selfService: [
				'Dashboard help icon (?) for tooltips',
				'FAQ section in dashboard menu',
				'Training videos in SharePoint > Training',
			],
			humanHelp: [
				{ issue: 'Dashboard or technical issues', contact: 'IT Service Desk', method: 'ServiceNow ticket' },
				{ issue: 'Process questions', contact: 'Finance Team Lead', method: 'Teams message' },
				{ issue: 'Agent behaviour concerns', contact: 'AI Flow Support', method: 'support@example.com' },
			],
		},
		glossary: [
			{
				term: 'Auto-approved',
				definition:
					'Invoice processed and sent to SAP without human review (under $5K, all validations passed)',
			},
			{ term: 'Exception', definition: 'Invoice that needs human decision before it can proceed' },
			{ term: 'PO Match', definition: 'Linking an invoice to its corresponding Purchase Order' },
			{
				term: 'Three-way match',
				definition: 'Verification that PO, receipt, and invoice all agree',
			},
			{ term: 'Extraction', definition: 'Reading data from the invoice document' },
		],
	} as const;
</script>

{#snippet sectionTitle(label: string, color: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; margin-top: 28px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 11px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{label}
		</h3>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBgLight}; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); min-height: 500px; display: flex; flex-direction: column;"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px;">
			<div
				style="font-size: 10px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				User Training Guide
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.deepNavy}; margin: 0 0 12px 0; line-height: 1.2;">
				{guide.agentName}
			</h1>
			<div style="font-size: 18px; color: {c.slate}; margin-bottom: 40px;">A guide for {guide.audience}</div>
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px; max-width: 500px;">
				<div style="font-size: 13px; color: {c.deepNavy}; line-height: 1.6;">
					This guide will help you work effectively with the Invoice Processing Agent. You will learn how to review
					exceptions, approve invoices, and get the most out of automated processing.
				</div>
			</div>
		</div>
		<div
			style="padding: 24px 60px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;"
		>
			<div style="font-size: 11px; color: {c.lightSlate};">{guide.client}</div>
			<div style="font-size: 11px; color: {c.lightSlate};">v{guide.version} | {guide.date}</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 24px 36px 36px;">
			{@render sectionTitle('What the Agent Does', c.cyan)}
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
				<p style="font-size: 13px; color: {c.deepNavy}; line-height: 1.7; margin: 0;">{guide.overview.whatItDoes}</p>
			</div>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
				<div
					style="background-color: {`${c.orange}1a`}; border-radius: 8px; padding: 16px; border-left: 4px solid {c.orange};"
				>
					<div style="font-size: 11px; font-weight: 600; color: {c.orange}; margin-bottom: 8px;">What It Does Not Do</div>
					<p style="font-size: 12px; color: {c.deepNavy}; line-height: 1.6; margin: 0;">{guide.overview.whatItDoesNot}</p>
				</div>
				<div
					style="background-color: {`${c.purple}1a`}; border-radius: 8px; padding: 16px; border-left: 4px solid {c.purple};"
				>
					<div style="font-size: 11px; font-weight: 600; color: {c.purple}; margin-bottom: 8px;">Your Role</div>
					<p style="font-size: 12px; color: {c.deepNavy}; line-height: 1.6; margin: 0;">{guide.overview.yourRole}</p>
				</div>
			</div>
			{@render sectionTitle('Getting Started', c.purple)}
			<div style="margin-bottom: 20px;">
				{#each guide.gettingStarted.access as item}
					<div style="display: flex; gap: 16px; margin-bottom: 12px;">
						<div
							style="width: 32px; height: 32px; border-radius: 50%; background-color: {c.purple}; display: flex; align-items: center; justify-content: center; color: {c.white}; font-size: 14px; font-weight: 700; flex-shrink: 0;"
						>
							{item.step}
						</div>
						<div style="flex: 1; padding-top: 4px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{item.action}</div>
							<div style="font-size: 11px; color: {c.slate};">{item.detail}</div>
						</div>
					</div>
				{/each}
			</div>
			<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
				<div style="font-size: 11px; font-weight: 600; color: {c.cyan}; margin-bottom: 10px;">Your First Day Checklist</div>
				{#each guide.gettingStarted.firstDay as item}
					<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
						<div
							style="width: 18px; height: 18px; border-radius: 4px; border: 2px solid {c.cyan}; flex-shrink: 0;"
						></div>
						<span style="font-size: 12px; color: {c.deepNavy};">{item}</span>
					</div>
				{/each}
			</div>
			{@render sectionTitle('Daily Workflow', c.pink)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div
						style="font-size: 10px; color: {c.cyan}; font-weight: 600; text-transform: uppercase; margin-bottom: 10px;"
					>
						Morning
					</div>
					{#each guide.dailyWorkflow.morning as item}
						<div style="margin-bottom: 10px;">
							<div style="font-size: 11px; font-weight: 600; color: {c.deepNavy};">{item.time}</div>
							<div style="font-size: 11px; color: {c.deepNavy};">{item.task}</div>
							<div style="font-size: 10px; color: {c.slate};">{item.detail}</div>
						</div>
					{/each}
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div
						style="font-size: 10px; color: {c.pink}; font-weight: 600; text-transform: uppercase; margin-bottom: 10px;"
					>
						As Needed
					</div>
					{#each guide.dailyWorkflow.asNeeded as item}
						<div style="font-size: 11px; color: {c.deepNavy}; margin-bottom: 8px; display: flex; gap: 6px;">
							<span style="color: {c.pink};">•</span>
							{item}
						</div>
					{/each}
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div
						style="font-size: 10px; color: {c.purple}; font-weight: 600; text-transform: uppercase; margin-bottom: 10px;"
					>
						End of Day
					</div>
					{#each guide.dailyWorkflow.endOfDay as item}
						<div style="margin-bottom: 10px;">
							<div style="font-size: 11px; font-weight: 600; color: {c.deepNavy};">{item.time}</div>
							<div style="font-size: 11px; color: {c.deepNavy};">{item.task}</div>
							<div style="font-size: 10px; color: {c.slate};">{item.detail}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">Training Guide</span>
				<span style="font-size: 10px; color: {c.lightSlate};">Page 2</span>
			</div>
			{@render sectionTitle('Dashboard Overview', c.cyan)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 24px;">
				{#each guide.dashboardGuide.sections as section}
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 14px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">{section.name}</div>
						<div style="font-size: 10px; color: {c.cyan}; margin-bottom: 6px;">{section.location}</div>
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 8px;">{section.purpose}</div>
						<div style="display: flex; flex-wrap: wrap; gap: 4px;">
							{#each 'metrics' in section ? section.metrics : 'actions' in section ? section.actions : [] as chip}
								<span
									style="font-size: 9px; color: {c.purple}; background-color: {`${c.purple}26`}; padding: 2px 6px; border-radius: 3px;"
								>
									{chip}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			{@render sectionTitle('Handling Exceptions', c.orange)}
			<p style="font-size: 12px; color: {c.slate}; margin-bottom: 16px;">
				When the agent cannot process an invoice automatically, it creates an exception for you to handle. Here are the
				types you will see:
			</p>
			{#each guide.handlingExceptions.types as exc}
				<div
					style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px; margin-bottom: 12px; border-left: 4px solid {exc.color};"
				>
					<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
						<div
							style="width: 28px; height: 28px; border-radius: 6px; background-color: {exc.color}; display: flex; align-items: center; justify-content: center; color: {c.white}; font-size: 14px; font-weight: 700;"
						>
							{exc.icon}
						</div>
						<div>
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{exc.type}</div>
							<div style="font-size: 11px; color: {c.slate};">{exc.meaning}</div>
						</div>
					</div>
					<div style="margin-left: 38px;">
						<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 6px;">
							What to do
						</div>
						{#each exc.actions as action, j}
							<div style="font-size: 11px; color: {c.deepNavy}; margin-bottom: 4px; display: flex; gap: 6px;">
								<span style="color: {exc.color};">{j + 1}.</span>
								{action}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
		<div style="padding: 24px 36px 36px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid {c.lightSlate}33; margin-bottom: 8px;"
			>
				<span style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">Training Guide</span>
				<span style="font-size: 10px; color: {c.lightSlate};">Page 3</span>
			</div>
			{@render sectionTitle('Common Tasks', c.purple)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
				{#each guide.commonTasks.slice(0, 4) as task}
					<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 14px;">
						<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 10px;">{task.task}</div>
						<ol style="margin: 0; padding-left: 16px;">
							{#each task.steps as step}
								<li style="font-size: 10px; color: {c.slate}; margin-bottom: 4px; line-height: 1.4;">{step}</li>
							{/each}
						</ol>
					</div>
				{/each}
			</div>
			{@render sectionTitle('Dos and Do Nots', c.pink)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
				<div
					style="background-color: {`${c.green}1a`}; border-radius: 8px; padding: 16px; border-left: 4px solid {c.green};"
				>
					<div style="font-size: 11px; font-weight: 600; color: {c.green}; margin-bottom: 10px;">DO</div>
					{#each guide.dosDonts.dos as item}
						<div style="display: flex; gap: 8px; margin-bottom: 8px;">
							<span style="color: {c.green};">✓</span>
							<span style="font-size: 11px; color: {c.deepNavy};">{item}</span>
						</div>
					{/each}
				</div>
				<div style="background-color: {`${c.red}1a`}; border-radius: 8px; padding: 16px; border-left: 4px solid {c.red};">
					<div style="font-size: 11px; font-weight: 600; color: {c.red}; margin-bottom: 10px;">DO NOT</div>
					{#each guide.dosDonts.donts as item}
						<div style="display: flex; gap: 8px; margin-bottom: 8px;">
							<span style="color: {c.red};">✗</span>
							<span style="font-size: 11px; color: {c.deepNavy};">{item}</span>
						</div>
					{/each}
				</div>
			</div>
			{@render sectionTitle('Troubleshooting', c.orange)}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
				<thead>
					<tr>
						<th
							style="text-align: left; padding: 10px 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
						>
							Problem
						</th>
						<th
							style="text-align: left; padding: 10px 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 10px; text-transform: uppercase;"
						>
							Solution
						</th>
					</tr>
				</thead>
				<tbody>
					{#each guide.troubleshooting as item}
						<tr>
							<td
								style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy};"
							>
								{item.problem}
							</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{item.solution}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			{@render sectionTitle('Getting Help', c.cyan)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 10px;">
						Self-Service
					</div>
					{#each guide.gettingHelp.selfService as item}
						<div style="font-size: 11px; color: {c.deepNavy}; margin-bottom: 6px; display: flex; gap: 6px;">
							<span style="color: {c.cyan};">•</span>
							{item}
						</div>
					{/each}
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 16px;">
					<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 10px;">
						Contact Support
					</div>
					{#each guide.gettingHelp.humanHelp as item}
						<div style="margin-bottom: 10px;">
							<div style="font-size: 11px; font-weight: 500; color: {c.deepNavy};">{item.issue}</div>
							<div style="font-size: 10px; color: {c.slate};">{item.contact} via {item.method}</div>
						</div>
					{/each}
				</div>
			</div>
			{@render sectionTitle('Glossary', c.purple)}
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
				{#each guide.glossary as item}
					<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 10px;">
						<span style="font-size: 11px; font-weight: 600; color: {c.purple};">{item.term}:</span>
						<span style="font-size: 11px; color: {c.slate};"> {item.definition}</span>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate}; flex-wrap: wrap; gap: 8px;"
			>
				<span>Training Guide Template</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
