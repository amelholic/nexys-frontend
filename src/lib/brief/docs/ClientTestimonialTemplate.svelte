<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const testimonial = {
		quote:
			'The AI agent has transformed our accounts payable process. What used to take our team days now happens in hours, with fewer errors and happier vendors. AI Flow delivered exactly what they promised.',
		clientName: '[Client Name]',
		clientTitle: '[Title]',
		clientCompany: '[Company Name]',
		clientLogo: null as string | null,
		metrics: [
			{ value: '71%', label: 'Auto-processing rate' },
			{ value: '80%', label: 'Time savings' },
			{ value: '$145K', label: 'Annual savings' },
			{ value: '5 months', label: 'Payback period' },
		],
		project: {
			type: 'PO Invoice Processing',
			duration: '12 weeks',
			industry: 'Manufacturing',
		},
		extendedQuote:
			'Before working with AI Flow, our AP team was drowning in invoices. Every month-end was a scramble, and we were always behind. Now, most invoices process automatically, and our team focuses on exceptions and vendor relationships instead of data entry. The ROI was faster than we expected.',
		approved: false,
		approvalDate: null as string | null,
	};

	function initialFromName(name: string) {
		const m = name.match(/[A-Za-z0-9]/);
		return m ? m[0].toUpperCase() : '?';
	}

	const metricColors = [c.cyan, c.purple, c.green, c.orange] as const;
</script>

<div
	style="font-family: Inter, system-ui, sans-serif; background-color: #E2E8F0; min-height: 100vh; padding: 40px 20px;"
>
	<div style="max-width: 900px; margin: 0 auto;">
		<div
			style="background-color: {c.orange}15; border-radius: 8px; padding: 20px; margin-bottom: 32px; border: 1px solid {c.orange}30;"
		>
			<div style="font-size: 13px; font-weight: 600; color: {c.orange}; margin-bottom: 8px;">
				Template Instructions
			</div>
			<div style="font-size: 12px; color: {c.deepNavy}; line-height: 1.6;">
				<p style="margin: 0 0 8px 0;">
					<strong>1. Collect the testimonial:</strong> After project completion, ask the client sponsor for a quote.
					Provide suggested talking points based on results.
				</p>
				<p style="margin: 0 0 8px 0;">
					<strong>2. Get approval:</strong> Send the final version for written approval before publishing anywhere.
				</p>
				<p style="margin: 0 0 8px 0;">
					<strong>3. Use appropriately:</strong> This template creates multiple formats — use the right one for each channel.
				</p>
			</div>
		</div>

		<div style="margin-bottom: 40px;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Format 1: Social Media Card (LinkedIn, Twitter)
			</div>

			<div
				style="background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div
					style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
				></div>
				<div style="padding: 32px;">
					<div style="font-size: 48px; color: {c.cyan}; line-height: 1; margin-bottom: 16px;">"</div>
					<p
						style="font-size: 18px; color: {c.deepNavy}; line-height: 1.6; margin: 0 0 24px 0; font-style: italic;"
					>
						{testimonial.quote}
					</p>
					<div style="display: flex; align-items: center; gap: 16px;">
						<div
							style="width: 48px; height: 48px; border-radius: 50%; background-color: {c.offWhite}; display: flex; align-items: center; justify-content: center; font-size: 18px; color: {c.slate};"
						>
							{initialFromName(testimonial.clientName)}
						</div>
						<div>
							<div style="font-size: 14px; font-weight: 600; color: {c.deepNavy};">
								{testimonial.clientName}
							</div>
							<div style="font-size: 12px; color: {c.slate};">
								{testimonial.clientTitle}, {testimonial.clientCompany}
							</div>
						</div>
						<div style="margin-left: auto; font-size: 13px; font-weight: 600; color: {c.cyan};">AI Flow</div>
					</div>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 40px;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Format 2: Metrics-Focused Card
			</div>

			<div
				style="background-color: {c.deepNavy}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div
					style="height: 4px; background: linear-gradient(90deg, {c.cyan} 0%, {c.purple} 35%, {c.pink} 65%, {c.orange} 100%);"
				></div>
				<div style="padding: 32px;">
					<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
						{#each testimonial.metrics as metric, i (metric.label)}
							<div style="text-align: center;">
								<div style="font-size: 28px; font-weight: 700; color: {metricColors[i]};">{metric.value}</div>
								<div style="font-size: 10px; color: {c.lightSlate};">{metric.label}</div>
							</div>
						{/each}
					</div>
					<div style="border-top: 1px solid {c.slate}; padding-top: 20px;">
						<p
							style="font-size: 14px; color: {c.white}; line-height: 1.6; margin: 0 0 16px 0; font-style: italic;"
						>
							"{testimonial.quote}"
						</p>
						<div style="display: flex; justify-content: space-between; align-items: center;">
							<div style="font-size: 12px; color: {c.lightSlate};">
								— {testimonial.clientName}, {testimonial.clientTitle} at {testimonial.clientCompany}
							</div>
							<div style="font-size: 13px; font-weight: 600; color: {c.cyan};">AI Flow</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 40px;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Format 3: Website Testimonial Block
			</div>

			<div
				style="background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<div style="display: grid; grid-template-columns: 1fr 1fr;">
					<div style="padding: 40px; border-right: 1px solid {c.lightSlate}22;">
						<div
							style="font-size: 11px; color: {c.cyan}; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;"
						>
							Client Success
						</div>
						<p style="font-size: 20px; color: {c.deepNavy}; line-height: 1.6; margin: 0 0 24px 0;">
							"{testimonial.extendedQuote}"
						</p>
						<div style="display: flex; align-items: center; gap: 12px;">
							<div
								style="width: 40px; height: 40px; border-radius: 50%; background-color: {c.offWhite}; display: flex; align-items: center; justify-content: center; font-size: 16px; color: {c.slate};"
							>
								{initialFromName(testimonial.clientName)}
							</div>
							<div>
								<div style="font-size: 13px; font-weight: 600; color: {c.deepNavy};">
									{testimonial.clientName}
								</div>
								<div style="font-size: 11px; color: {c.slate};">{testimonial.clientTitle}</div>
								<div style="font-size: 11px; color: {c.slate};">{testimonial.clientCompany}</div>
							</div>
						</div>
					</div>
					<div style="padding: 40px; background-color: {c.offWhite};">
						<div
							style="font-size: 11px; color: {c.slate}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
						>
							Results Achieved
						</div>
						{#each testimonial.metrics as metric, i (metric.label)}
							<div
								style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: {i < 3
									? `1px solid ${c.lightSlate}33`
									: 'none'};"
							>
								<span style="font-size: 13px; color: {c.slate};">{metric.label}</span>
								<span style="font-size: 18px; font-weight: 700; color: {c.deepNavy};">{metric.value}</span>
							</div>
						{/each}
						<div style="margin-top: 20px; padding: 12px; background-color: {c.white}; border-radius: 6px;">
							<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Project</div>
							<div style="font-size: 12px; color: {c.deepNavy};">{testimonial.project.type}</div>
							<div style="font-size: 11px; color: {c.slate};">
								{testimonial.project.industry} • {testimonial.project.duration}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 40px;">
			<div
				style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Format 4: Simple Quote (Emails, Proposals)
			</div>

			<div
				style="background-color: {c.white}; border-radius: 8px; padding: 24px; border-left: 4px solid {c.cyan}; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
			>
				<p style="font-size: 14px; color: {c.deepNavy}; line-height: 1.6; margin: 0 0 12px 0; font-style: italic;">
					"{testimonial.quote}"
				</p>
				<div style="font-size: 12px; color: {c.slate};">
					— {testimonial.clientName}, {testimonial.clientTitle}, {testimonial.clientCompany}
				</div>
			</div>
		</div>

		<div
			style="background-color: {c.white}; border-radius: 12px; padding: 24px; box-shadow: 0 0 60px rgba(30, 41, 59, 0.08);"
		>
			<div
				style="font-size: 12px; font-weight: 600; color: {c.deepNavy}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;"
			>
				Approval Tracking
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px;">
					<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Quote Collected</div>
					<div style="display: flex; align-items: center; gap: 8px;">
						<div
							style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid {c.lightSlate};"
						></div>
						<span style="font-size: 12px; color: {c.slate};">Date: ____________</span>
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px;">
					<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Written Approval</div>
					<div style="display: flex; align-items: center; gap: 8px;">
						<div
							style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid {c.lightSlate};"
						></div>
						<span style="font-size: 12px; color: {c.slate};">Date: ____________</span>
					</div>
				</div>
				<div style="background-color: {c.offWhite}; border-radius: 6px; padding: 16px;">
					<div style="font-size: 10px; color: {c.lightSlate}; margin-bottom: 4px;">Approved Channels</div>
					<div style="font-size: 11px; color: {c.slate};">
						<div>☐ Website</div>
						<div>☐ LinkedIn</div>
						<div>☐ Proposals</div>
					</div>
				</div>
			</div>

			<div style="margin-top: 16px; font-size: 11px; color: {c.lightSlate};">
				Do not publish without written client approval. Keep approval email on file.
			</div>
		</div>
	</div>
</div>
