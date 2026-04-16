<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const pathname = $derived($page.url.pathname);
	const base = $derived(`/portal/agents/${data.agent.id}`);
	const tabs = $derived(
		[
			{ href: base, label: 'Detail', active: (p: string) => p === base },
			{
				href: `${base}/events`,
				label: 'Events',
				active: (p: string) => p === `${base}/events` || p.startsWith(`${base}/events/`)
			},
			{
				href: `${base}/exceptions`,
				label: 'Exceptions',
				active: (p: string) => p === `${base}/exceptions` || p.startsWith(`${base}/exceptions/`)
			},
			{ href: `${base}/lots`, label: 'Lots', active: (p: string) => p === `${base}/lots` },
			{ href: `${base}/board`, label: 'Board', active: (p: string) => p === `${base}/board` }
		] as const
	);

	function tabActive(tab: (typeof tabs)[number], path: string): boolean {
		return tab.active(path);
	}
</script>

<svelte:head>
	<title>{data.agent.name} | Client Portal</title>
</svelte:head>

<div class="mb-6">
	<p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Agent</p>
	<h1 class="text-2xl font-semibold text-foreground">{data.agent.name}</h1>
	{#if data.agent.description}
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">{data.agent.description}</p>
	{/if}
</div>

<nav class="mb-6 flex flex-wrap gap-2 border-b border-border pb-2" aria-label="Agent sections">
	{#each tabs as t}
		<a
			href={t.href}
			class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {tabActive(t, pathname)
				? 'bg-cyan/10 text-cyan'
				: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
		>
			{t.label}
		</a>
	{/each}
</nav>

{@render children()}
