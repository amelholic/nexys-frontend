<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import AiReadinessSlides from '$lib/brief/workshops/ai-readiness/AiReadinessSlides.svelte';
	import AiReadinessWorkbook from '$lib/brief/workshops/ai-readiness/AiReadinessWorkbook.svelte';
	import AiReadinessOutputReport from '$lib/brief/workshops/ai-readiness/AiReadinessOutputReport.svelte';
	import facilitatorText from '$lib/brief-content/ai-readiness-facilitator.md?raw';

	let workshopTab = $state('slides');
</script>

<div class="min-h-screen bg-slate-200/80 py-10">
	<div class="mx-auto max-w-6xl px-4">
		<h1 class="mb-6 text-2xl font-semibold tracking-tight text-slate-900">AI Readiness Workshop</h1>

		<Tabs.Root bind:value={workshopTab} class="w-full">
			<Tabs.List class="w-full max-w-2xl flex-wrap sm:flex-nowrap">
				<Tabs.Trigger value="slides">Slides</Tabs.Trigger>
				<Tabs.Trigger value="workbook">Workbook</Tabs.Trigger>
				<Tabs.Trigger value="report">Output report</Tabs.Trigger>
				<Tabs.Trigger value="facilitator">Facilitator</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="slides">
				<AiReadinessSlides />
			</Tabs.Content>
			<Tabs.Content value="workbook">
				<AiReadinessWorkbook />
			</Tabs.Content>
			<Tabs.Content value="report">
				<AiReadinessOutputReport />
			</Tabs.Content>
			<Tabs.Content value="facilitator">
				<div class="rounded-lg border border-slate-200/80 bg-white p-6 shadow-sm">
					<pre class="mx-auto max-w-4xl whitespace-pre-wrap text-sm text-slate-700">{facilitatorText}</pre>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
