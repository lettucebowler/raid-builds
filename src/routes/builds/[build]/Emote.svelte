<script lang="ts">
	export let category: 'field' | 'photo' = 'field';
	export let id = 0;
	export let size: number = 72;

	const modules: { [x: string]: string } = import.meta.glob('$lib/assets/images/emotes/*.png', {
		query: {
			w: '40',
			h: '40',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	});
</script>

<img
	src={modules[
		`/src/lib/assets/images/emotes/emote_icon_${category}_${id.toString().padStart(2, '0')}.png`
	]}
	alt="emote"
	style="--size: {size}"
	class="h-[--size] w-[--size]"
/>
