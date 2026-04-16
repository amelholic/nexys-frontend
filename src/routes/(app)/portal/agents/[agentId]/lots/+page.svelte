<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const statusClass: Record<string, string> = {
		open: 'bg-cyan/10 text-cyan',
		in_review: 'bg-amber-500/10 text-amber-800 dark:text-amber-300',
		closed: 'bg-muted text-muted-foreground'
	};
</script>

<svelte:head>
	<title>Lots | Agent</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-base">Lots</Card.Title>
		<Card.Description>Batched or grouped work owned by this agent (<code class="text-xs">PortalLot[]</code>).</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-3 sm:grid-cols-2">
			{#each data.lots as lot}
				<div class="rounded-lg border border-border bg-card p-4 shadow-sm">
					<div class="flex items-start justify-between gap-2">
						<p class="font-medium text-foreground">{lot.label}</p>
						<span class={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${statusClass[lot.status]}`}>
							{lot.status.replace('_', ' ')}
						</span>
					</div>
					<p class="mt-2 text-sm text-muted-foreground">{lot.itemCount} items · updated {new Date(lot.updatedAt).toLocaleString()}</p>
				</div>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
