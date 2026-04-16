import { error } from '@sveltejs/kit';
import { sampleEventDetail } from '$lib/portal/sample-data';

export const load = ({ params }) => {
	const detail = sampleEventDetail(params.agentId, params.eventId);
	if (!detail) error(404, 'Event not found');
	return { detail };
};
