<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import PortalDocShell from './portal-doc-shell.svelte';

	const linkedAgentId = 'invoice-intake' as const;
	const agentDetailHref = `${base}/brief/portal-agent-detail?agent=${encodeURIComponent(linkedAgentId)}&tab=exceptions`;

	const timeline = [
		{ t: '10:02', text: 'Agent flagged low confidence on tax ID field' },
		{ t: '10:03', text: 'Routed to Finance queue (rule: vendor tier A)' },
		{ t: '10:08', text: 'Analyst opened case — compared to master vendor file' },
	] as const;
</script>

<PortalDocShell
	activeSlug="portal-exception-detail"
	eyebrow="Case"
	title="Exception EX-2044"
	tagline="Structured review for a single exception: timeline, extracted fields, and resolution paths."
>
	<div
		style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 18px; font-size: 11px; color: {c.slate};"
	>
		<span style="padding: 6px 10px; border-radius: 6px; background-color: {c.orange}18; color: {c.orange}; font-weight: 600;">P2</span>
		<span>
			Agent:
			<a
				href={agentDetailHref}
				style="color: {c.cyan}; font-weight: 600; text-decoration: none; border-bottom: 1px solid {c.cyan}55;"
			>Invoice intake</a>
		</span>
		<span>·</span>
		<span>Source: Batch #482</span>
	</div>

	<Section title="Timeline" color={c.purple}>
		<div style="border-left: 2px solid {c.lightSlate}55; margin-left: 6px; padding-left: 16px;">
			{#each timeline as step, i}
				<div style="position: relative; margin-bottom: {i < timeline.length - 1 ? '14px' : '0'};">
					<div
						style="position: absolute; left: -23px; top: 2px; width: 8px; height: 8px; border-radius: 50%; background-color: {i === timeline.length - 1
							? c.cyan
							: c.lightSlate}; border: 2px solid {c.white}; box-shadow: 0 0 0 1px {c.lightSlate}44;"
					></div>
					<div style="font-size: 10px; color: {c.lightSlate};">{step.t}</div>
					<div style="font-size: 12px; color: {c.deepNavy}; margin-top: 2px;">{step.text}</div>
				</div>
			{/each}
		</div>
	</Section>

	<Section title="Extracted payload (sample)" color={c.cyan}>
		<pre
			style="margin: 0; padding: 14px; border-radius: 8px; background-color: {c.deepNavy}; color: {c.offWhite}; font-family: ui-monospace, monospace; font-size: 10px; line-height: 1.5; overflow-x: auto;"
		>{`{
  "vendor": "Northwind Trading",
  "invoice_id": "INV-77821",
  "tax_id": "??-???-????",
  "confidence": 0.61,
  "flags": ["format_unknown"]
}`}</pre>
	</Section>

	<Section title="Resolution" color={c.green}>
		<div style="display: flex; flex-wrap: wrap; gap: 8px;">
			<button
				type="button"
				style="padding: 8px 14px; border-radius: 6px; border: none; font-size: 11px; font-weight: 600; cursor: default; background-color: {c.cyan}; color: {c.white};"
			>
				Approve correction
			</button>
			<button
				type="button"
				style="padding: 8px 14px; border-radius: 6px; border: 1px solid {c.lightSlate}55; font-size: 11px; font-weight: 600; cursor: default; background-color: {c.white}; color: {c.deepNavy};"
			>
				Request re-run
			</button>
			<button
				type="button"
				style="padding: 8px 14px; border-radius: 6px; border: 1px solid {c.lightSlate}55; font-size: 11px; font-weight: 600; cursor: default; background-color: {c.white}; color: {c.deepNavy};"
			>
				Escalate
			</button>
		</div>
		<p style="font-size: 10px; color: {c.lightSlate}; margin: 10px 0 0 0;">
			Brief template — buttons are non-functional in the document library.
		</p>
	</Section>
</PortalDocShell>
