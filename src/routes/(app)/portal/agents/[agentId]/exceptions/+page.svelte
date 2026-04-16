<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const severityVariant = {
		high: 'destructive',
		medium: 'secondary',
		low: 'outline'
	} as const;

	const agentBase = $derived(`/portal/agents/${data.agentId}`);
</script>

<svelte:head>
	<title>Exceptions · Agent | Client Portal</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-base">Exceptions for this agent</Card.Title>
		<Card.Description>
			Scoped queue under this agent. Use <a class="text-cyan hover:underline" href="/portal/exceptions">unified inbox</a> for
			cross-agent triage.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		{#if data.items.length === 0}
			<p class="px-6 py-8 text-center text-sm text-muted-foreground">No exceptions for this agent.</p>
		{:else}
			<ul class="divide-y divide-border">
				{#each data.items as row}
					<li class="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
						<div class="min-w-0">
							<div class="flex flex-wrap items-center gap-2">
								<a
									class="font-medium text-foreground hover:text-cyan hover:underline"
									href="{agentBase}/exceptions/{row.id}"
								>
									{row.title}
								</a>
								<Badge variant={severityVariant[row.severity]} class="capitalize">{row.severity}</Badge>
								<Badge variant="outline">{row.status}</Badge>
							</div>
							<p class="text-sm text-muted-foreground">{row.subtitle}</p>
							<p class="text-xs text-muted-foreground">{new Date(row.createdAt).toLocaleString()}</p>
						</div>
						{#if row.confidence != null}
							<span class="text-xs text-muted-foreground">Confidence {Math.round(row.confidence * 100)}%</span>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</Card.Content>
</Card.Root>
