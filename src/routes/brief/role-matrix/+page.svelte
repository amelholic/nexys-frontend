<script lang="ts">
	import { base } from '$app/paths';
	import {
		matrixPhases,
		matrixRoles,
		totalHoursForRole,
		type PhaseCell,
		type RaciLevel
	} from '$lib/brief/resource-planning/roleMatrixModel';
	type ViewMode = 'hours' | 'pct';
	let viewMode = $state<ViewMode>('hours');
	let filterRoleId = $state('');
	let expanded = $state<string | null>(null);

	const wsum = matrixPhases.reduce((n, p) => n + (p.weeks ?? 0), 0);

	function colFlex(p: (typeof matrixPhases)[0]): string {
		if (p.weeks == null) return '1.2';
		return String(Math.max(0.35, p.weeks / wsum));
	}

	function cellKey(roleId: string, phaseId: string) {
		return `${roleId}:${phaseId}`;
	}

	function levelStyle(level: RaciLevel): string {
		if (level === 'OWNER') return 'bg-slate-800 text-white border-slate-800';
		if (level === 'CONTRIBUTOR') return 'bg-white border-2 border-cyan text-navy';
		if (level === 'REVIEWER') return 'bg-purple-50 border border-purple-200 text-navy';
		if (level === 'INFORMED') return 'bg-slate-50 border border-slate-200 text-slate-600';
		return 'bg-slate-50/80 text-slate-300 border border-slate-100';
	}

	function pctOfRow(cell: PhaseCell, roleId: string): number {
		const total = totalHoursForRole(matrixRoles.find((r) => r.id === roleId)!);
		if (!total || !cell.hours) return 0;
		return Math.round((cell.hours / total) * 1000) / 10;
	}

	function toggleCell(roleId: string, phaseId: string, cell: PhaseCell) {
		if (!cell.deliverables.length && !cell.level) return;
		const k = cellKey(roleId, phaseId);
		expanded = expanded === k ? null : k;
	}
</script>

<svelte:head>
	<title>Role responsibility matrix | Brief | AI Flow</title>
</svelte:head>

<style>
	@media print {
		.no-print {
			display: none !important;
		}
		.print-main {
			background: white !important;
		}
	}
</style>

<div class="print-main mx-auto max-w-[1100px] px-6 py-10">
	<nav class="no-print mb-8 text-xs text-slate-500">
		<a href="{base}/brief" class="font-medium text-cyan hover:underline">Brief Flow</a>
		<span class="mx-1.5">/</span>
		<span class="text-slate-700">Role matrix</span>
	</nav>

	<header class="mb-8">
		<p class="mb-1 text-xs font-semibold uppercase tracking-[2px] text-cyan">Resource planning</p>
		<h1 class="text-2xl font-bold text-navy sm:text-3xl">Role responsibility matrix</h1>
		<p class="mt-2 max-w-3xl text-sm text-slate-600">
			RACI-style involvement by phase with indicative hours. Column widths reflect typical relative duration. Expand a
			cell for deliverables.
		</p>
	</header>

	<div class="no-print mb-6 flex flex-wrap items-center gap-3">
		<div class="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm" role="group" aria-label="Units">
			<button
				type="button"
				class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {viewMode === 'hours'
					? 'bg-navy text-white'
					: 'text-slate-600 hover:bg-slate-50'}"
				aria-pressed={viewMode === 'hours'}
				onclick={() => (viewMode = 'hours')}
			>
				Hours view
			</button>
			<button
				type="button"
				class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {viewMode === 'pct'
					? 'bg-navy text-white'
					: 'text-slate-600 hover:bg-slate-50'}"
				aria-pressed={viewMode === 'pct'}
				onclick={() => (viewMode = 'pct')}
			>
				% of row
			</button>
		</div>
		<label class="text-xs text-slate-600">
			<span class="mr-2">Highlight role</span>
			<select
				class="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-navy shadow-sm"
				bind:value={filterRoleId}
				aria-label="Filter by role"
			>
				<option value="">All roles</option>
				{#each matrixRoles as r}
					<option value={r.id}>{r.name}</option>
				{/each}
			</select>
		</label>
	</div>

	<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
		<div class="flex min-w-[920px] flex-col">
			<!-- header row -->
			<div class="flex border-b border-slate-200 bg-slate-50">
				<div class="sticky left-0 z-20 w-44 shrink-0 border-r border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">
					Role
				</div>
				<div class="flex flex-1">
					{#each matrixPhases as p}
						<div
							class="min-w-[88px] shrink border-r border-slate-100 px-2 py-2 text-center last:border-r-0"
							style="flex: {colFlex(p)}"
						>
							<div class="text-[11px] font-bold text-navy">{p.name}</div>
							<div class="text-[9px] text-slate-400">{p.duration}</div>
						</div>
					{/each}
				</div>
			</div>

			{#each matrixRoles as role}
				<div
					class="flex border-b border-slate-100 last:border-b-0 {filterRoleId !== '' && filterRoleId !== role.id
						? 'opacity-35'
						: ''}"
				>
					<div
						class="sticky left-0 z-10 flex w-44 shrink-0 flex-col justify-center border-r border-slate-200 bg-white px-3 py-2"
					>
						<div class="text-[11px] font-bold leading-tight text-navy">{role.name}</div>
						<div class="mt-1 h-1 w-10 rounded-full" style="background-color: {role.color};"></div>
						<div class="mt-1 text-[10px] font-medium text-slate-500">{totalHoursForRole(role)}h total</div>
					</div>
					<div class="flex flex-1">
						{#each matrixPhases as p}
							{@const cell = role.phases[p.id]}
							{@const k = cellKey(role.id, p.id)}
							<button
								type="button"
								class="min-w-[88px] shrink border-r border-slate-50 px-1.5 py-2 text-left text-[10px] transition last:border-r-0 hover:bg-slate-50/80 {levelStyle(
									cell.level
								)}"
								style="flex: {colFlex(p)}"
								onclick={() => toggleCell(role.id, p.id, cell)}
								aria-expanded={expanded === k}
								aria-label="{role.name} — {p.name}: {cell.level ?? 'not involved'}"
							>
								<div class="font-bold">{cell.level ?? '—'}</div>
								{#if viewMode === 'hours'}
									<div class="mt-0.5 tabular-nums text-slate-600">
										{cell.hours == null ? '—' : `${cell.hours}h`}
									</div>
								{:else}
									<div class="mt-0.5 tabular-nums text-slate-600">
										{cell.hours ? `${pctOfRow(cell, role.id)}%` : '—'}
									</div>
								{/if}
							</button>
						{/each}
					</div>
				</div>
				{#if expanded}
					{@const [expRole, expPhase] = expanded.split(':')}
					{#if expRole === role.id}
						<div class="border-b border-slate-100 bg-slate-50 px-4 py-3 pl-[11.5rem] text-xs text-slate-700">
							{#if role.phases[expPhase]?.deliverables?.length}
								<p class="mb-1 font-semibold text-navy">Deliverables</p>
								<ul class="list-inside list-disc">
									{#each role.phases[expPhase].deliverables as d}
										<li>{d}</li>
									{/each}
								</ul>
							{:else}
								<p class="text-slate-500">No extra detail for this cell.</p>
							{/if}
						</div>
					{/if}
				{/if}
			{/each}
		</div>
	</div>

	<p class="mt-4 text-[11px] text-slate-500">
		OWNER / CONTRIBUTOR / REVIEWER / INFORMED are indicative RACI levels for planning conversations — not contractual
		allocations.
	</p>

	<footer class="no-print mt-10 border-t border-slate-200 pt-6 text-center text-[11px] text-slate-400">
		<a href="{base}/brief/engagement-flowchart" class="text-cyan hover:underline">Engagement flowchart</a>
		·
		<a href="{base}/brief/effort-allocation" class="text-cyan hover:underline">Effort allocation</a>
	</footer>
</div>
