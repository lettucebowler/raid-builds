<script lang="ts">
	export let pokemon: string;

	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/menu-icons/*.png', {
		query: {
			w: '128',
			h: '128',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img
	src={modules[`/src/lib/assets/images/menu-icons/${pokemon}.png`]}
	alt="{pokemon} sprite"
	class="h-32 w-32"
/>
