<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';
	import type { AgentStatus } from '$lib/portal/types';

	let { data }: { data: PageData } = $props();

	const statusVariant: Record<AgentStatus, 'default' | 'secondary' | 'outline'> = {
		live: 'default',
		pilot: 'secondary',
		paused: 'outline'
	};

	function formatRelative(iso: string): string {
		const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60_000);
		if (mins < 1) return 'just now';
		if (mins < 60) return `${mins}m ago`;
		const h = Math.floor(mins / 60);
		if (h < 24) return `${h}h ago`;
		return `${Math.floor(h / 24)}d ago`;
	}
</script>

<svelte:head>
	<title>Agents | Client Portal</title>
</svelte:head>

<div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
	<div>
		<h1 class="text-2xl font-semibold text-foreground">Agents</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Each agent has its own events (matches), lots, and pipeline board. Open an agent to inspect.
		</p>
	</div>
</div>

<Card.Root>
	<Card.Content class="p-0">
		<div class="overflow-x-auto">
			<table class="w-full min-w-[520px] text-left text-sm">
				<thead class="border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
					<tr>
						<th class="px-4 py-3">Agent</th>
						<th class="px-4 py-3">Owner</th>
						<th class="px-4 py-3">Status</th>
						<th class="px-4 py-3">Load</th>
						<th class="px-4 py-3">Last run</th>
						<th class="px-4 py-3"></th>
					</tr>
				</thead>
				<tbody>
					{#each data.agents as row, idx}
						<tr class={idx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
							<td class="px-4 py-3 font-medium text-foreground">
								<span class="mr-2 inline-block h-2 w-2 rounded-full bg-cyan align-middle"></span>
								{row.name}
							</td>
							<td class="px-4 py-3 text-muted-foreground">{row.owner}</td>
							<td class="px-4 py-3">
								<Badge variant={statusVariant[row.status]} class="capitalize">{row.status}</Badge>
							</td>
							<td class="px-4 py-3 capitalize text-muted-foreground">{row.load}</td>
							<td class="px-4 py-3 text-muted-foreground">{formatRelative(row.lastRunAt)}</td>
							<td class="px-4 py-3 text-right">
								<a class="text-sm font-medium text-cyan hover:underline" href="/portal/agents/{row.id}">
									Open
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Card.Content>
</Card.Root>
