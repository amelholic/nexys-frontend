<script lang="ts">
	import { base } from '$app/paths';
	import { portalBriefAgentDefaultId } from '$lib/brief/portal-agent-brief-catalog';

	type BriefDoc = {
		name: string;
		slug: string | null;
		/** JSX source id for ported templates; omitted for native Svelte routes. */
		jsx?: string;
		isDir?: boolean;
		ready?: boolean;
		/** When set, the library card links here instead of `{base}/brief/{slug}` (e.g. portal agent detail needs query params). */
		href?: string;
	};

	const stages: { id: string; label: string; color: string; docs: BriefDoc[] }[] = [
		{
			id: 'discovery',
			label: 'Discovery & Qualification',
			color: '#8B5CF6',
			docs: [
				{ name: 'Discovery Session Guide', slug: 'discovery-session-guide', jsx: 'Template_DiscoverySessionGuide', ready: true },
				{ name: 'Qualification Scorecard', slug: 'qualification-scorecard', jsx: 'Qualification_Scorecard', ready: true },
				{ name: 'Opportunity Assessment', slug: 'opportunity-assessment', jsx: 'Template_OpportunityAssessment', ready: true },
				{ name: 'AI Readiness Workshop', slug: 'ai-readiness-workshop', jsx: 'Workshop_AI_Readiness', isDir: true, ready: true },
				{ name: 'Process Mapping Workshop', slug: 'process-mapping-workshop', jsx: 'Workshop_ProcessMapping', isDir: true, ready: true },
			]
		},
		{
			id: 'sales',
			label: 'Sales & Positioning',
			color: '#00B4FF',
			docs: [
				{ name: 'Competitor Battle Cards', slug: 'battle-cards-competitors', jsx: 'BattleCards_Competitors', ready: true },
				{ name: 'AI Sales Deck', slug: 'ai-sales-deck', jsx: 'Nexys_AI_SalesDeck', ready: true },
				{ name: 'One Pager', slug: 'one-pager', jsx: 'Nexys_OnePager', ready: true },
				{ name: 'Comparison Guide', slug: 'comparison-guide', jsx: 'Nexys_ComparisonGuide', ready: true },
				{ name: 'FAQ', slug: 'faq', jsx: 'Nexys_FAQ', ready: true },
				{ name: 'AI FAQ', slug: 'ai-faq', jsx: 'Nexys_AI_FAQ', ready: true },
				{ name: 'Pricing Calculator', slug: 'pricing-calculator', jsx: 'Nexys_PricingCalculator', ready: true },
				{ name: 'ROI Calculator', slug: 'roi-calculator', jsx: 'ROI_Calculator', ready: true },
				{ name: 'Off-Shelf vs Custom Guide', slug: 'off-shelf-vs-custom', jsx: 'Guide_OffShelf_vs_Custom', ready: true },
			]
		},
		{
			id: 'proposals',
			label: 'Proposals & Business Cases',
			color: '#EC4899',
			docs: [
				{ name: 'Proposal — SMB', slug: 'proposal-smb', jsx: 'Proposal_SMB', ready: true },
				{ name: 'Proposal — Pilot', slug: 'proposal-pilot', jsx: 'Proposal_Pilot', ready: true },
				{ name: 'Proposal — Enterprise', slug: 'proposal-enterprise', jsx: 'Proposal_Enterprise', ready: true },
				{ name: 'Proposal Template', slug: 'proposal-template', jsx: 'Template_Proposal', ready: true },
				{ name: 'Client Proposal', slug: 'client-proposal', jsx: 'Client_Proposal', ready: true },
				{ name: 'Client Presentation', slug: 'client-presentation', jsx: 'Client_Presentation', ready: true },
			]
		},
		{
			id: 'kickoff',
			label: 'Kickoff & Planning',
			color: '#F97316',
			docs: [
				{ name: 'Project Kickoff', slug: 'project-kickoff', jsx: 'Template_ProjectKickoff', ready: true },
				{ name: 'Project Budget', slug: 'project-budget', jsx: 'Project_Budget', ready: true },
				{ name: 'RAID Log', slug: 'raid-log', jsx: 'RAID_Log', ready: true },
				{ name: 'Capacity Planning', slug: 'capacity-planning', jsx: 'Capacity_Planning', ready: true },
			]
		},
		{
			id: 'design',
			label: 'Design & Architecture',
			color: '#8B5CF6',
			docs: [
				{ name: 'Outcome Decomposition', slug: 'outcome-decomposition', jsx: 'Template_OutcomeDecomposition', ready: true },
				{ name: 'Agent Design Card', slug: 'agent-design-card', jsx: 'Template_AgentDesignCard', ready: true },
				{ name: 'Architecture Blueprint', slug: 'architecture-blueprint', jsx: 'Template_ArchitectureBlueprint', ready: true },
				{ name: 'Tool Specification', slug: 'tool-specification', jsx: 'Template_ToolSpecification', ready: true },
				{ name: 'Prompt Card', slug: 'prompt-card', jsx: 'Template_PromptCard', ready: true },
				{ name: 'Technical Approach Guide', slug: 'technical-approach', jsx: 'Technical_Approach_Guide', ready: true },
				{ name: 'Evaluation Suite', slug: 'evaluation-suite', jsx: 'Template_EvaluationSuite', ready: true },
			]
		},
		{
			id: 'delivery',
			label: 'Delivery & Execution',
			color: '#00B4FF',
			docs: [
				{ name: 'Delivery Process Flow', slug: 'delivery-process-flow', jsx: 'Delivery_Process_Flow', ready: true },
				{ name: 'Weekly Status Report', slug: 'weekly-status-report', jsx: 'Template_WeeklyStatusReport', ready: true },
				{ name: 'QA Checklist', slug: 'qa-checklist', jsx: 'QA_Checklist', ready: true },
				{ name: 'Change Request', slug: 'change-request', jsx: 'Change_Request_Template', ready: true },
				{ name: 'Runbook', slug: 'runbook', jsx: 'Template_Runbook', ready: true },
				{ name: 'Go-Live Checklist', slug: 'go-live-checklist', jsx: 'Template_GoLiveChecklist', ready: true },
			]
		},
		{
			id: 'ongoing',
			label: 'Ongoing & Reporting',
			color: '#EC4899',
			docs: [
				{ name: 'Monthly Report', slug: 'monthly-report', jsx: 'Template_MonthlyReport', ready: true },
				{ name: 'QBR Template', slug: 'qbr', jsx: 'QBR_Template', ready: true },
				{ name: 'Handover Pack', slug: 'handover-pack', jsx: 'Template_HandoverPack', ready: true },
				{ name: 'Retrospective', slug: 'retrospective', jsx: 'Retrospective_Template', ready: true },
				{ name: 'Client Health Scorecard', slug: 'client-health-scorecard', jsx: 'ClientHealth_Scorecard', ready: true },
				{ name: 'Case Study Template', slug: 'case-study', jsx: 'Template_CaseStudy', ready: true },
			]
		},
		{
			id: 'portal',
			label: 'Client Portal',
			color: '#F97316',
			docs: [
				{ name: 'Portal — Dashboard', slug: 'portal-dashboard', jsx: 'ClientPortal_Dashboard', ready: true },
				{ name: 'Portal — Agents', slug: 'portal-agents', jsx: 'ClientPortal_Agents', ready: true },
				{
					name: 'Portal — Agent Detail',
					slug: 'portal-agent-detail',
					jsx: 'ClientPortal_AgentDetail',
					ready: true,
					href: `${base}/brief/portal-agent-detail?agent=${portalBriefAgentDefaultId}&tab=events`
				},
				{ name: 'Portal — Exceptions', slug: 'portal-exceptions', jsx: 'ClientPortal_Exceptions', ready: true },
				{ name: 'Portal — Exception Detail', slug: 'portal-exception-detail', jsx: 'ClientPortal_ExceptionDetail', ready: true },
				{ name: 'Portal — Reports', slug: 'portal-reports', jsx: 'ClientPortal_Reports', ready: true },
				{ name: 'Portal — Settings', slug: 'portal-settings', jsx: 'ClientPortal_Settings', ready: true },
			]
		},
		{
			id: 'brand',
			label: 'Brand & Marketing',
			color: '#8B5CF6',
			docs: [
				{ name: 'Brand Guidelines', slug: 'brand-guidelines', jsx: 'Nexys_Brand_Guidelines', ready: true },
				{ name: 'Business Cards', slug: 'business-cards', jsx: 'Nexys_Business_Cards', ready: true },
				{ name: 'Capability Statement', slug: 'capability-statement', jsx: 'Nexys_Capability_Statement', ready: true },
				{ name: 'Capability Statement (Full)', slug: 'capability-statement-full', jsx: 'Nexys_Capability_Statement_Full', ready: true },
				{ name: 'AI Capability Statement', slug: 'ai-capability-statement', jsx: 'Nexys_AI_Capability_Statement', ready: true },
				{ name: 'Client Testimonial Template', slug: 'client-testimonial', jsx: 'Client_Testimonial_Template', ready: true },
			]
		},
		{
			id: 'people',
			label: 'People & Operations',
			color: '#10B981',
			docs: [
				{ name: 'Employee Onboarding', slug: 'employee-onboarding', jsx: 'Employee_Onboarding', ready: true },
				{ name: 'Hiring Profiles', slug: 'hiring-profiles', jsx: 'Hiring_Profiles', ready: true },
				{ name: 'Job Description Templates', slug: 'job-descriptions', jsx: 'Job_Description_Templates', ready: true },
				{ name: 'Partner Onboarding Guide', slug: 'partner-onboarding', jsx: 'Partner_Onboarding_Guide', ready: true },
				{ name: 'Training Guide', slug: 'training-guide', jsx: 'Template_TrainingGuide', ready: true },
				{ name: 'Common Pitfalls Guide', slug: 'common-pitfalls', jsx: 'Common_Pitfalls_Guide', ready: true },
			]
		},
	];

	const resourcePlanningDocs: BriefDoc[] = [
		{ name: 'Engagement flowchart', slug: 'engagement-flowchart', ready: true },
		{ name: 'Role responsibility matrix', slug: 'role-matrix', ready: true },
		{ name: 'Effort allocation model', slug: 'effort-allocation', ready: true }
	];

	const totalDocs = stages.reduce((n, s) => n + s.docs.length, 0) + resourcePlanningDocs.length;
	const readyDocs =
		stages.reduce((n, s) => n + s.docs.filter((d) => d.ready).length, 0) +
		resourcePlanningDocs.filter((d) => d.ready).length;
	const notReadyDocs = totalDocs - readyDocs;
</script>

<div class="mx-auto max-w-5xl px-6 py-12">
	<!-- Header -->
	<div class="mb-16 text-center">
		<p class="mb-2 text-xs font-medium uppercase tracking-[3px] text-cyan">Document Library</p>
		<h1 class="text-3xl font-bold text-navy sm:text-4xl">Brief Flow</h1>
		<p class="mt-3 text-sm text-slate-400">
			Trace the logical path from discovery through delivery and beyond.
			<a href="{base}/brief/other" class="font-medium text-cyan hover:underline">Other — brief/ not on this list</a>
		</p>
		<div class="mx-auto mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
			<span class="flex items-center gap-1.5">
				<span class="inline-block h-2 w-2 rounded-full bg-cyan"></span>
				Available
			</span>
			{#if notReadyDocs > 0}
				<span class="flex items-center gap-1.5">
					<span class="inline-block h-2 w-2 rounded-full bg-slate-200"></span>
					Not yet converted
				</span>
			{/if}
		</div>
	</div>

	<!-- Flow -->
	<div class="relative">
		<!-- Vertical connector line -->
		<div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan via-50% to-orange sm:left-8"></div>

		{#each stages as stage, stageIdx}
			<div class="relative mb-12 last:mb-0">
				<!-- Stage dot -->
				<div
					class="absolute left-6 top-0 z-10 -translate-x-1/2 sm:left-8"
				>
					<div
						class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-sm"
						style="background-color: {stage.color}"
					>
						<span class="text-[9px] font-bold text-white">{stageIdx + 1}</span>
					</div>
				</div>

				<!-- Stage content -->
				<div class="ml-14 sm:ml-16">
					<h2 class="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-slate-500">
						{stage.label}
					</h2>

					<div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
						{#each stage.docs as doc}
							{#if doc.ready && doc.slug}
								<a
									href={doc.href ?? `${base}/brief/${doc.slug}`}
									class="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm transition-all hover:border-cyan/40 hover:shadow-md"
								>
									<span class="h-1.5 w-1.5 rounded-full bg-cyan shrink-0"></span>
									<span class="text-xs font-medium text-navy group-hover:text-cyan transition-colors">{doc.name}</span>
								</a>
							{:else}
								<div class="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 px-3.5 py-2.5">
									<span class="h-1.5 w-1.5 rounded-full bg-slate-200 shrink-0"></span>
									<span class="text-xs text-slate-300">{doc.name}</span>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}

		<!-- Resource planning (native Svelte tools) -->
		<div class="relative mb-12 last:mb-0">
			<div class="absolute left-6 top-0 z-10 -translate-x-1/2 sm:left-8">
				<div
					class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-sm"
					style="background-color: #0ea5e9"
				>
					<span class="text-[9px] font-bold text-white">{stages.length + 1}</span>
				</div>
			</div>
			<div class="ml-14 sm:ml-16">
				<h2 class="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-slate-500">Resource planning</h2>
				<p class="mb-3 max-w-2xl text-[11px] leading-relaxed text-slate-500">
					Visual navigation and commercial models that sit alongside the template library — print-friendly where noted on
					each page.
				</p>
				<div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{#each resourcePlanningDocs as doc}
						{#if doc.ready && doc.slug}
							<a
								href={doc.href ?? `${base}/brief/${doc.slug}`}
								class="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm transition-all hover:border-sky-400/50 hover:shadow-md"
							>
								<span class="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
								<span class="text-xs font-medium text-navy group-hover:text-sky-600 transition-colors">{doc.name}</span>
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="mt-16 text-center text-xs text-slate-300">
		<p>{totalDocs} documents across {stages.length} stages</p>
		<p class="mt-1">
			{#if notReadyDocs > 0}
				{readyDocs} converted — {notReadyDocs} coming soon
			{:else}
				{readyDocs} converted — full library
			{/if}
		</p>
	</div>
</div>
