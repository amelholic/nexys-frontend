export const report = {
    client: 'Acme Logistics',
    agent: 'Invoice Processing Agent',
    agentId: 'AGT-001',
    period: 'February 2026',
    preparedBy: 'AI Flow',
    date: '2026-03-03',
    
    summary: {
      status: 'Healthy',
      headline: 'Strong performance with 97% accuracy. Processing volume up 15% from January. Two minor incidents resolved within SLA.',
    },
    
    kpis: [
      { name: 'Documents Processed', value: '2,847', target: '2,500', change: '+15%', status: 'above' },
      { name: 'Accuracy Rate', value: '97.2%', target: '95%', change: '+0.3%', status: 'above' },
      { name: 'Auto-Approval Rate', value: '72%', target: '70%', change: '+4%', status: 'above' },
      { name: 'Avg Processing Time', value: '1.8 min', target: '< 2 min', change: '-12%', status: 'above' },
      { name: 'Exception Rate', value: '14%', target: '< 15%', change: '-2%', status: 'above' },
      { name: 'Cost per Document', value: '$2.45', target: '< $3', change: '-8%', status: 'above' },
    ],
    
    volumeTrend: [
      { week: 'Week 1', processed: 680, exceptions: 95 },
      { week: 'Week 2', processed: 712, exceptions: 102 },
      { week: 'Week 3', processed: 698, exceptions: 88 },
      { week: 'Week 4', processed: 757, exceptions: 112 },
    ],
    
    exceptionBreakdown: [
      { category: 'Missing PO reference', count: 142, pct: '36%', trend: 'stable' },
      { category: 'Amount mismatch', count: 98, pct: '25%', trend: 'down' },
      { category: 'New vendor', count: 67, pct: '17%', trend: 'up' },
      { category: 'Poor scan quality', count: 52, pct: '13%', trend: 'down' },
      { category: 'Other', count: 38, pct: '9%', trend: 'stable' },
    ],
    
    costBreakdown: [
      { category: 'LLM API (Claude)', amount: 4200, pct: '60%' },
      { category: 'LLM API (GPT-4 fallback)', amount: 420, pct: '6%' },
      { category: 'Compute (Lambda/ECS)', amount: 1400, pct: '20%' },
      { category: 'Storage & Data', amount: 560, pct: '8%' },
      { category: 'Other', amount: 420, pct: '6%' },
    ],
    totalCost: 7000,
    
    incidents: [
      { 
        id: 'INC-042', 
        date: '2026-02-08', 
        severity: 'Medium',
        description: 'SAP API timeout causing processing delays',
        resolution: 'Increased timeout threshold, added retry logic',
        downtime: '45 min',
        impact: '23 invoices delayed'
      },
      { 
        id: 'INC-043', 
        date: '2026-02-19', 
        severity: 'Low',
        description: 'False positives on duplicate detection',
        resolution: 'Adjusted matching algorithm threshold',
        downtime: '0 min',
        impact: '8 invoices flagged incorrectly'
      },
    ],
    
    improvements: [
      { 
        change: 'Added handling for handwritten invoices',
        date: '2026-02-19',
        impact: 'Now processing ~50 additional invoices/month that previously went to manual queue'
      },
      { 
        change: 'Improved PO matching for partial deliveries',
        date: '2026-02-12',
        impact: 'Reduced "amount mismatch" exceptions by 18%'
      },
    ],
    
    recommendations: [
      {
        priority: 'High',
        recommendation: 'Add multi-currency support for APAC vendors',
        rationale: 'Currently sending 120+ foreign currency invoices to manual queue monthly',
        estimatedImpact: 'Could increase auto-approval by 4%',
        effort: '2 weeks',
      },
      {
        priority: 'Medium',
        recommendation: 'Integrate with new vendor onboarding workflow',
        rationale: 'New vendor exceptions are increasing; integration would auto-create vendor records',
        estimatedImpact: 'Reduce new vendor exceptions by 80%',
        effort: '3 weeks',
      },
      {
        priority: 'Low',
        recommendation: 'Add support for credit notes',
        rationale: 'Currently not handled; low volume but growing',
        estimatedImpact: 'Handle ~30 additional documents/month',
        effort: '1 week',
      },
    ],
    
    nextMonth: {
      plannedWork: [
        'Multi-currency support implementation',
        'Q1 model evaluation and potential upgrade',
        'Performance optimization for peak periods',
      ],
      risks: [
        'Vendor API maintenance scheduled for March 15-16',
        'Expected 20% volume increase due to quarter-end',
      ],
    },
  };
