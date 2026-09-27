import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: { DEFAULT: '#EFEDE6', deep: '#E2DFD6' },
				ink: { DEFAULT: '#121212', muted: '#4A4843' },
				accent: '#2B4BFF',
			},
			fontFamily: {
				sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
				mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}
