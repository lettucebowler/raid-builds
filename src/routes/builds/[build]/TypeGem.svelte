<script lang="ts">
	import type { PokemonType } from '$lib/types/types';

	export let type: PokemonType;
	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/tera-types/*.png', {
		query: {
			w: '48',
			h: '48',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img src={modules[`/src/lib/assets/images/tera-types/${type}.png`]} alt={type} class="h-12 w-12" />
