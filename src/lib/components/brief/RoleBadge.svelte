<script lang="ts">
	type Props = {
		label: string;
		color: string;
		size?: 'sm' | 'md';
	};
	let { label, color, size = 'sm' }: Props = $props();
	const pad = $derived(size === 'md' ? 'px-2.5 py-1 text-[11px]' : 'px-2 py-0.5 text-[10px]');
</script>

<span
	class="inline-flex max-w-full items-center rounded font-semibold uppercase tracking-wide text-white {pad}"
	style="background-color: {color};"
>
	{label}
</span>
