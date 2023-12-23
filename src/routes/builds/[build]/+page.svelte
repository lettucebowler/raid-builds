<script lang="ts">
	import Item from './Item.svelte';
	import MenuSprite from './MenuSprite.svelte';
	import Move from './Move.svelte';
	import NoteCard from './NoteCard.svelte';
	import Triangle from './Triangle.svelte';
	import TypeGem from './TypeGem.svelte';
	import TypePill from './TypePill.svelte';

	export let data;
</script>

<div class="flex h-full flex-col gap-4 p-5">
	<div
		id="species-ability-and-item"
		class="top-box mx-auto flex w-[640px] flex-auto justify-between gap-8 rounded-2xl drop-shadow-[4px_5px_4px_rgba(0,_0,_0,_0.5)]"
	>
		<div class="flex flex-col justify-between gap-2 pb-4 pl-5 pt-3">
			<div class="absolute left-[-50px] top-1/2 top-[calc(50%_-_40px)] h-20 w-20 animate-wiggle">
				<Triangle />
			</div>
			<div>
				<div class="flex items-end gap-4">
					<h2 class="inline text-[52px] font-bold leading-none text-white">{data.pokemon.name}</h2>
					<span class="font-mono text-3xl text-background-light"
						>#<span class="text-5xl font-extrabold"
							>{data.pokemon.id.toString().padStart(4, '0')}</span
						></span
					>
				</div>
				<div class="flex items-center gap-2 text-[1.75rem] leading-tight text-white">
					ability: {data.ability.name}
					{#if data.ability.hidden}
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="h-6 w-6 fill-[#f4ed5f]"
							>
								<path
									fill-rule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					{/if}
				</div>
			</div>
			<div class="mt-auto flex h-[1.875rem] gap-2.5">
				{#each data.pokemon.types.slice(0, 2) as type (type)}
					<TypePill {type} />
				{/each}
			</div>
		</div>
		<div class="grid w-32 place-items-center">
			<a href={data.pokemon.info_url} target="_blank">
				<MenuSprite pokemon={data.pokemon.name} />
			</a>
		</div>
		<div
			class="flex w-[4.5rem] flex-col items-end gap-2"
			class:justify-between={!!data.teraType}
			class:justify-end={!data.teraType}
		>
			{#if data.teraType}
				<div class="mr-2.5 mt-2.5">
					<TypeGem type={data.teraType} />
				</div>
			{/if}
			<a href={data.item.info_url} target="_blank">
				<Item item={data.item.name} />
			</a>
		</div>
	</div>
	<div id="moves-and-notes" class="mx-auto grid w-max flex-auto grid-cols-2 gap-5">
		<NoteCard
			title="recommended moves"
			--accent-color="#eed018"
			class="min-w-96 drop-shadow-[4px_5px_4px_rgba(0,_0,_0,_0.5)]"
		>
			<div class="flex h-full flex-col justify-between gap-3">
				{#each data.moves.slice(0, 4) as move}
					<Move type={move.type} name={move.name} />
				{/each}
			</div>
		</NoteCard>
		<NoteCard
			title="build notes"
			--accent-color="#41e338"
			class="min-w-96 drop-shadow-[4px_5px_4px_rgba(0,_0,_0,_0.5)]"
		>
			<div class="flex h-full flex-col justify-between">
				<div>
					<figure class="grid grid-cols-[2.5rem_1fr] gap-1">
						<Item item="{data.nature.boosted_stat}-mint" />
						<figcaption class="grid items-center text-[34px] leading-none text-white">
							nature: {data.nature.name}
						</figcaption>
					</figure>
					<figure class="grid grid-cols-[2.5rem_1fr] gap-1">
						<div class="grid h-10 w-10 place-items-center text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-7 w-7"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<figcaption class="grid items-center text-[34px] leading-none text-white">
							<span><span class="text-[#d9ce8c]">role:</span> {data.role.name}</span>
						</figcaption>
					</figure>
				</div>
				<div>
					<h3 class="text-2xl leading-normal text-white">other workable moves</h3>
					<div class="space-y-2">
						{#each data.moves.slice(4) as move}
							<Move type={move.type} name={move.name} />
						{/each}
					</div>
				</div>
			</div>
		</NoteCard>
	</div>
	<div
		id="evs"
		class="mx-auto flex w-[640px] flex-auto flex-col justify-center justify-center gap-2 rounded-2xl bg-background/90 p-2 text-center text-4xl text-white drop-shadow-[4px_5px_4px_rgba(0,_0,_0,_0.5)]"
	>
		<span class="space-x-2">
			EVS:
			{#each Object.entries(data.effort_values).filter(([state, value]) => !!value) as ev, i (ev)}
				{#if i}
					<span>/</span>
				{/if}
				<span style="--text-color: var(--color-{ev[0]})" class="uppsercase text-[--text-color]"
					>{ev[1]} {ev[0]}</span
				>
			{/each}
		</span>
	</div>
	{#if data.raid_tip}
		<div
			id="raid-tip"
			class="mx-auto flex w-[640px] flex-auto flex-col justify-center rounded-2xl bg-background/85 p-2 px-8 pb-3 text-white drop-shadow-[4px_5px_4px_rgba(0,_0,_0,_0.5)]"
		>
			<header class="flex items-center gap-2">
				<div class="grid grid-cols-1 grid-rows-1 place-items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#ee4646"
						class="z-10 col-start-1 row-start-1 h-8 w-8 rounded-full"
					>
						<path
							fill-rule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
							clip-rule="evenodd"
						/>
					</svg>
					<div class="col-start-1 row-start-1 h-6 w-6 rounded-full bg-white" />
				</div>
				<h2 class="uppsercase text-[40px] leading-tight text-white">raid tip</h2>
			</header>
			<p class="text-[24px] font-light leading-tight">{@html data.raid_tip}</p>
		</div>
	{/if}
</div>

<style>
	.top-box {
		background-image: linear-gradient(
			-45deg,
			rgb(var(--color-accent) / 85%),
			8%,
			rgb(var(--color-background) / 85%),
			8%,
			rgb(var(--color-background) / 85%),
			34%,
			rgb(var(--color-accent) / 85%),
			34%,
			rgb(var(--color-accent) / 85%),
			38%,
			rgb(var(--color-accent) / 85%),
			38%,
			rgb(var(--color-background) / 85%)
		);
	}

	:global(strong) {
		font-weight: 900;
	}

	:global(body) {
		background-color: black;
	}
</style>
