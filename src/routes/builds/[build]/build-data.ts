export type BuildInfo = {
	title: string;
	category: string;
	pokemon: {
		name: string;
		id: number;
		info_url: string;
		types: string[];
	};
	ability: {
		name: string;
		hidden: boolean;
	};
	teraType: string;
	item: {
		id: number;
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
		type: string;
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
			id: 253,
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
		background_image: 'https://scarletviolet.pokemon.com/_images/news/jan_12/p03_02.jpg'
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
			info_url: 'https://bulbapedia.bulbagarden.net/wiki/Light_Clay',
			id: 1
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
			def: 0,
			spa: 196,
			spd: 60,
			spe: 0
		},
		background_image: 'https://www.serebii.net/scarletviolet/powdersnowcourse.jpg'
	}
};
