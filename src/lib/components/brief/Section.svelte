<script lang="ts">
	import { type Snippet } from 'svelte';

	let { title, color = '#8B5CF6', children }: { title: string; color?: string; children: Snippet } = $props();
</script>

<div style="margin-bottom: 24px">
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color}"></div>
		<h3 style="font-size: 12px; font-weight: 600; color: #1E293B; text-transform: uppercase; letter-spacing: 1px; margin: 0">{title}</h3>
	</div>
	{@render children()}
</div>
