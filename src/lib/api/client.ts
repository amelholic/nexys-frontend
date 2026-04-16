import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';

const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:8080';
const API_VERSION = 1;

interface ApiResponse<T> {
	data: T;
}

interface ApiListResponse<T> {
	data: T[];
	meta: {
		total: number;
		page: number;
		per_page: number;
		total_pages: number;
	};
}

interface ApiError {
	error: {
		code: string;
		message: string;
		details?: Record<string, string>;
	};
}

class ApiClient {
	private baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
		const { accessToken } = get(auth);

		const headers: Record<string, string> = {
			'Content-Type': 'application/json',
			'X-Api-Version': String(API_VERSION)
		};

		if (accessToken) {
			headers['Authorization'] = `Bearer ${accessToken}`;
		}

		const res = await fetch(`${this.baseUrl}${path}`, {
			method,
			headers,
			body: body ? JSON.stringify(body) : undefined
		});

		// Handle 401 — try refresh
		if (res.status === 401 && accessToken) {
			const refreshed = await this.tryRefresh();
			if (refreshed) {
				return this.request(method, path, body);
			}
			auth.clearUser();
			window.location.href = '/login';
			throw new Error('Session expired');
		}

		if (!res.ok) {
			const err: ApiError = await res.json().catch(() => ({
				error: { code: 'UNKNOWN', message: 'Request failed' }
			}));
			throw err.error;
		}

		if (res.status === 204) return undefined as T;
		return res.json();
	}

	private async tryRefresh(): Promise<boolean> {
		const refreshToken = localStorage.getItem('refresh_token');
		if (!refreshToken) return false;

		try {
			const res = await fetch(`${this.baseUrl}/api/auth/refresh`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ refresh_token: refreshToken })
			});

			if (!res.ok) return false;

			const { data } = await res.json();
			localStorage.setItem('refresh_token', data.refresh_token);
			auth.setUser(get(auth).user!, data.access_token);
			return true;
		} catch {
			return false;
		}
	}

	async get<T>(path: string): Promise<ApiResponse<T>> {
		return this.request('GET', path);
	}

	async getList<T>(path: string): Promise<ApiListResponse<T>> {
		return this.request('GET', path);
	}

	async post<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
		return this.request('POST', path, body);
	}

	async put<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
		return this.request('PUT', path, body);
	}

	async patch<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
		return this.request('PATCH', path, body);
	}

	async del(path: string): Promise<void> {
		return this.request('DELETE', path);
	}
}

export const api = new ApiClient(API_BASE);
