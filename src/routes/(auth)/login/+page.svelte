<script lang="ts">
	import { goto } from '$app/navigation';
	import { login } from '$lib/api/auth';
	import { notifications } from '$lib/stores/notifications';
	import { get } from 'svelte/store';
	import { orgType } from '$lib/stores/auth';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let errors: Record<string, string> = $state({});

	async function handleSubmit() {
		errors = {};

		if (!email) errors.email = 'Email is required';
		if (!password) errors.password = 'Password is required';
		if (Object.keys(errors).length > 0) return;

		loading = true;
		try {
			await login(email, password);
			notifications.success('Welcome back');

			// Redirect based on org type
			const t = get(orgType);
			let dest = '/ops/dashboard';
			if (t === 'partner') dest = '/partner/dashboard';
			else if (t === 'client') dest = '/portal/dashboard';
			goto(dest);
		} catch (err: any) {
			notifications.error(err.message || 'Login failed');
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Login | Nexys</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<Card.Title class="text-2xl font-semibold tracking-tight">Sign in</Card.Title>
	</Card.Header>
	<Card.Content>
		<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="flex flex-col gap-4">
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
					placeholder="Enter your password"
					bind:value={password}
					class={errors.password ? 'border-destructive' : ''}
				/>
				{#if errors.password}
					<p class="text-sm text-destructive">{errors.password}</p>
				{/if}
			</div>

			<div class="flex items-center justify-between text-sm">
				<label class="flex items-center gap-2 text-muted-foreground">
					<input type="checkbox" class="rounded border-input" />
					Remember me
				</label>
				<a href="/forgot-password" class="text-primary hover:text-cyan-600">Forgot password?</a>
			</div>

			<Button type="submit" disabled={loading} size="lg" class="w-full">
				{#if loading}
					Signing in...
				{:else}
					Sign in
				{/if}
			</Button>
		</form>

		<p class="mt-6 text-center text-sm text-muted-foreground">
			Don't have an account?
			<a href="/register" class="text-primary hover:text-cyan-600">Sign up</a>
		</p>
	</Card.Content>
</Card.Root>
