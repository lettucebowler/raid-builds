<script lang="ts">
	export let type: 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'stellar' | 'water' = 'normal';
	export let name = 'tackle';

	import bug from '$lib/assets/images/move-types/bug.png';
	import dark from '$lib/assets/images/move-types/dark.png';
	import dragon from '$lib/assets/images/move-types/dragon.png';
	import electric from '$lib/assets/images/move-types/electric.png';
	import fairy from '$lib/assets/images/move-types/fairy.png';
	import fighting from '$lib/assets/images/move-types/fighting.png';
	import fire from '$lib/assets/images/move-types/fire.png';
	import flying from '$lib/assets/images/move-types/flying.png';
	import ghost from '$lib/assets/images/move-types/ghost.png';
	import grass from '$lib/assets/images/move-types/grass.png';
	import ground from '$lib/assets/images/move-types/ground.png';
	import ice from '$lib/assets/images/move-types/ice.png';
	import normal from '$lib/assets/images/move-types/normal.png';
	import poison from '$lib/assets/images/move-types/poison.png';
	import psychic from '$lib/assets/images/move-types/psychic.png';
	import rock from '$lib/assets/images/move-types/rock.png';
	import steel from '$lib/assets/images/move-types/steel.png';
	import stellar from '$lib/assets/images/move-types/stellar.png';
	import water from '$lib/assets/images/move-types/water.png';

	const images = {
		bug,
		dark,
		dragon,
		electric,
		fairy,
		fighting,
		fire,
		flying,
		ghost,
		grass,
		ground,
		ice,
		normal,
		poison,
		psychic,
		rock,
		steel,
		stellar,
		water,
	}
</script>

<figure class="grid grid-cols-[44px_1fr] gap-4 text-[36px] font-bold leading-none text-white">
	<img src="{images[type]}" alt={type} class="h-11" />
	<figcaption class="grid items-center">{name}</figcaption>
</figure>
