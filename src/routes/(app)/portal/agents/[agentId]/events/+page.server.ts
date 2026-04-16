import { sampleEvents } from '$lib/portal/sample-data';

export const load = ({ params }) => ({
	agentId: params.agentId,
	events: sampleEvents(params.agentId)
});
