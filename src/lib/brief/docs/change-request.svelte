<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';

	const impactRows = [
		{ label: 'Scope Impact', options: ['None', 'Minor', 'Moderate', 'Major'] },
		{ label: 'Timeline Impact', options: ['None', 'Minor', 'Moderate', 'Major'] },
		{ label: 'Cost Impact', options: ['None', 'Minor', 'Moderate', 'Major'] }
	] as const;

	const components = [
		'Agent Logic / Prompts',
		'Integrations / APIs',
		'Data Model',
		'User Interface',
		'Workflows / Routing',
		'Reporting / Analytics',
		'Security / Access',
		'Documentation',
		'Training Materials'
	] as const;

	const recOptions = [
		{ label: 'Approve', desc: 'Proceed as requested', color: c.green },
		{ label: 'Approve with Changes', desc: 'Proceed with modifications', color: c.cyan },
		{ label: 'Defer', desc: 'Postpone to later phase', color: c.orange },
		{ label: 'Reject', desc: 'Do not proceed', color: c.red }
	] as const;

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgLight}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div
		style:max-width="850px"
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
						style:color={c.orange}
						style:text-transform="uppercase"
						style:letter-spacing="2px"
						style:margin-bottom="8px"
					>
						Change Request
					</div>
					<h1 style:font-size="24px" style:font-weight="700" style:color={c.deepNavy} style:margin="0">CR-[NUMBER]</h1>
				</div>
				<div style:display="flex" style:gap="8px">
					<span
						style:font-size="10px"
						style:padding="4px 12px"
						style:background-color="{c.orange}20"
						style:color={c.orange}
						style:border-radius="4px"
						style:font-weight="600"
					>
						PENDING REVIEW
					</span>
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
					Request Details
				</div>

				<div
					style:display="grid"
					style:grid-template-columns="1fr 1fr"
					style:gap="16px"
					style:margin-bottom="16px"
				>
					{#each ['Project', 'Client', 'Requested By', 'Date Submitted'] as label, i (i)}
						<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">{label}</div>
							<div
								style:font-size="13px"
								style:color={c.deepNavy}
								style:border-bottom="1px dashed {c.lightSlate}"
								style:min-height="20px"
							>
								{[
									'[Project Name]',
									'[Client Name]',
									'[Name, Role]',
									'[Date]'
								][i]}
							</div>
						</div>
					{/each}
				</div>

				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Change Title</div>
					<div
						style:font-size="14px"
						style:font-weight="600"
						style:color={c.deepNavy}
						style:border-bottom="1px dashed {c.lightSlate}"
						style:min-height="24px"
					>
						[Brief title describing the change]
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
					Change Description
				</div>

				{#each [{ t: 'What is being requested?', d: '[Describe the change in detail. What new functionality, modification, or removal is being requested?]' }, { t: 'Why is this change needed?', d: '[Business justification. What problem does this solve? What happens if we don\'t do it?]' }, { t: 'What is the expected outcome?', d: '[How will we know this change is successful? What will be different?]' }] as block (block.t)}
					<div
						style:background-color={c.offWhite}
						style:border-radius="8px"
						style:padding="16px"
						style:margin-bottom="16px"
					>
						<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="8px">
							{block.t}
						</div>
						<div
							style:min-height="60px"
							style:border-bottom="1px dashed {c.lightSlate}"
							style:font-size="12px"
							style:color={c.slate}
							style:line-height="1.6"
						>
							{block.d}
						</div>
					</div>
				{/each}
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
					Impact Assessment ({aiFlowBrand} to Complete)
				</div>

				<div
					style:display="grid"
					style:grid-template-columns="repeat(3, 1fr)"
					style:gap="12px"
					style:margin-bottom="16px"
				>
					{#each impactRows as item (item.label)}
						<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="8px">{item.label}</div>
							<div style:display="flex" style:flex-direction="column" style:gap="4px">
								{#each item.options as opt (opt)}
									<div style:display="flex" style:align-items="center" style:gap="6px" style:font-size="11px" style:color={c.deepNavy}>
										<div
											style:width="14px"
											style:height="14px"
											style:border-radius="50%"
											style:border="2px solid {c.lightSlate}"
										></div>
										{opt}
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">
							Estimated Additional Effort
						</div>
						<div
							style:font-size="13px"
							style:color={c.deepNavy}
							style:border-bottom="1px dashed {c.lightSlate}"
							style:min-height="20px"
						>
							[X days/hours]
						</div>
					</div>
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">
							Estimated Additional Cost
						</div>
						<div
							style:font-size="13px"
							style:color={c.deepNavy}
							style:border-bottom="1px dashed {c.lightSlate}"
							style:min-height="20px"
						>
							$[Amount]
						</div>
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
					Components Affected
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div
						style:display="grid"
						style:grid-template-columns="repeat(3, 1fr)"
						style:gap="8px"
						style:margin-bottom="16px"
					>
						{#each components as comp (comp)}
							<div style:display="flex" style:align-items="center" style:gap="8px" style:font-size="11px" style:color={c.deepNavy}>
								<div
									style:width="16px"
									style:height="16px"
									style:border-radius="4px"
									style:border="2px solid {c.lightSlate}"
								></div>
								{comp}
							</div>
						{/each}
					</div>
					<div>
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Details / Notes</div>
						<div style:min-height="40px" style:border-bottom="1px dashed {c.lightSlate}"></div>
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
					Risk Assessment
				</div>

				<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
					<thead>
						<tr>
							{#each ['Risk', 'Likelihood', 'Impact', 'Mitigation'] as h (h)}
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
						{#each [1, 2, 3] as n (n)}
							<tr>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
									<div style:min-height="20px" style:border-bottom="1px dashed {c.lightSlate}"></div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
									<div style:display="flex" style:gap="8px">
										{#each ['L', 'M', 'H'] as level (level)}
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
												{level}
											</div>
										{/each}
									</div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
									<div style:display="flex" style:gap="8px">
										{#each ['L', 'M', 'H'] as level (level)}
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
												{level}
											</div>
										{/each}
									</div>
								</td>
								<td style:padding="12px" style:border-bottom="1px solid {c.lightSlate}22">
									<div style:min-height="20px" style:border-bottom="1px dashed {c.lightSlate}"></div>
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
					{aiFlowBrand} Recommendation
				</div>

				<div
					style:display="grid"
					style:grid-template-columns="repeat(4, 1fr)"
					style:gap="12px"
					style:margin-bottom="16px"
				>
					{#each recOptions as opt (opt.label)}
						<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="12px" style:text-align="center">
							<div
								style:width="20px"
								style:height="20px"
								style:border-radius="50%"
								style:border="2px solid {opt.color}"
								style:margin="0 auto 8px"
							></div>
							<div style:font-size="12px" style:font-weight="600" style:color={opt.color}>{opt.label}</div>
							<div style:font-size="9px" style:color={c.slate}>{opt.desc}</div>
						</div>
					{/each}
				</div>

				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Rationale / Notes</div>
					<div style:min-height="60px" style:border-bottom="1px dashed {c.lightSlate}"></div>
				</div>
			</div>

			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="24px">
				<div style:font-size="12px" style:font-weight="600" style:color={c.white} style:margin-bottom="16px">
					Approvals
				</div>

				<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="24px">
					{#each ['Client Approval', `${aiFlowBrand} Approval`] as title (title)}
						<div>
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="8px">{title}</div>
							<div style:background-color="rgba(255,255,255,0.1)" style:border-radius="6px" style:padding="12px">
								<div style:display="flex" style:gap="16px" style:margin-bottom="8px">
									{#each ['Approved', 'Rejected'] as opt (opt)}
										<div style:display="flex" style:align-items="center" style:gap="6px" style:font-size="11px" style:color={c.white}>
											<div style:width="14px" style:height="14px" style:border-radius="50%" style:border="2px solid white"></div>
											{opt}
										</div>
									{/each}
								</div>
								<div style:border-bottom="1px solid rgba(255,255,255,0.3)" style:margin-bottom="4px" style:min-height="24px"></div>
								<div style:font-size="10px" style:color={c.lightSlate}>Name & Date</div>
							</div>
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
			<span>Change Request Template</span>
			<span>{aiFlowBrand}</span>
		</div>
	</div>
</div>
