module.exports = {
  theme: {
    screens: {
      'sm': [
        {'max': '576px'}
      ],
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '577px', 'max': '876px'},
      ],
      'lg': [
        {'min': '877px', "max": '1200px'}
      ],
      'xl': [{'min': '1201px'}],
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  daisyui: {
    darkTheme: "customDark",
    themes: [
      "light",
      "dark",
      "corporate",
      {
        customDark: {
          "primary": "#0891b2",
          "secondary": "#0284c7",
          "accent": "#6366f1",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3b82f6",
          "success": "#16a34a",
          "warning": "#ea580c",
          "error": "#ef4444",
        },
      },
    ],
  },
};
