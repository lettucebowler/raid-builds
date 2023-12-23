<script lang="ts">
	import type { PokemonType } from '$lib/types/types';

	export let type: PokemonType;
	const modules: { [x: string]: string } = import.meta.glob(
		'$lib/assets/images/pokemon-types/*.png',
		{
			query: {
				w: '150',
				h: '30',
				format: 'webp'
			},
			eager: true,
			import: 'default'
		}
	);
</script>

<img
	src={modules[`/src/lib/assets/images/pokemon-types/${type}.png`]}
	alt={type}
	class="h-[30px] w-[150px]"
/>
