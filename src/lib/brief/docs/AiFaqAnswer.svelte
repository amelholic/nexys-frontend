<script lang="ts">
	import { briefColors } from '$lib/brief/briefColors';

	type FaqItem = { id: string; category: string; question: string; answer: string };

	let { faq, categoryColor }: { faq: FaqItem; categoryColor: string } = $props();

	const lines = $derived(faq.answer.split('\n'));

	function isTableRow(s: string): boolean {
		const t = s.trim();
		return t.startsWith('|') && t.includes('|', 1);
	}

	function parseTableRows(tableLines: string[]): { head: string[]; body: string[][] } | null {
		const rows = tableLines.map((l) =>
			l
				.trim()
				.replace(/^\|/, '')
				.replace(/\|$/, '')
				.split('|')
				.map((c) => c.trim()),
		);
		if (rows.length < 2) return null;
		const isSepCell = (c: string) => /^:?-{2,}:?$/.test(c.trim());
		const sep = rows[1].every(isSepCell);
		if (sep) {
			return { head: rows[0], body: rows.slice(2) };
		}
		return { head: rows[0], body: rows.slice(1) };
	}

	type TableChunk = { kind: 'table'; tableLines: string[] };
	type SingleChunk = { kind: 'single'; line: string; index: number };
	type LineChunk = TableChunk | SingleChunk;

	const chunks = $derived.by(() => {
		const out: LineChunk[] = [];
		let i = 0;
		while (i < lines.length) {
			const line = lines[i];
			if (isTableRow(line)) {
				const tableLines: string[] = [];
				while (i < lines.length && isTableRow(lines[i])) {
					tableLines.push(lines[i]);
					i++;
				}
				out.push({ kind: 'table', tableLines });
				continue;
			}
			out.push({ kind: 'single', line, index: i });
			i++;
		}
		return out;
	});
</script>

{#each chunks as chunk (chunk.kind === 'table' ? chunk.tableLines.join('\n') : `s-${chunk.index}`)}
	{#if chunk.kind === 'table'}
		{@const parsed = parseTableRows(chunk.tableLines)}
		{#if parsed}
			<div style="overflow-x: auto; margin: 12px 0;">
				<table
					style="width: 100%; border-collapse: collapse; font-size: 13px; color: {briefColors.slate};"
				>
					<thead>
						<tr>
							{#each parsed.head as cell}
								<th
									style="padding: 8px; text-align: left; border-bottom: 1px solid {briefColors.lightSlate}44; color: {briefColors.deepNavy}; font-weight: 600;"
								>
									{cell}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each parsed.body as row}
							<tr>
								{#each row as cell}
									<td style="padding: 8px; border-bottom: 1px solid {briefColors.lightSlate}22;">
										{cell}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{:else}
		{@const paragraph = chunk.line}
		{@const i = chunk.index}
		{#if paragraph.startsWith('**') && paragraph.endsWith('**')}
			<h4
				style="font-size: 15px; font-weight: 600; color: {briefColors.deepNavy}; margin: 20px 0 8px 0;"
			>
				{paragraph.replaceAll('**', '')}
			</h4>
		{:else if paragraph.includes('**')}
			<p style="margin: 8px 0;">
				{#each paragraph.split(/(\*\*[^*]+\*\*)/g) as part, j (j)}
					{#if part.startsWith('**') && part.endsWith('**')}
						<strong style="color: {briefColors.deepNavy}">{part.replaceAll('**', '')}</strong>
					{:else}
						{part}
					{/if}
				{/each}
			</p>
		{:else if paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.startsWith('**')}
			<p
				style="font-size: 14px; font-weight: 500; color: {briefColors.deepNavy}; margin: 16px 0 4px 0; font-style: italic;"
			>
				{paragraph.replace(/^\*|\*$/g, '')}
			</p>
		{:else if paragraph.startsWith('- ')}
			<div style="display: flex; gap: 12px; margin: 6px 0; padding-left: 8px;">
				<span
					style="width: 6px; height: 6px; border-radius: 50%; background-color: {categoryColor}; margin-top: 8px; flex-shrink: 0;"
				></span>
				<span>{paragraph.slice(2)}</span>
			</div>
		{:else if paragraph.trim()}
			<p style="margin: 8px 0;">{paragraph}</p>
		{/if}
	{/if}
{/each}
