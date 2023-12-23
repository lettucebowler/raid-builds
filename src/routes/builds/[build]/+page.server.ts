import { error } from '@sveltejs/kit';
import { builds } from './build-data';
import { dev } from '$app/environment';
export const load = async (event) => {
	const { build } = event.params;
	const buildInfo = builds[build];
	if (!buildInfo) {
		throw error(404, { message: 'Not found', code: 404 });
	}
	return buildInfo;
};

// export const csr = dev;
