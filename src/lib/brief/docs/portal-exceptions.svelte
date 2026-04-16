<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import type { PortalBriefAgentId } from '$lib/brief/portal-agent-brief-catalog';
	import PortalDocShell from './portal-doc-shell.svelte';

	const rows = [
		{
			id: 'EX-2044',
			agent: 'Invoice intake',
			agentId: 'invoice-intake' satisfies PortalBriefAgentId,
			sev: 'P2',
			reason: 'Tax ID format unknown',
			age: '3h',
			color: c.orange
		},
		{
			id: 'EX-2043',
			agent: 'PO matching',
			agentId: 'po-matching' satisfies PortalBriefAgentId,
			sev: 'P3',
			reason: 'Duplicate vendor suggestion',
			age: '6h',
			color: c.purple
		},
		{
			id: 'EX-2042',
			agent: 'Support triage',
			agentId: 'support-triage' satisfies PortalBriefAgentId,
			sev: 'P1',
			reason: 'Safety classifier escalation',
			age: '40m',
			color: c.red
		}
	] as const;

	function agentDetailHref(agentId: PortalBriefAgentId): string {
		return `${base}/brief/portal-agent-detail?agent=${encodeURIComponent(agentId)}&tab=exceptions`;
	}
</script>

<PortalDocShell
	activeSlug="portal-exceptions"
	eyebrow="Human queue"
	title="Exceptions"
	tagline="Work queue for items the agent could not resolve autonomously — prioritize by severity, age, and business impact."
>
	<Section title="Open queue" color={c.orange}>
		<div style="overflow-x: auto;">
			<table style="width: 100%; border-collapse: collapse; font-size: 11px; min-width: 480px;">
				<thead>
					<tr style="text-align: left; color: {c.lightSlate}; text-transform: uppercase; font-size: 9px; letter-spacing: 0.5px;">
						<th style="padding: 8px 10px;">ID</th>
						<th style="padding: 8px 10px;">Agent</th>
						<th style="padding: 8px 10px;">Sev</th>
						<th style="padding: 8px 10px;">Reason</th>
						<th style="padding: 8px 10px;">Age</th>
					</tr>
				</thead>
				<tbody>
					{#each rows as ex}
						<tr style="background-color: {c.offWhite}; color: {c.deepNavy};">
							<td style="padding: 10px; font-weight: 600; border-top: 3px solid {ex.color};">{ex.id}</td>
							<td style="padding: 10px; border-top: 3px solid {ex.color};">
								<a
									href={agentDetailHref(ex.agentId)}
									style="color: {c.cyan}; font-weight: 600; text-decoration: none; border-bottom: 1px solid {c.cyan}55;"
								>
									{ex.agent}
								</a>
							</td>
							<td style="padding: 10px; border-top: 3px solid {ex.color};">{ex.sev}</td>
							<td style="padding: 10px; color: {c.slate}; border-top: 3px solid {ex.color};">{ex.reason}</td>
							<td style="padding: 10px; color: {c.slate}; border-top: 3px solid {ex.color};">{ex.age}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Section>

	<Section title="AI Flow handling principles" color={c.cyan}>
		<p style="font-size: 12px; color: {c.slate}; line-height: 1.55; margin: 0 0 10px 0;">
			Exceptions are a product surface, not a failure dump. Each row should open a detail view with evidence, suggested fix,
			and one-click actions (approve, re-route, re-run).
		</p>
		<p style="font-size: 12px; color: {c.slate}; line-height: 1.55; margin: 0;">
			Nexys branding stays understated: let severity color and typography carry hierarchy.
		</p>
	</Section>
</PortalDocShell>
