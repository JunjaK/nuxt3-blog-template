module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
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
