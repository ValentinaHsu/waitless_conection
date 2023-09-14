/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily:{
      'open-sans':'Open Sans',
    },

    colors:{
      'footer': '#04AA6D',
      'footer_hover': '#3e8e41',
      'footer_active': '#3e8e41',
      'background': '#FCFCFC',
      'background_popup': '#E3EEEC',
      'div': '#f3f0f0',
      'header': '#423d3d',
      'black': '#000000',
      'white': '#FFFFFF',
      'populetter': '#919191',
      'input': '#F1F1F1',
      'btngreen': '#03CDA9',
      'letraGris': '#25252580',
      'letraGrisOscuro': '#252525',
      'LineaPedido': '#E3EEEC',
      'LineaVerdePedido': '#B4F1E6',

      
    }
  },
  plugins: [],
}
