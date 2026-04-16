<script lang="ts">
	import type { PortalBoardGraph, PortalBoardNode } from '$lib/portal/types';

	let { graph, title = 'Pipeline topology' }: { graph: PortalBoardGraph; title?: string } = $props();

	function nodeById(id: string): PortalBoardNode | undefined {
		return graph.nodes.find((n) => n.id === id);
	}

	const statusRing: Record<PortalBoardNode['status'], string> = {
		ok: 'fill-muted/40 stroke-emerald-600 dark:stroke-emerald-400',
		degraded: 'fill-muted/40 stroke-amber-600 dark:stroke-amber-400',
		idle: 'fill-muted/30 stroke-slate-400 dark:stroke-slate-500'
	};

	const kindLabel: Record<PortalBoardNode['kind'], string> = {
		source: 'Source',
		transform: 'Transform',
		decision: 'Decision',
		sink: 'Sink'
	};
</script>

<div class="rounded-xl border border-border bg-card p-4 shadow-sm">
	<div class="mb-3 flex items-center justify-between gap-2">
		<h3 class="text-sm font-semibold text-foreground">{title}</h3>
		<span class="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Live layout</span>
	</div>
	<div class="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted/30">
		<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-label={title}>
			<defs>
				<marker id="arrowhead" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
					<polygon points="0 0, 4 2, 0 4" class="fill-muted-foreground/50" />
				</marker>
			</defs>
			{#each graph.edges as e}
				{@const a = nodeById(e.from)}
				{@const b = nodeById(e.to)}
				{#if a && b}
					<line
						x1={a.x}
						y1={a.y}
						x2={b.x}
						y2={b.y}
						class="stroke-muted-foreground/40"
						stroke-width="0.6"
						marker-end="url(#arrowhead)"
					/>
				{/if}
			{/each}
			{#each graph.nodes as n}
				<g transform="translate({n.x - 9},{n.y - 5})">
					<rect width="18" height="10" rx="1.5" class={statusRing[n.status]} stroke-width="0.9" />
					<title>{n.label} · {kindLabel[n.kind]} · {n.status}</title>
				</g>
				<text
					x={n.x}
					y={n.y + 12}
					text-anchor="middle"
					class="fill-foreground text-[3.4px] font-medium"
				>
					{n.label}
				</text>
			{/each}
		</svg>
	</div>
	<ul class="mt-3 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
		{#each graph.nodes as n}
			<li class="rounded-md border border-border bg-background px-2 py-1">
				<span class="font-medium text-foreground">{n.label}</span>
				· {kindLabel[n.kind]}
				· <span class="capitalize">{n.status}</span>
			</li>
		{/each}
	</ul>
</div>
