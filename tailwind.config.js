import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#fac806',
				secondary: '#c170cc',
				'background-dark': '#232232',
				'background-darker': '#1e1d2d',
				background: '#152233',
				'background-light': '#2e384a',
				accent: '#32b8e4'
			}
		}
	},
	plugins: []
};
