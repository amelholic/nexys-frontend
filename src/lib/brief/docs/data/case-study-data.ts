import { briefColors as c } from '$lib/brief/briefColors';

export const caseStudy = {
    // Header
    title: 'Invoice Processing Automation',
    client: 'Coastal Logistics',
    industry: 'Transport & Logistics',
    location: 'Perth, Western Australia',
    date: 'March 2026',
    
    // Hero stats
    heroStats: [
      { value: '85%', label: 'Reduction in processing time' },
      { value: '$180K', label: 'Annual cost savings' },
      { value: '5 mo', label: 'Payback period' },
    ],
    
    // Executive summary
    summary: 'Coastal Logistics was drowning in paperwork. Their finance team spent 6+ hours daily processing invoices manually, with an 8% error rate causing payment delays and vendor friction. We deployed an AI agent that now handles 70% of invoices automatically, freeing the team to focus on exceptions and strategic work.',
    
    // The Challenge
    challenge: {
      context: 'Coastal Logistics is a mid-sized freight and logistics company handling 2,000+ invoices monthly from 150+ vendors. Their manual invoice processing was a significant bottleneck.',
      painPoints: [
        {
          problem: 'Time-consuming manual entry',
          detail: 'Each invoice required 15 minutes of manual data entry, verification, and routing',
          impact: '500+ hours per month spent on data entry',
        },
        {
          problem: 'High error rate',
          detail: '8% of invoices had data entry errors requiring rework',
          impact: 'Delayed payments, vendor complaints, duplicate payments',
        },
        {
          problem: 'Slow approval cycle',
          detail: 'Invoices sat in queues waiting for manual matching and approval',
          impact: '3-day average from receipt to approval',
        },
        {
          problem: 'Staff frustration',
          detail: 'Skilled finance staff spending majority of time on repetitive work',
          impact: 'Low morale, difficulty retaining talent',
        },
      ],
      quote: {
        text: 'We knew there had to be a better way. Our team was buried in invoices and it was affecting everything from vendor relationships to month-end close.',
        author: 'Sarah Chen',
        role: 'Finance Director, Coastal Logistics',
      },
    },
    
    // The Solution
    solution: {
      approach: 'We designed and built an AI agent that monitors the invoices inbox, extracts data from incoming documents, matches to purchase orders, validates amounts, and routes for appropriate action - all without human intervention for routine cases.',
      capabilities: [
        {
          name: 'Document Intelligence',
          description: 'Extracts vendor, amounts, line items, and dates from any invoice format - PDF, image, or email',
        },
        {
          name: 'Smart PO Matching',
          description: 'Automatically matches invoices to purchase orders, handling partial deliveries and price variations',
        },
        {
          name: 'Validation Engine',
          description: 'Checks amounts, tax calculations, vendor details, and compliance rules before approval',
        },
        {
          name: 'Intelligent Routing',
          description: 'Auto-approves routine invoices under $5K, routes exceptions to the right person with full context',
        },
        {
          name: 'Audit Trail',
          description: 'Every decision logged with reasoning, supporting compliance and month-end review',
        },
      ],
      architecture: {
        components: ['Email Monitor', 'Document Processor', 'AI Agent', 'SAP Connector', 'Notification Service'],
        integrations: ['Microsoft 365', 'SAP S/4HANA', 'SharePoint', 'Slack'],
      },
      timeline: [
        { phase: 'Discovery', duration: '2 weeks', activities: 'Process mapping, requirements, success criteria' },
        { phase: 'Design', duration: '2 weeks', activities: 'Agent spec, integration design, test planning' },
        { phase: 'Build', duration: '6 weeks', activities: 'Development, testing, refinement' },
        { phase: 'Deploy', duration: '2 weeks', activities: 'Pilot, tuning, full rollout' },
      ],
    },
    
    // The Results
    results: {
      summary: 'The agent went live in March 2026 and delivered immediate, measurable impact.',
      metrics: [
        { 
          metric: 'Processing Time', 
          before: '15 min/invoice', 
          after: '< 2 min', 
          improvement: '85% reduction',
          color: c.cyan,
        },
        { 
          metric: 'Auto-approval Rate', 
          before: '0%', 
          after: '72%', 
          improvement: 'New capability',
          color: c.purple,
        },
        { 
          metric: 'Accuracy', 
          before: '92%', 
          after: '97%', 
          improvement: '5% improvement',
          color: c.green,
        },
        { 
          metric: 'Approval Cycle', 
          before: '3 days', 
          after: 'Same day', 
          improvement: '3x faster',
          color: c.pink,
        },
        { 
          metric: 'Staff Time on Invoices', 
          before: '6 hrs/day', 
          after: '1.5 hrs/day', 
          improvement: '75% reduction',
          color: c.orange,
        },
        { 
          metric: 'Cost per Invoice', 
          before: '$12', 
          after: '$3', 
          improvement: '75% reduction',
          color: c.cyan,
        },
      ],
      financialImpact: {
        annualSavings: 180000,
        projectCost: 75000,
        paybackMonths: 5,
        threeYearROI: '620%',
      },
      qualitative: [
        'Finance team now focuses on analysis and vendor relationships, not data entry',
        'Vendors receive faster payments, improving relationships',
        'Month-end close reduced by 2 days',
        'Full audit trail simplifies compliance',
        'Scalable solution handles growth without adding headcount',
      ],
      quote: {
        text: 'The ROI was obvious from month one. But honestly, the biggest win is seeing my team actually enjoy their work again. They are doing finance, not data entry.',
        author: 'Sarah Chen',
        role: 'Finance Director, Coastal Logistics',
      },
    },
    
    // Lessons & Next Steps
    lessonsLearned: [
      'Start with a well-defined, high-volume process for quick wins',
      'Invest time upfront in understanding edge cases',
      'Plan for human oversight - the goal is augmentation, not replacement',
      'Measure what matters to the business, not just technical metrics',
    ],
    
    nextSteps: [
      'Phase 2: Extend to credit notes and multi-currency invoices',
      'Phase 3: Purchase order automation',
      'Phase 4: Vendor onboarding workflow',
    ],
    
    // About AI Flow
    aboutBrand: 'AI Flow builds AI agents that automate repetitive business processes. We are a Perth-based consultancy with 20 years of enterprise software experience, now applying that expertise to practical AI automation.',
  };
