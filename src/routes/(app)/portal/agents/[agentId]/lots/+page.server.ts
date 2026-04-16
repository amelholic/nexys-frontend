import { sampleLots } from '$lib/portal/sample-data';

export const load = ({ params }) => ({
	lots: sampleLots(params.agentId)
});
