<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	let { children }: { children: Snippet } = $props();

	const links = [{ href: '/portal/settings/users', label: 'Users' }] as const;
	const pathname = $derived($page.url.pathname);
</script>

<svelte:head>
	<title>Settings | Client Portal</title>
</svelte:head>

<h1 class="text-2xl font-semibold text-foreground">Settings</h1>
<p class="mt-1 text-sm text-muted-foreground">Tenant and access controls (brief: portal-settings).</p>

<nav class="mt-4 flex gap-2 border-b border-border pb-2" aria-label="Settings sections">
	{#each links as l}
		<a
			href={l.href}
			class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {pathname === l.href
				? 'bg-cyan/10 text-cyan'
				: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
		>
			{l.label}
		</a>
	{/each}
</nav>

<div class="mt-6">
	{@render children()}
</div>
