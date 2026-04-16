<script lang="ts">
	import { onMount } from 'svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import ClientPresentationSlides from '$lib/brief/docs/client-decks/ClientPresentationSlides.svelte';

	let currentSlide = $state(0);
	const total = 9;

	function goNext() {
		currentSlide = Math.min(currentSlide + 1, total - 1);
	}
	function goPrev() {
		currentSlide = Math.max(currentSlide - 1, 0);
	}

	onMount(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === ' ') {
				e.preventDefault();
				goNext();
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault();
				goPrev();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

<div
	style="min-height: 100vh; background-color: #0F172A; font-family: Inter, system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; padding: 20px;"
>
	<div
		style="width: 100%; max-width: 960px; height: 540px; max-height: min(65vh, 540px); background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);"
	>
		<ClientPresentationSlides {currentSlide} />
	</div>

	<div style="margin-top: 20px; display: flex; align-items: center; gap: 20px;">
		<button
			type="button"
			onclick={goPrev}
			disabled={currentSlide === 0}
			style="width: 44px; height: 44px; border-radius: 50%; border: none; background-color: {currentSlide === 0
				? c.slate
				: c.white}; cursor: {currentSlide === 0 ? 'not-allowed' : 'pointer'}; display: flex; align-items: center; justify-content: center; opacity: {currentSlide === 0
				? 0.5
				: 1};"
			aria-label="Previous slide"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={currentSlide === 0 ? c.lightSlate : c.deepNavy} stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
		</button>

		<div style="display: flex; gap: 6px; align-items: center;">
			{#each Array.from({ length: total }, (_, i) => i) as i}
				<button
					type="button"
					title="Slide {i + 1}"
					onclick={() => (currentSlide = i)}
					style="width: {i === currentSlide ? '28px' : '8px'}; height: 8px; border-radius: 4px; border: none; background-color: {i === currentSlide
						? c.cyan
						: c.slate}; cursor: pointer;"
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>

		<button
			type="button"
			onclick={goNext}
			disabled={currentSlide === total - 1}
			style="width: 44px; height: 44px; border-radius: 50%; border: none; background-color: {currentSlide === total - 1
				? c.slate
				: c.white}; cursor: {currentSlide === total - 1 ? 'not-allowed' : 'pointer'}; display: flex; align-items: center; justify-content: center; opacity: {currentSlide === total - 1
				? 0.5
				: 1};"
			aria-label="Next slide"
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke={currentSlide === total - 1 ? c.lightSlate : c.deepNavy}
				stroke-width="2"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</button>
	</div>

	<div style="margin-top: 12px; font-size: 13px; color: {c.lightSlate};">
		{currentSlide + 1} / {total}
	</div>
	<div style="margin-top: 6px; font-size: 11px; color: {c.slate};">Use arrow keys, space, or click to navigate</div>
</div>
