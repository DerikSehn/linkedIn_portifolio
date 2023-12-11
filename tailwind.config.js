export default  {
  content: [
    "./index.html",
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#FF5733', // Defina a cor primária da sua empresa
        secondary: '#3182CE', // Defina a cor secundária da sua empresa
      },
    },
     button: {
      base: 'px-4 py-2 font-semibold rounded-md focus:outline-none transition duration-300 ease-in-out',
      primary: 'bg-primary text-white hover:bg-secondary',
      secondary: 'bg-secondary text-white hover:bg-primary',
    },
  },
  variants: {
    extend: {},
  }, 
   plugins: [
     // eslint-disable-next-line no-undef
     require('tailwindcss-animated'),
     // eslint-disable-next-line no-undef
     require('flowbite/plugin')
    ]
}

