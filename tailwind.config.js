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

        // M3-style aliases matching the Stitch mockup's token names
        primary: '#12224A',
        'primary-light': '#1B3061',
        'on-primary': '#FFFFFF',
        secondary: '#7E8BA3',
        surface: '#F4F6FA',
        'on-surface': '#12224A',
        'surface-variant': '#DDE3ED',
        'on-surface-variant': '#7E8BA3',
        outline: '#9AA6BC',
        'outline-variant': '#C3CBDA',
        'primary-container': '#DBE1FF',
        'on-primary-container': '#00174B',
        'secondary-container': '#D8E0EF',
        'on-secondary-container': '#141C27',
        'surface-container-low': '#F2F4F8',
        'surface-container-high': '#E6E8EC',
        'surface-container-highest': '#E0E3E6',
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
