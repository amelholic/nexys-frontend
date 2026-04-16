<script lang="ts">
	import AgentTopologyBoard from '$lib/components/portal/AgentTopologyBoard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Board | Agent</title>
</svelte:head>

<p class="mb-4 max-w-2xl text-sm text-muted-foreground">
	One topology per agent (<code class="rounded bg-muted px-1 py-0.5 text-xs">PortalBoardGraph</code>). Replace sample nodes/edges with definitions from your control plane.
</p>

<AgentTopologyBoard graph={data.graph} title="Pipeline topology" />
