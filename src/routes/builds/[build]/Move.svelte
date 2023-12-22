<script lang="ts">
	export let type = 'normal';
	export let name = 'tackle';
</script>

<figure class="grid grid-cols-[44px_1fr] gap-4 text-[36px] font-bold leading-none text-white">
	<img src="/move-types/{type}.png" alt={type} class="h-11" />
	<figcaption class="grid items-center">{name}</figcaption>
</figure>
