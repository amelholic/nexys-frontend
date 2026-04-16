<script lang="ts">
	import { base } from '$app/paths';
	import {
		buildEffortRows,
		engagementTypes,
		phaseHourSlices,
		totals,
		type EngagementKey
	} from '$lib/brief/resource-planning/effortModel';

	let engagement = $state<EngagementKey>('standard');
	let contractValue = $state(80_000);
	let sliceMetric = $state<'revenue' | 'hours'>('revenue');

	const rows = $derived(buildEffortRows(contractValue, engagement));
	const t = $derived(totals(rows, contractValue));
	const phaseSlices = $derived(phaseHourSlices(t.totalHours));

	function setPreset(key: EngagementKey) {
		engagement = key;
		contractValue = engagementTypes[key].defaultValue;
	}

	function pieGradient(): string {
		const th = t.totalHours || 1;
		const parts = rows.map((r) => ({
			color: r.color,
			p: sliceMetric === 'revenue' ? r.revenueSharePct : (r.hours / th) * 100
		}));
		let acc = 0;
		const stops: string[] = [];
		for (const seg of parts) {
			if (seg.p <= 0) continue;
			const start = acc;
			acc += seg.p;
			stops.push(`${seg.color} ${start}% ${acc}%`);
		}
		if (!stops.length) return 'conic-gradient(#e2e8f0 0% 100%)';
		return `conic-gradient(${stops.join(', ')})`;
	}

	function toCsv(): string {
		const header = ['Role', 'Hours', 'Rate', 'Cost', 'Rev %', 'Revenue share $'];
		const lines = rows.map(
			(r) =>
				`${r.name},${r.hours},${r.rate},${r.cost.toFixed(0)},${r.revenueSharePct.toFixed(1)},${r.revenueShareAud.toFixed(0)}`
		);
		lines.push(`TOTAL,${t.totalHours},,${t.totalCost.toFixed(0)},,${contractValue.toFixed(0)}`);
		lines.push(`MARGIN,,,,,${t.margin.toFixed(0)} (${t.marginPct.toFixed(1)}%)`);
		return [header.join(','), ...lines].join('\n');
	}

	async function copyTable() {
		const text = toCsv().replace(/,/g, '\t');
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			/* ignore */
		}
	}

	function downloadCsv() {
		const blob = new Blob([toCsv()], { type: 'text/csv;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `effort-allocation-${engagement}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	}
</script>

<svelte:head>
	<title>Effort allocation | Brief | AI Flow</title>
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

<div class="print-main mx-auto max-w-4xl px-6 py-10">
	<nav class="no-print mb-8 text-xs text-slate-500">
		<a href="{base}/brief" class="font-medium text-cyan hover:underline">Brief Flow</a>
		<span class="mx-1.5">/</span>
		<span class="text-slate-700">Effort allocation</span>
	</nav>

	<header class="mb-8">
		<p class="mb-1 text-xs font-semibold uppercase tracking-[2px] text-cyan">Resource planning</p>
		<h1 class="text-2xl font-bold text-navy sm:text-3xl">Effort & revenue model</h1>
		<p class="mt-2 max-w-2xl text-sm text-slate-600">
			Illustrative hours and internal rates for planning — adjust contract value and engagement archetype to stress-test
			margin and role mix.
		</p>
	</header>

	<div class="no-print mb-6 flex flex-wrap gap-2">
		{#each Object.entries(engagementTypes) as [key, meta] (key)}
			<button
				type="button"
				class="rounded-full border px-3 py-1 text-xs font-medium transition-colors {engagement === key
					? 'border-cyan bg-cyan/10 text-navy'
					: 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}"
				onclick={() => setPreset(key as EngagementKey)}
			>
				{meta.name} · ${(meta.defaultValue / 1000).toFixed(0)}k · {meta.weeks}w
			</button>
		{/each}
	</div>

	<div class="no-print mb-6 grid gap-4 sm:grid-cols-2">
		<label class="block text-xs font-medium text-slate-600">
			Engagement type
			<select
				class="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy shadow-sm"
				bind:value={engagement}
				aria-label="Engagement type"
			>
				{#each Object.entries(engagementTypes) as [k, v] (k)}
					<option value={k}>{v.name}</option>
				{/each}
			</select>
		</label>
		<label class="block text-xs font-medium text-slate-600">
			Contract value (AUD)
			<input
				type="number"
				min="0"
				step="1000"
				class="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy shadow-sm"
				bind:value={contractValue}
				aria-label="Contract value in AUD"
			/>
		</label>
	</div>

	<div class="mb-8 grid gap-6 lg:grid-cols-[1fr_200px]">
		<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
			<table class="w-full min-w-[520px] border-collapse text-left text-xs">
				<thead>
					<tr class="border-b border-slate-200 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
						<th class="px-3 py-2">Role</th>
						<th class="px-2 py-2 text-right">Hours</th>
						<th class="px-2 py-2 text-right">Rate</th>
						<th class="px-2 py-2 text-right">Cost</th>
						<th class="px-2 py-2 text-right">Rev %</th>
						<th class="px-3 py-2 text-right">Rev share</th>
					</tr>
				</thead>
				<tbody>
					{#each rows as r}
						<tr class="border-b border-slate-100">
							<td class="px-3 py-2">
								<span class="font-semibold text-navy">{r.name}</span>
								<span class="ml-2 inline-block h-2 w-2 rounded-full align-middle" style="background-color: {r.color};"
								></span>
							</td>
							<td class="px-2 py-2 text-right tabular-nums text-slate-700">{r.hours}</td>
							<td class="px-2 py-2 text-right tabular-nums text-slate-600">${r.rate}</td>
							<td class="px-2 py-2 text-right tabular-nums text-slate-700">${r.cost.toLocaleString()}</td>
							<td class="px-2 py-2 text-right tabular-nums text-slate-600">{r.revenueSharePct.toFixed(0)}%</td>
							<td class="px-3 py-2 text-right tabular-nums font-medium text-navy">
								${Math.round(r.revenueShareAud).toLocaleString()}
							</td>
						</tr>
					{/each}
					<tr class="bg-slate-50 font-semibold text-navy">
						<td class="px-3 py-2">Total</td>
						<td class="px-2 py-2 text-right tabular-nums">{t.totalHours}</td>
						<td class="px-2 py-2 text-right">—</td>
						<td class="px-2 py-2 text-right tabular-nums">${Math.round(t.totalCost).toLocaleString()}</td>
						<td class="px-2 py-2 text-right">100%</td>
						<td class="px-3 py-2 text-right tabular-nums">${Math.round(contractValue).toLocaleString()}</td>
					</tr>
					<tr class="text-xs text-slate-600">
						<td class="px-3 py-2" colspan="3">Margin (contract − internal cost)</td>
						<td class="px-2 py-2 text-right font-semibold text-emerald-700" colspan="3">
							${Math.round(t.margin).toLocaleString()} ({t.marginPct.toFixed(1)}%)
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="flex flex-col items-center justify-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
			<div class="no-print mb-3 flex gap-1 rounded-lg border border-slate-200 p-0.5" role="group" aria-label="Pie metric">
				<button
					type="button"
					class="rounded-md px-2 py-1 text-[10px] font-medium {sliceMetric === 'revenue'
						? 'bg-navy text-white'
						: 'text-slate-600'}"
					aria-pressed={sliceMetric === 'revenue'}
					onclick={() => (sliceMetric = 'revenue')}
				>
					Revenue share
				</button>
				<button
					type="button"
					class="rounded-md px-2 py-1 text-[10px] font-medium {sliceMetric === 'hours'
						? 'bg-navy text-white'
						: 'text-slate-600'}"
					aria-pressed={sliceMetric === 'hours'}
					onclick={() => (sliceMetric = 'hours')}
				>
					Hours
				</button>
			</div>
			<div
				class="h-40 w-40 shrink-0 rounded-full border border-slate-200 shadow-inner"
				style="background: {pieGradient()};"
				role="img"
				aria-label="Distribution chart by role"
			></div>
			<ul class="mt-4 w-full space-y-1 text-[10px] text-slate-600">
				{#each rows as r}
					<li class="flex items-center justify-between gap-2">
						<span class="flex items-center gap-1.5 truncate">
							<span class="h-2 w-2 shrink-0 rounded-full" style="background-color: {r.color};"></span>
							{r.name}
						</span>
						<span class="shrink-0 tabular-nums text-slate-500">
							{sliceMetric === 'revenue' ? `${r.revenueSharePct.toFixed(0)}%` : `${r.hours}h`}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
		<h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Hours by phase (modelled split)</h2>
		<div class="flex h-8 w-full overflow-hidden rounded-md bg-slate-100">
			{#each phaseSlices as s, i}
				<div
					class="flex items-center justify-center border-r border-white/40 text-[9px] font-medium text-white last:border-r-0"
					style="flex: {Math.max(1, s.hours)}; background-color: {['#F59E0B', '#00D4FF', '#EC4899', '#8B5CF6', '#6366F1', '#10B981', '#14B8A6', '#64748B'][i % 8]};"
					title="{s.label}: ~{s.hours}h"
				>
					{s.hours > 6 ? s.label : ''}
				</div>
			{/each}
		</div>
		<div class="mt-2 flex flex-wrap gap-2 text-[10px] text-slate-500">
			{#each phaseSlices as s}
				<span>{s.label}: ~{s.hours}h</span>
			{/each}
		</div>
		{#if t.marginPct < 20}
			<p class="mt-3 text-[11px] font-medium text-amber-700">
				Margin under 20% at this configuration — revisit scope, rates, or mix before committing.
			</p>
		{/if}
	</div>

	<div class="no-print flex flex-wrap gap-2">
		<button
			type="button"
			class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm hover:border-cyan/40"
			onclick={() => downloadCsv()}
		>
			Download CSV
		</button>
		<button
			type="button"
			class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm hover:border-cyan/40"
			onclick={() => copyTable()}
		>
			Copy table
		</button>
	</div>

	<footer class="no-print mt-12 border-t border-slate-200 pt-6 text-center text-[11px] text-slate-400">
		<a href="{base}/brief/engagement-flowchart" class="text-cyan hover:underline">Engagement flowchart</a>
		·
		<a href="{base}/brief/role-matrix" class="text-cyan hover:underline">Role matrix</a>
	</footer>
</div>
