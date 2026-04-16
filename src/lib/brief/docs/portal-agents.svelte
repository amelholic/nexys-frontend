<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import { portalBriefAgentList } from '$lib/brief/portal-agent-brief-catalog';
	import PortalDocShell from './portal-doc-shell.svelte';

	function detailHref(agentId: string): string {
		return `${base}/brief/portal-agent-detail?agent=${encodeURIComponent(agentId)}&tab=events`;
	}
</script>

<PortalDocShell
	activeSlug="portal-agents"
	eyebrow="Fleet"
	title="Agents"
	tagline="Catalog of deployed automations with status, ownership, and recent activity — template for governance reviews."
>
	<Section title="Agent roster" color={c.cyan}>
		<div style="overflow-x: auto; border-radius: 8px; border: 1px solid {c.lightSlate}33;">
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; min-width: 520px;">
				<thead>
					<tr style="background-color: {c.deepNavy}; color: {c.white}; text-align: left;">
						<th style="padding: 10px 12px; font-weight: 600;">Agent</th>
						<th style="padding: 10px 12px; font-weight: 600;">Owner</th>
						<th style="padding: 10px 12px; font-weight: 600;">Status</th>
						<th style="padding: 10px 12px; font-weight: 600;">Load</th>
						<th style="padding: 10px 12px; font-weight: 600;">Last run</th>
					</tr>
				</thead>
				<tbody>
					{#each portalBriefAgentList as row, idx}
						<tr style="background-color: {idx % 2 === 0 ? c.white : c.offWhite}; color: {c.deepNavy};">
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22;">
								<span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: {row.color}; margin-right: 8px; vertical-align: middle;"></span>
								<a
									href={detailHref(row.id)}
									style="color: {c.cyan}; font-weight: 600; text-decoration: none; border-bottom: 1px solid {c.cyan}55;"
								>
									{row.name}
								</a>
							</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.owner}</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22;">{row.status}</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.load}</td>
							<td style="padding: 10px 12px; border-bottom: 1px solid {c.lightSlate}22; color: {c.slate};">{row.last}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Section>

	<Section title="UX guidance" color={c.purple}>
		<ul style="margin: 0; padding-left: 18px; font-size: 12px; color: {c.slate}; line-height: 1.6;">
			<li>Surface pilot vs production clearly — clients anchor trust on that distinction.</li>
			<li>Each agent name links to detail with tabs for events, exceptions, logs, and pipeline flow.</li>
			<li>Keep AI Flow copy factual; avoid hype adjectives in operational views.</li>
		</ul>
	</Section>
</PortalDocShell>
