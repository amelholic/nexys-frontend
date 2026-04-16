<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { caseStudy } from '$lib/brief/docs/data/case-study-data';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;
	const heroColors = [c.cyan, c.purple, c.pink] as const;
	const timelineColors = [c.cyan, c.purple, c.pink, c.orange] as const;
</script>

{#snippet sectionTitle(label: string, color: string)}
	<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px" style:margin-top="32px">
		<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={color}></div>
		<h3
			style:font-size="12px"
			style:font-weight="600"
			style:color={c.deepNavy}
			style:text-transform="uppercase"
			style:letter-spacing="1px"
			style:margin="0"
		>
			{label}
		</h3>
	</div>
{/snippet}

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div
		style:max-width="900px"
		style:margin="0 auto 40px"
		style:background-color={c.deepNavy}
		style:border-radius="12px"
		style:overflow="hidden"
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="48px 60px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start" style:margin-bottom="32px">
				<div>
					<div
						style:font-size="10px"
						style:color={c.cyan}
						style:text-transform="uppercase"
						style:letter-spacing="3px"
						style:margin-bottom="12px"
					>
						Case Study · {aiFlowBrand}
					</div>
					<h1 style:font-size="36px" style:font-weight="700" style:color={c.white} style:margin="0 0 16px 0" style:line-height="1.2">
						{caseStudy.title}
					</h1>
					<div style:font-size="16px" style:color={c.lightSlate}>
						{caseStudy.client} • {caseStudy.industry}
					</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="11px" style:color={c.lightSlate}>{caseStudy.location}</div>
					<div style:font-size="11px" style:color={c.lightSlate}>{caseStudy.date}</div>
				</div>
			</div>
			<div style:display="flex" style:gap="40px">
				{#each caseStudy.heroStats as stat, i (stat.label)}
					<div>
						<div style:font-size="42px" style:font-weight="700" style:color={heroColors[i] ?? c.cyan}>{stat.value}</div>
						<div style:font-size="13px" style:color={c.lightSlate}>{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div style:max-width="900px" style:margin="0 auto">
		<div
			style:background-color={c.white}
			style:border-radius="12px"
			style:padding="32px 40px"
			style:margin-bottom="24px"
			style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		>
			{@render sectionTitle('Executive Summary', c.cyan)}
			<p style:font-size="16px" style:color={c.deepNavy} style:line-height="1.8" style:margin="0">{caseStudy.summary}</p>
		</div>

		<div
			style:background-color={c.white}
			style:border-radius="12px"
			style:padding="32px 40px"
			style:margin-bottom="24px"
			style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		>
			{@render sectionTitle('The Challenge', c.pink)}
			<p style:font-size="14px" style:color={c.slate} style:line-height="1.7" style:margin-bottom="24px">
				{caseStudy.challenge.context}
			</p>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="24px">
				{#each caseStudy.challenge.painPoints as point (point.problem)}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="20px"
						style:border-left="4px solid {c.pink}"
					>
						<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="8px">
							{point.problem}
						</div>
						<div style:font-size="12px" style:color={c.slate} style:margin-bottom="8px">{point.detail}</div>
						<div style:font-size="12px" style:color={c.pink} style:font-weight="500">{point.impact}</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="24px" style:border-left="4px solid {c.cyan}">
				<p style:font-size="16px" style:color={c.deepNavy} style:font-style="italic" style:line-height="1.7" style:margin="0 0 12px 0">
					"{caseStudy.challenge.quote.text}"
				</p>
				<div style:font-size="13px" style:color={c.slate}>
					<strong>{caseStudy.challenge.quote.author}</strong>, {caseStudy.challenge.quote.role}
				</div>
			</div>
		</div>

		<div
			style:background-color={c.white}
			style:border-radius="12px"
			style:padding="32px 40px"
			style:margin-bottom="24px"
			style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		>
			{@render sectionTitle('The Solution', c.purple)}
			<p style:font-size="14px" style:color={c.slate} style:line-height="1.7" style:margin-bottom="24px">
				{caseStudy.solution.approach}
			</p>
			<div style:margin-bottom="24px">
				<div
					style:font-size="11px"
					style:color={c.lightSlate}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="12px"
				>
					Key Capabilities
				</div>
				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="12px">
					{#each caseStudy.solution.capabilities as cap (cap.name)}
						<div style:display="flex" style:gap="12px" style:padding="16px" style:background-color={c.offWhite} style:border-radius="8px">
							<div
								style:width="8px"
								style:height="8px"
								style:border-radius="50%"
								style:background-color={c.purple}
								style:margin-top="6px"
								style:flex-shrink="0"
							></div>
							<div>
								<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="4px">
									{cap.name}
								</div>
								<div style:font-size="12px" style:color={c.slate}>{cap.description}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px" style:margin-bottom="24px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
					<div style:font-size="11px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Components
					</div>
					<div style:display="flex" style:flex-wrap="wrap" style:gap="8px">
						{#each caseStudy.solution.architecture.components as comp (comp)}
							<span
								style:font-size="11px"
								style:color={c.purple}
								style:background-color="{c.purple}15"
								style:padding="4px 10px"
								style:border-radius="4px"
							>
								{comp}
							</span>
						{/each}
					</div>
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
					<div style:font-size="11px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="10px">
						Integrations
					</div>
					<div style:display="flex" style:flex-wrap="wrap" style:gap="8px">
						{#each caseStudy.solution.architecture.integrations as int (int)}
							<span
								style:font-size="11px"
								style:color={c.cyan}
								style:background-color="{c.cyan}15"
								style:padding="4px 10px"
								style:border-radius="4px"
							>
								{int}
							</span>
						{/each}
					</div>
				</div>
			</div>
			<div style:font-size="11px" style:color={c.lightSlate} style:text-transform="uppercase" style:letter-spacing="1px" style:margin-bottom="12px">
				Project Timeline
			</div>
			<div style:display="flex" style:gap="12px">
				{#each caseStudy.solution.timeline as phase, i (phase.phase)}
					<div
						style:flex="1"
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:border-top="3px solid {timelineColors[i] ?? c.cyan}"
					>
						<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="4px">
							{phase.phase}
						</div>
						<div style:font-size="12px" style:color={timelineColors[i] ?? c.cyan} style:font-weight="500" style:margin-bottom="8px">
							{phase.duration}
						</div>
						<div style:font-size="11px" style:color={c.slate}>{phase.activities}</div>
					</div>
				{/each}
			</div>
		</div>

		<div
			style:background-color={c.white}
			style:border-radius="12px"
			style:padding="32px 40px"
			style:margin-bottom="24px"
			style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		>
			{@render sectionTitle('The Results', c.green)}
			<p style:font-size="14px" style:color={c.slate} style:line-height="1.7" style:margin-bottom="24px">
				{caseStudy.results.summary}
			</p>
			<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="16px" style:margin-bottom="24px">
				{#each caseStudy.results.metrics as metric (metric.metric)}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px" style:text-align="center">
						<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="12px">{metric.metric}</div>
						<div style:display="flex" style:justify-content="center" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
							<span style:font-size="14px" style:color={c.slate} style:text-decoration="line-through">{metric.before}</span>
							<span style:color={metric.color}>→</span>
							<span style:font-size="20px" style:font-weight="700" style:color={metric.color}>{metric.after}</span>
						</div>
						<div style:font-size="12px" style:color={metric.color} style:font-weight="500">{metric.improvement}</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="24px" style:margin-bottom="24px">
				<div
					style:font-size="11px"
					style:color={c.lightSlate}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="16px"
				>
					Financial Impact
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="20px">
					<div style:text-align="center">
						<div style:font-size="28px" style:font-weight="700" style:color={c.green}>
							${(caseStudy.results.financialImpact.annualSavings / 1000).toFixed(0)}K
						</div>
						<div style:font-size="11px" style:color={c.lightSlate}>Annual savings</div>
					</div>
					<div style:text-align="center">
						<div style:font-size="28px" style:font-weight="700" style:color={c.cyan}>
							${(caseStudy.results.financialImpact.projectCost / 1000).toFixed(0)}K
						</div>
						<div style:font-size="11px" style:color={c.lightSlate}>Project cost</div>
					</div>
					<div style:text-align="center">
						<div style:font-size="28px" style:font-weight="700" style:color={c.purple}>
							{caseStudy.results.financialImpact.paybackMonths} mo
						</div>
						<div style:font-size="11px" style:color={c.lightSlate}>Payback period</div>
					</div>
					<div style:text-align="center">
						<div style:font-size="28px" style:font-weight="700" style:color={c.pink}>
							{caseStudy.results.financialImpact.threeYearROI}
						</div>
						<div style:font-size="11px" style:color={c.lightSlate}>3-year ROI</div>
					</div>
				</div>
			</div>
			<div style:margin-bottom="24px">
				<div
					style:font-size="11px"
					style:color={c.lightSlate}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="12px"
				>
					Beyond the Numbers
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
					{#each caseStudy.results.qualitative as point, i (i)}
						<div style:display="flex" style:gap="10px" style:margin-bottom={i < caseStudy.results.qualitative.length - 1 ? '10px' : '0'}>
							<span style:color={c.green}>✓</span>
							<span style:font-size="13px" style:color={c.deepNavy}>{point}</span>
						</div>
					{/each}
				</div>
			</div>
			<div style:background-color="{c.green}10" style:border-radius="8px" style:padding="24px" style:border-left="4px solid {c.green}">
				<p style:font-size="16px" style:color={c.deepNavy} style:font-style="italic" style:line-height="1.7" style:margin="0 0 12px 0">
					"{caseStudy.results.quote.text}"
				</p>
				<div style:font-size="13px" style:color={c.slate}>
					<strong>{caseStudy.results.quote.author}</strong>, {caseStudy.results.quote.role}
				</div>
			</div>
		</div>

		<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="24px" style:margin-bottom="24px">
			<div style:background-color={c.white} style:border-radius="12px" style:padding="28px" style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)">
				{@render sectionTitle('Lessons Learned', c.orange)}
				{#each caseStudy.lessonsLearned as lesson, i (i)}
					<div style:display="flex" style:gap="10px" style:margin-bottom="12px">
						<div
							style:width="20px"
							style:height="20px"
							style:border-radius="50%"
							style:background-color={c.orange}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="10px"
							style:font-weight="600"
							style:flex-shrink="0"
						>
							{i + 1}
						</div>
						<span style:font-size="13px" style:color={c.deepNavy} style:padding-top="2px">{lesson}</span>
					</div>
				{/each}
			</div>
			<div style:background-color={c.white} style:border-radius="12px" style:padding="28px" style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)">
				{@render sectionTitle('What is Next', c.cyan)}
				{#each caseStudy.nextSteps as step (step)}
					<div style:display="flex" style:gap="10px" style:margin-bottom="12px">
						<span style:color={c.cyan}>→</span>
						<span style:font-size="13px" style:color={c.deepNavy}>{step}</span>
					</div>
				{/each}
			</div>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="12px" style:padding="32px 40px" style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)">
			<div style:display="flex" style:justify-content="space-between" style:align-items="center">
				<div style:max-width="500px">
					<div style:font-size="18px" style:font-weight="700" style:color={c.white} style:margin-bottom="12px">
						{aiFlowBrand}
					</div>
					<p style:font-size="13px" style:color={c.lightSlate} style:line-height="1.7" style:margin="0">
						{caseStudy.aboutBrand}
					</p>
				</div>
				<div style:text-align="right">
					<div style:font-size="13px" style:color={c.lightSlate} style:margin-bottom="8px">Ready to automate?</div>
					<div style:font-size="16px" style:color={c.cyan} style:font-weight="600">hello@aiflow.example</div>
				</div>
			</div>
		</div>

		<div style:margin-top="32px" style:text-align="center" style:font-size="11px" style:color={c.lightSlate}>
			Case Study Template · {aiFlowBrand}
		</div>
	</div>
</div>
