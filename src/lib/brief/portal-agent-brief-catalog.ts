import { briefColors } from '$lib/brief/briefColors';

/** Stable ids for brief links: `/brief/portal-agent-detail?agent=<id>&tab=…` */
export const portalBriefAgentList = [
	{
		id: 'invoice-intake',
		name: 'Invoice intake',
		owner: 'Finance',
		status: 'Live',
		load: 'High',
		last: '2m ago',
		color: briefColors.cyan
	},
	{
		id: 'po-matching',
		name: 'PO matching',
		owner: 'Ops',
		status: 'Live',
		load: 'Med',
		last: '18m ago',
		color: briefColors.purple
	},
	{
		id: 'support-triage',
		name: 'Support triage',
		owner: 'CX',
		status: 'Pilot',
		load: 'Low',
		last: '1h ago',
		color: briefColors.pink
	},
	{
		id: 'contract-extraction',
		name: 'Contract extraction',
		owner: 'Legal',
		status: 'Paused',
		load: '—',
		last: '3d ago',
		color: briefColors.lightSlate
	}
] as const;

export type PortalBriefAgentId = (typeof portalBriefAgentList)[number]['id'];

export const portalBriefAgentDefaultId: PortalBriefAgentId = 'invoice-intake';

export function getPortalBriefAgent(id: string | null | undefined) {
	const found = portalBriefAgentList.find((a) => a.id === id);
	return found ?? portalBriefAgentList[0];
}

export type PortalBriefAgentTab = 'events' | 'exceptions' | 'logs' | 'flow';

export function normalizePortalBriefTab(tab: string | null | undefined): PortalBriefAgentTab {
	if (tab === 'exceptions' || tab === 'logs' || tab === 'flow' || tab === 'events') return tab;
	return 'events';
}
