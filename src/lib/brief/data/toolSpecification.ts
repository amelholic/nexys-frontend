export const toolSpecification = {
	name: 'ERP Invoice Connector',
	toolId: 'TOOL-001',
	version: '1.2',
	status: 'Production',
	lastUpdated: '2026-02-19',
	owner: 'Integration Team',
	overview: {
		description:
			'MCP server providing read/write access to SAP ERP invoice and purchase order data. Enables agents to query POs, validate invoices, and create invoice records.',
		protocol: 'MCP (Model Context Protocol)',
		transport: 'HTTP/SSE',
		baseUrl: 'https://mcp.client.internal/erp-connector',
	},
	capabilities: [
		{ name: 'get_purchase_order', description: 'Retrieve PO details by PO number', category: 'Read' },
		{
			name: 'search_purchase_orders',
			description: 'Search POs by vendor, date range, status',
			category: 'Read',
		},
		{ name: 'get_vendor', description: 'Retrieve vendor master data', category: 'Read' },
		{
			name: 'validate_invoice',
			description: 'Check invoice data against PO and business rules',
			category: 'Read',
		},
		{ name: 'create_invoice', description: 'Create new invoice record in ERP', category: 'Write' },
		{ name: 'update_invoice_status', description: 'Update invoice workflow status', category: 'Write' },
	],
	methods: [
		{
			name: 'get_purchase_order',
			description:
				'Retrieve complete purchase order details including line items, amounts, and status',
			category: 'Read',
			inputs: [
				{
					name: 'po_number',
					type: 'string',
					required: true,
					description: 'Purchase order number (e.g., "PO-2024-00123")',
				},
				{
					name: 'include_history',
					type: 'boolean',
					required: false,
					default: 'false',
					description: 'Include change history',
				},
			],
			outputs: [
				{ name: 'po_number', type: 'string', description: 'Purchase order number' },
				{ name: 'vendor', type: 'object', description: 'Vendor details (id, name, address)' },
				{
					name: 'line_items',
					type: 'array',
					description: 'Array of line items with description, qty, price',
				},
				{ name: 'total_amount', type: 'number', description: 'Total PO value' },
				{ name: 'currency', type: 'string', description: 'ISO 4217 currency code' },
				{
					name: 'status',
					type: 'string',
					description: 'PO status (open, partial, closed, cancelled)',
				},
				{ name: 'created_date', type: 'date', description: 'PO creation date' },
			],
			errors: [
				{
					code: 'PO_NOT_FOUND',
					description: 'Purchase order does not exist',
					action: 'Return null, agent should handle missing PO',
				},
				{
					code: 'PO_ACCESS_DENIED',
					description: 'Agent lacks permission for this PO',
					action: 'Log security event, return error',
				},
				{
					code: 'ERP_TIMEOUT',
					description: 'SAP did not respond in time',
					action: 'Retry once, then return timeout error',
				},
			],
			example: {
				request: '{ "po_number": "PO-2024-00123", "include_history": false }',
				response:
					'{ "po_number": "PO-2024-00123", "vendor": { "id": "V001", "name": "ABC Supplies" }, "total_amount": 5000.00, "status": "open" }',
			},
			rateLimit: '100 requests/minute',
			timeout: '10 seconds',
		},
		{
			name: 'create_invoice',
			description: 'Create a new invoice record in the ERP system with full audit trail',
			category: 'Write',
			inputs: [
				{
					name: 'vendor_id',
					type: 'string',
					required: true,
					description: 'Vendor identifier from vendor master',
				},
				{ name: 'invoice_number', type: 'string', required: true, description: 'Vendor invoice number' },
				{ name: 'invoice_date', type: 'date', required: true, description: 'Invoice date (ISO 8601)' },
				{ name: 'due_date', type: 'date', required: true, description: 'Payment due date' },
				{ name: 'line_items', type: 'array', required: true, description: 'Array of line items' },
				{ name: 'po_reference', type: 'string', required: false, description: 'Related PO number' },
				{ name: 'total_amount', type: 'number', required: true, description: 'Invoice total' },
				{ name: 'tax_amount', type: 'number', required: true, description: 'Tax amount' },
				{ name: 'currency', type: 'string', required: true, description: 'ISO 4217 currency code' },
				{
					name: 'source_document',
					type: 'string',
					required: false,
					description: 'Reference to original document',
				},
			],
			outputs: [
				{ name: 'invoice_id', type: 'string', description: 'System-generated invoice ID' },
				{ name: 'status', type: 'string', description: 'Initial status (pending_approval)' },
				{ name: 'created_at', type: 'datetime', description: 'Creation timestamp' },
				{ name: 'workflow_id', type: 'string', description: 'Approval workflow instance ID' },
			],
			errors: [
				{
					code: 'VENDOR_NOT_FOUND',
					description: 'Vendor ID does not exist in master',
					action: 'Return error, do not create invoice',
				},
				{
					code: 'DUPLICATE_INVOICE',
					description: 'Invoice number already exists for vendor',
					action: 'Return existing invoice ID, do not duplicate',
				},
				{
					code: 'VALIDATION_FAILED',
					description: 'Required fields missing or invalid',
					action: 'Return field-level errors',
				},
				{
					code: 'PO_CLOSED',
					description: 'Referenced PO is closed or cancelled',
					action: 'Return error with PO status',
				},
				{
					code: 'AMOUNT_EXCEEDED',
					description: 'Invoice exceeds PO amount by >configured threshold',
					action: 'Return warning, still create if forced',
				},
			],
			example: {
				request: '{ "vendor_id": "V001", "invoice_number": "INV-2024-999", "total_amount": 1500.00, ... }',
				response:
					'{ "invoice_id": "AP-2024-00456", "status": "pending_approval", "workflow_id": "WF-789" }',
			},
			rateLimit: '20 requests/minute',
			timeout: '30 seconds',
		},
	],
	authentication: {
		method: 'Service Account + JWT',
		tokenEndpoint: 'https://auth.client.internal/oauth/token',
		scopes: ['erp:invoices:read', 'erp:invoices:write', 'erp:po:read', 'erp:vendor:read'],
		tokenLifetime: '1 hour',
		refreshStrategy: 'Auto-refresh 5 minutes before expiry',
	},
	permissions: [
		{
			scope: 'erp:po:read',
			description: 'Read purchase orders',
			grantedTo: ['Invoice Agent', 'Compliance Agent'],
		},
		{
			scope: 'erp:vendor:read',
			description: 'Read vendor master',
			grantedTo: ['Invoice Agent', 'Compliance Agent'],
		},
		{
			scope: 'erp:invoices:read',
			description: 'Read invoice records',
			grantedTo: ['Invoice Agent', 'Compliance Agent', 'Reporting Agent'],
		},
		{
			scope: 'erp:invoices:write',
			description: 'Create/update invoices',
			grantedTo: ['Invoice Agent'],
		},
	],
	rateLimits: {
		global: '500 requests/minute across all methods',
		perMethod: 'Varies by method (see method specs)',
		burst: '50 requests in 1 second',
		throttleResponse: 'HTTP 429 with Retry-After header',
	},
	errorHandling: {
		retryPolicy: 'Exponential backoff: 1s, 2s, 4s, max 3 retries',
		circuitBreaker: 'Open after 5 consecutive failures, half-open after 30s',
		fallback: 'Return cached data for reads (if <5 min old), queue writes for retry',
		logging: 'All errors logged with correlation ID, request/response bodies redacted for PII',
	},
	monitoring: {
		healthEndpoint: '/health',
		metricsEndpoint: '/metrics (Prometheus format)',
		alerts: [
			{ condition: 'Error rate > 5%', action: 'Page on-call' },
			{ condition: 'Latency p99 > 5s', action: 'Slack alert' },
			{ condition: 'Circuit breaker open', action: 'Page on-call' },
		],
	},
	security: {
		dataClassification: 'Confidential - Financial Data',
		encryption: 'TLS 1.3 in transit, AES-256 at rest',
		piiHandling: 'Vendor contact details masked in logs',
		auditLogging: 'All write operations logged with user/agent identity',
		networkAccess: 'Private VPC only, no public internet',
	},
} as const;
