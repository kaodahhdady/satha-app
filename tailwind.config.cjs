module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#FF8500',
        primary: '#111111',
        secondary: '#777777',
        bg: '#F7F7F8'
      },
      borderRadius: {
        'lgplus': '20px',
        'xl': '24px',
        'xxl': '28px'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(17,17,17,0.06)',
        subtle: '0 4px 12px rgba(17,17,17,0.04)'
      },
      fontFamily: {
        cairo: ['Cairo', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
