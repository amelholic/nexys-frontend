<script lang="ts">
	import { onMount } from 'svelte';
	import { briefColors as c } from '$lib/brief/briefColors';
	import ClientProposalSlides from '$lib/brief/docs/client-decks/ClientProposalSlides.svelte';

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
	style="font-family: Inter, system-ui, sans-serif; background-color: #0F172A; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px;"
>
	<div
		style="width: 960px; max-width: 100%; height: 600px; max-height: min(70vh, 600px); background-color: {c.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 25px 80px rgba(0,0,0,0.5);"
	>
		<ClientProposalSlides {currentSlide} />
	</div>

	<div style="margin-top: 24px; display: flex; align-items: center; gap: 16px;">
		<button
			type="button"
			onclick={goPrev}
			disabled={currentSlide === 0}
			style="width: 48px; height: 48px; border-radius: 50%; border: none; background-color: {currentSlide === 0
				? c.slate + '44'
				: c.white}; cursor: {currentSlide === 0 ? 'not-allowed' : 'pointer'}; display: flex; align-items: center; justify-content: center;"
			aria-label="Previous slide"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={currentSlide === 0 ? c.slate : c.deepNavy} stroke-width="2">
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
		</button>

		<div style="display: flex; gap: 8px;">
			{#each Array.from({ length: total }, (_, i) => i) as i}
				<button
					type="button"
					onclick={() => (currentSlide = i)}
					style="width: {i === currentSlide ? '32px' : '10px'}; height: 10px; border-radius: 5px; border: none; background-color: {i === currentSlide
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
			style="width: 48px; height: 48px; border-radius: 50%; border: none; background-color: {currentSlide === total - 1
				? c.slate + '44'
				: c.white}; cursor: {currentSlide === total - 1 ? 'not-allowed' : 'pointer'}; display: flex; align-items: center; justify-content: center;"
			aria-label="Next slide"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke={currentSlide === total - 1 ? c.slate : c.deepNavy}
				stroke-width="2"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</button>
	</div>

	<div style="margin-top: 16px; font-size: 12px; color: {c.slate};">
		Use arrow keys, space, or controls to navigate
	</div>
</div>
