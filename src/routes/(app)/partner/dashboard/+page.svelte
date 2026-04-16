<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Dashboard | Partner Portal</title>
</svelte:head>

<h1 class="text-2xl font-semibold text-foreground mb-6">Partner Dashboard</h1>

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
			<p class="text-sm text-muted-foreground">Commissions (YTD)</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Content class="pt-6">
			<p class="text-sm text-muted-foreground">Active Clients</p>
			<p class="text-3xl font-bold text-foreground mt-1">--</p>
		</Card.Content>
	</Card.Root>
</div>

<div class="text-sm text-muted-foreground">
	Partner dashboard — pipeline metrics and commission tracking will be populated in Phase 5.
</div>
