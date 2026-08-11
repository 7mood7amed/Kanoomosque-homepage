export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#161813',
          900: '#262B21',
          800: '#363D2F',
          700: '#464E3C',
          600: '#56614B',
          500: '#667358',
        },
        silver: {
          600: '#A2AD96',
          500: '#B5BEAA',
          400: '#C7CEBE',
          200: '#DFE4D8',
          100: '#EBEFE5',
        },
        // pearl = bright white, used for card surfaces and the main light
        // sections; mist = a distinct soft-sage tint one step down, used on
        // alternating sections so adjacent bands read as separate without
        // needing a border. Keeping these different is what gives the page
        // rhythm — collapsing them to one value flattens the whole page.
        pearl: '#FFFFFF',
        mist: '#EAEFE1',
        ink: '#262B21',

        // Full sage ramp (mirrors the live site's --sage-* custom
        // properties) so components can reach for a tint/shade directly
        // instead of only the flat M3 aliases below.
        primary: {
          50: '#F1F4EC',
          100: '#E8ECDF',
          200: '#D6DCCB',
          300: '#BFC8B2',
          400: '#A4B199',
          500: '#8F9D83',
          600: '#788768',
          700: '#65745A',
          800: '#4F5A45',
          DEFAULT: '#788768',
        },
        // Soft secondary accents used for status/tag variety, matching the
        // gold / blue / mauve tint system on the live site.
        gold: {
          DEFAULT: '#B59B62',
          soft: '#D8C79B',
          50: '#F1EBDB',
          700: '#8C7647',
        },
        blue: {
          DEFAULT: '#7F99A6',
          50: '#E8EFF2',
          700: '#5C7480',
        },
        mauve: {
          DEFAULT: '#C5A9A9',
          50: '#EFE3E3',
          700: '#9A7A7A',
        },

        // M3-style aliases matching the Stitch mockup's token names
        'primary-light': '#8C997F',
        'on-primary': '#FFFFFF',
        secondary: '#F1F4EC',
        surface: '#F1F4EC',
        'on-surface': '#262B21',
        'surface-variant': '#DFE4D8',
        'on-surface-variant': '#56614B',
        outline: '#A8B39D',
        'outline-variant': '#CDD3C4',
        'primary-container': '#EBEDE8',
        'on-primary-container': '#262B21',
        'secondary-container': '#E2E7DC',
        'on-secondary-container': '#363D2F',
        'surface-container-low': '#ECF0E7',
        'surface-container-high': '#E5E9DF',
        'surface-container-highest': '#DEE3D7',
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
