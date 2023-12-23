import type { PokemonType } from '$lib/types/types';
export type BuildInfo = {
	title: string;
	category: string;
	pokemon: {
		name: string;
		id: number;
		info_url: string;
		types: PokemonType[];
	};
	ability: {
		name: string;
		hidden: boolean;
	};
	teraType?: PokemonType;
	item: {
		name: string;
		info_url: string;
	};
	role: {
		name: string;
		emote: string;
	};
	nature: {
		name: string;
		boosted_stat: string;
	};
	moves: {
		type: PokemonType;
		name: string;
	}[];
	effort_values: {
		hp: number;
		atk: number;
		def: number;
		spa: number;
		spd: number;
		spe: number;
	};
	background_image?: string;
	raid_tip?: string;
};
export const builds: { [x: string]: BuildInfo } = {
	'gholdengo-iron-bundle-ice': {
		title: 'gholdengo raid build',
		category: 'raid builds for 7-star iron bundle',
		pokemon: {
			name: 'gholdengo',
			id: 1000,
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Gholdengo_(Pok%C3%A9mon)',
			types: ['steel', 'ghost']
		},
		ability: {
			name: 'good as gold',
			hidden: false
		},
		teraType: 'steel',
		item: {
			name: 'shell-bell',
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Shell_Bell'
		},
		role: {
			name: 'attack',
			emote: 'clap'
		},
		nature: {
			name: 'modest',
			boosted_stat: 'special-attack'
		},
		moves: [
			{
				type: 'steel',
				name: 'make it rain'
			},
			{
				type: 'steel',
				name: 'metal sound'
			},
			{
				type: 'dark',
				name: 'nasty plot'
			},
			{
				type: 'psychic',
				name: 'light screen'
			},
			{
				type: 'steel',
				name: 'flash cannon'
			},
			{
				type: 'steel',
				name: 'steel beam'
			}
		],
		effort_values: {
			hp: 252,
			atk: 0,
			def: 0,
			spa: 196,
			spd: 60,
			spe: 0
		},
		background_image: 'https://scarletviolet.pokemon.com/_images/news/jan_12/p03_02.jpg',
		raid_tip: /* HTML */ `while <strong class="text-steel">make it rain</strong> is stronger than
			<strong class="text-steel">flash cannon</strong>, it will need
			<strong class="text-dark">nasty plot</strong> weaved in between to maximize sp. atk drops.`
	},
	'frosmoth-iron-bundle-ice': {
		title: 'frosmoth raid build',
		category: 'builds for 7-star ice iron bundle',
		pokemon: {
			name: 'frosmoth',
			id: 873,
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Frosmoth_(Pok%C3%A9mon)',
			types: ['ice', 'bug']
		},
		ability: {
			hidden: true,
			name: 'ice scales'
		},
		teraType: 'steel',
		item: {
			name: 'soft-clay',
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Light_Clay'
		},
		role: {
			name: 'all-rounder',
			emote: 'clap'
		},
		nature: {
			name: 'modest',
			boosted_stat: 'special-attack'
		},
		moves: [
			{
				type: 'normal',
				name: 'tera blast'
			},
			{
				type: 'bug',
				name: 'struggle bug'
			},
			{
				type: 'bug',
				name: 'quiver dance'
			},
			{
				type: 'ice',
				name: 'aurora veil'
			},
			{
				name: 'light screen',
				type: 'psychic'
			},
			{
				type: 'psychic',
				name: 'reflect'
			}
		],
		effort_values: {
			hp: 252,
			atk: 0,
			def: 20,
			spa: 236,
			spd: 0,
			spe: 0
		},
		background_image: 'https://www.serebii.net/scarletviolet/powdersnowcourse.jpg',
		raid_tip: /* HTML */ `if the raid boss opens with snow, we open with
			<strong class="text-ice">aurora veil</strong>,
			<strong class="text-bug">struggle bug</strong> to tera, then steel-type
			<strong>tera blast</strong>.`
	},
	'guardevoir-iron-bundle-ice': {
		title: 'guardevoir raid build',
		category: 'builds for 7-star ice iron bundle',
		pokemon: {
			name: 'guardevoir',
			id: 282,
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pok%C3%A9mon)',
			types: ['psychic', 'fairy']
		},
		ability: {
			name: 'trace',
			hidden: false
		},
		item: {
			name: 'heat-rock',
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Heat_Rock'
		},
		role: {
			name: 'support',
			emote: 'support'
		},
		nature: {
			name: 'calm',
			boosted_stat: 'special-defense'
		},
		moves: [
			{
				type: 'fire',
				name: 'mystical fire'
			},
			{
				type: 'fire',
				name: 'sunny day'
			},
			{
				type: 'fairy',
				name: 'misty terrain'
			},
			{
				type: 'water',
				name: 'life dew'
			},
			{
				type: 'normal',
				name: 'helping hand'
			},
			{
				type: 'psychic',
				name: 'light screen'
			}
		],
		effort_values: {
			hp: 252,
			atk: 0,
			def: 0,
			spa: 4,
			spd: 252,
			spe: 0
		},
		raid_tip: /* HTML */ `use <strong class="text-fairy">misty terrain</strong> to remove
			<strong class="text-electric">electric terrain</strong> if set by boss.<br /><strong
				class="text-fire"
				>sunny day</strong
			>
			to remove snow and to stop freeze.`
	}
};
