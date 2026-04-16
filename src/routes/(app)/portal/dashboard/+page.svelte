<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatTime(iso: string): string {
		const d = new Date(iso);
		return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
	}

	const toneClass = {
		success: 'border-l-emerald-500',
		warning: 'border-l-amber-500',
		info: 'border-l-cyan'
	} as const;
</script>

<svelte:head>
	<title>Dashboard | Client Portal</title>
</svelte:head>

<h1 class="mb-2 text-2xl font-semibold text-foreground">Client dashboard</h1>
<p class="mb-6 max-w-2xl text-sm text-muted-foreground">
	At-a-glance health for deployed agents. Values below are sample data until the API is wired; shapes match
	<code class="rounded bg-muted px-1 py-0.5 text-xs">PortalDashboardKpis</code> and
	<code class="rounded bg-muted px-1 py-0.5 text-xs">PortalActivityFeedItem</code> in
	<code class="rounded bg-muted px-1 py-0.5 text-xs">$lib/portal/types</code>.
</p>

<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Active agents (live)</p>
			<p class="mt-1 text-3xl font-bold text-foreground">{data.kpis.activeAgents}</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Tasks processed (24h)</p>
			<p class="mt-1 text-3xl font-bold text-foreground">{data.kpis.tasksProcessed24h.toLocaleString()}</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Open exceptions</p>
			<p class="mt-1 text-3xl font-bold text-foreground">{data.kpis.openExceptions}</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Accuracy (7d)</p>
			<p class="mt-1 text-3xl font-bold text-foreground">{data.kpis.accuracyRate7d}%</p>
		</Card.Content>
	</Card.Root>
</div>

<div class="grid gap-6 lg:grid-cols-3">
	<Card.Root class="lg:col-span-2">
		<Card.Header>
			<Card.Title class="text-base">Recent activity</Card.Title>
			<Card.Description>Cross-agent feed; drill into an agent for matches, lots, and topology.</Card.Description>
		</Card.Header>
		<Card.Content class="px-0">
			<ul class="divide-y divide-border">
				{#each data.feed as row}
					<li class="flex gap-4 border-l-4 px-6 py-3 {toneClass[row.tone]}">
						<div class="w-28 shrink-0 text-xs text-muted-foreground">{formatTime(row.at)}</div>
						<div class="min-w-0 flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<span class="text-sm font-medium text-foreground">{row.title}</span>
								<Badge variant="secondary" class="text-[10px]">{row.agentName}</Badge>
							</div>
							<p class="mt-1 text-sm text-muted-foreground">{row.detail}</p>
						</div>
					</li>
				{/each}
			</ul>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-base">Shortcuts</Card.Title>
			<Card.Description>Operational views</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col gap-2 text-sm">
			<a class="text-cyan hover:underline" href="/portal/exceptions">Unified inbox & exceptions</a>
			<a class="text-cyan hover:underline" href="/portal/agents">Agent roster</a>
			<a class="text-cyan hover:underline" href="/portal/reports">Reports</a>
		</Card.Content>
	</Card.Root>
</div>
