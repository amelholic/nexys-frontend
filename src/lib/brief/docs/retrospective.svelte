<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const outcomes = [
		{ metric: '[e.g., Auto-processing rate]', target: '[65%]', actual: '[71%]', status: 'exceeded' as const },
		{ metric: '[e.g., Cycle time reduction]', target: '[50%]', actual: '[52%]', status: 'met' as const },
		{ metric: '[e.g., Error rate]', target: '[<2%]', actual: '[1.8%]', status: 'met' as const },
		{ metric: '[e.g., Go-live date]', target: '[Date]', actual: '[Date]', status: 'met' as const }
	];
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div
		style:max-width="900px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>

		<div style:padding="32px 48px" style:border-bottom="1px solid {c.lightSlate}22">
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div
						style:font-size="10px"
						style:color={c.purple}
						style:text-transform="uppercase"
						style:letter-spacing="2px"
						style:margin-bottom="8px"
					>
						Project Retrospective
					</div>
					<h1 style:font-size="24px" style:font-weight="700" style:color={c.deepNavy} style:margin="0">[Project Name]</h1>
					<div style:font-size="14px" style:color={c.slate} style:margin-top="4px">[Client Name]</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="11px" style:color={c.lightSlate}>Retrospective Date</div>
					<div style:font-size="14px" style:color={c.deepNavy}>[Date]</div>
				</div>
			</div>
		</div>

		<div style:padding="32px 48px">
			<div style:margin-bottom="32px">
				<div
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="16px"
				>
					Project Summary
				</div>

				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px" style:margin-bottom="16px">
					{#each [{ label: 'Duration', value: '[X weeks]' }, { label: 'Team Size', value: '[X people]' }, { label: 'Go-Live', value: '[Date]' }, { label: 'Status', value: 'Complete' }] as item (item.label)}
						<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px" style:text-align="center">
							<div style:font-size="16px" style:font-weight="700" style:color={c.deepNavy}>{item.value}</div>
							<div style:font-size="10px" style:color={c.slate}>{item.label}</div>
						</div>
					{/each}
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">
						Project Objective (1-2 sentences)
					</div>
					<div
						style:font-size="13px"
						style:color={c.deepNavy}
						style:min-height="24px"
						style:border-bottom="1px dashed {c.lightSlate}"
					>
						[What was the project trying to achieve?]
					</div>
				</div>
			</div>

			<div style:margin-bottom="32px">
				<div
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="16px"
				>
					Outcomes vs Goals
				</div>

				<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
					<thead>
						<tr>
							{#each ['Success Metric', 'Target', 'Actual', 'Status'] as h (h)}
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
						{#each outcomes as row (row.metric)}
							<tr>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.deepNavy}>
									{row.metric}
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:color={c.slate}>
									{row.target}
								</td>
								<td
									style:padding="12px"
									style:border-bottom="1px solid {c.lightSlate}22"
									style:color={c.deepNavy}
									style:font-weight="600"
								>
									{row.actual}
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
									<span
										style:padding="2px 8px"
										style:border-radius="3px"
										style:font-size="10px"
										style:background-color={row.status === 'exceeded'
											? `${c.green}20`
											: row.status === 'met'
												? `${c.cyan}20`
												: `${c.orange}20`}
										style:color={row.status === 'exceeded' ? c.green : row.status === 'met' ? c.cyan : c.orange}
									>
										{row.status === 'exceeded' ? '↑ Exceeded' : row.status === 'met' ? '✓ Met' : '↓ Missed'}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div style:margin-bottom="32px">
				<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
					<div style:width="8px" style:height="8px" style:border-radius="50%" style:background-color={c.green}></div>
					<div
						style:font-size="12px"
						style:font-weight="600"
						style:color={c.deepNavy}
						style:text-transform="uppercase"
						style:letter-spacing="1px"
					>
						What Went Well
					</div>
				</div>

				<div
					style:background-color="{c.green}08"
					style:border-radius="8px"
					style:padding="20px"
					style:border-left="4px solid {c.green}"
				>
					{#each [1, 2, 3, 4, 5] as n (n)}
						<div style:display="flex" style:gap="12px" style:margin-bottom={n < 5 ? '12px' : '0'}>
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="50%"
								style:background-color={c.green}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="600"
								style:flex-shrink="0"
							>
								{n}
							</div>
							<div style:flex="1" style:border-bottom="1px dashed {c.lightSlate}" style:min-height="24px"></div>
						</div>
					{/each}
				</div>
			</div>

			<div style:margin-bottom="32px">
				<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
					<div style:width="8px" style:height="8px" style:border-radius="50%" style:background-color={c.orange}></div>
					<div
						style:font-size="12px"
						style:font-weight="600"
						style:color={c.deepNavy}
						style:text-transform="uppercase"
						style:letter-spacing="1px"
					>
						What Could Be Improved
					</div>
				</div>

				<div
					style:background-color="{c.orange}08"
					style:border-radius="8px"
					style:padding="20px"
					style:border-left="4px solid {c.orange}"
				>
					{#each [1, 2, 3, 4, 5] as n (n)}
						<div style:display="flex" style:gap="12px" style:margin-bottom={n < 5 ? '12px' : '0'}>
							<div
								style:width="24px"
								style:height="24px"
								style:border-radius="50%"
								style:background-color={c.orange}
								style:color={c.white}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="12px"
								style:font-weight="600"
								style:flex-shrink="0"
							>
								{n}
							</div>
							<div style:flex="1" style:border-bottom="1px dashed {c.lightSlate}" style:min-height="24px"></div>
						</div>
					{/each}
				</div>
			</div>

			<div style:margin-bottom="32px">
				<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
					<div style:width="8px" style:height="8px" style:border-radius="50%" style:background-color={c.purple}></div>
					<div
						style:font-size="12px"
						style:font-weight="600"
						style:color={c.deepNavy}
						style:text-transform="uppercase"
						style:letter-spacing="1px"
					>
						Key Learnings
					</div>
				</div>

				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
						<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
							Technical Learnings
						</div>
						{#each [1, 2, 3] as n (n)}
							<div
								style:margin-bottom="8px"
								style:padding-bottom="8px"
								style:border-bottom={n < 3 ? `1px dashed ${c.lightSlate}` : 'none'}
								style:min-height="24px"
							></div>
						{/each}
					</div>
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
						<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
							Process Learnings
						</div>
						{#each [1, 2, 3] as n (n)}
							<div
								style:margin-bottom="8px"
								style:padding-bottom="8px"
								style:border-bottom={n < 3 ? `1px dashed ${c.lightSlate}` : 'none'}
								style:min-height="24px"
							></div>
						{/each}
					</div>
				</div>
			</div>

			<div style:margin-bottom="32px">
				<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="16px">
					<div style:width="8px" style:height="8px" style:border-radius="50%" style:background-color={c.cyan}></div>
					<div
						style:font-size="12px"
						style:font-weight="600"
						style:color={c.deepNavy}
						style:text-transform="uppercase"
						style:letter-spacing="1px"
					>
						Action Items for Future Projects
					</div>
				</div>

				<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
					<thead>
						<tr>
							{#each ['Action', 'Category', 'Owner', 'Priority'] as h (h)}
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
						{#each [1, 2, 3, 4, 5] as n (n)}
							<tr>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:width="40%">
									<div style:min-height="20px" style:border-bottom="1px dashed {c.lightSlate}"></div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:width="20%">
									<div style:display="flex" style:gap="4px" style:flex-wrap="wrap">
										{#each ['Process', 'Technical', 'Team', 'Tools'] as cat (cat)}
											<span
												style:font-size="9px"
												style:padding="2px 6px"
												style:border-radius="3px"
												style:border="1px solid {c.lightSlate}"
												style:color={c.slate}
											>
												{cat}
											</span>
										{/each}
									</div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:width="20%">
									<div style:min-height="20px" style:border-bottom="1px dashed {c.lightSlate}"></div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22" style:width="20%">
									<div style:display="flex" style:gap="4px">
										{#each ['H', 'M', 'L'] as p (p)}
											<div
												style:width="24px"
												style:height="24px"
												style:border-radius="4px"
												style:border="2px solid {c.lightSlate}"
												style:display="flex"
												style:align-items="center"
												style:justify-content="center"
												style:font-size="10px"
												style:color={c.slate}
											>
												{p}
											</div>
										{/each}
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div style:margin-bottom="32px">
				<div
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="16px"
				>
					Client Feedback
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
					<div style:display="grid" style:grid-template-columns="repeat(5, 1fr)" style:gap="8px" style:margin-bottom="20px">
						{#each [{ label: 'Overall Satisfaction' }, { label: 'Communication' }, { label: 'Technical Quality' }, { label: 'Timeline' }, { label: 'Would Recommend' }] as item (item.label)}
							<div style:text-align="center">
								<div style:font-size="10px" style:color={c.slate} style:margin-bottom="8px">{item.label}</div>
								<div style:display="flex" style:justify-content="center" style:gap="2px">
									{#each [1, 2, 3, 4, 5] as num (num)}
										<div
											style:width="20px"
											style:height="20px"
											style:border-radius="50%"
											style:border="2px solid {c.cyan}"
											style:font-size="10px"
											style:display="flex"
											style:align-items="center"
											style:justify-content="center"
											style:color={c.cyan}
										>
											{num}
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
					<div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Client Comments</div>
						<div style:min-height="60px" style:border-bottom="1px dashed {c.lightSlate}"></div>
					</div>
				</div>
			</div>

			<div style:margin-bottom="32px">
				<div
					style:font-size="12px"
					style:font-weight="600"
					style:color={c.deepNavy}
					style:text-transform="uppercase"
					style:letter-spacing="1px"
					style:margin-bottom="16px"
				>
					Team Acknowledgments
				</div>

				<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="20px">
					<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="12px">
						Shout-outs and recognition for great work:
					</div>
					{#each [1, 2, 3] as n (n)}
						<div style:display="flex" style:gap="12px" style:margin-bottom="12px">
							<div
								style:width="32px"
								style:height="32px"
								style:border-radius="50%"
								style:background-color={c.slate}
								style:display="flex"
								style:align-items="center"
								style:justify-content="center"
								style:font-size="14px"
							>
								⭐
							</div>
							<div style:flex="1" style:border-bottom="1px solid rgba(255,255,255,0.2)" style:min-height="32px"></div>
						</div>
					{/each}
				</div>
			</div>

			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="20px">
				<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="16px">
					Retrospective Completed By
				</div>
				<div style:display="grid" style:grid-template-columns="1fr 1fr 1fr" style:gap="24px">
					{#each ['Facilitator', 'Date', 'Participants'] as label (label)}
						<div>
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">{label}</div>
							<div style:border-bottom="1px solid {c.deepNavy}" style:min-height="24px"></div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div
			style:padding="20px 48px"
			style:border-top="1px solid {c.lightSlate}22"
			style:display="flex"
			style:justify-content="space-between"
			style:font-size="11px"
			style:color={c.lightSlate}
		>
			<span>Project Retrospective Template</span>
			<span>{aiFlowBrand}</span>
		</div>
	</div>
</div>
