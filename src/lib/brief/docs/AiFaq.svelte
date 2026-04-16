<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';
	import AiFaqAnswer from './AiFaqAnswer.svelte';
	import aiFaqItems from './aiFaqData.json';

	let openItems = $state<Record<string, boolean>>({});
	let activeCategory = $state<string>('all');

	const categories = [
		{ id: 'all', label: 'All Questions', icon: '📋' },
		{ id: 'costs', label: 'Operational Costs', icon: '💰' },
		{ id: 'architecture', label: 'AI Architecture', icon: '🏗️' },
		{ id: 'technical', label: 'Technical Approach', icon: '⚙️' },
		{ id: 'governance', label: 'Data Governance', icon: '📊' },
		{ id: 'security', label: 'Security & Integration', icon: '🔒' },
	] as const;

	function toggleItem(id: string) {
		openItems = { ...openItems, [id]: !openItems[id] };
	}

	const filteredFaqs = $derived(
		activeCategory === 'all'
			? aiFaqItems
			: aiFaqItems.filter((f) => f.category === activeCategory),
	);

	function categoryColor(cat: string): string {
		const map: Record<string, string> = {
			costs: briefColors.cyan,
			architecture: briefColors.purple,
			technical: briefColors.orange,
			governance: briefColors.pink,
			security: briefColors.green,
		};
		return map[cat] ?? briefColors.purple;
	}

	function categoryLabel(cat: string): string {
		return categories.find((c) => c.id === cat)?.label ?? cat;
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	style="min-height: 100vh; background-color: {briefColors.offWhite}; font-family: 'DM Sans', system-ui, sans-serif; padding: 60px 24px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div style="text-align: center; margin-bottom: 48px;">
			<div
				style="font-size: 12px; color: {briefColors.purple}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px; font-weight: 600;"
			>
				AI Flow
			</div>
			<h1
				style="font-family: 'DM Serif Display', Georgia, serif; font-size: 42px; color: {briefColors.deepNavy}; margin: 0 0 16px 0; font-weight: 400;"
			>
				Frequently Asked Questions
			</h1>
			<p
				style="font-size: 18px; color: {briefColors.slate}; margin: 0; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6;"
			>
				Common questions about AI implementation, costs, security, and data governance.
			</p>
		</div>

		<div
			style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 40px;"
		>
			{#each categories as cat (cat.id)}
				<button
					type="button"
					onclick={() => (activeCategory = cat.id)}
					style="padding: 12px 20px; border-radius: 8px; border: none; background-color: {activeCategory === cat.id
						? briefColors.deepNavy
						: briefColors.white}; color: {activeCategory === cat.id
						? briefColors.white
						: briefColors.slate}; font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; box-shadow: {activeCategory === cat.id
						? 'none'
						: '0 1px 3px rgba(0,0,0,0.08)'}; font: inherit;"
				>
					<span>{cat.icon}</span>
					<span>{cat.label}</span>
					{#if cat.id !== 'all'}
						<span
							style="background-color: {activeCategory === cat.id
								? `${briefColors.white}22`
								: briefColors.offWhite}; padding: 2px 8px; border-radius: 10px; font-size: 12px;"
						>
							{aiFaqItems.filter((f) => f.category === cat.id).length}
						</span>
					{/if}
				</button>
			{/each}
		</div>

		<div style="font-size: 14px; color: {briefColors.lightSlate}; margin-bottom: 24px;">
			Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''}
		</div>

		<div>
			{#each filteredFaqs as faq (faq.id)}
				{@const isOpen = !!openItems[faq.id]}
				{@const catColor = categoryColor(faq.category)}
				<div
					style="background-color: {briefColors.white}; border-radius: 12px; margin-bottom: 12px; overflow: hidden; border: 1px solid {isOpen
						? `${catColor}44`
						: `${briefColors.lightSlate}33`}; transition: all 0.2s;"
				>
					<button
						type="button"
						onclick={() => toggleItem(faq.id)}
						style="width: 100%; padding: 24px 28px; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; border: none; background-color: transparent; cursor: pointer; text-align: left; font: inherit;"
					>
						<div style="flex: 1;">
							<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
								<span
									style="font-size: 10px; font-weight: 600; color: {catColor}; text-transform: uppercase; letter-spacing: 1px; background-color: {catColor}15; padding: 4px 8px; border-radius: 4px;"
								>
									{categoryLabel(faq.category)}
								</span>
							</div>
							<h3
								style="font-size: 17px; font-weight: 600; color: {briefColors.deepNavy}; margin: 0; line-height: 1.4;"
							>
								{faq.question}
							</h3>
						</div>
						<div
							style="width: 32px; height: 32px; border-radius: 50%; background-color: {isOpen
								? catColor
								: briefColors.offWhite}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s;"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke={isOpen ? briefColors.white : briefColors.slate}
								stroke-width="2"
								style="transform: rotate({isOpen ? 180 : 0}deg); transition: transform 0.2s;"
							>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</div>
					</button>

					{#if isOpen}
						<div
							style="padding: 0 28px 24px 28px; border-top: 1px solid {briefColors.lightSlate}22;"
						>
							<div style="padding-top: 20px; font-size: 15px; color: {briefColors.slate}; line-height: 1.8;">
								<AiFaqAnswer {faq} categoryColor={catColor} />
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div
			style="margin-top: 56px; padding: 40px; background-color: {briefColors.deepNavy}; border-radius: 16px; text-align: center;"
		>
			<h3 style="font-size: 24px; color: {briefColors.white}; margin: 0 0 12px 0; font-weight: 600;">
				Have a question we have not covered?
			</h3>
			<p style="font-size: 16px; color: {briefColors.lightSlate}; margin: 0 0 24px 0;">
				We are happy to discuss your specific requirements and concerns.
			</p>
			<a
				href="mailto:hello@aiflow.example"
				style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background-color: {briefColors.cyan}; color: {briefColors.white}; font-size: 15px; font-weight: 600; border-radius: 8px; text-decoration: none; transition: all 0.2s;"
			>
				Get in touch
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>

		<div
			style="margin-top: 40px; padding: 24px; background-color: {briefColors.white}; border-radius: 12px; border-left: 4px solid {briefColors.purple};"
		>
			<p style="font-size: 14px; color: {briefColors.slate}; margin: 0; line-height: 1.6;">
				<strong style="color: {briefColors.deepNavy}">Note:</strong> This FAQ provides general guidance.
				Specific implementations may vary based on your requirements, industry regulations, and chosen technology
				stack. We provide detailed documentation for every project.
			</p>
		</div>
	</div>
</div>
