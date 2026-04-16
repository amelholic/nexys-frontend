<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	const compareRows: { factor: string; shelf: string; custom: string; winner: 'shelf' | 'custom' }[] = [
		{
			factor: 'Time to Value',
			shelf: 'Fast (days to weeks). Sign up, configure, go.',
			custom: 'Moderate (6-12 weeks). Requires discovery and build.',
			winner: 'shelf',
		},
		{
			factor: 'Upfront Cost',
			shelf: 'Low to none. Monthly subscription.',
			custom: 'Higher ($50K-$150K typical). Implementation investment.',
			winner: 'shelf',
		},
		{
			factor: 'Ongoing Cost',
			shelf: 'Per-user or per-transaction fees. Can scale quickly.',
			custom: 'Predictable monthly platform fee. Scales efficiently.',
			winner: 'custom',
		},
		{
			factor: 'Process Fit',
			shelf: 'Works if your process matches their design.',
			custom: 'Built around YOUR process exactly.',
			winner: 'custom',
		},
		{
			factor: 'Integration',
			shelf: 'Pre-built connectors for common systems.',
			custom: 'Custom integration to any system with API.',
			winner: 'custom',
		},
		{
			factor: 'Flexibility',
			shelf: 'Limited to vendor roadmap and configuration.',
			custom: 'Unlimited. Change anything anytime.',
			winner: 'custom',
		},
		{
			factor: 'Maintenance',
			shelf: 'Vendor handles updates and fixes.',
			custom: 'You (or your partner) manages changes.',
			winner: 'shelf',
		},
		{
			factor: 'Data Control',
			shelf: 'Data in vendor cloud. Check their policies.',
			custom: 'Your infrastructure, your rules.',
			winner: 'custom',
		},
		{
			factor: 'Competitive Advantage',
			shelf: 'Same tool available to competitors.',
			custom: 'Unique capability only you have.',
			winner: 'custom',
		},
		{
			factor: 'Vendor Lock-in',
			shelf: 'Moderate to high. Switching costs real.',
			custom: 'Low. You own the solution.',
			winner: 'custom',
		},
	];

	const shelfWhen = [
		'Your process is standard (e.g., expense reports, basic invoices)',
		'You need to start immediately',
		'Budget is limited (<$50K available)',
		'Volume is low (<500 transactions/month)',
		'You lack technical resources',
		'Process will not change significantly',
		'You are testing the concept before investing more',
	];

	const customWhen = [
		'Your process is unique to your business',
		"Off-the-shelf tools do not fit (you've checked)",
		'You need deep integration with existing systems',
		'Volume justifies investment (500+ transactions/month)',
		'Process is a competitive differentiator',
		'You need full control over data and logic',
		'You want to own the IP and capability',
	];

	const tcoShelf = [
		{ item: 'Implementation', y1: '$5K', y2: '-', y3: '-', bold: false },
		{ item: 'Subscription ($2/invoice)', y1: '$24K', y2: '$24K', y3: '$24K', bold: false },
		{ item: 'Integration (IT time)', y1: '$10K', y2: '$5K', y3: '$5K', bold: false },
		{ item: 'Workarounds (manual)', y1: '$15K', y2: '$15K', y3: '$15K', bold: false },
		{ item: 'Annual Total', y1: '$54K', y2: '$44K', y3: '$44K', bold: true },
	];

	const tcoCustom = [
		{ item: 'Implementation', y1: '$80K', y2: '-', y3: '-', bold: false },
		{ item: 'Platform + Support', y1: '$36K', y2: '$36K', y3: '$36K', bold: false },
		{ item: 'AI Usage', y1: '$12K', y2: '$12K', y3: '$12K', bold: false },
		{ item: 'Enhancements', y1: '-', y2: '$10K', y3: '$10K', bold: false },
		{ item: 'Annual Total', y1: '$128K', y2: '$58K', y3: '$58K', bold: true },
	];

	const decisions: { question: string; yes: string; no: string }[] = [
		{
			question: '1. Is there an off-the-shelf product that does exactly what you need?',
			yes: '→ Start there. Try it. See if it fits.',
			no: '→ Custom is likely needed.',
		},
		{
			question: '2. Can you adapt your process to fit the product?',
			yes: '→ Off-the-shelf can work if you are flexible.',
			no: '→ Custom builds around YOUR process.',
		},
		{
			question: '3. Is volume high enough to justify custom investment?',
			yes: '→ Custom usually has better unit economics at scale.',
			no: '→ Off-the-shelf or manual may be fine.',
		},
		{
			question: '4. Do you need deep integration with internal systems?',
			yes: '→ Custom integrates with anything.',
			no: '→ Off-the-shelf pre-built connectors may suffice.',
		},
		{
			question: '5. Is this process a competitive differentiator?',
			yes: '→ Custom gives you unique capability.',
			no: '→ Off-the-shelf is fine for commodity processes.',
		},
	];

	const hybrid = [
		{
			title: 'Start Off-the-Shelf',
			desc: 'Use a product to prove the concept and learn. Migrate to custom when you outgrow it.',
			icon: '🚀',
			color: briefColors.purple,
		},
		{
			title: 'Core + Extensions',
			desc: 'Use off-the-shelf for standard functions. Add custom AI for unique processes.',
			icon: '🔌',
			color: briefColors.cyan,
		},
		{
			title: 'Custom Platform',
			desc: 'Build custom once, deploy multiple agents. Amortise the investment.',
			icon: '🏗️',
			color: briefColors.pink,
		},
	] as const;

	const fitBoxes = [
		{ label: 'Our Sweet Spot', value: 'Complex processes off-the-shelf cannot handle' },
		{ label: 'Typical Volume', value: '500-50,000 transactions/month' },
		{ label: 'Investment', value: '$50K-$300K implementation' },
	] as const;

	const gradCp = `linear-gradient(90deg, ${briefColors.cyan} 0%, ${briefColors.purple} 100%)`;
	const gradGc = `linear-gradient(90deg, ${briefColors.green} 0%, ${briefColors.cyan} 100%)`;
	const gradOp = `linear-gradient(90deg, ${briefColors.orange} 0%, ${briefColors.pink} 100%)`;
	const gradPc = `linear-gradient(90deg, ${briefColors.purple} 0%, ${briefColors.cyan} 100%)`;
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div
			style="background-color: {briefColors.deepNavy}; border-radius: 12px; padding: 48px; margin-bottom: 32px; text-align: center;"
		>
			<div
				style="font-size: 11px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				Buyer's Guide
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {briefColors.white}; margin: 0 0 16px 0;">
				Off-the-Shelf AI vs Custom AI Agents
			</h1>
			<p
				style="font-size: 16px; color: {briefColors.lightSlate}; margin: 0; max-width: 600px; margin-left: auto; margin-right: auto;"
			>
				How to choose the right approach for your automation needs
			</p>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 12px; padding: 32px; margin-bottom: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<p style="font-size: 15px; color: {briefColors.slate}; line-height: 1.7; margin: 0;">
				When evaluating AI automation, you will encounter two broad categories: <strong>off-the-shelf products</strong> (SaaS
				tools built for specific functions) and <strong>custom AI agents</strong> (purpose-built solutions for your specific
				processes). Neither is universally better — the right choice depends on your situation.
			</p>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="height: 4px; background: {gradCp};"></div>
			<div style="padding: 32px;">
				<h2 style="font-size: 20px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 24px 0;">
					Side-by-Side Comparison
				</h2>
				<table style="width: 100%; border-collapse: collapse; font-size: 13px;">
					<thead>
						<tr>
							<th
								style="text-align: left; padding: 16px; background-color: {briefColors.offWhite}; color: {briefColors.slate}; font-weight: 600; width: 25%;"
							>
								Factor
							</th>
							<th
								style="text-align: left; padding: 16px; background-color: {briefColors.purple}15; color: {briefColors.purple}; font-weight: 600; width: 37.5%;"
							>
								Off-the-Shelf AI
							</th>
							<th
								style="text-align: left; padding: 16px; background-color: {briefColors.cyan}15; color: {briefColors.cyan}; font-weight: 600; width: 37.5%;"
							>
								Custom AI Agent
							</th>
						</tr>
					</thead>
					<tbody>
						{#each compareRows as row, i (i)}
							<tr style="border-bottom: 1px solid {briefColors.lightSlate}22;">
								<td style="padding: 16px; color: {briefColors.deepNavy}; font-weight: 500;">{row.factor}</td>
								<td
									style="padding: 16px; color: {briefColors.slate}; background-color: {row.winner === 'shelf'
										? `${briefColors.green}08`
										: 'transparent'};"
								>
									{#if row.winner === 'shelf'}<span style="color: {briefColors.green}; margin-right: 8px;">✓</span>{/if}
									{row.shelf}
								</td>
								<td
									style="padding: 16px; color: {briefColors.slate}; background-color: {row.winner === 'custom'
										? `${briefColors.green}08`
										: 'transparent'};"
								>
									{#if row.winner === 'custom'}<span style="color: {briefColors.green}; margin-right: 8px;">✓</span>{/if}
									{row.custom}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
			<div
				style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div style="height: 4px; background-color: {briefColors.purple};"></div>
				<div style="padding: 28px;">
					<h3 style="font-size: 18px; font-weight: 700; color: {briefColors.purple}; margin: 0 0 20px 0;">
						Choose Off-the-Shelf When...
					</h3>
					<div style="display: flex; flex-direction: column; gap: 12px;">
						{#each shelfWhen as item, i (i)}
							<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {briefColors.deepNavy};">
								<span style="color: {briefColors.purple}; font-size: 16px;">✓</span>
								<span>{item}</span>
							</div>
						{/each}
					</div>
					<div style="margin-top: 24px; padding: 16px; background-color: {briefColors.offWhite}; border-radius: 8px;">
						<div style="font-size: 12px; font-weight: 600; color: {briefColors.purple}; margin-bottom: 8px;">
							Example Products
						</div>
						<div style="font-size: 12px; color: {briefColors.slate};">
							Docsumo, Rossum, Nanonets (invoice capture), Ironclad, ContractPodAI (contracts), various vertical-specific
							SaaS
						</div>
					</div>
				</div>
			</div>
			<div
				style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div style="height: 4px; background-color: {briefColors.cyan};"></div>
				<div style="padding: 28px;">
					<h3 style="font-size: 18px; font-weight: 700; color: {briefColors.cyan}; margin: 0 0 20px 0;">
						Choose Custom When...
					</h3>
					<div style="display: flex; flex-direction: column; gap: 12px;">
						{#each customWhen as item, i (i)}
							<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {briefColors.deepNavy};">
								<span style="color: {briefColors.cyan}; font-size: 16px;">✓</span>
								<span>{item}</span>
							</div>
						{/each}
					</div>
					<div style="margin-top: 24px; padding: 16px; background-color: {briefColors.offWhite}; border-radius: 8px;">
						<div style="font-size: 12px; font-weight: 600; color: {briefColors.cyan}; margin-bottom: 8px;">Best For</div>
						<div style="font-size: 12px; color: {briefColors.slate};">
							Complex multi-step processes, industry-specific workflows, high-volume operations, strategic automation
							initiatives
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="height: 4px; background: {gradGc};"></div>
			<div style="padding: 32px;">
				<h2 style="font-size: 20px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 8px 0;">
					Total Cost of Ownership
				</h2>
				<p style="font-size: 13px; color: {briefColors.slate}; margin: 0 0 24px 0;">
					Do not just compare sticker prices. Consider the full picture over 3 years.
				</p>
				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 14px; font-weight: 600; color: {briefColors.purple}; margin-bottom: 16px;">
							Off-the-Shelf (Example: 1,000 invoices/month)
						</div>
						<table style="width: 100%; font-size: 12px;">
							<tbody>
								{#each tcoShelf as row, i (i)}
									<tr style="border-bottom: 1px solid {briefColors.lightSlate}22;">
										<td
											style="padding: 8px 0; color: {row.bold ? briefColors.purple : briefColors.deepNavy}; font-weight: {row.bold
												? '600'
												: '400'};"
										>
											{row.item}
										</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y1}</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y2}</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y3}</td>
									</tr>
								{/each}
								<tr>
									<td style="padding: 12px 0; font-weight: 700; color: {briefColors.purple};">3-Year TCO</td>
									<td
										colspan="3"
										style="padding: 12px 0; text-align: right; font-weight: 700; color: {briefColors.purple}; font-size: 16px;"
									>
										$142K
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px;">
						<div style="font-size: 14px; font-weight: 600; color: {briefColors.cyan}; margin-bottom: 16px;">
							Custom AI Agent (Same: 1,000 invoices/month)
						</div>
						<table style="width: 100%; font-size: 12px;">
							<tbody>
								{#each tcoCustom as row, i (i)}
									<tr style="border-bottom: 1px solid {briefColors.lightSlate}22;">
										<td
											style="padding: 8px 0; color: {row.bold ? briefColors.cyan : briefColors.deepNavy}; font-weight: {row.bold
												? '600'
												: '400'};"
										>
											{row.item}
										</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y1}</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y2}</td>
										<td style="padding: 8px 0; text-align: right; color: {briefColors.slate};">{row.y3}</td>
									</tr>
								{/each}
								<tr>
									<td style="padding: 12px 0; font-weight: 700; color: {briefColors.cyan};">3-Year TCO</td>
									<td
										colspan="3"
										style="padding: 12px 0; text-align: right; font-weight: 700; color: {briefColors.cyan}; font-size: 16px;"
									>
										$244K
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div style="margin-top: 24px; padding: 20px; background-color: {briefColors.deepNavy}; border-radius: 8px;">
					<div style="font-size: 14px; font-weight: 600; color: {briefColors.white}; margin-bottom: 12px;">Key Insight</div>
					<p style="font-size: 13px; color: {briefColors.lightSlate}; margin: 0; line-height: 1.6;">
						At 1,000 invoices/month, off-the-shelf appears cheaper. But this assumes it handles 100% of your invoices. If
						it only handles 70% (and 30% need manual workarounds), the math changes. Custom handles 95%+, including your
						edge cases.
						<strong style="color: {briefColors.white};"
							>At 2,000+ invoices/month, custom is usually cheaper — and scales better.</strong
						>
					</p>
				</div>
			</div>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="height: 4px; background: {gradOp};"></div>
			<div style="padding: 32px;">
				<h2 style="font-size: 20px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 24px 0;">
					Decision Framework
				</h2>
				<div style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 24px;">
					<div style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 16px;">
						Answer these questions:
					</div>
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each decisions as item, i (i)}
							<div
								style="border-bottom: {i < 4 ? `1px solid ${briefColors.lightSlate}22` : 'none'}; padding-bottom: {i < 4
									? '16px'
									: '0'};"
							>
								<div style="font-size: 13px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 8px;">
									{item.question}
								</div>
								<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 12px;">
									<div style="color: {briefColors.green};"><strong>Yes:</strong> {item.yes}</div>
									<div style="color: {briefColors.slate};"><strong>No:</strong> {item.no}</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 12px; overflow: hidden; margin-bottom: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="height: 4px; background: {gradPc};"></div>
			<div style="padding: 32px;">
				<h2 style="font-size: 20px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 8px 0;">
					The Hybrid Approach
				</h2>
				<p style="font-size: 13px; color: {briefColors.slate}; margin: 0 0 24px 0;">
					It is not always either/or. Many organisations use both strategically.
				</p>
				<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
					{#each hybrid as item, i (i)}
						<div style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 20px;">
							<div style="font-size: 24px; margin-bottom: 12px;">{item.icon}</div>
							<div style="font-size: 14px; font-weight: 600; color: {item.color}; margin-bottom: 8px;">{item.title}</div>
							<div style="font-size: 12px; color: {briefColors.slate}; line-height: 1.5;">{item.desc}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="background-color: {briefColors.deepNavy}; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
			<h2 style="font-size: 20px; font-weight: 700; color: {briefColors.white}; margin: 0 0 16px 0;">Where AI Flow fits</h2>
			<p style="font-size: 14px; color: {briefColors.lightSlate}; margin: 0 0 24px 0; line-height: 1.6;">
				We build custom AI agents for processes where off-the-shelf does not cut it. If a product exists that does what you
				need — use it. But when you need something tailored to your process, integrated with your systems, and built for your
				scale — that is us.
			</p>
			<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
				{#each fitBoxes as item, i (i)}
					<div style="background-color: rgba(255,255,255,0.1); border-radius: 8px; padding: 16px;">
						<div style="font-size: 10px; color: {briefColors.cyan}; margin-bottom: 4px;">{item.label}</div>
						<div style="font-size: 13px; color: {briefColors.white};">{item.value}</div>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 24px; padding: 16px; background-color: rgba(0, 180, 255, 0.15); border-radius: 8px; border: 1px solid {briefColors.cyan}30;"
			>
				<div style="font-size: 13px; color: {briefColors.white};">
					<strong>Not sure which approach is right?</strong> We are happy to assess your situation honestly — even if the
					answer is "use an off-the-shelf product." We would rather build the right relationship than the wrong project.
				</div>
			</div>
		</div>

		<div style="text-align: center; padding: 24px; color: {briefColors.slate}; font-size: 12px;">
			<div style="margin-bottom: 8px;">Questions? Let us talk.</div>
			<div style="color: {briefColors.cyan}; font-weight: 600;">hello@aiflow.example</div>
		</div>
	</div>
</div>
