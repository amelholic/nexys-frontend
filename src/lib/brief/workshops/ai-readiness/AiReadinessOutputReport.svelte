<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const report = {
		client: '[Client Name]',
		workshopDate: '[Date]',
		reportDate: '[Date]',
		preparedBy: 'AI Flow',
		targetProcess: '[Target Process/Initiative]',
		participants: ['[Name, Role]', '[Name, Role]', '[Name, Role]'],
		executiveSummary:
			'[2-3 sentences summarising overall readiness, key strengths, critical gaps, and primary recommendation]',
		scores: {
			data: { score: 0, subScores: { availability: 0, quality: 0, governance: 0, integration: 0 } },
			technical: { score: 0, subScores: { architecture: 0, integration: 0, infrastructure: 0, itCapacity: 0 } },
			organisational: {
				score: 0,
				subScores: { sponsorship: 0, skills: 0, changeCapacity: 0, culture: 0 },
			},
			process: {
				score: 0,
				subScores: { documentation: 0, standardisation: 0, ownership: 0, measurement: 0 },
			},
			overall: 0,
		},
		gaps: [{ dimension: 'Data', gap: '[Gap description]', impact: 'High', effort: 'Medium', priority: 1 }],
		strengths: ['[Strength 1]', '[Strength 2]'],
		roadmap: [
			{ phase: 'Immediate (0-4 weeks)', actions: ['[Action 1]', '[Action 2]'] },
			{ phase: 'Short-term (1-3 months)', actions: ['[Action 1]', '[Action 2]'] },
			{ phase: 'Medium-term (3-6 months)', actions: ['[Action 1]', '[Action 2]'] },
		],
		recommendation: '[Primary recommendation: proceed, proceed with conditions, or pause and address gaps]',
	};

	function getScoreColor(score: number) {
		if (score >= 4) return c.green;
		if (score >= 3) return c.cyan;
		if (score >= 2) return c.orange;
		return c.pink;
	}

	const scoreSizes = {
		small: { box: '40px', font: '18px', label: '9px' },
		medium: { box: '56px', font: '24px', label: '10px' },
		large: { box: '80px', font: '36px', label: '12px' },
	} as const;

	type ScoreSize = keyof typeof scoreSizes;
</script>

{#snippet scoreDisplay(score: number, label: string | undefined, color: string | undefined, size: ScoreSize)}
	{@const s = scoreSizes[size]}
	{@const fill = color ?? getScoreColor(score)}
	<div style:text-align="center">
		<div
			style:width={s.box}
			style:height={s.box}
			style:border-radius="8px"
			style:background-color={fill}
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
			style:margin="0 auto 6px"
		>
			<span style:font-size={s.font} style:font-weight="700" style:color={c.white}>{score || '?'}</span>
		</div>
		{#if label}
			<div style:font-size={s.label} style:color={c.slate}>{label}</div>
		{/if}
	</div>
{/snippet}

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color="#E2E8F0"
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
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:padding="60px"
		>
			<div
				style:font-size="10px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="16px"
			>
				Readiness Report
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 12px 0" style:line-height="1.2">
				AI Readiness Assessment
			</h1>
			<div style:font-size="18px" style:color={c.slate} style:margin-bottom="40px">{report.client}</div>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="24px" style:max-width="400px">
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Workshop Date
					</div>
					<div style:font-size="14px" style:color={c.deepNavy}>{report.workshopDate}</div>
				</div>
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Report Date
					</div>
					<div style:font-size="14px" style:color={c.deepNavy}>{report.reportDate}</div>
				</div>
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Target Initiative
					</div>
					<div style:font-size="14px" style:color={c.deepNavy}>{report.targetProcess}</div>
				</div>
				<div>
					<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
						Prepared By
					</div>
					<div style:font-size="14px" style:color={c.deepNavy}>{report.preparedBy}</div>
				</div>
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
			<div style:font-size="11px" style:color={c.lightSlate}>AI Flow</div>
		</div>
	</div>

	<!-- Executive summary -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Executive Summary
				</h3>
			</div>

			<div style:display="grid" style:grid-template-columns="2fr 1fr" style:gap="24px" style:margin-bottom="24px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
					<p style:font-size="14px" style:color={c.deepNavy} style:line-height="1.7" style:margin="0">
						{report.executiveSummary}
					</p>
				</div>
				<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="20px" style:text-align="center">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="12px">OVERALL READINESS</div>
					{@render scoreDisplay(
						report.scores.overall,
						undefined,
						getScoreColor(report.scores.overall),
						'large'
					)}
					<div style:font-size="11px" style:color={c.lightSlate} style:margin-top="8px">out of 5</div>
				</div>
			</div>

			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="16px">
				{#each [
					{ key: 'data' as const, title: 'Data', color: c.cyan },
					{ key: 'technical' as const, title: 'Technical', color: c.purple },
					{ key: 'organisational' as const, title: 'Organisational', color: c.pink },
					{ key: 'process' as const, title: 'Process', color: c.orange },
				] as dim}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:text-align="center"
						style:border-top="4px solid {dim.color}"
					>
						<div style:font-size="11px" style:color={c.slate} style:margin-bottom="8px">{dim.title}</div>
						{@render scoreDisplay(report.scores[dim.key].score, undefined, dim.color, 'medium')}
					</div>
				{/each}
			</div>

			<div style:margin-top="24px">
				<div style:font-size="11px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="8px">
					Workshop Participants
				</div>
				<div style:display="flex" style:flex-wrap="wrap" style:gap="8px">
					{#each report.participants as p}
						<span
							style:font-size="11px"
							style:color={c.deepNavy}
							style:background-color={c.offWhite}
							style:padding="4px 10px"
							style:border-radius="4px"
						>
							{p}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Detailed scores -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.purple}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Detailed Scores by Dimension
				</h3>
			</div>

			<!-- Data -->
			<div
				style:margin-bottom="24px"
				style:padding="20px"
				style:background-color="{c.cyan}08"
				style:border-radius="8px"
				style:border-left="4px solid {c.cyan}"
			>
				<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="16px">
					<div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.deepNavy}>Data Readiness</div>
						<div style:font-size="12px" style:color={c.slate}>Is your data accessible, accurate, and governed?</div>
					</div>
					{@render scoreDisplay(report.scores.data.score, undefined, c.cyan, 'medium')}
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each [
						{ label: 'Availability', score: report.scores.data.subScores.availability },
						{ label: 'Quality', score: report.scores.data.subScores.quality },
						{ label: 'Governance', score: report.scores.data.subScores.governance },
						{ label: 'Integration', score: report.scores.data.subScores.integration },
					] as sub}
						<div style:background-color={c.white} style:border-radius="6px" style:padding="12px" style:text-align="center">
							{@render scoreDisplay(sub.score, sub.label, c.cyan, 'small')}
						</div>
					{/each}
				</div>
				<div style:margin-top="12px" style:font-size="12px" style:color={c.slate}>
					<strong>Commentary:</strong> [Add specific observations about data readiness]
				</div>
			</div>

			<!-- Technical -->
			<div
				style:margin-bottom="24px"
				style:padding="20px"
				style:background-color="{c.purple}08"
				style:border-radius="8px"
				style:border-left="4px solid {c.purple}"
			>
				<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="16px">
					<div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.deepNavy}>Technical Readiness</div>
						<div style:font-size="12px" style:color={c.slate}>Can your systems support AI integration?</div>
					</div>
					{@render scoreDisplay(report.scores.technical.score, undefined, c.purple, 'medium')}
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each [
						{ label: 'Architecture', score: report.scores.technical.subScores.architecture },
						{ label: 'Integration', score: report.scores.technical.subScores.integration },
						{ label: 'Infrastructure', score: report.scores.technical.subScores.infrastructure },
						{ label: 'IT Capacity', score: report.scores.technical.subScores.itCapacity },
					] as sub}
						<div style:background-color={c.white} style:border-radius="6px" style:padding="12px" style:text-align="center">
							{@render scoreDisplay(sub.score, sub.label, c.purple, 'small')}
						</div>
					{/each}
				</div>
				<div style:margin-top="12px" style:font-size="12px" style:color={c.slate}>
					<strong>Commentary:</strong> [Add specific observations about technical readiness]
				</div>
			</div>

			<!-- Organisational -->
			<div
				style:margin-bottom="24px"
				style:padding="20px"
				style:background-color="{c.pink}08"
				style:border-radius="8px"
				style:border-left="4px solid {c.pink}"
			>
				<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="16px">
					<div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.deepNavy}>Organisational Readiness</div>
						<div style:font-size="12px" style:color={c.slate}>
							Do you have skills, sponsorship, and change capacity?
						</div>
					</div>
					{@render scoreDisplay(report.scores.organisational.score, undefined, c.pink, 'medium')}
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each [
						{ label: 'Sponsorship', score: report.scores.organisational.subScores.sponsorship },
						{ label: 'Skills', score: report.scores.organisational.subScores.skills },
						{ label: 'Change Capacity', score: report.scores.organisational.subScores.changeCapacity },
						{ label: 'Culture', score: report.scores.organisational.subScores.culture },
					] as sub}
						<div style:background-color={c.white} style:border-radius="6px" style:padding="12px" style:text-align="center">
							{@render scoreDisplay(sub.score, sub.label, c.pink, 'small')}
						</div>
					{/each}
				</div>
				<div style:margin-top="12px" style:font-size="12px" style:color={c.slate}>
					<strong>Commentary:</strong> [Add specific observations about organisational readiness]
				</div>
			</div>

			<!-- Process -->
			<div
				style:padding="20px"
				style:background-color="{c.orange}08"
				style:border-radius="8px"
				style:border-left="4px solid {c.orange}"
			>
				<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="16px">
					<div>
						<div style:font-size="16px" style:font-weight="600" style:color={c.deepNavy}>Process Readiness</div>
						<div style:font-size="12px" style:color={c.slate}>Are processes documented and standardised?</div>
					</div>
					{@render scoreDisplay(report.scores.process.score, undefined, c.orange, 'medium')}
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each [
						{ label: 'Documentation', score: report.scores.process.subScores.documentation },
						{ label: 'Standardisation', score: report.scores.process.subScores.standardisation },
						{ label: 'Ownership', score: report.scores.process.subScores.ownership },
						{ label: 'Measurement', score: report.scores.process.subScores.measurement },
					] as sub}
						<div style:background-color={c.white} style:border-radius="6px" style:padding="12px" style:text-align="center">
							{@render scoreDisplay(sub.score, sub.label, c.orange, 'small')}
						</div>
					{/each}
				</div>
				<div style:margin-top="12px" style:font-size="12px" style:color={c.slate}>
					<strong>Commentary:</strong> [Add specific observations about process readiness]
				</div>
			</div>
		</div>
	</div>

	<!-- Gaps & roadmap -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.pink}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Gap Analysis
				</h3>
			</div>

			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px" style:margin-bottom="32px">
				<thead>
					<tr>
						{#each ['Priority', 'Dimension', 'Gap', 'Impact', 'Effort'] as h}
							<th
								style:text-align="left"
								style:padding="10px 12px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="10px"
								style:text-transform="uppercase"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each report.gaps as gap}
						<tr>
							<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
								<div
									style:width="24px"
									style:height="24px"
									style:border-radius="50%"
									style:background-color={c.pink}
									style:color={c.white}
									style:display="flex"
									style:align-items="center"
									style:justify-content="center"
									style:font-size="11px"
									style:font-weight="600"
								>
									{gap.priority}
								</div>
							</td>
							<td
								style:padding="12px"
								style:border-bottom="1px solid {c.lightSlate}22"
								style:color={c.deepNavy}
								style:font-weight="500"
							>
								{gap.dimension}
							</td>
							<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
								{gap.gap}
							</td>
							<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:padding="2px 8px"
									style:border-radius="3px"
									style:font-size="10px"
									style:background-color={gap.impact === 'High'
										? `${c.pink}20`
										: gap.impact === 'Medium'
											? `${c.orange}20`
											: `${c.cyan}20`}
									style:color={gap.impact === 'High'
										? c.pink
										: gap.impact === 'Medium'
											? c.orange
											: c.cyan}
								>
									{gap.impact}
								</span>
							</td>
							<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
								<span
									style:padding="2px 8px"
									style:border-radius="3px"
									style:font-size="10px"
									style:background-color="{c.slate}20"
									style:color={c.slate}
								>
									{gap.effort}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.green}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Strengths
				</h3>
			</div>
			<div style:display="flex" style:flex-wrap="wrap" style:gap="8px" style:margin-bottom="32px">
				{#each report.strengths as s}
					<div
						style:display="flex"
						style:align-items="center"
						style:gap="6px"
						style:background-color="{c.green}10"
						style:padding="8px 12px"
						style:border-radius="6px"
					>
						<span style:color={c.green}>✓</span>
						<span style:font-size="12px" style:color={c.deepNavy}>{s}</span>
					</div>
				{/each}
			</div>

			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Readiness Roadmap
				</h3>
			</div>
			<div style:display="flex" style:gap="16px">
				{#each report.roadmap as phase, i}
					<div
						style:flex="1"
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:border-top="3px solid {[c.pink, c.orange, c.cyan][i]}"
					>
						<div
							style:font-size="12px"
							style:font-weight="600"
							style:color={[c.pink, c.orange, c.cyan][i]}
							style:margin-bottom="12px"
						>
							{phase.phase}
						</div>
						{#each phase.actions as action}
							<div
								style:font-size="11px"
								style:color={c.deepNavy}
								style:margin-bottom="6px"
								style:padding-left="12px"
								style:border-left="2px solid {c.lightSlate}33"
							>
								{action}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Recommendation -->
	<div
		style:max-width="850px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.green}></div>
				<h3
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Recommendation
				</h3>
			</div>

			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="24px" style:margin-bottom="24px">
				<div style:font-size="16px" style:color={c.white} style:line-height="1.6">
					{report.recommendation}
				</div>
			</div>

			<div
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="20px"
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
			>
				<div>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="4px">
						Questions or ready to proceed?
					</div>
					<div style:font-size="12px" style:color={c.slate}>We are here to help you move forward.</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="14px" style:color={c.cyan} style:font-weight="600">[contact email]</div>
					<div style:font-size="12px" style:color={c.slate}>[website]</div>
				</div>
			</div>

			<div
				style:margin-top="24px"
				style:padding-top="16px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>AI Readiness Assessment — {report.client}</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
