/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				darkModeBg: 'hsl(207, 26%, 17%)',
				lightModeBg: 'hsl(0, 0%, 98%)',
				lightModeText: ' hsl(200, 15%, 8%)',
				darkModeText: 'hsl(0, 0%, 100%)',
				lightModeInput: 'hsl(0, 0%, 52%)',
				darkModeElement: 'hsl(209, 23%, 22%)',
			},
		},
		screens: {
			sm: '464px',
			md: '640px',
			lg: '848px',
			xl: '992px',
		},
	},
	plugins: [],
};
