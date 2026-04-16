<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const agentBase = $derived(`/portal/agents/${data.agentId}`);

	const outcomeBadge: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
		matched: 'default',
		escalated: 'destructive',
		skipped: 'outline'
	};

	function formatTime(iso: string): string {
		return new Date(iso).toLocaleString();
	}
</script>

<svelte:head>
	<title>Events | Agent</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-base">Events (matches)</Card.Title>
		<Card.Description>Time-ordered stream for this agent. Wire to <code class="text-xs">PortalMatchEvent[]</code>.</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		<ul class="divide-y divide-border">
			{#each data.events as e}
				<li class="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<a class="text-sm font-medium text-foreground hover:text-cyan hover:underline" href="{agentBase}/events/{e.id}">
							{e.summary}
						</a>
						<p class="text-xs text-muted-foreground">{formatTime(e.at)}</p>
					</div>
					<div class="flex flex-wrap items-center gap-2">
						<Badge variant={outcomeBadge[e.outcome] ?? 'secondary'} class="capitalize">{e.outcome}</Badge>
						{#if e.confidence != null}
							<span class="text-xs text-muted-foreground">conf {Math.round(e.confidence * 100)}%</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
