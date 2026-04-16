export const handover = {
    client: 'Acme Logistics',
    project: 'Invoice Processing Automation',
    agentName: 'Invoice Processing Agent',
    agentId: 'AGT-001',
    version: '1.0',
    goLiveDate: '2026-03-01',
    preparedBy: 'AI Flow',
    date: '2026-03-05',
    
    executiveSummary: 'This document provides everything you need to understand, operate, and support the Invoice Processing Agent deployed on 1 March 2026. The agent automatically processes incoming invoices, matches them to purchase orders, validates data, and routes for approval. It is currently processing approximately 100 invoices per day with 97% accuracy.',
    
    whatWasBuilt: {
      description: 'An AI-powered agent that automates the end-to-end invoice processing workflow.',
      capabilities: [
        'Monitors invoices@acme.com inbox for incoming invoices',
        'Extracts data from PDF and image invoices using OCR and LLM',
        'Matches invoices to purchase orders in SAP',
        'Validates amounts, tax calculations, and vendor details',
        'Routes compliant invoices for auto-approval (under $5,000)',
        'Flags exceptions for human review with clear explanations',
        'Creates invoice records in SAP with full audit trail',
        'Sends daily summary reports to finance team',
      ],
      notIncluded: [
        'Credit note processing (Phase 2)',
        'Multi-currency invoices (Phase 2)',
        'Vendor onboarding automation',
        'Payment processing',
      ],
    },
    
    architecture: {
      components: [
        { name: 'Invoice Agent', type: 'AI Agent', description: 'Core processing logic', location: 'AWS ECS' },
        { name: 'Document Processor', type: 'Service', description: 'OCR and extraction', location: 'AWS Lambda' },
        { name: 'SAP Connector', type: 'MCP Server', description: 'ERP integration', location: 'AWS ECS' },
        { name: 'Email Monitor', type: 'Service', description: 'Inbox monitoring', location: 'AWS Lambda' },
        { name: 'Vector Store', type: 'Database', description: 'Knowledge base', location: 'OpenSearch' },
        { name: 'State Store', type: 'Database', description: 'Agent memory', location: 'DynamoDB' },
      ],
      integrations: [
        { system: 'SAP ERP', direction: 'Read/Write', data: 'POs, Vendors, Invoices' },
        { system: 'Microsoft 365', direction: 'Read', data: 'Email, Attachments' },
        { system: 'SharePoint', direction: 'Read/Write', data: 'Invoice archive' },
        { system: 'Slack', direction: 'Write', data: 'Notifications' },
      ],
    },
    
    howItWorks: {
      workflow: [
        { step: 1, name: 'Invoice Arrival', description: 'Email arrives at invoices@acme.com or file uploaded to SharePoint' },
        { step: 2, name: 'Document Extraction', description: 'Agent extracts text and structure from PDF/image' },
        { step: 3, name: 'Data Extraction', description: 'LLM extracts vendor, amounts, line items, dates' },
        { step: 4, name: 'PO Matching', description: 'Agent searches SAP for matching purchase order' },
        { step: 5, name: 'Validation', description: 'Checks amounts, tax, vendor details against rules' },
        { step: 6, name: 'Routing Decision', description: 'Auto-approve, manual review, or exception' },
        { step: 7, name: 'ERP Update', description: 'Creates invoice record in SAP' },
        { step: 8, name: 'Notification', description: 'Alerts sent for exceptions, daily summary generated' },
      ],
      processingTime: 'Average 1.8 minutes per invoice',
      operatingHours: '24/7 (invoices processed as they arrive)',
    },
    
    accessDetails: {
      dashboards: [
        { name: 'Agent Dashboard', url: 'https://agents.acme.internal/invoice', purpose: 'Monitor agent activity and performance' },
        { name: 'CloudWatch', url: 'AWS Console > CloudWatch > Dashboards > Invoice-Agent', purpose: 'Technical metrics and logs' },
        { name: 'Cost Dashboard', url: 'https://agents.acme.internal/costs', purpose: 'LLM and infrastructure costs' },
      ],
      credentials: [
        { system: 'Agent Dashboard', access: 'SSO with Acme credentials', contact: 'IT Service Desk' },
        { system: 'AWS Console', access: 'Federated access via Acme SSO', contact: 'Cloud Team' },
        { system: 'SAP Service Account', access: 'svc-invoice-agent@acme.com', contact: 'SAP Admin' },
      ],
    },
    
    supportModel: {
      levels: [
        { level: 'L1', description: 'Basic monitoring, restart services, escalate issues', owner: 'Acme IT Operations', hours: '24/7' },
        { level: 'L2', description: 'Configuration changes, prompt tuning, minor fixes', owner: 'Acme IT + AI Flow', hours: 'Business hours' },
        { level: 'L3', description: 'Code changes, architecture updates, major issues', owner: 'AI Flow', hours: 'Per support agreement' },
      ],
      contacts: [
        { role: 'AI Flow Support', email: 'support@aiflow.example', phone: '(08) XXXX XXXX', hours: 'Mon-Fri 8am-6pm AWST' },
        { role: 'Emergency', email: 'urgent@aiflow.example', phone: '04XX XXX XXX', hours: '24/7 for P1 issues' },
      ],
      sla: {
        p1: { definition: 'Agent down, no invoices processing', response: '1 hour', resolution: '4 hours' },
        p2: { definition: 'Degraded performance or partial outage', response: '4 hours', resolution: '24 hours' },
        p3: { definition: 'Minor issue, workaround available', response: '1 business day', resolution: '5 business days' },
      },
    },
    
    commonIssues: [
      { 
        issue: 'Invoices not being processed',
        symptoms: 'Emails piling up, no new invoices in SAP',
        diagnosis: 'Check Email Monitor Lambda in CloudWatch',
        resolution: 'Restart Lambda if stuck, check M365 connection'
      },
      { 
        issue: 'High exception rate',
        symptoms: '>20% invoices going to manual queue',
        diagnosis: 'Review exception reasons in dashboard',
        resolution: 'May indicate new vendor or format; contact L2'
      },
      { 
        issue: 'Slow processing',
        symptoms: 'Invoices taking >5 minutes',
        diagnosis: 'Check SAP response times in CloudWatch',
        resolution: 'Often SAP-side; escalate to SAP admin'
      },
      { 
        issue: 'Incorrect data extraction',
        symptoms: 'Wrong amounts or vendors in SAP',
        diagnosis: 'Review agent logs for specific invoice',
        resolution: 'May need prompt tuning; contact L2/L3'
      },
    ],
    
    runbook: {
      restart: [
        'Navigate to AWS Console > ECS > Clusters > invoice-agent',
        'Select invoice-agent-service',
        'Click Update Service',
        'Check "Force new deployment"',
        'Click Update Service',
        'Monitor Tasks tab until new task is RUNNING',
      ],
      rollback: [
        'Navigate to AWS Console > ECS > Task Definitions > invoice-agent',
        'Select previous stable version (check release notes)',
        'Click Create new revision',
        'Update service to use this revision',
        'Monitor for stability',
      ],
      scaleUp: [
        'Navigate to AWS Console > ECS > Services > invoice-agent-service',
        'Click Update Service',
        'Increase Desired count (max 5)',
        'Click Update Service',
      ],
    },
    
    documentation: [
      { name: 'Agent Design Card', location: 'SharePoint > Projects > Invoice Agent > Design', description: 'Full agent specification' },
      { name: 'Architecture Blueprint', location: 'SharePoint > Projects > Invoice Agent > Design', description: 'Technical architecture' },
      { name: 'Prompt Cards', location: 'SharePoint > Projects > Invoice Agent > Build', description: 'Current prompts and versions' },
      { name: 'Evaluation Suite', location: 'SharePoint > Projects > Invoice Agent > Test', description: 'Test cases and golden dataset' },
      { name: 'Go-Live Checklist', location: 'SharePoint > Projects > Invoice Agent > Deploy', description: 'Deployment verification' },
      { name: 'Monthly Reports', location: 'SharePoint > Projects > Invoice Agent > Reports', description: 'Performance history' },
    ],
    
    knowledgeTransfer: [
      { session: 'Agent Overview', date: '2026-02-25', attendees: 'IT Ops, Finance', recording: 'SharePoint > Training' },
      { session: 'Technical Deep-Dive', date: '2026-02-26', attendees: 'IT Ops, Cloud Team', recording: 'SharePoint > Training' },
      { session: 'Monitoring & Troubleshooting', date: '2026-02-27', attendees: 'IT Ops', recording: 'SharePoint > Training' },
      { session: 'Business User Training', date: '2026-02-28', attendees: 'Finance Team', recording: 'SharePoint > Training' },
    ],
  };
