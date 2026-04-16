<script lang="ts">
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import PortalDocShell from './portal-doc-shell.svelte';

	const reports = [
		{ title: 'Weekly operations digest', scope: 'All agents', fmt: 'PDF · CSV', accent: c.cyan },
		{ title: 'Exception aging', scope: 'Finance + Ops', fmt: 'PDF', accent: c.orange },
		{ title: 'Accuracy & drift', scope: 'Invoice intake', fmt: 'PDF · XLSX', accent: c.purple },
	] as const;
</script>

<PortalDocShell
	activeSlug="portal-reports"
	eyebrow="Evidence pack"
	title="Reports"
	tagline="Curated exports for steering committees — Nexys emphasizes defensible metrics, not vanity dashboards."
>
	<Section title="Available exports" color={c.purple}>
		<div style="display: flex; flex-direction: column; gap: 10px;">
			{#each reports as r}
				<div
					style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; border-radius: 8px; background-color: {c.offWhite}; border-left: 3px solid {r.accent};"
				>
					<div>
						<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">{r.title}</div>
						<div style="font-size: 10px; color: {c.slate}; margin-top: 3px;">{r.scope} · {r.fmt}</div>
					</div>
					<span
						style="font-size: 10px; font-weight: 600; padding: 6px 12px; border-radius: 6px; background-color: {c.white}; color: {c.deepNavy}; border: 1px solid {c.lightSlate}44;"
					>
						Download
					</span>
				</div>
			{/each}
		</div>
	</Section>

	<Section title="Schedule (template)" color={c.cyan}>
		<div style="font-size: 11px; color: {c.slate}; line-height: 1.6;">
			<p style="margin: 0 0 8px 0;">Default: Monday 07:00 (tenant timezone). Allow per-report cadence and recipients.</p>
			<p style="margin: 0;">AI Flow narrative: reports should answer “are we safer and faster than last month?” in one page.</p>
		</div>
	</Section>
</PortalDocShell>
