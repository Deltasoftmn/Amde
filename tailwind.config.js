/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#2C1810',
        'medium-brown': '#8B4513',
        'light-brown': '#A0522D',
        'beige': '#F5F5DC',
        'light-beige': '#FAF8F3',
        'cream': '#FFF8E7',
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
