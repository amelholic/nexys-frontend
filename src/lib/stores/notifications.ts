import { toast } from 'svelte-sonner';

export const notifications = {
	success: (msg: string) => toast.success(msg),
	error: (msg: string) => toast.error(msg),
	warning: (msg: string) => toast.warning(msg),
	info: (msg: string) => toast.info(msg)
};
