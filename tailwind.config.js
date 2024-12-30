/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-patter": "url('./src/assets/home/chef-service.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

