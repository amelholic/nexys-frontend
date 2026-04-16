export const promptCard = {
	agentName: 'Invoice Processing Agent',
	agentId: 'AGT-001',
	promptId: 'PRM-001-003',
	version: '1.3',
	status: 'Production',
	lastUpdated: '2026-02-19',
	updatedBy: 'A. Smith',
	changelog: [
		{ version: '1.3', date: '2026-02-19', change: 'Added handling for handwritten invoices', author: 'A. Smith' },
		{ version: '1.2', date: '2026-02-12', change: 'Improved PO matching accuracy for partial matches', author: 'A. Smith' },
		{ version: '1.1', date: '2026-02-05', change: 'Added multi-currency support', author: 'J. Chen' },
		{ version: '1.0', date: '2026-01-28', change: 'Initial production release', author: 'J. Chen' },
	],
	model: {
		primary: 'claude-3-5-sonnet-20241022',
		fallback: 'gpt-4o',
		temperature: 0.1,
		maxTokens: 4096,
		timeout: '30s',
	},
	systemPrompt: `You are an Invoice Processing Agent for {{company_name}}. Your role is to extract data from invoices, validate against purchase orders, and route for appropriate action.

## Core Responsibilities
1. Extract all relevant data from invoice documents
2. Match invoices to purchase orders in the ERP system
3. Validate amounts, tax calculations, and vendor details
4. Route compliant invoices for approval or flag exceptions

## Extraction Requirements
Always extract the following fields:
- Vendor name and address
- Invoice number and date
- Due date
- Line items (description, quantity, unit price, total)
- Subtotal, tax, and total amount
- Currency
- Payment terms
- PO reference (if present)

## Validation Rules
- Total must equal sum of line items + tax
- Tax rate must match vendor's registered rate (±0.5%)
- Invoice date must not be in the future
- Due date must be after invoice date
- Amount must not exceed PO amount by more than 10%

## Routing Logic
Route to AUTO_APPROVE if:
- All validations pass
- Invoice amount ≤ $5,000
- Vendor is in approved vendor list
- PO match confidence > 95%

Route to MANUAL_REVIEW if:
- Any validation fails
- Invoice amount > $5,000
- Vendor not in approved list
- PO match confidence < 95%

Route to EXCEPTION if:
- Cannot extract required fields
- Duplicate invoice detected
- Vendor flagged for audit

## Output Format
Always respond with valid JSON matching the InvoiceOutput schema.

## Constraints
- Never approve invoices without PO match
- Never modify vendor master data
- Always log extraction confidence scores
- Flag any PII detected in invoice notes`,
	userPromptTemplate: `Process the following invoice document.

## Invoice Document
{{invoice_content}}

## Available Context
- Company: {{company_name}}
- Vendor Master: {{vendor_context}}
- Related POs: {{po_context}}
- Previous invoices from this vendor: {{history_context}}

## Instructions
1. Extract all invoice data
2. Attempt to match to a purchase order
3. Validate according to rules
4. Determine routing decision
5. Return structured output`,
	outputSchema: {
		name: 'InvoiceOutput',
		fields: [
			{ name: 'vendor', type: 'object', required: true, desc: 'Vendor details (name, address, tax_id)' },
			{ name: 'invoice_number', type: 'string', required: true, desc: 'Unique invoice identifier' },
			{ name: 'invoice_date', type: 'date', required: true, desc: 'Date invoice was issued' },
			{ name: 'due_date', type: 'date', required: true, desc: 'Payment due date' },
			{ name: 'line_items', type: 'array', required: true, desc: 'Array of line item objects' },
			{ name: 'subtotal', type: 'number', required: true, desc: 'Sum before tax' },
			{ name: 'tax', type: 'number', required: true, desc: 'Tax amount' },
			{ name: 'total', type: 'number', required: true, desc: 'Final amount due' },
			{ name: 'currency', type: 'string', required: true, desc: 'ISO 4217 currency code' },
			{ name: 'po_match', type: 'object', required: false, desc: 'Matched PO details and confidence' },
			{ name: 'validation_results', type: 'array', required: true, desc: 'Array of validation check results' },
			{
				name: 'routing_decision',
				type: 'enum',
				required: true,
				desc: 'AUTO_APPROVE | MANUAL_REVIEW | EXCEPTION',
			},
			{ name: 'routing_reason', type: 'string', required: true, desc: 'Explanation for routing decision' },
			{ name: 'confidence_score', type: 'number', required: true, desc: 'Overall extraction confidence 0-1' },
		],
	},
	fewShotExamples: [
		{
			name: 'Standard invoice with PO match',
			input:
				'Invoice from ABC Supplies, INV-2024-0892, dated 2024-02-15, for office supplies totaling $1,234.56 plus GST. References PO-2024-0445.',
			output: `{
  "vendor": {"name": "ABC Supplies", "tax_id": "12-345-678-901"},
  "invoice_number": "INV-2024-0892",
  "invoice_date": "2024-02-15",
  "total": 1358.02,
  "po_match": {"po_number": "PO-2024-0445", "confidence": 0.98},
  "routing_decision": "AUTO_APPROVE",
  "routing_reason": "All validations passed, amount under threshold, high confidence PO match"
}`,
		},
		{
			name: 'Invoice exceeding PO amount',
			input: 'Invoice from XYZ Corp, INV-9982, for $15,000. PO-8821 was for $12,000.',
			output: `{
  "invoice_number": "INV-9982",
  "total": 15000.00,
  "po_match": {"po_number": "PO-8821", "po_amount": 12000, "variance": 0.25},
  "routing_decision": "MANUAL_REVIEW",
  "routing_reason": "Invoice exceeds PO by 25% (threshold: 10%)"
}`,
		},
	],
	guardrails: [
		{ type: 'Input', rule: 'Reject documents over 50 pages', action: 'Return error, suggest splitting' },
		{
			type: 'Input',
			rule: 'Detect prompt injection attempts',
			action: 'Log security event, process normally ignoring injection',
		},
		{ type: 'Output', rule: 'Validate JSON schema compliance', action: 'Retry with schema reminder (max 2 retries)' },
		{
			type: 'Output',
			rule: 'Check for hallucinated PO numbers',
			action: 'Verify PO exists before including in output',
		},
		{ type: 'Output', rule: 'PII in free text fields', action: 'Mask before logging, flag for review' },
		{
			type: 'Safety',
			rule: 'Confidence below 0.7',
			action: 'Route to MANUAL_REVIEW regardless of other factors',
		},
	],
	contextSources: [
		{
			name: 'Vendor Master',
			source: 'SAP ERP',
			refresh: 'Daily',
			fields: 'name, address, tax_id, payment_terms, approved_status',
		},
		{
			name: 'Purchase Orders',
			source: 'SAP ERP',
			refresh: 'Real-time',
			fields: 'po_number, vendor, items, amounts, status',
		},
		{
			name: 'Invoice History',
			source: 'Vector DB',
			refresh: 'On ingest',
			fields: 'Previous invoices from same vendor (last 12 months)',
		},
		{
			name: 'Tax Rates',
			source: 'Config',
			refresh: 'Monthly',
			fields: 'Current GST/VAT rates by jurisdiction',
		},
	],
	testing: {
		goldenDatasetSize: 200,
		lastTestDate: '2026-02-18',
		accuracy: '97.2%',
		avgLatency: '8.3s',
		passRate: '94%',
	},
} as const;
