<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { theme, type Theme } from '$lib/stores/theme';
	import { logout } from '$lib/api/auth';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { type Snippet } from 'svelte';

	let { breadcrumbs }: { breadcrumbs?: Snippet } = $props();

	const themes: { value: Theme; label: string }[] = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'system', label: 'System' }
	];

	async function handleLogout() {
		await logout();
		goto('/login');
	}

	function cycleTheme() {
		const order: Theme[] = ['light', 'dark', 'system'];
		const idx = order.indexOf($theme);
		theme.setTheme(order[(idx + 1) % order.length]);
	}
</script>

<header class="h-14 bg-card border-b border-border flex items-center justify-between px-6 fixed top-0 left-60 right-0 z-10">
	<div class="flex items-center gap-4">
		{#if breadcrumbs}
			{@render breadcrumbs()}
		{/if}
	</div>

	<div class="flex items-center gap-4">
		<Button
			variant="ghost"
			size="icon"
			onclick={cycleTheme}
			title="Theme: {$theme}"
		>
			{$theme === 'dark' ? '☾' : $theme === 'light' ? '☀' : '⚙'}
		</Button>

		<div class="flex items-center gap-2">
			<div class="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan text-sm font-medium">
				{$auth.user?.name?.[0]?.toUpperCase() ?? '?'}
			</div>
			<Button variant="ghost" size="sm" onclick={handleLogout}>
				Logout
			</Button>
		</div>
	</div>
</header>
