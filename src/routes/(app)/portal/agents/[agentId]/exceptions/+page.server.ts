import { SAMPLE_AGENTS, sampleInboxItemsForAgent } from '$lib/portal/sample-data';

export const load = ({ params }) => ({
	agentId: params.agentId,
	items: sampleInboxItemsForAgent(params.agentId, SAMPLE_AGENTS)
});
