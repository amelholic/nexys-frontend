<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = c.pageBgDark;
	const cardBg = c.deepNavy;

	type Pitfall = {
		id: number;
		name: string;
		icon: string;
		symptom: string;
		rootCause: string;
		color: string;
		whatHappens: string;
		examples: string[];
		prevention: string[];
		rule: string;
	};

	const pitfalls: Pitfall[] = [
		{
			id: 1,
			name: 'Over-Engineering Early',
			icon: '🏗️',
			symptom: '6-month build for a simple use case',
			rootCause: 'Architecture astronauts',
			color: c.red,
			whatHappens:
				'Teams jump to complex multi-agent architectures when a single agent with good tools would suffice. They build "platforms" when they need "solutions."',
			examples: [
				'Built "multi-agent research system" when single Claude call would work',
				'Created custom framework before having one agent working',
				'Designed for 100 agent types with only 2 use cases',
			],
			prevention: [
				'Start with Pattern 1 (Single Agent + Tools)',
				'Prove value in 4 weeks with pilot',
				'Complexity must be earned, not assumed',
				'Working software > architecture docs',
			],
			rule: "If you can't explain why you need multi-agent in one sentence, you don't need it.",
		},
		{
			id: 2,
			name: 'Ignoring Observability',
			icon: '🔍',
			symptom: '"We don\'t know why it failed"',
			rootCause: 'No logging or tracing',
			color: c.orange,
			whatHappens:
				'The agent works in demo, fails in production, and nobody knows why. Debugging becomes archaeology.',
			examples: [
				'Agent loops 47 times, nobody notices until bill arrives',
				'Prompt change breaks production, no way to compare',
				'Client reports "wrong answer," no trace exists',
			],
			prevention: [
				'Log every LLM call (input, output, tokens, cost)',
				'Trace tool executions with params and results',
				'Capture decision points and reasoning',
				'Dashboards live before go-live',
			],
			rule: "If we can't explain exactly what the agent did and why, we're not ready for production.",
		},
		{
			id: 3,
			name: 'Underestimating Cost',
			icon: '💸',
			symptom: '10x token bills',
			rootCause: 'Agentic loops, no caps',
			color: c.orange,
			whatHappens:
				'Token usage in agentic loops escalates quickly. A $0.50 API call becomes $15 when the agent "thinks" through a problem.',
			examples: [
				'Agent used GPT-4 for classification (Haiku would work)',
				'Reasoning loop ran 200+ times with no limit',
				'No caching, same lookups repeated endlessly',
			],
			prevention: [
				'Cost per transaction tracking',
				'Right-size models (Haiku for simple)',
				'Hard caps on reasoning loops',
				'Aggressive caching',
				'Cost projections in every proposal',
			],
			rule: 'Every proposal includes cost modeling. Every agent has cost caps.',
		},
		{
			id: 4,
			name: 'Neglecting Guardrails',
			icon: '🚧',
			symptom: 'Agent goes rogue',
			rootCause: 'No boundaries or oversight',
			color: c.red,
			whatHappens:
				'Agents without guardrails hallucinate, loop infinitely, expose sensitive data, or take unintended actions.',
			examples: [
				'Agent exposed PII in response (no output filtering)',
				'Agent made 500 API calls in a loop (no rate limiting)',
				'Agent approved $50K payment (no threshold)',
				'Agent answered competitor questions (no topic bounds)',
			],
			prevention: [
				'Explicit tool permissions',
				'Output validation before returning',
				'Action thresholds requiring human approval',
				'Topic boundaries defined',
				'Confidence thresholds for human review',
			],
			rule: 'Every agent has explicit boundaries. "The agent decided" is never an excuse.',
		},
		{
			id: 5,
			name: 'Vendor Lock-In',
			icon: '🔒',
			symptom: "Can't switch models",
			rootCause: 'Hard-coded dependencies',
			color: c.purple,
			whatHappens:
				"Tight coupling to one provider's API makes switching expensive or impossible. You're trapped.",
			examples: [
				'Entire system built on GPT function calling format',
				"Using OpenAI retrieval (can't replicate elsewhere)",
				'Azure OpenAI dependency when client wants to leave',
			],
			prevention: [
				'LLM abstraction layer',
				'Standard tool format across models',
				'Own the orchestration layer',
				'Data portability guaranteed',
				'Multi-model capability built in',
			],
			rule: 'You should be able to switch models in a day, not a quarter.',
		},
		{
			id: 6,
			name: 'Scope Creep',
			icon: '🌊',
			symptom: 'Project never ends',
			rootCause: 'Poor discovery, weak boundaries',
			color: c.pink,
			whatHappens:
				'The project starts as "invoice processing" and becomes "complete AP transformation." Timeline and budget explode.',
			examples: [
				'"Simple chatbot" became "enterprise knowledge management"',
				'Added 4 integrations mid-project',
				'"One more feature" × 20 = different product',
			],
			prevention: [
				'Rigorous discovery upfront',
				'Defined boundaries in writing',
				'Phased delivery with locked scope',
				'Formal change request process',
				'Pilot proves scope before committing',
			],
			rule: 'Scope changes are fine. Scope surprises are not.',
		},
	];

	let activePitfall = $state(0);

	const current = $derived(pitfalls[activePitfall]);
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1100px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 40px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				Risk Management
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">Common Pitfalls Guide</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">
				What goes wrong with AI agents — and how AI Flow prevents it
			</p>
		</div>

		<div style="background-color: {cardBg}; border-radius: 16px; padding: 32px; margin-bottom: 32px; text-align: center;">
			<p style="font-size: 16px; color: {c.white}; margin: 0 0 16px 0; line-height: 1.6;">
				AI agent projects fail. Not always dramatically, but often quietly — through scope creep, cost blowouts,
				unrealistic expectations, and technical missteps.
			</p>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">
				<strong style="color: {c.cyan};">Our goal:</strong> Set you up for success by being honest about what can go wrong.
			</p>
		</div>

		<div style="background-color: {cardBg}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">The Six Fatal Pitfalls</h2>
			<div
				style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px;"
			>
				{#each pitfalls as pitfall, i}
					<button
						type="button"
						onclick={() => (activePitfall = i)}
						style="background-color: {activePitfall === i ? `${pitfall.color}33` : pageBg}; border: {activePitfall === i
							? `2px solid ${pitfall.color}`
							: '2px solid transparent'}; border-radius: 12px; padding: 16px; cursor: pointer; text-align: center; transition: all 0.2s;"
					>
						<div style="font-size: 28px; margin-bottom: 8px;">{pitfall.icon}</div>
						<div
							style="font-size: 11px; font-weight: 600; color: {activePitfall === i ? pitfall.color : c.lightSlate};"
						>
							{pitfall.name}
						</div>
					</button>
				{/each}
			</div>

			<div
				style="background-color: {pageBg}; border-radius: 12px; padding: 24px; border: 1px solid {current.color}66;"
			>
				<div
					style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;"
				>
					<div style="display: flex; align-items: center; gap: 16px;">
						<div style="font-size: 40px;">{current.icon}</div>
						<div>
							<div style="font-size: 20px; font-weight: 600; color: {c.white};">{current.name}</div>
							<div style="font-size: 12px; color: {current.color};">{current.symptom}</div>
						</div>
					</div>
					<div style="padding: 6px 12px; background-color: {`${current.color}33`}; border-radius: 6px;">
						<span style="font-size: 11px; color: {current.color};">Root cause: {current.rootCause}</span>
					</div>
				</div>

				<div style="font-size: 14px; color: {c.lightSlate}; margin-bottom: 20px; line-height: 1.6;">
					{current.whatHappens}
				</div>

				<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 20px;">
					<div>
						<div style="font-size: 12px; color: {c.red}; margin-bottom: 10px; font-weight: 600;">
							❌ Real-World Examples
						</div>
						{#each current.examples as ex}
							<div
								style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 8px; padding-left: 12px; border-left: 2px solid {c.red}66;"
							>
								{ex}
							</div>
						{/each}
					</div>
					<div>
						<div style="font-size: 12px; color: {c.green}; margin-bottom: 10px; font-weight: 600;">
							✓ How AI Flow prevents this
						</div>
						{#each current.prevention as prev}
							<div
								style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 8px; padding-left: 12px; border-left: 2px solid {c.green}66;"
							>
								{prev}
							</div>
						{/each}
					</div>
				</div>

				<div style="padding: 16px; background-color: {`${c.cyan}26`}; border-radius: 8px; border: 1px solid {c.cyan}4d;">
					<span style="font-size: 12px; color: {c.cyan}; font-weight: 600;">Our Rule: </span>
					<span style="font-size: 12px; color: {c.white};">{current.rule}</span>
				</div>
			</div>
		</div>

		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px;">
			<div style="background-color: {cardBg}; border-radius: 16px; padding: 24px;">
				<h3 style="font-size: 16px; font-weight: 600; color: {c.red}; margin: 0 0 16px 0;">🚩 Red Flags in Discovery</h3>
				{#each [{ signal: '"We want to build a platform"', risk: 'Over-engineering', action: 'Start with one use case' }, { signal: '"We\'ll figure out monitoring later"', risk: 'Observability gap', action: 'Require logging in Phase 1' }, { signal: '"Cost isn\'t a concern"', risk: 'Budget blowout', action: 'Cost model anyway' }, { signal: '"The AI should just handle it"', risk: 'Missing guardrails', action: 'Define explicit boundaries' }, { signal: '"And also..." (3+ times)', risk: 'Scope creep', action: 'Firm boundary setting' }] as item}
					<div style="padding: 12px; background-color: {pageBg}; border-radius: 8px; margin-bottom: 8px;">
						<div style="font-size: 12px; color: {c.white}; font-weight: 600; margin-bottom: 4px;">{item.signal}</div>
						<div style="display: flex; justify-content: space-between; font-size: 11px; flex-wrap: wrap; gap: 4px;">
							<span style="color: {c.red};">Risk: {item.risk}</span>
							<span style="color: {c.green};">→ {item.action}</span>
						</div>
					</div>
				{/each}
			</div>
			<div style="background-color: {cardBg}; border-radius: 16px; padding: 24px;">
				<h3 style="font-size: 16px; font-weight: 600; color: {c.green}; margin: 0 0 16px 0;">✅ Green Flags in Discovery</h3>
				{#each [{ signal: '"Let\'s start small and prove it"', indicates: 'Realistic expectations' }, { signal: '"How will we know if it\'s working?"', indicates: 'Measurement mindset' }, { signal: '"What could go wrong?"', indicates: 'Risk awareness' }, { signal: '"Who needs to approve actions?"', indicates: 'Guardrail thinking' }, { signal: '"What\'s the cost per transaction?"', indicates: 'Cost consciousness' }] as item}
					<div style="padding: 12px; background-color: {pageBg}; border-radius: 8px; margin-bottom: 8px;">
						<div style="font-size: 12px; color: {c.white}; font-weight: 600; margin-bottom: 4px;">{item.signal}</div>
						<div style="font-size: 11px; color: {c.green};">✓ Indicates: {item.indicates}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {cardBg}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">AI Flow prevention framework</h2>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px;">
				{#each [{ phase: 'Discovery', color: c.cyan, items: ['Scope boundaries defined', 'Success metrics agreed', 'Risk assessment completed'] }, { phase: 'Architecture', color: c.purple, items: ['Simplest pattern selected', 'Observability designed in', 'Guardrails specified', 'Cost model created'] }, { phase: 'Build', color: c.orange, items: ['Logging from day 1', 'Evaluation suite created', 'Cost tracking enabled', 'Abstraction layers'] }, { phase: 'Deploy', color: c.green, items: ['Monitoring dashboards', 'Alerting configured', 'Runbooks documented', 'Support model agreed'] }, { phase: 'Operate', color: c.pink, items: ['Monthly reviews', 'Accuracy tracking', 'Cost monitoring', 'Continuous improvement'] }] as phase}
					<div style="background-color: {pageBg}; border-radius: 12px; padding: 16px; border-top: 4px solid {phase.color};">
						<div style="font-size: 13px; font-weight: 600; color: {phase.color}; margin-bottom: 12px;">{phase.phase}</div>
						{#each phase.items as line}
							<div style="font-size: 11px; color: {c.lightSlate}; margin-bottom: 6px;">• {line}</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {cardBg}; border-radius: 16px; padding: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Quick Reference: Six Questions to Ask</h2>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
				{#each [{ num: 1, area: 'Architecture', question: 'Is this the simplest approach that works?' }, { num: 2, area: 'Observability', question: 'Can we explain exactly what the agent did?' }, { num: 3, area: 'Cost', question: 'Do we know the cost per transaction?' }, { num: 4, area: 'Guardrails', question: 'What can the agent NOT do?' }, { num: 5, area: 'Portability', question: 'Can we switch models in a week?' }, { num: 6, area: 'Scope', question: 'Is the boundary crystal clear?' }] as item}
					<div style="display: flex; align-items: center; gap: 16px; padding: 16px; background-color: {pageBg}; border-radius: 12px;">
						<div
							style="width: 36px; height: 36px; border-radius: 50%; background-color: {c.cyan}; color: {pageBg}; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; flex-shrink: 0;"
						>
							{item.num}
						</div>
						<div>
							<div style="font-size: 11px; color: {c.cyan}; margin-bottom: 2px;">{item.area}</div>
							<div style="font-size: 13px; color: {c.white};">{item.question}</div>
						</div>
					</div>
				{/each}
			</div>
			<div
				style="margin-top: 24px; padding: 16px; background-color: {`${c.orange}26`}; border-radius: 12px; border: 1px solid {c.orange}4d; text-align: center;"
			>
				<span style="font-size: 14px; color: {c.orange};">
					If any answer is "no" or "I don't know," stop and fix it before proceeding.
				</span>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Common Pitfalls Guide v1.0</div>
		</div>
	</div>
</div>
