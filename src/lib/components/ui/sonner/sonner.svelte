<script lang="ts">
	import { Toaster as Sonner } from 'svelte-sonner';
	import { mode } from 'mode-watcher';

	let theme = $derived.by((): 'light' | 'dark' | 'system' => {
		const m = mode.current;
		if (m === 'dark') return 'dark';
		if (m === 'light') return 'light';
		return 'system';
	});
</script>

<Sonner
	{theme}
	class="toaster group"
	style="--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"
/>
