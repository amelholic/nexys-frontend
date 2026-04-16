<script lang="ts">
	import { page } from '$app/stores';
	import { orgType } from '$lib/stores/auth';
	import { Separator } from '$lib/components/ui/separator';

	type NavItem = {
		label: string;
		href: string;
		icon?: string;
	};

	const nexysNav: NavItem[] = [
		{ label: 'Dashboard', href: '/ops/dashboard' },
		{ label: 'Leads', href: '/ops/crm/leads' },
		{ label: 'Opportunities', href: '/ops/crm/opportunities' },
		{ label: 'Proposals', href: '/ops/crm/proposals' },
		{ label: 'Pipeline', href: '/ops/crm/pipeline' },
		{ label: 'Projects', href: '/ops/delivery/projects' },
		{ label: 'Agents', href: '/ops/agents' },
		{ label: 'Tickets', href: '/ops/support/tickets' },
		{ label: 'Clients', href: '/ops/clients' },
		{ label: 'Partners', href: '/ops/partners' },
		{ label: 'Finance', href: '/ops/finance/budgets' },
		{ label: 'Team', href: '/ops/team' },
		{ label: 'Settings', href: '/ops/settings' }
	];

	const partnerNav: NavItem[] = [
		{ label: 'Dashboard', href: '/partner/dashboard' },
		{ label: 'Leads', href: '/partner/crm/leads' },
		{ label: 'Opportunities', href: '/partner/crm/opportunities' },
		{ label: 'Pipeline', href: '/partner/crm/pipeline' },
		{ label: 'Clients', href: '/partner/clients' },
		{ label: 'Delivery', href: '/partner/delivery' },
		{ label: 'Commissions', href: '/partner/finance/commissions' },
		{ label: 'Support', href: '/partner/support' },
		{ label: 'Team', href: '/partner/team' },
		{ label: 'Settings', href: '/partner/settings' }
	];

	const clientNav: NavItem[] = [
		{ label: 'Dashboard', href: '/portal/dashboard' },
		{ label: 'Agents', href: '/portal/agents' },
		{ label: 'Exceptions', href: '/portal/exceptions' },
		{ label: 'Reports', href: '/portal/reports' },
		{ label: 'Support', href: '/portal/support' },
		{ label: 'Settings', href: '/portal/settings/users' },
		{ label: 'Billing', href: '/portal/billing' }
	];

	let nav = $derived($orgType === 'nexys' ? nexysNav : $orgType === 'partner' ? partnerNav : clientNav);
	let currentPath = $derived($page.url.pathname);

	/** Avoid matching `/portal/agent` when active href is `/portal/agents`. */
	function navItemActive(href: string, path: string): boolean {
		if (path === href) return true;
		const prefix = href.endsWith('/') ? href : `${href}/`;
		return path.startsWith(prefix);
	}
</script>

<aside class="w-60 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0">
	<div class="p-4">
		<h1 class="text-lg font-bold brand-gradient-text">nexys</h1>
	</div>

	<Separator />

	<nav class="flex-1 overflow-y-auto py-2">
		{#each nav as item}
			<a
				href={item.href}
				class="flex items-center gap-3 px-4 py-2 mx-2 rounded text-sm transition-colors
					{navItemActive(item.href, currentPath)
					? 'bg-cyan/10 text-cyan font-medium'
					: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
			>
				{item.label}
			</a>
		{/each}
	</nav>
</aside>
