import { briefColors as c } from '$lib/brief/briefColors';

export type QaItem = { id: number; item: string; owner: string; critical: boolean };
export type QaSection = { id: string; name: string; phase: string; color: string; items: QaItem[] };

export const qaChecklistSections: QaSection[] = [
	{
		id: 'discovery',
		name: 'Discovery & Design',
		phase: 'Pre-Build',
		color: c.purple,
		items: [
			{ id: 1, item: 'Discovery notes documented and signed off by client', owner: 'Delivery Lead', critical: true },
			{ id: 2, item: 'Success criteria defined and agreed', owner: 'Delivery Lead', critical: true },
			{ id: 3, item: 'Process flow documented with decision points', owner: 'Delivery Lead', critical: false },
			{ id: 4, item: 'Sample documents collected (50+ representative samples)', owner: 'AI Engineer', critical: true },
			{ id: 5, item: 'Exception scenarios identified and documented', owner: 'Delivery Lead', critical: false },
			{ id: 6, item: 'Integration requirements confirmed', owner: 'Integration Dev', critical: true },
			{ id: 7, item: 'Architecture blueprint approved', owner: 'Solutions Architect', critical: true },
			{ id: 8, item: 'Data handling and security requirements confirmed', owner: 'Delivery Lead', critical: true }
		]
	},
	{
		id: 'ai',
		name: 'AI Agent Quality',
		phase: 'Build',
		color: c.cyan,
		items: [
			{ id: 1, item: 'Prompt cards completed with version history', owner: 'AI Engineer', critical: true },
			{ id: 2, item: 'Evaluation suite created with 100+ test cases', owner: 'AI Engineer', critical: true },
			{ id: 3, item: 'Edge cases identified and tested (20+ scenarios)', owner: 'AI Engineer', critical: true },
			{ id: 4, item: 'Accuracy meets target threshold (e.g., 95%+)', owner: 'AI Engineer', critical: true },
			{ id: 5, item: 'Confidence thresholds tuned and documented', owner: 'AI Engineer', critical: false },
			{ id: 6, item: 'Error handling implemented for low confidence', owner: 'AI Engineer', critical: true },
			{ id: 7, item: 'Processing time meets SLA requirements', owner: 'AI Engineer', critical: false },
			{ id: 8, item: 'Cost per transaction within budget', owner: 'AI Engineer', critical: false },
			{ id: 9, item: 'Prompt injection protections in place', owner: 'AI Engineer', critical: true },
			{ id: 10, item: 'Output validation implemented', owner: 'AI Engineer', critical: true }
		]
	},
	{
		id: 'integration',
		name: 'Integration Quality',
		phase: 'Build',
		color: c.orange,
		items: [
			{ id: 1, item: 'All integrations functional in staging', owner: 'Integration Dev', critical: true },
			{ id: 2, item: 'Authentication/credentials secure and documented', owner: 'Integration Dev', critical: true },
			{ id: 3, item: 'Error handling for API failures', owner: 'Integration Dev', critical: true },
			{ id: 4, item: 'Retry logic implemented', owner: 'Integration Dev', critical: false },
			{ id: 5, item: 'Rate limiting handled', owner: 'Integration Dev', critical: false },
			{ id: 6, item: 'Data transformation tested', owner: 'Integration Dev', critical: true },
			{ id: 7, item: 'Logging implemented for all operations', owner: 'Integration Dev', critical: true },
			{ id: 8, item: 'Secrets stored securely (Key Vault/Secrets Manager)', owner: 'Integration Dev', critical: true }
		]
	},
	{
		id: 'testing',
		name: 'Testing Complete',
		phase: 'Test',
		color: c.pink,
		items: [
			{ id: 1, item: 'Unit tests passing (90%+ coverage for critical paths)', owner: 'AI Engineer', critical: true },
			{ id: 2, item: 'Integration tests passing', owner: 'Integration Dev', critical: true },
			{ id: 3, item: 'End-to-end tests passing', owner: 'AI Engineer', critical: true },
			{ id: 4, item: 'Performance tests completed (load, throughput)', owner: 'Integration Dev', critical: false },
			{ id: 5, item: 'Security scan completed (no critical/high issues)', owner: 'Solutions Architect', critical: true },
			{ id: 6, item: 'UAT completed and signed off by client', owner: 'Delivery Lead', critical: true },
			{ id: 7, item: 'Regression testing after bug fixes', owner: 'AI Engineer', critical: false },
			{ id: 8, item: 'Test summary report generated', owner: 'AI Engineer', critical: false }
		]
	},
	{
		id: 'documentation',
		name: 'Documentation Complete',
		phase: 'Pre-Deploy',
		color: c.green,
		items: [
			{ id: 1, item: 'Runbook completed', owner: 'Integration Dev', critical: true },
			{ id: 2, item: 'Technical documentation up to date', owner: 'AI Engineer', critical: false },
			{ id: 3, item: 'Training guide completed', owner: 'Delivery Lead', critical: true },
			{ id: 4, item: 'User documentation / FAQ created', owner: 'Delivery Lead', critical: false },
			{ id: 5, item: 'Architecture diagrams current', owner: 'Solutions Architect', critical: false },
			{ id: 6, item: 'Known issues documented', owner: 'AI Engineer', critical: false },
			{ id: 7, item: 'Escalation contacts documented', owner: 'Delivery Lead', critical: true }
		]
	},
	{
		id: 'infra',
		name: 'Infrastructure Ready',
		phase: 'Pre-Deploy',
		color: c.cyan,
		items: [
			{ id: 1, item: 'Production environment provisioned', owner: 'Integration Dev', critical: true },
			{ id: 2, item: 'Production credentials configured', owner: 'Integration Dev', critical: true },
			{ id: 3, item: 'Monitoring dashboards set up', owner: 'Integration Dev', critical: true },
			{ id: 4, item: 'Alerting configured and tested', owner: 'Integration Dev', critical: true },
			{ id: 5, item: 'Logging/SIEM integration active', owner: 'Integration Dev', critical: false },
			{ id: 6, item: 'Backup procedures verified', owner: 'Integration Dev', critical: true },
			{ id: 7, item: 'Disaster recovery tested', owner: 'Integration Dev', critical: false },
			{ id: 8, item: 'SSL/TLS certificates valid', owner: 'Integration Dev', critical: true }
		]
	},
	{
		id: 'security',
		name: 'Security & Compliance',
		phase: 'Pre-Deploy',
		color: c.red,
		items: [
			{ id: 1, item: 'Security review completed', owner: 'Solutions Architect', critical: true },
			{ id: 2, item: 'Data encryption at rest verified', owner: 'Integration Dev', critical: true },
			{ id: 3, item: 'Data encryption in transit verified', owner: 'Integration Dev', critical: true },
			{ id: 4, item: 'Access controls implemented (RBAC)', owner: 'Integration Dev', critical: true },
			{ id: 5, item: 'Audit logging enabled', owner: 'Integration Dev', critical: true },
			{ id: 6, item: 'PII handling compliant with DPA', owner: 'Delivery Lead', critical: true },
			{ id: 7, item: 'Penetration test completed (if required)', owner: 'Solutions Architect', critical: false },
			{ id: 8, item: 'Client security requirements checklist completed', owner: 'Delivery Lead', critical: true }
		]
	},
	{
		id: 'golive',
		name: 'Go-Live Readiness',
		phase: 'Deploy',
		color: c.green,
		items: [
			{ id: 1, item: 'Go-live date confirmed with client', owner: 'Delivery Lead', critical: true },
			{ id: 2, item: 'Rollback plan documented and tested', owner: 'Integration Dev', critical: true },
			{ id: 3, item: 'Support team briefed', owner: 'Delivery Lead', critical: true },
			{ id: 4, item: 'Client users trained', owner: 'Delivery Lead', critical: true },
			{ id: 5, item: 'Communication plan ready (go-live announcement)', owner: 'Delivery Lead', critical: false },
			{ id: 6, item: 'Hypercare schedule confirmed', owner: 'Delivery Lead', critical: true },
			{ id: 7, item: 'Emergency contacts distributed', owner: 'Delivery Lead', critical: true },
			{ id: 8, item: 'First-day verification plan ready', owner: 'AI Engineer', critical: true }
		]
	}
];
