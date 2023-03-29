/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: true,
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['luxury']
	}
};
