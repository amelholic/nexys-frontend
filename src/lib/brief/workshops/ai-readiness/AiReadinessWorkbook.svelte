<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const scaleRows = [
		{
			score: 5,
			label: 'Advanced',
			desc: 'Strong position, ready to go. No significant gaps.',
			color: c.green,
		},
		{
			score: 4,
			label: 'Capable',
			desc: 'Solid foundation in place. Minor improvements needed but not blocking.',
			color: c.cyan,
		},
		{
			score: 3,
			label: 'Developing',
			desc: 'Making progress. Gaps exist but are addressable with reasonable effort.',
			color: c.purple,
		},
		{
			score: 2,
			label: 'Early Stage',
			desc: 'Some foundations exist. Major work needed before proceeding.',
			color: c.orange,
		},
		{
			score: 1,
			label: 'Not Ready',
			desc: 'Significant gaps that would block or derail an AI project.',
			color: c.pink,
		},
	];

	const summaryDims = [
		{ title: 'Data', color: c.cyan },
		{ title: 'Technical', color: c.purple },
		{ title: 'Organisational', color: c.pink },
		{ title: 'Process', color: c.orange },
	];

	function lines(n: number) {
		return Array.from({ length: n }, (_, i) => i);
	}
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color="#E2E8F0"
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<!-- Cover -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		style:min-height="400px"
	>
		<div style:height="4px" style:background={gradient}></div>

		<div style:padding="60px" style:text-align="center">
			<div
				style:font-size="10px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="24px"
			>
				Workshop Workbook
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 16px 0">
				AI Readiness Assessment
			</h1>
			<p style:font-size="14px" style:color={c.slate} style:margin-bottom="48px">Participant Workbook</p>

			<div
				style:display="grid"
				style:grid-template-columns="1fr 1fr"
				style:gap="24px"
				style:max-width="400px"
				style:margin="0 auto"
				style:text-align="left"
			>
				<div>
					<div
						style:font-size="10px"
						style:color={c.lightSlate}
						style:text-transform="uppercase"
						style:margin-bottom="6px"
					>
						Your Name
					</div>
					<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
				</div>
				<div>
					<div
						style:font-size="10px"
						style:color={c.lightSlate}
						style:text-transform="uppercase"
						style:margin-bottom="6px"
					>
						Role
					</div>
					<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
				</div>
				<div>
					<div
						style:font-size="10px"
						style:color={c.lightSlate}
						style:text-transform="uppercase"
						style:margin-bottom="6px"
					>
						Organisation
					</div>
					<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
				</div>
				<div>
					<div
						style:font-size="10px"
						style:color={c.lightSlate}
						style:text-transform="uppercase"
						style:margin-bottom="6px"
					>
						Date
					</div>
					<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
				</div>
			</div>

			<div
				style:margin-top="48px"
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="20px"
			>
				<div style:font-size="12px" style:color={c.slate} style:margin-bottom="8px">
					Initial gut feel: How ready is your organisation for AI? (1-10)
				</div>
				<div style:display="flex" style:justify-content="center" style:gap="8px">
					{#each lines(10) as _, i}
						<div
							style:width="28px"
							style:height="28px"
							style:border="2px solid {c.cyan}"
							style:border-radius="50%"
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:font-size="11px"
							style:color={c.deepNavy}
						>
							{i + 1}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div
			style:padding="20px 60px"
			style:border-top="1px solid {c.lightSlate}33"
			style:display="flex"
			style:justify-content="space-between"
		>
			<span style:font-size="11px" style:color={c.lightSlate}>AI Flow</span>
			<span style:font-size="11px" style:color={c.lightSlate}>[website]</span>
		</div>
	</div>

	<!-- Scoring reference -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.purple}></div>
				<h3
					style:font-size="11px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Scoring Scale Reference
				</h3>
			</div>
			<p style:font-size="12px" style:color={c.slate} style:margin-bottom="20px">
				Use this scale consistently when scoring each dimension.
			</p>

			<div style:display="flex" style:flex-direction="column" style:gap="8px">
				{#each scaleRows as item}
					<div
						style:display="flex"
						style:align-items="center"
						style:gap="12px"
						style:padding="12px"
						style:background-color={c.offWhite}
						style:border-radius="6px"
						style:border-left="4px solid {item.color}"
					>
						<div
							style:width="32px"
							style:height="32px"
							style:border-radius="6px"
							style:background-color={item.color}
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:color={c.white}
							style:font-size="14px"
							style:font-weight="700"
							style:flex-shrink="0"
						>
							{item.score}
						</div>
						<div>
							<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy}>{item.label}</div>
							<div style:font-size="11px" style:color={c.slate}>{item.desc}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Data -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
						<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.cyan}></div>
						<h3
							style:font-size="11px"
							style:font-weight="600"
							style:color={c.deepNavy}
							style:text-transform="uppercase"
							style:letter-spacing="1px"
							style:margin="0"
						>
							Dimension 1: Data Readiness
						</h3>
					</div>
					<p style:font-size="12px" style:color={c.slate} style:margin-bottom="20px" style:margin-top="-8px">
						Is your data accessible, accurate, and governed?
					</p>
				</div>
				<div style:text-align="center">
					<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">SCORE</div>
					<div style:width="48px" style:height="48px" style:border="3px solid {c.cyan}" style:border-radius="8px"></div>
				</div>
			</div>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						A. Data Availability
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Where does the data for this process live?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Can we access it programmatically (APIs, database)?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Is there a single source of truth?
						</div>
						{#each lines(1) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
						<div
							style:width="32px"
							style:height="32px"
							style:border="2px solid {c.cyan}"
							style:border-radius="6px"
							style:flex-shrink="0"
						></div>
						<span style:font-size="12px" style:color={c.deepNavy}>Availability score (1-5)</span>
					</div>
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						B. Data Quality
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							How accurate is the data? Known issues?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							How complete? Missing fields or gaps?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							How consistent? Recorded the same way?
						</div>
						{#each lines(1) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
						<div
							style:width="32px"
							style:height="32px"
							style:border="2px solid {c.cyan}"
							style:border-radius="6px"
							style:flex-shrink="0"
						></div>
						<span style:font-size="12px" style:color={c.deepNavy}>Quality score (1-5)</span>
					</div>
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						C. Data Governance
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Who owns the data? Is it documented?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Privacy/security classifications?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
						<div
							style:width="32px"
							style:height="32px"
							style:border="2px solid {c.cyan}"
							style:border-radius="6px"
							style:flex-shrink="0"
						></div>
						<span style:font-size="12px" style:color={c.deepNavy}>Governance score (1-5)</span>
					</div>
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						D. Data Integration
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							How is data shared between systems today?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="16px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Existing pipelines or ETL processes?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="26px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
						<div
							style:width="32px"
							style:height="32px"
							style:border="2px solid {c.cyan}"
							style:border-radius="6px"
							style:flex-shrink="0"
						></div>
						<span style:font-size="12px" style:color={c.deepNavy}>Integration score (1-5)</span>
					</div>
				</div>
			</div>

			<div
				style:margin-top="16px"
				style:background-color="{c.cyan}10"
				style:border-radius="8px"
				style:padding="12px"
			>
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
					Key gaps identified in Data Readiness:
				</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Technical -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
						<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.purple}></div>
						<h3
							style:font-size="11px"
							style:font-weight="600"
							style:color={c.deepNavy}
							style:text-transform="uppercase"
							style:letter-spacing="1px"
							style:margin="0"
						>
							Dimension 2: Technical Readiness
						</h3>
					</div>
					<p style:font-size="12px" style:color={c.slate} style:margin-bottom="20px" style:margin-top="-8px">
						Can your systems support AI integration?
					</p>
				</div>
				<div style:text-align="center">
					<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">SCORE</div>
					<div style:width="48px" style:height="48px" style:border="3px solid {c.purple}" style:border-radius="8px"></div>
				</div>
			</div>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				{#each [
					{
						title: 'A. System Architecture',
						labels: [
							'Core systems involved in this process?',
							'Legacy vs modern? Documentation exists?',
						],
						score: 'Architecture score (1-5)',
					},
					{
						title: 'B. Integration Capability',
						labels: ['APIs available and documented?', 'Integration platforms (middleware)?'],
						score: 'Integration score (1-5)',
					},
					{
						title: 'C. Infrastructure',
						labels: ['Cloud, on-prem, or hybrid?', 'Security/network constraints?'],
						score: 'Infrastructure score (1-5)',
					},
					{
						title: 'D. IT Capacity',
						labels: ['IT bandwidth for AI project?', 'Typical lead time for IT requests?'],
						score: 'IT Capacity score (1-5)',
					},
				] as block}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
						<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="10px">
							{block.title}
						</div>
						{#each block.labels as label}
							<div style:margin-bottom="16px">
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">{label}</div>
								{#each lines(2) as _}
									<div
										style:border-bottom="1px solid {c.lightSlate}44"
										style:height="26px"
										style:margin-bottom="2px"
									></div>
								{/each}
							</div>
						{/each}
						<div style:display="flex" style:align-items="center" style:gap="8px">
							<div
								style:width="32px"
								style:height="32px"
								style:border="2px solid {c.purple}"
								style:border-radius="6px"
								style:flex-shrink="0"
							></div>
							<span style:font-size="12px" style:color={c.deepNavy}>{block.score}</span>
						</div>
					</div>
				{/each}
			</div>

			<div
				style:margin-top="16px"
				style:background-color="{c.purple}10"
				style:border-radius="8px"
				style:padding="12px"
			>
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
					Key gaps identified in Technical Readiness:
				</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Organisational -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
						<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.pink}></div>
						<h3
							style:font-size="11px"
							style:font-weight="600"
							style:color={c.deepNavy}
							style:text-transform="uppercase"
							style:letter-spacing="1px"
							style:margin="0"
						>
							Dimension 3: Organisational Readiness
						</h3>
					</div>
					<p style:font-size="12px" style:color={c.slate} style:margin-bottom="20px" style:margin-top="-8px">
						Do you have skills, sponsorship, and change capacity?
					</p>
				</div>
				<div style:text-align="center">
					<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">SCORE</div>
					<div style:width="48px" style:height="48px" style:border="3px solid {c.pink}" style:border-radius="8px"></div>
				</div>
			</div>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				{#each [
					{
						title: 'A. Executive Sponsorship',
						labels: ['Clear executive sponsor with budget?', 'Is AI on the strategic agenda?'],
						score: 'Sponsorship score (1-5)',
					},
					{
						title: 'B. Skills & Capabilities',
						labels: ['AI/ML understanding in-house?', 'Training that would be needed?'],
						score: 'Skills score (1-5)',
					},
					{
						title: 'C. Change Capacity',
						labels: ['Track record with change?', 'Other initiatives in flight? Fatigue?'],
						score: 'Change score (1-5)',
					},
					{
						title: 'D. Culture & Appetite',
						labels: ['Sentiment about AI? Concerns?', 'Trust in automation?'],
						score: 'Culture score (1-5)',
					},
				] as block}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
						<div style:font-size="11px" style:font-weight="600" style:color={c.pink} style:margin-bottom="10px">
							{block.title}
						</div>
						{#each block.labels as label}
							<div style:margin-bottom="16px">
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">{label}</div>
								{#each lines(2) as _}
									<div
										style:border-bottom="1px solid {c.lightSlate}44"
										style:height="26px"
										style:margin-bottom="2px"
									></div>
								{/each}
							</div>
						{/each}
						<div style:display="flex" style:align-items="center" style:gap="8px">
							<div
								style:width="32px"
								style:height="32px"
								style:border="2px solid {c.pink}"
								style:border-radius="6px"
								style:flex-shrink="0"
							></div>
							<span style:font-size="12px" style:color={c.deepNavy}>{block.score}</span>
						</div>
					</div>
				{/each}
			</div>

			<div
				style:margin-top="16px"
				style:background-color="{c.pink}10"
				style:border-radius="8px"
				style:padding="12px"
			>
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
					Key gaps identified in Organisational Readiness:
				</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Process -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
						<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.orange}></div>
						<h3
							style:font-size="11px"
							style:font-weight="600"
							style:color={c.deepNavy}
							style:text-transform="uppercase"
							style:letter-spacing="1px"
							style:margin="0"
						>
							Dimension 4: Process Readiness
						</h3>
					</div>
					<p style:font-size="12px" style:color={c.slate} style:margin-bottom="20px" style:margin-top="-8px">
						Are processes documented and standardised?
					</p>
				</div>
				<div style:text-align="center">
					<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">SCORE</div>
					<div style:width="48px" style:height="48px" style:border="3px solid {c.orange}" style:border-radius="8px"></div>
				</div>
			</div>

			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				{#each [
					{
						title: 'A. Documentation',
						labels: ['Process documented? Up to date?', 'Decision rules captured?'],
						score: 'Documentation score (1-5)',
					},
					{
						title: 'B. Standardisation',
						labels: ['Consistent execution across teams?', 'Workarounds or unofficial processes?'],
						score: 'Standardisation score (1-5)',
					},
					{
						title: 'C. Ownership',
						labels: ['Clear process owner?', 'Decision authority for changes?'],
						score: 'Ownership score (1-5)',
					},
					{
						title: 'D. Measurement',
						labels: ['Process measured today? Metrics?', 'Baseline data available?'],
						score: 'Measurement score (1-5)',
					},
				] as block}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
						<div style:font-size="11px" style:font-weight="600" style:color={c.orange} style:margin-bottom="10px">
							{block.title}
						</div>
						{#each block.labels as label}
							<div style:margin-bottom="16px">
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">{label}</div>
								{#each lines(2) as _}
									<div
										style:border-bottom="1px solid {c.lightSlate}44"
										style:height="26px"
										style:margin-bottom="2px"
									></div>
								{/each}
							</div>
						{/each}
						<div style:display="flex" style:align-items="center" style:gap="8px">
							<div
								style:width="32px"
								style:height="32px"
								style:border="2px solid {c.orange}"
								style:border-radius="6px"
								style:flex-shrink="0"
							></div>
							<span style:font-size="12px" style:color={c.deepNavy}>{block.score}</span>
						</div>
					</div>
				{/each}
			</div>

			<div
				style:margin-top="16px"
				style:background-color="{c.orange}10"
				style:border-radius="8px"
				style:padding="12px"
			>
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
					Key gaps identified in Process Readiness:
				</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Summary -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.green}></div>
				<h3
					style:font-size="11px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Summary Scorecard
				</h3>
			</div>

			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="16px" style:margin-bottom="24px">
				{#each summaryDims as dim}
					<div
						style:text-align="center"
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:border-top="4px solid {dim.color}"
					>
						<div style:font-size="11px" style:color={c.slate} style:margin-bottom="8px">{dim.title}</div>
						<div
							style:width="56px"
							style:height="56px"
							style:border="3px solid {dim.color}"
							style:border-radius="8px"
							style:margin="0 auto"
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
						>
							<span style:font-size="10px" style:color={c.lightSlate}>/5</span>
						</div>
					</div>
				{/each}
			</div>

			<div
				style:background-color={c.deepNavy}
				style:border-radius="8px"
				style:padding="20px"
				style:text-align="center"
				style:margin-bottom="24px"
			>
				<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="8px">OVERALL READINESS SCORE</div>
				<div style:display="flex" style:justify-content="center" style:align-items="center" style:gap="8px">
					<div
						style:width="64px"
						style:height="64px"
						style:border="3px solid {c.green}"
						style:border-radius="8px"
						style:display="flex"
						style:align-items="center"
						style:justify-content="center"
					>
						<span style:font-size="11px" style:color={c.lightSlate}>/5</span>
					</div>
				</div>
				<div
					style:margin-top="16px"
					style:display="flex"
					style:justify-content="center"
					style:gap="24px"
					style:font-size="10px"
				>
					<span><span style:color={c.green}>4-5</span> <span style:color={c.lightSlate}>Ready</span></span>
					<span><span style:color={c.cyan}>3-4</span> <span style:color={c.lightSlate}>Ready with prep</span></span>
					<span><span style:color={c.orange}>2-3</span> <span style:color={c.lightSlate}>Address gaps</span></span>
					<span><span style:color={c.pink}>1-2</span> <span style:color={c.lightSlate}>Not ready</span></span>
				</div>
			</div>

			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Top priority gaps to address:</div>
				{#each lines(4) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Action plan -->
	<div
		style:max-width="794px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
			<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="14px">
				<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={c.green}></div>
				<h3
					style:font-size="11px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin="0"
				>
					Readiness Action Plan
				</h3>
			</div>

			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px" style:margin-bottom="24px">
				<thead>
					<tr>
						{#each ['Gap', 'Action', 'Owner', 'Timeline', 'Priority'] as h}
							<th
								style:text-align="left"
								style:padding="10px 8px"
								style:background-color={c.offWhite}
								style:color={c.slate}
								style:font-weight="600"
								style:font-size="9px"
								style:text-transform="uppercase"
							>
								{h}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each lines(6) as _}
						<tr>
							<td style:padding="16px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="25%"></td>
							<td style:padding="16px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="30%"></td>
							<td style:padding="16px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
							<td style:padding="16px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
							<td style:padding="16px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="20px">
				<div style:font-size="12px" style:color={c.slate} style:margin-bottom="8px">
					Revised assessment: How ready is your organisation for AI? (1-10)
				</div>
				<div style:display="flex" style:justify-content="center" style:gap="8px">
					{#each lines(10) as _, i}
						<div
							style:width="28px"
							style:height="28px"
							style:border="2px solid {c.green}"
							style:border-radius="50%"
							style:display="flex"
							style:align-items="center"
							style:justify-content="center"
							style:font-size="11px"
							style:color={c.deepNavy}
						>
							{i + 1}
						</div>
					{/each}
				</div>
			</div>

			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Notes and next steps:</div>
				{#each lines(3) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="26px"
						style:margin-bottom="2px"
					></div>
				{/each}
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
				<span>AI Readiness Assessment — Participant Workbook</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
