<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gid = 'cap-full-logo';

	const industries = [
		'Logistics',
		'Healthcare',
		'Mining',
		'Finance',
		'Professional Services',
		'Manufacturing',
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
						Capability Statement
					</h1>
					<p style="font-size: 14px; color: {c.lightSlate}; margin: 0;">
						Technical partnership. Senior-led. Outcome-driven.
					</p>
					<p style="font-size: 10px; color: {c.lightSlate}; margin: 8px 0 0 0; letter-spacing: 0.12em; text-transform: uppercase;">
						Full profile — AI, integrations and compliance
					</p>
				</div>
				<div style="text-align: right; color: {c.lightSlate}; font-size: 11px; line-height: 1.6;">
					<div style="color: {c.white}; font-weight: 500; margin-bottom: 4px;">Perth, Western Australia</div>
					<div>hello@aiflow.example</div>
					<div>aiflow.example</div>
				</div>
			</div>
		</div>

		<div style="padding: 36px 48px;">
			<div style="margin-bottom: 28px;">
				<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
					<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
					<h2
						style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
					>
						About AI Flow
					</h2>
				</div>
				<p style="font-size: 14px; color: {c.deepNavy}; line-height: 1.6; margin: 0 0 12px 0;">
					AI Flow is a senior technical leadership consultancy based in Perth, serving clients across Australia. We
					partner with established, ambitious businesses to lead technology strategy, execution, and AI-powered
					transformation.
				</p>
				<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin: 0;">
					Four principals with 80+ combined years of experience. We're the senior adults in the room — trusted to tell you
					the truth and deliver outcomes. No juniors, no handoffs, no learning on your time.
				</p>
			</div>

			<div
				style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
			></div>

			<div
				style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; padding: 24px 0; border-bottom: 1px solid {c.lightSlate}33;"
			>
				{#each [{ v: '4', l: 'Principals' }, { v: '20+', l: 'Avg Years Exp' }, { v: '80+', l: 'Combined Years' }, { v: '100%', l: 'Senior Delivery' }, { v: 'AI', l: 'Integrated' }] as s (s.l)}
					<div style="text-align: center;">
						<div
							style="font-size: 28px; font-weight: 700; color: {c.deepNavy}; letter-spacing: -1px; line-height: 1;"
						>
							{s.v}
						</div>
						<div
							style="font-size: 10px; color: {c.slate}; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px;"
						>
							{s.l}
						</div>
					</div>
				{/each}
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 36px; margin-top: 28px;">
				<div>
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Core Services
						</h2>
					</div>

					{#each [{ t: 'Technical Leadership', d: 'Fractional CTO and embedded senior tech partner. Strategic direction, team leadership, and managed delivery.' }, { t: 'AI & Workflow Automation', d: 'Custom AI agent systems that automate complex workflows. Purpose-built for your processes, not generic chatbots.' }, { t: 'Technology Roadmapping', d: 'Clear plans across three timeframes: 3 months, 12 months, 3 years. Built to be delivered, not shelved.' }] as x (x.t)}
						<div style="margin-bottom: 16px;">
							<h4 style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px; margin-top: 0;">
								{x.t}
							</h4>
							<p style="font-size: 12px; color: {c.slate}; line-height: 1.5; margin: 0;">{x.d}</p>
						</div>
					{/each}

					<div style="margin-top: 24px;">
						<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
							<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
							<h2
								style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
							>
								Leadership Team
							</h2>
						</div>
						{#each [{ n: 'Amel', r: 'Client Relationships & Strategy' }, { n: '[Name withheld]', r: 'Delivery & Operations' }, { n: '[Name withheld]', r: 'Technical Architecture & AI' }, { n: '[Name withheld]', r: 'Technical Leadership & Dev' }] as m (m.n)}
							<div style="margin-bottom: 10px;">
								<div style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 1px;">{m.n}</div>
								<div style="font-size: 10px; color: {c.slate};">{m.r}</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.purple};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							AI Capabilities
						</h2>
					</div>

					<p style="font-size: 12px; color: {c.slate}; line-height: 1.5; margin: 0 0 16px 0;">
						We build networks of AI agents that work together to complete complex tasks — treating AI like team members
						with defined roles and handoffs.
					</p>

					<h4 style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px; margin-top: 0;">
						Agentic AI Development
					</h4>
					<ul style="margin: 0 0 16px 0; padding: 0;">
						{#each ['Workflow automation end-to-end', 'Document processing & generation', 'Decision support with human approval', 'Intelligent communication routing', 'Data integration middleware'] as text (text)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 5px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.purple};"
								></span>
								{text}
							</li>
						{/each}
					</ul>

					<h4 style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px; margin-top: 0;">
						Model Flexibility
					</h4>
					<ul style="margin: 0 0 16px 0; padding: 0;">
						{#each ['Anthropic Claude (Opus, Sonnet, Haiku)', 'OpenAI GPT-4 / GPT-4 Turbo', 'Amazon Bedrock models', 'Open-source (Llama, Mistral)'] as text (text)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 5px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.purple};"
								></span>
								{text}
							</li>
						{/each}
					</ul>

					<div
						style="background-color: {c.offWhite}; padding: 12px 14px; border-radius: 4px; border-left: 2px solid {c.purple};"
					>
						<p style="font-size: 11px; color: {c.slate}; margin: 0; line-height: 1.5; font-style: italic;">
							"As models improve, your system improves. Upgrading is a configuration change, not a rebuild."
						</p>
					</div>
				</div>

				<div>
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.pink};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Integrations
						</h2>
					</div>

					<ul style="margin: 0 0 20px 0; padding: 0;">
						{#each ['Microsoft 365 (Email, Teams, SharePoint)', 'CRM (Salesforce, HubSpot, Dynamics)', 'ERP (SAP, Oracle, NetSuite, MYOB)', 'Dev Tools (GitHub, Jira, Confluence)', 'Communication (Slack, Zoom)', 'Custom APIs (REST, GraphQL, webhooks)'] as text (text)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 5px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.pink};"
								></span>
								{text}
							</li>
						{/each}
					</ul>

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.orange};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Security & Compliance
						</h2>
					</div>

					<ul style="margin: 0 0 20px 0; padding: 0;">
						{#each ['Australian data residency (AWS Sydney)', 'AES-256 encryption at rest', 'TLS 1.2+ encryption in transit', 'No model training on your data', 'Complete audit logging', 'ISO 27001, SOC 2, IRAP ready'] as text (text)}
							<li
								style="font-size: 11px; color: {c.slate}; padding: 5px 0; padding-left: 14px; position: relative; list-style: none;"
							>
								<span
									style="position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background-color: {c.orange};"
								></span>
								{text}
							</li>
						{/each}
					</ul>

					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
						<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {c.cyan};"></div>
						<h2
							style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
						>
							Industry Experience
						</h2>
					</div>
					<div style="display: flex; flex-wrap: wrap; gap: 6px;">
						{#each industries as industry (industry)}
							<span
								style="font-size: 10px; color: {c.slate}; background-color: {c.offWhite}; padding: 4px 8px; border-radius: 4px; border: 1px solid {c.lightSlate}44;"
							>
								{industry}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div
			style="background-color: {c.offWhite}; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid {c.lightSlate}33;"
		>
			<div>
				<h3 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin: 0 0 4px 0;">Ready to talk?</h3>
				<p style="font-size: 12px; color: {c.slate}; margin: 0;">
					Start with a discovery call. No obligation, no pressure.
				</p>
			</div>
			<div style="display: flex; align-items: center; gap: 20px;">
				<div style="text-align: right;">
					<div style="font-size: 12px; color: {c.slate};">hello@aiflow.example</div>
					<div style="font-size: 12px; color: {c.cyan}; font-weight: 500;">aiflow.example</div>
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
