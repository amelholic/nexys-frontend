<script lang="ts">
	import { briefColors as c } from '$lib/brief/briefColors';

	const cardWidth = 360;
	const cardHeight = 220;
	const gid = 'bc-logo-grad';
</script>

<div
	style="min-height: 100vh; background-color: #E2E8F0; padding: 40px 20px; font-family: Inter, system-ui, sans-serif;"
>
	<h1
		style="text-align: center; color: {c.deepNavy}; font-size: 28px; font-weight: 700; margin-bottom: 40px; letter-spacing: -0.5px;"
	>
		Business Card Designs
	</h1>

	<div style="text-align: center; margin-bottom: 16px;">
		<span
			style="color: {c.lightSlate}; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;"
		>
			Front
		</span>
	</div>

	<div style="display: flex; justify-content: center; margin-bottom: 48px;">
		<div
			style="width: {cardWidth}px; height: {cardHeight}px; background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 24px rgba(30, 41, 59, 0.12), 0 1px 3px rgba(30, 41, 59, 0.08); padding: 24px 28px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;"
		>
			<div style="display: flex; align-items: center; gap: 10px;">
				<svg width={26} height={26 * 1.28} viewBox="0 0 56 72" aria-hidden="true">
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
					<path d="M18 28 L28 18 L28 38 L18 48 Z" fill="white" />
				</svg>
				<span style="font-size: 20px; font-weight: 600; color: {c.deepNavy}; letter-spacing: -0.3px;">
					AI Flow
				</span>
			</div>

			<div>
				<div
					style="font-size: 18px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px; letter-spacing: -0.2px;"
				>
					Alex Morgan
				</div>
				<div style="font-size: 12px; color: {c.slate}; margin-bottom: 16px; font-weight: 400;">
					Client Relationships & Business Strategy
				</div>
				<div style="font-size: 12px; color: {c.slate}; display: flex; align-items: center; gap: 16px;">
					<span>+61 XXX XXX XXX</span>
					<span style="color: {c.lightSlate}">•</span>
					<span>hello@aiflow.example</span>
				</div>
			</div>
		</div>
	</div>

	<div style="text-align: center; margin-bottom: 16px;">
		<span
			style="color: {c.lightSlate}; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;"
		>
			Back
		</span>
	</div>

	<div style="display: flex; justify-content: center; margin-bottom: 48px;">
		<div
			style="width: {cardWidth}px; height: {cardHeight}px; background-color: {c.deepNavy}; border-radius: 8px; box-shadow: 0 4px 24px rgba(30, 41, 59, 0.25), 0 1px 3px rgba(30, 41, 59, 0.15); display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden;"
		>
			<svg width={56} height={56 * 1.28} viewBox="0 0 56 72" aria-hidden="true">
				<defs>
					<linearGradient id={`${gid}-back`} x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stop-color={c.cyan} />
						<stop offset="35%" stop-color={c.purple} />
						<stop offset="65%" stop-color={c.pink} />
						<stop offset="100%" stop-color={c.orange} />
					</linearGradient>
				</defs>
				<path
					d="M12 20 L28 4 L44 20 L44 52 L28 68 L12 52 Z"
					fill={`url(#${gid}-back)`}
					opacity="0.5"
					transform="translate(6, 2)"
				/>
				<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill={`url(#${gid}-back)`} />
				<path d="M18 28 L28 18 L28 38 L18 48 Z" fill={c.deepNavy} />
			</svg>

			<div style="margin-top: 20px; text-align: center;">
				<div
					style="font-size: 11px; color: #FFFFFF; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;"
				>
					Technical Partnership
				</div>
				<div style="font-size: 10px; color: {c.lightSlate}; letter-spacing: 0.5px;">
					Senior-led • Outcome-driven
				</div>
			</div>

			<div
				style="position: absolute; bottom: 24px; font-size: 11px; color: {c.cyan}; font-weight: 500;"
			>
				aiflow.example
			</div>
		</div>
	</div>

	<div style="text-align: center; margin-bottom: 16px;">
		<span
			style="color: {c.lightSlate}; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;"
		>
			Alternative Front (Minimal)
		</span>
	</div>

	<div style="display: flex; justify-content: center; margin-bottom: 48px;">
		<div
			style="width: {cardWidth}px; height: {cardHeight}px; background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 24px rgba(30, 41, 59, 0.12), 0 1px 3px rgba(30, 41, 59, 0.08); padding: 24px 28px; display: flex; align-items: center; gap: 24px; position: relative; overflow: hidden;"
		>
			<div style="flex-shrink: 0;">
				<svg width={40} height={40 * 1.28} viewBox="0 0 56 72" aria-hidden="true">
					<defs>
						<linearGradient id={`${gid}-alt`} x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stop-color={c.cyan} />
							<stop offset="35%" stop-color={c.purple} />
							<stop offset="65%" stop-color={c.pink} />
							<stop offset="100%" stop-color={c.orange} />
						</linearGradient>
					</defs>
					<path
						d="M12 20 L28 4 L44 20 L44 52 L28 68 L12 52 Z"
						fill={`url(#${gid}-alt)`}
						opacity="0.5"
						transform="translate(6, 2)"
					/>
					<path d="M8 18 L24 2 L40 18 L40 50 L24 66 L8 50 Z" fill={`url(#${gid}-alt)`} />
					<path d="M18 28 L28 18 L28 38 L18 48 Z" fill="white" />
				</svg>
			</div>

			<div style="width: 1px; height: 100px; background-color: #E2E8F0;"></div>

			<div>
				<div
					style="font-size: 18px; font-weight: 600; color: {c.deepNavy}; margin-bottom: 4px; letter-spacing: -0.2px;"
				>
					Alex Morgan
				</div>
				<div style="font-size: 11px; color: {c.slate}; margin-bottom: 14px; font-weight: 400;">
					Client Relationships & Business Strategy
				</div>
				<div style="font-size: 11px; color: {c.slate}; line-height: 1.7;">
					<div>+61 XXX XXX XXX</div>
					<div>hello@aiflow.example</div>
					<div style="color: {c.cyan}; font-weight: 500;">aiflow.example</div>
				</div>
			</div>
		</div>
	</div>

	<div style="text-align: center; color: {c.lightSlate}; font-size: 12px; margin-top: 20px;">
		Standard business card: 90mm × 55mm (3.5" × 2")
		<br />
		These designs shown at approximate scale
	</div>
</div>
