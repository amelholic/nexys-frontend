<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const base = $derived(`/portal/agents/${data.detail.agentId}`);
</script>

<svelte:head>
	<title>{data.detail.title} | Exception</title>
</svelte:head>

<div class="mb-4 flex flex-wrap gap-3">
	<a class="text-sm text-cyan hover:underline" href="{base}/exceptions">← Back to agent exceptions</a>
	<a class="text-sm text-muted-foreground hover:text-cyan hover:underline" href="/portal/exceptions">Unified inbox</a>
</div>

<h1 class="text-2xl font-semibold text-foreground">{data.detail.title}</h1>
<p class="mt-1 text-sm text-muted-foreground">{data.detail.subtitle}</p>

<div class="mt-4 flex flex-wrap gap-2">
	<Badge variant="outline">{data.detail.agentName}</Badge>
	<Badge variant="secondary" class="capitalize">{data.detail.severity}</Badge>
	<Badge variant="outline" class="capitalize">{data.detail.status}</Badge>
</div>

<Card.Root class="mt-8">
	<Card.Header>
		<Card.Title class="text-base">History</Card.Title>
		<Card.Description><code class="text-xs">PortalExceptionDetail.history</code></Card.Description>
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
