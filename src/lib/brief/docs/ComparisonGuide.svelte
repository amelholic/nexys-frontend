<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	const options = [
		{
			name: 'AI Agents',
			tagline: 'Intelligent automation',
			desc: 'Software that can read, understand, reason, and act. Handles variation and makes judgment calls.',
			icon: '🧠',
			color: briefColors.cyan,
		},
		{
			name: 'RPA',
			tagline: 'Robotic Process Automation',
			desc: 'Software robots that mimic human clicks and keystrokes. Follows exact scripts.',
			icon: '🤖',
			color: briefColors.purple,
		},
		{
			name: 'Traditional Dev',
			tagline: 'Custom software',
			desc: 'Purpose-built applications with coded business logic. Maximum control and flexibility.',
			icon: '💻',
			color: briefColors.pink,
		},
	] as const;

	const tableRows: {
		criteria: string;
		ai: { score: string; note: string };
		rpa: { score: string; note: string };
		trad: { score: string; note: string };
	}[] = [
		{
			criteria: 'Handles variation in inputs',
			ai: { score: 'Excellent', note: 'Understands context, handles different formats' },
			rpa: { score: 'Poor', note: 'Breaks on any format change' },
			trad: { score: 'Good', note: 'If coded for it' },
		},
		{
			criteria: 'Unstructured data (documents, emails)',
			ai: { score: 'Excellent', note: 'Native capability' },
			rpa: { score: 'Poor', note: 'Needs OCR add-ons, still fragile' },
			trad: { score: 'Fair', note: 'Possible but expensive' },
		},
		{
			criteria: 'Complex business rules',
			ai: { score: 'Good', note: 'Can follow nuanced rules' },
			rpa: { score: 'Fair', note: 'Simple rules only' },
			trad: { score: 'Excellent', note: 'Full control' },
		},
		{
			criteria: 'Speed of implementation',
			ai: { score: '8-12 weeks', note: 'Fast for complex problems' },
			rpa: { score: '4-8 weeks', note: 'Fast for simple tasks' },
			trad: { score: '12-24 weeks', note: 'Slower but thorough' },
		},
		{
			criteria: 'Maintenance burden',
			ai: { score: 'Low-Medium', note: 'Adapts to change' },
			rpa: { score: 'High', note: 'Breaks constantly' },
			trad: { score: 'Medium', note: 'Depends on quality' },
		},
		{
			criteria: 'Upfront cost',
			ai: { score: '$30-100K', note: '' },
			rpa: { score: '$15-50K', note: '+ license fees' },
			trad: { score: '$50-200K', note: '' },
		},
		{
			criteria: 'Ongoing cost',
			ai: { score: '$2-5K/mo', note: 'AI + infra' },
			rpa: { score: '$1-3K/mo', note: 'Licenses + fixes' },
			trad: { score: '$1-2K/mo', note: 'Hosting + support' },
		},
		{
			criteria: 'Scalability',
			ai: { score: 'Excellent', note: 'Cloud-native' },
			rpa: { score: 'Fair', note: 'License per bot' },
			trad: { score: 'Excellent', note: 'If designed for it' },
		},
		{
			criteria: 'Transparency / Auditability',
			ai: { score: 'Good', note: 'Can log reasoning' },
			rpa: { score: 'Excellent', note: 'Step-by-step logs' },
			trad: { score: 'Excellent', note: 'Full control' },
		},
		{
			criteria: 'Vendor lock-in risk',
			ai: { score: 'Medium', note: 'Model portable' },
			rpa: { score: 'High', note: 'Platform-specific' },
			trad: { score: 'Low', note: 'You own the code' },
		},
	];

	const aiWhen = [
		'Processing unstructured documents (PDFs, emails, images)',
		'Inputs vary in format or wording',
		'Decisions require understanding context',
		'You need to handle exceptions gracefully',
		'The process involves language understanding',
		'You want to reduce maintenance burden',
	];
	const aiTags = ['Invoice processing', 'Email triage', 'Document review', 'Customer support', 'Data extraction'];

	const rpaWhen = [
		'Tasks are highly repetitive and predictable',
		'Inputs are structured and consistent',
		'You are bridging legacy systems with no APIs',
		'Rules are simple and well-defined',
		'Volume is moderate and stable',
		'Budget is constrained',
	];
	const rpaTags = ['Data migration', 'Report generation', 'System bridging', 'Form filling', 'Simple workflows'];

	const tradWhen = [
		'You need a custom user interface',
		'Business logic is complex and unique',
		'You want full control over the solution',
		'Integration is the primary challenge',
		'Long-term ownership is important',
		'Regulatory requirements are strict',
	];
	const tradTags = [
		'Core business apps',
		'Complex integrations',
		'Regulatory systems',
		'Custom portals',
		'Unique workflows',
	];

	const frameworkQs: { q: string; yes: string; no: string }[] = [
		{ q: 'Are your inputs unstructured (documents, emails, images)?', yes: 'AI Agents', no: 'RPA or Traditional' },
		{ q: 'Do inputs vary significantly in format?', yes: 'AI Agents', no: 'RPA may work' },
		{ q: 'Do you need a custom user interface?', yes: 'Traditional Dev', no: 'AI Agents or RPA' },
		{ q: 'Is the budget very constrained (<$30K)?', yes: 'RPA', no: 'AI Agents or Traditional' },
		{ q: 'Are you bridging systems with no APIs?', yes: 'RPA', no: 'AI Agents or Traditional' },
		{ q: 'Is the process highly complex and unique?', yes: 'Traditional Dev', no: 'AI Agents' },
	];

	const grad = `linear-gradient(90deg, ${briefColors.cyan} 0%, ${briefColors.purple} 35%, ${briefColors.pink} 65%, ${briefColors.orange} 100%)`;
</script>

{#snippet sectionTitle(color: string, title: string)}
	<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; margin-top: 32px;">
		<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {color};"></div>
		<h3
			style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
		>
			{title}
		</h3>
	</div>
{/snippet}

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 900px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad};"></div>
		<div style="background: {briefColors.deepNavy}; padding: 48px 60px;">
			<div
				style="font-size: 10px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				AI Flow
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {briefColors.white}; margin: 0 0 12px 0;">
				Choosing the Right Automation Approach
			</h1>
			<p style="font-size: 16px; color: {briefColors.lightSlate}; margin: 0;">AI Agents vs RPA vs Traditional Development</p>
		</div>
	</div>

	<div
		style="max-width: 900px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad};"></div>
		<div style="padding: 32px 48px;">
			{@render sectionTitle(briefColors.cyan, 'The Options')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px;">
				{#each options as option, i (i)}
					<div
						style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 24px; border-top: 4px solid {option.color};"
					>
						<div style="font-size: 32px; margin-bottom: 12px;">{option.icon}</div>
						<div style="font-size: 18px; font-weight: 700; color: {briefColors.deepNavy}; margin-bottom: 4px;">
							{option.name}
						</div>
						<div style="font-size: 12px; color: {option.color}; font-weight: 600; margin-bottom: 12px;">
							{option.tagline}
						</div>
						<div style="font-size: 13px; color: {briefColors.slate}; line-height: 1.6;">{option.desc}</div>
					</div>
				{/each}
			</div>

			{@render sectionTitle(briefColors.purple, 'Head-to-Head Comparison')}
			<div style="overflow-x: auto;">
				<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
					<thead>
						<tr>
							<th
								style="padding: 14px 12px; background-color: {briefColors.deepNavy}; color: {briefColors.white}; text-align: left; font-weight: 600; font-size: 11px; width: 25%;"
							>
								Criteria
							</th>
							<th
								style="padding: 14px 12px; background-color: {briefColors.cyan}; color: {briefColors.deepNavy}; text-align: center; font-weight: 600; font-size: 11px; width: 25%;"
							>
								AI Agents
							</th>
							<th
								style="padding: 14px 12px; background-color: {briefColors.purple}; color: {briefColors.white}; text-align: center; font-weight: 600; font-size: 11px; width: 25%;"
							>
								RPA
							</th>
							<th
								style="padding: 14px 12px; background-color: {briefColors.pink}; color: {briefColors.white}; text-align: center; font-weight: 600; font-size: 11px; width: 25%;"
							>
								Traditional Dev
							</th>
						</tr>
					</thead>
					<tbody>
						{#each tableRows as row, i (i)}
							<tr style="background-color: {i % 2 === 0 ? briefColors.white : briefColors.offWhite};">
								<td
									style="padding: 12px; border-bottom: 1px solid {briefColors.lightSlate}22; font-weight: 500; color: {briefColors.deepNavy};"
								>
									{row.criteria}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {briefColors.lightSlate}22; text-align: center;">
									<div style="font-weight: 600; color: {briefColors.cyan};">{row.ai.score}</div>
									{#if row.ai.note}
										<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 2px;">{row.ai.note}</div>
									{/if}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {briefColors.lightSlate}22; text-align: center;">
									<div style="font-weight: 600; color: {briefColors.purple};">{row.rpa.score}</div>
									{#if row.rpa.note}
										<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 2px;">{row.rpa.note}</div>
									{/if}
								</td>
								<td style="padding: 12px; border-bottom: 1px solid {briefColors.lightSlate}22; text-align: center;">
									<div style="font-weight: 600; color: {briefColors.pink};">{row.trad.score}</div>
									{#if row.trad.note}
										<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 2px;">{row.trad.note}</div>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div
		style="max-width: 900px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad};"></div>
		<div style="padding: 32px 48px;">
			{@render sectionTitle(briefColors.green, 'When to Use Each Approach')}
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
				<div
					style="background-color: {briefColors.cyan}10; border-radius: 8px; padding: 20px; border-top: 4px solid {briefColors.cyan};"
				>
					<div
						style="font-size: 16px; font-weight: 700; color: {briefColors.deepNavy}; margin-bottom: 16px;"
					>
						Choose AI Agents when...
					</div>
					{#each aiWhen as item, i (i)}
						<div
							style="display: flex; gap: 8px; margin-bottom: 8px; font-size: 12px; color: {briefColors.deepNavy};"
						>
							<span style="color: {briefColors.cyan};">✓</span>
							<span>{item}</span>
						</div>
					{/each}
					<div
						style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-top: 20px; margin-bottom: 10px;"
					>
						Best for:
					</div>
					<div style="display: flex; flex-wrap: wrap; gap: 6px;">
						{#each aiTags as tag, i (i)}
							<span
								style="font-size: 10px; color: {briefColors.cyan}; background-color: {briefColors.cyan}20; padding: 3px 8px; border-radius: 3px;"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
				<div
					style="background-color: {briefColors.purple}10; border-radius: 8px; padding: 20px; border-top: 4px solid {briefColors.purple};"
				>
					<div
						style="font-size: 16px; font-weight: 700; color: {briefColors.deepNavy}; margin-bottom: 16px;"
					>
						Choose RPA when...
					</div>
					{#each rpaWhen as item, i (i)}
						<div
							style="display: flex; gap: 8px; margin-bottom: 8px; font-size: 12px; color: {briefColors.deepNavy};"
						>
							<span style="color: {briefColors.purple};">✓</span>
							<span>{item}</span>
						</div>
					{/each}
					<div
						style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-top: 20px; margin-bottom: 10px;"
					>
						Best for:
					</div>
					<div style="display: flex; flex-wrap: wrap; gap: 6px;">
						{#each rpaTags as tag, i (i)}
							<span
								style="font-size: 10px; color: {briefColors.purple}; background-color: {briefColors.purple}20; padding: 3px 8px; border-radius: 3px;"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
				<div
					style="background-color: {briefColors.pink}10; border-radius: 8px; padding: 20px; border-top: 4px solid {briefColors.pink};"
				>
					<div
						style="font-size: 16px; font-weight: 700; color: {briefColors.deepNavy}; margin-bottom: 16px;"
					>
						Choose Traditional Dev when...
					</div>
					{#each tradWhen as item, i (i)}
						<div
							style="display: flex; gap: 8px; margin-bottom: 8px; font-size: 12px; color: {briefColors.deepNavy};"
						>
							<span style="color: {briefColors.pink};">✓</span>
							<span>{item}</span>
						</div>
					{/each}
					<div
						style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-top: 20px; margin-bottom: 10px;"
					>
						Best for:
					</div>
					<div style="display: flex; flex-wrap: wrap; gap: 6px;">
						{#each tradTags as tag, i (i)}
							<span
								style="font-size: 10px; color: {briefColors.pink}; background-color: {briefColors.pink}20; padding: 3px 8px; border-radius: 3px;"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 900px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad};"></div>
		<div style="padding: 32px 48px;">
			{@render sectionTitle(briefColors.orange, 'The Hybrid Approach')}
			<div
				style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 24px; margin-bottom: 24px;"
			>
				<p style="font-size: 14px; color: {briefColors.deepNavy}; line-height: 1.7; margin: 0;">
					In practice, the best solutions often combine approaches. AI agents handle the intelligent parts (understanding
					documents, making decisions), while traditional code handles integrations and business logic. RPA can bridge
					legacy gaps where needed.
				</p>
			</div>
			<div style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 16px;">
				Example: Invoice Processing
			</div>
			<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
				<div
					style="flex: 1; min-width: 160px; background-color: {briefColors.cyan}10; border-radius: 8px; padding: 16px; text-align: center;"
				>
					<div style="font-size: 11px; color: {briefColors.cyan}; font-weight: 600; margin-bottom: 6px;">AI Agent</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy};">
						Read invoice, extract data, match to PO, decide approval
					</div>
				</div>
				<div style="font-size: 20px; color: {briefColors.lightSlate};">+</div>
				<div
					style="flex: 1; min-width: 160px; background-color: {briefColors.pink}10; border-radius: 8px; padding: 16px; text-align: center;"
				>
					<div style="font-size: 11px; color: {briefColors.pink}; font-weight: 600; margin-bottom: 6px;">Custom Code</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy};">
						SAP integration, workflow orchestration, audit logging
					</div>
				</div>
				<div style="font-size: 20px; color: {briefColors.lightSlate};">+</div>
				<div
					style="flex: 1; min-width: 160px; background-color: {briefColors.purple}10; border-radius: 8px; padding: 16px; text-align: center;"
				>
					<div style="font-size: 11px; color: {briefColors.purple}; font-weight: 600; margin-bottom: 6px;">
						RPA (if needed)
					</div>
					<div style="font-size: 12px; color: {briefColors.deepNavy};">
						Bridge to legacy system without API
					</div>
				</div>
			</div>
			<div style="background-color: {briefColors.deepNavy}; border-radius: 8px; padding: 20px;">
				<div style="font-size: 14px; color: {briefColors.white}; line-height: 1.6;">
					At AI Flow, we do not push one approach. We assess your specific situation and recommend the right mix.
					Sometimes that is pure AI agents. Sometimes it is custom development with AI components. We will tell you what
					makes sense.
				</div>
			</div>
		</div>
	</div>

	<div
		style="max-width: 900px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad};"></div>
		<div style="padding: 32px 48px;">
			{@render sectionTitle(briefColors.cyan, 'Quick Decision Framework')}
			<div style="font-size: 13px; color: {briefColors.slate}; margin-bottom: 24px;">
				Answer these questions to get a quick sense of which approach fits your situation:
			</div>
			<div style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 24px;">
				{#each frameworkQs as item, i (i)}
					<div
						style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: {i <
						5
							? `1px solid ${briefColors.lightSlate}33`
							: 'none'}; flex-wrap: wrap; gap: 12px;"
					>
						<div style="font-size: 13px; color: {briefColors.deepNavy}; flex: 1; min-width: 200px;">{item.q}</div>
						<div style="display: flex; gap: 16px;">
							<div style="text-align: center; min-width: 80px;">
								<div style="font-size: 10px; color: {briefColors.green}; margin-bottom: 2px;">Yes →</div>
								<div style="font-size: 11px; font-weight: 600; color: {briefColors.deepNavy};">{item.yes}</div>
							</div>
							<div style="text-align: center; min-width: 80px;">
								<div style="font-size: 10px; color: {briefColors.slate}; margin-bottom: 2px;">No →</div>
								<div style="font-size: 11px; font-weight: 600; color: {briefColors.deepNavy};">{item.no}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div
		style="max-width: 900px; margin: 0 auto; background-color: {briefColors.deepNavy}; border-radius: 12px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div style="height: 4px; background: {grad}; border-radius: 12px 12px 0 0;"></div>
		<div
			style="padding: 40px 60px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;"
		>
			<div>
				<div style="font-size: 20px; font-weight: 600; color: {briefColors.white}; margin-bottom: 8px;">
					Not sure which approach is right?
				</div>
				<div style="font-size: 14px; color: {briefColors.lightSlate};">
					We can help you assess your specific situation and recommend the best path forward.
				</div>
			</div>
			<div style="text-align: right;">
				<div
					style="background-color: {briefColors.cyan}; color: {briefColors.deepNavy}; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; margin-bottom: 8px;"
				>
					Book a free assessment
				</div>
				<div style="font-size: 12px; color: {briefColors.lightSlate};">hello@aiflow.example</div>
			</div>
		</div>
	</div>
</div>
