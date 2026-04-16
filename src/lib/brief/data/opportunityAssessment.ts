import { briefColors } from '$lib/brief/briefColors';

export type BriefColors = typeof briefColors;

export type Criterion = {
	question: string;
	guidance: string;
	score: number | null;
	notes: string;
};

export type AssessmentSection = {
	name: string;
	color: string;
	description: string;
	criteria: Criterion[];
};

export type ScoringGuideEntry = {
	score: number;
	label: string;
	color: string;
	description: string;
};

export type ThresholdBand = {
	min: number;
	label: string;
	color: string;
	action: string;
};

export const assessment = {
	client: '[Client Name]',
	opportunity: '[Process/Opportunity Name]',
	assessedBy: '[Your Name]',
	date: '[Date]',

	sections: [
		{
			name: 'Process Fit',
			color: briefColors.cyan,
			description: 'Is this process suitable for AI automation?',
			criteria: [
				{
					question: 'Is the process repetitive and rule-based?',
					guidance: 'AI works best on tasks done many times with consistent logic',
					score: null,
					notes: ''
				},
				{
					question: 'Is there clear input and output?',
					guidance: 'Document in, decision out. Data in, report out. Clear boundaries.',
					score: null,
					notes: ''
				},
				{
					question: 'Is the volume high enough to justify automation?',
					guidance: 'At least 50+ instances per month, or very high value per instance',
					score: null,
					notes: ''
				},
				{
					question: 'Is human judgment required, or is it mostly pattern matching?',
					guidance: 'Some judgment is fine (human-in-loop), but pure judgment calls are poor fit',
					score: null,
					notes: ''
				},
				{
					question: 'Are the rules documented or can they be extracted?',
					guidance: 'If experts cannot explain their logic, AI will struggle too',
					score: null,
					notes: ''
				}
			]
		},
		{
			name: 'Data Readiness',
			color: briefColors.purple,
			description: 'Is the data available and usable?',
			criteria: [
				{
					question: 'Is the input data digital and accessible?',
					guidance: 'PDFs, emails, database records. Not handwritten notes or verbal requests.',
					score: null,
					notes: ''
				},
				{
					question: 'Is the data quality acceptable?',
					guidance: 'Mostly complete, reasonably consistent, not riddled with errors',
					score: null,
					notes: ''
				},
				{
					question: 'Are source systems accessible via API or export?',
					guidance: 'Modern APIs ideal. CSV export workable. Screen scraping is a red flag.',
					score: null,
					notes: ''
				},
				{
					question: 'Is there enough historical data for testing?',
					guidance: 'Need 100+ examples with known correct outputs for validation',
					score: null,
					notes: ''
				}
			]
		},
		{
			name: 'Integration Complexity',
			color: briefColors.pink,
			description: 'How hard will it be to connect to existing systems?',
			criteria: [
				{
					question: 'How many systems need to be integrated?',
					guidance: '1-2 is easy. 3-4 is moderate. 5+ is complex.',
					score: null,
					notes: ''
				},
				{
					question: 'Are the systems modern with APIs?',
					guidance: 'REST APIs good. SOAP workable. Legacy mainframe is hard.',
					score: null,
					notes: ''
				},
				{
					question: 'Is there IT support for integration work?',
					guidance: 'Need someone who can provide credentials, access, documentation',
					score: null,
					notes: ''
				},
				{
					question: 'Are there security/compliance constraints?',
					guidance: 'Some constraints are fine. Extreme lockdown may block the project.',
					score: null,
					notes: ''
				}
			]
		},
		{
			name: 'Business Value',
			color: briefColors.orange,
			description: 'Is the ROI compelling?',
			criteria: [
				{
					question: 'What is the current cost of this process?',
					guidance: 'Calculate: (time per instance) x (volume) x (hourly cost)',
					score: null,
					notes: ''
				},
				{
					question: 'What is the cost of errors in this process?',
					guidance: 'Rework, customer impact, compliance risk, opportunity cost',
					score: null,
					notes: ''
				},
				{
					question: 'Is there strategic value beyond cost savings?',
					guidance: 'Speed to market, customer experience, employee satisfaction, scale',
					score: null,
					notes: ''
				},
				{
					question: 'Will stakeholders see and feel the improvement?',
					guidance: 'Visible wins build momentum. Back-office savings are harder to celebrate.',
					score: null,
					notes: ''
				}
			]
		},
		{
			name: 'Organisational Readiness',
			color: briefColors.cyan,
			description: 'Is the organisation ready for this change?',
			criteria: [
				{
					question: 'Is there executive sponsorship?',
					guidance: 'Someone with budget and authority who wants this to succeed',
					score: null,
					notes: ''
				},
				{
					question: 'Will affected staff support or resist?',
					guidance: 'Change management is real. Resistance can kill good projects.',
					score: null,
					notes: ''
				},
				{
					question: 'Is there tolerance for iteration?',
					guidance: 'AI improves over time. Need patience for tuning, not perfection on day 1.',
					score: null,
					notes: ''
				},
				{
					question: 'Is there capacity to participate in the project?',
					guidance: 'Client SMEs needed for requirements, testing, feedback',
					score: null,
					notes: ''
				}
			]
		}
	] satisfies AssessmentSection[],

	scoringGuide: [
		{ score: 3, label: 'Strong', color: briefColors.green, description: 'Clear yes, no concerns' },
		{ score: 2, label: 'Moderate', color: briefColors.cyan, description: 'Workable with some effort' },
		{ score: 1, label: 'Weak', color: briefColors.orange, description: 'Possible but challenging' },
		{ score: 0, label: 'Blocker', color: briefColors.red, description: 'Significant risk or gap' }
	] satisfies ScoringGuideEntry[],

	thresholds: {
		go: { min: 50, label: 'Strong Fit', color: briefColors.green, action: 'Proceed to proposal' },
		conditional: {
			min: 35,
			label: 'Conditional Fit',
			color: briefColors.orange,
			action: 'Address gaps before proceeding'
		},
		noGo: { min: 0, label: 'Poor Fit', color: briefColors.red, action: 'Decline or revisit scope' }
	} satisfies Record<string, ThresholdBand>
};
