<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	const buildItems = [
		{ title: 'Document Processing', desc: 'Invoices, contracts, forms — extracted and routed', color: briefColors.cyan },
		{ title: 'Workflow Automation', desc: 'Approvals, notifications, escalations', color: briefColors.purple },
		{ title: 'Customer Response', desc: 'Triage, drafts, categorisation', color: briefColors.pink },
		{ title: 'Data Entry', desc: 'Extract, validate, sync between systems', color: briefColors.orange },
		{ title: 'Compliance Checking', desc: 'Monitor, flag, document', color: briefColors.cyan },
		{ title: 'Reporting', desc: 'Pull data, spot patterns, summarise', color: briefColors.purple },
	] as const;

	const stats = [
		{ stat: '70%', label: 'time savings typical' },
		{ stat: '95%+', label: 'accuracy on routine tasks' },
		{ stat: '<6 mo', label: 'payback period' },
		{ stat: '8-12 wk', label: 'from start to production' },
	] as const;

	const statColors = [briefColors.cyan, briefColors.purple, briefColors.pink, briefColors.orange] as const;

	const steps = [
		{ num: '1', title: 'Discover', desc: 'Map your process, find the pain' },
		{ num: '2', title: 'Design', desc: 'Spec the agent, plan the build' },
		{ num: '3', title: 'Build', desc: 'Develop, test, refine' },
		{ num: '4', title: 'Deploy', desc: 'Roll out, monitor, tune' },
	] as const;

	const why = [
		{ title: '20 years experience', desc: 'Enterprise software, not AI hype' },
		{ title: 'Built for reliability', desc: 'Production systems, not demos' },
		{ title: 'Humans in control', desc: 'Agents that help, not replace' },
		{ title: 'We stick around', desc: 'Ongoing support, not handoff' },
	] as const;

	const tiers = [
		{ tier: 'Pilot', range: '$30-50K', desc: 'Single process, prove the value', color: briefColors.cyan },
		{ tier: 'Standard', range: '$50-100K', desc: 'Full workflow automation', color: briefColors.purple },
		{ tier: 'Enterprise', range: '$100K+', desc: 'Multiple agents, complex integration', color: briefColors.pink },
	] as const;
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 794px; margin: 0 auto; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); min-height: 1123px; position: relative; overflow: hidden;"
	>
		<div
			style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
		></div>

		<div style="padding: 40px 48px 0;">
			<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px;">
				<div>
					<div
						style="font-size: 28px; font-weight: 700; color: {briefColors.deepNavy}; letter-spacing: -0.5px;"
					>
						AI Flow
					</div>
				</div>
				<div style="text-align: right; font-size: 11px; color: {briefColors.slate};">
					aiflow.example<br />
					hello@aiflow.example
				</div>
			</div>

			<div style="margin-bottom: 32px;">
				<h1
					style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 12px 0; line-height: 1.2;"
				>
					AI agents that actually work
				</h1>
				<p style="font-size: 16px; color: {briefColors.slate}; margin: 0; max-width: 500px; line-height: 1.6;">
					We build AI systems that handle repetitive tasks, so your team can focus on work that matters.
				</p>
			</div>
		</div>

		<div style="padding: 0 48px;">
			<div
				style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 24px; margin-bottom: 24px;"
			>
				<div style="display: flex; align-items: flex-start; gap: 20px;">
					<div
						style="width: 48px; height: 48px; border-radius: 8px; background-color: {briefColors.pink}; display: flex; align-items: center; justify-content: center; color: {briefColors.white}; font-size: 24px; flex-shrink: 0;"
					>
						?
					</div>
					<div>
						<div
							style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 8px;"
						>
							The Problem
						</div>
						<p style="font-size: 13px; color: {briefColors.slate}; margin: 0; line-height: 1.6;">
							Your best people are stuck processing documents, chasing approvals, entering data, and doing repetitive
							work that does not need human judgment. It is slow, error-prone, and a waste of talent.
						</p>
					</div>
				</div>
			</div>

			<div style="margin-bottom: 28px;">
				<div
					style="font-size: 12px; font-weight: 600; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
				>
					What We Build
				</div>
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
					{#each buildItems as item, i (i)}
						<div
							style="padding: 14px; border-radius: 6px; border-left: 3px solid {item.color}; background-color: {briefColors.offWhite};"
						>
							<div
								style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 4px;"
							>
								{item.title}
							</div>
							<div style="font-size: 11px; color: {briefColors.slate}; line-height: 1.4;">{item.desc}</div>
						</div>
					{/each}
				</div>
			</div>

			<div
				style="background-color: {briefColors.deepNavy}; border-radius: 8px; padding: 20px 24px; margin-bottom: 28px; display: flex; justify-content: space-around;"
			>
				{#each stats as item, i (i)}
					<div style="text-align: center;">
						<div style="font-size: 24px; font-weight: 700; color: {statColors[i]};">{item.stat}</div>
						<div style="font-size: 10px; color: {briefColors.lightSlate};">{item.label}</div>
					</div>
				{/each}
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px;">
				<div>
					<div
						style="font-size: 12px; font-weight: 600; color: {briefColors.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;"
					>
						How We Work
					</div>
					<div style="display: flex; flex-direction: column; gap: 10px;">
						{#each steps as step, i (i)}
							<div style="display: flex; align-items: center; gap: 12px;">
								<div
									style="width: 24px; height: 24px; border-radius: 50%; background-color: {briefColors.purple}; display: flex; align-items: center; justify-content: center; color: {briefColors.white}; font-size: 11px; font-weight: 600; flex-shrink: 0;"
								>
									{step.num}
								</div>
								<div>
									<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
										>{step.title}</span
									>
									<span style="font-size: 12px; color: {briefColors.slate};"> — {step.desc}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<div
						style="font-size: 12px; font-weight: 600; color: {briefColors.orange}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;"
					>
						Why AI Flow
					</div>
					<div style="display: flex; flex-direction: column; gap: 10px;">
						{#each why as item, i (i)}
							<div style="display: flex; align-items: flex-start; gap: 10px;">
								<div style="color: {briefColors.orange}; font-size: 14px; margin-top: 1px;">✓</div>
								<div>
									<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
										>{item.title}</span
									>
									<span style="font-size: 12px; color: {briefColors.slate};"> — {item.desc}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div style="margin-bottom: 140px;">
				<div
					style="font-size: 12px; font-weight: 600; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px;"
				>
					Typical Investment
				</div>
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
					{#each tiers as item, i (i)}
						<div
							style="background-color: {briefColors.offWhite}; border-radius: 6px; padding: 14px; border-top: 3px solid {item.color};"
						>
							<div style="font-size: 11px; color: {item.color}; font-weight: 600; margin-bottom: 4px;">
								{item.tier}
							</div>
							<div
								style="font-size: 18px; font-weight: 700; color: {briefColors.deepNavy}; margin-bottom: 4px;"
							>
								{item.range}
							</div>
							<div style="font-size: 10px; color: {briefColors.slate};">{item.desc}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div
			style="position: absolute; bottom: 0; left: 0; right: 0; background-color: {briefColors.deepNavy}; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center;"
		>
			<div>
				<div style="font-size: 16px; font-weight: 600; color: {briefColors.white}; margin-bottom: 4px;">
					Ready to automate?
				</div>
				<div style="font-size: 12px; color: {briefColors.lightSlate};">
					Most businesses have 3-5 processes perfect for AI. Let us help you find them.
				</div>
			</div>
			<div style="text-align: right;">
				<div
					style="background-color: {briefColors.cyan}; color: {briefColors.deepNavy}; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 600;"
				>
					Book a discovery call
				</div>
				<div style="font-size: 11px; color: {briefColors.lightSlate}; margin-top: 8px;">
					hello@aiflow.example • aiflow.example
				</div>
			</div>
		</div>
	</div>
</div>
