<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	let inputs = $state({
		monthlyVolume: 500,
		avgTimeMinutes: 20,
		hourlyRate: 45,
		errorRate: 3,
		errorCost: 150,
		autoProcessRate: 65,
		timeReduction: 75,
		errorReduction: 80,
		implementationCost: 80000,
		monthlyPlatformCost: 2500,
	});

	const currentMonthlyCost = $derived(
		inputs.monthlyVolume * (inputs.avgTimeMinutes / 60) * inputs.hourlyRate +
			inputs.monthlyVolume * (inputs.errorRate / 100) * inputs.errorCost,
	);

	const autoProcessed = $derived(inputs.monthlyVolume * (inputs.autoProcessRate / 100));
	const manualProcessed = $derived(inputs.monthlyVolume - autoProcessed);

	const newProcessingCost = $derived(
		manualProcessed * (inputs.avgTimeMinutes / 60) * inputs.hourlyRate +
			autoProcessed *
				inputs.avgTimeMinutes *
				(1 - inputs.timeReduction / 100) *
				(1 / 60) *
				inputs.hourlyRate,
	);

	const newErrorCost = $derived(
		inputs.monthlyVolume * (inputs.errorRate / 100) * (1 - inputs.errorReduction / 100) * inputs.errorCost,
	);

	const newMonthlyCost = $derived(newProcessingCost + newErrorCost + inputs.monthlyPlatformCost);

	const monthlySavings = $derived(currentMonthlyCost - newMonthlyCost);
	const annualSavings = $derived(monthlySavings * 12);
	const paybackMonths = $derived(monthlySavings > 0 ? inputs.implementationCost / monthlySavings : 0);
	const yearOneROI = $derived(
		inputs.implementationCost > 0 && monthlySavings > 0
			? ((annualSavings - inputs.implementationCost) / inputs.implementationCost) * 100
			: 0,
	);
	const threeYearValue = $derived(annualSavings * 3 - inputs.implementationCost);

	function formatCurrency(val: number) {
		return '$' + Math.round(val).toLocaleString();
	}
	function formatNumber(val: number) {
		return Math.round(val).toLocaleString();
	}

	function setField<K extends keyof typeof inputs>(field: K, value: (typeof inputs)[K]) {
		inputs = { ...inputs, [field]: value };
	}

	function displayValue(field: keyof typeof inputs): string {
		if (field === 'errorRate' || field === 'autoProcessRate' || field === 'timeReduction' || field === 'errorReduction') {
			return `${inputs[field]}%`;
		}
		if (field === 'hourlyRate' || field === 'errorCost' || field === 'implementationCost' || field === 'monthlyPlatformCost') {
			return '$' + Number(inputs[field]).toLocaleString();
		}
		return Number(inputs[field]).toLocaleString();
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div style="background-color: {briefColors.deepNavy}; border-radius: 12px 12px 0 0; padding: 32px 40px;">
			<div style="display: flex; justify-content: space-between; align-items: center;">
				<div>
					<div
						style="font-size: 11px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;"
					>
						AI Agent
					</div>
					<h1 style="font-size: 28px; font-weight: 700; color: {briefColors.white}; margin: 0;">
						ROI Calculator
					</h1>
				</div>
				<div style="font-size: 13px; font-weight: 600; color: {briefColors.cyan};">AI Flow</div>
			</div>
		</div>

		<div
			style="background-color: {briefColors.white}; border-radius: 0 0 12px 12px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div style="padding: 24px 40px; border-bottom: 1px solid {briefColors.lightSlate}22;">
				<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
					{#each [{ label: 'Annual Savings', value: formatCurrency(annualSavings), color: briefColors.green }, { label: 'Payback Period', value: paybackMonths > 0 ? `${paybackMonths.toFixed(1)} months` : 'N/A', color: briefColors.cyan }, { label: 'Year 1 ROI', value: yearOneROI > 0 ? `${Math.round(yearOneROI)}%` : 'N/A', color: briefColors.purple }, { label: '3-Year Value', value: formatCurrency(threeYearValue), color: briefColors.pink }] as item}
						<div
							style="text-align: center; padding: 16px; background-color: {briefColors.offWhite}; border-radius: 8px;"
						>
							<div style="font-size: 28px; font-weight: 700; color: {item.color};">{item.value}</div>
							<div style="font-size: 11px; color: {briefColors.slate}; margin-top: 4px;">{item.label}</div>
						</div>
					{/each}
				</div>
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
				<div style="padding: 32px 40px; border-right: 1px solid {briefColors.lightSlate}22;">
					<div style="margin-bottom: 32px;">
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Current State
						</div>
						{#each [{ label: 'Monthly transaction volume', field: 'monthlyVolume' as const, max: 5000, step: 50 }, { label: 'Average processing time (minutes)', field: 'avgTimeMinutes' as const, max: 60, step: 1 }, { label: 'Fully-loaded hourly rate ($)', field: 'hourlyRate' as const, min: 20, max: 100, step: 1 }, { label: 'Current error rate (%)', field: 'errorRate' as const, max: 20, step: 1 }, { label: 'Average cost per error ($)', field: 'errorCost' as const, max: 500, step: 10 }] as row}
							<div style="margin-bottom: 16px;">
								<div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
									<label style="font-size: 12px; color: {briefColors.slate};" for={row.field}>{row.label}</label>
									<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
										>{displayValue(row.field)}</span
									>
								</div>
								<input
									id={row.field}
									type="range"
									min={row.min ?? 0}
									max={row.max}
									step={row.step}
									value={inputs[row.field]}
									oninput={(e) =>
										setField(row.field, Number((e.currentTarget as HTMLInputElement).value) as never)}
									style="width: 100%; accent-color: {briefColors.cyan};"
								/>
							</div>
						{/each}
					</div>

					<div style="margin-bottom: 32px;">
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							AI Agent Performance
						</div>
						{#each [{ label: 'Auto-processing rate (%)', field: 'autoProcessRate' as const, max: 95, step: 1 }, { label: 'Time reduction on manual items (%)', field: 'timeReduction' as const, max: 90, step: 1 }, { label: 'Error reduction (%)', field: 'errorReduction' as const, max: 95, step: 1 }] as row}
							<div style="margin-bottom: 16px;">
								<div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
									<label style="font-size: 12px; color: {briefColors.slate};" for={row.field}>{row.label}</label>
									<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
										>{displayValue(row.field)}</span
									>
								</div>
								<input
									id={row.field}
									type="range"
									min={0}
									max={row.max}
									step={row.step}
									value={inputs[row.field]}
									oninput={(e) =>
										setField(row.field, Number((e.currentTarget as HTMLInputElement).value) as never)}
									style="width: 100%; accent-color: {briefColors.cyan};"
								/>
							</div>
						{/each}
					</div>

					<div>
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Investment
						</div>
						{#each [{ label: 'Implementation cost ($)', field: 'implementationCost' as const, min: 20000, max: 200000, step: 5000 }, { label: 'Monthly platform cost ($)', field: 'monthlyPlatformCost' as const, min: 500, max: 10000, step: 100 }] as row}
							<div style="margin-bottom: 16px;">
								<div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
									<label style="font-size: 12px; color: {briefColors.slate};" for={row.field}>{row.label}</label>
									<span style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy};"
										>{displayValue(row.field)}</span
									>
								</div>
								<input
									id={row.field}
									type="range"
									min={row.min}
									max={row.max}
									step={row.step}
									value={inputs[row.field]}
									oninput={(e) =>
										setField(row.field, Number((e.currentTarget as HTMLInputElement).value) as never)}
									style="width: 100%; accent-color: {briefColors.cyan};"
								/>
							</div>
						{/each}
					</div>
				</div>

				<div style="padding: 32px 40px;">
					<div style="margin-bottom: 32px;">
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Monthly Cost Comparison
						</div>
						<div style="display: flex; gap: 16px; margin-bottom: 16px;">
							<div
								style="flex: 1; background-color: {briefColors.pink}15; border-radius: 8px; padding: 16px; text-align: center;"
							>
								<div style="font-size: 10px; color: {briefColors.pink}; margin-bottom: 4px;">CURRENT</div>
								<div style="font-size: 24px; font-weight: 700; color: {briefColors.pink};">
									{formatCurrency(currentMonthlyCost)}
								</div>
								<div style="font-size: 10px; color: {briefColors.slate};">per month</div>
							</div>
							<div
								style="flex: 1; background-color: {briefColors.green}15; border-radius: 8px; padding: 16px; text-align: center;"
							>
								<div style="font-size: 10px; color: {briefColors.green}; margin-bottom: 4px;">WITH AI</div>
								<div style="font-size: 24px; font-weight: 700; color: {briefColors.green};">
									{formatCurrency(newMonthlyCost)}
								</div>
								<div style="font-size: 10px; color: {briefColors.slate};">per month</div>
							</div>
						</div>
						<div
							style="background-color: {briefColors.deepNavy}; border-radius: 8px; padding: 16px; text-align: center;"
						>
							<div style="font-size: 10px; color: {briefColors.cyan}; margin-bottom: 4px;">MONTHLY SAVINGS</div>
							<div style="font-size: 32px; font-weight: 700; color: {briefColors.white};">
								{formatCurrency(monthlySavings)}
							</div>
						</div>
					</div>

					<div style="margin-bottom: 32px;">
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Processing Breakdown
						</div>
						<div style="margin-bottom: 12px;">
							<div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
								<span style="color: {briefColors.slate};">Auto-processed</span>
								<span style="color: {briefColors.green}; font-weight: 600;"
									>{formatNumber(autoProcessed)} ({inputs.autoProcessRate}%)</span
								>
							</div>
							<div
								style="height: 8px; background-color: {briefColors.offWhite}; border-radius: 4px; overflow: hidden;"
							>
								<div
									style="width: {inputs.autoProcessRate}%; height: 100%; background-color: {briefColors.green}; border-radius: 4px;"
								></div>
							</div>
						</div>
						<div>
							<div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
								<span style="color: {briefColors.slate};">Human-assisted</span>
								<span style="color: {briefColors.orange}; font-weight: 600;"
									>{formatNumber(manualProcessed)} ({100 - inputs.autoProcessRate}%)</span
								>
							</div>
							<div
								style="height: 8px; background-color: {briefColors.offWhite}; border-radius: 4px; overflow: hidden;"
							>
								<div
									style="width: {100 - inputs.autoProcessRate}%; height: 100%; background-color: {briefColors.orange}; border-radius: 4px;"
								></div>
							</div>
						</div>
					</div>

					<div>
						<div
							style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Time to Value
						</div>
						<div
							style="position: relative; height: 60px; background-color: {briefColors.offWhite}; border-radius: 8px; overflow: hidden;"
						>
							<div
								style="position: absolute; left: 0; top: 0; bottom: 0; width: {Math.min(
									(paybackMonths / 24) * 100,
									100,
								)}%; background-color: {briefColors.cyan}30;"
							></div>
							<div
								style="position: absolute; left: {Math.min((paybackMonths / 24) * 100, 100)}%; top: 0; bottom: 0; width: 2px; background-color: {briefColors.cyan};"
							></div>
							<div
								style="position: absolute; left: {Math.min((paybackMonths / 24) * 100, 100)}%; top: 50%; transform: translate(-50%, -50%); background-color: {briefColors.cyan}; color: {briefColors.white}; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; white-space: nowrap;"
							>
								Payback: {paybackMonths > 0 ? paybackMonths.toFixed(1) : '—'} months
							</div>
							<div style="position: absolute; bottom: 4px; left: 8px; font-size: 9px; color: {briefColors.lightSlate};">
								0
							</div>
							<div style="position: absolute; bottom: 4px; right: 8px; font-size: 9px; color: {briefColors.lightSlate};">
								24 months
							</div>
						</div>
					</div>

					<div style="margin-top: 24px; font-size: 10px; color: {briefColors.lightSlate}; line-height: 1.5;">
						* This calculator provides estimates based on inputs provided. Actual results may vary. Contact AI Flow
						for a detailed assessment tailored to your specific situation.
					</div>
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 24px; font-size: 12px; color: {briefColors.slate};">
			Ready to see real savings? <span style="color: {briefColors.cyan}; font-weight: 600;">hello@aiflow.example</span>
		</div>
	</div>
</div>
