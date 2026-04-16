<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = '#0F172A';
	const panel = c.deepNavy;

	let activePattern = $state(0);
	let activeFramework = $state<number | null>(null);

	const patterns = [
		{
			id: 0,
			name: 'Single Agent + Tools',
			subtitle: 'The AI Flow Default',
			usage: '80% of projects',
			when: [
				'Invoice processing',
				'Contract review',
				'Document extraction',
				'Single-process automation',
			],
			pros: ['Easier to debug', 'Lower latency', 'Predictable costs', 'Simpler deployment'],
			complexity: 'L1-L2',
			color: c.cyan,
		},
		{
			id: 1,
			name: 'Router Agent',
			subtitle: 'Specialized by Intent',
			usage: '15% of projects',
			when: ['Multiple distinct use cases', 'Different expertise per type', 'Shared entry point', 'Multi-agent portals'],
			pros: ['Clear separation', 'Independent scaling', 'Easy to extend', 'Fault isolation'],
			complexity: 'L2',
			color: c.purple,
		},
		{
			id: 2,
			name: 'Collaborative Multi-Agent',
			subtitle: 'Agents Working Together',
			usage: '4% of projects',
			when: ['Complex research', 'Multi-perspective analysis', 'Quality requires reviewers', 'Creative tasks'],
			pros: ['Higher quality output', 'Diverse perspectives', 'Iterative refinement', 'Complex reasoning'],
			complexity: 'L3',
			color: c.orange,
		},
		{
			id: 3,
			name: 'Hierarchical Multi-Agent',
			subtitle: 'Delegation Chains',
			usage: '1% of projects',
			when: ['Enterprise orchestration', 'Multi-department workflows', 'Mirrors org structure', 'Very large scale'],
			pros: ['Clear accountability', 'Scales to large systems', 'Matches enterprise patterns'],
			complexity: 'L3',
			color: c.red,
		},
	];

	const frameworks = [
		{
			name: 'Claude Native',
			position: 'Our Default',
			verdict: 'USE',
			color: c.green,
			pros: ['Best reasoning', 'Native tool use', '200K context', 'Reliable JSON'],
			cons: ['Requires custom orchestration', 'No hosted runtime'],
			when: 'Default for all projects',
		},
		{
			name: 'LangChain',
			position: 'Selective Use',
			verdict: 'SOMETIMES',
			color: c.orange,
			pros: ['Rich ecosystem', 'Many integrations', 'Good for prototyping'],
			cons: ['Abstraction overhead', 'Debug complexity', 'Frequent changes'],
			when: 'Complex RAG, rapid prototyping, client request',
		},
		{
			name: 'CrewAI',
			position: 'Emerging',
			verdict: 'EVALUATE',
			color: c.orange,
			pros: ['Intuitive multi-agent', 'Fast prototyping', 'Role-based design'],
			cons: ['Less mature', 'Limited production hardening', 'Smaller ecosystem'],
			when: 'Quick multi-agent PoC',
		},
		{
			name: 'OpenAI Assistants',
			position: 'Limited Use',
			verdict: 'RARELY',
			color: c.red,
			pros: ['Hosted runtime', 'Built-in RAG', 'Easy start'],
			cons: ['Black box', 'Limited customization', 'Vendor lock-in'],
			when: 'Simple assistant, client mandate only',
		},
	];

	const activePatternData = $derived(patterns[activePattern]);
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1100px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 40px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				Technical Philosophy
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.white}; margin: 0 0 8px 0;">Technical Approach Guide</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">How AI Flow builds AI agents — and why</p>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px; text-align: center;">
			<div style="font-size: 24px; font-weight: 700; color: {c.white}; margin-bottom: 16px;">
				"We are pragmatists, not framework evangelists."
			</div>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0 auto; max-width: 700px; line-height: 1.6;">
				We choose the simplest architecture that solves the problem. We don't use LangChain because it's popular.
				We don't avoid it because it's complex. We evaluate every project on its merits and select the approach that
				delivers value fastest with the lowest maintenance burden.
			</p>
			<div
				style="margin-top: 24px; padding: 16px; background-color: {c.cyan}15; border-radius: 8px; display: inline-block;"
			>
				<span style="font-size: 14px; color: {c.cyan}; font-weight: 600;">
					Our default: Claude with native tool use, minimal orchestration, maximum reliability.
				</span>
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Why We Lead with Claude</h2>

			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each [{ factor: 'Reasoning', detail: 'Excels at complex, multi-step reasoning — the core of what agents do', icon: '🧠' }, { factor: 'Tool Use', detail: 'Built-in function calling without heavy framework overhead', icon: '🔧' }, { factor: 'Context', detail: '200K context window handles complex documents without chunking', icon: '📄' }, { factor: 'Instructions', detail: 'Exceptional at following detailed system prompts consistently', icon: '📋' }, { factor: 'Safety', detail: 'Constitutional AI approach aligns with enterprise requirements', icon: '🛡️' }, { factor: 'Output', detail: 'Reliable JSON output for system integration', icon: '📤' }] as item}
					<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
						<div style="font-size: 24px; margin-bottom: 8px;">{item.icon}</div>
						<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 4px;">{item.factor}</div>
						<div style="font-size: 12px; color: {c.lightSlate};">{item.detail}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Architecture Patterns</h2>

			<div style="display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap;">
				{#each patterns as pattern, i}
					<button
						type="button"
						onclick={() => (activePattern = i)}
						style="flex: 1; min-width: 140px; padding: 16px; background-color: {activePattern === i
							? `${pattern.color}20`
							: pageBg}; border: {activePattern === i ? `2px solid ${pattern.color}` : '2px solid transparent'}; border-radius: 12px; cursor: pointer; text-align: center;"
					>
						<div
							style="font-size: 13px; font-weight: 600; color: {activePattern === i ? pattern.color : c.lightSlate};"
						>
							{pattern.name}
						</div>
						<div style="font-size: 10px; color: {c.slate}; margin-top: 4px;">{pattern.usage}</div>
					</button>
				{/each}
			</div>

			<div style="background-color: {pageBg}; border-radius: 12px; padding: 24px; border: 1px solid {activePatternData.color}40;">
				<div
					style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;"
				>
					<div>
						<div style="font-size: 18px; font-weight: 600; color: {c.white};">{activePatternData.name}</div>
						<div style="font-size: 13px; color: {activePatternData.color};">{activePatternData.subtitle}</div>
					</div>
					<div style="display: flex; gap: 8px;">
						<span
							style="font-size: 10px; padding: 4px 10px; background-color: {activePatternData.color}20; color: {activePatternData.color}; border-radius: 6px;"
						>
							{activePatternData.complexity}
						</span>
						<span
							style="font-size: 10px; padding: 4px 10px; background-color: {panel}; color: {c.lightSlate}; border-radius: 6px;"
						>
							{activePatternData.usage}
						</span>
					</div>
				</div>

				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
					<div>
						<div style="font-size: 11px; color: {c.cyan}; margin-bottom: 8px; font-weight: 600;">WHEN TO USE</div>
						{#each activePatternData.when as item}
							<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 6px;">• {item}</div>
						{/each}
					</div>
					<div>
						<div style="font-size: 11px; color: {c.green}; margin-bottom: 8px; font-weight: 600;">ADVANTAGES</div>
						{#each activePatternData.pros as item}
							<div style="font-size: 12px; color: {c.lightSlate}; margin-bottom: 6px;">✓ {item}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Framework Choices</h2>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
				{#each frameworks as fw, i}
					<button
						type="button"
						onclick={() => (activeFramework = activeFramework === i ? null : i)}
						style="background-color: {pageBg}; border-radius: 12px; padding: 20px; cursor: pointer; border: {activeFramework === i
							? `2px solid ${fw.color}`
							: '2px solid transparent'}; text-align: left;"
					>
						<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
							<div style="font-size: 14px; font-weight: 600; color: {c.white};">{fw.name}</div>
							<span
								style="font-size: 9px; padding: 2px 6px; background-color: {fw.color}20; color: {fw.color}; border-radius: 4px;"
							>
								{fw.verdict}
							</span>
						</div>
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 12px;">{fw.position}</div>

						{#if activeFramework === i}
							<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid {panel};">
								<div style="font-size: 10px; color: {c.green}; margin-bottom: 4px;">PROS</div>
								{#each fw.pros as pro}
									<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 2px;">+ {pro}</div>
								{/each}
								<div style="font-size: 10px; color: {c.red}; margin-top: 8px; margin-bottom: 4px;">CONS</div>
								{#each fw.cons as x}
									<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 2px;">- {x}</div>
								{/each}
								<div style="font-size: 10px; color: {c.cyan}; margin-top: 8px;">Use when: {fw.when}</div>
							</div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Complexity Assessment</h2>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
				<div>
					<div style="font-size: 12px; color: {c.cyan}; margin-bottom: 12px; font-weight: 600;">USE CASE COMPLEXITY</div>
					{#each [{ level: 'L1', name: 'Simple', desc: 'Single task, few tools, stateless', examples: 'FAQ bot, summarizer', color: c.green }, { level: 'L2', name: 'Moderate', desc: 'Multi-step, multiple tools, some state', examples: 'Invoice processing, contract review', color: c.orange }, { level: 'L3', name: 'Complex', desc: 'Multi-agent, long-running, dynamic', examples: 'Supply chain, autonomous research', color: c.red }] as item}
						<div
							style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; padding: 12px; background-color: {pageBg}; border-radius: 8px;"
						>
							<div
								style="padding: 4px 10px; background-color: {item.color}20; color: {item.color}; border-radius: 6px; font-size: 12px; font-weight: 700;"
							>
								{item.level}
							</div>
							<div>
								<div style="font-size: 13px; color: {c.white}; font-weight: 600;">{item.name}</div>
								<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
								<div style="font-size: 10px; color: {c.lightSlate}; margin-top: 4px;">e.g., {item.examples}</div>
							</div>
						</div>
					{/each}
				</div>

				<div>
					<div style="font-size: 12px; color: {c.purple}; margin-bottom: 12px; font-weight: 600;">CLIENT READINESS</div>
					{#each [{ level: 'R1', name: 'Early', desc: 'Small team, limited infra, learning', approach: 'Start simple, prove value' }, { level: 'R2', name: 'Growing', desc: 'Mid-size team, some infra, production needs', approach: 'Balance speed with robustness' }, { level: 'R3', name: 'Mature', desc: 'Large team, robust infra, enterprise requirements', approach: 'Full engineering rigor' }] as item}
						<div
							style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; padding: 12px; background-color: {pageBg}; border-radius: 8px;"
						>
							<div
								style="padding: 4px 10px; background-color: {c.purple}20; color: {c.purple}; border-radius: 6px; font-size: 12px; font-weight: 700;"
							>
								{item.level}
							</div>
							<div>
								<div style="font-size: 13px; color: {c.white}; font-weight: 600;">{item.name}</div>
								<div style="font-size: 11px; color: {c.slate};">{item.desc}</div>
								<div style="font-size: 10px; color: {c.purple}; margin-top: 4px;">→ {item.approach}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
				<div style="font-size: 12px; color: {c.white}; margin-bottom: 12px; font-weight: 600;">RECOMMENDATION MATRIX</div>
				<div style="display: grid; grid-template-columns: 80px 1fr 1fr 1fr; gap: 8px;">
					<div></div>
					<div style="text-align: center; font-size: 11px; color: {c.purple}; padding: 8px;">R1 (Early)</div>
					<div style="text-align: center; font-size: 11px; color: {c.purple}; padding: 8px;">R2 (Growing)</div>
					<div style="text-align: center; font-size: 11px; color: {c.purple}; padding: 8px;">R3 (Mature)</div>

					<div style="font-size: 11px; color: {c.green}; padding: 8px;">L1 Simple</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Native API
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Native API
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Native API
					</div>

					<div style="font-size: 11px; color: {c.orange}; padding: 8px;">L2 Moderate</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Native + Light
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Custom
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Custom
					</div>

					<div style="font-size: 11px; color: {c.red}; padding: 8px;">L3 Complex</div>
					<div
						style="text-align: center; font-size: 10px; color: {c.red}; padding: 8px; background-color: {c.red}15; border-radius: 6px;"
					>
						⚠️ Reconsider
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						LangGraph
					</div>
					<div style="text-align: center; font-size: 10px; color: {c.lightSlate}; padding: 8px; background-color: {panel}; border-radius: 6px;">
						Enterprise
					</div>
				</div>
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Cost Considerations</h2>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.orange}; margin-bottom: 16px;">The Agentic Loop Tax</div>
					<div style="margin-bottom: 16px;">
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Traditional API Call</div>
						<div
							style="font-size: 12px; color: {c.lightSlate}; font-family: monospace; background-color: {panel}; padding: 8px; border-radius: 6px;"
						>
							1 request → 1 LLM call → 1 response<br />
							<span style="color: {c.green};">Cost: $X</span>
						</div>
					</div>
					<div>
						<div style="font-size: 11px; color: {c.slate}; margin-bottom: 4px;">Agentic Loop</div>
						<div
							style="font-size: 12px; color: {c.lightSlate}; font-family: monospace; background-color: {panel}; padding: 8px; border-radius: 6px;"
						>
							1 request → Plan → Tool 1 → Tool 2 →<br />
							Reflect → Adjust → Tool 3 → Response<br />
							<span style="color: {c.red};">Cost: $X × 5-10</span>
						</div>
					</div>
				</div>

				<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
					<div style="font-size: 14px; font-weight: 600; color: {c.cyan}; margin-bottom: 16px;">Cost Multipliers by Pattern</div>
					{#each [{ pattern: 'Single Agent + Tools', mult: '1-3x', color: c.green }, { pattern: 'Router Agent', mult: '1.5-2x', color: c.green }, { pattern: 'Collaborative Multi', mult: '3-10x', color: c.orange }, { pattern: 'Hierarchical', mult: '5-20x', color: c.red }] as item, i}
						<div
							style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: {i < 3
								? `1px solid ${panel}`
								: 'none'};"
						>
							<span style="font-size: 12px; color: {c.lightSlate};">{item.pattern}</span>
							<span style="font-size: 12px; font-weight: 600; color: {item.color};">{item.mult}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div style="background-color: {panel}; border-radius: 16px; padding: 32px;">
			<h2 style="font-size: 20px; font-weight: 600; color: {c.white}; margin: 0 0 24px 0;">Our Build Principles</h2>

			<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
				{#each [{ num: 1, title: 'Start Simple, Evolve', desc: 'Begin with Pattern 1. Add complexity only when proven necessary.' }, { num: 2, title: 'Own the Core', desc: 'We build and control the orchestration layer. Frameworks for utilities only.' }, { num: 3, title: 'Observability First', desc: 'Every decision, tool call, and output is logged and traceable.' }, { num: 4, title: 'Fail Gracefully', desc: 'Agents handle errors, have fallbacks, and know when to escalate.' }, { num: 5, title: 'Human in the Loop', desc: 'Design for human oversight. Automation is earned, not assumed.' }, { num: 6, title: 'Model Portability', desc: 'Abstract the LLM layer. Switching models should be configuration.' }] as item}
					<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
						<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
							<div
								style="width: 28px; height: 28px; border-radius: 50%; background-color: {c.cyan}; color: {pageBg}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700;"
							>
								{item.num}
							</div>
							<div style="font-size: 14px; font-weight: 600; color: {c.white};">{item.title}</div>
						</div>
						<div style="font-size: 12px; color: {c.lightSlate};">{item.desc}</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Technical Approach Guide v1.0</div>
		</div>
	</div>
</div>
