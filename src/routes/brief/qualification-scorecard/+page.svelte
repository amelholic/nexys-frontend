<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	type Scores = {
		pain: number;
		authority: number;
		budget: number;
		timeline: number;
		fit: number;
		champion: number;
		competition: number;
		access: number;
	};

	type Criterion = {
		id: keyof Scores;
		name: string;
		weight: number;
		description: string;
		options: { score: number; label: string }[];
	};

	function initialScores(): Scores {
		return {
			pain: 0,
			authority: 0,
			budget: 0,
			timeline: 0,
			fit: 0,
			champion: 0,
			competition: 0,
			access: 0,
		};
	}

	let scores = $state<Scores>(initialScores());

	const criteria: Criterion[] = [
		{
			id: 'pain',
			name: 'Pain / Problem',
			weight: 20,
			description: 'Is there a clear, quantified business problem?',
			options: [
				{ score: 0, label: 'No clear pain identified' },
				{ score: 5, label: 'Vague pain, not quantified' },
				{ score: 10, label: 'Clear pain, some quantification' },
				{ score: 15, label: 'Quantified pain with business impact' },
				{ score: 20, label: 'Urgent, quantified pain with exec visibility' },
			],
		},
		{
			id: 'authority',
			name: 'Decision Authority',
			weight: 15,
			description: 'Are we engaged with the decision maker?',
			options: [
				{ score: 0, label: 'No access to decision maker' },
				{ score: 5, label: 'Know who decides, no access' },
				{ score: 10, label: 'Met decision maker once' },
				{ score: 15, label: 'Regular access to decision maker' },
			],
		},
		{
			id: 'budget',
			name: 'Budget',
			weight: 20,
			description: 'Is there allocated or allocatable budget?',
			options: [
				{ score: 0, label: 'No budget, no path to budget' },
				{ score: 5, label: 'No budget, but could find it' },
				{ score: 10, label: 'Budget exists, needs approval' },
				{ score: 15, label: 'Budget allocated for this initiative' },
				{ score: 20, label: 'Budget approved, ready to spend' },
			],
		},
		{
			id: 'timeline',
			name: 'Timeline / Urgency',
			weight: 15,
			description: 'Is there a compelling event or deadline?',
			options: [
				{ score: 0, label: 'No timeline, "exploring"' },
				{ score: 5, label: 'Vague timeline, "this year"' },
				{ score: 10, label: 'Defined timeline, 6+ months' },
				{ score: 15, label: 'Clear timeline, 3-6 months, some urgency' },
			],
		},
		{
			id: 'fit',
			name: 'Technical / Process Fit',
			weight: 15,
			description: 'Is this a good fit for our solution?',
			options: [
				{ score: 0, label: 'Poor fit, outside our capability' },
				{ score: 5, label: 'Marginal fit, significant customisation' },
				{ score: 10, label: 'Good fit, some customisation needed' },
				{ score: 15, label: 'Excellent fit, proven use case' },
			],
		},
		{
			id: 'champion',
			name: 'Champion',
			weight: 5,
			description: 'Do we have an internal advocate?',
			options: [
				{ score: 0, label: 'No champion identified' },
				{ score: 2, label: 'Potential champion, not engaged' },
				{ score: 5, label: 'Active champion pushing internally' },
			],
		},
		{
			id: 'competition',
			name: 'Competitive Position',
			weight: 5,
			description: 'What is our competitive position?',
			options: [
				{ score: 0, label: "Incumbent competitor, we're unknown" },
				{ score: 2, label: 'Competing against alternatives' },
				{ score: 5, label: 'Preferred or only option' },
			],
		},
		{
			id: 'access',
			name: 'Access / Engagement',
			weight: 5,
			description: 'Can we access systems and stakeholders?',
			options: [
				{ score: 0, label: 'No access, blocked by IT/procurement' },
				{ score: 2, label: 'Limited access, working on it' },
				{ score: 5, label: 'Full access, responsive stakeholders' },
			],
		},
	];

	const maxScore = 100;

	const totalScore = $derived(Object.values(scores).reduce((a, b) => a + b, 0));

	const percentage = $derived(Math.round((totalScore / maxScore) * 100));

	function getScoreColor(score: number): string {
		if (score >= 70) return briefColors.green;
		if (score >= 50) return briefColors.orange;
		return briefColors.red;
	}

	function getRecommendation(score: number): { text: string; color: string; desc: string } {
		if (score >= 70) {
			return {
				text: 'PURSUE',
				color: briefColors.green,
				desc: 'Strong opportunity. Proceed with discovery and proposal.',
			};
		}
		if (score >= 50) {
			return {
				text: 'QUALIFY FURTHER',
				color: briefColors.orange,
				desc: 'Potential opportunity. Address gaps before investing heavily.',
			};
		}
		return {
			text: 'PASS / NURTURE',
			color: briefColors.red,
			desc: 'Not ready. Nurture or pass. Focus elsewhere.',
		};
	}

	const recommendation = $derived(getRecommendation(totalScore));

	function selectScore(id: keyof Scores, value: number) {
		scores = { ...scores, [id]: value };
	}

	function resetScorecard() {
		scores = initialScores();
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #0F172A; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 40px;">
			<div
				style="font-size: 11px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				Sales Qualification
			</div>
			<h1 style="font-size: 32px; font-weight: 700; color: {briefColors.white}; margin: 0 0 8px 0;">
				Opportunity Scorecard
			</h1>
			<p style="font-size: 14px; color: {briefColors.lightSlate}; margin: 0;">
				Score each criterion to determine pursuit recommendation
			</p>
		</div>

		<div
			style="background-color: {briefColors.deepNavy}; border-radius: 16px; padding: 24px; margin-bottom: 32px;"
		>
			<div style="display: flex; justify-content: space-between; align-items: center;">
				<div>
					<div style="font-size: 12px; color: {briefColors.lightSlate}; margin-bottom: 4px;">
						Total Score
					</div>
					<div style="display: flex; align-items: baseline; gap: 8px;">
						<span style="font-size: 48px; font-weight: 700; color: {getScoreColor(totalScore)};"
							>{totalScore}</span
						>
						<span style="font-size: 20px; color: {briefColors.slate};">/ {maxScore}</span>
					</div>
				</div>
				<div style="text-align: center;">
					<div
						style="width: 120px; height: 120px; border-radius: 50%; border: 8px solid {getScoreColor(
							totalScore,
						)}; display: flex; flex-direction: column; align-items: center; justify-content: center;"
					>
						<div style="font-size: 28px; font-weight: 700; color: {briefColors.white};">
							{percentage}%
						</div>
					</div>
				</div>
				<div style="text-align: right;">
					<div
						style="padding: 12px 24px; background-color: {recommendation.color}20; border: 2px solid {recommendation.color}; border-radius: 8px; margin-bottom: 8px;"
					>
						<div style="font-size: 18px; font-weight: 700; color: {recommendation.color};">
							{recommendation.text}
						</div>
					</div>
					<div style="font-size: 12px; color: {briefColors.lightSlate}; max-width: 200px;">
						{recommendation.desc}
					</div>
				</div>
			</div>
		</div>

		<div style="display: flex; flex-direction: column; gap: 16px;">
			{#each criteria as criterion (criterion.id)}
				<div
					style="background-color: {briefColors.deepNavy}; border-radius: 12px; padding: 20px;"
				>
					<div
						style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;"
					>
						<div>
							<div style="display: flex; align-items: center; gap: 12px;">
								<h3 style="font-size: 16px; font-weight: 600; color: {briefColors.white}; margin: 0;">
									{criterion.name}
								</h3>
								<span
									style="font-size: 10px; padding: 2px 8px; background-color: #0F172A; color: {briefColors.cyan}; border-radius: 4px;"
								>
									Max: {criterion.weight} pts
								</span>
							</div>
							<p style="font-size: 12px; color: {briefColors.slate}; margin: 4px 0 0 0;">
								{criterion.description}
							</p>
						</div>
						<div
							style="font-size: 24px; font-weight: 700; color: {scores[criterion.id] > 0
								? briefColors.cyan
								: briefColors.slate}; min-width: 50px; text-align: right;"
						>
							{scores[criterion.id]}
						</div>
					</div>

					<div style="display: flex; flex-wrap: wrap; gap: 8px;">
						{#each criterion.options as option (option.label)}
							<button
								type="button"
								onclick={() => selectScore(criterion.id, option.score)}
								style="padding: 10px 16px; background-color: {scores[criterion.id] === option.score
									? `${briefColors.cyan}20`
									: '#0F172A'}; border: {scores[criterion.id] === option.score
									? `2px solid ${briefColors.cyan}`
									: '2px solid transparent'}; border-radius: 8px; cursor: pointer; flex: 1; min-width: 150px; text-align: left; font: inherit;"
							>
								<div style="display: flex; justify-content: space-between; align-items: center;">
									<span
										style="font-size: 12px; color: {scores[criterion.id] === option.score
											? briefColors.white
											: briefColors.lightSlate};"
									>
										{option.label}
									</span>
									<span
										style="font-size: 11px; font-weight: 600; color: {scores[criterion.id] ===
										option.score
											? briefColors.cyan
											: briefColors.slate};"
									>
										+{option.score}
									</span>
								</div>
							</button>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div
			style="background-color: {briefColors.deepNavy}; border-radius: 16px; padding: 24px; margin-top: 32px;"
		>
			<h3 style="font-size: 16px; font-weight: 600; color: {briefColors.white}; margin: 0 0 16px 0;">
				Score Breakdown
			</h3>
			<div style="display: flex; flex-direction: column; gap: 8px;">
				{#each criteria as criterion (criterion.id)}
					<div style="display: flex; align-items: center; gap: 12px;">
						<div style="width: 150px; font-size: 12px; color: {briefColors.lightSlate};">
							{criterion.name}
						</div>
						<div
							style="flex: 1; height: 8px; background-color: #0F172A; border-radius: 4px; overflow: hidden;"
						>
							<div
								style="width: {(scores[criterion.id] / criterion.weight) * 100}%; height: 100%; background-color: {scores[
									criterion.id
								] === criterion.weight
									? briefColors.green
									: scores[criterion.id] > 0
										? briefColors.cyan
										: briefColors.slate}; border-radius: 4px; transition: width 0.3s;"
							></div>
						</div>
						<div
							style="width: 50px; font-size: 12px; color: {briefColors.lightSlate}; text-align: right;"
						>
							{scores[criterion.id]} / {criterion.weight}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div
			style="background-color: {briefColors.deepNavy}; border-radius: 16px; padding: 24px; margin-top: 24px;"
		>
			<h3 style="font-size: 16px; font-weight: 600; color: {briefColors.white}; margin: 0 0 16px 0;">
				Scoring Thresholds
			</h3>
			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				<div
					style="background-color: {briefColors.green}15; border-radius: 8px; padding: 16px; border: 1px solid {briefColors.green}30;"
				>
					<div style="font-size: 20px; font-weight: 700; color: {briefColors.green};">70-100</div>
					<div
						style="font-size: 13px; font-weight: 600; color: {briefColors.green}; margin-bottom: 4px;"
					>
						PURSUE
					</div>
					<div style="font-size: 11px; color: {briefColors.lightSlate};">
						Strong opportunity. Invest in discovery and proposal.
					</div>
				</div>
				<div
					style="background-color: {briefColors.orange}15; border-radius: 8px; padding: 16px; border: 1px solid {briefColors.orange}30;"
				>
					<div style="font-size: 20px; font-weight: 700; color: {briefColors.orange};">50-69</div>
					<div
						style="font-size: 13px; font-weight: 600; color: {briefColors.orange}; margin-bottom: 4px;"
					>
						QUALIFY FURTHER
					</div>
					<div style="font-size: 11px; color: {briefColors.lightSlate};">
						Gaps to address. Qualify before heavy investment.
					</div>
				</div>
				<div
					style="background-color: {briefColors.red}10; border-radius: 8px; padding: 16px; border: 1px solid {briefColors.red}20;"
				>
					<div style="font-size: 20px; font-weight: 700; color: {briefColors.red};">0-49</div>
					<div
						style="font-size: 13px; font-weight: 600; color: {briefColors.red}; margin-bottom: 4px;"
					>
						PASS / NURTURE
					</div>
					<div style="font-size: 11px; color: {briefColors.lightSlate};">
						Not ready. Nurture for future or pass.
					</div>
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 24px;">
			<button
				type="button"
				onclick={resetScorecard}
				style="padding: 12px 24px; background-color: #0F172A; border: 1px solid {briefColors.slate}; border-radius: 8px; color: {briefColors.lightSlate}; font-size: 13px; cursor: pointer; font: inherit;"
			>
				Reset Scorecard
			</button>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {briefColors.slate};">
			<div style="color: {briefColors.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Qualification Scorecard v1.0</div>
		</div>
	</div>
</div>
