<script lang="ts">
	import { type Snippet } from 'svelte';
	import { briefColors as c } from '$lib/brief/briefColors';

	let { dark = false, children }: { dark?: boolean; children: Snippet } = $props();
</script>

<div
	style:max-width="960px"
	style:margin="0 auto 40px"
	style:background-color={dark ? c.deepNavy : c.white}
	style:box-shadow="0 0 60px rgba(30, 41, 59, 0.08)"
	style:aspect-ratio="16/9"
	style:position="relative"
	style:overflow="hidden"
	style:display="flex"
	style:flex-direction="column"
>
	<div
		style:position="absolute"
		style:top="0"
		style:left="0"
		style:right="0"
		style:height="4px"
		style:background="linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%)"
	></div>
	{@render children()}
	<div
		style:position="absolute"
		style:bottom="16px"
		style:left="32px"
		style:font-size="11px"
		style:font-weight="600"
		style:color={dark ? c.cyan : c.deepNavy}
	>
		AI Flow
	</div>
</div>
