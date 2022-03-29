module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
    extend: {
			theme: {
				fontSize: {
					'100': ['100%']
				},
				shadow: {
					toast: 'box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.12)',
					card: 'box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.07)',
					popup: 'box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.2)',
				}
			}
		},
  },
  plugins: [],
	darkMode: 'class'	// or media
}