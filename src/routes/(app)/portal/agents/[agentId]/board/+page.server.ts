import { sampleBoardGraph } from '$lib/portal/sample-data';

export const load = ({ params }) => ({
	graph: sampleBoardGraph(params.agentId)
});
