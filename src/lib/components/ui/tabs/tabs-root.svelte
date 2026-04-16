<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import type { ComponentProps } from 'svelte';

	type Props = ComponentProps<typeof TabsPrimitive.Root>;

	let { value = $bindable(''), children, ...restProps }: Props = $props();
</script>

<TabsPrimitive.Root bind:value {...restProps}>
	{@render children?.()}
</TabsPrimitive.Root>
