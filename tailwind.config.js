module.exports = {
  darkMode: 'class', // Enable dark mode with class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'darker': '#191b19',
        'dark': '#111113',
        'orange': '#f56600',
        'purple': '#4f2b7b'
      }
    },
  },
  plugins: [],
}

