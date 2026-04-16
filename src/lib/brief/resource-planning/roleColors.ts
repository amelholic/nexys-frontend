/** Role colours — aligned with enhancement brief; used across resource-planning pages. */
export const roleColors = {
	sales: '#F59E0B',
	deliveryLead: '#00D4FF',
	aiEngineer: '#8B5CF6',
	integrationDev: '#10B981',
	solutionsArchitect: '#EC4899',
	operations: '#64748B'
} as const;

export type RoleColorKey = keyof typeof roleColors;
