const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  options: {
    safelist: {
      standard: ['safelist']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px'
      },
	  fontFamily: {
		sans: ['Inter var', ...defaultTheme.fontFamily.sans]
	  },
      colors: {
        lightBlue: {
					0: '#E3F8FF',
					100: '#B3ECFF',
					200: '#81DEFD',
					300: '#5ED0FA',
					400: '#40C3F7',
					500: '#2BB0ED',
					600: '#1992D4',
					700: '#127FBF',
					800: '#0B69A3',
					900: '#035388'
				},
				cyan: {
					0: '#E0FCFF',
					100: '#BEF8FD',
					200: '#87EAF2',
					300: '#54D1DB',
					400: '#38BEC9',
					500: '#2CB1BC',
					600: '#14919B',
					700: '#0E7C86',
					800: '#0A6C74',
					900: '#044E54'
				},
				rojo: {
					0: '#610316',
					100: '#8A041A',
					200: '#AB091E',
					300: '#CF1124',
					400: '#E12D39',
					500: '#EF4E4E',
					600: '#F86A6A',
					700: '#FF9B9B',
					800: '#FFBDBD',
					900: '#FFE3E3'
				},
				rosado: {
					0: '#620042',
					100: '#870557',
					200: '#A30664',
					300: '#BC0A6F',
					400: '#DA127D',
					500: '#E8368F',
					600: '#F364A2',
					700: '#FF8CBA',
					800: '#FFB8D2',
					900: '#FFE3EC'
				},
				amarillo: {
					0: 'hsl(15, 86%, 30%)',
					100: 'hsl(22, 82%, 39%)',
					200: 'hsl(29, 80%, 44%)',
					300: 'hsl(36, 77%, 49%)',
					400: 'hsl(42, 87%, 55%)',
					500: 'hsl(44, 92%, 63%)',
					600: 'hsl(48, 94%, 68%)',
					700: 'hsl(48, 95%, 76%)',
					800: 'hsl(48, 100%, 88%)',
					900: 'hsl(49, 100%, 96%)'
				},
				verdeAzulado: {
					// blueish-green === teal (espanol)
					0: 'hsl(170, 97%, 15%)',
					100: 'hsl(168, 80%, 23%)',
					200: 'hsl(166, 72%, 28%)',
					300: 'hsl(164, 71%, 34%)',
					400: 'hsl(162, 63%, 41%)',
					500: 'hsl(160, 51%, 49%)',
					600: 'hsl(158, 58%, 62%)',
					700: 'hsl(156, 73%, 74%)',
					800: 'hsl(154, 75%, 87%)',
					900: 'hsl(152, 68%, 96%)'
				}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
