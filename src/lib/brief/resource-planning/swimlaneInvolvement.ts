/** Which roles are materially involved in each phase (for swimlane summary). */
export const phaseRoleIds: Record<string, string[]> = {
	sell: ['sales', 'delivery-lead'],
	discovery: ['delivery-lead', 'ai-engineer', 'integration-dev'],
	design: ['delivery-lead', 'solutions-architect', 'ai-engineer', 'integration-dev'],
	build: ['ai-engineer', 'integration-dev', 'delivery-lead'],
	test: ['ai-engineer', 'delivery-lead'],
	deploy: ['integration-dev', 'delivery-lead', 'operations'],
	hypercare: ['operations', 'ai-engineer', 'integration-dev', 'delivery-lead'],
	handover: ['delivery-lead', 'ai-engineer', 'integration-dev', 'operations', 'sales'],
	support: ['operations', 'delivery-lead']
};

export const swimlaneRoles: { id: string; name: string }[] = [
	{ id: 'sales', name: 'Sales / BD' },
	{ id: 'delivery-lead', name: 'Delivery Lead' },
	{ id: 'solutions-architect', name: 'Solutions Architect' },
	{ id: 'ai-engineer', name: 'AI Engineer' },
	{ id: 'integration-dev', name: 'Integration Dev' },
	{ id: 'operations', name: 'Operations' }
];
