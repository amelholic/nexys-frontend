<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';

	const agenda = [
		{ num: 1, item: 'Performance Summary', time: '10 min' },
		{ num: 2, item: 'Value Delivered', time: '10 min' },
		{ num: 3, item: 'Challenges & Actions', time: '10 min' },
		{ num: 4, item: 'Roadmap & Next Quarter', time: '10 min' },
		{ num: 5, item: 'Feedback & Discussion', time: '15 min' },
		{ num: 6, item: 'Action Items & Close', time: '5 min' }
	] as const;

	const metrics = [
		{ label: 'Documents Processed', value: '3,241', change: '+12%', target: '3,000', color: c.cyan },
		{ label: 'Auto-Process Rate', value: '94.2%', change: '+2.1%', target: '92%', color: c.green },
		{ label: 'Avg Processing Time', value: '18.3s', change: '-15%', target: '25s', color: c.purple },
		{ label: 'Accuracy Rate', value: '98.1%', change: '+0.3%', target: '97%', color: c.green }
	] as const;

	const volume = [
		{ month: 'Jan', value: 980 },
		{ month: 'Feb', value: 1050 },
		{ month: 'Mar', value: 1211 }
	] as const;

	function challengeImpactColor(impact: string) {
		if (impact === 'High') return c.red;
		if (impact === 'Medium') return c.orange;
		return c.slate;
	}

	const challenges = [
		{
			challenge: 'New invoice format from PackagingCo caused extraction errors',
			impact: 'Medium',
			resolution: 'Updated prompts and added format to training set',
			status: 'Resolved',
			date: '15 Feb 2026'
		},
		{
			challenge: 'SAP API intermittent timeouts during month-end',
			impact: 'Low',
			resolution: 'Implemented retry logic and queue buffering',
			status: 'Resolved',
			date: '28 Feb 2026'
		},
		{
			challenge: 'Three-way match logic required refinement for partial deliveries',
			impact: 'Medium',
			resolution: 'Enhanced matching logic to handle partial GRs',
			status: 'Resolved',
			date: '10 Mar 2026'
		}
	] as const;

	const q2Priorities = [
		'Expand to credit note processing',
		'Dashboard enhancements per feedback',
		'Performance optimization (target: 15s avg)',
		'Monthly business review cadence'
	] as const;

	const expansions = [
		{ item: 'Contract Review Agent', status: 'Discussing', timeline: 'Q3 2026' },
		{ item: 'Vendor Onboarding Agent', status: 'Future', timeline: 'Q4 2026' },
		{ item: 'Additional Invoice Volume', status: 'Confirmed', timeline: 'Q2 2026' }
	] as const;

	const feedbackScores = [
		{ q: 'Overall Satisfaction', score: 4 },
		{ q: 'Communication Quality', score: 5 },
		{ q: 'Technical Support', score: 4 },
		{ q: 'Value for Investment', score: 5 },
		{ q: 'Likelihood to Recommend', score: 4 }
	] as const;

	const actionItems = [
		{ action: 'Share Q2 roadmap document', owner: aiFlowBrand, due: '10 Apr 2026', status: 'Not Started' },
		{ action: 'Schedule contract review discovery session', owner: 'Both', due: '15 Apr 2026', status: 'Not Started' },
		{ action: 'Provide additional user training for new hires', owner: aiFlowBrand, due: '20 Apr 2026', status: 'Not Started' },
		{ action: 'Review dashboard enhancement requirements', owner: 'Coastal', due: '12 Apr 2026', status: 'Not Started' }
	] as const;
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgDark}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div style:max-width="900px" style:margin="0 auto">
		<div
			style:background-color={c.deepNavy}
			style:border-radius="16px"
			style:padding="48px"
			style:margin-bottom="32px"
			style:text-align="center"
		>
			<div style:font-size="14px" style:color={c.cyan} style:margin-bottom="16px">
				Quarterly Business Review · {aiFlowBrand}
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.white} style:margin="0 0 16px 0">
				Coastal Manufacturing
			</h1>
			<div style:font-size="18px" style:color={c.lightSlate} style:margin-bottom="32px">Q1 2026 Review</div>
			<div style:display="flex" style:justify-content="center" style:gap="32px" style:font-size="13px" style:color={c.slate}>
				<span>Period: Jan - Mar 2026</span>
				<span>Meeting: 5 Apr 2026</span>
				<span>Prepared by: Sarah Chen</span>
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 20px 0">Agenda</h2>
			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="12px">
				{#each agenda as item (item.num)}
					<div
						style:display="flex"
						style:align-items="center"
						style:gap="16px"
						style:background-color={c.pageBgDark}
						style:border-radius="8px"
						style:padding="16px"
					>
						<div
							style:width="32px"
							style:height="32px"
							style:border-radius="50%"
							style:background-color={c.cyan}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-weight="700"
							style:font-size="14px"
						>
							{item.num}
						</div>
						<div style:flex="1">
							<div style:font-size="14px" style:color={c.white}>{item.item}</div>
						</div>
						<div style:font-size="12px" style:color={c.slate}>{item.time}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">1. Performance Summary</h2>
			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="16px" style:margin-bottom="24px">
				{#each metrics as metric (metric.label)}
					<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
						<div style:font-size="11px" style:color={c.slate} style:margin-bottom="4px">{metric.label}</div>
						<div style:font-size="28px" style:font-weight="700" style:color={c.white} style:margin-bottom="4px">
							{metric.value}
						</div>
						<div style:display="flex" style:justify-content="space-between" style:align-items="center">
							<span style:font-size="11px" style:color={metric.color}>{metric.change} vs last Q</span>
							<span style:font-size="10px" style:color={c.slate}>Target: {metric.target}</span>
						</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
				<div style:font-size="12px" style:color={c.lightSlate} style:margin-bottom="16px">Monthly Volume Trend</div>
				<div style:display="flex" style:align-items="end" style:gap="16px" style:height="100px">
					{#each volume as m (m.month)}
						<div style:flex="1" style:text-align="center">
							<div
								style:height="{(m.value / 1500) * 100}%"
								style:background-color={c.cyan}
								style:border-radius="4px 4px 0 0"
								style:margin-bottom="8px"
								style:min-height="20px"
							></div>
							<div style:font-size="12px" style:color={c.white}>{m.value.toLocaleString()}</div>
							<div style:font-size="10px" style:color={c.slate}>{m.month}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">2. Value Delivered</h2>
			<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="16px" style:margin-bottom="24px">
				{#each [{ label: 'Time Saved', value: '847 hrs', desc: 'vs manual processing' }, { label: 'Cost Savings', value: '$38,115', desc: 'this quarter' }, { label: 'Error Reduction', value: '73%', desc: 'vs pre-automation' }] as item (item.label)}
					<div
						style:background-color="{c.green}15"
						style:border-radius="12px"
						style:padding="24px"
						style:text-align="center"
						style:border="1px solid {c.green}30"
					>
						<div style:font-size="28px" style:font-weight="700" style:color={c.green}>{item.value}</div>
						<div style:font-size="12px" style:color={c.lightSlate}>{item.label}</div>
						<div style:font-size="10px" style:color={c.slate}>{item.desc}</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
				<div style:font-size="14px" style:font-weight="600" style:color={c.white} style:margin-bottom="12px">ROI Summary</div>
				<div style:display="grid" style:grid-template-columns="1fr 1fr 1fr" style:gap="16px">
					<div>
						<div style:font-size="11px" style:color={c.slate}>Q1 Investment</div>
						<div style:font-size="18px" style:font-weight="600" style:color={c.white}>$13,500</div>
					</div>
					<div>
						<div style:font-size="11px" style:color={c.slate}>Q1 Savings</div>
						<div style:font-size="18px" style:font-weight="600" style:color={c.green}>$38,115</div>
					</div>
					<div>
						<div style:font-size="11px" style:color={c.slate}>Q1 ROI</div>
						<div style:font-size="18px" style:font-weight="600" style:color={c.cyan}>182%</div>
					</div>
				</div>
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">3. Challenges & Actions Taken</h2>
			<div style:display="flex" style:flex-direction="column" style:gap="16px">
				{#each challenges as item (item.challenge)}
					<div
						style:background-color={c.pageBgDark}
						style:border-radius="12px"
						style:padding="20px"
						style:border-left="4px solid {c.green}"
					>
						<div
							style:display="flex"
							style:justify-content="space-between"
							style:align-items="flex-start"
							style:margin-bottom="8px"
						>
							<div style:font-size="14px" style:color={c.white}>{item.challenge}</div>
							<span
								style:font-size="10px"
								style:padding="2px 8px"
								style:background-color="{c.green}20"
								style:color={c.green}
								style:border-radius="4px"
							>
								{item.status}
							</span>
						</div>
						<div style:display="flex" style:gap="24px" style:font-size="12px" style:color={c.lightSlate}>
							<span
								>Impact:
								<span style:color={challengeImpactColor(item.impact)}>{item.impact}</span></span
							>
							<span>Resolution: {item.resolution}</span>
							<span style:color={c.slate}>Resolved: {item.date}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">4. Roadmap & Next Quarter</h2>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="24px">
				<div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="16px">
						Q2 2026 Priorities
					</div>
					<div style:display="flex" style:flex-direction="column" style:gap="8px">
						{#each q2Priorities as item, i (item)}
							<div
								style:display="flex"
								style:align-items="center"
								style:gap="12px"
								style:background-color={c.pageBgDark}
								style:border-radius="8px"
								style:padding="12px"
							>
								<div
									style:width="24px"
									style:height="24px"
									style:border-radius="50%"
									style:background-color={c.cyan}
									style:display="flex"
									style:align-items="center"
									style:justify-content="center"
									style:color={c.white}
									style:font-size="12px"
									style:font-weight="700"
								>
									{i + 1}
								</div>
								<span style:font-size="13px" style:color={c.lightSlate}>{item}</span>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.purple} style:margin-bottom="16px">
						Expansion Opportunities
					</div>
					<div style:display="flex" style:flex-direction="column" style:gap="8px">
						{#each expansions as opp (opp.item)}
							<div
								style:display="flex"
								style:justify-content="space-between"
								style:align-items="center"
								style:background-color={c.pageBgDark}
								style:border-radius="8px"
								style:padding="12px"
							>
								<span style:font-size="13px" style:color={c.lightSlate}>{opp.item}</span>
								<div style:display="flex" style:gap="8px">
									<span
										style:font-size="10px"
										style:padding="2px 8px"
										style:background-color="{c.purple}20"
										style:color={c.purple}
										style:border-radius="4px"
									>
										{opp.status}
									</span>
									<span style:font-size="10px" style:color={c.slate}>{opp.timeline}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px" style:margin-bottom="24px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">5. Your Feedback</h2>
			<div style:display="grid" style:grid-template-columns="repeat(5, 1fr)" style:gap="8px" style:margin-bottom="24px">
				{#each feedbackScores as item (item.q)}
					<div style:background-color={c.pageBgDark} style:border-radius="8px" style:padding="16px" style:text-align="center">
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="8px">{item.q}</div>
						<div style:display="flex" style:justify-content="center" style:gap="4px">
							{#each [1, 2, 3, 4, 5] as n (n)}
								<div
									style:width="16px"
									style:height="16px"
									style:border-radius="50%"
									style:background-color={n <= item.score ? c.cyan : c.deepNavy}
								></div>
							{/each}
						</div>
						<div style:font-size="14px" style:font-weight="700" style:color={c.white} style:margin-top="8px">
							{item.score}/5
						</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
				<div style:font-size="12px" style:color={c.lightSlate} style:margin-bottom="8px">Open Comments</div>
				<div style:font-size="13px" style:color={c.white} style:font-style="italic">
					"The team has been incredibly responsive. We've seen real efficiency gains and our AP team is finally able to focus on
					exceptions rather than data entry. Looking forward to expanding to other processes."
				</div>
				<div style:font-size="11px" style:color={c.slate} style:margin-top="8px">— Janet Liu, Finance Director</div>
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px">
			<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">6. Action Items</h2>
			<table style:width="100%" style:border-collapse="collapse">
				<thead>
					<tr>
						{#each ['Action', 'Owner', 'Due Date', 'Status'] as h (h)}
							<th
								style:text-align="left"
								style:padding="12px"
								style:font-size="11px"
								style:color={c.slate}
								style:text-transform="uppercase"
								style:border-bottom="1px solid {c.slate}33"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each actionItems as item (item.action)}
						<tr style:border-bottom="1px solid {c.slate}22">
							<td style:padding="14px 12px" style:font-size="13px" style:color={c.white}>{item.action}</td>
							<td style:padding="14px 12px" style:font-size="12px" style:color={c.lightSlate}>{item.owner}</td>
							<td style:padding="14px 12px" style:font-size="12px" style:color={c.lightSlate}>{item.due}</td>
							<td style:padding="14px 12px">
								<span
									style:font-size="10px"
									style:padding="4px 10px"
									style:background-color="{c.slate}20"
									style:color={c.slate}
									style:border-radius="4px"
								>
									{item.status}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div style:margin-top="24px" style:padding="20px" style:background-color={c.pageBgDark} style:border-radius="12px">
				<div style:font-size="13px" style:color={c.lightSlate}>
					<strong style:color={c.cyan}>Next QBR:</strong> July 2026 (Q2 Review)
				</div>
			</div>
		</div>

		<div style:text-align="center" style:margin-top="40px" style:font-size="12px" style:color={c.slate}>
			<div style:color={c.cyan} style:font-weight="600">{aiFlowBrand}</div>
			<div style:margin-top="4px">Quarterly Business Review Template v1.0</div>
		</div>
	</div>
</div>
