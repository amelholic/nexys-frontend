<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';
	import { portalBriefGradient, portalBriefNav, type PortalBriefSlug } from './portal-nav';
	import type { Snippet } from 'svelte';

	let {
		activeSlug,
		eyebrow,
		title,
		tagline,
		children,
	}: {
		activeSlug: PortalBriefSlug;
		eyebrow: string;
		title: string;
		tagline?: string;
		children: Snippet;
	} = $props();
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 28px 16px 48px;"
>
	<div style="max-width: 1120px; margin: 0 auto;">
		<div
			style="display: flex; flex-direction: column; gap: 0; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08); background-color: {c.white};"
		>
			<div style="height: 4px; background: {portalBriefGradient};"></div>

			<div style="display: flex; flex-wrap: wrap; min-height: 520px;">
				<!-- Sidebar -->
				<aside
					style="width: 100%; max-width: 220px; flex-shrink: 0; border-right: 1px solid {c.lightSlate}33; background-color: {c.offWhite}; padding: 20px 16px;"
				>
					<div
						style="font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: {c.cyan}; margin-bottom: 10px;"
					>
						Client portal
					</div>
					<div style="font-size: 13px; font-weight: 700; color: {c.deepNavy}; margin-bottom: 4px;">Nexys</div>
					<div style="font-size: 10px; color: {c.slate}; line-height: 1.4; margin-bottom: 20px;">
						Brief template — AI Flow delivery console
					</div>
					<nav style="display: flex; flex-direction: column; gap: 4px;">
						{#each portalBriefNav as item}
							<a
								href={item.href}
								style="display: block; padding: 8px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; text-decoration: none; color: {item.slug === activeSlug
									? c.white
									: c.deepNavy}; background-color: {item.slug === activeSlug ? c.deepNavy : 'transparent'}; border: 1px solid {item.slug === activeSlug
									? c.deepNavy
									: 'transparent'}; transition: background-color 0.15s, color 0.15s;"
							>
								{item.label}
							</a>
						{/each}
					</nav>
					<div
						style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed {c.lightSlate}55; font-size: 9px; color: {c.lightSlate}; line-height: 1.5;"
					>
						Preview for stakeholder walkthroughs. Production UI lives in the authenticated app under
						<span style="color: {c.slate};"> /portal </span>.
					</div>
				</aside>

				<!-- Main -->
				<div style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
					<header
						style="padding: 22px 28px 18px; border-bottom: 1px solid {c.lightSlate}33; background: linear-gradient(180deg, {c.white} 0%, {c.offWhite} 100%);"
					>
						<div
							style="font-size: 9px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
						>
							{eyebrow}
						</div>
						<h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700; color: {c.deepNavy};">{title}</h1>
						{#if tagline}
							<p style="margin: 0; font-size: 12px; color: {c.slate}; max-width: 52ch;">{tagline}</p>
						{/if}
					</header>
					<div style="padding: 22px 28px 28px; flex: 1;">
						{@render children()}
					</div>
					<footer
						style="padding: 12px 28px; border-top: 1px solid {c.lightSlate}33; display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: {c.lightSlate};"
					>
						<span>AI Flow</span>
						<span>Confidential · Nexys client experience</span>
					</footer>
				</div>
			</div>
		</div>
	</div>
</div>
