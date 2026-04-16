<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = c.pageBgDark;

	type Section = {
		id: string;
		name: string;
		timing: string;
		color: string;
		owner: string;
		items: { id: number; task: string; owner: string; timing: string }[];
	};

	const newHire = {
		name: '[New Hire Name]',
		role: '[Role Title]',
		startDate: '[Start Date]',
		manager: '[Manager Name]',
		buddy: '[Buddy Name]',
	};

	const sections: Section[] = [
		{
			id: 'preboarding',
			name: 'Pre-boarding',
			timing: 'Before Day 1',
			color: c.purple,
			owner: 'Manager + Ops',
			items: [
				{ id: 1, task: 'Send offer letter and employment contract', owner: 'Ops', timing: 'Acceptance' },
				{ id: 2, task: 'Receive signed contract and tax/super forms', owner: 'Ops', timing: 'Before start' },
				{ id: 3, task: 'Order laptop and equipment', owner: 'Ops', timing: '1 week before' },
				{ id: 4, task: 'Create Google Workspace / M365 account', owner: 'Ops', timing: '2 days before' },
				{ id: 5, task: 'Create accounts: Slack, GitHub, Linear, 1Password', owner: 'Ops', timing: '2 days before' },
				{ id: 6, task: 'Add to team calendar and relevant Slack channels', owner: 'Manager', timing: '1 day before' },
				{ id: 7, task: 'Send welcome email with Day 1 details', owner: 'Manager', timing: '1 day before' },
				{ id: 8, task: 'Assign onboarding buddy', owner: 'Manager', timing: '1 week before' },
				{ id: 9, task: 'Prepare desk/workspace (if office)', owner: 'Ops', timing: '1 day before' },
				{ id: 10, task: 'Schedule Day 1 meetings', owner: 'Manager', timing: '2 days before' },
			],
		},
		{
			id: 'day1',
			name: 'Day 1',
			timing: 'First Day',
			color: c.cyan,
			owner: 'Manager + Buddy',
			items: [
				{ id: 1, task: 'Welcome meeting with manager', owner: 'Manager', timing: '9:00 AM' },
				{ id: 2, task: 'Hand over laptop and equipment', owner: 'Ops', timing: '9:30 AM' },
				{ id: 3, task: 'Set up laptop, accounts, 2FA', owner: 'New Hire + Buddy', timing: '10:00 AM' },
				{ id: 4, task: 'Office tour / virtual workspace tour', owner: 'Buddy', timing: '11:00 AM' },
				{ id: 5, task: 'Team lunch (virtual or in-person)', owner: 'Team', timing: '12:00 PM' },
				{ id: 6, task: 'HR paperwork and policies review', owner: 'Ops', timing: '1:30 PM' },
				{ id: 7, task: 'Security policy acknowledgement', owner: 'New Hire', timing: '2:30 PM' },
				{ id: 8, task: 'Review onboarding plan and expectations', owner: 'Manager', timing: '3:30 PM' },
				{ id: 9, task: 'End of day check-in', owner: 'Manager', timing: '4:30 PM' },
			],
		},
		{
			id: 'week1',
			name: 'Week 1',
			timing: 'Days 2-5',
			color: c.orange,
			owner: 'Manager + Buddy',
			items: [
				{ id: 1, task: 'Company overview and strategy session', owner: 'CEO/Manager', timing: 'Day 2' },
				{ id: 2, task: 'Product/service deep dive', owner: 'Manager', timing: 'Day 2' },
				{ id: 3, task: 'Meet key team members (1:1s scheduled)', owner: 'New Hire', timing: 'Days 2-5' },
				{ id: 4, task: 'Security awareness training', owner: 'New Hire', timing: 'Day 2' },
				{ id: 5, task: 'Development environment setup', owner: 'Buddy', timing: 'Day 3' },
				{ id: 6, task: 'Review delivery process and templates', owner: 'Manager', timing: 'Day 3' },
				{ id: 7, task: 'Observe a client meeting or call', owner: 'Manager', timing: 'Day 4' },
				{ id: 8, task: 'First small task assigned', owner: 'Manager', timing: 'Day 4' },
				{ id: 9, task: 'End of Week 1 check-in with manager', owner: 'Manager', timing: 'Day 5' },
				{ id: 10, task: 'Feedback: How was Week 1?', owner: 'Manager', timing: 'Day 5' },
			],
		},
		{
			id: 'week2',
			name: 'Week 2',
			timing: 'Days 6-10',
			color: c.pink,
			owner: 'Manager',
			items: [
				{ id: 1, task: 'Shadow a project (observation)', owner: 'Manager', timing: 'Week 2' },
				{ id: 2, task: 'Technical deep-dive (role-specific)', owner: 'Senior team member', timing: 'Week 2' },
				{ id: 3, task: 'Client context: review past projects', owner: 'New Hire', timing: 'Week 2' },
				{ id: 4, task: 'Complete first meaningful task', owner: 'New Hire', timing: 'Week 2' },
				{ id: 5, task: 'Receive feedback on first task', owner: 'Manager', timing: 'End of Week 2' },
				{ id: 6, task: '30-day goals discussion', owner: 'Manager', timing: 'End of Week 2' },
				{ id: 7, task: 'End of Week 2 check-in', owner: 'Manager', timing: 'Day 10' },
			],
		},
		{
			id: 'month1',
			name: 'Month 1',
			timing: 'Weeks 3-4',
			color: c.green,
			owner: 'Manager',
			items: [
				{ id: 1, task: 'Assigned to first real project', owner: 'Manager', timing: 'Week 3' },
				{ id: 2, task: 'Weekly 1:1s established', owner: 'Manager', timing: 'Ongoing' },
				{ id: 3, task: 'Contribute to team meetings', owner: 'New Hire', timing: 'Ongoing' },
				{ id: 4, task: 'Complete role-specific training', owner: 'New Hire', timing: 'Month 1' },
				{ id: 5, task: 'Meet with CEO/founder', owner: 'CEO', timing: 'Month 1' },
				{ id: 6, task: '30-day check-in and review', owner: 'Manager', timing: 'Day 30' },
				{ id: 7, task: 'Onboarding feedback survey', owner: 'New Hire', timing: 'Day 30' },
				{ id: 8, task: 'Confirm probation on track', owner: 'Manager', timing: 'Day 30' },
			],
		},
		{
			id: 'month3',
			name: '90 Days',
			timing: 'Months 2-3',
			color: c.cyan,
			owner: 'Manager',
			items: [
				{ id: 1, task: 'Own deliverables on project', owner: 'New Hire', timing: 'Month 2+' },
				{ id: 2, task: 'Client-facing (if applicable)', owner: 'New Hire', timing: 'Month 2+' },
				{ id: 3, task: '60-day check-in', owner: 'Manager', timing: 'Day 60' },
				{ id: 4, task: '90-day performance review', owner: 'Manager', timing: 'Day 90' },
				{ id: 5, task: 'Probation confirmation', owner: 'Manager + Ops', timing: 'Day 90' },
				{ id: 6, task: 'Development plan for next 6 months', owner: 'Manager', timing: 'Day 90' },
				{ id: 7, task: 'Onboarding retrospective', owner: 'Manager', timing: 'Day 90' },
			],
		},
	];

	const roleSpecificTraining: Record<string, string[]> = {
		'Delivery Lead': [
			'Discovery workshop facilitation',
			'Proposal writing',
			'Client communication templates',
			'Project management tools (Linear)',
			'Status reporting',
		],
		'AI Engineer': [
			'Prompt engineering best practices',
			'Evaluation suite development',
			'LLM API usage (Claude, etc.)',
			'Agent architecture patterns',
			'Code review standards',
		],
		'Integration Developer': [
			'Integration patterns library',
			'Azure/AWS setup',
			'CI/CD pipeline',
			'Monitoring and alerting',
			'Security best practices',
		],
	};

	let checkedItems = $state<Record<string, boolean>>({});

	function itemKey(sectionId: string, itemId: number) {
		return `${sectionId}-${itemId}`;
	}

	function toggleItem(sectionId: string, itemId: number) {
		const key = itemKey(sectionId, itemId);
		checkedItems = { ...checkedItems, [key]: !checkedItems[key] };
	}

	const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);

	const checkedCount = $derived(Object.values(checkedItems).filter(Boolean).length);

	const progressPct = $derived(Math.round((checkedCount / totalItems) * 100));
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 32px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				People Operations
			</div>
			<h1 style="font-size: 32px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">Employee Onboarding</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">From offer to fully productive team member</p>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;"
			>
				{#each [{ label: 'Name', value: newHire.name }, { label: 'Role', value: newHire.role }, { label: 'Start Date', value: newHire.startDate }, { label: 'Manager', value: newHire.manager }, { label: 'Buddy', value: newHire.buddy }] as field}
					<div>
						<div style="font-size: 10px; color: {c.slate}; margin-bottom: 4px;">{field.label}</div>
						<div style="font-size: 13px; color: {c.white};">{field.value}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
			<div
				style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;"
			>
				<div>
					<div style="font-size: 14px; font-weight: 600; color: {c.white};">Onboarding Progress</div>
					<div style="font-size: 12px; color: {c.lightSlate};">
						{checkedCount} of {totalItems} tasks complete
					</div>
				</div>
				<div style="font-size: 28px; font-weight: 700; color: {c.cyan};">{progressPct}%</div>
			</div>
			<div
				style="height: 8px; background-color: {pageBg}; border-radius: 4px; overflow: hidden;"
			>
				<div
					style="width: {(checkedCount / totalItems) * 100}%; height: 100%; background-color: {c.cyan}; border-radius: 4px; transition: width 0.3s;"
				></div>
			</div>
			<div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
				{#each sections as section}
					{@const sectionChecked = section.items.filter((item) => checkedItems[itemKey(section.id, item.id)]).length}
					{@const pct = Math.round((sectionChecked / section.items.length) * 100)}
					<div style="flex: 1; min-width: 72px; text-align: center;">
						<div
							style="height: 4px; background-color: {pct === 100
								? section.color
								: pct > 0
									? `${section.color}80`
									: pageBg}; border-radius: 2px; margin-bottom: 4px;"
						></div>
						<div style="font-size: 9px; color: {c.slate};">{section.name}</div>
					</div>
				{/each}
			</div>
		</div>

		{#each sections as section}
			<div
				style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden; margin-bottom: 20px;"
			>
				<div
					style="padding: 16px 24px; border-bottom: 1px solid {c.slate}33; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;"
				>
					<div style="display: flex; align-items: center; gap: 12px;">
						<div
							style="width: 4px; height: 32px; background-color: {section.color}; border-radius: 2px;"
						></div>
						<div>
							<h2 style="font-size: 16px; font-weight: 600; color: {c.white}; margin: 0;">{section.name}</h2>
							<div style="font-size: 11px; color: {c.slate};">
								{section.timing} • Owner: {section.owner}
							</div>
						</div>
					</div>
					<div style="font-size: 12px; color: {section.color};">
						{section.items.filter((item) => checkedItems[itemKey(section.id, item.id)]).length}/{section.items
							.length}
					</div>
				</div>
				<div style="padding: 16px 24px;">
					<div style="display: flex; flex-direction: column; gap: 6px;">
						{#each section.items as item}
							{@const done = checkedItems[itemKey(section.id, item.id)]}
							<button
								type="button"
								onclick={() => toggleItem(section.id, item.id)}
								style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; background-color: {pageBg}; border-radius: 8px; cursor: pointer; border: none; text-align: left; width: 100%;"
							>
								<div
									style="width: 20px; height: 20px; border-radius: 4px; border: 2px solid {done
										? c.green
										: c.slate}; background-color: {done ? `${c.green}33` : 'transparent'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"
								>
									{#if done}
										<span style="color: {c.green}; font-size: 12px;">✓</span>
									{/if}
								</div>
								<div style="flex: 1;">
									<span
										style="font-size: 13px; color: {done ? c.lightSlate : c.white}; text-decoration: {done
											? 'line-through'
											: 'none'};"
									>
										{item.task}
									</span>
								</div>
								<span style="font-size: 10px; color: {c.slate}; min-width: 80px; text-align: right;"
									>{item.owner}</span
								>
								<span style="font-size: 10px; color: {c.slate}; min-width: 80px; text-align: right;"
									>{item.timing}</span
								>
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Role-Specific Training</h2>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;"
			>
				{#each Object.entries(roleSpecificTraining) as [role, items], i}
					<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
						<div
							style="font-size: 14px; font-weight: 600; color: {[c.orange, c.cyan, c.purple][i]}; margin-bottom: 12px;"
						>
							{role}
						</div>
						<div style="display: flex; flex-direction: column; gap: 6px;">
							{#each items as line}
								<div
									style="font-size: 11px; color: {c.lightSlate}; display: flex; align-items: center; gap: 8px;"
								>
									<span style="color: {[c.orange, c.cyan, c.purple][i]};">→</span>
									{line}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Key Contacts & Resources</h2>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">People</div>
					{#each [{ role: 'Your Manager', name: newHire.manager }, { role: 'Your Buddy', name: newHire.buddy }, { role: 'HR/Ops', name: '[Ops Contact]' }, { role: 'IT Support', name: '[IT Contact]' }] as contact}
						<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
							<span style="font-size: 12px; color: {c.slate};">{contact.role}</span>
							<span style="font-size: 12px; color: {c.lightSlate};">{contact.name}</span>
						</div>
					{/each}
				</div>
				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.purple}; margin-bottom: 12px;">Resources</div>
					{#each [{ name: 'Employee Handbook', link: 'Internal wiki' }, { name: 'Security Policy', link: 'Internal wiki' }, { name: 'Delivery Templates', link: 'Shared drive' }, { name: 'Knowledge Base', link: 'Internal wiki' }] as resource}
						<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
							<span style="font-size: 12px; color: {c.lightSlate};">{resource.name}</span>
							<span style="font-size: 12px; color: {c.purple};">{resource.link}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Employee Onboarding Checklist v1.0</div>
		</div>
	</div>
</div>
