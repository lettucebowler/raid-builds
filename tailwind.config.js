import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				'background-dark': 'rgb(var(--color-background-dark) / <alpha-value>)',
				'background-darker': 'rgb(var(--color-background-darker) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				'background-light': 'rgb(var(--color-background-light) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				steel: '#60a1b8',
				dark: '#635858',
				bug: '#aac63b',
				ice: '#42d8fe',
				fire: '#e62829',
				electric: '#f3c13c',
				fairy: '#eb71ee'
			},
			backgroundImage: {
				'tera-raid': `url('/tera-raid.webp')`
			},
			keyframes: {
				wiggle: {
					// '100%': { transform: 'translateX(0%)' },
					'0%, 100%': { transform: 'translateX(-3%)' },
					'50%': { transform: 'translateX(3%)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
