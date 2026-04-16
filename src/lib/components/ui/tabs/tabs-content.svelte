<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { cn } from '$lib/utils.js';

	type Props = ComponentProps<typeof TabsPrimitive.Content>;

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: Props = $props();
</script>

<TabsPrimitive.Content
	bind:ref
	data-slot="tabs-content"
	class={cn('mt-4 flex-1 outline-none', className)}
	{...restProps}
/>
