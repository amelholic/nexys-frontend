import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

function getInitialTheme(): Theme {
	if (!browser) return 'system';
	return (localStorage.getItem('theme') as Theme) ?? 'system';
}

function applyTheme(theme: Theme) {
	if (!browser) return;

	const isDark =
		theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

	document.documentElement.classList.toggle('dark', isDark);
}

function createThemeStore() {
	const { subscribe, set } = writable<Theme>(getInitialTheme());

	// Apply on init
	if (browser) {
		applyTheme(getInitialTheme());

		// Listen for OS theme changes when in system mode
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			const current = localStorage.getItem('theme') as Theme;
			if (current === 'system' || !current) {
				applyTheme('system');
			}
		});
	}

	return {
		subscribe,
		setTheme(theme: Theme) {
			set(theme);
			if (browser) {
				localStorage.setItem('theme', theme);
				applyTheme(theme);
			}
		}
	};
}

export const theme = createThemeStore();
