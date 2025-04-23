
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom real estate theme colors
				"estate": {
					"50": "#f0f7fa",
					"100": "#dcedf4",
					"200": "#bfdfeb",
					"300": "#92cbdd",
					"400": "#5caeca",
					"500": "#3995bb",
					"600": "#2e7a9e",
					"700": "#296482",
					"800": "#0F3460", // primary navy blue
					"900": "#1e3a50",
					"950": "#162536"
				},
				"teal": {
					"500": "#16C79A" // accent teal
				},
				"estate-neutral": {
					"50": "#f8f9fa",
					"100": "#f1f3f5",
					"200": "#e9ecef",
					"300": "#dee2e6",
					"400": "#ced4da",
					"500": "#adb5bd",
					"600": "#868e96",
					"700": "#495057",
					"800": "#343a40",
					"900": "#212529",
					"950": "#0a0c0e"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"slide-up": {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"slide-up": "slide-up 0.5s ease-out forwards"
			},
			fontFamily: {
				serif: ["Playfair Display", "serif"],
				sans: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
