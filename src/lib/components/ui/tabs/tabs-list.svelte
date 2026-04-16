<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { cn } from '$lib/utils.js';

	type ListProps = ComponentProps<typeof TabsPrimitive.List> & {
		variant?: 'default' | 'line';
	};

	let {
		ref = $bindable(null),
		class: className,
		variant = 'default',
		...restProps
	}: ListProps = $props();
</script>

<TabsPrimitive.List
	bind:ref
	data-slot="tabs-list"
	data-variant={variant}
	class={cn(
		'group/tabs-list bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
		className
	)}
	{...restProps}
/>
