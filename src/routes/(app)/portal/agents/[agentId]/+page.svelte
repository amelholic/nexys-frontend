<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';
	import { SAMPLE_AGENTS, sampleInboxItemsForAgent, sampleEvents } from '$lib/portal/sample-data';

	let { data }: { data: PageData } = $props();

	const base = $derived(`/portal/agents/${data.agent.id}`);
	const openExceptions = $derived(
		sampleInboxItemsForAgent(data.agent.id, SAMPLE_AGENTS).filter((i) => i.status === 'open').length
	);
	const recentEvents = $derived(sampleEvents(data.agent.id).slice(0, 2));

	const statusVariant = {
		live: 'default',
		pilot: 'secondary',
		paused: 'outline'
	} as const;
</script>

<svelte:head>
	<title>{data.agent.name} · Overview | Client Portal</title>
</svelte:head>

<div class="grid gap-4 md:grid-cols-3">
	<Card.Root class="md:col-span-2">
		<Card.Header>
			<Card.Title class="text-base">Agent detail</Card.Title>
			<Card.Description>Summary for this agent; events, exceptions, lots, and board live in the tabs above.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-3 text-sm">
			<div class="flex flex-wrap gap-2">
				<Badge variant={statusVariant[data.agent.status]} class="capitalize">{data.agent.status}</Badge>
				<span class="text-muted-foreground">Owner: <span class="text-foreground">{data.agent.owner}</span></span>
				<span class="text-muted-foreground">Load: <span class="capitalize text-foreground">{data.agent.load}</span></span>
			</div>
			<p class="text-muted-foreground">
				Last run: {new Date(data.agent.lastRunAt).toLocaleString()}
			</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-base">Quick counts</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-2 text-sm">
			<p><span class="font-semibold text-foreground">{openExceptions}</span> open exceptions</p>
			<p><span class="font-semibold text-foreground">{sampleEvents(data.agent.id).length}</span> recent events (sample)</p>
		</Card.Content>
	</Card.Root>
</div>

<Card.Root class="mt-6">
	<Card.Header>
		<Card.Title class="text-base">Shortcuts</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col gap-2 text-sm">
		<a class="text-cyan hover:underline" href="{base}/events">All events</a>
		<a class="text-cyan hover:underline" href="{base}/exceptions">Exceptions for this agent</a>
		<a class="text-cyan hover:underline" href="{base}/lots">Lots</a>
		<a class="text-cyan hover:underline" href="{base}/board">Board</a>
	</Card.Content>
</Card.Root>

{#if recentEvents.length}
	<Card.Root class="mt-6">
		<Card.Header>
			<Card.Title class="text-base">Latest events</Card.Title>
		</Card.Header>
		<Card.Content>
			<ul class="space-y-2 text-sm">
				{#each recentEvents as e}
					<li>
						<a class="font-medium text-cyan hover:underline" href="{base}/events/{e.id}">{e.summary}</a>
						<span class="text-muted-foreground"> · {new Date(e.at).toLocaleString()}</span>
					</li>
				{/each}
			</ul>
		</Card.Content>
	</Card.Root>
{/if}
