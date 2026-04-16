<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';

	let scores = $state({
		agentPerformance: 4,
		engagement: 3,
		satisfaction: 4,
		adoption: 3,
		commercials: 5,
		expansion: 4
	});

	const criteria = [
		{
			id: 'agentPerformance' as const,
			name: 'Agent Performance',
			weight: 25,
			description: 'Is the agent meeting SLAs and accuracy targets?',
			levels: [
				{ score: 1, label: 'Critical issues', color: c.red },
				{ score: 2, label: 'Below targets', color: c.orange },
				{ score: 3, label: 'Meeting basic', color: c.yellow },
				{ score: 4, label: 'Stable', color: c.green },
				{ score: 5, label: 'Exceeding', color: c.green }
			]
		},
		{
			id: 'engagement' as const,
			name: 'Client Engagement',
			weight: 20,
			description: 'How engaged is the client with us?',
			levels: [
				{ score: 1, label: 'Unresponsive', color: c.red },
				{ score: 2, label: 'Minimal', color: c.orange },
				{ score: 3, label: 'Monthly', color: c.yellow },
				{ score: 4, label: 'Regular', color: c.green },
				{ score: 5, label: 'Strong', color: c.green }
			]
		},
		{
			id: 'satisfaction' as const,
			name: 'Client Satisfaction',
			weight: 20,
			description: 'How satisfied is the client overall?',
			levels: [
				{ score: 1, label: 'Dissatisfied', color: c.red },
				{ score: 2, label: 'Frustrated', color: c.orange },
				{ score: 3, label: 'Neutral', color: c.yellow },
				{ score: 4, label: 'Satisfied', color: c.green },
				{ score: 5, label: 'Referenceable', color: c.green }
			]
		},
		{
			id: 'adoption' as const,
			name: 'User Adoption',
			weight: 15,
			description: 'Are users actually using the agent?',
			levels: [
				{ score: 1, label: 'Not using', color: c.red },
				{ score: 2, label: 'Low usage', color: c.orange },
				{ score: 3, label: 'Moderate', color: c.yellow },
				{ score: 4, label: 'Good', color: c.green },
				{ score: 5, label: 'Full adoption', color: c.green }
			]
		},
		{
			id: 'commercials' as const,
			name: 'Commercial Health',
			weight: 10,
			description: 'Are invoices paid on time?',
			levels: [
				{ score: 1, label: '60+ days late', color: c.red },
				{ score: 2, label: '30+ days late', color: c.orange },
				{ score: 3, label: '<30 days late', color: c.yellow },
				{ score: 4, label: 'On time', color: c.green },
				{ score: 5, label: 'Early payer', color: c.green }
			]
		},
		{
			id: 'expansion' as const,
			name: 'Expansion Potential',
			weight: 10,
			description: 'Is there opportunity for more?',
			levels: [
				{ score: 1, label: 'No opportunity', color: c.red },
				{ score: 2, label: 'Unlikely', color: c.orange },
				{ score: 3, label: 'Possible', color: c.yellow },
				{ score: 4, label: 'Discussing', color: c.green },
				{ score: 5, label: 'Imminent', color: c.green }
			]
		}
	] as const;

	const clients = [
		{ name: 'Coastal Manufacturing', score: 85, agents: 2, mrr: 4500, renewal: '01 Apr 2027' },
		{ name: 'Metro Financial', score: 72, agents: 1, mrr: 3000, renewal: '15 Jul 2026' },
		{ name: 'BuildCorp Holdings', score: 45, agents: 1, mrr: 3500, renewal: '01 Mar 2026' }
	] as const;

	const totalWeight = criteria.reduce((acc, x) => acc + x.weight, 0);

	const overallScore = $derived.by(() => {
		const weightedSum = criteria.reduce((acc, cr) => acc + scores[cr.id] * cr.weight, 0);
		return Math.round((weightedSum / totalWeight) * 20);
	});

	function getHealthStatus(score: number) {
		if (score >= 80) return { status: 'Healthy', color: c.green, icon: '●', action: 'Maintain & expand' };
		if (score >= 60) return { status: 'Moderate', color: c.yellow, icon: '●', action: 'Monitor & improve' };
		if (score >= 40) return { status: 'At Risk', color: c.orange, icon: '●', action: 'Intervention needed' };
		return { status: 'Critical', color: c.red, icon: '●', action: 'Immediate escalation' };
	}

	const health = $derived(getHealthStatus(overallScore));

	const trendScores = $derived([65, 70, 68, 75, 72, 78, 82, 80, 85, 83, 88, overallScore]);
	const monthLetters = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const;

	function setScore(id: keyof typeof scores, value: number) {
		scores = { ...scores, [id]: value };
	}
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgDark}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div style:max-width="1000px" style:margin="0 auto">
		<div style:text-align="center" style:margin-bottom="32px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="12px"
			>
				Client Success · {aiFlowBrand}
			</div>
			<h1 style:font-size="32px" style:font-weight="700" style:color={c.white} style:margin="0 0 8px 0">
				Client Health Scorecard
			</h1>
			<p style:font-size="14px" style:color={c.lightSlate} style:margin="0">
				Monitor client health and identify at-risk accounts
			</p>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="24px" style:margin-bottom="32px">
			<h2 style:font-size="16px" style:font-weight="600" style:color={c.white} style:margin="0 0 20px 0">Portfolio Overview</h2>
			<div style:display="flex" style:flex-direction="column" style:gap="12px">
				{#each clients as client (client.name)}
					{@const clientHealth = getHealthStatus(client.score)}
					<div
						style:background-color={c.pageBgDark}
						style:border-radius="12px"
						style:padding="16px 20px"
						style:display="flex"
						style:align-items="center"
						style:gap="20px"
						style:border-left="4px solid {clientHealth.color}"
					>
						<div style:flex="1">
							<div style:font-size="14px" style:font-weight="600" style:color={c.white}>{client.name}</div>
							<div style:font-size="11px" style:color={c.slate}>
								{client.agents} agent(s) • Renewal: {client.renewal}
							</div>
						</div>
						<div style:text-align="center">
							<div style:font-size="10px" style:color={c.slate}>MRR</div>
							<div style:font-size="14px" style:font-weight="600" style:color={c.cyan}>
								${client.mrr.toLocaleString()}
							</div>
						</div>
						<div style:width="100px">
							<div style:display="flex" style:justify-content="space-between" style:margin-bottom="4px">
								<span style:font-size="10px" style:color={c.slate}>Health</span>
								<span style:font-size="10px" style:color={clientHealth.color}>{client.score}</span>
							</div>
							<div style:height="6px" style:background-color={c.deepNavy} style:border-radius="3px" style:overflow="hidden">
								<div
									style:width="{client.score}%"
									style:height="100%"
									style:background-color={clientHealth.color}
									style:border-radius="3px"
								></div>
							</div>
						</div>
						<div
							style:padding="6px 12px"
							style:background-color="{clientHealth.color}20"
							style:border-radius="6px"
							style:font-size="11px"
							style:font-weight="600"
							style:color={clientHealth.color}
							style:min-width="80px"
							style:text-align="center"
						>
							{clientHealth.status}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="24px" style:margin-bottom="32px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="center" style:margin-bottom="24px">
				<div>
					<div style:font-size="12px" style:color={c.slate}>Scoring: Coastal Manufacturing</div>
					<h2 style:font-size="20px" style:font-weight="600" style:color={c.white} style:margin="4px 0 0 0">
						Individual Health Assessment
					</h2>
				</div>
				<div style:display="flex" style:align-items="center" style:gap="16px">
					<div
						style:width="100px"
						style:height="100px"
						style:border-radius="50%"
						style:border="8px solid {health.color}"
						style:display="flex"
						style:flex-direction="column"
						style:align-items="center"
						style:justify-content="center"
					>
						<div style:font-size="28px" style:font-weight="700" style:color={c.white}>{overallScore}</div>
						<div style:font-size="10px" style:color={c.slate}>/100</div>
					</div>
					<div>
						<div style:font-size="24px" style:margin-bottom="4px">{health.icon}</div>
						<div style:font-size="16px" style:font-weight="700" style:color={health.color}>{health.status}</div>
						<div style:font-size="11px" style:color={c.lightSlate}>{health.action}</div>
					</div>
				</div>
			</div>

			<div style:display="flex" style:flex-direction="column" style:gap="16px">
				{#each criteria as criterion (criterion.id)}
					<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
						<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="12px">
							<div>
								<div style:display="flex" style:align-items="center" style:gap="8px">
									<h3 style:font-size="14px" style:font-weight="600" style:color={c.white} style:margin="0">
										{criterion.name}
									</h3>
									<span style:font-size="10px" style:color={c.slate}>({criterion.weight}%)</span>
								</div>
								<p style:font-size="11px" style:color={c.slate} style:margin="4px 0 0 0">{criterion.description}</p>
							</div>
							<div
								style:font-size="24px"
								style:font-weight="700"
								style:color={criterion.levels.find((l) => l.score === scores[criterion.id])?.color ?? c.slate}
							>
								{scores[criterion.id]}
							</div>
						</div>
						<div style:display="flex" style:gap="8px">
							{#each criterion.levels as level (level.score)}
								<button
									type="button"
									onclick={() => setScore(criterion.id, level.score)}
									style:flex="1"
									style:padding="10px 8px"
									style:background-color={scores[criterion.id] === level.score ? `${level.color}20` : c.deepNavy}
									style:border={scores[criterion.id] === level.score ? `2px solid ${level.color}` : '2px solid transparent'}
									style:border-radius="8px"
									style:cursor="pointer"
									style:text-align="center"
									style:font="inherit"
									style:color="inherit"
								>
									<div style:font-size="16px" style:font-weight="700" style:color={level.color} style:margin-bottom="4px">
										{level.score}
									</div>
									<div style:font-size="9px" style:color={c.lightSlate}>{level.label}</div>
								</button>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="24px">
			<h2 style:font-size="16px" style:font-weight="600" style:color={c.white} style:margin="0 0 16px 0">
				Health Trend (12 Months)
			</h2>
			<div style:display="flex" style:align-items="end" style:gap="8px" style:height="120px">
				{#each trendScores as score, i (i)}
					{@const h = getHealthStatus(score)}
					<div style:flex="1" style:display="flex" style:flex-direction="column" style:align-items="center">
						<div
							style:width="100%"
							style:height="{score}%"
							style:background-color={h.color}
							style:border-radius="4px 4px 0 0"
							style:min-height="10px"
						></div>
						<div style:font-size="9px" style:color={c.slate} style:margin-top="4px">{monthLetters[i]}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style:text-align="center" style:margin-top="40px" style:font-size="12px" style:color={c.slate}>
			<div style:color={c.cyan} style:font-weight="600">{aiFlowBrand}</div>
			<div style:margin-top="4px">Client Health Scorecard v1.0</div>
		</div>
	</div>
</div>
