<script lang="ts">
	import '$lib/styles/app.css';
	import { base } from '$app/paths';
	import { type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen bg-slate-50">
	<nav class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
		<div class="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
			<div class="flex items-center gap-5">
				<a href="{base}/brief" class="text-sm font-semibold brand-gradient-text tracking-tight">AI Flow</a>
				<a href="{base}/brief/other" class="text-xs font-medium text-slate-500 hover:text-cyan transition-colors">
					Other
				</a>
			</div>
			<a href="{base}/" class="text-xs text-slate-400 hover:text-slate-600 transition-colors">Back to app</a>
		</div>
	</nav>
	{@render children()}
</div>
