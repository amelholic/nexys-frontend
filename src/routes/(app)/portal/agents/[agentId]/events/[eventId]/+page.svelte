<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const outcomeBadge: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
		matched: 'default',
		escalated: 'destructive',
		skipped: 'outline'
	};

	const base = $derived(`/portal/agents/${data.detail.agentId}`);
</script>

<svelte:head>
	<title>Event · {data.detail.id} | Client Portal</title>
</svelte:head>

<div class="mb-4">
	<a class="text-sm text-cyan hover:underline" href="{base}/events">← Back to events</a>
</div>

<h1 class="text-xl font-semibold text-foreground">Event</h1>
<p class="mt-2 text-sm text-foreground">{data.detail.summary}</p>

<div class="mt-3 flex flex-wrap gap-2">
	<Badge variant={outcomeBadge[data.detail.outcome] ?? 'secondary'} class="capitalize">{data.detail.outcome}</Badge>
	{#if data.detail.confidence != null}
		<Badge variant="outline">Confidence {Math.round(data.detail.confidence * 100)}%</Badge>
	{/if}
	<span class="text-xs text-muted-foreground">{new Date(data.detail.at).toLocaleString()}</span>
</div>

<Card.Root class="mt-8">
	<Card.Header>
		<Card.Title class="text-base">History</Card.Title>
		<Card.Description><code class="text-xs">PortalEventDetail.history</code></Card.Description>
	</Card.Header>
	<Card.Content>
		<ul class="space-y-3 text-sm">
			{#each data.detail.history as h}
				<li class="flex gap-4 border-l-2 border-cyan/40 pl-3">
					<span class="w-40 shrink-0 text-xs text-muted-foreground">{new Date(h.at).toLocaleString()}</span>
					<span class="text-foreground">{h.label}</span>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
