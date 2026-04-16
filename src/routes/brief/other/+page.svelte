<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();

	function docHref(slug: string): string {
		return `${base}/brief/other/${slug}`;
	}

	const totalDocs = $derived(data.available ? data.totalJsx : 0);
	const stageCount = $derived(data.available ? data.stages.length : 0);
	const readyDocs = $derived(data.available ? data.totalJsx : 0);
</script>

<svelte:head>
	<title>Other · AI Flow</title>
	<meta name="description" content="JSX documents from brief/, in the same layout as Brief Flow." />
</svelte:head>

<div class="mx-auto max-w-5xl px-6 py-12">
	<!-- Header (match /brief) -->
	<div class="mb-16 text-center">
		<p class="mb-2 text-xs font-medium uppercase tracking-[3px] text-cyan">Document Library</p>
		<h1 class="text-3xl font-bold text-navy sm:text-4xl">Other</h1>
		<p class="mt-3 text-sm text-slate-400">
			Documents under <code class="rounded bg-slate-100 px-1 text-xs text-navy">brief/</code> that are
			<strong class="font-medium text-navy">not</strong> on the main
			<a href="{base}/brief" class="font-medium text-cyan hover:underline">Brief Flow</a> index — same layout, grouped by
			folder. Each card opens a Svelte page (shell + link to JSX source until the body is ported).
		</p>
		<div class="mx-auto mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
			{#if data.available}
				<span class="flex items-center gap-1.5">
					<span class="inline-block h-2 w-2 rounded-full bg-cyan"></span>
					Available
				</span>
				{#if data.source === 'snapshot'}
					<span class="flex items-center gap-1.5">
						<span class="inline-block h-2 w-2 rounded-full bg-slate-200"></span>
						Index snapshot
					</span>
				{/if}
			{:else}
				<span class="flex items-center gap-1.5">
					<span class="inline-block h-2 w-2 rounded-full bg-slate-200"></span>
					Unavailable
				</span>
			{/if}
		</div>
	</div>

	{#if data.available}
		<!-- Flow (match /brief) -->
		<div class="relative">
			<div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan via-50% to-orange sm:left-8"></div>

			{#each data.stages as stage, stageIdx}
				<div class="relative mb-12 last:mb-0">
					<div class="absolute left-6 top-0 z-10 -translate-x-1/2 sm:left-8">
						<div
							class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-sm"
							style="background-color: {stage.color}"
						>
							<span class="text-[9px] font-bold text-white">{stageIdx + 1}</span>
						</div>
					</div>

					<div class="ml-14 sm:ml-16">
						<h2 class="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-slate-500">
							{stage.label}
						</h2>

						<div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
							{#each stage.docs as doc}
								<a
									href={docHref(doc.slug)}
									class="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-left shadow-sm transition-all hover:border-cyan/40 hover:shadow-md"
								>
									<span class="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"></span>
									<span class="min-w-0 flex-1">
										<span class="block text-xs font-medium text-navy group-hover:text-cyan transition-colors">{doc.name}</span>
										<span class="mt-0.5 block truncate font-mono text-[10px] text-slate-400">{doc.rel}</span>
									</span>
								</a>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-center text-sm text-slate-400">
			No brief index and no generated manifest. Run <code class="rounded bg-slate-100 px-1 text-xs">npm run brief:manifest</code> from
			<code class="rounded bg-slate-100 px-1 text-xs">frontend/</code>.
		</p>
	{/if}

	<!-- Footer (match /brief) -->
	<div class="mt-16 text-center text-xs text-slate-300">
		<p>{totalDocs} JSX files across {stageCount} groups</p>
		<p class="mt-1">
			{#if data.available && data.source === 'snapshot'}
				{readyDocs} catalogued — index snapshot
			{:else}
				{readyDocs} catalogued — full library
			{/if}
		</p>
	</div>
</div>
