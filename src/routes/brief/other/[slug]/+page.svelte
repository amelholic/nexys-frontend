<script lang="ts">
	import type { Component } from 'svelte';
	import { base } from '$app/paths';
	import { otherBriefPortedByRel } from '$lib/brief/other-ported/registry';

	let { data } = $props();

	const portedDoc = $derived(otherBriefPortedByRel[data.doc.rel] as Component | undefined);

	function rawHref(rel: string): string {
		const encoded = rel.split('/').map((s) => encodeURIComponent(s)).join('/');
		return `${base}/brief/other/raw/${encoded}`;
	}
</script>

{#if portedDoc}
	{@const Body = portedDoc}
	<Body />
{:else}
	<div class="mx-auto max-w-3xl px-6 py-16 text-center">
		<p class="mb-8 text-sm text-slate-600">This file is not ported to Svelte yet.</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href={rawHref(data.doc.rel)}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-cyan/40 hover:text-cyan"
			>
				Open JSX source
			</a>
			<a
				href="{base}/brief/other"
				class="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300"
			>
				← Other documents
			</a>
		</div>
	</div>
{/if}
