<script lang="ts">
	import { page } from '$app/stores';
	import game_logo from '$lib/assets/images/game_logo.webp';
	import default_background from '$lib/assets/images/tera-raid.webp';
</script>

<svelte:head>
	<link
		rel="preload"
		href="https://fonts.cdnfonts.com/s/60110/Rift%20Bold.woff"
		crossorigin="anonymous"
		as="font"
		type="font/woff"
	/>
	<link
		rel="preload"
		href="https://fonts.cdnfonts.com/s/60110/Rift%20Medium.woff"
		crossorigin="anonymous"
		as="font"
		type="font/woff"
	/>
	<link
		rel="preload"
		href="https://fonts.cdnfonts.com/s/60110/Rift%20Regular.woff"
		crossorigin="anonymous"
		as="font"
		type="font/woff"
	/>
	<link
		rel="preload"
		href="https://fonts.cdnfonts.com/s/60110/Rift%20Light.woff"
		crossorigin="anonymous"
		as="font"
		type="font/woff"
	/>
	<link href="https://fonts.cdnfonts.com/css/rift" rel="stylesheet" />
</svelte:head>
<div
	style:background-image="url({$page.data.background_image
		? $page.data.background_image
		: default_background})"
	class="background bg-cover bg-center"
>
	<div
		class="grid aspect-square h-[1080px] w-[1080px] flex-auto grid-rows-[190px_1fr_76px] text-[48px] leading-none backdrop-blur-lg"
	>
		<header
			class="flex justify-between gap-2 bg-gradient-to-r from-amber-900 from-50% to-red-500 to-50%"
		>
			<div class="space-y-[2px] px-[1.8125rem] py-8 tracking-wide">
				<h1 class="text-[72px] font-bold leading-none text-primary">gholdengo raid build</h1>
				<p
					class="text-[3.3125rem] font-medium uppercase leading-none tracking-[0.025em] text-secondary"
				>
					builds for 7-star ice iron bundle
				</p>
			</div>
			<div class="py-1.5">
				<img src={game_logo} class="mr-[28px] h-full" alt="Game Logo" />
			</div>
		</header>
		<div class="relative flex flex-auto flex-col px-10 py-4">
			<fieldset
				class="absolute left-[56px] w-[782px] origin-top-left rotate-90 border-t-[7px] border-[#cab42a] pl-[32rem]"
			>
				<legend class="flex items-center px-3 text-base font-bold text-[#cab42a]">pkmncast</legend>
			</fieldset>
			<fieldset
				class="absolute right-[56px] w-[782px] origin-top-right rotate-[270deg] border-t-[7px] border-[#cab42a] pl-[32rem]"
			>
				<legend class="flex items-center px-3 text-base font-bold text-[#cab42a]">pkmncast</legend>
			</fieldset>
			<div class="flex-auto border-b-[7px] border-t-[7px] border-[#cab42a]">
				<slot />
			</div>
		</div>
		<footer
			class="flex w-full items-center justify-center gap-8 bg-background-dark font-medium text-primary"
		>
			<a href="https://pkmncast.com" target="_blank"
				>PKMNCAST.<span class="text-[40px]">com</span></a
			>
			<p>/</p>
			<ul class="flex items-center justify-center gap-2 *:text-primary">
				<li>
					<a href="https://twitch.tv/pkmncast" title="PKMNCAST Twitch Channel"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="32"
							width="32"
							viewBox="0 0 512 512"
							class="fill-primary"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
								d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"
							/></svg
						></a
					>
				</li>
				<li>
					<a href="https://twitter.com/pkmncast" title="PKMNCAST Twitter"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="32"
							width="32"
							viewBox="0 0 512 512"
							class="fill-primary"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
								d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
							/></svg
						></a
					>
				</li>
				<li>
					<a href="https://youtube.com/pkmncast" title="PKMNCAST Youtube"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="32"
							width="36"
							viewBox="0 0 576 512"
							class="fill-primary"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
								d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
							/></svg
						></a
					>
				</li>
				<li>
					<a href="https://instagram.com/pkmncast" title="PKMNCAST Instagram"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="32"
							width="28"
							viewBox="0 0 448 512"
							class="fill-primary"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
							/></svg
						></a
					>
				</li>
				<li>
					<a href="https://tiktok.com/@pkmncast" title="PKMNCAST Tiktok" class="w-[125px]"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="32"
							width="28"
							viewBox="0 0 448 512"
							class="fill-primary"
							><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
								d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
							/></svg
						></a
					>
				</li>
			</ul>
			<p>/</p>
			<p class="flex items-center gap-1 font-medium">@<span class="text-[40px]">PKMNCAST</span></p>
		</footer>
	</div>
</div>

<style lang="postcss">
	header {
		background-image: linear-gradient(
			-45deg,
			theme(colors.background-dark),
			48%,
			theme(colors.background-darker),
			48%,
			theme(colors.background-darker)
		);
	}

	footer {
		background-image: linear-gradient(
			-45deg,
			theme(colors.background-dark),
			45%,
			theme(colors.background-darker),
			45%,
			theme(colors.background-darker),
			67%,
			theme(colors.background-dark),
			67%,
			theme(colors.background-dark)
		);
	}
</style>
