<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Dashboard | Nexys Ops</title>
</svelte:head>

<h1 class="text-2xl font-semibold text-foreground mb-6">Dashboard</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Active Leads</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Pipeline Value</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Active Projects</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Open Exceptions</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
</div>

<div class="text-sm text-muted-foreground">
	Nexys Ops dashboard — metrics and activity feed will be populated in Phase 2.
</div>
