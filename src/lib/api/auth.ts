import { api } from './client';
import { auth } from '$lib/stores/auth';

interface TokenPair {
	access_token: string;
	refresh_token: string;
	expires_in: number;
}

interface MeResponse {
	user_id: string;
	tenant_id: string;
	org_type: 'nexys' | 'partner' | 'client';
	roles: string[];
	permissions: string[];
}

export async function login(email: string, password: string): Promise<void> {
	const { data } = await api.post<TokenPair>('/api/auth/login', { email, password });
	localStorage.setItem('refresh_token', data.refresh_token);
	auth.setAccessToken(data.access_token);

	// Fetch user info (requires Bearer token)
	const { data: me } = await api.get<MeResponse>('/api/auth/me');
	auth.setUser(
		{
			id: me.user_id,
			tenant_id: me.tenant_id,
			org_type: me.org_type,
			roles: me.roles,
			permissions: me.permissions
		},
		data.access_token
	);
}

export async function register(name: string, email: string, password: string, orgSlug: string): Promise<void> {
	const { data } = await api.post<TokenPair>('/api/auth/register', {
		name,
		email,
		password,
		org_slug: orgSlug
	});
	localStorage.setItem('refresh_token', data.refresh_token);
	auth.setAccessToken(data.access_token);

	const { data: me } = await api.get<MeResponse>('/api/auth/me');
	auth.setUser(
		{
			id: me.user_id,
			tenant_id: me.tenant_id,
			org_type: me.org_type,
			roles: me.roles,
			permissions: me.permissions
		},
		data.access_token
	);
}

export async function logout(): Promise<void> {
	try {
		await api.post('/api/auth/logout');
	} finally {
		auth.clearUser();
	}
}

export async function refreshSession(): Promise<boolean> {
	const refreshToken = localStorage.getItem('refresh_token');
	if (!refreshToken) return false;

	try {
		const { data } = await api.post<TokenPair>('/api/auth/refresh', {
			refresh_token: refreshToken
		});
		localStorage.setItem('refresh_token', data.refresh_token);
		auth.setAccessToken(data.access_token);

		const { data: me } = await api.get<MeResponse>('/api/auth/me');
		auth.setUser(
			{
				id: me.user_id,
				tenant_id: me.tenant_id,
				org_type: me.org_type,
				roles: me.roles,
				permissions: me.permissions
			},
			data.access_token
		);
		return true;
	} catch {
		auth.clearUser();
		return false;
	}
}
