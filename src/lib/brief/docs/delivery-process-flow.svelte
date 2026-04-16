<script lang="ts">
	import { aiFlowBrand, briefColors as c } from '$lib/brief/briefColors';
	import {
		deliveryPhases as phases,
		deliveryRoles as roles,
		roleOutputCards,
		type Phase
	} from '$lib/brief/docs/data/delivery-flow-data';

	let selectedPhase = $state<number | null>(null);

	const lineGradient = `linear-gradient(90deg, ${c.pink}, ${c.orange}, ${c.purple}, ${c.cyan}, ${c.green}, ${c.cyan}, ${c.orange}, ${c.purple}, ${c.green})`;
	const headerGradient = `linear-gradient(90deg, ${c.cyan} 0%, ${c.purple} 50%, ${c.pink} 100%)`;

	function phaseById(id: number): Phase {
		return phases[id - 1];
	}

	function isOwner(phase: Phase, role: (typeof roles)[number]) {
		return phase.owners.some((o) => o.includes(role.name.split(' ')[0]));
	}

	function hasActivity(phase: Phase, role: (typeof roles)[number]) {
		return phase.activities.some(
			(a) =>
				a.owner.includes(role.abbrev) ||
				a.owner.includes(role.name.split(' ')[0]) ||
				a.owner === 'All'
		);
	}

	function timelineFlex(phase: Phase) {
		if (phase.duration.includes('3-4')) return 30;
		if (phase.duration.includes('2-4')) return 20;
		if (phase.duration.includes('2')) return 15;
		return 10;
	}
</script>

<div
	style:font-family="'Inter', system-ui, sans-serif"
	style:background-color={c.pageBgDark}
	style:min-height="100vh"
	style:padding="40px 20px"
>
	<div style:max-width="1200px" style:margin="0 auto">
		<div style:text-align="center" style:margin-bottom="48px">
			<div
				style:font-size="11px"
				style:color={c.cyan}
				style:text-transform="uppercase"
				style:letter-spacing="3px"
				style:margin-bottom="12px"
			>
				{aiFlowBrand} · Agent Delivery
			</div>
			<h1 style:font-size="36px" style:font-weight="700" style:color={c.white} style:margin="0 0 16px 0">
				Delivery Process Flow
			</h1>
			<p style:font-size="14px" style:color={c.lightSlate} style:margin="0">
				Who does what and produces what — click any phase for details
			</p>
		</div>

		<div
			style:display="flex"
			style:justify-content="center"
			style:gap="24px"
			style:margin-bottom="40px"
			style:flex-wrap="wrap"
		>
			{#each roles as role (role.name)}
				<div style:display="flex" style:align-items="center" style:gap="8px">
					<div
						style:width="28px"
						style:height="28px"
						style:border-radius="50%"
						style:background-color="{role.color}30"
						style:border="2px solid {role.color}"
						style:display="flex"
						style:align-items="center"
						style:justify-content="center"
						style:font-size="10px"
						style:font-weight="700"
						style:color={role.color}
					>
						{role.abbrev}
					</div>
					<span style:font-size="12px" style:color={c.lightSlate}>{role.name}</span>
				</div>
			{/each}
		</div>

		<div style:position="relative" style:margin-bottom="48px">
			<div
				style:position="absolute"
				style:top="40px"
				style:left="40px"
				style:right="40px"
				style:height="4px"
				style:background={lineGradient}
				style:border-radius="2px"
				style:z-index="0"
			></div>

			<div
				style:display="flex"
				style:justify-content="space-between"
				style:position="relative"
				style:z-index="1"
			>
				{#each phases as phase (phase.id)}
					<button
						type="button"
						onclick={() => (selectedPhase = selectedPhase === phase.id ? null : phase.id)}
						style:display="flex"
						style:flex-direction="column"
						style:align-items="center"
						style:cursor="pointer"
						style:transition="transform 0.2s"
						style:transform={selectedPhase === phase.id ? 'scale(1.1)' : 'scale(1)'}
						style:background="none"
						style:border="none"
						style:padding="0"
						style:font="inherit"
						style:color="inherit"
					>
						<div
							style:width="80px"
							style:height="80px"
							style:border-radius="50%"
							style:background-color={c.deepNavy}
							style:border="4px solid {phase.color}"
							style:display="flex"
							style:flex-direction="column"
							style:align-items="center"
							style:justify-content="center"
							style:box-shadow={selectedPhase === phase.id ? `0 0 20px ${phase.color}50` : 'none'}
						>
							<div style:font-size="20px" style:font-weight="700" style:color={phase.color}>{phase.id}</div>
						</div>
						<div
							style:font-size="12px"
							style:font-weight="600"
							style:color={c.white}
							style:margin-top="12px"
							style:text-align="center"
						>
							{phase.name}
						</div>
						<div style:font-size="10px" style:color={c.lightSlate}>{phase.duration}</div>
					</button>
				{/each}
			</div>
		</div>

		{#if selectedPhase}
			{@const ph = phaseById(selectedPhase)}
			<div
				style:background-color={c.deepNavy}
				style:border-radius="16px"
				style:overflow="hidden"
				style:margin-bottom="40px"
				style:border="2px solid {ph.color}30"
			>
				<div style:height="4px" style:background-color={ph.color}></div>

				<div style:padding="32px">
					<div
						style:display="flex"
						style:justify-content="space-between"
						style:align-items="flex-start"
						style:margin-bottom="24px"
					>
						<div>
							<div style:display="flex" style:align-items="center" style:gap="12px" style:margin-bottom="8px">
								<div
									style:width="40px"
									style:height="40px"
									style:border-radius="50%"
									style:background-color="{ph.color}20"
									style:border="2px solid {ph.color}"
									style:display="flex"
									style:align-items="center"
									style:justify-content="center"
									style:font-size="16px"
									style:font-weight="700"
									style:color={ph.color}
								>
									{selectedPhase}
								</div>
								<h2 style:font-size="24px" style:font-weight="700" style:color={c.white} style:margin="0">
									{ph.name}
								</h2>
							</div>
							<div style:font-size="13px" style:color={c.lightSlate}>
								Duration: {ph.duration} • Owners: {ph.owners.join(', ')}
							</div>
						</div>
						<button
							type="button"
							onclick={() => (selectedPhase = null)}
							style:padding="8px 16px"
							style:background-color={c.pageBgDark}
							style:border-radius="8px"
							style:font-size="12px"
							style:color={c.lightSlate}
							style:cursor="pointer"
							style:border="none"
							style:font="inherit"
						>
							✕ Close
						</button>
					</div>

					<div style:display="grid" style:grid-template-columns="1fr 1fr 1fr" style:gap="24px">
						<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
							<div
								style:font-size="11px"
								style:color={ph.color}
								style:text-transform="uppercase"
								style:letter-spacing="1px"
								style:margin-bottom="16px"
							>
								Activities
							</div>
							<div style:display="flex" style:flex-direction="column" style:gap="10px">
								{#each ph.activities as activity (activity.task)}
									<div style:display="flex" style:justify-content="space-between" style:align-items="center">
										<span style:font-size="12px" style:color={c.white}>{activity.task}</span>
										<span
											style:font-size="10px"
											style:padding="2px 8px"
											style:background-color="{ph.color}20"
											style:color={ph.color}
											style:border-radius="4px"
										>
											{activity.owner}
										</span>
									</div>
								{/each}
							</div>
						</div>

						<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
							<div
								style:font-size="11px"
								style:color={c.green}
								style:text-transform="uppercase"
								style:letter-spacing="1px"
								style:margin-bottom="16px"
							>
								Outputs
							</div>
							<div style:display="flex" style:flex-direction="column" style:gap="8px">
								{#each ph.outputs as output (output)}
									<div style:display="flex" style:align-items="center" style:gap="8px">
										<span style:color={c.green}>✓</span>
										<span style:font-size="12px" style:color={c.white}>{output}</span>
									</div>
								{/each}
							</div>
						</div>

						<div style:background-color={c.pageBgDark} style:border-radius="12px" style:padding="20px">
							<div
								style:font-size="11px"
								style:color={c.orange}
								style:text-transform="uppercase"
								style:letter-spacing="1px"
								style:margin-bottom="16px"
							>
								Handoff to Next Phase
							</div>
							{#if ph.handoff}
								<div style:font-size="12px" style:color={c.lightSlate} style:line-height="1.6">{ph.handoff}</div>
							{:else}
								<div style:font-size="12px" style:color={c.slate} style:font-style="italic">
									Ongoing support — no handoff
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:overflow="hidden" style:margin-bottom="40px">
			<div style:height="4px" style:background={headerGradient}></div>

			<div style:padding="32px">
				<h2 style:font-size="20px" style:font-weight="700" style:color={c.white} style:margin="0 0 24px 0">
					Role Swimlanes
				</h2>

				<div style:overflow-x="auto">
					<table style:width="100%" style:border-collapse="collapse" style:min-width="900px">
						<thead>
							<tr>
								<th
									style:padding="12px"
									style:text-align="left"
									style:font-size="11px"
									style:color={c.slate}
									style:border-bottom="1px solid {c.slate}33"
									style:width="120px"
								>
									Role
								</th>
								{#each phases as phase (phase.name)}
									<th
										style:padding="12px"
										style:text-align="center"
										style:font-size="10px"
										style:color={phase.color}
										style:border-bottom="1px solid {c.slate}33"
									>
										{phase.name}
									</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each roles as role (role.name)}
								<tr>
									<td style:padding="12px" style:border-bottom="1px solid {c.slate}22">
										<div style:display="flex" style:align-items="center" style:gap="8px">
											<div
												style:width="24px"
												style:height="24px"
												style:border-radius="50%"
												style:background-color="{role.color}30"
												style:border="2px solid {role.color}"
												style:display="flex"
												style:align-items="center"
												style:justify-content="center"
												style:font-size="9px"
												style:font-weight="700"
												style:color={role.color}
											>
												{role.abbrev}
											</div>
											<span style:font-size="11px" style:color={c.white}>{role.name}</span>
										</div>
									</td>
									{#each phases as phase (phase.id + role.name)}
										<td
											style:padding="8px"
											style:text-align="center"
											style:border-bottom="1px solid {c.slate}22"
											style:background-color={isOwner(phase, role) ? `${phase.color}15` : 'transparent'}
										>
											{#if isOwner(phase, role)}
												<div
													style:width="100%"
													style:height="24px"
													style:background-color={phase.color}
													style:border-radius="4px"
													style:display="flex"
													style:align-items="center"
													style:justify-content="center"
													style:font-size="9px"
													style:font-weight="600"
													style:color={c.white}
												>
													OWNER
												</div>
											{:else if hasActivity(phase, role)}
												<div
													style:width="100%"
													style:height="24px"
													style:background-color="{phase.color}30"
													style:border-radius="4px"
													style:display="flex"
													style:align-items="center"
													style:justify-content="center"
													style:font-size="9px"
													style:color={phase.color}
												>
													Support
												</div>
											{:else}
												<div
													style:width="100%"
													style:height="24px"
													style:display="flex"
													style:align-items="center"
													style:justify-content="center"
													style:font-size="16px"
													style:color={c.slate}
												>
													·
												</div>
											{/if}
										</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div
			style:display="grid"
			style:grid-template-columns="repeat(3, 1fr)"
			style:gap="20px"
			style:margin-bottom="40px"
		>
			{#each roleOutputCards as item (item.role)}
				<div
					style:background-color={c.deepNavy}
					style:border-radius="12px"
					style:padding="20px"
					style:border-top="3px solid {item.color}"
				>
					<div style:font-size="14px" style:font-weight="600" style:color={item.color} style:margin-bottom="12px">
						{item.role}
					</div>
					<div style:display="flex" style:flex-direction="column" style:gap="6px">
						{#each item.outputs as output (output)}
							<div style:font-size="11px" style:color={c.lightSlate} style:display="flex" style:align-items="center" style:gap="6px">
								<span style:color={item.color}>→</span>
								{output}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div style:background-color={c.deepNavy} style:border-radius="16px" style:padding="32px">
			<h2
				style:font-size="20px"
				style:font-weight="700"
				style:color={c.white}
				style:margin="0 0 24px 0"
				style:text-align="center"
			>
				Typical Timeline: 8-12 Weeks
			</h2>

			<div style:display="flex" style:align-items="stretch" style:gap="4px">
				{#each phases.slice(0, 8) as phase (phase.id)}
					<div
						style:flex="{timelineFlex(phase)} 1 0%"
						style:background-color={phase.color}
						style:border-radius="8px"
						style:padding="16px 8px"
						style:text-align="center"
						style:min-width="60px"
					>
						<div style:font-size="12px" style:font-weight="600" style:color={c.white}>{phase.name}</div>
						<div style:font-size="10px" style:color="rgba(255,255,255,0.7)" style:margin-top="4px">
							{phase.duration}
						</div>
					</div>
				{/each}
			</div>

			<div style:text-align="center" style:margin-top="24px">
				<div
					style:display="inline-flex"
					style:align-items="center"
					style:gap="8px"
					style:padding="12px 24px"
					style:background-color={c.pageBgDark}
					style:border-radius="8px"
				>
					<span style:font-size="13px" style:color={c.lightSlate}>Then:</span>
					<span style:font-size="13px" style:font-weight="600" style:color={c.green}>Ongoing Support</span>
				</div>
			</div>
		</div>

		<div style:text-align="center" style:margin-top="40px" style:font-size="12px" style:color={c.slate}>
			<div style:color={c.cyan} style:font-weight="600">{aiFlowBrand}</div>
			<div style:margin-top="4px">Delivery Process Flow v1.0</div>
		</div>
	</div>
</div>
