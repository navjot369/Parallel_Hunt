/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glowback' : 'linear-gradient(135deg, #ffdd65 2.76%, #ffaa5c 29.66%, #ff49c0 61%, #8e59ff 99.93%)',
        'bgparallax1' : 'url(/Images/img2.jpg)'
      },
      shadows: {
        'shadow1' : '10px 10px 2px 2px #ae5eff'
      },
      color: {
        'primary' : "#232323"
      }
    },
  },
  plugins: [],
}
