<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	type SectionId = 'overview' | 'logo' | 'colors' | 'typography' | 'voice' | 'applications';

	let activeSection = $state<SectionId>('overview');
	let copiedColor = $state<string | null>(null);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	const navItems: { id: SectionId; label: string }[] = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'logo', label: 'Logo' },
		{ id: 'colors', label: 'Colours' },
		{ id: 'typography', label: 'Typography' },
		{ id: 'voice', label: 'Voice & Tone' },
		{ id: 'applications', label: 'Applications' },
	];

	const lightHexes = ['#F8FAFC', '#FFFFFF', '#94A3B8'];

	async function copyColor(hex: string, name: string) {
		try {
			await navigator.clipboard?.writeText(hex);
		} catch {
			/* ignore */
		}
		copiedColor = name;
		if (copyTimer) clearTimeout(copyTimer);
		copyTimer = setTimeout(() => {
			copiedColor = null;
		}, 2000);
	}

	const brandCharacter = [
		{ do: 'Confident', dont: 'not arrogant' },
		{ do: 'Direct and honest', dont: 'not salesy or corporate' },
		{ do: 'Warm through honesty', dont: 'not forced friendliness' },
		{ do: 'Senior and experienced', dont: 'but not stuffy' },
		{ do: 'Modern and capable', dont: 'but grounded and practical' },
		{ do: 'Anti-hype', dont: 'especially around AI' },
	] as const;

	const logoMisuse = [
		'Rotate or skew the logo',
		'Change the gradient colours',
		'Add effects (shadows, outlines, glows)',
		'Stretch or compress disproportionately',
		'Place on low-contrast backgrounds',
		'Recreate or approximate the logo',
	] as const;

	const typeScale = [
		{
			name: 'Display',
			size: '48-64px',
			weight: 'Bold (700)',
			usage: 'Hero headlines, page titles',
			example: 'Technology that moves',
			exSize: '24px',
		},
		{
			name: 'Heading 1',
			size: '32-40px',
			weight: 'Bold (700)',
			usage: 'Section headings',
			example: 'What we do',
			exSize: '20px',
		},
		{
			name: 'Heading 2',
			size: '24-28px',
			weight: 'Semibold (600)',
			usage: 'Subsections',
			example: 'Technical Leadership',
			exSize: '18px',
		},
		{
			name: 'Heading 3',
			size: '18-20px',
			weight: 'Semibold (600)',
			usage: 'Card titles, labels',
			example: 'Our approach',
			exSize: '16px',
		},
		{
			name: 'Body',
			size: '16-18px',
			weight: 'Regular (400)',
			usage: 'Paragraphs, general text',
			example: 'We partner with established businesses to lead their technology.',
			exSize: '15px',
		},
		{
			name: 'Small',
			size: '14px',
			weight: 'Regular (400)',
			usage: 'Captions, metadata',
			example: 'Last updated February 2026',
			exSize: '13px',
		},
	] as const;

	const voicePrinciples = [
		{
			title: 'Be direct',
			desc: "Say what you mean. No jargon, no fluff, no filler. If a sentence doesn't add value, cut it.",
		},
		{
			title: 'Be confident, not arrogant',
			desc: "We know our stuff. We don't need to prove it with buzzwords or chest-beating. Quiet confidence.",
		},
		{
			title: 'Be honest, even when uncomfortable',
			desc: "If something isn't a fit, say so. If there's a hard truth, share it. Honesty builds trust.",
		},
		{
			title: 'Be human',
			desc: 'Write like you talk. Contractions are fine. Short sentences are good. Personality is welcome.',
		},
		{
			title: 'Be anti-hype',
			desc: 'Especially around AI and technology trends. We focus on outcomes, not buzzwords. Practical value over hype.',
		},
	] as const;

	const voicePrincipleBorders = [c.cyan, c.purple, c.pink, c.orange, c.cyan] as const;

	const voiceExamples = [
		{ do: '"We help you get technology right."', dont: '"We leverage synergies to drive digital transformation."' },
		{ do: '"AI is powerful when applied to the right problems."', dont: '"AI will revolutionise everything!"' },
		{ do: `"We're not the right fit for this."`, dont: '"We can definitely handle anything!"' },
		{ do: `"Here's what we found."`, dont: '"Enclosed please find the deliverables."' },
	] as const;

	const websiteBullets = [
		'Generous white space',
		'Left-aligned body text',
		'Dark navy for headers, slate for body',
		'Purple CTAs, cyan links',
		'No stock photography',
		'Use illustrations or abstract shapes',
	] as const;

	const websiteDots = [c.cyan, c.purple, c.pink, c.orange, c.cyan, c.purple] as const;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#snippet sectionTitle(title: string, color: string)}
	<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px;">
		<div style="width: 8px; height: 8px; border-radius: 50%; background-color: {color};"></div>
		<h2
			style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1.5px; margin: 0;"
		>
			{title}
		</h2>
	</div>
{/snippet}

{#snippet logoSymbol(size: number, bgColor: string)}
	<svg width={size} height={size * 1.28} viewBox="0 0 56 72" aria-hidden="true">
		<path
			d="M12 20 L28 4 L44 20 L44 52 L28 68 L12 52 Z"
			fill="url(#brand-grad-main)"
			opacity="0.5"
			transform="translate(6, 2)"
		/>
		<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill="url(#brand-grad-main)" />
		<path d="M18 28 L28 18 L28 38 L18 48 Z" fill={bgColor === 'transparent' ? c.white : bgColor} />
	</svg>
{/snippet}

{#snippet logoFull(height: number, dark: boolean)}
	<div style="display: flex; align-items: center; gap: 12px;">
		{@render logoSymbol(height * 0.8, dark ? c.deepNavy : c.white)}
		<span
			style="font-size: {height * 0.6}px; font-weight: 600; color: {dark ? c.white : c.deepNavy}; letter-spacing: -0.5px;"
		>
			AI Flow
		</span>
	</div>
{/snippet}

{#snippet gradientBar(height: number)}
	<div
		style="height: {height}px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%); border-radius: 2px;"
	></div>
{/snippet}

<div style="min-height: 100vh; background-color: {c.white}; font-family: Inter, system-ui, sans-serif;">
	<svg width="0" height="0" style="position: absolute; overflow: hidden" aria-hidden="true">
		<defs>
			<linearGradient id="brand-grad-main" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stop-color={c.cyan} />
				<stop offset="35%" stop-color={c.purple} />
				<stop offset="65%" stop-color={c.pink} />
				<stop offset="100%" stop-color={c.orange} />
			</linearGradient>
		</defs>
	</svg>

	<div style="background-color: {c.deepNavy}; position: sticky; top: 0; z-index: 100;">
		{@render gradientBar(4)}
		<div
			style="max-width: 1200px; margin: 0 auto; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center;"
		>
			{@render logoFull(32, true)}
			<div style="font-size: 14px; color: {c.lightSlate};">
				Brand Guidelines <span style="color: {c.slate};">•</span> v1.0
			</div>
		</div>
	</div>

	<div
		style="border-bottom: 1px solid {c.lightSlate}33; position: sticky; top: 68px; background-color: {c.white}; z-index: 99;"
	>
		<div style="max-width: 1200px; margin: 0 auto; padding: 0 40px; display: flex; gap: 8px;">
			{#each navItems as item (item.id)}
				<button
					type="button"
					onclick={() => (activeSection = item.id)}
					style="padding: 16px 20px; font-size: 14px; font-weight: {activeSection === item.id ? '600' : '400'}; color: {activeSection === item.id
						? c.deepNavy
						: c.slate}; background-color: transparent; border: none; border-bottom: {activeSection === item.id
						? `2px solid ${c.purple}`
						: '2px solid transparent'}; cursor: pointer; transition: all 0.2s;"
				>
					{item.label}
				</button>
			{/each}
		</div>
	</div>

	<div style="max-width: 1200px; margin: 0 auto; padding: 48px 40px 80px;">
		{#if activeSection === 'overview'}
			<div>
				{@render sectionTitle('Brand Overview', c.cyan)}
				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 32px; font-weight: 700; color: {c.deepNavy}; margin-bottom: 16px; line-height: 1.2;">
						Who We Are
					</h3>
					<p
						style="font-size: 18px; color: {c.slate}; line-height: 1.7; max-width: 700px; margin-bottom: 24px;"
					>
						AI Flow is a senior technical leadership consultancy. We partner with established, ambitious businesses to
						lead their technology strategy, execution, and transformation.
					</p>
					<p style="font-size: 16px; color: {c.slate}; line-height: 1.6;">
						Four principals. Average 20 years experience. Perth-based, working across Australia.
					</p>
				</div>

				<div style="background-color: {c.deepNavy}; border-radius: 12px; padding: 40px; margin-bottom: 48px;">
					<div
						style="font-size: 12px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;"
					>
						Tagline
					</div>
					<h3 style="font-size: 28px; font-weight: 600; color: {c.white}; margin-bottom: 0;">
						Technical partnership. Senior-led. Outcome-driven.
					</h3>
				</div>

				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 20px;">Brand Character</h3>
					<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
						{#each brandCharacter as item, i (i)}
							<div
								style="display: flex; align-items: center; gap: 8px; padding: 14px 18px; background-color: {c.offWhite}; border-radius: 8px;"
							>
								<span style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">{item.do}</span>
								<span style="font-size: 14px; color: {c.lightSlate};">— {item.dont}</span>
							</div>
						{/each}
					</div>
				</div>

				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div
						style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px; border-left: 4px solid {c.cyan};"
					>
						<h4 style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">We are</h4>
						<p style="font-size: 15px; color: {c.slate}; line-height: 1.6; margin: 0;">
							The experienced adults in the room. The people you trust to tell you the truth and get it done.
						</p>
					</div>
					<div
						style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px; border-left: 4px solid {c.pink};"
					>
						<h4 style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">We are not</h4>
						<p style="font-size: 15px; color: {c.slate}; line-height: 1.6; margin: 0;">
							A flashy startup. A big consultancy. A body shop. Trend-chasers.
						</p>
					</div>
				</div>
			</div>
		{:else if activeSection === 'logo'}
			<div>
				{@render sectionTitle('Logo', c.purple)}
				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">Logo Elements</h3>
					<p style="font-size: 15px; color: {c.slate}; line-height: 1.7; max-width: 700px;">
						The AI Flow logo consists of two elements: the <strong>symbol</strong> (chevron mark) and the
						<strong>wordmark</strong>. The symbol features a gradient that represents the spectrum of technology services we
						provide, from strategy (blue) through execution (purple/pink) to outcomes (orange).
					</p>
				</div>

				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 48px;">
					<div
						style="background-color: {c.white}; border: 1px solid {c.lightSlate}33; border-radius: 12px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;"
					>
						{@render logoFull(48, false)}
						<div style="margin-top: 24px; font-size: 12px; color: {c.slate}; text-align: center;">
							Primary Logo — Light Background
						</div>
					</div>
					<div
						style="background-color: {c.deepNavy}; border-radius: 12px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px;"
					>
						{@render logoFull(48, true)}
						<div style="margin-top: 24px; font-size: 12px; color: {c.lightSlate}; text-align: center;">
							Primary Logo — Dark Background
						</div>
					</div>
					<div
						style="background-color: {c.white}; border: 1px solid {c.lightSlate}33; border-radius: 12px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
					>
						{@render logoSymbol(64, c.white)}
						<div style="margin-top: 24px; font-size: 12px; color: {c.slate}; text-align: center;">
							Symbol Only — Light Background
						</div>
					</div>
					<div
						style="background-color: {c.deepNavy}; border-radius: 12px; padding: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
					>
						{@render logoSymbol(64, c.deepNavy)}
						<div style="margin-top: 24px; font-size: 12px; color: {c.lightSlate}; text-align: center;">
							Symbol Only — Dark Background
						</div>
					</div>
				</div>

				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 20px;">
						Clear Space & Sizing
					</h3>
					<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
						<div style="padding: 24px; background-color: {c.offWhite}; border-radius: 8px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Clear Space</div>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.5;">
								Maintain clear space equal to the height of the capital "F" in "Flow" in the wordmark around all sides.
							</p>
						</div>
						<div style="padding: 24px; background-color: {c.offWhite}; border-radius: 8px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
								Minimum Size — Digital
							</div>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.5;">
								Primary logo: 120px width<br />
								Symbol only: 32px height
							</p>
						</div>
						<div style="padding: 24px; background-color: {c.offWhite}; border-radius: 8px;">
							<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
								Minimum Size — Print
							</div>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.5;">
								Primary logo: 30mm width<br />
								Symbol only: 10mm height
							</p>
						</div>
					</div>
				</div>

				<div>
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 20px;">Logo Misuse</h3>
					<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
						{#each logoMisuse as item, i (i)}
							<div
								style="display: flex; align-items: center; gap: 10px; padding: 14px 16px; background-color: #FEF2F2; border-radius: 8px; border: 1px solid #FECACA;"
							>
								<span style="color: #DC2626; font-size: 16px;">✕</span>
								<span style="font-size: 13px; color: #991B1B;">{item}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if activeSection === 'colors'}
			<div>
				{@render sectionTitle('Colour Palette', c.pink)}
				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
						Primary Colours (Logo Gradient)
					</h3>
					<p style="font-size: 14px; color: {c.slate}; margin-bottom: 24px;">
						These colours are derived from the logo gradient. Use sparingly as accents. Click any swatch to copy the HEX
						code.
					</p>
					<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
						{#each [{ n: 'Cyan', hex: '#00B4FF', rgb: '0, 180, 255', u: 'Links, secondary accents' }, { n: 'Purple', hex: '#8B5CF6', rgb: '139, 92, 246', u: 'Primary CTAs, highlights' }, { n: 'Pink', hex: '#EC4899', rgb: '236, 72, 153', u: 'Accent only' }, { n: 'Orange', hex: '#F97316', rgb: '249, 115, 22', u: 'Accent only' }] as sw (sw.hex)}
							<button
								type="button"
								onclick={() => copyColor(sw.hex, sw.n)}
								onmouseenter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)')}
								onmouseleave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)')}
								style="cursor: pointer; transition: transform 0.2s; text-align: left; padding: 0; border: none; background: none; width: 100%;"
							>
								<div
									style="width: 100%; height: 100px; background-color: {sw.hex}; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;"
								>
									{#if copiedColor === sw.n}
										<span
											style="font-size: 12px; font-weight: 600; color: {lightHexes.includes(sw.hex)
												? c.deepNavy
												: c.white}; background-color: {lightHexes.includes(sw.hex)
												? 'rgba(0,0,0,0.1)'
												: 'rgba(255,255,255,0.2)'}; padding: 4px 12px; border-radius: 4px;"
										>
											Copied!
										</span>
									{/if}
								</div>
								<div
									style="background-color: {c.white}; border: 1px solid {c.lightSlate}33; border-top: none; border-radius: 0 0 8px 8px; padding: 12px 14px;"
								>
									<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">{sw.n}</div>
									<div
										style="font-size: 12px; font-family: 'JetBrains Mono', monospace; color: {c.slate}; margin-bottom: 2px;"
									>
										{sw.hex}
									</div>
									<div style="font-size: 11px; color: {c.lightSlate}; margin-bottom: 6px;">RGB: {sw.rgb}</div>
									<div style="font-size: 11px; color: {c.slate};">{sw.u}</div>
								</div>
							</button>
						{/each}
					</div>
				</div>

				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Core Palette</h3>
					<p style="font-size: 14px; color: {c.slate}; margin-bottom: 24px;">
						These are your everyday colours for text, backgrounds, and UI elements.
					</p>
					<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
						{#each [{ n: 'Deep Navy', hex: '#1E293B', rgb: '30, 41, 59', u: 'Headings, dark backgrounds' }, { n: 'Slate', hex: '#475569', rgb: '71, 85, 105', u: 'Body text' }, { n: 'Light Slate', hex: '#94A3B8', rgb: '148, 163, 184', u: 'Muted text, borders' }, { n: 'Off White', hex: '#F8FAFC', rgb: '248, 250, 252', u: 'Backgrounds' }] as sw (sw.hex)}
							<button
								type="button"
								onclick={() => copyColor(sw.hex, sw.n)}
								onmouseenter={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)')}
								onmouseleave={(e) => ((e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)')}
								style="cursor: pointer; transition: transform 0.2s; text-align: left; padding: 0; border: none; background: none; width: 100%;"
							>
								<div
									style="width: 100%; height: 100px; background-color: {sw.hex}; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;"
								>
									{#if copiedColor === sw.n}
										<span
											style="font-size: 12px; font-weight: 600; color: {lightHexes.includes(sw.hex)
												? c.deepNavy
												: c.white}; background-color: {lightHexes.includes(sw.hex)
												? 'rgba(0,0,0,0.1)'
												: 'rgba(255,255,255,0.2)'}; padding: 4px 12px; border-radius: 4px;"
										>
											Copied!
										</span>
									{/if}
								</div>
								<div
									style="background-color: {c.white}; border: 1px solid {c.lightSlate}33; border-top: none; border-radius: 0 0 8px 8px; padding: 12px 14px;"
								>
									<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px;">{sw.n}</div>
									<div
										style="font-size: 12px; font-family: 'JetBrains Mono', monospace; color: {c.slate}; margin-bottom: 2px;"
									>
										{sw.hex}
									</div>
									<div style="font-size: 11px; color: {c.lightSlate}; margin-bottom: 6px;">RGB: {sw.rgb}</div>
									<div style="font-size: 11px; color: {c.slate};">{sw.u}</div>
								</div>
							</button>
						{/each}
					</div>
				</div>

				<div style="background-color: {c.offWhite}; border-radius: 12px; padding: 32px;">
					<h3 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 20px;">
						Colour Usage Guidelines
					</h3>
					<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
						<div>
							<h4 style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Text</h4>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.6;">
								Deep Navy for headings. Slate for body text. Never use gradient colours for body text.
							</p>
						</div>
						<div>
							<h4 style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Backgrounds</h4>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.6;">
								White or Off White for primary backgrounds. Deep Navy for dark sections.
							</p>
						</div>
						<div>
							<h4 style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Accents</h4>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.6;">
								Purple for primary CTAs. Cyan for links and secondary accents.
							</p>
						</div>
						<div>
							<h4 style="font-size: 13px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">Ratio</h4>
							<p style="font-size: 13px; color: {c.slate}; margin: 0; line-height: 1.6;">
								Aim for 70% neutrals, 25% primary colours, 5% accent colours.
							</p>
						</div>
					</div>
				</div>
			</div>
		{:else if activeSection === 'typography'}
			<div>
				{@render sectionTitle('Typography', c.orange)}
				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">
						Primary Typeface: Inter
					</h3>
					<p style="font-size: 15px; color: {c.slate}; line-height: 1.7; margin-bottom: 24px; max-width: 700px;">
						Inter is our primary typeface for all applications. It's modern, highly readable, and works well across digital
						and print. Available free from Google Fonts.
					</p>
					<a
						href="https://fonts.google.com/specimen/Inter"
						target="_blank"
						rel="noopener noreferrer"
						style="display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: {c.cyan}; text-decoration: none;"
					>
						Download from Google Fonts
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M7 17L17 7M17 7H7M17 7V17" />
						</svg>
					</a>
				</div>

				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 24px;">Type Scale</h3>
					<div style="display: flex; flex-direction: column; gap: 16px;">
						{#each typeScale as type, i (type.name)}
							<div
								style="display: grid; grid-template-columns: 140px 120px 140px 1fr; gap: 24px; align-items: center; padding: 20px 24px; background-color: {c.offWhite}; border-radius: 8px;"
							>
								<div>
									<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">{type.name}</div>
									<div style="font-size: 12px; color: {c.lightSlate};">{type.usage}</div>
								</div>
								<div style="font-size: 13px; font-family: 'JetBrains Mono', monospace; color: {c.slate};">{type.size}</div>
								<div style="font-size: 13px; color: {c.slate};">{type.weight}</div>
								<div
									style="font-size: {type.exSize}; font-weight: {type.weight.includes('Bold')
										? '700'
										: type.weight.includes('Semibold')
											? '600'
											: '400'}; color: {c.deepNavy}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
								>
									{type.example}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
					<div style="padding: 24px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">
							Monospace: JetBrains Mono
						</h4>
						<p style="font-size: 13px; color: {c.slate}; margin-bottom: 12px; line-height: 1.5;">
							For code snippets, technical specifications, and data.
						</p>
						<code
							style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: {c.purple}; background-color: {c.white}; padding: 12px 16px; border-radius: 6px; border: 1px solid {c.lightSlate}33;"
						>
							const greeting = "Hello, world";
						</code>
					</div>
					<div style="padding: 24px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 14px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 12px;">Fallback Fonts</h4>
						<div style="font-size: 13px; color: {c.slate}; line-height: 1.8;">
							<div><strong>Sans-serif:</strong></div>
							<code style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: {c.purple};">
								system-ui, -apple-system, "Segoe UI", sans-serif
							</code>
							<div style="margin-top: 12px;"><strong>Monospace:</strong></div>
							<code style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: {c.purple};">
								"SF Mono", Consolas, monospace
							</code>
						</div>
					</div>
				</div>
			</div>
		{:else if activeSection === 'voice'}
			<div>
				{@render sectionTitle('Voice & Tone', c.cyan)}
				<div style="margin-bottom: 48px;">
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 24px;">Writing Principles</h3>
					<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
						{#each voicePrinciples as principle, i (principle.title)}
							<div
								style="padding: 24px; background-color: {c.offWhite}; border-radius: 12px; border-left: 3px solid {voicePrincipleBorders[
									i
								]};"
							>
								<h4 style="font-size: 15px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 8px;">
									{principle.title}
								</h4>
								<p style="font-size: 14px; color: {c.slate}; margin: 0; line-height: 1.6;">{principle.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h3 style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 24px;">Do / Don't</h3>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
						{#each voiceExamples as example, i (i)}
							<div style="display: contents">
								<div
									style="padding: 16px 20px; background-color: #F0FDF4; border-radius: 8px; border: 1px solid #BBF7D0; display: flex; align-items: center; gap: 12px;"
								>
									<span style="color: #16A34A; font-size: 18px;">✓</span>
									<span style="font-size: 14px; color: #166534;">{example.do}</span>
								</div>
								<div
									style="padding: 16px 20px; background-color: #FEF2F2; border-radius: 8px; border: 1px solid #FECACA; display: flex; align-items: center; gap: 12px;"
								>
									<span style="color: #DC2626; font-size: 18px;">✕</span>
									<span style="font-size: 14px; color: #991B1B;">{example.dont}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if activeSection === 'applications'}
			<div>
				{@render sectionTitle('Applications', c.purple)}
				<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
					<div style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">Email Signature</h4>
						<p style="font-size: 13px; color: {c.slate}; margin-bottom: 16px; line-height: 1.5;">
							Keep signatures clean and minimal. Include: name, role, company, phone, email, website. No quotes, banners,
							or legal disclaimers.
						</p>
						<div
							style="background-color: {c.white}; padding: 20px; border-radius: 8px; border: 1px solid {c.lightSlate}33; font-size: 13px; line-height: 1.6;"
						>
							<strong style="color: {c.deepNavy};">Alex Morgan</strong><br />
							<span style="color: {c.slate};">CTO</span><br />
							<span style="color: {c.slate};">AI Flow</span><br />
							<span style="color: {c.slate};">+61 XXX XXX XXX</span><br />
							<span style="color: {c.cyan};">hello@aiflow.example</span><br />
							<span style="color: {c.cyan};">aiflow.example</span>
						</div>
					</div>

					<div style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">Document Headers</h4>
						<p style="font-size: 13px; color: {c.slate}; line-height: 1.6;">
							For proposals, reports, and formal documents:
						</p>
						<ul style="font-size: 13px; color: {c.slate}; line-height: 1.8; padding-left: 20px; margin-top: 12px;">
							<li>Logo in top left (symbol only for internal, full logo for external)</li>
							<li>Page numbers in footer, right-aligned</li>
							<li>Document title and date in footer, left-aligned</li>
							<li>1-inch margins all around</li>
						</ul>
					</div>

					<div style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">Presentations</h4>
						<ul style="font-size: 13px; color: {c.slate}; line-height: 1.8; padding-left: 20px; margin: 0;">
							<li>Logo on title slide and in footer of subsequent slides</li>
							<li>Dark navy or white backgrounds preferred</li>
							<li>Use Inter for all text</li>
							<li>Minimal text per slide; let visuals breathe</li>
							<li>Accent colours from primary palette for highlights</li>
						</ul>
					</div>

					<div style="padding: 28px; background-color: {c.offWhite}; border-radius: 12px;">
						<h4 style="font-size: 16px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 16px;">Social Media</h4>
						<ul style="font-size: 13px; color: {c.slate}; line-height: 1.8; padding-left: 20px; margin: 0;">
							<li><strong>Profile picture:</strong> Symbol on dark navy background</li>
							<li><strong>Cover/banner:</strong> Full logo centred on dark navy</li>
							<li><strong>Post style:</strong> Clean, minimal graphics. Avoid stock photos.</li>
						</ul>
					</div>

					<div
						style="grid-column: span 2; padding: 28px; background-color: {c.deepNavy}; border-radius: 12px;"
					>
						<h4 style="font-size: 16px; font-weight: 600; color: {c.white}; margin-bottom: 16px;">Website</h4>
						<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
							{#each websiteBullets as item, i (item)}
								<div style="display: flex; align-items: center; gap: 10px; font-size: 13px; color: {c.lightSlate};">
									<span
										style="width: 6px; height: 6px; border-radius: 50%; background-color: {websiteDots[i]};"
									></span>
									{item}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div
		style="background-color: {c.offWhite}; border-top: 1px solid {c.lightSlate}33; padding: 32px 40px;"
	>
		<div
			style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;"
		>
			<div style="font-size: 13px; color: {c.slate};">© 2026 AI Flow. All rights reserved.</div>
			<div style="font-size: 13px; color: {c.lightSlate};">Version 1.0 • February 2026</div>
		</div>
	</div>
</div>
