<script lang="ts">
	import { browser } from '$app/environment';
	import { briefColors as c } from '$lib/brief/briefColors';

	const pageBg = c.pageBgDark;

	type Job = {
		id: number;
		title: string;
		color: string;
		icon: string;
		tagline: string;
		salary: string;
		type: string;
		location: string;
		about: string;
		whatYouDo: string[];
		required: string[];
		niceToHave: string[];
		notLooking: string[];
		toApply: string[];
	};

	const jobs: Job[] = [
		{
			id: 1,
			title: 'AI Engineer',
			color: c.cyan,
			icon: '🤖',
			tagline: 'Design and build AI agents that work in production',
			salary: '$120-180K + super',
			type: 'Full-time',
			location: 'Hybrid (Sydney) or Remote (Australia)',
			about:
				"We're looking for an AI Engineer to design and build the AI components of our agents — prompts, agent logic, evaluation, and optimization. You'll work on real problems for real clients, seeing your work go into production and make a difference.",
			whatYouDo: [
				'Design agent architectures and workflows for client processes',
				'Write and optimize prompts for extraction, reasoning, and decision-making',
				'Build evaluation suites to measure and improve agent performance',
				'Handle edge cases and failure modes (the interesting stuff)',
				'Monitor and improve production agents based on real-world data',
			],
			required: [
				'Strong prompt engineering skills (show us examples)',
				'Python proficiency',
				'Hands-on experience with LLM APIs (Claude, OpenAI, etc.)',
				'Ability to evaluate and measure AI system performance',
				'Clear thinking about complex problems',
			],
			niceToHave: [
				'Background in ML/NLP',
				'Experience with RAG, embeddings, vector databases',
				'Production AI systems experience',
				'Domain knowledge in finance, legal, or operations',
			],
			notLooking: [
				'Pure researchers without production focus',
				'People who think AI is magic',
				"Those who can't explain their work simply",
			],
			toApply: ['Your CV', "Examples of AI work you've done", 'A brief note on why this interests you'],
		},
		{
			id: 2,
			title: 'Delivery Lead',
			color: c.orange,
			icon: '🎯',
			tagline: 'Own client relationships and make projects succeed',
			salary: '$130-180K + super',
			type: 'Full-time',
			location: 'Hybrid (Sydney) or Remote (Australia)',
			about:
				"As Delivery Lead, you'll own projects from discovery through go-live and beyond. You're the single point of accountability for client outcomes. You'll run workshops, manage timelines, coordinate our technical team, and be the face of AI Flow to our clients.",
			whatYouDo: [
				'Lead discovery workshops to understand client processes',
				'Translate business requirements into clear technical specifications',
				'Manage project timelines, budgets, and scope',
				'Be the primary client contact throughout delivery',
				'Own go-live, hypercare, and handover',
			],
			required: [
				'Experience delivering technology projects to business clients',
				'Strong facilitation and communication skills',
				'Ability to understand business processes deeply',
				"Technical fluency (you don't code, but you get it)",
				'Ownership mentality — you do what it takes',
			],
			niceToHave: [
				'Management consulting background',
				'Technical project management experience',
				'Business analysis experience',
				'Automation/RPA delivery experience',
			],
			notLooking: [
				'Pure project managers who just track tasks',
				'People who blame clients or teams when things go wrong',
				"Those who can't translate between business and tech",
			],
			toApply: ['Your CV', 'A brief description of a project you delivered', 'Why you want to work on AI'],
		},
		{
			id: 3,
			title: 'Integration Developer',
			color: c.purple,
			icon: '🔌',
			tagline: 'Connect AI agents to the systems that matter',
			salary: '$110-160K + super',
			type: 'Full-time',
			location: 'Hybrid (Sydney) or Remote (Australia)',
			about:
				"As Integration Developer, you'll build the connections between our AI agents and client systems — SAP, Salesforce, Microsoft 365, custom databases, and more. You'll also build the supporting infrastructure: APIs, queues, monitoring, and simple UIs.",
			whatYouDo: [
				'Build integrations with enterprise systems (APIs, webhooks, data pipelines)',
				'Develop APIs and backend services',
				'Create exception queues and review interfaces',
				'Implement monitoring, alerting, and logging',
				'Deploy and maintain cloud infrastructure',
			],
			required: [
				'Strong Python skills',
				'Experience with REST APIs (building and consuming)',
				'Cloud platform experience (Azure preferred, AWS/GCP fine)',
				'SQL proficiency',
				'Good debugging and troubleshooting skills',
			],
			niceToHave: [
				'Experience with specific systems (SAP, Salesforce, ServiceNow)',
				'TypeScript/JavaScript for UIs',
				'Docker/Kubernetes',
				'Terraform or similar IaC',
			],
			notLooking: [
				'Front-end only developers',
				'People without production experience',
				"Those who don't care about error handling",
			],
			toApply: [
				'Your CV',
				'GitHub or examples of your work',
				'Brief note on a tricky integration problem you solved',
			],
		},
		{
			id: 4,
			title: 'Solutions Architect',
			color: c.slate,
			icon: '🏗️',
			tagline: 'Senior technical leadership for complex solutions',
			salary: '$180-250K + super',
			type: 'Full-time',
			location: 'Hybrid (Sydney) or Remote (Australia)',
			about:
				"As Solutions Architect, you'll design the technical solutions for our most complex client engagements. You'll be the senior technical voice — defining architecture, reviewing designs, mentoring the team, and handling escalations.",
			whatYouDo: [
				'Design end-to-end architectures for AI agent solutions',
				'Define integration patterns and technical standards',
				'Review and approve technical designs',
				'Mentor AI Engineers and Integration Developers',
				'Handle complex technical escalations',
			],
			required: [
				'Deep experience designing production AI/ML systems',
				'Strong architecture skills across cloud, integration, and data',
				'Excellent communication (technical and non-technical)',
				'Hands-on recent experience (not just diagrams)',
				'Track record of mentoring and growing engineers',
			],
			niceToHave: [
				'Startup CTO experience',
				'Enterprise software background',
				'Multi-cloud expertise',
				'Security and compliance experience',
			],
			notLooking: [
				'Too theoretical, no hands-on recent experience',
				"Can't simplify complex concepts",
				'Arrogant or dismissive of others\' ideas',
			],
			toApply: [
				'Your CV',
				'An architecture you designed (can be anonymized)',
				'Your view on where AI agents are headed',
			],
		},
		{
			id: 5,
			title: 'Operations / Support',
			color: c.green,
			icon: '🛡️',
			tagline: 'Keep production systems running smoothly',
			salary: '$70-100K + super',
			type: 'Full-time',
			location: 'Hybrid (Sydney) or Remote (Australia)',
			about:
				"You'll be the first responder when something goes wrong and the steady hand that keeps production systems healthy. You'll monitor dashboards, respond to alerts, troubleshoot issues, and make sure our clients' agents are working reliably.",
			whatYouDo: [
				'Monitor agent performance dashboards',
				'Respond to alerts and investigate issues',
				'Triage problems and resolve or escalate appropriately',
				'Maintain and update runbooks',
				'Handle client support requests',
			],
			required: [
				'Logical troubleshooting approach',
				'Good communication skills',
				'Comfortable with monitoring tools and logs',
				'Basic scripting (Python or Bash)',
				'Calm under pressure',
			],
			niceToHave: [
				'IT support or application support background',
				'Some development experience',
				'Cloud platform familiarity',
			],
			notLooking: ['Panics under pressure', 'Poor communication skills', 'No systematic troubleshooting approach'],
			toApply: ['Your CV', 'How you\'d investigate "the system seems slow"'],
		},
	];

	let selectedJob = $state<number | null>(null);
	let copiedId = $state<number | null>(null);

	const selected = $derived(jobs.find((j) => j.id === selectedJob) ?? null);

	function toggleJob(id: number) {
		selectedJob = selectedJob === id ? null : id;
	}

	function buildJobText(job: Job) {
		return `
${job.title}
${job.tagline}

About AI Flow
AI Flow builds AI agents that automate knowledge work. We work with mid-market companies to automate processes like invoice processing, contract review, and vendor management.

The Role
${job.about}

What You'll Do
${job.whatYouDo.map((item) => `• ${item}`).join('\n')}

What We're Looking For
Required:
${job.required.map((item) => `• ${item}`).join('\n')}

Nice to Have:
${job.niceToHave.map((item) => `• ${item}`).join('\n')}

What We're NOT Looking For
${job.notLooking.map((item) => `• ${item}`).join('\n')}

Compensation
${job.salary}
${job.type} • ${job.location}

To Apply
Send us:
${job.toApply.map((item) => `• ${item}`).join('\n')}

No cover letter template please. Just tell us what you think.
		`.trim();
	}

	async function copyJobDescription(job: Job) {
		const text = buildJobText(job);
		if (browser && navigator.clipboard?.writeText) {
			try {
				await navigator.clipboard.writeText(text);
			} catch {
				/* ignore */
			}
		}
		copiedId = job.id;
		setTimeout(() => {
			copiedId = null;
		}, 2000);
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
				Recruitment
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {c.white}; margin: 0 0 16px 0;">
				Job Description Templates
			</h1>
			<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">
				Ready-to-use job postings — click to expand, copy to clipboard
			</p>
		</div>

		<div
			style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;"
		>
			{#each jobs as job}
				<button
					type="button"
					onclick={() => toggleJob(job.id)}
					style="background-color: {c.deepNavy}; border-radius: 16px; overflow: hidden; cursor: pointer; border: {selectedJob === job.id
						? `2px solid ${job.color}`
						: '2px solid transparent'}; transition: all 0.2s; transform: {selectedJob === job.id
						? 'scale(1.02)'
						: 'scale(1)'}; text-align: left; padding: 0;"
				>
					<div style="height: 4px; background-color: {job.color};"></div>
					<div style="padding: 24px;">
						<div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
							<div
								style="width: 48px; height: 48px; border-radius: 12px; background-color: {job.color}33; display: flex; align-items: center; justify-content: center; font-size: 24px;"
							>
								{job.icon}
							</div>
							<div
								style="padding: 4px 10px; background-color: {job.color}33; border-radius: 6px; font-size: 11px; color: {job.color}; font-weight: 600;"
							>
								{job.type}
							</div>
						</div>
						<h3 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 4px 0;">{job.title}</h3>
						<p style="font-size: 12px; color: {c.lightSlate}; margin: 0 0 16px 0;">{job.tagline}</p>
						<div style="display: flex; justify-content: space-between; align-items: center;">
							<span style="font-size: 14px; font-weight: 600; color: {c.green};">{job.salary}</span>
							<span style="font-size: 11px; color: {c.slate};">{job.location.split('(')[0]}</span>
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
								<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">{selected.tagline}</p>
							</div>
						</div>
						<div style="display: flex; gap: 12px; flex-wrap: wrap;">
							<button
								type="button"
								onclick={(e) => {
									e.stopPropagation();
									void copyJobDescription(selected);
								}}
								style="padding: 10px 20px; background-color: {copiedId === selected.id ? c.green : selected.color}; border-radius: 8px; font-size: 13px; color: {c.white}; font-weight: 600; cursor: pointer; border: none; transition: background-color 0.2s;"
							>
								{copiedId === selected.id ? '✓ Copied!' : '📋 Copy JD'}
							</button>
							<button
								type="button"
								onclick={() => (selectedJob = null)}
								style="padding: 10px 16px; background-color: {pageBg}; border-radius: 8px; font-size: 13px; color: {c.lightSlate}; cursor: pointer; border: none;"
							>
								✕ Close
							</button>
						</div>
					</div>

					<div style="display: flex; gap: 24px; margin-bottom: 32px; flex-wrap: wrap;">
						{#each [{ label: 'Compensation', value: selected.salary, icon: '💰' }, { label: 'Type', value: selected.type, icon: '📄' }, { label: 'Location', value: selected.location, icon: '📍' }] as item}
							<div
								style="display: flex; align-items: center; gap: 12px; background-color: {pageBg}; padding: 12px 16px; border-radius: 8px;"
							>
								<span style="font-size: 18px;">{item.icon}</span>
								<div>
									<div style="font-size: 10px; color: {c.slate};">{item.label}</div>
									<div style="font-size: 13px; color: {c.white};">{item.value}</div>
								</div>
							</div>
						{/each}
					</div>

					<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
						<div
							style="font-size: 11px; color: {selected.color}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
						>
							The Role
						</div>
						<p style="font-size: 14px; color: {c.lightSlate}; line-height: 1.7; margin: 0;">{selected.about}</p>
					</div>

					<div
						style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 24px;"
					>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								What You'll Do
							</div>
							<div style="display: flex; flex-direction: column; gap: 10px;">
								{#each selected.whatYouDo as item}
									<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {c.lightSlate};">
										<span style="color: {c.cyan};">→</span>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.green}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Required
							</div>
							<div style="display: flex; flex-direction: column; gap: 10px;">
								{#each selected.required as item}
									<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {c.lightSlate};">
										<span style="color: {c.green};">✓</span>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.purple}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Nice to Have
							</div>
							<div style="display: flex; flex-direction: column; gap: 10px;">
								{#each selected.niceToHave as item}
									<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {c.lightSlate};">
										<span style="color: {c.purple};">+</span>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>
						<div style="background-color: {pageBg}; border-radius: 12px; padding: 20px;">
							<div
								style="font-size: 11px; color: {c.red}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
							>
								Not Looking For
							</div>
							<div style="display: flex; flex-direction: column; gap: 10px;">
								{#each selected.notLooking as item}
									<div style="display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: {c.lightSlate};">
										<span style="color: {c.red};">✕</span>
										<span>{item}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<div
						style="background-color: {selected.color}26; border-radius: 12px; padding: 20px; border: 1px solid {selected.color}4d;"
					>
						<div
							style="font-size: 11px; color: {selected.color}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;"
						>
							To Apply — Send Us
						</div>
						<div style="display: flex; gap: 16px; flex-wrap: wrap;">
							{#each selected.toApply as item, i}
								<div
									style="flex: 1; min-width: 140px; background-color: {c.deepNavy}; border-radius: 8px; padding: 16px; text-align: center;"
								>
									<div style="font-size: 20px; margin-bottom: 8px;">
										{i === 0 ? '📄' : i === 1 ? '💼' : '✉️'}
									</div>
									<div style="font-size: 12px; color: {c.white};">{item}</div>
								</div>
							{/each}
						</div>
						<div style="margin-top: 16px; font-size: 12px; color: {c.lightSlate}; text-align: center;">
							No cover letter template please. Just tell us what you think.
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px; margin-bottom: 40px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Where to Post
			</h2>
			<div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
				{#each [{ name: 'LinkedIn', icon: '💼', primary: true }, { name: 'Seek', icon: '🔍', primary: true }, { name: 'AngelList', icon: '👼', primary: false }, { name: 'Hacker News', icon: '🟠', primary: false }, { name: 'Networks', icon: '🤝', primary: true }] as platform}
					<div
						style="background-color: {platform.primary ? `${c.cyan}33` : pageBg}; border: {platform.primary
							? `1px solid ${c.cyan}4d`
							: '1px solid transparent'}; border-radius: 12px; padding: 16px 24px; text-align: center; min-width: 120px;"
					>
						<div style="font-size: 24px; margin-bottom: 8px;">{platform.icon}</div>
						<div style="font-size: 13px; color: {platform.primary ? c.white : c.lightSlate};">
							{platform.name}
						</div>
						{#if platform.primary}
							<div style="font-size: 10px; color: {c.cyan}; margin-top: 4px;">Primary</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<div style="background-color: {c.deepNavy}; border-radius: 16px; padding: 32px;">
			<h2 style="font-size: 18px; font-weight: 700; color: {c.white}; margin: 0 0 24px 0; text-align: center;">
				Posting Tips
			</h2>
			<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
				<div
					style="background-color: {`${c.green}26`}; border-radius: 12px; padding: 20px; border: 1px solid {c.green}4d;"
				>
					<div style="font-size: 13px; font-weight: 600; color: {c.green}; margin-bottom: 12px;">✓ Do</div>
					<div style="display: flex; flex-direction: column; gap: 8px;">
						{#each ['Be specific about the work', 'Show personality', 'Include compensation range', 'Make the process clear', 'Respond quickly to good candidates'] as tip}
							<div style="font-size: 12px; color: {c.lightSlate};">• {tip}</div>
						{/each}
					</div>
				</div>
				<div style="background-color: {`${c.red}1a`}; border-radius: 12px; padding: 20px; border: 1px solid {c.red}33;">
					<div style="font-size: 13px; font-weight: 600; color: {c.red}; margin-bottom: 12px;">✕ Don't</div>
					<div style="display: flex; flex-direction: column; gap: 8px;">
						{#each ['Use generic corporate language', 'List 20 requirements', 'Hide compensation', 'Take weeks to respond', 'Copy-paste without editing'] as tip}
							<div style="font-size: 12px; color: {c.lightSlate};">• {tip}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; font-size: 12px; color: {c.slate};">
			<div style="color: {c.cyan}; font-weight: 600;">AI Flow</div>
			<div style="margin-top: 4px;">Job Description Templates v1.0</div>
		</div>
	</div>
</div>
