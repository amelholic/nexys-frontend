import { SAMPLE_AGENTS, sampleActivityFeed, sampleDashboardKpis } from '$lib/portal/sample-data';

export const load = () => {
	return {
		kpis: sampleDashboardKpis(SAMPLE_AGENTS),
		feed: sampleActivityFeed(SAMPLE_AGENTS)
	};
};
