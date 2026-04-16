import type { Component } from 'svelte';
import WorkshopOutputReport from './WorkshopOutputReport.svelte';
import WorkshopParticipantWorkbook from './WorkshopParticipantWorkbook.svelte';
import WorkshopSlides from './WorkshopSlides.svelte';

/** Maps `brief-other-manifest` `rel` to a ported Svelte document body. */
export const otherBriefPortedByRel: Record<string, Component> = {
	'Workshop_AI_Opportunity/Workshop_ParticipantWorkbook.jsx': WorkshopParticipantWorkbook,
	'Workshop_AI_Opportunity/Workshop_OutputReport.jsx': WorkshopOutputReport,
	'Workshop_AI_Opportunity/Workshop_Slides.jsx': WorkshopSlides
};
