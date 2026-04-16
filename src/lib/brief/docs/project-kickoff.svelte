<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const project = {
		client: '[Client Name]',
		project: '[Project Name]',
		projectId: 'PRJ-XXX',
		startDate: '[Date]',
		targetEndDate: '[Date]',
		projectLead: '[Name]',
		preparedDate: '[Date]',
		team: [
			{
				role: 'Project Lead',
				name: '',
				responsibility: 'Delivery, client relationship, scope management',
			},
			{
				role: 'AI Engineer',
				name: '',
				responsibility: 'Agent design, prompt engineering, testing',
			},
			{
				role: 'Integration Developer',
				name: '',
				responsibility: 'System integrations, infrastructure',
			},
			{
				role: 'Client Sponsor',
				name: '',
				responsibility: 'Decisions, access, stakeholder management',
			},
			{ role: 'Client SME', name: '', responsibility: 'Process knowledge, testing, feedback' },
			{
				role: 'Client IT Contact',
				name: '',
				responsibility: 'System access, security, infrastructure',
			},
		],
		commercials: {
			contractType: '[Fixed price / T&M / Hybrid]',
			totalValue: '$',
			paymentMilestones: [
				{ milestone: 'Commencement', percentage: '30%', amount: '$', trigger: 'SOW signed' },
				{ milestone: 'Build Complete', percentage: '40%', amount: '$', trigger: 'UAT ready' },
				{ milestone: 'Go-Live', percentage: '30%', amount: '$', trigger: 'Production deployment' },
			],
			supportPeriod: '[X] days post go-live',
			ongoingSupport: '[None / Basic / Standard / Premium] - $[X]/month',
		},
	};

	const agenda = [
		{ time: '5 min', topic: 'Welcome & Introductions', notes: 'Introduce team members, confirm roles' },
		{ time: '10 min', topic: 'Project Overview', notes: 'Recap scope, objectives, success criteria' },
		{ time: '10 min', topic: 'Timeline & Milestones', notes: 'Walk through project plan, key dates' },
		{ time: '10 min', topic: 'Team & Communication', notes: 'Who does what, how we communicate, meeting cadence' },
		{ time: '15 min', topic: 'Discovery Deep-Dive', notes: 'Confirm understanding of process, identify gaps' },
		{ time: '10 min', topic: 'Access & Systems', notes: 'Confirm access requirements, assign owners' },
		{ time: '10 min', topic: 'Risks & Dependencies', notes: 'Surface any concerns, confirm dependencies' },
		{ time: '10 min', topic: 'Next Steps & Actions', notes: 'Assign immediate actions, confirm next meeting' },
	];
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

{#snippet checkItem(children: string, critical?: boolean)}
	<div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
		<div
			style="width: 18px; height: 18px; border: 2px solid {critical ? c.pink : c.cyan}; border-radius: 3px; flex-shrink: 0; margin-top: 1px;"
		></div>
		<span style="font-size: 12px; color: {c.deepNavy};">{children}</span>
		{#if critical}
			<span style="font-size: 9px; color: {c.pink}; font-weight: 600;">CRITICAL</span>
		{/if}
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>
		<div style="background: {c.deepNavy}; padding: 32px 48px;">
			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div
						style="font-size: 9px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;"
					>
						Project Kickoff
					</div>
					<h1 style="font-size: 28px; font-weight: 700; color: {c.white}; margin: 0 0 6px 0;">
						{project.project}
					</h1>
					<div style="font-size: 14px; color: {c.lightSlate};">{project.client}</div>
				</div>
				<div style="text-align: right;">
					<div style="font-size: 11px; color: {c.lightSlate}; font-family: JetBrains Mono, monospace;">
						{project.projectId}
					</div>
					<div style="font-size: 11px; color: {c.lightSlate}; margin-top: 8px;">
						Start: {project.startDate}<br />
						Target End: {project.targetEndDate}
					</div>
				</div>
			</div>
		</div>

		<div style="padding: 24px 48px 36px;">
			{@render sectionTitle(c.cyan, 'Project Team')}
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
				<thead>
					<tr>
						{#each ['Role', 'Name', 'Responsibility'] as h}
							<th
								style="text-align: left; padding: 10px 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each project.team as member}
						<tr>
							<td
								style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; font-weight: 500; color: {c.deepNavy};"
							>
								{member.role}
							</td>
							<td
								style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.deepNavy}; min-width: 120px;"
							>
								<div style="border-bottom: 1px solid {c.lightSlate}; min-height: 16px;">{member.name}</div>
							</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">
								{member.responsibility}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			{@render sectionTitle(c.purple, 'Commercial Summary')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px;">
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
					<div
						style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Contract Type
					</div>
					<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">
						{project.commercials.contractType}
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
					<div
						style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Total Value
					</div>
					<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">
						{project.commercials.totalValue}
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
					<div
						style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;"
					>
						Support Period
					</div>
					<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">
						{project.commercials.supportPeriod}
					</div>
				</div>
			</div>

			<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 14px;">
				<div
					style="font-size: 9px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 10px;"
				>
					Payment Milestones
				</div>
				<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
					<thead>
						<tr>
							{#each ['Milestone', '%', 'Amount', 'Trigger'] as h}
								<th
									style="text-align: left; padding: 6px 8px; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each project.commercials.paymentMilestones as m}
							<tr>
								<td style="padding: 8px; color: {c.deepNavy}; font-weight: 500;">{m.milestone}</td>
								<td style="padding: 8px; color: {c.purple};">{m.percentage}</td>
								<td style="padding: 8px; color: {c.deepNavy};">{m.amount}</td>
								<td style="padding: 8px; color: {c.slate};">{m.trigger}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>
		<div style="padding: 24px 48px 36px;">
			{@render sectionTitle(c.pink, 'Pre-Kickoff Checklist')}
			<p style="font-size: 12px; color: {c.slate}; margin-bottom: 20px;">
				Complete these items BEFORE the kickoff meeting with the client.
			</p>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">
						Admin & Commercial
					</div>
					{@render checkItem('SOW fully signed', true)}
					{@render checkItem('First invoice sent', true)}
					{@render checkItem('Project folder created in SharePoint')}
					{@render checkItem('Project added to time tracking system')}
					{@render checkItem('Client added to project management tool')}
					{@render checkItem('Internal kickoff completed with team')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">
						Access & Accounts
					</div>
					{@render checkItem('Client communication channel set up (Slack/Teams)', true)}
					{@render checkItem('Meeting recurring calendar invites sent')}
					{@render checkItem('Access request submitted for client systems')}
					{@render checkItem('VPN/network access requested (if needed)')}
					{@render checkItem('Development environment provisioned')}
					{@render checkItem('Source control repo created')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.pink}; margin-bottom: 12px;">
						Documentation
					</div>
					{@render checkItem('Proposal/SOW copied to project folder')}
					{@render checkItem('Discovery notes organised')}
					{@render checkItem('Previous meeting notes captured')}
					{@render checkItem('Any client-provided docs catalogued')}
					{@render checkItem('Agent Design Card template prepared')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.orange}; margin-bottom: 12px;">
						Planning
					</div>
					{@render checkItem('Draft project plan created')}
					{@render checkItem('Key milestones identified')}
					{@render checkItem('Team capacity confirmed')}
					{@render checkItem('Risk register started')}
					{@render checkItem('Kickoff meeting agenda prepared')}
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>
		<div style="padding: 24px 48px 36px;">
			{@render sectionTitle(c.cyan, 'Kickoff Meeting Agenda')}
			<p style="font-size: 12px; color: {c.slate}; margin-bottom: 20px;">
				Standard agenda for client kickoff meeting (60-90 minutes).
			</p>

			{#each agenda as item}
				<div
					style="display: flex; gap: 16px; padding: 12px 0; border-bottom: 1px solid {c.lightSlate}22;"
				>
					<div style="width: 60px; font-size: 11px; font-weight: 600; color: {c.purple}; flex-shrink: 0;">
						{item.time}
					</div>
					<div style="flex: 1;">
						<div style="font-size: 13px; font-weight: 500; color: {c.deepNavy};">{item.topic}</div>
						<div style="font-size: 11px; color: {c.slate};">{item.notes}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>
		<div style="padding: 24px 48px 36px;">
			{@render sectionTitle(c.green, 'Week 1 Checklist')}
			<p style="font-size: 12px; color: {c.slate}; margin-bottom: 20px;">
				Complete these items by end of first week.
			</p>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">
						Discovery & Planning
					</div>
					{@render checkItem('Kickoff meeting completed')}
					{@render checkItem('Kickoff notes distributed')}
					{@render checkItem('Detailed process mapping session scheduled')}
					{@render checkItem('Sample data requested')}
					{@render checkItem('Golden dataset requirements defined')}
					{@render checkItem('Agent Design Card draft started')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">
						Technical Setup
					</div>
					{@render checkItem('Development environment working')}
					{@render checkItem('Source control set up and accessible')}
					{@render checkItem('CI/CD pipeline configured')}
					{@render checkItem('Client system access confirmed')}
					{@render checkItem('Technical spike identified (if needed)')}
					{@render checkItem('Architecture Blueprint draft started')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">
						Communication
					</div>
					{@render checkItem('Weekly status meeting scheduled')}
					{@render checkItem('First status report template prepared')}
					{@render checkItem('Slack/Teams channel active')}
					{@render checkItem('Escalation paths confirmed')}
				</div>

				<div>
					<div style="font-size: 11px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">
						Risk Management
					</div>
					{@render checkItem('Risk register updated with initial risks')}
					{@render checkItem('Key assumptions documented')}
					{@render checkItem('Dependencies confirmed with owners')}
					{@render checkItem('Any blockers escalated')}
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {gradient};"></div>
		<div style="padding: 24px 48px 36px;">
			{@render sectionTitle(c.orange, 'Notes & Actions')}

			<div style="margin-bottom: 20px;">
				<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">
					Key decisions / open items from kickoff
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px; min-height: 80px;"></div>
			</div>

			<div style="margin-bottom: 20px;">
				<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 8px;">Immediate actions</div>
				<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
					<thead>
						<tr>
							{#each ['Action', 'Owner', 'Due'] as h}
								<th
									style="text-align: left; padding: 10px 12px; background-color: {c.offWhite}; color: {c.slate}; font-weight: 600; font-size: 9px; text-transform: uppercase;"
								>
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each Array.from({ length: 5 }) as _, i}
							<tr>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22;"></td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; width: 150px;"></td>
								<td style="padding: 12px; border-bottom: 1px solid {c.lightSlate}22; width: 100px;"></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div
				style="margin-top: 28px; padding-top: 14px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; font-size: 10px; color: {c.lightSlate};"
			>
				<span>Project Kickoff Template</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
