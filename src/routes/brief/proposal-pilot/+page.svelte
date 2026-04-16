<script lang="ts">
	import ProposalPilotDoc from '$lib/brief/docs/ProposalPilotDoc.svelte';
</script>

<svelte:head>
	<title>Proposal — Pilot | Brief | AI Flow</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-8">
	<aside
		class="mb-6 rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-xs leading-relaxed text-amber-950"
		aria-label="How to use this template"
	>
		<strong class="font-semibold">Using this template:</strong> Replace every <code class="rounded bg-white/80 px-1">[Client Name]</code> and
		other bracketed placeholders with the buyer’s details. Keep tone factual; numbers should trace to your discovery notes
		or pricing workbook before sending externally.
	</aside>
	<ProposalPilotDoc />
</div>
