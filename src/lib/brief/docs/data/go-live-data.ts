import { briefColors as c } from '$lib/brief/briefColors';

export const checklist = {
    client: 'Client Name',
    project: 'Invoice Processing Agent',
    agentId: 'AGT-001',
    targetDate: '2026-03-01',
    preparedBy: 'AI Flow',
    version: '1.0',
    
    categories: [
      {
        name: 'Functional Readiness',
        color: c.cyan,
        items: [
          { id: 'F1', item: 'All acceptance criteria from Agent Design Card met', owner: 'Dev Lead', status: 'pending' },
          { id: 'F2', item: 'Golden dataset tests passing (>95% accuracy)', owner: 'QA', status: 'pending' },
          { id: 'F3', item: 'All critical user journeys tested end-to-end', owner: 'QA', status: 'pending' },
          { id: 'F4', item: 'Edge cases documented and handled', owner: 'Dev Lead', status: 'pending' },
          { id: 'F5', item: 'Fallback behavior tested and working', owner: 'QA', status: 'pending' },
          { id: 'F6', item: 'Error messages are clear and actionable', owner: 'Dev Lead', status: 'pending' },
        ]
      },
      {
        name: 'Integration Readiness',
        color: c.purple,
        items: [
          { id: 'I1', item: 'All API integrations tested in production environment', owner: 'Integration Lead', status: 'pending' },
          { id: 'I2', item: 'Authentication and credentials configured for production', owner: 'Integration Lead', status: 'pending' },
          { id: 'I3', item: 'Webhook endpoints registered and verified', owner: 'Integration Lead', status: 'pending' },
          { id: 'I4', item: 'Data mappings validated against production schemas', owner: 'Integration Lead', status: 'pending' },
          { id: 'I5', item: 'Retry and timeout logic tested', owner: 'Dev Lead', status: 'pending' },
          { id: 'I6', item: 'Integration monitoring dashboards configured', owner: 'Ops', status: 'pending' },
        ]
      },
      {
        name: 'Security & Compliance',
        color: c.pink,
        items: [
          { id: 'S1', item: 'Security review completed and signed off', owner: 'Security', status: 'pending' },
          { id: 'S2', item: 'Red team testing passed (prompt injection, jailbreak)', owner: 'Security', status: 'pending' },
          { id: 'S3', item: 'PII handling verified and compliant', owner: 'Security', status: 'pending' },
          { id: 'S4', item: 'Audit logging enabled and verified', owner: 'Ops', status: 'pending' },
          { id: 'S5', item: 'Data residency requirements confirmed', owner: 'Security', status: 'pending' },
          { id: 'S6', item: 'Access controls and permissions configured', owner: 'Security', status: 'pending' },
          { id: 'S7', item: 'Secrets rotated and stored securely', owner: 'Ops', status: 'pending' },
          { id: 'S8', item: 'Compliance documentation completed', owner: 'Project Lead', status: 'pending' },
        ]
      },
      {
        name: 'Performance & Reliability',
        color: c.orange,
        items: [
          { id: 'P1', item: 'Load testing completed at expected volume', owner: 'QA', status: 'pending' },
          { id: 'P2', item: 'Latency within acceptable thresholds', owner: 'Dev Lead', status: 'pending' },
          { id: 'P3', item: 'Auto-scaling configured and tested', owner: 'Ops', status: 'pending' },
          { id: 'P4', item: 'Circuit breakers and rate limits configured', owner: 'Dev Lead', status: 'pending' },
          { id: 'P5', item: 'Failover and disaster recovery tested', owner: 'Ops', status: 'pending' },
          { id: 'P6', item: 'Resource utilization within budget', owner: 'Ops', status: 'pending' },
        ]
      },
      {
        name: 'Observability',
        color: c.cyan,
        items: [
          { id: 'O1', item: 'Logging configured and shipping to central store', owner: 'Ops', status: 'pending' },
          { id: 'O2', item: 'Metrics dashboards created and accessible', owner: 'Ops', status: 'pending' },
          { id: 'O3', item: 'Alerting rules configured for critical issues', owner: 'Ops', status: 'pending' },
          { id: 'O4', item: 'Tracing enabled for request flow visibility', owner: 'Ops', status: 'pending' },
          { id: 'O5', item: 'Cost tracking and FinOps dashboards ready', owner: 'Ops', status: 'pending' },
          { id: 'O6', item: 'On-call rotation and escalation path defined', owner: 'Project Lead', status: 'pending' },
        ]
      },
      {
        name: 'Documentation',
        color: c.purple,
        items: [
          { id: 'D1', item: 'Agent Design Card finalized and approved', owner: 'Project Lead', status: 'pending' },
          { id: 'D2', item: 'Architecture Blueprint updated to as-built', owner: 'Dev Lead', status: 'pending' },
          { id: 'D3', item: 'Prompt Cards versioned and stored', owner: 'Dev Lead', status: 'pending' },
          { id: 'D4', item: 'Runbook completed (deployment, rollback, incidents)', owner: 'Ops', status: 'pending' },
          { id: 'D5', item: 'User training materials prepared', owner: 'Project Lead', status: 'pending' },
          { id: 'D6', item: 'API documentation published', owner: 'Dev Lead', status: 'pending' },
        ]
      },
      {
        name: 'Stakeholder Readiness',
        color: c.pink,
        items: [
          { id: 'K1', item: 'UAT completed and signed off by business owner', owner: 'Client', status: 'pending' },
          { id: 'K2', item: 'End users trained on new workflow', owner: 'Project Lead', status: 'pending' },
          { id: 'K3', item: 'Support team briefed on common issues', owner: 'Project Lead', status: 'pending' },
          { id: 'K4', item: 'Communication sent to affected users', owner: 'Client', status: 'pending' },
          { id: 'K5', item: 'Rollback plan communicated and agreed', owner: 'Project Lead', status: 'pending' },
          { id: 'K6', item: 'Success metrics and reporting cadence agreed', owner: 'Project Lead', status: 'pending' },
        ]
      },
      {
        name: 'Deployment',
        color: c.orange,
        items: [
          { id: 'X1', item: 'Production environment provisioned and configured', owner: 'Ops', status: 'pending' },
          { id: 'X2', item: 'CI/CD pipeline tested for production deployment', owner: 'Ops', status: 'pending' },
          { id: 'X3', item: 'Database migrations applied (if applicable)', owner: 'Dev Lead', status: 'pending' },
          { id: 'X4', item: 'Feature flags configured for gradual rollout', owner: 'Dev Lead', status: 'pending' },
          { id: 'X5', item: 'Smoke tests passing in production', owner: 'QA', status: 'pending' },
          { id: 'X6', item: 'Rollback procedure tested', owner: 'Ops', status: 'pending' },
        ]
      },
    ],
    
    signoffs: [
      { role: 'Technical Lead', name: '', date: '', signature: '' },
      { role: 'QA Lead', name: '', date: '', signature: '' },
      { role: 'Security', name: '', date: '', signature: '' },
      { role: 'Operations', name: '', date: '', signature: '' },
      { role: 'Project Lead', name: '', date: '', signature: '' },
      { role: 'Client Sponsor', name: '', date: '', signature: '' },
    ],
  };
