<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import {
		getPortalBriefAgent,
		normalizePortalBriefTab,
		type PortalBriefAgentTab
	} from '$lib/brief/portal-agent-brief-catalog';
	import PortalDocShell from './portal-doc-shell.svelte';

	const agent = $derived(getPortalBriefAgent($page.url.searchParams.get('agent')));
	const tab = $derived(normalizePortalBriefTab($page.url.searchParams.get('tab')));

	const tabs: { id: PortalBriefAgentTab; label: string }[] = [
		{ id: 'events', label: 'Events' },
		{ id: 'exceptions', label: 'Exceptions' },
		{ id: 'logs', label: 'Logs' },
		{ id: 'flow', label: 'Flow' }
	];

	function tabHref(t: PortalBriefAgentTab): string {
		return `${base}/brief/portal-agent-detail?agent=${encodeURIComponent(agent.id)}&tab=${t}`;
	}

	const runs = [
		{ id: 'RUN-9281', outcome: 'Success', items: 120, dur: '3m 02s' },
		{ id: 'RUN-9280', outcome: 'Success', items: 118, dur: '2m 51s' },
		{ id: 'RUN-9279', outcome: 'Partial', items: 95, dur: '4m 18s' }
	] as const;

	const events = $derived(
		[
			{ t: '09:14', line: `Match batch · ${agent.name} · confidence 0.94`, tone: c.cyan },
			{ t: '08:02', line: 'Handoff to human queue · policy threshold', tone: c.orange },
			{ t: 'Yesterday', line: 'Digest export · weekly summary', tone: c.purple }
		] as const
	);

	const exceptions = $derived(
		[
			{ id: 'EXC-9912', sev: 'High', title: 'Vendor mismatch on PO line', status: 'Open' },
			{ id: 'EXC-7781', sev: 'Med', title: 'Low confidence line items', status: 'Open' }
		] as const
	);
</script>

<PortalDocShell
	activeSlug="portal-agent-detail"
	eyebrow="Deep dive"
	title="Agent detail — {agent.name}"
	tagline="Single-agent view with tabs for events, exceptions, logs, and pipeline flow. Replace sample data with API-backed metrics."
>
	<div
		style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 16px;"
	>
		<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 14px;">
			<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase;">Version</div>
			<div style="font-size: 15px; font-weight: 700; color: {c.deepNavy}; margin-top: 4px;">v2.4.1</div>
		</div>
		<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 14px;">
			<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase;">Accuracy (7d)</div>
			<div style="font-size: 15px; font-weight: 700; color: {c.green}; margin-top: 4px;">99.1%</div>
		</div>
		<div style="background-color: {c.offWhite}; border-radius: 8px; padding: 14px;">
			<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase;">p95 latency</div>
			<div style="font-size: 15px; font-weight: 700; color: {c.cyan}; margin-top: 4px;">1.8s</div>
		</div>
	</div>

	<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid {c.lightSlate}33; padding-bottom: 12px;">
		{#each tabs as t}
			<a
				href={tabHref(t.id)}
				style="display: inline-block; padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; text-decoration: none; border: 1px solid {tab === t.id
					? c.deepNavy
					: `${c.lightSlate}55`}; background-color: {tab === t.id ? c.deepNavy : c.white}; color: {tab === t.id ? c.white : c.deepNavy};"
			>
				{t.label}
			</a>
		{/each}
	</div>

	{#if tab === 'events'}
		<Section title="Events (matches)" color={c.cyan}>
			<div style="border-radius: 8px; overflow: hidden; border: 1px solid {c.lightSlate}33;">
				{#each events as e, i}
					<div
						style="display: flex; gap: 14px; padding: 12px 14px; background-color: {i % 2 === 0 ? c.white : c.offWhite}; border-bottom: {i < events.length - 1
							? `1px solid ${c.lightSlate}22`
							: 'none'};"
					>
						<div style="font-size: 10px; color: {c.lightSlate}; width: 64px; flex-shrink: 0;">{e.t}</div>
						<div style="flex: 1;">
							<div style="font-size: 12px; font-weight: 600; color: {e.tone};">Event</div>
							<div style="font-size: 11px; color: {c.slate}; margin-top: 2px;">{e.line}</div>
						</div>
					</div>
				{/each}
			</div>
		</Section>
	{:else if tab === 'exceptions'}
		<Section title="Exceptions (this agent)" color={c.orange}>
			<div style="overflow-x: auto; border-radius: 8px; border: 1px solid {c.lightSlate}33;">
				<table style="width: 100%; border-collapse: collapse; font-size: 11px; min-width: 420px;">
					<thead>
						<tr style="background-color: {c.deepNavy}; color: {c.white}; text-align: left;">
							<th style="padding: 10px 12px; font-weight: 600;">Id</th>
							<th style="padding: 10px 12px; font-weight: 600;">Severity</th>
							<th style="padding: 10px 12px; font-weight: 600;">Title</th>
							<th style="padding: 10px 12px; font-weight: 600;">Status</th>
						</tr>
					</thead>
					<tbody>
						{#each exceptions as row, idx}
							<tr style="background-color: {idx % 2 === 0 ? c.white : c.offWhite}; color: {c.deepNavy};">
								<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; font-weight: 600;">{row.id}</td>
								<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22;">{row.sev}</td>
								<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.title}</td>
								<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22;">{row.status}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p style="margin: 12px 0 0; font-size: 10px; color: {c.lightSlate};">
				Link rows to exception detail when wired; scope is always this agent ({agent.name}).
			</p>
		</Section>
	{:else if tab === 'logs'}
		<Section title="Configuration snapshot" color={c.purple}>
			<div style="display: grid; gap: 10px; font-size: 11px; color: {c.slate}; margin-bottom: 20px;">
				<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid {c.lightSlate}33;">
					<span>Tools</span>
					<span style="color: {c.deepNavy}; font-weight: 500;">ERP lookup, email parser, PDF OCR</span>
				</div>
				<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid {c.lightSlate}33;">
					<span>Human-in-the-loop</span>
					<span style="color: {c.deepNavy}; font-weight: 500;">On low confidence (&lt; 0.82)</span>
				</div>
				<div style="display: flex; justify-content: space-between; padding: 8px 0;">
					<span>Data residency</span>
					<span style="color: {c.deepNavy}; font-weight: 500;">EU-West (configurable)</span>
				</div>
			</div>
		</Section>
		<Section title="Recent runs (logs)" color={c.cyan}>
			<div style="border-radius: 8px; overflow: hidden; border: 1px solid {c.lightSlate}33;">
				{#each runs as r, i}
					<div
						style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background-color: {i % 2 === 0
							? c.white
							: c.offWhite}; border-bottom: {i < runs.length - 1 ? `1px solid ${c.lightSlate}22` : 'none'};"
					>
						<div>
							<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy};">{r.id}</div>
							<div style="font-size: 10px; color: {c.slate};">{r.items} items · {r.dur}</div>
						</div>
						<div
							style="font-size: 10px; font-weight: 600; padding: 4px 8px; border-radius: 999px; background-color: {r.outcome === 'Success'
								? `${c.green}22`
								: `${c.orange}22`}; color: {r.outcome === 'Success' ? c.green : c.orange};"
						>
							{r.outcome}
						</div>
					</div>
				{/each}
			</div>
		</Section>
	{:else if tab === 'flow'}
		<Section title="Pipeline flow" color={c.purple}>
			<p style="margin: 0 0 14px; font-size: 12px; color: {c.slate}; line-height: 1.5;">
				Read-only topology for stakeholders — same mental model as the live per-agent board. Nodes reflect this agent’s
				stages only.
			</p>
			<div
				style="background-color: {c.offWhite}; border-radius: 10px; padding: 16px; border: 1px solid {c.lightSlate}33;"
			>
				<svg viewBox="0 0 100 56" style="width: 100%; max-width: 640px; height: auto; display: block;" aria-hidden="true">
					<defs>
						<marker id="bf-arrow-{agent.id}" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
							<polygon points="0 0, 4 2, 0 4" fill={c.slate} />
						</marker>
					</defs>
					<line
						x1="12"
						y1="28"
						x2="28"
						y2="28"
						stroke={c.lightSlate}
						stroke-width="0.8"
						marker-end="url(#bf-arrow-{agent.id})"
					/>
					<line
						x1="40"
						y1="28"
						x2="56"
						y2="28"
						stroke={c.lightSlate}
						stroke-width="0.8"
						marker-end="url(#bf-arrow-{agent.id})"
					/>
					<line
						x1="68"
						y1="28"
						x2="84"
						y2="28"
						stroke={c.lightSlate}
						stroke-width="0.8"
						marker-end="url(#bf-arrow-{agent.id})"
					/>
					<!-- nodes -->
					<rect x="2" y="18" width="18" height="20" rx="3" fill={c.white} stroke={c.cyan} stroke-width="1.2" />
					<text x="11" y="31" text-anchor="middle" font-size="5" fill={c.deepNavy} font-weight="700">Ingress</text>
					<rect x="30" y="18" width="18" height="20" rx="3" fill={c.white} stroke={c.purple} stroke-width="1.2" />
					<text x="39" y="31" text-anchor="middle" font-size="5" fill={c.deepNavy} font-weight="700">Classify</text>
					<rect x="58" y="18" width="18" height="20" rx="3" fill={c.white} stroke={c.orange} stroke-width="1.2" />
					<text x="67" y="31" text-anchor="middle" font-size="5" fill={c.deepNavy} font-weight="700">Policy</text>
					<rect x="86" y="18" width="12" height="20" rx="3" fill={c.white} stroke={c.green} stroke-width="1.2" />
					<text x="92" y="31" text-anchor="middle" font-size="4.5" fill={c.deepNavy} font-weight="700">Out</text>
				</svg>
			</div>
		</Section>
	{/if}
</PortalDocShell>
