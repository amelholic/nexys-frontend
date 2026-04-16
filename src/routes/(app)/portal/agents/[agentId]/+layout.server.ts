import { error } from '@sveltejs/kit';
import { getAgent } from '$lib/portal/sample-data';

export const load = ({ params }) => {
	const agent = getAgent(params.agentId);
	if (!agent) error(404, 'Agent not found');
	return { agent };
};
