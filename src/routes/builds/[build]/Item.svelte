<script lang="ts">
	export let item: string;
	export let size: number = 72;

	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/items/*.png', {
		query: {
			w: '160',
			h: '160',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img
	srcset={modules[`/src/lib/assets/images/items/${item}.png`]}
	alt="held item: {item}"
	style="--size: {size}"
	class="h-[--size] w-[--size]"
/>
