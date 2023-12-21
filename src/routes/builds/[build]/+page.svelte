<script lang="ts">
	export let data;
</script>

<div class="flex flex-col gap-2 p-5">
	<div
		class="top-box mx-auto flex h-[152px] w-[640px] justify-between gap-8 rounded-2xl bg-red-500 p-1"
	>
		<div class="ml-3 mt-2.5">
			<div class="flex items-end gap-4">
				<h2 class="inline text-[52px] font-bold leading-none text-white">{data.pokemon.name}</h2>
				<span class="text-3xl text-background-light"
					>#<span class="text-5xl font-extrabold">{data.pokemon.id}</span></span
				>
			</div>
			<div class="text-[1.75rem] leading-tight text-white">ability: {data.ability}</div>
		</div>
		<div class="w-32">
			<img src="/menu-icons/{data.pokemon.id}.png" class="h-32 w-32" />
		</div>
		<div class="flex w-[4.5rem] flex-col items-end justify-between gap-2">
			<img src="/tera-types/{data.teraType}.png" class="m-1 w-12" />
			<img src="/items/{data.item}.png" class="w-[4.5rem]" />
		</div>
	</div>
</div>

<style>
	.top-box {
		background-image: linear-gradient(
			-45deg,
			theme(colors.accent),
			8%,
			theme(colors.background),
			8%,
			theme(colors.background),
			34%,
			theme(colors.accent),
			34%,
			theme(colors.accent),
			38%,
			theme(colors.accent),
			38%,
			theme(colors.background)
		);
	}
</style>
