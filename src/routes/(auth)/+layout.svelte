<script lang="ts">
	import { type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-muted px-4">
	<div class="w-full max-w-md">
		<div class="text-center mb-8">
			<h1 class="text-2xl font-bold brand-gradient-text">nexys</h1>
		</div>
		{@render children()}
	</div>
</div>
