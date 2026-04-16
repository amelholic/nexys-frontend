<script lang="ts">
	import Section from '$lib/components/brief/Section.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import PortalDocShell from './portal-doc-shell.svelte';

	const fields = [
		{ label: 'Organization', placeholder: 'Acme Corp' },
		{ label: 'Primary contact', placeholder: 'name@company.com' },
		{ label: 'Time zone', placeholder: 'Europe/Amsterdam' },
	] as const;
</script>

<PortalDocShell
	activeSlug="portal-settings"
	eyebrow="Tenant"
	title="Settings"
	tagline="Baseline portal configuration: identity, notifications, and integration hooks. Align with your IT security questionnaire."
>
	<Section title="Organization profile" color={c.cyan}>
		<div style="display: flex; flex-direction: column; gap: 12px;">
			{#each fields as f}
				<div>
					<div style="font-size: 10px; color: {c.lightSlate}; text-transform: uppercase; margin-bottom: 4px;">{f.label}</div>
					<div
						style="padding: 10px 12px; border-radius: 6px; border: 1px solid {c.lightSlate}44; background-color: {c.white}; font-size: 12px; color: {c.slate};"
					>
						{f.placeholder}
					</div>
				</div>
			{/each}
		</div>
	</Section>

	<Section title="Notifications" color={c.purple}>
		<div style="font-size: 12px; color: {c.slate}; line-height: 1.6;">
			<p style="margin: 0 0 8px 0;">Email digests for exceptions over threshold · Slack / Teams webhook (optional).</p>
			<p style="margin: 0;">Nexys recommends opt-in escalations only — AI Flow avoids alert fatigue.</p>
		</div>
	</Section>

	<Section title="API & audit" color={c.orange}>
		<div
			style="padding: 14px; border-radius: 8px; background-color: {c.deepNavy}; color: {c.offWhite}; font-size: 11px; line-height: 1.5;"
		>
			Scoped API keys, immutable audit log, and data retention controls ship with enterprise tier. This brief documents the
			expected layout only.
		</div>
	</Section>
</PortalDocShell>
