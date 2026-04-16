<script lang="ts">
	import { type Snippet } from 'svelte';

	let { competitor, children }: { competitor: string; children: Snippet } = $props();
</script>

<div style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); margin-bottom: 0">
	<div style="height: 4px; background: linear-gradient(90deg, #00B4FF 0%, #8B5CF6 35%, #EC4899 65%, #F97316 100%)"></div>
	<div style="padding: 32px">
		<div style="margin-bottom: 24px">
			<div style="font-size: 10px; color: #EC4899; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px">Battle Card</div>
			<h2 style="font-size: 24px; font-weight: 700; color: #1E293B; margin: 0">vs {competitor}</h2>
		</div>
		{@render children()}
	</div>
</div>
