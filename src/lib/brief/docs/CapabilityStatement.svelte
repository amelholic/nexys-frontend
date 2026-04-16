<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const gid = 'cap-stmt-logo';

	const differentiators = [
		'Senior-only team — no bait and switch',
		'Retainer partnerships, not hourly billing',
		'AI-integrated in how we work and deliver',
		'We lead execution, not just strategy',
		'Client references available before engagement',
	] as const;

	const industries = [
		'Logistics',
		'Healthcare',
		'Mining',
		'Real Estate',
		'Professional Services',
		'Telecommunications',
		'Aviation',
		'Manufacturing',
		'Retail',
	] as const;

	const tech = [
		'Go',
		'TypeScript',
		'PHP',
		'Svelte',
		'AWS',
		'AI/ML',
		'DevOps',
		'Database Architecture',
		'Distributed Systems',
		'API Development',
	] as const;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=DM+Serif+Display&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	style="font-family: &quot;DM Sans&quot;, system-ui, sans-serif; background-color: #FFFFFF; min-height: 100vh; padding: 0;"
>
	<div
		style="max-width: 850px; margin: 0 auto; background-color: #FFFFFF; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); position: relative; overflow: hidden;"
	>
		<div style="background-color: {c.deepNavy}; padding: 48px 56px 40px; position: relative;">
			<div
				style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
			></div>

			<div style="display: flex; justify-content: space-between; align-items: flex-start;">
				<div>
					<div style="display: flex; align-items: center; gap: 14px; margin-bottom: 24px;">
						<svg width={36} height={36 * 1.28} viewBox="0 0 56 72" aria-hidden="true">
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
						<span style="font-size: 28px; font-weight: 600; color: #FFFFFF; letter-spacing: -0.5px;">AI Flow</span>
					</div>
					<h1
						style="font-family: &quot;DM Serif Display&quot;, Georgia, serif; font-size: 36px; font-weight: 400; color: #FFFFFF; margin: 0 0 12px 0; letter-spacing: -0.5px; line-height: 1.2;"
					>
						Capability Statement
					</h1>
					<p style="font-size: 16px; color: {c.lightSlate}; margin: 0; font-weight: 400;">
						Technical partnership. Senior-led. Outcome-driven.
					</p>
				</div>
				<div style="text-align: right; color: {c.lightSlate}; font-size: 12px; line-height: 1.7;">
					<div style="color: #FFFFFF; font-weight: 500; margin-bottom: 4px;">Perth, Western Australia</div>
					<div>hello@aiflow.example</div>
					<div>aiflow.example</div>
				</div>
			</div>
		</div>

		<div style="padding: 48px 56px;">
			<div style="margin-bottom: 40px;">
				<h2
					style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;"
				>
					About AI Flow
				</h2>
				<p
					style="font-size: 17px; color: {c.deepNavy}; line-height: 1.7; margin: 0 0 16px 0; font-weight: 400;"
				>
					AI Flow is a senior technical leadership consultancy based in Perth, working with clients across Australia.
					We partner with established, ambitious businesses to lead their technology strategy, execution, and
					transformation.
				</p>
				<p style="font-size: 15px; color: {c.slate}; line-height: 1.7; margin: 0;">
					Four principals. Average 20 years experience. We're the experienced adults in the room — the people you trust
					to tell you the truth and get it done. No juniors, no handoffs, no learning on your time.
				</p>
			</div>

			<div
				style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
			></div>

			<div
				style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding: 32px 0; border-bottom: 1px solid {c.lightSlate}33;"
			>
				{#each [{ v: '4', l: 'Senior Principals' }, { v: '20+', l: 'Years Avg Experience' }, { v: '80+', l: 'Combined Years' }, { v: '100%', l: 'Senior Delivery' }] as s (s.l)}
					<div style="text-align: center;">
						<div
							style="font-size: 32px; font-weight: 700; color: {c.deepNavy}; letter-spacing: -1px; line-height: 1;"
						>
							{s.v}
						</div>
						<div
							style="font-size: 11px; color: {c.slate}; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.5px;"
						>
							{s.l}
						</div>
					</div>
				{/each}
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 56px; margin-top: 40px;">
				<div>
					<h2
						style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;"
					>
						Our Services
					</h2>

					<div style="padding: 20px 0; border-bottom: 1px solid {c.lightSlate}33;">
						<h4
							style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px; letter-spacing: -0.2px;"
						>
							Technical Leadership
						</h4>
						<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin: 0;">
							Fractional CTO and embedded senior tech partner. We sit at the leadership table, lead your team, manage
							delivery, and stay accountable for outcomes.
						</p>
					</div>
					<div style="padding: 20px 0; border-bottom: 1px solid {c.lightSlate}33;">
						<h4
							style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px; letter-spacing: -0.2px;"
						>
							AI & Workflow Automation
						</h4>
						<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin: 0;">
							Practical AI implementation that delivers ROI, not hype. We identify high-friction processes and automate
							them intelligently. Humans stay in the loop.
						</p>
					</div>
					<div style="padding: 20px 0; border-bottom: 1px solid {c.lightSlate}33;">
						<h4
							style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px; letter-spacing: -0.2px;"
						>
							Technology Roadmapping
						</h4>
						<p style="font-size: 13px; color: {c.slate}; line-height: 1.6; margin: 0;">
							A clear technology plan that connects to business outcomes. Three timeframes: 3 months, 12 months, 3
							years. Concrete enough to act on, built to be delivered.
						</p>
					</div>

					<div style="margin-top: 32px;">
						<h3
							style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;"
						>
							What Sets Us Apart
						</h3>
						<ul style="margin: 0; padding: 0; list-style: none;">
							{#each differentiators as item, i (item)}
								<li
									style="font-size: 13px; color: {c.slate}; padding: 8px 0; padding-left: 20px; position: relative; border-bottom: {i < 4
										? `1px solid ${c.lightSlate}22`
										: 'none'};"
								>
									<span
										style="position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan}, {c.purple});"
									></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div>
					<h2
						style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px;"
					>
						Leadership Team
					</h2>

					{#each [{ n: 'Amel', r: 'Client Relationships & Business Strategy' }, { n: '[Name withheld]', r: 'Delivery & Operations' }, { n: '[Name withheld]', r: 'Technical Architecture & AI' }, { n: '[Name withheld]', r: 'Technical Leadership & Development' }] as m (m.n)}
						<div style="margin-bottom: 12px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 2px;">{m.n}</div>
							<div style="font-size: 11px; color: {c.slate};">{m.r}</div>
						</div>
					{/each}

					<div
						style="background-color: {c.offWhite}; padding: 16px 20px; border-radius: 8px; margin-top: 8px; margin-bottom: 32px;"
					>
						<p style="font-size: 12px; color: {c.slate}; margin: 0; line-height: 1.6; font-style: italic;">
							"When you work with AI Flow, you work with us. The people you meet at the start are the people who lead your
							engagement."
						</p>
					</div>

					<h3
						style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;"
					>
						Industry Experience
					</h3>
					<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;">
						{#each industries as industry (industry)}
							<span
								style="font-size: 11px; color: {c.slate}; background-color: {c.offWhite}; padding: 6px 12px; border-radius: 4px; border: 1px solid {c.lightSlate}44;"
							>
								{industry}
							</span>
						{/each}
					</div>

					<h3
						style="font-size: 11px; font-weight: 600; color: {c.purple}; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;"
					>
						Technical Expertise
					</h3>
					<div style="display: flex; flex-wrap: wrap; gap: 8px;">
						{#each tech as t (t)}
							<span
								style="font-size: 11px; color: {c.deepNavy}; background-color: #FFFFFF; padding: 6px 12px; border-radius: 4px; border: 1px solid {c.lightSlate}66; font-weight: 500;"
							>
								{t}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div
			style="background-color: {c.offWhite}; padding: 32px 56px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid {c.lightSlate}33;"
		>
			<div>
				<h3 style="font-size: 18px; font-weight: 600; color: {c.deepNavy}; margin: 0 0 4px 0; letter-spacing: -0.3px;">
					Ready to talk?
				</h3>
				<p style="font-size: 14px; color: {c.slate}; margin: 0;">
					Start with a 30-minute discovery call. No obligation, no pressure.
				</p>
			</div>
			<div style="display: flex; align-items: center; gap: 24px;">
				<div style="text-align: right;">
					<div style="font-size: 13px; color: {c.slate};">hello@aiflow.example</div>
					<div style="font-size: 13px; color: {c.cyan}; font-weight: 500;">aiflow.example</div>
				</div>
				<div
					style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, {c.cyan} 0%, {c.purple} 50%, {c.pink} 100%); display: flex; align-items: center; justify-content: center;"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true">
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
