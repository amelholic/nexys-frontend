<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { checklist } from '$lib/brief/docs/data/go-live-data';

	const gradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 35%, ${c.pink} 65%, ${c.orange} 100%)`;

	const totalItems = checklist.categories.reduce((s, cat) => s + cat.items.length, 0);
</script>

{#snippet sectionTitle(label: string, color: string)}
	<div style:display="flex" style:align-items="center" style:gap="8px" style:margin-bottom="12px" style:margin-top="24px">
		<div style:width="6px" style:height="6px" style:border-radius="50%" style:background-color={color}></div>
		<h3
			style:font-size="11px"
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
	<!-- Page 1 -->
	<div
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:background={c.deepNavy} style:padding="28px 36px" style:position="relative">
			<div
				style:position="absolute"
				style:top="0"
				style:left="0"
				style:right="0"
				style:height="4px"
				style:background={gradient}
			></div>
			<div style:display="flex" style:justify-content="space-between" style:align-items="flex-start">
				<div>
					<div
						style:font-size="9px"
						style:color={c.cyan}
						style:text-transform="uppercase"
						style:letter-spacing="2px"
						style:margin-bottom="6px"
					>
						Go-Live Checklist · {aiFlowBrand}
					</div>
					<h1 style:font-size="24px" style:font-weight="700" style:color={c.white} style:margin="0 0 6px 0">
						{checklist.project}
					</h1>
					<div style:font-size="11px" style:color={c.lightSlate}>
						{checklist.client} • {checklist.agentId}
					</div>
				</div>
				<div style:text-align="right">
					<div style:font-size="10px" style:color={c.lightSlate} style:margin-bottom="4px">Target Go-Live</div>
					<div style:font-size="18px" style:font-weight="700" style:color={c.cyan}>{checklist.targetDate}</div>
				</div>
			</div>
		</div>

		<div style:padding="20px 36px 36px">
			<div style:display="grid" style:grid-template-columns="repeat(4, 1fr)" style:gap="12px" style:margin-bottom="24px">
				{#each [{ label: 'Total Items', value: String(totalItems), color: c.slate }, { label: 'Completed', value: '—', color: c.green }, { label: 'In Progress', value: '—', color: c.orange }, { label: 'Blocked', value: '—', color: c.red }] as stat (stat.label)}
					<div style:background-color={c.offWhite} style:border-radius="6px" style:padding="14px" style:text-align="center">
						<div style:font-size="9px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="4px">
							{stat.label}
						</div>
						<div style:font-size="24px" style:font-weight="700" style:color={stat.color}>{stat.value}</div>
					</div>
				{/each}
			</div>

			{#each checklist.categories.slice(0, 4) as category (category.name)}
				{@render sectionTitle(category.name, category.color)}
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="4px 16px">
					{#each category.items as item (item.id)}
						<div
							style:display="flex"
							style:align-items="flex-start"
							style:gap="12px"
							style:padding="10px 0"
							style:border-bottom="1px solid {c.lightSlate}22"
						>
							<div
								style:width="20px"
								style:height="20px"
								style:border-radius="4px"
								style:border="2px solid {category.color}"
								style:flex-shrink="0"
								style:margin-top="2px"
							></div>
							<div style:flex="1">
								<div style:font-size="12px" style:color={c.deepNavy}>{item.item}</div>
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-top="2px">Owner: {item.owner}</div>
							</div>
							<div
								style:font-size="10px"
								style:color={c.lightSlate}
								style:font-family="'JetBrains Mono', monospace"
								style:margin-top="2px"
							>
								{item.id}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<!-- Page 2 -->
	<div
		class="page-break"
		style:max-width="850px"
		style:margin="0 auto 40px"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="24px 36px 36px">
			<div
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
				style:padding-bottom="14px"
				style:border-bottom="1px solid {c.lightSlate}33"
				style:margin-bottom="8px"
			>
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>
					{checklist.project} — Go-Live Checklist
				</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 2</span>
			</div>

			{#each checklist.categories.slice(4) as category (category.name)}
				{@render sectionTitle(category.name, category.color)}
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="4px 16px">
					{#each category.items as item (item.id)}
						<div
							style:display="flex"
							style:align-items="flex-start"
							style:gap="12px"
							style:padding="10px 0"
							style:border-bottom="1px solid {c.lightSlate}22"
						>
							<div
								style:width="20px"
								style:height="20px"
								style:border-radius="4px"
								style:border="2px solid {category.color}"
								style:flex-shrink="0"
								style:margin-top="2px"
							></div>
							<div style:flex="1">
								<div style:font-size="12px" style:color={c.deepNavy}>{item.item}</div>
								<div style:font-size="10px" style:color={c.lightSlate} style:margin-top="2px">Owner: {item.owner}</div>
							</div>
							<div
								style:font-size="10px"
								style:color={c.lightSlate}
								style:font-family="'JetBrains Mono', monospace"
								style:margin-top="2px"
							>
								{item.id}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<!-- Page 3 -->
	<div
		class="page-break"
		style:max-width="850px"
		style:margin="0 auto"
		style:background-color={c.white}
		style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	>
		<div style:height="4px" style:background={gradient}></div>
		<div style:padding="24px 36px 36px">
			<div
				style:display="flex"
				style:justify-content="space-between"
				style:align-items="center"
				style:padding-bottom="14px"
				style:border-bottom="1px solid {c.lightSlate}33"
				style:margin-bottom="8px"
			>
				<span style:font-size="13px" style:font-weight="600" style:color={c.deepNavy}>
					{checklist.project} — Go-Live Checklist
				</span>
				<span style:font-size="10px" style:color={c.lightSlate}>Page 3</span>
			</div>

			{@render sectionTitle('Go / No-Go Decision', c.purple)}
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="16px" style:margin-bottom="32px">
				<div
					style:background-color="{c.green}10"
					style:border="2px solid {c.green}"
					style:border-radius="8px"
					style:padding="24px"
					style:text-align="center"
				>
					<div
						style:width="32px"
						style:height="32px"
						style:border-radius="50%"
						style:border="3px solid {c.green}"
						style:margin="0 auto 12px"
					></div>
					<div style:font-size="18px" style:font-weight="700" style:color={c.green}>GO</div>
					<div style:font-size="11px" style:color={c.slate} style:margin-top="6px">
						All items complete, approved for production
					</div>
				</div>
				<div
					style:background-color="{c.red}10"
					style:border="2px solid {c.red}"
					style:border-radius="8px"
					style:padding="24px"
					style:text-align="center"
				>
					<div
						style:width="32px"
						style:height="32px"
						style:border-radius="50%"
						style:border="3px solid {c.red}"
						style:margin="0 auto 12px"
					></div>
					<div style:font-size="18px" style:font-weight="700" style:color={c.red}>NO-GO</div>
					<div style:font-size="11px" style:color={c.slate} style:margin-top="6px">
						Blocking items remain, deployment deferred
					</div>
				</div>
			</div>

			{@render sectionTitle('Blocking Items (if No-Go)', c.orange)}
			<div
				style:background-color={c.offWhite}
				style:border-radius="8px"
				style:padding="16px"
				style:margin-bottom="24px"
				style:min-height="80px"
			>
				<div style:font-size="10px" style:color={c.lightSlate} style:font-style="italic">
					List any items preventing go-live and remediation plan:
				</div>
			</div>

			{@render sectionTitle('Sign-Off', c.cyan)}
			<p style:font-size="11px" style:color={c.slate} style:margin-bottom="16px">
				By signing below, I confirm that all items in my area of responsibility have been completed and verified.
			</p>

			<table style:width="100%" style:border-collapse="collapse" style:font-size="11px">
				<thead>
					<tr>
						{#each ['Role', 'Name', 'Date', 'Signature'] as h (h)}
							<th
								style:text-align="left"
								style:padding="10px 12px"
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
					{#each checklist.signoffs as signoff (signoff.role)}
						<tr>
							<td style:padding="16px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:font-weight="500" style:color={c.deepNavy}>
								{signoff.role}
							</td>
							<td style:padding="16px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:min-width="150px">
								<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="20px"></div>
							</td>
							<td style:padding="16px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:min-width="100px">
								<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="20px"></div>
							</td>
							<td style:padding="16px 12px" style:border-bottom="1px solid {c.lightSlate}22" style:min-width="150px">
								<div style:border-bottom="1px solid {c.lightSlate}" style:min-height="20px"></div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div style:margin-top="32px" style:background-color={c.deepNavy} style:border-radius="8px" style:padding="24px">
				<div style:display="grid" style:grid-template-columns="1fr 1fr 1fr" style:gap="24px">
					{#each ['Decision', 'Decided By', 'Date & Time'] as label (label)}
						<div>
							<div style:font-size="10px" style:color={c.lightSlate} style:text-transform="uppercase" style:margin-bottom="6px">
								{label}
							</div>
							<div style:border-bottom="2px solid {c.lightSlate}" style:min-height="24px"></div>
						</div>
					{/each}
				</div>
			</div>

			<div
				style:margin-top="28px"
				style:padding-top="14px"
				style:border-top="1px solid {c.lightSlate}33"
				style:display="flex"
				style:justify-content="space-between"
				style:font-size="10px"
				style:color={c.lightSlate}
			>
				<span>Go-Live Checklist Template · {aiFlowBrand}</span>
				<span>Confidential</span>
			</div>
		</div>
	</div>
</div>
