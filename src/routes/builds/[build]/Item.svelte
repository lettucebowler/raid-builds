<script lang="ts">
	export let item: string;

	const modules: { [x: string]: { default: string } } = import.meta.glob(
		'$lib/assets/images/items/*.png',
		{
			query: {
				w: '72',
				h: '72',
				format: 'webp'
			},
			eager: true
		}
	);

    $: src = modules[`/src/lib/assets/images/items/${item}.png`]?.default
    $: console.log(src);
</script>

{#if src}
    <img
    	src={src}
    	alt="held item: {item}"
    	class="h-[72px] w-[72px]"
    />
{/if}
