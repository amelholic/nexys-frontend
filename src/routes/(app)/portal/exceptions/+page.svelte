<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const severityVariant = {
		high: 'destructive',
		medium: 'secondary',
		low: 'outline'
	} as const;

	function applyAgents(ids: string[]) {
		const q = new URLSearchParams();
		for (const id of ids) q.append('agent', id);
		goto(`/portal/exceptions?${q.toString()}`, { replaceState: true, noScroll: true });
	}

	function toggleAgent(id: string) {
		const set = new Set(data.selectedAgents);
		if (set.has(id)) set.delete(id);
		else set.add(id);
		const next = [...set];
		if (next.length === 0) {
			goto('/portal/exceptions', { replaceState: true, noScroll: true });
			return;
		}
		applyAgents(next);
	}

	function presetAll() {
		goto('/portal/exceptions', { replaceState: true, noScroll: true });
	}

	function presetFinanceOps() {
		applyAgents(['inv-intake', 'po-match']);
	}

	function presetCxPilot() {
		applyAgents(['support-triage']);
	}
</script>

<svelte:head>
	<title>Exceptions | Client Portal</title>
</svelte:head>

<h1 class="text-2xl font-semibold text-foreground">Unified inbox</h1>
<p class="mt-1 max-w-3xl text-sm text-muted-foreground">
	Cross-agent triage with <strong class="font-medium text-foreground">agent filter</strong> (query
	<code class="rounded bg-muted px-1 py-0.5 text-xs">agent</code>). Empty selection falls back to all agents. Rows map to
	<code class="rounded bg-muted px-1 py-0.5 text-xs">PortalInboxItem</code>.
</p>

<div class="mt-4 flex flex-wrap gap-2">
	<Button variant="outline" size="sm" onclick={presetAll}>Preset: all agents</Button>
	<Button variant="outline" size="sm" onclick={presetFinanceOps}>Preset: finance + ops</Button>
	<Button variant="outline" size="sm" onclick={presetCxPilot}>Preset: CX pilot</Button>
</div>

<Card.Root class="mt-6">
	<Card.Header>
		<Card.Title class="text-base">Filter by agent</Card.Title>
		<Card.Description>At least one agent should stay selected for meaningful triage.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-wrap gap-3">
			{#each data.agents as a}
				<label class="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-sm">
					<input
						type="checkbox"
						class="size-4 accent-cyan"
						checked={data.selectedAgents.includes(a.id)}
						onchange={() => toggleAgent(a.id)}
					/>
					<span class="font-medium text-foreground">{a.name}</span>
				</label>
			{/each}
		</div>
		<p class="mt-3 text-xs text-muted-foreground">
			Active filter ({data.selectedAgents.length}): {data.selectedAgents.join(', ') || '—'}
		</p>
	</Card.Content>
</Card.Root>

<Card.Root class="mt-6">
	<Card.Header>
		<Card.Title class="text-base">Queue</Card.Title>
		<Card.Description>
			{data.items.length} item(s) · filter with <code class="text-xs">?agent=id</code> · row opens agent-scoped exception detail.
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-0">
		{#if data.items.length === 0}
			<p class="px-6 py-8 text-center text-sm text-muted-foreground">
				No items for this agent selection. Adjust filters or clear URL params to restore all agents.
			</p>
		{:else}
			<ul class="divide-y divide-border">
				{#each data.items as row}
					<li class="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
						<div class="min-w-0">
							<div class="flex flex-wrap items-center gap-2">
								<a
									class="font-medium text-foreground hover:text-cyan hover:underline"
									href="/portal/agents/{row.agentId}/exceptions/{row.id}"
								>
									{row.title}
								</a>
								<Badge variant={severityVariant[row.severity]} class="capitalize">{row.severity}</Badge>
								<Badge variant="outline">{row.status}</Badge>
							</div>
							<p class="text-sm text-muted-foreground">{row.subtitle}</p>
							<p class="text-xs text-muted-foreground">{row.agentName} · {new Date(row.createdAt).toLocaleString()}</p>
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
