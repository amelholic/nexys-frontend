<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import { type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	$effect(() => {
		if (!$auth.isLoading && !$auth.user) {
			goto('/login');
		}
	});
</script>

{#if $auth.isLoading}
	<div class="flex items-center justify-center min-h-screen">
		<div class="animate-spin h-8 w-8 border-2 border-cyan border-t-transparent rounded-full"></div>
	</div>
{:else if $auth.user}
	<Sidebar />
	<TopNav />
	<main class="ml-60 mt-14 p-6 min-h-[calc(100vh-3.5rem)]">
		{@render children()}
	</main>
{/if}
