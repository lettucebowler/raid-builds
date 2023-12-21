<script lang="ts">
	export let data;
</script>

<div class="flex flex-col gap-2 p-5">
	<div class="top-box mx-auto h-[152px] w-[640px] rounded-2xl bg-red-500 p-3.5 px-4">
		<div class="flex items-end gap-4">
			<h2 class="inline text-[52px] font-bold leading-none text-white">gholdengo</h2>
			<span class="text-3xl text-background-light"
				>#<span class="text-5xl font-extrabold">1000</span></span
			>
		</div>
		<div class="text-[1.75rem] leading-normal text-white">ability: good as gold</div>
	</div>
</div>

<style>
	.top-box {
		background-image: linear-gradient(
			-45deg,
			theme(colors.accent),
			5%,
			theme(colors.background),
			5%,
			theme(colors.background),
			34%,
			theme(colors.accent),
			34%,
			theme(colors.accent),
			37%,
			theme(colors.accent),
			37%,
			theme(colors.background)
		);
	}
</style>
