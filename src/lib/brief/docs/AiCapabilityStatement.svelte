<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gid = 'ai-cap-logo';

	const useCases = [
		'Resource Scheduling & Allocation',
		'Contract Analysis & Extraction',
		'Proposal Generation',
		'Intelligent Ticket Routing',
		'Lead Qualification',
		'Invoice Processing',
		'Resume Screening',
		'Compliance Checking',
		'Report Automation',
		'Email Classification',
		'Status Reporting',
		'Onboarding Automation',
	] as const;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	style="font-family: &quot;DM Sans&quot;, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto; background-color: {c.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); position: relative; overflow: hidden;"
	>
		<div style="background-color: {c.deepNavy}; padding: 40px 48px 32px; position: relative;">
			<div
				style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
			></div>

			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
						<svg width={32} height={32 * 1.28} viewBox="0 0 56 72" aria-hidden="true">
							<defs>
								<linearGradient id={gid} x1="0%" y1="0%" x2="0%" y2="100%">
									<stop offset="0%" stop-color={c.cyan} />
									<stop offset="35%" stop-color={c.purple} />
									<stop offset="65%" stop-color={c.pink} />
									<stop offset="100%" stop-color={c.orange} />
								</linearGradient>
							</defs>
							<path
								d="M12 20 L28 4 L44 20 L44 52 L28 68 L12 52 Z"
								fill={`url(#${gid})`}
								opacity="0.5"
								transform="translate(6, 2)"
							/>
							<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill={`url(#${gid})`} />
							<path d="M18 28 L28 18 L28 38 L18 48 Z" fill={c.deepNavy} />
						</svg>
						<span style="font-size: 24px; font-weight: 600; color: {c.white}; letter-spacing: -0.5px;">AI Flow</span>
					</div>
					<h1
						style="font-family: &quot;DM Serif Display&quot;, Georgia, serif; font-size: 32px; font-weight: 400; color: {c.white}; margin: 0 0 10px 0; letter-spacing: -0.5px; line-height: 1.2;"
					>
						AI Solutions
					</h1>
					<p style="font-size: 15px; color: {c.lightSlate}; margin: 0;">
						Custom agentic automation for established businesses
					</p>
				</div>
				<div style="text-align: right; color: {c.lightSlate}; font-size: 11px; line-height: 1.6;">
					<div style="color: {c.white}; font-weight: 500; margin-bottom: 4px;">Perth, Western Australia</div>
					<div>hello@aiflow.example</div>
					<div>aiflow.example</div>
				</div>
			</div>
		</div>

		<div style="padding: 32px 48px;">
			<div style="margin-bottom: 24px;">
				<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
					<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.purple};"></div>
					<h2
						style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
					>
						What We Do
					</h2>
				</div>
				<p style="font-size: 14px; color: {c.deepNavy}; line-height: 1.6; margin: 0 0 12px 0;">
					We design and build custom AI agent systems that automate complex business workflows. Unlike generic AI tools or
					chatbots, our solutions are purpose-built for your specific processes, integrating seamlessly with your existing
					systems.
				</p>
				<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin: 0;">
					Our approach treats AI agents like team members — each with defined roles, responsibilities, and handoffs. This
					creates predictable, auditable automation that augments your workforce rather than replacing it.
				</p>
			</div>

			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 28px;">
				{#each [{ t: 'Business-First', d: 'We start with your workflow, not the technology. Every agent is designed around your actual business logic.', col: c.cyan }, { t: 'Production-Ready', d: 'Built on enterprise-grade AWS infrastructure with security, compliance, and scalability from day one.', col: c.purple }, { t: 'Future-Proof', d: 'When foundation models improve, your system improves automatically — no rebuilding required.', col: c.pink }, { t: 'Human-in-the-Loop', d: 'Configurable oversight at any step. You control where humans review, approve, or intervene.', col: c.orange }] as x (x.t)}
					<div style="padding-left: 14px; border-left: 2px solid {x.col}; margin-bottom: 16px;">
						<h4 style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px; margin-top: 0;">{x.t}</h4>
						<p style="font-size: 11px; color: {c.slate}; line-height: 1.5; margin: 0;">{x.d}</p>
					</div>
				{/each}
			</div>

			<div
				style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
			></div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px;">
				<div>
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Agentic AI Capabilities
						</h2>
					</div>

					<p style="font-size: 11px; color: {c.slate}; line-height: 1.5; margin: 0 0 12px 0;">
						We build networks of AI agents that work together to complete complex tasks:
					</p>

					<ul style="margin: 0 0 20px 0; padding: 0;">
						{#each [{ b: 'Workflow Automation', t: ' — Multi-step business processes automated end-to-end' }, { b: 'Document Processing', t: ' — Ingestion, analysis, and generation of business documents' }, { b: 'Decision Support', t: ' — AI-assisted recommendations with human approval workflows' }, { b: 'Communication Automation', t: ' — Intelligent drafting, routing, and response management' }, { b: 'Data Integration', t: ' — Connecting disparate systems through intelligent middleware' }] as row (row.b)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 4px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.cyan};"
								></span>
								<strong>{row.b}</strong>{row.t}
							</li>
						{/each}
					</ul>

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.purple};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							AI Models Supported
						</h2>
					</div>

					<p style="font-size: 11px; color: {c.slate}; line-height: 1.5; margin: 0 0 12px 0;">
						Our framework is model-agnostic, supporting:
					</p>

					<ul style="margin: 0 0 20px 0; padding: 0;">
						{#each ['Anthropic Claude (Opus, Sonnet, Haiku)', 'OpenAI GPT-4 / GPT-4 Turbo', 'Amazon Bedrock models', 'Open-source models (Llama, Mistral) for on-premises'] as text (text)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 4px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.purple};"
								></span>
								{text}
							</li>
						{/each}
					</ul>

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.pink};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Integration Capabilities
						</h2>
					</div>

					<p style="font-size: 11px; color: {c.slate}; line-height: 1.5; margin: 0 0 12px 0;">
						We integrate with any system that exposes an API:
					</p>

					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 10px; color: {c.slate};">
						<div><strong style="color: {c.deepNavy};">Microsoft 365</strong> — Email, Teams, SharePoint</div>
						<div><strong style="color: {c.deepNavy};">CRM</strong> — Salesforce, HubSpot, Dynamics</div>
						<div><strong style="color: {c.deepNavy};">ERP</strong> — SAP, Oracle, NetSuite, MYOB</div>
						<div><strong style="color: {c.deepNavy};">Dev Tools</strong> — GitHub, Jira, Confluence</div>
						<div><strong style="color: {c.deepNavy};">Comms</strong> — Slack, Zoom, custom portals</div>
						<div><strong style="color: {c.deepNavy};">Custom</strong> — REST, GraphQL, webhooks</div>
					</div>
				</div>

				<div>
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.orange};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Technical Architecture
						</h2>
					</div>

					<p style="font-size: 11px; color: {c.slate}; line-height: 1.5; margin: 0 0 12px 0;">
						Agent-to-Agent (A2A) architecture built on AWS Strands SDK:
					</p>

					<ul style="margin: 0 0 20px 0; padding: 0;">
						{#each [{ b: 'Single Responsibility', t: ' — Each agent has one job with clear I/O' }, { b: 'Isolated Context', t: ' — Agents only access required data' }, { b: 'Defined Handoffs', t: ' — Explicit interfaces between agents' }, { b: 'Parallel Execution', t: ' — Independent agents run concurrently' }, { b: 'Knowledge Base', t: ' — Agents consult organisational rules' }] as row (row.b)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 4px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.orange};"
								></span>
								<strong>{row.b}</strong>{row.t}
							</li>
						{/each}
					</ul>

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Our Process
						</h2>
					</div>

					{#each [{ n: '1', t: 'Discovery Session', d: 'Map workflow, identify opportunities, define success criteria (2-4 hours)', col: c.cyan }, { n: '2', t: 'Solution Design', d: 'Architecture, agent specs, integration plan, timeline', col: c.purple }, { n: '3', t: 'Build & Iterate', d: 'Agile development with regular demos and checkpoints', col: c.pink }, { n: '4', t: 'Deploy & Stabilise', d: 'Production deployment with tuning period', col: c.orange }] as step (step.n)}
						<div style="display: flex; gap: 12px; margin-bottom: 12px;">
							<div
								style="width: 24px; height: 24px; border-radius: 50%; background-color: {step.col}; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: {c.white}; flex-shrink: 0;"
							>
								{step.n}
							</div>
							<div>
								<h4 style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin: 0 0 2px 0;">{step.t}</h4>
								<p style="font-size: 10px; color: {c.slate}; margin: 0; line-height: 1.4;">{step.d}</p>
							</div>
						</div>
					{/each}

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.purple};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Typical Timelines
						</h2>
					</div>

					<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px;">
						{#each [{ v: '2-4', u: 'weeks', d: 'Simple automation' }, { v: '6-12', u: 'weeks', d: 'Multi-agent workflow' }, { v: '3-6', u: 'months', d: 'Enterprise integration' }] as t (t.v)}
							<div
								style="background-color: {c.offWhite}; padding: 12px; border-radius: 4px; text-align: center;"
							>
								<div style="font-size: 18px; font-weight: 700; color: {c.deepNavy};">{t.v}</div>
								<div style="font-size: 9px; color: {c.slate}; text-transform: uppercase;">{t.u}</div>
								<div style="font-size: 10px; color: {c.slate}; margin-top: 4px;">{t.d}</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div
				style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
			></div>

			<div style="margin-top: 24px;">
				<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
					<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.purple};"></div>
					<h2
						style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
					>
						Example Use Cases
					</h2>
				</div>
				<div style="display: flex; flex-wrap: wrap; gap: 8px;">
					{#each useCases as uc (uc)}
						<span
							style="font-size: 10px; color: {c.deepNavy}; background-color: {c.white}; padding: 5px 10px; border-radius: 4px; border: 1px solid {c.lightSlate}44; display: inline-block;"
						>
							{uc}
						</span>
					{/each}
				</div>
			</div>

			<div
				style="margin-top: 24px; background-color: {c.deepNavy}; border-radius: 6px; padding: 20px 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;"
			>
				{#each [{ dot: c.cyan, h: 'Data Residency', p: 'All data remains within Australian AWS regions (ap-southeast-2). No cross-region transfer.' }, { dot: c.purple, h: 'Security Controls', p: 'AES-256 at rest, TLS 1.2+ in transit. Complete audit logging. Role-based access control.' }, { dot: c.pink, h: 'Compliance', p: 'Architecture supports ISO 27001, SOC 2, HIPAA. Your data is never used for model training.' }] as sec (sec.h)}
					<div>
						<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
							<div style="width: 5px; height: 5px; border-radius: 50%; background-color: {sec.dot};"></div>
							<h4
								style="font-size: 11px; font-weight: 600; color: {c.white}; text-transform: uppercase; letter-spacing: 0.5px; margin: 0;"
							>
								{sec.h}
							</h4>
						</div>
						<p style="font-size: 11px; color: {c.lightSlate}; margin: 0; line-height: 1.5;">{sec.p}</p>
					</div>
				{/each}
			</div>
		</div>

		<div
			style="background-color: {c.offWhite}; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid {c.lightSlate}33;"
		>
			<div>
				<h3 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin: 0 0 4px 0;">
					Ready to explore AI automation?
				</h3>
				<p style="font-size: 12px; color: {c.slate}; margin: 0;">
					Start with a no-obligation Discovery Session to identify opportunities.
				</p>
			</div>
			<div style="display: flex; align-items: center; gap: 20px;">
				<div style="text-align: right;">
					<div style="font-size: 12px; color: {c.slate};">Contact: AI Flow</div>
					<div style="font-size: 12px; color: {c.cyan}; font-weight: 500;">hello@aiflow.example</div>
				</div>
				<div
					style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan} 0%, {c.purple} 50%, {c.pink} 100%); display: flex; align-items: center; justify-content: center;"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</div>
			</div>
		</div>

		<div
			style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
		></div>
	</div>
</div>
