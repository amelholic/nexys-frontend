import { base } from '$app/paths';
import { briefColors } from '$lib/brief/briefColors';
import { portalBriefAgentDefaultId } from '$lib/brief/portal-agent-brief-catalog';

export const portalBriefGradient = `linear-gradient(90deg, ${briefColors.cyan} 0%, ${briefColors.purple} 35%, ${briefColors.pink} 65%, ${briefColors.orange} 100%)`;

export const portalBriefNav = [
	{ slug: 'portal-dashboard', label: 'Dashboard', href: `${base}/brief/portal-dashboard` },
	{ slug: 'portal-agents', label: 'Agents', href: `${base}/brief/portal-agents` },
	{
		slug: 'portal-agent-detail',
		label: 'Agent detail',
		href: `${base}/brief/portal-agent-detail?agent=${portalBriefAgentDefaultId}&tab=events`
	},
	{ slug: 'portal-exceptions', label: 'Exceptions', href: `${base}/brief/portal-exceptions` },
	{ slug: 'portal-exception-detail', label: 'Exception detail', href: `${base}/brief/portal-exception-detail` },
	{ slug: 'portal-reports', label: 'Reports', href: `${base}/brief/portal-reports` },
	{ slug: 'portal-settings', label: 'Settings', href: `${base}/brief/portal-settings` }
] as const;

export type PortalBriefSlug = (typeof portalBriefNav)[number]['slug'];
