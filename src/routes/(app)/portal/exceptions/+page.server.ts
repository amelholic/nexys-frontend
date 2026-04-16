import { SAMPLE_AGENTS, sampleInboxItems } from '$lib/portal/sample-data';

/** `agent` query param may repeat; empty means all agents (explicit “all” in UI). */
export const load = ({ url }) => {
	const agents = SAMPLE_AGENTS;
	const allIds = agents.map((a) => a.id);
	const fromUrl = url.searchParams.getAll('agent');
	const selectedAgents = fromUrl.length ? fromUrl.filter((id) => allIds.includes(id)) : allIds;
	const allItems = sampleInboxItems(agents);
	const items = allItems.filter((i) => selectedAgents.includes(i.agentId));

	return {
		agents,
		items,
		selectedAgents,
		allAgentIds: allIds
	};
};
