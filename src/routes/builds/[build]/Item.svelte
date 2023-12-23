<script lang="ts">
	export let item: string;

	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/items/*.png', {
		query: {
			w: '72',
			h: '72',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img
	src={modules[`/src/lib/assets/images/items/${item}.png`]}
	alt="held item: {item}"
	class="h-[72px] w-[72px]"
/>
