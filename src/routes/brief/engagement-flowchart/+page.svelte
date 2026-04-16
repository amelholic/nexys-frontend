<script lang="ts">
	import { base } from '$app/paths';
	import { engagementPhases } from '$lib/brief/resource-planning/flowchartModel';
	import { phaseRoleIds, swimlaneRoles } from '$lib/brief/resource-planning/swimlaneInvolvement';
	import RoleBadge from '$lib/components/brief/RoleBadge.svelte';

	type View = 'flow' | 'swimlane';
	let view = $state<View>('flow');
	let filterRole = $state('');

	const legend = [
		{ label: 'Activity', class: 'rounded-md border border-slate-300 bg-white' },
		{ label: 'Milestone', class: 'rounded-md border-2 border-cyan bg-cyan/10' },
		{ label: 'Linked template', class: 'rounded-md border border-cyan/50 bg-cyan/5' }
	];

	function roleMatch(owner: string, key: string): boolean {
		if (!key) return true;
		const map: Record<string, string[]> = {
			sales: ['Sales'],
			'delivery-lead': ['Delivery Lead'],
			'ai-engineer': ['AI Engineer'],
			'integration-dev': ['Integration'],
			'solutions-architect': ['Solutions Architect'],
			operations: ['Operations']
		};
		const needles = map[key] ?? [];
		return needles.some((n) => owner.includes(n));
	}

	function involvedInPhase(phaseId: string, roleId: string): boolean {
		return (phaseRoleIds[phaseId] ?? []).includes(roleId);
	}
</script>

<svelte:head>
	<title>Engagement flowchart | Brief | AI Flow</title>
</svelte:head>

<style>
	@media print {
		.no-print {
			display: none !important;
		}
		.print-main {
			background: white !important;
			color: #0f172a !important;
		}
		a {
			color: inherit !important;
			text-decoration: underline;
		}
	}
</style>

<div class="resource-plan print-main mx-auto max-w-5xl px-6 py-10">
	<nav class="no-print mb-8 text-xs text-slate-500">
		<a href="{base}/brief" class="font-medium text-cyan hover:underline">Brief Flow</a>
		<span class="mx-1.5">/</span>
		<span class="text-slate-700">Engagement flowchart</span>
	</nav>

	<header class="mb-8">
		<p class="mb-1 text-xs font-semibold uppercase tracking-[2px] text-cyan">Resource planning</p>
		<h1 class="text-2xl font-bold text-navy sm:text-3xl">Engagement process flowchart</h1>
		<p class="mt-2 max-w-2xl text-sm text-slate-600">
			End-to-end AI delivery lifecycle. Nodes with links open the matching document in Brief Flow. Use filters to
			rehearse a single role’s path.
		</p>
	</header>

	<div class="no-print mb-6 flex flex-wrap items-center gap-3">
		<div class="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm" role="group" aria-label="Layout">
			<button
				type="button"
				class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {view === 'flow'
					? 'bg-navy text-white'
					: 'text-slate-600 hover:bg-slate-50'}"
				onclick={() => (view = 'flow')}
				aria-pressed={view === 'flow'}
			>
				Flowchart view
			</button>
			<button
				type="button"
				class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {view === 'swimlane'
					? 'bg-navy text-white'
					: 'text-slate-600 hover:bg-slate-50'}"
				onclick={() => (view = 'swimlane')}
				aria-pressed={view === 'swimlane'}
			>
				Swimlane summary
			</button>
		</div>
		<label class="flex items-center gap-2 text-xs text-slate-600">
			<span class="sr-only">Filter by role</span>
			<select
				class="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-navy shadow-sm"
				bind:value={filterRole}
				aria-label="Highlight role"
			>
				<option value="">All roles</option>
				<option value="sales">Sales / BD</option>
				<option value="delivery-lead">Delivery Lead</option>
				<option value="solutions-architect">Solutions Architect</option>
				<option value="ai-engineer">AI Engineer</option>
				<option value="integration-dev">Integration Dev</option>
				<option value="operations">Operations</option>
			</select>
		</label>
	</div>

	<div class="mb-6 flex flex-wrap gap-3 text-[10px] text-slate-500">
		{#each legend as L}
			<span class="flex items-center gap-1.5">
				<span class="inline-block h-4 w-6 {L.class}"></span>
				{L.label}
			</span>
		{/each}
	</div>

	{#if view === 'flow'}
		<div class="flex flex-col gap-6">
			{#each engagementPhases as phase, pi}
				{@const dim = filterRole !== '' && !roleMatch(phase.owner, filterRole)}
				<section
					class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-opacity {dim
						? 'opacity-35'
						: ''}"
					aria-labelledby="ph-{phase.id}"
				>
					<div class="mb-4 flex flex-wrap items-center justify-between gap-2">
						<h2 id="ph-{phase.id}" class="text-sm font-bold text-navy">{phase.title}</h2>
						<RoleBadge label={phase.owner} color={phase.color} size="md" />
					</div>
					{#each phase.nodes as row, ri}
						<div class="mb-3 flex flex-wrap items-center gap-2 last:mb-0">
							{#each row as node, ni}
								{#if ni > 0}
									<span class="text-slate-300" aria-hidden="true">→</span>
								{/if}
								{#if node.slug}
									<a
										href="{base}/brief/{node.slug}"
										class="inline-flex min-h-[40px] min-w-[100px] max-w-[200px] flex-col justify-center rounded-lg border border-cyan/40 bg-cyan/5 px-3 py-2 text-center text-xs font-semibold text-navy transition hover:border-cyan hover:bg-cyan/10"
									>
										<span>{node.label}</span>
										{#if node.sub}
											<span class="mt-0.5 text-[10px] font-normal text-slate-500">{node.sub}</span>
										{/if}
									</a>
								{:else}
									<div
										class="inline-flex min-h-[40px] min-w-[100px] max-w-[200px] flex-col justify-center rounded-lg border px-3 py-2 text-center text-xs font-semibold {node.kind === 'milestone'
											? 'border-2 border-cyan bg-cyan/10 text-navy'
											: 'border-slate-200 bg-white text-slate-700'}"
									>
										<span>{node.label}</span>
										{#if node.sub}
											<span class="mt-0.5 text-[10px] font-normal text-slate-500">{node.sub}</span>
										{/if}
									</div>
								{/if}
							{/each}
						</div>
					{/each}
					{#if phase.notes?.length}
						<ul class="mt-3 list-inside list-disc text-[11px] text-slate-500">
							{#each phase.notes as n}
								<li>{n}</li>
							{/each}
						</ul>
					{/if}
					{#if pi < engagementPhases.length - 1}
						<div class="mt-4 flex justify-center text-slate-300" aria-hidden="true">↓</div>
					{/if}
				</section>
			{/each}
		</div>
	{:else}
		<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
			<table class="w-full min-w-[640px] border-collapse text-left text-xs">
				<thead>
					<tr class="border-b border-slate-200 bg-slate-50">
						<th class="px-3 py-2 font-semibold text-slate-600">Role</th>
						{#each engagementPhases as ph}
							<th class="px-2 py-2 font-semibold text-slate-600">{ph.title.replace(/^Phase \d+: /, '')}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each swimlaneRoles as lane}
						<tr class="border-b border-slate-100">
							<td class="whitespace-nowrap px-3 py-2 font-medium text-navy">{lane.name}</td>
							{#each engagementPhases as ph}
								{@const on = involvedInPhase(ph.id, lane.id)}
								{@const dim = filterRole !== '' && filterRole !== lane.id}
								<td class="px-2 py-2 align-top {dim ? 'opacity-30' : ''}">
									{#if on}
										<span class="inline-block h-2 w-full rounded" style="background-color: {ph.color};"></span>
										<span class="mt-1 block text-[10px] text-slate-500">Involved</span>
									{:else}
										<span class="text-slate-300">—</span>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-[11px] text-slate-500">
			Swimlane summary is a planning shorthand; see the flowchart view for document links and sequencing.
		</p>
	{/if}

	<footer class="no-print mt-12 border-t border-slate-200 pt-6 text-center text-[11px] text-slate-400">
		<p>
			Related:
			<a href="{base}/brief/delivery-process-flow" class="text-cyan hover:underline">Delivery process flow</a>
			·
			<a href="{base}/brief/role-matrix" class="text-cyan hover:underline">Role matrix</a>
			·
			<a href="{base}/brief/effort-allocation" class="text-cyan hover:underline">Effort allocation</a>
		</p>
	</footer>
</div>
