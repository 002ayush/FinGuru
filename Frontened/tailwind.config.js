/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				bglogo: "url('/assets/images/ruppees.jpg')",
			},
		},
	},
	plugins: [],
};
