export const load = async (event) => {
	const { build } = event.params;
	return {
		build
	};
};
