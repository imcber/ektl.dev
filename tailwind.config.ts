import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			foreground: 'var(--foreground)',
			principal: 'var(--principal)',
			principal_light: 'var(--principal_light)',
			secondary: 'var(--secondary)',
			secondary_light: 'var(--secondary_light)',
		},
		extend: {
			keyframes: {
				move_right: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(200px)' },
				},
				move_right_reverse: {
					'0%': { transform: 'translateX(200px)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				move_right: 'move_right 2s ease 1 forwards',
				move_right_reverse: 'move_right_reverse 2s ease 1 forwards',
			},
		},
		plugins: [],
	},
};
export default config;
