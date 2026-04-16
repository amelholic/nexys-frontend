<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = c.pageBgDark;

	type Role = {
		id: number;
		title: string;
		abbrev: string;
		color: string;
		icon: string;
		purpose: string;
		salary: string;
		contractRate: string;
		ote?: string;
		skills: { name: string; level: number }[];
		backgrounds: string[];
		outputs: string[];
		interviewQs: string[];
		redFlags: string[];
	};

	const roles: Role[] = [
		{
			id: 1,
			title: 'Delivery Lead',
			abbrev: 'DL',
			color: c.orange,
			icon: '🎯',
			purpose: 'Owns client relationships and project outcomes',
			salary: '$100-200K',
			contractRate: '$800-1,200/day',
			skills: [
				{ name: 'Project Management', level: 5 },
				{ name: 'Client Communication', level: 5 },
				{ name: 'Business Analysis', level: 4 },
				{ name: 'Technical Understanding', level: 3 },
				{ name: 'Workshop Facilitation', level: 4 },
				{ name: 'Documentation', level: 4 },
			],
			backgrounds: [
				'Management Consulting',
				'Technical PM',
				'Business Analysis',
				'Solution Consulting',
				'RPA Delivery',
			],
			outputs: ['Proposals', 'Discovery Notes', 'Status Reports', 'Handover Packs', 'Training Guides'],
			interviewQs: [
				'Walk me through translating vague requirements into a delivery plan',
				'How do you handle scope creep?',
				'Tell me about a project that failed',
			],
			redFlags: ["Can't explain tech simply", 'Blames others', 'Over-promises', 'No ambiguity tolerance'],
		},
		{
			id: 2,
			title: 'AI Engineer',
			abbrev: 'AI',
			color: c.cyan,
			icon: '🤖',
			purpose: 'Designs prompts, agent logic, evaluation, and optimization',
			salary: '$90-220K',
			contractRate: '$800-1,400/day',
			skills: [
				{ name: 'Prompt Engineering', level: 5 },
				{ name: 'Python', level: 4 },
				{ name: 'LLM APIs', level: 5 },
				{ name: 'Evaluation & Testing', level: 4 },
				{ name: 'Data Analysis', level: 4 },
				{ name: 'Problem Decomposition', level: 5 },
			],
			backgrounds: [
				'Software Engineers (LLM focus)',
				'Data Scientists',
				'NLP Researchers',
				'Self-taught AI builders',
				'Backend from AI companies',
			],
			outputs: ['Prompt Cards', 'Working Agents', 'Evaluation Suites', 'Tool Specifications', 'Test Results'],
			interviewQs: [
				'Design a prompt to extract invoice line items',
				'How would you evaluate an AI agent?',
				"Show me something you've built with LLMs",
			],
			redFlags: [
				'No hands-on LLM experience',
				'Dismisses evaluation',
				"Can't code beyond notebooks",
				'Thinks AI is magic',
			],
		},
		{
			id: 3,
			title: 'Integration Developer',
			abbrev: 'ID',
			color: c.purple,
			icon: '🔌',
			purpose: 'Connects AI agents to client systems — APIs, databases, workflows',
			salary: '$80-190K',
			contractRate: '$700-1,200/day',
			skills: [
				{ name: 'Python', level: 5 },
				{ name: 'REST APIs', level: 5 },
				{ name: 'Cloud (Azure/AWS)', level: 4 },
				{ name: 'SQL', level: 4 },
				{ name: 'Git & CI/CD', level: 4 },
				{ name: 'Debugging', level: 5 },
			],
			backgrounds: [
				'Backend Developers (B2B SaaS)',
				'Integration Specialists',
				'DevOps Engineers',
				'Full-stack (backend focus)',
				'ERP/CRM implementers',
			],
			outputs: ['Integrations', 'APIs', 'Exception Queue UI', 'Dashboards', 'Runbooks', 'Production Deployments'],
			interviewQs: [
				'How would you integrate with an unfamiliar system?',
				'How do you handle API rate limits and failures?',
				'Describe a tricky integration problem you solved',
			],
			redFlags: ['Front-end only', 'No production experience', 'Poor error handling', 'No autonomy'],
		},
		{
			id: 4,
			title: 'Solutions Architect',
			abbrev: 'SA',
			color: c.slate,
			icon: '🏗️',
			purpose: 'Senior technical leadership — designs solutions, ensures quality',
			salary: '$180-250K',
			contractRate: '$1,200-1,800/day',
			skills: [
				{ name: 'System Architecture', level: 5 },
				{ name: 'AI/LLM Systems', level: 5 },
				{ name: 'Integration Architecture', level: 5 },
				{ name: 'Cloud Platforms', level: 5 },
				{ name: 'Communication', level: 5 },
				{ name: 'Mentoring', level: 4 },
			],
			backgrounds: [
				'Senior/Principal Engineers (AI)',
				'Solutions Architects (SIs)',
				'Tech Leads (Enterprise)',
				'Startup CTOs',
				'Principal Engineers',
			],
			outputs: ['Architecture Blueprints', 'Design Approvals', 'Code Reviews', 'Security Reviews', 'Knowledge Transfer'],
			interviewQs: [
				'Design an AI agent system for invoice processing',
				'How do you balance build vs buy?',
				'Describe how you mentor junior engineers',
			],
			redFlags: [
				'Too theoretical',
				"Can't simplify concepts",
				'Arrogant',
				'Out of touch with AI',
				'No client experience',
			],
		},
		{
			id: 5,
			title: 'Operations / Support',
			abbrev: 'OP',
			color: c.green,
			icon: '🛡️',
			purpose: 'Keeps production running — monitoring, incidents, support',
			salary: '$60-100K',
			contractRate: '$400-600/day',
			skills: [
				{ name: 'Troubleshooting', level: 4 },
				{ name: 'Communication', level: 4 },
				{ name: 'Monitoring Tools', level: 3 },
				{ name: 'Basic Scripting', level: 3 },
				{ name: 'Documentation', level: 4 },
				{ name: 'Calm Under Pressure', level: 5 },
			],
			backgrounds: [
				'IT Support',
				'Junior Developers',
				'NOC/SOC Analysts',
				'Customer Success (technical)',
				'IT Graduates',
			],
			outputs: ['Daily Monitoring', 'Resolved Tickets', 'Monthly Reports', 'Updated Runbooks'],
			interviewQs: [
				'How would you investigate "the system is slow"?',
				'How do you prioritize multiple issues?',
				'Tell me about communicating bad news to a customer',
			],
			redFlags: ['Panics under pressure', 'Poor communication', 'No systematic approach', "Can't follow procedures"],
		},
		{
			id: 6,
			title: 'Sales / BD',
			abbrev: 'S',
			color: c.pink,
			icon: '🎪',
			purpose: 'Finds and wins new clients — pipeline and revenue',
			salary: '$100-150K base',
			contractRate: '$1,000-1,500/day + comm',
			ote: '$180-300K OTE',
			skills: [
				{ name: 'B2B Sales', level: 5 },
				{ name: 'Technical Understanding', level: 3 },
				{ name: 'Discovery & Qualification', level: 5 },
				{ name: 'Negotiation', level: 4 },
				{ name: 'CRM Discipline', level: 4 },
				{ name: 'Presentation', level: 4 },
			],
			backgrounds: [
				'Enterprise Software Sales',
				'Consulting Services Sales',
				'Technical Pre-sales',
				'Account Managers (SIs)',
				'Failed Startup Founders',
			],
			outputs: ['Qualified Leads', 'Pricing', 'Signed Contracts', 'Pipeline'],
			interviewQs: [
				'Walk me through your sales process',
				'How do you qualify out a bad fit?',
				'How do you explain AI to a non-technical buyer?',
			],
			redFlags: [
				"Can't explain what we do",
				'All talk no process',
				'Overpromises',
				'No curiosity',
				'Bad-mouths past employers',
			],
		},
	];

	let selectedRole = $state<number | null>(null);

	const selected = $derived(roles.find((r) => r.id === selectedRole) ?? null);

	function toggleRole(id: number) {
		selectedRole = selectedRole === id ? null : id;
	}

	function salaryBarStyle(salary: string): string {
		const nums = salary.match(/\d+/g)?.map(Number) ?? [];
		if (nums.length < 2) return `left: 0%; width: 35%;`;
		const min = Math.min(nums[0], nums[1]);
		const max = Math.max(nums[0], nums[1]);
		const scale = 280;
		const left = Math.min((min / scale) * 100, 92);
		const width = Math.max(((max - min) / scale) * 100, 6);
		return `left: ${left}%; width: ${Math.min(width, 100 - left)}%;`;
	}
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: {pageBg}; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 1200px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 48px;">
			<div
				style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;"
			>
				Team Building
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0;">Hiring Profiles</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">
				Roles needed to deliver AI agent projects — click any role for details
			</p>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 40px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Team Structure
			</h2>
			<div
				style="display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; align-items: flex-start;"
			>
				<div style="text-align: center;">
					<div style="font-size: 12px; color: {c.cyan}; margin-bottom: 16px;">MINIMUM VIABLE (1-2 projects)</div>
					<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
						<div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
							{#each [roles[0], roles[1], roles[2]] as role}
								<button
									type="button"
									onclick={() => toggleRole(role.id)}
									style="width: 70px; height: 70px; border-radius: 50%; background-color: {role.color}33; border: 3px solid {role.color}; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transform: {selectedRole === role.id
										? 'scale(1.1)'
										: 'scale(1)'}; transition: transform 0.2s;"
								>
									<div style="font-size: 20px;">{role.icon}</div>
									<div style="font-size: 9px; color: {role.color}; font-weight: 600;">{role.abbrev}</div>
								</button>
							{/each}
						</div>
						<div style="font-size: 10px; color: {c.slate};">+ You (Sales/Strategy)</div>
					</div>
				</div>
				<div style="width: 1px; background-color: {c.slate}; min-height: 120px; align-self: stretch; opacity: 0.5;"></div>
				<div style="text-align: center;">
					<div style="font-size: 12px; color: {c.purple}; margin-bottom: 16px;">GROWTH (3-5 projects)</div>
					<div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
						<div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
							{#each roles as role}
								<button
									type="button"
									onclick={() => toggleRole(role.id)}
									style="width: 50px; height: 50px; border-radius: 50%; background-color: {role.color}33; border: 2px solid {role.color}; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transform: {selectedRole === role.id
										? 'scale(1.15)'
										: 'scale(1)'}; transition: transform 0.2s;"
								>
									<div style="font-size: 16px;">{role.icon}</div>
								</button>
							{/each}
						</div>
						<div style="font-size: 10px; color: {c.slate};">Multiple of each core role</div>
					</div>
				</div>
			</div>
		</div>

		<div
			style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;"
		>
			{#each roles as role}
				<button
					type="button"
					onclick={() => toggleRole(role.id)}
					style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden; cursor: pointer; border: {selectedRole === role.id
						? `2px solid ${role.color}`
						: '2px solid transparent'}; transition: all 0.2s; transform: {selectedRole === role.id
						? 'scale(1.02)'
						: 'scale(1)'}; text-align: left; padding: 0;"
				>
					<div style="height: 4px; background-color: {role.color};"></div>
					<div style="padding: 24px;">
						<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
							<div
								style="width: 48px; height: 48px; border-radius: 12px; background-color: {role.color}33; display: flex; align-items: center; justify-content: center; font-size: 24px;"
							>
								{role.icon}
							</div>
							<div>
								<div style="font-size: 16px; font-weight: 700; color: {c.white};">{role.title}</div>
								<div style="font-size: 11px; color: {role.color};">{role.salary}</div>
							</div>
						</div>
						<p style="font-size: 12px; color: {c.lightSlate}; margin: 0 0 16px 0; line-height: 1.5;">
							{role.purpose}
						</p>
						<div style="display: flex; flex-wrap: wrap; gap: 6px;">
							{#each role.skills.slice(0, 4) as skill}
								<span
									style="font-size: 10px; padding: 4px 8px; background-color: {pageBg}; color: {c.lightSlate}; border-radius: 4px;"
								>
									{skill.name}
								</span>
							{/each}
							{#if role.skills.length > 4}
								<span style="font-size: 10px; padding: 4px 8px; color: {c.slate};"
									>+{role.skills.length - 4} more</span
								>
							{/if}
						</div>
					</div>
				</button>
			{/each}
		</div>

		{#if selected}
			<div
				style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden; margin-bottom: 40px; border: 2px solid {selected.color}4d;"
			>
				<div style="height: 4px; background-color: {selected.color};"></div>
				<div style="padding: 32px;">
					<div
						style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;"
					>
						<div style="display: flex; align-items: center; gap: 16px;">
							<div
								style="width: 64px; height: 64px; border-radius: 16px; background-color: {selected.color}33; border: 2px solid {selected.color}; display: flex; align-items: center; justify-content: center; font-size: 32px;"
							>
								{selected.icon}
							</div>
							<div>
								<h2 style="font-size: 24px; font-weight: 700; color: {c.white}; margin: 0 0 4px 0;">
									{selected.title}
								</h2>
								<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">{selected.purpose}</p>
							</div>
						</div>
						<div style="display: flex; gap: 12px; align-items: flex-start; flex-wrap: wrap;">
							<div style="text-align: right;">
								<div style="font-size: 10px; color: {c.slate};">Employee</div>
								<div style="font-size: 14px; font-weight: 600; color: {c.green};">{selected.salary}</div>
								{#if selected.ote}
									<div style="font-size: 10px; color: {c.lightSlate}; margin-top: 4px;">{selected.ote}</div>
								{/if}
							</div>
							<div style="text-align: right;">
								<div style="font-size: 10px; color: {c.slate};">Contract</div>
								<div style="font-size: 14px; font-weight: 600; color: {c.cyan};">{selected.contractRate}</div>
							</div>
							<button
								type="button"
								onclick={() => (selectedRole = null)}
								style="padding: 8px 16px; background-color: {pageBg}; border-radius: 8px; font-size: 12px; color: {c.lightSlate}; cursor: pointer; border: none; margin-left: 12px;"
							>
								✕ Close
							</button>
						</div>
					</div>

					<div
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;"
					>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {selected.color}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Required Skills
							</div>
							{#each selected.skills as skill}
								<div style="margin-bottom: 8px;">
									<div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
										<span style="font-size: 11px; color: {c.lightSlate};">{skill.name}</span>
										<span style="font-size: 10px; color: {c.slate};">{skill.level}/5</span>
									</div>
									<div
										style="height: 6px; background-color: {c.deepNavy}; border-radius: 3px; overflow: hidden;"
									>
										<div
											style="width: {skill.level * 20}%; height: 100%; background-color: {selected.color}; border-radius: 3px;"
										></div>
									</div>
								</div>
							{/each}
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Where to Find Them
							</div>
							<div style="display: flex; flex-direction: column; gap: 8px;">
								{#each selected.backgrounds as bg}
									<div
										style="font-size: 12px; color: {c.lightSlate}; display: flex; align-items: center; gap: 8px;"
									>
										<span style="color: {c.purple};">→</span>
										{bg}
									</div>
								{/each}
							</div>
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Key Outputs
							</div>
							<div style="display: flex; flex-direction: column; gap: 8px;">
								{#each selected.outputs as output}
									<div
										style="font-size: 12px; color: {c.lightSlate}; display: flex; align-items: center; gap: 8px;"
									>
										<span style="color: {c.green};">✓</span>
										{output}
									</div>
								{/each}
							</div>
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.red}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Red Flags
							</div>
							<div style="display: flex; flex-direction: column; gap: 8px;">
								{#each selected.redFlags as flag}
									<div
										style="font-size: 12px; color: {c.lightSlate}; display: flex; align-items: center; gap: 8px;"
									>
										<span style="color: {c.red};">✕</span>
										{flag}
									</div>
								{/each}
							</div>
						</div>
					</div>

					<div style="margin-top: 24px; background-color: {pageBg}; border-radius: 12px; padding: 20px;">
						<div
							style="font-size: 11px; color: {c.orange}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Interview Questions
						</div>
						<div
							style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;"
						>
							{#each selected.interviewQs as q}
								<div
									style="padding: 16px; background-color: {c.deepNavy}; border-radius: 8px; border-left: 3px solid {c.orange};"
								>
									<div style="font-size: 12px; color: {c.white}; line-height: 1.5;">"{q}"</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 40px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Hiring Priority by Stage
			</h2>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
				{#each [{ stage: 'Getting Started', projects: '0-3 projects', color: c.cyan, hires: [{ role: 'AI Engineer', priority: 1 }, { role: 'Delivery Lead', priority: 2 }, { role: 'Integration Dev (contractor)', priority: 3 }] }, { stage: 'Growing', projects: '3-10 projects', color: c.purple, hires: [{ role: 'Second Delivery Lead', priority: 1 }, { role: 'Second AI Engineer', priority: 2 }, { role: 'Integration Dev (employee)', priority: 3 }, { role: 'Ops/Support', priority: 4 }] }, { stage: 'Scaling', projects: '10+ projects', color: c.pink, hires: [{ role: 'Solutions Architect', priority: 1 }, { role: 'Sales/BD', priority: 2 }, { role: 'Additional Engineers', priority: 3 }, { role: 'Head of Delivery', priority: 4 }] }] as stage}
					<div style="background-color: {pageBg}; border-radius: 12px; overflow: hidden;">
						<div style="height: 4px; background-color: {stage.color};"></div>
						<div style="padding: 20px;">
							<div style="font-size: 16px; font-weight: 600; color: {c.white}; margin-bottom: 4px;">
								{stage.stage}
							</div>
							<div style="font-size: 11px; color: {c.slate}; margin-bottom: 16px;">{stage.projects}</div>
							<div style="display: flex; flex-direction: column; gap: 8px;">
								{#each stage.hires as hire}
									<div style="display: flex; align-items: center; gap: 12px;">
										<div
											style="width: 24px; height: 24px; border-radius: 50%; background-color: {stage.color}; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: {c.white};"
										>
											{hire.priority}
										</div>
										<span style="font-size: 12px; color: {c.lightSlate};">{hire.role}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 40px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Interview Process
			</h2>
			<div
				style="display: flex; justify-content: center; align-items: center; gap: 12px; flex-wrap: wrap;"
			>
				{#each [{ step: 1, name: 'Screen', duration: '30 min', icon: '📞' }, { step: 2, name: 'Technical', duration: '1-2 hrs', icon: '💻' }, { step: 3, name: 'Deep Dive', duration: '1 hr', icon: '🔍' }, { step: 4, name: 'Culture', duration: '30 min', icon: '☕' }, { step: 5, name: 'References', duration: '2 calls', icon: '📋' }] as stage, i}
					<div
						style="background-color: {pageBg}; border-radius: 12px; padding: 20px; text-align: center; min-width: 120px;"
					>
						<div style="font-size: 24px; margin-bottom: 8px;">{stage.icon}</div>
						<div style="font-size: 13px; font-weight: 600; color: {c.white};">{stage.name}</div>
						<div style="font-size: 10px; color: {c.slate};">{stage.duration}</div>
					</div>
					{#if i < 4}
						<div style="color: {c.cyan}; font-size: 20px;">→</div>
					{/if}
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Compensation Ranges (Australia)
			</h2>
			<div style="display: flex; flex-direction: column; gap: 12px;">
				{#each roles as role}
					<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
						<div
							style="width: 40px; height: 40px; border-radius: 10px; background-color: {role.color}33; display: flex; align-items: center; justify-content: center; font-size: 18px;"
						>
							{role.icon}
						</div>
						<div style="flex: 1; min-width: 120px;">
							<div style="font-size: 13px; color: {c.white};">{role.title}</div>
						</div>
						<div style="width: 100%; max-width: 300px; flex: 2;">
							<div
								style="height: 8px; background-color: {pageBg}; border-radius: 4px; overflow: hidden; position: relative;"
							>
								<div
									style="position: absolute; height: 100%; background-color: {role.color}; border-radius: 4px; {salaryBarStyle(
										role.salary
									)}"
								></div>
							</div>
						</div>
						<div
							style="width: 100px; text-align: right; font-size: 12px; color: {role.color}; font-weight: 600;"
						>
							{role.salary}
						</div>
					</div>
				{/each}
			</div>
			<div style="margin-top: 24px; text-align: center; font-size: 11px; color: {c.slate};">
				All figures in AUD + superannuation • Contract rates are per day
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Hiring Profiles v1.0</div>
		</div>
	</div>
</div>
