<script lang="ts">
	import WorkshopSlideFrame from '$lib/brief/WorkshopSlideFrame.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';

	const failurePoints = [
		'Data is inaccessible or poor quality',
		'Systems cannot integrate',
		'No executive sponsorship',
		'Team not ready for change',
		'Process not standardised',
	];

	const todayGoals = [
		'Honestly assess where you stand',
		'Identify specific gaps',
		'Prioritise what to fix',
		'Create a practical roadmap',
		'Know before you invest',
	];

	const dimensions = [
		{ icon: '📊', title: 'Data', desc: 'Is your data accessible, accurate, and governed?', color: c.cyan },
		{ icon: '⚙️', title: 'Technical', desc: 'Can your systems support AI integration?', color: c.purple },
		{ icon: '👥', title: 'Organisational', desc: 'Do you have skills, sponsorship, and change capacity?', color: c.pink },
		{ icon: '📋', title: 'Process', desc: 'Are processes documented and standardised?', color: c.orange },
	];

	const scoreScale = [
		{ score: 5, label: 'Advanced', desc: 'Strong position, ready to go', color: c.green },
		{ score: 4, label: 'Capable', desc: 'Solid foundation, minor improvements needed', color: c.cyan },
		{ score: 3, label: 'Developing', desc: 'Making progress, gaps are addressable', color: c.purple },
		{ score: 2, label: 'Early Stage', desc: 'Some foundations, but major work needed', color: c.orange },
		{ score: 1, label: 'Not Ready', desc: 'Significant gaps, would block or derail a project', color: c.pink },
	];

	const dataSections = [
		{
			letter: 'A',
			title: 'Availability',
			questions: ['Where does the data live?', 'Can we access it programmatically?', 'Single source of truth?'],
		},
		{
			letter: 'B',
			title: 'Quality',
			questions: ['How accurate is it?', 'How complete?', 'How consistent?'],
		},
		{
			letter: 'C',
			title: 'Governance',
			questions: ['Who owns the data?', 'Is it documented?', 'Privacy/security rules?'],
		},
		{
			letter: 'D',
			title: 'Integration',
			questions: ['How is data shared today?', 'Existing pipelines?', 'What format?'],
		},
	];

	const technicalSections = [
		{
			letter: 'A',
			title: 'Architecture',
			questions: ['Core systems involved?', 'Legacy vs modern?', 'Documentation?'],
		},
		{
			letter: 'B',
			title: 'Integration',
			questions: ['APIs available?', 'Integration patterns?', 'Middleware/platforms?'],
		},
		{
			letter: 'C',
			title: 'Infrastructure',
			questions: ['Cloud or on-prem?', 'Compute capacity?', 'Security constraints?'],
		},
		{
			letter: 'D',
			title: 'IT Capacity',
			questions: ['Bandwidth available?', 'Lead time for requests?', 'Current backlog?'],
		},
	];

	const orgSections = [
		{
			letter: 'A',
			title: 'Sponsorship',
			questions: ['Executive sponsor?', 'Budget authority?', 'Strategic priority?'],
		},
		{
			letter: 'B',
			title: 'Skills',
			questions: ['AI/ML understanding?', 'Team tech savvy?', 'Training needed?'],
		},
		{
			letter: 'C',
			title: 'Change Capacity',
			questions: ['Change track record?', 'Other initiatives?', 'Change fatigue?'],
		},
		{
			letter: 'D',
			title: 'Culture',
			questions: ['AI sentiment?', 'Trust in automation?', 'Job security concerns?'],
		},
	];

	const processSections = [
		{
			letter: 'A',
			title: 'Documentation',
			questions: ['Process documented?', 'Up to date?', 'Reflects reality?'],
		},
		{
			letter: 'B',
			title: 'Standardisation',
			questions: ['Consistent execution?', 'Variation between teams?', 'Workarounds?'],
		},
		{
			letter: 'C',
			title: 'Ownership',
			questions: ['Clear owner?', 'Accountability?', 'Decision authority?'],
		},
		{
			letter: 'D',
			title: 'Measurement',
			questions: ['Currently measured?', 'What metrics?', 'Baseline data?'],
		},
	];

	const scorecardDims = [
		{ title: 'Data', color: c.cyan },
		{ title: 'Technical', color: c.purple },
		{ title: 'Organisational', color: c.pink },
		{ title: 'Process', color: c.orange },
	];

	const scorecardRanges = [
		{ range: '4-5', label: 'Ready to proceed', color: c.green },
		{ range: '3-4', label: 'Ready with prep work', color: c.cyan },
		{ range: '2-3', label: 'Address gaps first', color: c.orange },
		{ range: '1-2', label: 'Foundational work needed', color: c.pink },
	];

	const roadmapSteps = [
		{ num: '1', title: 'Report', desc: 'Full readiness report with scores and gaps', time: 'This week' },
		{ num: '2', title: 'Prioritise', desc: 'Confirm which gaps to address', time: 'Next week' },
		{ num: '3', title: 'Plan', desc: 'Create action plan for critical gaps', time: '2 weeks' },
		{ num: '4', title: 'Proceed', desc: 'Start AI project when ready', time: 'When ready' },
	];
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color="#E2E8F0"
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<!-- Slide 1 -->
	<WorkshopSlideFrame dark>
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:padding="50px 60px"
		>
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="16px"
			>
				Workshop
			</div>
			<h1
				style:font-size="44px"
				style:font-weight="700"
				style:color={c.white}
				style:margin="0 0 16px 0"
				style:line-height="1.1"
			>
				AI Readiness<br />Assessment
			</h1>
			<p style:font-size="16px" style:color={c.lightSlate} style:max-width="500px">
				Are you ready to adopt AI automation? Let's find out.
			</p>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 2 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.pink}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Why This Matters
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 24px 0">
				AI projects fail because of readiness, not technology
			</h2>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
				<div
					style:background-color="{c.pink}10"
					style:border-radius="8px"
					style:padding="20px"
					style:border-left="4px solid {c.pink}"
				>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="12px">
						Common failure points:
					</div>
					{#each failurePoints as item}
						<div style:display="flex" style:gap="8px" style:margin-bottom="6px" style:font-size="12px" style:color={c.slate}>
							<span style:color={c.pink}>✗</span>
							<span>{item}</span>
						</div>
					{/each}
				</div>
				<div
					style:background-color="{c.green}10"
					style:border-radius="8px"
					style:padding="20px"
					style:border-left="4px solid {c.green}"
				>
					<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="12px">
						Today's goal:
					</div>
					{#each todayGoals as item}
						<div style:display="flex" style:gap="8px" style:margin-bottom="6px" style:font-size="12px" style:color={c.slate}>
							<span style:color={c.green}>✓</span>
							<span>{item}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 3 -->
	<WorkshopSlideFrame dark>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Framework
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">
				Four dimensions of AI readiness
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
				{#each dimensions as dim}
					<div
						style:background-color="rgba(255,255,255,0.05)"
						style:border-radius="8px"
						style:padding="20px"
						style:border-top="3px solid {dim.color}"
						style:text-align="center"
					>
						<div style:font-size="32px" style:margin-bottom="12px">{dim.icon}</div>
						<div style:font-size="16px" style:font-weight="700" style:color={dim.color} style:margin-bottom="8px">
							{dim.title}
						</div>
						<div style:font-size="11px" style:color={c.lightSlate} style:line-height="1.4">{dim.desc}</div>
					</div>
				{/each}
			</div>

			<div style:margin-top="20px" style:text-align="center" style:font-size="13px" style:color={c.lightSlate}>
				We will assess each dimension and score your readiness 1-5
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 4 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.purple}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				How We Score
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Readiness scoring scale
			</h2>

			<div style:display="flex" style:flex-direction="column" style:gap="10px">
				{#each scoreScale as item}
					<div
						style:display="flex"
						style:align-items="center"
						style:gap="16px"
						style:padding="12px 16px"
						style:background-color={c.offWhite}
						style:border-radius="6px"
						style:border-left="4px solid {item.color}"
					>
						<div
							style:width="36px"
							style:height="36px"
							style:border-radius="50%"
							style:background-color={item.color}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="16px"
							style:font-weight="700"
							style:flex-shrink="0"
						>
							{item.score}
						</div>
						<div>
							<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy}>{item.label}</div>
							<div style:font-size="11px" style:color={c.slate}>{item.desc}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 5 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Dimension 1
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Data Readiness
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="12px">
				{#each dataSections as section}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:border-top="3px solid {c.cyan}"
					>
						<div style:display="flex" style:align-items="center" style:gap="10px" style:margin-bottom="10px">
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="4px"
								style:background-color={c.cyan}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="700"
							>
								{section.letter}
							</div>
							<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{section.title}</div>
						</div>
						{#each section.questions as q}
							<div style:font-size="11px" style:color={c.slate} style:margin-bottom="4px" style:padding-left="34px">
								• {q}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 6 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.purple}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Dimension 2
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Technical Readiness
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="12px">
				{#each technicalSections as section}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:border-top="3px solid {c.purple}"
					>
						<div style:display="flex" style:align-items="center" style:gap="10px" style:margin-bottom="10px">
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="4px"
								style:background-color={c.purple}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="700"
							>
								{section.letter}
							</div>
							<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{section.title}</div>
						</div>
						{#each section.questions as q}
							<div style:font-size="11px" style:color={c.slate} style:margin-bottom="4px" style:padding-left="34px">
								• {q}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 7 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.pink}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Dimension 3
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Organisational Readiness
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="12px">
				{#each orgSections as section}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:border-top="3px solid {c.pink}"
					>
						<div style:display="flex" style:align-items="center" style:gap="10px" style:margin-bottom="10px">
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="4px"
								style:background-color={c.pink}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="700"
							>
								{section.letter}
							</div>
							<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{section.title}</div>
						</div>
						{#each section.questions as q}
							<div style:font-size="11px" style:color={c.slate} style:margin-bottom="4px" style:padding-left="34px">
								• {q}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 8 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.orange}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Dimension 4
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Process Readiness
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="12px">
				{#each processSections as section}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="14px"
						style:border-top="3px solid {c.orange}"
					>
						<div style:display="flex" style:align-items="center" style:gap="10px" style:margin-bottom="10px">
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="4px"
								style:background-color={c.orange}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="700"
							>
								{section.letter}
							</div>
							<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>{section.title}</div>
						</div>
						{#each section.questions as q}
							<div style:font-size="11px" style:color={c.slate} style:margin-bottom="4px" style:padding-left="34px">
								• {q}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 9 -->
	<WorkshopSlideFrame dark>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Results
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">
				Readiness Scorecard
			</h2>

			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="16px" style:margin-bottom="24px">
				{#each scorecardDims as dim}
					<div
						style:background-color="rgba(255,255,255,0.05)"
						style:border-radius="8px"
						style:padding="20px"
						style:text-align="center"
						style:border-top="3px solid {dim.color}"
					>
						<div style:font-size="12px" style:color={c.lightSlate} style:margin-bottom="8px">{dim.title}</div>
						<div style:font-size="48px" style:font-weight="700" style:color={dim.color}>?</div>
						<div style:font-size="11px" style:color={c.lightSlate}>/5</div>
					</div>
				{/each}
			</div>

			<div
				style:background-color="rgba(255,255,255,0.1)"
				style:border-radius="8px"
				style:padding="16px"
				style:display="flex"
				style:justify-content="space-around"
			>
				{#each scorecardRanges as item}
					<div style:text-align="center">
						<div style:font-size="18px" style:font-weight="700" style:color={item.color}>{item.range}</div>
						<div style:font-size="10px" style:color={c.lightSlate}>{item.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 10 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.green}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Analysis
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Prioritising the gaps
			</h2>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="24px">
				<div>
					<div style:font-size="13px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="12px">
						List all identified gaps:
					</div>
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:min-height="180px">
						<div style:font-size="11px" style:color={c.lightSlate} style:font-style="italic">
							Capture gaps from each dimension...
						</div>
					</div>
				</div>
				<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="20px">
					<div
						style:font-size="11px"
						style:color={c.lightSlate}
						style:margin-bottom="12px"
						style:text-align="center"
					>
						Plot gaps on the matrix
					</div>
					<div style:position="relative" style:height="160px">
						<div
							style:position="absolute"
							style:left="0"
							style:top="0"
							style:bottom="0"
							style:width="1px"
							style:background-color={c.lightSlate}
						></div>
						<div
							style:position="absolute"
							style:left="0"
							style:right="0"
							style:bottom="0"
							style:height="1px"
							style:background-color={c.lightSlate}
						></div>
						<div
							style:position="absolute"
							style:left="50%"
							style:bottom="-16px"
							style:font-size="9px"
							style:color={c.lightSlate}
							style:transform="translateX(-50%)"
						>
							Effort to Fix →
						</div>

						<div
							style:position="absolute"
							style:right="12px"
							style:top="12px"
							style:background-color={c.green}
							style:color={c.white}
							style:padding="4px 8px"
							style:border-radius="3px"
							style:font-size="9px"
						>
							Quick Wins
						</div>
						<div
							style:position="absolute"
							style:left="12px"
							style:top="12px"
							style:background-color={c.pink}
							style:color={c.white}
							style:padding="4px 8px"
							style:border-radius="3px"
							style:font-size="9px"
						>
							Critical
						</div>
						<div
							style:position="absolute"
							style:right="12px"
							style:bottom="12px"
							style:background-color={c.slate}
							style:color={c.white}
							style:padding="4px 8px"
							style:border-radius="3px"
							style:font-size="9px"
						>
							Consider
						</div>
						<div
							style:position="absolute"
							style:left="12px"
							style:bottom="12px"
							style:background-color={c.orange}
							style:color={c.white}
							style:padding="4px 8px"
							style:border-radius="3px"
							style:font-size="9px"
						>
							Plan
						</div>
					</div>
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 11 -->
	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.green}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Next Steps
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 24px 0">
				Your readiness roadmap
			</h2>

			<div style:display="flex" style:gap="16px">
				{#each roadmapSteps as step}
					<div style:flex="1" style:text-align="center">
						<div
							style:width="40px"
							style:height="40px"
							style:border-radius="50%"
							style:background-color={c.green}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="18px"
							style:font-weight="700"
							style:margin="0 auto 12px"
						>
							{step.num}
						</div>
						<div style:font-size="14px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="6px">
							{step.title}
						</div>
						<div style:font-size="11px" style:color={c.slate} style:margin-bottom="6px" style:line-height="1.4">
							{step.desc}
						</div>
						<div style:font-size="10px" style:color={c.green} style:font-weight="600">{step.time}</div>
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<!-- Slide 12 -->
	<WorkshopSlideFrame dark>
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:align-items="center"
			style:padding="50px 60px"
			style:text-align="center"
		>
			<h2 style:font-size="38px" style:font-weight="700" style:color={c.white} style:margin="0 0 20px 0">Thank you</h2>
			<p style:font-size="16px" style:color={c.lightSlate} style:margin-bottom="32px">Questions?</p>

			<div style:display="flex" style:gap="32px">
				<div>
					<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="4px">Email</div>
					<div style:font-size="14px" style:color={c.white}>[contact email]</div>
				</div>
				<div>
					<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="4px">Web</div>
					<div style:font-size="14px" style:color={c.cyan}>[website]</div>
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>
</div>
