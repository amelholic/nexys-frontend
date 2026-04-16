<script lang="ts">
	import WorkshopSlideFrame from '$lib/brief/WorkshopSlideFrame.svelte';
	import { briefColors as c } from '$lib/brief/briefColors';

	const goals = [
		{ icon: '🗺️', title: 'Process Map', desc: 'Every step documented' },
		{ icon: '📊', title: 'Volume Data', desc: 'How many, how long' },
		{ icon: '📋', title: 'Decision Rules', desc: 'All rules explicit' },
		{ icon: '⚠️', title: 'Exceptions', desc: 'Edge cases catalogued' },
		{ icon: '🔄', title: 'Data Flows', desc: 'Systems mapped' },
		{ icon: '🤖', title: 'Agent Spec', desc: 'Draft design ready' },
	];

	const captureItems = [
		'What happens (action)',
		'Who does it (role)',
		'Where (system)',
		'How long',
		'What can go wrong',
	];

	const decisionQuestions = [
		'What question is being answered?',
		'What are the possible outcomes?',
		'What information do you need?',
		'What are the exact rules?',
	];

	const decisionExample = `IF amount < $1,000
  AND vendor approved
  AND PO exists
THEN auto-approve
ELSE route to manager`;

	const exceptionTypes = [
		{ type: 'Data', desc: 'Missing info, wrong format', color: c.cyan },
		{ type: 'Rule', desc: 'Does not fit, needs judgment', color: c.purple },
		{ type: 'System', desc: 'Down, cannot access', color: c.pink },
		{ type: 'Timing', desc: 'Urgent, late, deadline', color: c.orange },
		{ type: 'Stakeholder', desc: 'Special request, VIP', color: c.green },
	];

	const inputQs = ['What documents/data?', 'What format?', 'What fields extracted?', 'Source system?'];
	const processQs = ['Which systems used?', 'Manual or automated?', 'Integration points?', 'Data transformations?'];
	const outputQs = ['What is created?', 'Which system(s)?', 'What format?', 'Who receives?'];

	const futureOptions = [
		{ q: 'Full automation?', desc: 'No human touch for standard cases' },
		{ q: 'Assisted automation?', desc: 'AI prepares, human approves' },
		{ q: 'Triage only?', desc: 'AI routes and prioritises' },
	];

	const agentSpecItems = [
		'What the agent receives',
		'Decisions it makes',
		'Rules it follows',
		'What it produces',
		'When humans are involved',
		'Success metrics',
	];
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color="#E2E8F0"
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<WorkshopSlideFrame dark>
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:padding="50px 60px"
		>
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="16px"
			>
				Workshop
			</div>
			<h1 style:font-size="44px" style:font-weight="700" style:color={c.white} style:margin="0 0 16px 0" style:line-height="1.1">
				Process Mapping<br />for AI
			</h1>
			<p style:font-size="16px" style:color={c.lightSlate} style:max-width="500px">
				Deep-dive documentation to prepare for automation
			</p>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Our Goal
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				By the end of today
			</h2>
			<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="12px">
				{#each goals as item}
					<div
						style:display="flex"
						style:align-items="center"
						style:gap="10px"
						style:padding="12px"
						style:background-color={c.offWhite}
						style:border-radius="8px"
					>
						<div style:font-size="24px">{item.icon}</div>
						<div>
							<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy}>{item.title}</div>
							<div style:font-size="10px" style:color={c.slate}>{item.desc}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Session 1
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Current State Mapping
			</h2>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="12px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">
						For each step, capture:
					</div>
					{#each captureItems as item}
						<div style:display="flex" style:gap="8px" style:margin-bottom="6px" style:font-size="11px" style:color={c.deepNavy}>
							<span style:color={c.cyan}>→</span><span>{item}</span>
						</div>
					{/each}
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="10px">
						Key questions:
					</div>
					<div style:font-size="11px" style:color={c.slate} style:line-height="1.8">
						"What triggers this?"<br />
						"Then what happens?"<br />
						"Who does that?"<br />
						"How do you know when done?"
					</div>
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame dark>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.pink}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Critical Session
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.white} style:margin="0 0 20px 0">
				Decision Rules Deep-Dive
			</h2>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div>
					<div style:font-size="12px" style:color={c.lightSlate} style:margin-bottom="12px">
						For each decision point:
					</div>
					{#each decisionQuestions as item, i}
						<div style:display="flex" style:gap="8px" style:margin-bottom="8px" style:font-size="12px" style:color={c.white}>
							<span style:color={c.pink}>{i + 1}.</span><span>{item}</span>
						</div>
					{/each}
				</div>
				<div style:background-color="rgba(255,255,255,0.05)" style:border-radius="8px" style:padding="16px">
					<div style:font-size="11px" style:color={c.pink} style:margin-bottom="8px">Example format:</div>
					<div style:font-family="monospace" style:font-size="10px" style:color={c.lightSlate} style:line-height="1.6">
						{decisionExample}
					</div>
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.orange}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Session 4
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Exception Catalogue
			</h2>
			<div style:display="grid" style:grid-template-columns="repeat(5, 1fr)" style:gap="10px" style:margin-bottom="20px">
				{#each exceptionTypes as item}
					<div
						style:background-color={c.offWhite}
						style:border-radius="6px"
						style:padding="12px"
						style:border-top="3px solid {item.color}"
						style:text-align="center"
					>
						<div style:font-size="11px" style:font-weight="600" style:color={item.color}>{item.type}</div>
						<div style:font-size="9px" style:color={c.slate} style:margin-top="4px">{item.desc}</div>
					</div>
				{/each}
			</div>
			<div style:background-color={c.deepNavy} style:border-radius="8px" style:padding="16px">
				<div style:font-size="11px" style:color={c.lightSlate} style:margin-bottom="8px">
					For each exception, classify:
				</div>
				<div style:display="flex" style:justify-content="space-around" style:font-size="11px">
					<span style:color={c.green}>✓ Automate</span>
					<span style:color={c.cyan}>? Assist</span>
					<span style:color={c.orange}>↑ Escalate</span>
					<span style:color={c.pink}>✗ Prevent</span>
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Session 5
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Data & Systems Mapping
			</h2>
			<div style:display="grid" style:grid-template-columns="repeat(3, 1fr)" style:gap="16px">
				<div
					style:background-color="{c.cyan}10"
					style:border-radius="8px"
					style:padding="16px"
					style:border-left="4px solid {c.cyan}"
				>
					<div style:font-size="12px" style:font-weight="600" style:color={c.cyan} style:margin-bottom="10px">Inputs</div>
					{#each inputQs as q}
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="4px">• {q}</div>
					{/each}
				</div>
				<div
					style:background-color="{c.purple}10"
					style:border-radius="8px"
					style:padding="16px"
					style:border-left="4px solid {c.purple}"
				>
					<div style:font-size="12px" style:font-weight="600" style:color={c.purple} style:margin-bottom="10px">
						Processing
					</div>
					{#each processQs as q}
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="4px">• {q}</div>
					{/each}
				</div>
				<div
					style:background-color="{c.pink}10"
					style:border-radius="8px"
					style:padding="16px"
					style:border-left="4px solid {c.pink}"
				>
					<div style:font-size="12px" style:font-weight="600" style:color={c.pink} style:margin-bottom="10px">Outputs</div>
					{#each outputQs as q}
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="4px">• {q}</div>
					{/each}
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame>
		<div style:flex="1" style:padding="40px 60px">
			<div
				style:font-size="11px"
				style:color={c.green}
				style:text-transform="uppercase"
				style:letter-spacing="2px"
				style:margin-bottom="10px"
			>
				Session 6
			</div>
			<h2 style:font-size="28px" style:font-weight="700" style:color={c.deepNavy} style:margin="0 0 20px 0">
				Future State & Agent Spec
			</h2>
			<div style:display="grid" style:grid-template-columns="1fr 1fr" style:gap="20px">
				<div>
					<div style:font-size="12px" style:font-weight="600" style:color={c.deepNavy} style:margin-bottom="12px">
						Define the target:
					</div>
					{#each futureOptions as item}
						<div
							style:display="flex"
							style:gap="10px"
							style:margin-bottom="10px"
							style:padding="10px"
							style:background-color={c.offWhite}
							style:border-radius="6px"
						>
							<div
								style:width="20px"
								style:height="20px"
								style:border="2px solid {c.green}"
								style:border-radius="4px"
								style:flex-shrink="0"
							></div>
							<div>
								<div style:font-size="11px" style:font-weight="600" style:color={c.deepNavy}>{item.q}</div>
								<div style:font-size="10px" style:color={c.slate}>{item.desc}</div>
							</div>
						</div>
					{/each}
				</div>
				<div style:background-color={c.offWhite} style:border-radius="8px" style:padding="16px">
					<div style:font-size="12px" style:font-weight="600" style:color={c.green} style:margin-bottom="10px">
						Agent Spec captures:
					</div>
					{#each agentSpecItems as item}
						<div style:font-size="10px" style:color={c.slate} style:margin-bottom="4px">• {item}</div>
					{/each}
				</div>
			</div>
		</div>
	</WorkshopSlideFrame>

	<WorkshopSlideFrame dark>
		<div
			style:flex="1"
			style:display="flex"
			style:flex-direction="column"
			style:justify-content="center"
			style:align-items="center"
			style:padding="50px 60px"
			style:text-align="center"
		>
			<h2 style:font-size="38px" style:font-weight="700" style:color={c.white} style:margin="0 0 16px 0">Let's get started</h2>
			<p style:font-size="16px" style:color={c.lightSlate} style:margin-bottom="32px">
				Your expertise is what makes this work
			</p>
			<div style:display="flex" style:gap="24px" style:font-size="12px">
				<div style:color={c.lightSlate}>[contact email]</div>
				<div style:color={c.cyan}>[website]</div>
			</div>
		</div>
	</WorkshopSlideFrame>
</div>
