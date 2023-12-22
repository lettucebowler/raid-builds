<script lang="ts">
	export let title = 'placeholder title';
	let className = '';
	export { className as class };
</script>

<div class="flex flex-col {className}">
	<header
		class="rounded-t-2xl bg-[--accent-color] px-2 text-center text-[40px] font-medium leading-snug"
	>
		<h2>{title}</h2>
	</header>
	<div class="flex-auto rounded-b-2xl bg-background/85 p-5 pt-4">
		<slot />
	</div>
</div>
