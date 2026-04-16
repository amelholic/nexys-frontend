import { error } from '@sveltejs/kit';
import { SAMPLE_AGENTS, sampleExceptionDetailForAgent } from '$lib/portal/sample-data';

export const load = ({ params }) => {
	const detail = sampleExceptionDetailForAgent(params.agentId, params.exceptionId, SAMPLE_AGENTS);
	if (!detail) error(404, 'Exception not found');
	return { detail };
};
