export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A142E',
          900: '#12224A',
          800: '#1B3061',
          700: '#26417C',
          600: '#3A5798',
          500: '#5A6B8C',
        },
        silver: {
          600: '#7E8BA3',
          500: '#9AA6BC',
          400: '#C3CBDA',
          200: '#DDE3ED',
          100: '#EDF1F7',
        },
        pearl: '#FFFFFF',
        mist: '#F4F6FA',
        ink: '#12224A',
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
        display: ['Aref Ruqaa', 'Tajawal', 'serif'],
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        soft: '0 16px 40px -28px rgba(18, 34, 74, 0.45)',
      },
    },
  },
}
