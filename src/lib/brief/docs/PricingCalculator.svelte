<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	type Complexity = 'simple' | 'standard' | 'complex';
	type Timeline = 'compressed' | 'standard' | 'relaxed';
	type SupportTier = 'none' | 'basic' | 'standard' | 'premium';

	let inputs = $state({
		agentCount: 1,
		complexity: 'standard' as Complexity,
		integrationCount: 2,
		monthlyVolume: 1000,
		needsTraining: true,
		needsHandover: true,
		supportTier: 'standard' as SupportTier,
		timeline: 'standard' as Timeline,
	});

	const pricing = {
		agentBase: { simple: 15000, standard: 30000, complex: 50000 },
		integrationCost: { simple: 3000, standard: 6000, complex: 12000 },
		training: 5000,
		handoverPack: 3000,
		support: { none: 0, basic: 1500, standard: 3500, premium: 7500 },
		timelineMultiplier: { compressed: 1.25, standard: 1.0, relaxed: 0.95 },
		volumeCost: 50,
	} as const;

	const results = $derived.by(() => {
		const agentCost = pricing.agentBase[inputs.complexity] * inputs.agentCount;
		const integrationCost = pricing.integrationCost.standard * inputs.integrationCount;
		const trainingCost = inputs.needsTraining ? pricing.training : 0;
		const handoverCost = inputs.needsHandover ? pricing.handoverPack : 0;
		const subtotal = agentCost + integrationCost + trainingCost + handoverCost;
		const projectTotal = Math.round(subtotal * pricing.timelineMultiplier[inputs.timeline]);
		const monthlySupport = pricing.support[inputs.supportTier];
		const monthlyRunning = Math.round((inputs.monthlyVolume / 1000) * pricing.volumeCost);
		const monthlyTotal = monthlySupport + monthlyRunning;
		const baseWeeks = { simple: 4, standard: 8, complex: 12 } as const;
		const timelineWeeks = Math.round(
			baseWeeks[inputs.complexity] * inputs.agentCount * 0.7 + inputs.integrationCount * 1.5,
		);
		const assumedHourlyCost = 50;
		const assumedMinutesPerTask = 15;
		const hoursPerMonth = (inputs.monthlyVolume * assumedMinutesPerTask) / 60;
		const currentMonthlyCost = hoursPerMonth * assumedHourlyCost;
		const savingsPerMonth = currentMonthlyCost * 0.7;
		const netMonthlySavings = savingsPerMonth - monthlyTotal;
		const paybackMonths = netMonthlySavings > 0 ? Math.ceil(projectTotal / netMonthlySavings) : null;
		const annualROI =
			netMonthlySavings > 0 ? Math.round(((netMonthlySavings * 12 - projectTotal) / projectTotal) * 100) : null;
		return {
			projectTotal,
			monthlySupport,
			monthlyRunning,
			monthlyTotal,
			timelineWeeks,
			savingsPerMonth: Math.round(savingsPerMonth),
			netMonthlySavings: Math.round(netMonthlySavings),
			paybackMonths,
			annualROI,
		};
	});

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('en-AU', {
			style: 'currency',
			currency: 'AUD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	}

	function handleChange<K extends keyof typeof inputs>(name: K, value: (typeof inputs)[K]) {
		inputs = { ...inputs, [name]: value };
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1000px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 40px;">
			<div
				style="font-size: 10px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				AI Flow
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {briefColors.deepNavy}; margin: 0 0 12px 0;">
				AI Agent Pricing Calculator
			</h1>
			<p style="font-size: 16px; color: {briefColors.slate}; max-width: 600px; margin: 0 auto;">
				Get a ballpark estimate for your AI automation project. Actual pricing depends on specific requirements.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: 1fr 400px; gap: 32px;">
			<div
				style="background-color: {briefColors.white}; border-radius: 12px; padding: 32px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div
					style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%); border-radius: 2px; margin-bottom: 24px;"
				></div>
				<h2 style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 24px;">
					Project Scope
				</h2>

				<div style="margin-bottom: 20px;">
					<div
						style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;"
					>
						<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};">Number of Agents</div>
						<div style="font-size: 16px; font-weight: 700; color: {briefColors.cyan};">{inputs.agentCount}</div>
					</div>
					<input
						type="range"
						min="1"
						max="5"
						step="1"
						bind:value={inputs.agentCount}
						style="width: 100%; height: 8px; border-radius: 4px; background: linear-gradient(to right, {briefColors.cyan} 0%, {briefColors.cyan} {((inputs.agentCount - 1) / 4) *
							100}%, {briefColors.lightSlate}33 {((inputs.agentCount - 1) / 4) * 100}%, {briefColors.lightSlate}33 100%); appearance: none; cursor: pointer;"
					/>
					<div
						style="display: flex; justify-content: space-between; font-size: 10px; color: {briefColors.lightSlate}; margin-top: 4px;"
					>
						<span>1</span><span>5</span>
					</div>
				</div>

				<div style="margin-bottom: 20px;">
					<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 10px;">
						Agent Complexity
					</div>
					<div style="display: flex; gap: 8px;">
						{#each [{ value: 'simple' as const, label: 'Simple', desc: 'Single task, few rules' }, { value: 'standard' as const, label: 'Standard', desc: 'Multi-step, business logic' }, { value: 'complex' as const, label: 'Complex', desc: 'Orchestration, many paths' }] as opt}
							<button
								type="button"
								onclick={() => handleChange('complexity', opt.value)}
								style="flex: 1; padding: 12px 16px; border-radius: 6px; border: 2px solid {inputs.complexity === opt.value
									? briefColors.cyan
									: `${briefColors.lightSlate}33`}; background-color: {inputs.complexity === opt.value
									? `${briefColors.cyan}15`
									: briefColors.white}; cursor: pointer; text-align: center; transition: all 0.2s; font: inherit;"
							>
								<div
									style="font-size: 13px; font-weight: 600; color: {inputs.complexity === opt.value
										? briefColors.cyan
										: briefColors.deepNavy};"
								>
									{opt.label}
								</div>
								<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 4px;">{opt.desc}</div>
							</button>
						{/each}
					</div>
				</div>

				<div style="margin-bottom: 20px;">
					<div
						style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;"
					>
						<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};">
							System Integrations
						</div>
						<div style="font-size: 16px; font-weight: 700; color: {briefColors.cyan};">
							{inputs.integrationCount} system{inputs.integrationCount > 1 ? 's' : ''}
						</div>
					</div>
					<input
						type="range"
						min="1"
						max="6"
						step="1"
						bind:value={inputs.integrationCount}
						style="width: 100%; height: 8px; border-radius: 4px; background: linear-gradient(to right, {briefColors.cyan} 0%, {briefColors.cyan} {((inputs.integrationCount - 1) / 5) *
							100}%, {briefColors.lightSlate}33 {((inputs.integrationCount - 1) / 5) * 100}%, {briefColors.lightSlate}33 100%); appearance: none; cursor: pointer;"
					/>
					<div
						style="display: flex; justify-content: space-between; font-size: 10px; color: {briefColors.lightSlate}; margin-top: 4px;"
					>
						<span>1</span><span>6</span>
					</div>
				</div>

				<h2
					style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 24px; margin-top: 32px;"
				>
					Volume & Timeline
				</h2>

				<div style="margin-bottom: 20px;">
					<div
						style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;"
					>
						<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};">
							Monthly Transaction Volume
						</div>
						<div style="font-size: 16px; font-weight: 700; color: {briefColors.cyan};">
							{inputs.monthlyVolume.toLocaleString()}
						</div>
					</div>
					<input
						type="range"
						min="100"
						max="10000"
						step="100"
						bind:value={inputs.monthlyVolume}
						style="width: 100%; height: 8px; border-radius: 4px; background: linear-gradient(to right, {briefColors.cyan} 0%, {briefColors.cyan} {((inputs.monthlyVolume - 100) / 9900) *
							100}%, {briefColors.lightSlate}33 {((inputs.monthlyVolume - 100) / 9900) * 100}%, {briefColors.lightSlate}33 100%); appearance: none; cursor: pointer;"
					/>
					<div
						style="display: flex; justify-content: space-between; font-size: 10px; color: {briefColors.lightSlate}; margin-top: 4px;"
					>
						<span>100</span><span>10,000</span>
					</div>
				</div>

				<div style="margin-bottom: 20px;">
					<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 10px;">
						Timeline
					</div>
					<div style="display: flex; gap: 8px;">
						{#each [{ value: 'compressed' as const, label: 'Rush', desc: '+25% for speed' }, { value: 'standard' as const, label: 'Standard', desc: 'Normal timeline' }, { value: 'relaxed' as const, label: 'Flexible', desc: '-5% discount' }] as opt}
							<button
								type="button"
								onclick={() => handleChange('timeline', opt.value)}
								style="flex: 1; padding: 12px 16px; border-radius: 6px; border: 2px solid {inputs.timeline === opt.value
									? briefColors.cyan
									: `${briefColors.lightSlate}33`}; background-color: {inputs.timeline === opt.value
									? `${briefColors.cyan}15`
									: briefColors.white}; cursor: pointer; text-align: center; transition: all 0.2s; font: inherit;"
							>
								<div
									style="font-size: 13px; font-weight: 600; color: {inputs.timeline === opt.value
										? briefColors.cyan
										: briefColors.deepNavy};"
								>
									{opt.label}
								</div>
								<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 4px;">{opt.desc}</div>
							</button>
						{/each}
					</div>
				</div>

				<h2
					style="font-size: 18px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 16px; margin-top: 32px;"
				>
					Additional Services
				</h2>

				<div
					style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid {briefColors.lightSlate}22;"
				>
					<div style="font-size: 12px; color: {briefColors.deepNavy};">Training for your team</div>
					<button
						type="button"
						aria-label="Toggle training for your team"
						onclick={() => handleChange('needsTraining', !inputs.needsTraining)}
						style="width: 48px; height: 26px; border-radius: 13px; background-color: {inputs.needsTraining
							? briefColors.cyan
							: briefColors.lightSlate}; border: none; cursor: pointer; position: relative; transition: background-color 0.2s; font: inherit;"
						aria-pressed={inputs.needsTraining}
					>
						<div
							style="width: 22px; height: 22px; border-radius: 50%; background-color: {briefColors.white}; position: absolute; top: 2px; left: {inputs.needsTraining
								? '24px'
								: '2px'}; transition: left 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"
						></div>
					</button>
				</div>
				<div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
					<div style="font-size: 12px; color: {briefColors.deepNavy};">Handover documentation pack</div>
					<button
						type="button"
						aria-label="Toggle handover documentation pack"
						onclick={() => handleChange('needsHandover', !inputs.needsHandover)}
						style="width: 48px; height: 26px; border-radius: 13px; background-color: {inputs.needsHandover
							? briefColors.cyan
							: briefColors.lightSlate}; border: none; cursor: pointer; position: relative; transition: background-color 0.2s; font: inherit;"
						aria-pressed={inputs.needsHandover}
					>
						<div
							style="width: 22px; height: 22px; border-radius: 50%; background-color: {briefColors.white}; position: absolute; top: 2px; left: {inputs.needsHandover
								? '24px'
								: '2px'}; transition: left 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"
						></div>
					</button>
				</div>

				<div style="margin-top: 20px;">
					<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 10px;">
						Ongoing Support
					</div>
					<div style="display: flex; gap: 8px; flex-wrap: wrap;">
						{#each [{ value: 'none' as const, label: 'None', desc: 'Self-managed' }, { value: 'basic' as const, label: 'Basic', desc: '$1.5K/mo' }, { value: 'standard' as const, label: 'Standard', desc: '$3.5K/mo' }, { value: 'premium' as const, label: 'Premium', desc: '$7.5K/mo' }] as opt}
							<button
								type="button"
								onclick={() => handleChange('supportTier', opt.value)}
								style="flex: 1; min-width: 100px; padding: 12px 16px; border-radius: 6px; border: 2px solid {inputs.supportTier === opt.value
									? briefColors.cyan
									: `${briefColors.lightSlate}33`}; background-color: {inputs.supportTier === opt.value
									? `${briefColors.cyan}15`
									: briefColors.white}; cursor: pointer; text-align: center; transition: all 0.2s; font: inherit;"
							>
								<div
									style="font-size: 13px; font-weight: 600; color: {inputs.supportTier === opt.value
										? briefColors.cyan
										: briefColors.deepNavy};"
								>
									{opt.label}
								</div>
								<div style="font-size: 10px; color: {briefColors.slate}; margin-top: 4px;">{opt.desc}</div>
							</button>
						{/each}
					</div>
				</div>
			</div>

			<div>
				<div
					style="background-color: {briefColors.deepNavy}; border-radius: 12px; padding: 28px; margin-bottom: 20px;"
				>
					<div
						style="font-size: 11px; color: {briefColors.lightSlate}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;"
					>
						Estimated Project Cost
					</div>
					<div style="font-size: 42px; font-weight: 700; color: {briefColors.cyan};">
						{formatCurrency(results.projectTotal)}
					</div>
					<div style="font-size: 13px; color: {briefColors.lightSlate}; margin-top: 8px;">One-time build cost</div>
					<div style="border-top: 1px solid {briefColors.slate}; margin-top: 20px; padding-top: 20px;">
						<div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
							<span style="font-size: 12px; color: {briefColors.lightSlate};">Estimated timeline</span>
							<span style="font-size: 14px; font-weight: 600; color: {briefColors.white};"
								>{results.timelineWeeks} weeks</span
							>
						</div>
					</div>
				</div>

				<div
					style="background-color: {briefColors.white}; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
				>
					<div
						style="font-size: 11px; color: {briefColors.lightSlate}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
					>
						Monthly Ongoing Costs
					</div>
					<div
						style="display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid {briefColors.lightSlate}22;"
					>
						<span style="font-size: 13px; color: {briefColors.slate};">Support ({inputs.supportTier})</span>
						<span style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy};"
							>{formatCurrency(results.monthlySupport)}</span
						>
					</div>
					<div
						style="display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid {briefColors.lightSlate}22;"
					>
						<span style="font-size: 13px; color: {briefColors.slate};">Running costs (LLM + infra)</span>
						<span style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy};"
							>{formatCurrency(results.monthlyRunning)}</span
						>
					</div>
					<div style="display: flex; justify-content: space-between;">
						<span style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy};">Total monthly</span>
						<span style="font-size: 18px; font-weight: 700; color: {briefColors.purple};"
							>{formatCurrency(results.monthlyTotal)}</span
						>
					</div>
				</div>

				<div
					style="background-color: {briefColors.white}; border-radius: 12px; padding: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
				>
					<div
						style="font-size: 11px; color: {briefColors.lightSlate}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
					>
						Estimated ROI
					</div>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
						<div
							style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px; text-align: center;"
						>
							<div style="font-size: 10px; color: {briefColors.lightSlate}; margin-bottom: 4px;">
								Monthly Savings
							</div>
							<div style="font-size: 20px; font-weight: 700; color: {briefColors.green};">
								{formatCurrency(results.savingsPerMonth)}
							</div>
						</div>
						<div
							style="background-color: {briefColors.offWhite}; border-radius: 8px; padding: 16px; text-align: center;"
						>
							<div style="font-size: 10px; color: {briefColors.lightSlate}; margin-bottom: 4px;">
								Net Monthly Benefit
							</div>
							<div
								style="font-size: 20px; font-weight: 700; color: {results.netMonthlySavings > 0
									? briefColors.green
									: briefColors.orange};"
							>
								{formatCurrency(results.netMonthlySavings)}
							</div>
						</div>
					</div>
					{#if results.paybackMonths}
						<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
							<div
								style="background-color: {briefColors.green}15; border-radius: 8px; padding: 16px; text-align: center;"
							>
								<div style="font-size: 10px; color: {briefColors.green}; margin-bottom: 4px;">Payback Period</div>
								<div style="font-size: 24px; font-weight: 700; color: {briefColors.green};">
									{results.paybackMonths} mo
								</div>
							</div>
							<div
								style="background-color: {briefColors.cyan}15; border-radius: 8px; padding: 16px; text-align: center;"
							>
								<div style="font-size: 10px; color: {briefColors.cyan}; margin-bottom: 4px;">First Year ROI</div>
								<div style="font-size: 24px; font-weight: 700; color: {briefColors.cyan};">
									{results.annualROI}%
								</div>
							</div>
						</div>
					{/if}
					<div style="margin-top: 16px; padding: 12px; background-color: {briefColors.offWhite}; border-radius: 6px;">
						<div style="font-size: 10px; color: {briefColors.slate}; line-height: 1.5;">
							* ROI assumes 70% time savings on manual work at $50/hr. Actual results vary based on your specific
							process and team costs.
						</div>
					</div>
				</div>

				<div style="margin-top: 20px; text-align: center;">
					<button
						type="button"
						style="width: 100%; padding: 16px 24px; background-color: {briefColors.cyan}; color: {briefColors.deepNavy}; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; font: inherit;"
					>
						Get a detailed quote
					</button>
					<p style="font-size: 11px; color: {briefColors.slate}; margin-top: 12px;">
						This is a ballpark estimate. Contact us for accurate pricing based on your specific needs.
					</p>
				</div>
			</div>
		</div>

		<div
			style="margin-top: 40px; padding: 20px; background-color: {briefColors.white}; border-radius: 8px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 8px;">
				About this estimate
			</div>
			<div style="font-size: 11px; color: {briefColors.slate}; line-height: 1.6;">
				This calculator provides rough estimates for budgeting purposes. Actual project costs depend on specific
				requirements including: data complexity, existing system documentation, security requirements, testing needs,
				and team availability. All prices in AUD, excluding GST. Contact us for a proper scoping conversation and
				detailed quote.
			</div>
		</div>

		<div style="margin-top: 32px; text-align: center; font-size: 12px; color: {briefColors.lightSlate};">
			<span style="font-weight: 600; color: {briefColors.deepNavy};">AI Flow</span> • AI Agent Pricing Calculator •
			Estimates only
		</div>
	</div>
</div>
