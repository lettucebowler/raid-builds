<script lang="ts">
	import type { PokemonType } from '$lib/types/types';
	export let type: PokemonType;

	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/move-types/*.png', {
		query: {
			w: '44',
			h: '44',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img src={modules[`/src/lib/assets/images/move-types/${type}.png`]} alt={type} class="h-11 w-11" />
