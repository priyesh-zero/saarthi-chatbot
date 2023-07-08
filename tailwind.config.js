/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				macondo: ['Macondo', 'cursive'],
				tangerine: ['Tangerine', 'cursive']
			}
		}
	},
	plugins: []
};
