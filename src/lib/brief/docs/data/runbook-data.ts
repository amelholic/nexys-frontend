export const runbook = {
    agent: 'Invoice Processing Agent',
    agentId: 'AGT-001',
    version: '1.0',
    date: '2026-03-01',
    owner: 'AI Flow',
    client: 'Client Name',
    
    overview: {
      description: 'Operational procedures for deploying, monitoring, maintaining, and troubleshooting the Invoice Processing Agent.',
      environment: 'AWS ap-southeast-2 (Sydney)',
      criticalSystems: ['Agent Runtime (ECS)', 'SAP Connector', 'Email Monitor (Lambda)', 'Vector Store (OpenSearch)'],
    },
    
    contacts: {
      oncall: [
        { role: 'L1 Support', team: 'Client IT Ops', contact: 'itops@client.com', hours: '24/7' },
        { role: 'L2 Support', team: 'AI Flow', contact: 'support@nexys.au', hours: 'Business hours' },
        { role: 'L3 Emergency', team: 'AI Flow', contact: 'urgent@nexys.au / 04XX XXX XXX', hours: '24/7 P1 only' },
      ],
      escalation: 'L1 → L2 (30 min) → L3 (P1 only, 1 hour)',
    },
    
    healthChecks: [
      { check: 'Agent service running', endpoint: 'ECS > invoice-agent-service > Tasks', expected: '1+ RUNNING tasks', frequency: 'Continuous' },
      { check: 'Health endpoint', endpoint: 'https://agent.internal/health', expected: '200 OK', frequency: 'Every 1 min' },
      { check: 'Processing queue', endpoint: 'CloudWatch > invoice-queue-depth', expected: '< 50 items', frequency: 'Every 5 min' },
      { check: 'Error rate', endpoint: 'CloudWatch > invoice-agent-errors', expected: '< 5%', frequency: 'Every 5 min' },
      { check: 'SAP connectivity', endpoint: 'CloudWatch > sap-connector-health', expected: '200 OK', frequency: 'Every 1 min' },
      { check: 'Email monitor', endpoint: 'Lambda > email-monitor > Invocations', expected: '> 0 per hour', frequency: 'Every 15 min' },
    ],
    
    deployment: {
      prerequisites: [
        'All Go-Live Checklist items complete',
        'Staging tests passing',
        'Change request approved',
        'Rollback plan confirmed',
        'On-call notified',
      ],
      steps: [
        { step: 1, action: 'Create deployment ticket', detail: 'Log deployment in ServiceNow/Jira with version, time, approver', role: 'Deployer' },
        { step: 2, action: 'Verify staging', detail: 'Confirm latest build passing all tests in staging', role: 'Deployer' },
        { step: 3, action: 'Notify stakeholders', detail: 'Post in #invoice-agent Slack channel: "Deploying vX.X in 15 min"', role: 'Deployer' },
        { step: 4, action: 'Update task definition', detail: 'AWS Console > ECS > Task Definitions > invoice-agent > Create new revision with new image tag', role: 'Deployer' },
        { step: 5, action: 'Update service', detail: 'ECS > Services > invoice-agent-service > Update > Select new task definition > Force new deployment', role: 'Deployer' },
        { step: 6, action: 'Monitor rollout', detail: 'Watch Tasks tab until new task RUNNING and old task STOPPED', role: 'Deployer' },
        { step: 7, action: 'Verify health', detail: 'Check /health endpoint, CloudWatch dashboard, process 1-2 test invoices', role: 'Deployer' },
        { step: 8, action: 'Confirm deployment', detail: 'Post in Slack: "vX.X deployed successfully" or initiate rollback', role: 'Deployer' },
      ],
      estimatedTime: '15-30 minutes',
      rollbackWindow: '1 hour (if issues detected)',
    },
    
    rollback: {
      triggers: [
        'Health check failing after deployment',
        'Error rate > 10%',
        'Processing completely stopped',
        'Critical bug discovered',
        'Stakeholder request within rollback window',
      ],
      steps: [
        { step: 1, action: 'Announce rollback', detail: 'Post in Slack: "Rolling back vX.X due to [reason]"', role: 'Deployer' },
        { step: 2, action: 'Identify previous version', detail: 'ECS > Task Definitions > invoice-agent > Find last stable revision', role: 'Deployer' },
        { step: 3, action: 'Update service', detail: 'ECS > Services > invoice-agent-service > Update > Select previous task definition > Force new deployment', role: 'Deployer' },
        { step: 4, action: 'Monitor rollback', detail: 'Watch Tasks tab until old version RUNNING', role: 'Deployer' },
        { step: 5, action: 'Verify health', detail: 'Check /health, CloudWatch, process test invoice', role: 'Deployer' },
        { step: 6, action: 'Confirm rollback', detail: 'Post in Slack: "Rolled back to vX.X successfully"', role: 'Deployer' },
        { step: 7, action: 'Create incident', detail: 'Log incident for failed deployment, schedule post-mortem', role: 'Deployer' },
      ],
      estimatedTime: '10-15 minutes',
    },
    
    incidents: {
      severity: [
        { level: 'P1', name: 'Critical', definition: 'Agent completely down, no invoices processing', response: '15 min', resolution: '4 hours', notify: 'Immediate page to L2/L3' },
        { level: 'P2', name: 'High', definition: 'Degraded performance, partial outage, high error rate', response: '1 hour', resolution: '8 hours', notify: 'Slack alert, email to L2' },
        { level: 'P3', name: 'Medium', definition: 'Minor issue, workaround available', response: '4 hours', resolution: '24 hours', notify: 'Slack alert' },
        { level: 'P4', name: 'Low', definition: 'Cosmetic issue, enhancement request', response: 'Next business day', resolution: '5 days', notify: 'Ticket only' },
      ],
      responseProcess: [
        { phase: 'Detect', actions: ['Alert received or issue reported', 'Verify issue is real (not false positive)', 'Assess severity level'] },
        { phase: 'Respond', actions: ['Acknowledge incident', 'Assign incident commander', 'Start incident channel/call', 'Begin investigation'] },
        { phase: 'Mitigate', actions: ['Implement immediate fix or workaround', 'Communicate status to stakeholders', 'Monitor fix effectiveness'] },
        { phase: 'Resolve', actions: ['Confirm service restored', 'Verify no ongoing issues', 'Close incident channel'] },
        { phase: 'Review', actions: ['Schedule post-mortem (P1/P2)', 'Document root cause', 'Identify preventive measures', 'Update runbook if needed'] },
      ],
    },
    
    commonIssues: [
      {
        issue: 'Agent not processing invoices',
        symptoms: ['Queue depth increasing', 'No new invoices in SAP', 'Health check passing but no activity'],
        diagnosis: [
          'Check ECS task status - is it running?',
          'Check CloudWatch logs for errors',
          'Check email monitor Lambda - is it triggering?',
          'Check SAP connector health',
        ],
        resolution: [
          'If ECS task stopped: Restart service',
          'If Lambda not triggering: Check M365 connection, restart Lambda',
          'If SAP errors: Check SAP availability, verify credentials',
          'If no clear cause: Restart all components, escalate if persists',
        ],
        severity: 'P1 if complete outage, P2 if partial',
      },
      {
        issue: 'High error rate',
        symptoms: ['Error rate > 5% in CloudWatch', 'Many invoices going to exception queue', 'Alerts firing'],
        diagnosis: [
          'Check CloudWatch logs for error patterns',
          'Check if specific vendor or format causing issues',
          'Check if SAP returning errors',
          'Check if recent deployment',
        ],
        resolution: [
          'If bad deployment: Rollback',
          'If SAP issue: Escalate to SAP admin',
          'If specific format: Add to exception handling, tune prompt',
          'If transient: Monitor, may self-resolve',
        ],
        severity: 'P2',
      },
      {
        issue: 'Slow processing',
        symptoms: ['Latency > 5 minutes per invoice', 'Queue building up', 'Users complaining'],
        diagnosis: [
          'Check LLM API latency in CloudWatch',
          'Check SAP response times',
          'Check if volume spike',
          'Check CPU/memory utilization',
        ],
        resolution: [
          'If LLM slow: Check Anthropic status, consider fallback',
          'If SAP slow: Escalate to SAP admin',
          'If volume spike: Scale up ECS tasks',
          'If resource constrained: Increase task size',
        ],
        severity: 'P3',
      },
      {
        issue: 'SAP connector failing',
        symptoms: ['SAP health check failing', 'Errors mentioning SAP in logs', 'Invoices not appearing in ERP'],
        diagnosis: [
          'Check SAP system availability',
          'Check connector credentials (expired?)',
          'Check network connectivity to SAP',
          'Check SAP user permissions',
        ],
        resolution: [
          'If SAP down: Wait for SAP team, invoices will queue',
          'If credentials expired: Rotate in Secrets Manager, restart connector',
          'If network issue: Check VPC, security groups',
          'If permissions: Escalate to SAP admin',
        ],
        severity: 'P1 if SAP completely unreachable, P2 otherwise',
      },
    ],
    
    maintenance: {
      scheduled: [
        { task: 'Review CloudWatch logs', frequency: 'Daily', owner: 'L1', duration: '15 min' },
        { task: 'Check exception queue trends', frequency: 'Daily', owner: 'L1', duration: '10 min' },
        { task: 'Review cost dashboard', frequency: 'Weekly', owner: 'L2', duration: '15 min' },
        { task: 'Rotate secrets/credentials', frequency: 'Quarterly', owner: 'L2', duration: '1 hour' },
        { task: 'Security patching', frequency: 'Monthly', owner: 'L2', duration: '2 hours' },
        { task: 'Prompt/model evaluation', frequency: 'Quarterly', owner: 'L3', duration: '1 day' },
        { task: 'Disaster recovery test', frequency: 'Annually', owner: 'L2/L3', duration: '4 hours' },
      ],
      changeManagement: [
        'All changes require ticket in ServiceNow/Jira',
        'Production changes require approval from client IT manager',
        'Deploy during low-traffic periods when possible',
        'Notify stakeholders 24 hours in advance for planned changes',
        'Emergency changes: notify immediately, document after',
      ],
    },
    
    disasterRecovery: {
      rpo: '1 hour (max data loss)',
      rto: '4 hours (max downtime)',
      backups: [
        { component: 'DynamoDB (state)', method: 'Point-in-time recovery', retention: '35 days' },
        { component: 'OpenSearch (vectors)', method: 'Automated snapshots', retention: '14 days' },
        { component: 'S3 (documents)', method: 'Cross-region replication', retention: 'Indefinite' },
        { component: 'Secrets Manager', method: 'Multi-region', retention: 'N/A' },
      ],
      recoveryProcedure: [
        'Assess extent of failure',
        'If single component: restore from backup, restart',
        'If region failure: failover to secondary region (if configured)',
        'If data corruption: restore from point-in-time backup',
        'Verify data integrity after restoration',
        'Notify stakeholders of any data loss',
      ],
    },
};
