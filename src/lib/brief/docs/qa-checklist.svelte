<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import { qaChecklistSections as sections } from '$lib/brief/docs/data/qa-checklist-sections';
	import type { QaSection } from '$lib/brief/docs/data/qa-checklist-sections';

	let checkedItems = $state<Record<string, boolean>>({});

	function toggleItem(sectionId: string, itemId: number) {
		const key = `${sectionId}-${itemId}`;
		checkedItems = { ...checkedItems, [key]: !checkedItems[key] };
	}

	const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
	const checkedCount = $derived(Object.values(checkedItems).filter(Boolean).length);
	const criticalItems = sections.reduce((acc, s) => acc + s.items.filter((i) => i.critical).length, 0);
	const criticalChecked = $derived.by(() => {
		let count = 0;
		for (const s of sections) {
			for (const item of s.items) {
				if (item.critical && checkedItems[`${s.id}-${item.id}`]) count++;
			}
		}
		return count;
	});
	const pctComplete = $derived(Math.round((checkedCount / totalItems) * 100));
	const allCriticalComplete = $derived(criticalChecked === criticalItems);

	function sectionProgress(section: QaSection) {
		const checked = section.items.filter((item) => checkedItems[`${section.id}-${item.id}`]).length;
		return Math.round((checked / section.items.length) * 100);
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
				Quality Assurance · {aiFlowBrand}
			</div>
			<h1 style:font-size="32px" style:font-weight="700" style:color={c.white} style:margin="0 0 8px 0">
				Pre-Go-Live Checklist
			</h1>
			<p style:font-size="14px" style:color={c.lightSlate} style:margin="0">
				Ensure all quality gates are passed before deployment
			</p>
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="24px" style:margin-bottom="32px">
			<div
				style:display="grid"
				style:grid-template-columns="repeat(4, 1fr)"
				style:gap="20px"
				style:margin-bottom="24px"
			>
				<div style:text-align="center">
					<div style:font-size="32px" style:font-weight="700" style:color={c.cyan}>
						{checkedCount}<span style:font-size="18px" style:color={c.slate}>/{totalItems}</span>
					</div>
					<div style:font-size="12px" style:color={c.lightSlate}>Total Items</div>
				</div>
				<div style:text-align="center">
					<div
						style:font-size="32px"
						style:font-weight="700"
						style:color={criticalChecked === criticalItems ? c.green : c.orange}
					>
						{criticalChecked}<span style:font-size="18px" style:color={c.slate}>/{criticalItems}</span>
					</div>
					<div style:font-size="12px" style:color={c.lightSlate}>Critical Items</div>
				</div>
				<div style:text-align="center">
					<div style:font-size="32px" style:font-weight="700" style:color={c.purple}>{pctComplete}%</div>
					<div style:font-size="12px" style:color={c.lightSlate}>Complete</div>
				</div>
				<div style:text-align="center">
					<div
						style:padding="12px 24px"
						style:background-color={allCriticalComplete ? `${c.green}20` : `${c.red}20`}
						style:border="2px solid {allCriticalComplete ? c.green : c.red}"
						style:border-radius="8px"
					>
						<div style:font-size="14px" style:font-weight="700" style:color={allCriticalComplete ? c.green : c.red}>
							{allCriticalComplete ? 'GO' : 'NOT READY'}
						</div>
					</div>
					<div style:font-size="12px" style:color={c.lightSlate} style:margin-top="8px">Go-Live Status</div>
				</div>
			</div>

			<div>
				<div style:display="flex" style:justify-content="space-between" style:margin-bottom="8px">
					<span style:font-size="12px" style:color={c.lightSlate}>Overall Progress</span>
					<span style:font-size="12px" style:color={c.cyan}>{pctComplete}%</span>
				</div>
				<div style:height="8px" style:background-color={c.pageBgDark} style:border-radius="4px" style:overflow="hidden">
					<div
						style:width="{pctComplete}%"
						style:height="100%"
						style:background-color={c.cyan}
						style:border-radius="4px"
					></div>
				</div>
			</div>
		</div>

		<div
			style:display="grid"
			style:grid-template-columns="repeat(4, 1fr)"
			style:gap="12px"
			style:margin-bottom="32px"
		>
			{#each sections as section (section.id)}
				<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="12px">
					<div style:display="flex" style:justify-content="space-between" style:align-items="center" style:margin-bottom="8px">
						<span style:font-size="10px" style:color={section.color} style:font-weight="600">{section.name}</span>
						<span style:font-size="10px" style:color={c.slate}>{sectionProgress(section)}%</span>
					</div>
					<div style:height="4px" style:background-color={c.pageBgDark} style:border-radius="2px" style:overflow="hidden">
						<div
							style:width="{sectionProgress(section)}%"
							style:height="100%"
							style:background-color={section.color}
							style:border-radius="2px"
						></div>
					</div>
				</div>
			{/each}
		</div>

		{#each sections as section (section.id)}
			<div style:background-color={c.deepNavy} style:border-radius="16px" style:overflow="hidden" style:margin-bottom="24px">
				<div
					style:padding="16px 24px"
					style:border-bottom="1px solid {c.slate}33"
					style:display="flex"
					style:justify-content="space-between"
					style:align-items="center"
				>
					<div style:display="flex" style:align-items="center" style:gap="12px">
						<div style:width="4px" style:height="24px" style:background-color={section.color} style:border-radius="2px"></div>
						<div>
							<h2 style:font-size="16px" style:font-weight="600" style:color={c.white} style:margin="0">{section.name}</h2>
							<span style:font-size="11px" style:color={c.slate}>{section.phase}</span>
						</div>
					</div>
					<div style:display="flex" style:align-items="center" style:gap="12px">
						<span style:font-size="12px" style:color={section.color}>
							{section.items.filter((item) => checkedItems[`${section.id}-${item.id}`]).length}/{section.items.length}
						</span>
						<div style:width="60px" style:height="6px" style:background-color={c.pageBgDark} style:border-radius="3px" style:overflow="hidden">
							<div
								style:width="{sectionProgress(section)}%"
								style:height="100%"
								style:background-color={section.color}
								style:border-radius="3px"
							></div>
						</div>
					</div>
				</div>

				<div style:padding="16px 24px">
					<div style:display="flex" style:flex-direction="column" style:gap="8px">
						{#each section.items as item (item.id)}
							<button
								type="button"
								onclick={() => toggleItem(section.id, item.id)}
								style:display="flex"
								style:width="100%"
								style:text-align="left"
								style:font="inherit"
								style:color="inherit"
								style:align-items="center"
								style:gap="16px"
								style:padding="12px 16px"
								style:background-color={c.pageBgDark}
								style:border-radius="8px"
								style:cursor="pointer"
								style:border={item.critical ? `1px solid ${c.orange}30` : 'none'}
							>
								<div
									style:width="24px"
									style:height="24px"
									style:border-radius="6px"
									style:border={checkedItems[`${section.id}-${item.id}`]
										? `2px solid ${c.green}`
										: `2px solid ${c.slate}`}
									style:background-color={checkedItems[`${section.id}-${item.id}`] ? `${c.green}20` : 'transparent'}
									style:display="flex"
									style:align-items="center"
									style:justify-content="center"
									style:flex-shrink="0"
								>
									{#if checkedItems[`${section.id}-${item.id}`]}
										<span style:color={c.green} style:font-size="14px">✓</span>
									{/if}
								</div>
								<div style:flex="1">
									<div
										style:font-size="13px"
										style:color={checkedItems[`${section.id}-${item.id}`] ? c.lightSlate : c.white}
										style:text-decoration={checkedItems[`${section.id}-${item.id}`] ? 'line-through' : 'none'}
									>
										{item.item}
									</div>
								</div>
								{#if item.critical}
									<span
										style:font-size="9px"
										style:padding="2px 6px"
										style:background-color="{c.orange}20"
										style:color={c.orange}
										style:border-radius="4px"
										style:font-weight="600"
									>
										CRITICAL
									</span>
								{/if}
								<span style:font-size="11px" style:color={c.slate} style:min-width="100px" style:text-align="right">
									{item.owner}
								</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="24px">
			<h3 style:font-size="16px" style:font-weight="600" style:color={c.white} style:margin="0 0 20px 0">Go-Live Approval</h3>

			<div style:display="grid" style:grid-template-columns="repeat(2, 1fr)" style:gap="20px">
				<div style:background-color={c.pageBgDark} style:border-radius="8px" style:padding="20px">
					<div style:font-size="12px" style:color={c.slate} style:margin-bottom="8px">Delivery Lead Sign-off</div>
					<div style:border-bottom="1px solid {c.slate}" style:padding-bottom="8px" style:margin-bottom="8px">
						<span style:font-size="13px" style:color={c.lightSlate}>Name: _____________________</span>
					</div>
					<div style:display="flex" style:justify-content="space-between">
						<span style:font-size="13px" style:color={c.lightSlate}>Signature: ______________</span>
						<span style:font-size="13px" style:color={c.lightSlate}>Date: __________</span>
					</div>
				</div>

				<div style:background-color={c.pageBgDark} style:border-radius="8px" style:padding="20px">
					<div style:font-size="12px" style:color={c.slate} style:margin-bottom="8px">Client Sign-off</div>
					<div style:border-bottom="1px solid {c.slate}" style:padding-bottom="8px" style:margin-bottom="8px">
						<span style:font-size="13px" style:color={c.lightSlate}>Name: _____________________</span>
					</div>
					<div style:display="flex" style:justify-content="space-between">
						<span style:font-size="13px" style:color={c.lightSlate}>Signature: ______________</span>
						<span style:font-size="13px" style:color={c.lightSlate}>Date: __________</span>
					</div>
				</div>
			</div>

			<div
				style:margin-top="20px"
				style:padding="16px"
				style:background-color="{c.cyan}10"
				style:border-radius="8px"
				style:border="1px solid {c.cyan}30"
			>
				<div style:font-size="12px" style:color={c.lightSlate}>
					<strong style:color={c.cyan}>Note:</strong> All critical items must be completed before go-live approval can be granted.
					Non-critical items may be deferred with documented risk acceptance.
				</div>
			</div>
		</div>

		<div style:text-align="center" style:margin-top="40px" style:font-size="12px" style:color={c.slate}>
			<div style:color={c.cyan} style:font-weight="600">{aiFlowBrand}</div>
			<div style:margin-top="4px">Quality Assurance Checklist v1.0</div>
		</div>
	</div>
</div>
