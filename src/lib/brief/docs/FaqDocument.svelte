<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';
	import faqData from './faqDocumentData.json';

	type Entry = { q: string; a: string };
	const faqs = faqData as Record<string, Entry[]>;
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div
		style="max-width: 850px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
		></div>
		<div style="background: {briefColors.deepNavy}; padding: 48px 60px;">
			<div
				style="font-size: 10px; color: {briefColors.cyan}; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px;"
			>
				AI Flow
			</div>
			<h1 style="font-size: 36px; font-weight: 700; color: {briefColors.white}; margin: 0 0 12px 0;">
				Frequently Asked Questions
			</h1>
			<p style="font-size: 16px; color: {briefColors.lightSlate}; margin: 0;">
				Common questions about AI agents and working with AI Flow
			</p>
		</div>
	</div>

	{#each [{ key: 'general', title: 'General Questions', color: briefColors.cyan }, { key: 'process', title: 'Process and Timeline', color: briefColors.purple }, { key: 'technical', title: 'Technical Questions', color: briefColors.pink }, { key: 'commercial', title: 'Commercial Questions', color: briefColors.orange }, { key: 'concerns', title: 'Common Concerns', color: briefColors.green }] as section (section.key)}
		<div
			style="max-width: 850px; margin: 0 auto 40px; background-color: {briefColors.white}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div
				style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%);"
			></div>
			<div style="padding: 32px 48px;">
				<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px; margin-top: 8px;">
					<div style="width: 6px; height: 6px; border-radius: 50%; background-color: {section.color};"></div>
					<h3
						style="font-size: 12px; font-weight: 600; color: {briefColors.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin: 0;"
					>
						{section.title}
					</h3>
				</div>
				{#each faqs[section.key] as faq, i (section.key + '-' + i)}
					<div
						style="margin-bottom: 20px; padding: 20px; background-color: {briefColors.offWhite}; border-radius: 8px;"
					>
						<div
							style="font-size: 14px; font-weight: 600; color: {briefColors.deepNavy}; margin-bottom: 10px;"
						>
							{faq.q}
						</div>
						<div style="font-size: 13px; color: {briefColors.slate}; line-height: 1.7;">
							{faq.a}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<div
		style="max-width: 850px; margin: 0 auto; background-color: {briefColors.deepNavy}; border-radius: 12px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
	>
		<div
			style="height: 4px; background: linear-gradient(90deg, {briefColors.cyan} 0%, {briefColors.purple} 35%, {briefColors.pink} 65%, {briefColors.orange} 100%); border-radius: 12px 12px 0 0;"
		></div>
		<div
			style="padding: 40px 60px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;"
		>
			<div>
				<div style="font-size: 20px; font-weight: 600; color: {briefColors.white}; margin-bottom: 8px;">
					Still have questions?
				</div>
				<div style="font-size: 14px; color: {briefColors.lightSlate};">
					We are happy to chat through your specific situation.
				</div>
			</div>
			<div style="text-align: right;">
				<div
					style="background-color: {briefColors.cyan}; color: {briefColors.deepNavy}; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; margin-bottom: 8px;"
				>
					Book a call
				</div>
				<div style="font-size: 12px; color: {briefColors.lightSlate};">hello@aiflow.example</div>
			</div>
		</div>
	</div>
</div>
