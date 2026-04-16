import { writable, derived } from 'svelte/store';

export interface User {
	id: string;
	tenant_id: string;
	org_type: 'nexys' | 'partner' | 'client';
	roles: string[];
	permissions: string[];
	name?: string;
	email?: string;
}

interface AuthState {
	user: User | null;
	accessToken: string | null;
	isLoading: boolean;
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthState>({
		user: null,
		accessToken: null,
		isLoading: true
	});

	return {
		subscribe,
		/** Store access token only (e.g. after login/refresh, before GET /auth/me). */
		setAccessToken(accessToken: string) {
			update((s) => ({ ...s, accessToken }));
		},
		setUser(user: User, accessToken: string) {
			set({ user, accessToken, isLoading: false });
		},
		clearUser() {
			set({ user: null, accessToken: null, isLoading: false });
			localStorage.removeItem('refresh_token');
		},
		setLoading(loading: boolean) {
			update((s) => ({ ...s, isLoading: loading }));
		}
	};
}

export const auth = createAuthStore();

export const isAuthenticated = derived(auth, ($auth) => !!$auth.user);

export const orgType = derived(auth, ($auth) => $auth.user?.org_type ?? null);

export const hasPermission = derived(auth, ($auth) => {
	return (perm: string) => {
		if (!$auth.user) return false;
		return $auth.user.permissions.includes(perm) || $auth.user.permissions.includes('admin:*');
	};
});
