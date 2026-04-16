<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const exceptionCats = [
		{ cat: 'Data', desc: 'Missing, wrong format' },
		{ cat: 'Rule', desc: 'Needs judgment' },
		{ cat: 'System', desc: 'Technical issues' },
		{ cat: 'Timing', desc: 'Urgent, late' },
		{ cat: 'Stakeholder', desc: 'Special request' },
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
				Process Mapping for AI
			</h1>
			<p style:font-size="14px" style:color={c.slate} style:margin-bottom="48px">Participant Workbook</p>
			<div
				style:display="grid"
				style:grid-template-columns="1fr 1fr"
				style:gap="24px"
				style:max-width="500px"
				style:margin="0 auto"
				style:text-align="left"
			>
				<div style:grid-column="1 / -1">
					<div
						style:font-size="10px"
						style:color={c.lightSlate}
						style:text-transform="uppercase"
						style:margin-bottom="6px"
					>
						Process Being Mapped
					</div>
					<div style:border-bottom="2px solid {c.cyan}" style:min-height="28px"></div>
				</div>
				{#each [{ label: 'Your Name' }, { label: 'Role' }, { label: 'Organisation' }, { label: 'Date' }] as field}
					<div>
						<div
							style:font-size="10px"
							style:color={c.lightSlate}
							style:text-transform="uppercase"
							style:margin-bottom="6px"
						>
							{field.label}
						</div>
						<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Process overview -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
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
					Process Overview
				</h3>
			</div>
			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Process name and purpose:</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="24px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="16px">
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:margin-bottom="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							What triggers this process?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="24px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
				</div>
				<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px">
					<div style:margin-bottom="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							What is the end result/output?
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="24px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
				</div>
			</div>
			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Who is involved? (roles)</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="24px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
			<div style:margin-bottom="16px">
				<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Which systems are touched?</div>
				{#each lines(2) as _}
					<div
						style:border-bottom="1px solid {c.lightSlate}44"
						style:height="24px"
						style:margin-bottom="2px"
					></div>
				{/each}
			</div>
			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="16px" style:margin-top="16px">
				<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="8px">
					Quick stats (estimates are fine)
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each ['Volume per month', 'Avg time per item', 'People involved', 'Error rate'] as label}
						<div>
							<div style:font-size="9px" style:color={c.lightSlate}>{label}</div>
							<div
								style:border-bottom="1px solid {c.lightSlate}"
								style:min-height="20px"
								style:margin-top="4px"
							></div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Process steps -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
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
					Process Steps
				</h3>
			</div>
			<p style:font-size="11px" style:color={c.slate} style:margin-bottom="16px">
				Document each step in the process. Use extra sheets if needed.
			</p>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
				<thead>
					<tr>
						{#each ['#', 'Step / Action', 'Who', 'System', 'Time', 'Notes'] as h}
							<th
								style:text-align="left"
								style:padding="8px 6px"
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
					{#each lines(12) as _, i}
						<tr>
							<td
								style:padding="14px 6px"
								style:border-bottom="1px solid {c.lightSlate}22"
								style:width="30px"
								style:color={c.lightSlate}
							>
								{i + 1}
							</td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="30%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="12%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="10%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22"></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Volume & timing -->
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
					Volume & Timing Analysis
				</h3>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
						Volume
					</div>
					{#each ['Items per day (average):', 'Items per month (total):', 'Peak times/days:', 'Trend (growing/stable/declining):'] as label}
						<div style:margin-bottom="14px">
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">{label}</div>
							{#each lines(1) as _}
								<div
									style:border-bottom="1px solid {c.lightSlate}44"
									style:height="24px"
									style:margin-bottom="2px"
								></div>
							{/each}
						</div>
					{/each}
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
						Timing
					</div>
					{#each [
						'Total cycle time (start to finish):',
						'Total touch time (actual work):',
						'Wait time (queuing/delays):',
						'Fastest vs slowest case:',
					] as label}
						<div style:margin-bottom="14px">
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">{label}</div>
							{#each lines(1) as _}
								<div
									style:border-bottom="1px solid {c.lightSlate}44"
									style:height="24px"
									style:margin-bottom="2px"
								></div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
			<div style:margin-top="16px">
				<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
					Timing by Step
				</div>
				<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
					<thead>
						<tr>
							{#each ['Step', 'Typical Time', 'Min', 'Max', 'What causes variation?'] as h}
								<th
									style:text-align="left"
									style:padding="8px"
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
								<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="25%"></td>
								<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
								<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="10%"></td>
								<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="10%"></td>
								<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22"></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Decision rules x2 -->
	{#each [1, 2] as page}
		<div
			style:max-width="794px"
			style:margin="0 auto 40px"
			style:background-color={c.white}
			style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
		>
			<div style:height="4px" style:background={gradient}></div>
			<div style:padding="32px 48px">
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
						Decision Rules {page > 1 ? '(continued)' : ''}
					</h3>
				</div>
				{#if page === 1}
					<p style:font-size="11px" style:color={c.slate} style:margin-bottom="16px">
						Document each decision point. Use IF/THEN/ELSE format where possible.
					</p>
				{/if}
				{#each [1, 2] as n}
					<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="16px">
						<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="12px" style:margin-bottom="12px">
							<div>
								<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">
									Decision #{(page - 1) * 2 + n}
								</div>
								<div style:border-bottom="2px solid {c.pink}" style:min-height="24px"></div>
							</div>
							<div>
								<div style:font-size="9px" style:color={c.lightSlate} style:margin-bottom="4px">Possible outcomes</div>
								<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="24px"></div>
							</div>
						</div>
						<div style:margin-bottom="14px">
							<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
								Decision rules (IF... THEN... ELSE...):
							</div>
							{#each lines(4) as _}
								<div
									style:border-bottom="1px solid {c.lightSlate}44"
									style:height="24px"
									style:margin-bottom="2px"
								></div>
							{/each}
						</div>
						<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="12px">
							<div style:margin-bottom="14px">
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
									Information needed to decide:
								</div>
								{#each lines(1) as _}
									<div
										style:border-bottom="1px solid {c.lightSlate}44"
										style:height="24px"
										style:margin-bottom="2px"
									></div>
								{/each}
							</div>
							<div style:margin-bottom="14px">
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
									% of cases this covers:
								</div>
								{#each lines(1) as _}
									<div
										style:border-bottom="1px solid {c.lightSlate}44"
										style:height="24px"
										style:margin-bottom="2px"
									></div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<!-- Exception catalogue -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
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
					Exception Catalogue
				</h3>
			</div>
			<p style:font-size="11px" style:color={c.slate} style:margin-bottom="16px">
				List all exceptions, edge cases, and things that do not follow the normal path.
			</p>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="10px" style:margin-bottom="16px">
				<thead>
					<tr>
						{#each ['Exception', 'Category', 'Frequency', 'Current Handling', 'AI?'] as h}
							<th
								style:text-align="left"
								style:padding="8px 6px"
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
					{#each lines(8) as _}
						<tr>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="30%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="12%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="25%"></td>
							<td style:padding="14px 6px" style:border-bottom="1px solid {c.lightSlate}22" style:width="18%"></td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div style:display="grid" style:grid-template-columns="repeat(5, 1fr)" style:gap="8px" style:margin-bottom="16px">
				{#each exceptionCats as x}
					<div style:background-color={c.offWhite} style:border-radius="4px" style:padding="8px" style:text-align="center">
						<div style:font-size="10px" style:font-weight="600" style:color={c.orange}>{x.cat}</div>
						<div style:font-size="8px" style:color={c.slate}>{x.desc}</div>
					</div>
				{/each}
			</div>
			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="8px" style:font-size="9px">
				<div style:background-color="{c.green}15" style:padding="8px" style:border-radius="4px" style:text-align="center">
					<strong style:color={c.green}>Automate</strong><br /><span style:color={c.slate}>Rules can handle</span>
				</div>
				<div style:background-color="{c.cyan}15" style:padding="8px" style:border-radius="4px" style:text-align="center">
					<strong style:color={c.cyan}>Assist</strong><br /><span style:color={c.slate}>AI prepares, human approves</span>
				</div>
				<div style:background-color="{c.orange}15" style:padding="8px" style:border-radius="4px" style:text-align="center">
					<strong style:color={c.orange}>Escalate</strong><br /><span style:color={c.slate}>Must go to human</span>
				</div>
				<div style:background-color="{c.pink}15" style:padding="8px" style:border-radius="4px" style:text-align="center">
					<strong style:color={c.pink}>Prevent</strong><br /><span style:color={c.slate}>Stop it occurring</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Data & systems -->
	<div
		style:max-width="794px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="32px 48px">
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
					Data & Systems
				</h3>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="16px">
				<div style:background-color="{c.cyan}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="12px">
						Input Data
					</div>
					<table style:width="100%" style:border-collapse="collapse" style:font-size="9px">
						<thead>
							<tr>
								{#each ['Document/Data', 'Format', 'Source'] as h}
									<th style:text-align="left" style:padding="6px 4px" style:color={c.slate} style:font-weight="600">
										{h}
									</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each lines(4) as _}
								<tr>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<div style:background-color="{c.pink}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.pink} style:margin-bottom="12px">
						Output Data
					</div>
					<table style:width="100%" style:border-collapse="collapse" style:font-size="9px">
						<thead>
							<tr>
								{#each ['Data Created', 'Format', 'Destination'] as h}
									<th style:text-align="left" style:padding="6px 4px" style:color={c.slate} style:font-weight="600">
										{h}
									</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each lines(4) as _}
								<tr>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
									<td style:padding="10px 4px" style:border-bottom="1px solid {c.lightSlate}22"></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="12px">
				Systems Involved
			</div>
			<table style:width="100%" style:border-collapse="collapse" style:font-size="10px">
				<thead>
					<tr>
						{#each ['System', 'Role in Process', 'API Available?', 'Integration Notes'] as h}
							<th
								style:text-align="left"
								style:padding="8px"
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
					{#each lines(5) as _}
						<tr>
							<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="25%"></td>
							<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="25%"></td>
							<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22" style:width="15%"></td>
							<td style:padding="12px 8px" style:border-bottom="1px solid {c.lightSlate}22"></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Agent spec -->
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
					Draft Agent Specification
				</h3>
			</div>
			<div style:display="grid" style:grid-template-columns="2fr 1fr" style:gap="16px" style:margin-bottom="16px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:margin-bottom="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Agent name/identifier:</div>
						{#each lines(1) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="24px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Primary function (what does it do?):
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="24px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
					<div style:margin-bottom="14px">
						<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
							Scope (what is IN and what is OUT):
						</div>
						{#each lines(2) as _}
							<div
								style:border-bottom="1px solid {c.lightSlate}44"
								style:height="24px"
								style:margin-bottom="2px"
							></div>
						{/each}
					</div>
				</div>
				<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="16px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="12px">Automation target:</div>
					{#each ['Full automation', 'Assisted (AI + human)', 'Triage/routing only'] as opt}
						<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="8px">
							<div
								style:width="16px"
								style:height="16px"
								style:border="2px solid {c.green}"
								style:border-radius="4px"
							></div>
							<span style:font-size="11px" style:color={c.white}>{opt}</span>
						</div>
					{/each}
				</div>
			</div>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="16px">
				<div style:background-color="{c.cyan}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						Inputs (what agent receives)
					</div>
					{#each lines(3) as _}
						<div
							style:border-bottom="1px solid {c.lightSlate}44"
							style:height="24px"
							style:margin-bottom="2px"
						></div>
					{/each}
				</div>
				<div style:background-color="{c.pink}10" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:font-weight="600" style:color={c.pink} style:margin-bottom="10px">
						Outputs (what agent produces)
					</div>
					{#each lines(3) as _}
						<div
							style:border-bottom="1px solid {c.lightSlate}44"
							style:height="24px"
							style:margin-bottom="2px"
						></div>
					{/each}
				</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px" style:margin-bottom="16px">
				<div style:font-size="11px" style:font-weight="600" style:color={c.purple} style:margin-bottom="10px">
					Human Touchpoints
				</div>
				<div style:margin-bottom="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">
						When does a human get involved?
					</div>
					{#each lines(2) as _}
						<div
							style:border-bottom="1px solid {c.lightSlate}44"
							style:height="24px"
							style:margin-bottom="2px"
						></div>
					{/each}
				</div>
				<div style:margin-bottom="14px">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="6px">Escalation triggers:</div>
					{#each lines(1) as _}
						<div
							style:border-bottom="1px solid {c.lightSlate}44"
							style:height="24px"
							style:margin-bottom="2px"
						></div>
					{/each}
				</div>
			</div>
			<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
				<div style:font-size="11px" style:font-weight="600" style:color={c.green} style:margin-bottom="10px">
					Success Metrics
				</div>
				<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px">
					{#each ['% auto-processed', 'Time saved', 'Accuracy target', 'Cost per item'] as metric}
						<div>
							<div style:font-size="9px" style:color={c.slate}>{metric}</div>
							<div style:border-bottom="2px solid {c.green}" style:min-height="24px" style:margin-top="4px"></div>
						</div>
					{/each}
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
				<span>Process Mapping for AI — Participant Workbook</span>
				<span>AI Flow</span>
			</div>
		</div>
	</div>
</div>
