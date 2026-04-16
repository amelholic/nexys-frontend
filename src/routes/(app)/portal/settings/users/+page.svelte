<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Users | Client Portal</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-base">Users</Card.Title>
		<Card.Description>Invite, roles, and SSO mapping will be implemented against your directory service.</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="text-sm text-muted-foreground">Placeholder — no user directory wired yet.</p>
	</Card.Content>
</Card.Root>
