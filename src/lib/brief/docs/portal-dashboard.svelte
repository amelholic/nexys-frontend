<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import PortalDocShell from './portal-doc-shell.svelte';

	const invoiceAgentHref = `${base}/brief/portal-agent-detail?agent=invoice-intake&tab=events`;

	const kpis = [
		{ label: 'Active agents', value: '12', hint: '3 pilots', accent: c.cyan },
		{ label: 'Tasks (24h)', value: '4.2k', hint: '+8% vs prior', accent: c.purple },
		{ label: 'Open exceptions', value: '7', hint: '2 SLA risk', accent: c.orange },
		{ label: 'Accuracy (7d)', value: '98.4%', hint: 'Rolling window', accent: c.green },
	] as const;

	const feed = [
		{
			time: '09:14',
			title: 'Invoice Agent',
			titleHref: invoiceAgentHref,
			detail: 'Batch #482 cleared — 240 items',
			tone: c.cyan
		},
		{ time: '08:02', title: 'Exception', detail: 'Vendor mismatch on PO-9912 — awaiting review', tone: c.orange },
		{ time: 'Yesterday', title: 'Reports', detail: 'Weekly digest generated for Finance', tone: c.purple }
	] as const;
</script>

<PortalDocShell
	activeSlug="portal-dashboard"
	eyebrow="Operations overview"
	title="Client dashboard"
	tagline="At-a-glance health for deployed Nexys agents: throughput, quality, and items needing human attention."
>
	<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 22px;">
		{#each kpis as k}
			<div
				style="background-color: {c.offWhite}; border-radius: 10px; padding: 14px 16px; border-left: 3px solid {k.accent};"
			>
				<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; letter-spacing: 0.5px;">{k.label}</div>
				<div style="font-size: 22px; font-weight: 700; color: {c.deepNavy}; margin-top: 4px;">{k.value}</div>
				<div style="font-size: 10px; color: {c.slate}; margin-top: 4px;">{k.hint}</div>
			</div>
		{/each}
	</div>

	<Section title="Activity" color={c.cyan}>
		<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 4px 0;">
			{#each feed as row, i}
				<div
					style="display: flex; gap: 14px; padding: 12px 16px; border-bottom: {i < feed.length - 1
						? `1px solid ${c.lightSlate}33`
						: 'none'};"
				>
					<div style="font-size: 10px; color: {c.lightSlate}; width: 64px; flex-shrink: 0;">{row.time}</div>
					<div style="flex: 1;">
						<div style="font-size: 12px; font-weight: 600; color: {row.tone};">
							{#if 'titleHref' in row && row.titleHref}
								<a
									href={row.titleHref}
									style="color: inherit; text-decoration: none; border-bottom: 1px solid {row.tone}66;"
								>
									{row.title}
								</a>
							{:else}
								{row.title}
							{/if}
						</div>
						<div style="font-size: 11px; color: {c.slate}; margin-top: 2px;">{row.detail}</div>
					</div>
				</div>
			{/each}
		</div>
	</Section>

	<Section title="Delivery note" color={c.purple}>
		<p style="font-size: 12px; color: {c.slate}; line-height: 1.55; margin: 0;">
			This brief mirrors the live client portal shell. Wire live metrics from your data plane; keep exception SLAs visible
			above the fold. AI Flow positions Nexys as calm, precise, and accountable — avoid noisy charts; prefer clear deltas and
			next actions.
		</p>
	</Section>
</PortalDocShell>
