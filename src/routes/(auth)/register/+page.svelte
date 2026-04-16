<script lang="ts">
	import { goto } from '$app/navigation';
	import { register } from '$lib/api/auth';
	import { notifications } from '$lib/stores/notifications';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';

	let name = $state('');
	let email = $state('');
	let password = $state('');
	let orgSlug = $state('');
	let loading = $state(false);
	let errors: Record<string, string> = $state({});

	async function handleSubmit() {
		errors = {};

		if (!name) errors.name = 'Name is required';
		if (!email) errors.email = 'Email is required';
		if (!password || password.length < 8) errors.password = 'Password must be at least 8 characters';
		if (!orgSlug) errors.orgSlug = 'Organization code is required';
		if (Object.keys(errors).length > 0) return;

		loading = true;
		try {
			await register(name, email, password, orgSlug);
			notifications.success('Account created');
			goto('/');
		} catch (err: any) {
			if (err.details) {
				errors = err.details;
			} else {
				notifications.error(err.message || 'Registration failed');
			}
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Register | Nexys</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-2xl font-semibold tracking-tight">Create account</Card.Title>
	</Card.Header>
	<Card.Content>
		<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="flex flex-col gap-4">
			<div class="space-y-2">
				<Label for="name">Full name <span class="text-destructive">*</span></Label>
				<Input
					id="name"
					placeholder="Jane Smith"
					bind:value={name}
					class={errors.name ? 'border-destructive' : ''}
				/>
				{#if errors.name}
					<p class="text-sm text-destructive">{errors.name}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<Label for="email">Email <span class="text-destructive">*</span></Label>
				<Input
					id="email"
					type="email"
					placeholder="you@company.com"
					bind:value={email}
					class={errors.email ? 'border-destructive' : ''}
				/>
				{#if errors.email}
					<p class="text-sm text-destructive">{errors.email}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<Label for="password">Password <span class="text-destructive">*</span></Label>
				<Input
					id="password"
					type="password"
					placeholder="Min 8 characters"
					bind:value={password}
					class={errors.password ? 'border-destructive' : ''}
				/>
				{#if errors.password}
					<p class="text-sm text-destructive">{errors.password}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<Label for="org">Organization code <span class="text-destructive">*</span></Label>
				<Input
					id="org"
					placeholder="Your organization slug"
					bind:value={orgSlug}
					class={errors.orgSlug ? 'border-destructive' : ''}
				/>
				{#if errors.orgSlug}
					<p class="text-sm text-destructive">{errors.orgSlug}</p>
				{/if}
			</div>

			<Button type="submit" disabled={loading} size="lg" class="w-full">
				{#if loading}
					Creating account...
				{:else}
					Create account
				{/if}
			</Button>
		</form>

		<p class="mt-6 text-center text-sm text-muted-foreground">
			Already have an account?
			<a href="/login" class="text-primary hover:text-cyan-600">Sign in</a>
		</p>
	</Card.Content>
</Card.Root>
