<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = '#0F172A';

	type Team = {
		deliveryLeads: number;
		aiEngineers: number;
		integrationDevs: number;
		solutionsArchitect: number;
		ops: number;
	};

	let team = $state<Team>({
		deliveryLeads: 2,
		aiEngineers: 2,
		integrationDevs: 2,
		solutionsArchitect: 1,
		ops: 1,
	});

	const projectTypes = {
		pilot: { name: 'Pilot', duration: 4, dlHours: 40, aiHours: 60, idHours: 40, saHours: 8, revenue: 32500 },
		standard: { name: 'Standard', duration: 8, dlHours: 80, aiHours: 120, idHours: 100, saHours: 16, revenue: 80000 },
		enterprise: {
			name: 'Enterprise',
			duration: 16,
			dlHours: 160,
			aiHours: 200,
			idHours: 180,
			saHours: 40,
			revenue: 200000,
		},
	} as const;

	const hoursPerMonth = 140;

	const pipeline = [
		{ name: 'Coastal Manufacturing', type: 'standard' as const, status: 'Active', startMonth: 0, completion: 75 },
		{ name: 'Metro Financial', type: 'pilot' as const, status: 'Active', startMonth: 1, completion: 25 },
		{ name: 'BuildCorp Holdings', type: 'standard' as const, status: 'Starting', startMonth: 2, completion: 0 },
		{
			name: 'Pacific Logistics',
			type: 'enterprise' as const,
			status: 'Pipeline',
			startMonth: 3,
			completion: 0,
		},
		{ name: 'Acme Industries', type: 'pilot' as const, status: 'Pipeline', startMonth: 4, completion: 0 },
	];

	const monthlyCapacity = $derived({
		dl: team.deliveryLeads * hoursPerMonth,
		ai: team.aiEngineers * hoursPerMonth,
		id: team.integrationDevs * hoursPerMonth,
		sa: team.solutionsArchitect * hoursPerMonth,
	});

	const utilization = $derived.by(() => {
		const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
		return months.map((month, monthIdx) => {
			let dlHours = 0,
				aiHours = 0,
				idHours = 0,
				saHours = 0;

			for (const project of pipeline) {
				const type = projectTypes[project.type];
				const projectMonths = type.duration / 4;

				if (monthIdx >= project.startMonth && monthIdx < project.startMonth + projectMonths) {
					dlHours += type.dlHours / projectMonths;
					aiHours += type.aiHours / projectMonths;
					idHours += type.idHours / projectMonths;
					saHours += type.saHours / projectMonths;
				}
			}

			const cap = monthlyCapacity;
			return {
				month,
				dl: {
					used: dlHours,
					capacity: cap.dl,
					pct: Math.round((dlHours / cap.dl) * 100),
				},
				ai: {
					used: aiHours,
					capacity: cap.ai,
					pct: Math.round((aiHours / cap.ai) * 100),
				},
				id: {
					used: idHours,
					capacity: cap.id,
					pct: Math.round((idHours / cap.id) * 100),
				},
				sa: {
					used: saHours,
					capacity: cap.sa,
					pct: Math.round((saHours / cap.sa) * 100),
				},
			};
		});
	});

	function calculateMaxProjects(type: keyof typeof projectTypes) {
		const project = projectTypes[type];
		const cap = monthlyCapacity;
		const monthlyHours = {
			dl: project.dlHours / (project.duration / 4),
			ai: project.aiHours / (project.duration / 4),
			id: project.idHours / (project.duration / 4),
			sa: project.saHours / (project.duration / 4),
		};

		const maxByDL = Math.floor(cap.dl / monthlyHours.dl);
		const maxByAI = Math.floor(cap.ai / monthlyHours.ai);
		const maxByID = Math.floor(cap.id / monthlyHours.id);
		const maxBySA = Math.floor(cap.sa / monthlyHours.sa);

		return Math.min(maxByDL, maxByAI, maxByID, maxBySA);
	}

	const quarterlyCapacity = $derived.by(() => {
		const avgProjectRevenue =
			projectTypes.standard.revenue * 0.4 + projectTypes.pilot.revenue * 0.4 + projectTypes.enterprise.revenue * 0.2;
		const avgDuration =
			projectTypes.standard.duration * 0.4 + projectTypes.pilot.duration * 0.4 + projectTypes.enterprise.duration * 0.2;

		const maxConcurrent = calculateMaxProjects('standard');
		const projectsPerQuarter = maxConcurrent * (12 / avgDuration);

		return Math.round(projectsPerQuarter * avgProjectRevenue);
	});

	function utilColor(pct: number) {
		if (pct > 100) return c.red;
		if (pct > 85) return c.orange;
		if (pct > 60) return c.green;
		return c.slate;
	}

	const utilizationStress = $derived(utilization.some((u) => u.ai.pct > 85 || u.dl.pct > 85));

	function bump(key: keyof Team, delta: number) {
		team = { ...team, [key]: Math.max(0, team[key] + delta) };
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1100px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 32px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				Resource Management
			</div>
			<h1 style="font-size: 32px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">Capacity Planning</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">Forecast utilization and identify hiring needs</p>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Current Team</h2>

			<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;">
				{#each [{ key: 'deliveryLeads' as const, label: 'Delivery Leads', color: c.orange }, { key: 'aiEngineers' as const, label: 'AI Engineers', color: c.cyan }, { key: 'integrationDevs' as const, label: 'Integration Devs', color: c.purple }, { key: 'solutionsArchitect' as const, label: 'Solutions Architect', color: c.slate }, { key: 'ops' as const, label: 'Ops/Support', color: c.green }] as role}
					<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px; text-align: center;">
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 8px;">{role.label}</div>
						<div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
							<button
								type="button"
								onclick={() => bump(role.key, -1)}
								style="width: 28px; height: 28px; border-radius: 6px; border: none; background-color: {c.deepNavy}; color: {c.lightSlate}; cursor: pointer; font-size: 16px;"
							>
								−
							</button>
							<div style="font-size: 28px; font-weight: 700; color: {role.color};">{team[role.key]}</div>
							<button
								type="button"
								onclick={() => bump(role.key, 1)}
								style="width: 28px; height: 28px; border-radius: 6px; border: none; background-color: {c.deepNavy}; color: {c.lightSlate}; cursor: pointer; font-size: 16px;"
							>
								+
							</button>
						</div>
						<div style="font-size: 10px; color: {c.slate}; margin-top: 8px;">{hoursPerMonth} hrs/mo each</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Max Concurrent (Standard)</div>
				<div style="font-size: 32px; font-weight: 700; color: {c.cyan};">{calculateMaxProjects('standard')}</div>
				<div style="font-size: 10px; color: {c.lightSlate};">projects at once</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Max Concurrent (Pilot)</div>
				<div style="font-size: 32px; font-weight: 700; color: {c.purple};">{calculateMaxProjects('pilot')}</div>
				<div style="font-size: 10px; color: {c.lightSlate};">projects at once</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Quarterly Revenue Capacity</div>
				<div style="font-size: 32px; font-weight: 700; color: {c.green};">
					${(quarterlyCapacity / 1000).toFixed(0)}K
				</div>
				<div style="font-size: 10px; color: {c.lightSlate};">at current team size</div>
			</div>
			<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Annual Revenue Capacity</div>
				<div style="font-size: 32px; font-weight: 700; color: {c.green};">
					${((quarterlyCapacity * 4) / 1000000).toFixed(1)}M
				</div>
				<div style="font-size: 10px; color: {c.lightSlate};">theoretical max</div>
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">6-Month Utilization Forecast</h2>

			<div style="overflow-x: auto;">
				<table style="width: 100%; border-collapse: collapse; min-width: 700px;">
					<thead>
						<tr>
							<th
								style="text-align: left; padding: 12px; font-size: 11px; color: {c.slate}; border-bottom: 1px solid {c.slate}33;"
							>
								Role
							</th>
							{#each utilization as u}
								<th
									style="text-align: center; padding: 12px; font-size: 11px; color: {c.slate}; border-bottom: 1px solid {c.slate}33;"
								>
									{u.month}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each [{ key: 'dl' as const, label: 'Delivery Lead', color: c.orange }, { key: 'ai' as const, label: 'AI Engineer', color: c.cyan }, { key: 'id' as const, label: 'Integration Dev', color: c.purple }, { key: 'sa' as const, label: 'Solutions Architect', color: c.slate }] as role}
							<tr style="border-bottom: 1px solid {c.slate}22;">
								<td style="padding: 16px 12px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<div style="width: 8px; height: 8px; border-radius: 50%; background-color: {role.color};"></div>
										<span style="font-size: 13px; color: {c.white};">{role.label}</span>
									</div>
								</td>
								{#each utilization as u}
									{@const data = u[role.key]}
									<td style="padding: 12px; text-align: center;">
										<div
											style="padding: 8px 12px; background-color: {utilColor(data.pct)}20; border-radius: 8px; display: inline-block; min-width: 60px;"
										>
											<div style="font-size: 16px; font-weight: 700; color: {utilColor(data.pct)};">
												{data.pct}%
											</div>
											<div style="font-size: 9px; color: {c.slate};">
												{Math.round(data.used)} / {data.capacity} hrs
											</div>
										</div>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div style="display: flex; justify-content: center; gap: 24px; margin-top: 20px; font-size: 11px; flex-wrap: wrap;">
				<span><span style="color: {c.slate};">●</span> Under 60% (Available)</span>
				<span><span style="color: {c.green};">●</span> 60-85% (Healthy)</span>
				<span><span style="color: {c.orange};">●</span> 85-100% (Near Capacity)</span>
				<span><span style="color: {c.red};">●</span> Over 100% (Overloaded)</span>
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Current Pipeline</h2>

			<div style="display: flex; flex-direction: column; gap: 12px;">
				{#each pipeline as project}
					<div
						style="background-color: {pageBg}; border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;"
					>
						<div style="flex: 1; min-width: 200px;">
							<div style="font-size: 14px; font-weight: 600; color: {c.white};">{project.name}</div>
							<div style="font-size: 11px; color: {c.slate};">
								{projectTypes[project.type].name} • ${(projectTypes[project.type].revenue / 1000).toFixed(0)}K • {projectTypes[
									project.type
								].duration} weeks
							</div>
						</div>
						<div style="width: 100px; min-width: 100px;">
							<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
								<span style="font-size: 10px; color: {c.slate};">Progress</span>
								<span style="font-size: 10px; color: {c.cyan};">{project.completion}%</span>
							</div>
							<div style="height: 6px; background-color: {c.deepNavy}; border-radius: 3px; overflow: hidden;">
								<div
									style="width: {project.completion}%; height: 100%; background-color: {c.cyan}; border-radius: 3px;"
								></div>
							</div>
						</div>
						<div
							style="padding: 4px 12px; background-color: {project.status === 'Active'
								? `${c.green}20`
								: project.status === 'Starting'
									? `${c.orange}20`
									: `${c.purple}20`}; color: {project.status === 'Active'
								? c.green
								: project.status === 'Starting'
									? c.orange
									: c.purple}; border-radius: 6px; font-size: 11px; font-weight: 600;"
						>
							{project.status}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 24px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 20px 0;">Hiring Triggers</h2>

			<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 12px;">When to Hire</div>
					{#each [{ trigger: 'Any role > 85% utilization for 2+ months', action: 'Start hiring process' }, { trigger: 'Pipeline > 80% of capacity', action: 'Post job, begin screening' }, { trigger: 'Won deal would push role > 100%', action: 'Contractor or delay start' }, { trigger: 'Lost deal due to capacity', action: 'Hire immediately' }] as item, i}
						<div
							style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: {i < 3
								? `1px solid ${c.slate}22`
								: 'none'};"
						>
							<div style="font-size: 12px; color: {c.white}; margin-bottom: 2px;">{item.trigger}</div>
							<div style="font-size: 11px; color: {c.green};">→ {item.action}</div>
						</div>
					{/each}
				</div>

				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.orange}; margin-bottom: 12px;">
						Hiring Lead Time
					</div>
					{#each [{ role: 'AI Engineer', time: '6-8 weeks', note: 'Scarce talent, start early' }, { role: 'Delivery Lead', time: '4-6 weeks', note: 'Moderate availability' }, { role: 'Integration Dev', time: '4-6 weeks', note: 'Moderate availability' }, { role: 'Solutions Architect', time: '8-12 weeks', note: 'Senior hire, network first' }] as item}
						<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
							<div>
								<div style="font-size: 12px; color: {c.white};">{item.role}</div>
								<div style="font-size: 10px; color: {c.slate};">{item.note}</div>
							</div>
							<div style="font-size: 12px; color: {c.orange}; font-weight: 600;">{item.time}</div>
						</div>
					{/each}
				</div>
			</div>

			<div
				style="margin-top: 20px; padding: 16px 20px; background-color: {utilizationStress ? `${c.orange}15` : `${c.green}15`}; border-radius: 12px; border: 1px solid {utilizationStress ? `${c.orange}30` : `${c.green}30`};"
			>
				<div style="font-size: 13px; color: {c.white};">
					<strong style="color: {utilizationStress ? c.orange : c.green};">Recommendation: </strong>
					{utilizationStress
						? 'Consider hiring an additional AI Engineer or Delivery Lead in the next 4-6 weeks to handle pipeline growth.'
						: 'Current team capacity is healthy. Monitor pipeline and utilization monthly.'}
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Capacity Planning Model v1.0</div>
		</div>
	</div>
</div>
