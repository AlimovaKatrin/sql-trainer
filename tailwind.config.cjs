const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/withTailwindTheme.decorator.tsx",
  ],
  darkMode: ["class", '[data-color-theme="dark"]'],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sub: ["0.75rem", "1rem"],
      "p-md": ["0.875rem", "1.25rem"],
      "p-lg": ["0.9375rem", "1.5rem"],
      h6: ["1rem", "1.5rem"],
      h5: ["1.125rem", "1.75rem"],
      h4: ["1.25rem", "2rem"],
      h3: ["1.5rem", "2.25rem"],
    },
    colors: {
      transparent: "transparent",
      gray: {
        0: "rgba(255, 255, 255, 1)",
        50: "rgba(247, 247, 248, 1)",
        100: "rgba(237, 237, 241, 1)",
        200: "rgba(215, 216, 224, 1)",
        300: "rgba(180, 181, 197, 1)",
        400: "rgba(139, 142, 165, 1)",
        500: "rgba(106, 109, 134, 1)",
        600: "rgba(88, 90, 113, 1)",
        700: "rgba(72, 73, 92, 1)",
        800: "rgba(62, 64, 78, 1)",
        900: "rgba(55, 56, 67, 1)",
        1000: "rgba(44, 46, 57, 1)",
      },
      bluealpha: {
        200: "rgba(78, 40, 217, 1)",
        100: "rgba(107, 86, 246, 1)",
        80: "rgba(107, 86, 246, 0.8)",
        64: "rgba(107, 86, 246, 0.64)",
        48: "rgba(107, 86, 246, 0.48)",
        32: "rgba(107, 86, 246, 0.32)",
        24: "rgba(107, 86, 246, 0.24)",
        16: "rgba(107, 86, 246, 0.16)",
        8: "rgba(107, 86, 246, 0.08)",
      },
      blue: {
        100: "rgba(243, 243, 255, 1)",
        200: "rgba(233, 233, 254, 1)",
        300: "rgba(214, 214, 254, 1)",
        400: "rgba(183, 181, 253, 1)",
        500: "rgba(148, 139, 250, 1)",
        600: "rgba(107, 86, 246, 1)",
        700: "rgba(93, 58, 237, 1)",
        800: "rgba(65, 33, 182, 1)",
        900: "rgba(55, 29, 149, 1)",
      },
      redalpha: {
        300: "rgba(58, 45, 58, 1)",
        200: "rgba(156, 21, 52, 1)",
        100: "rgba(220, 34, 65, 1)",
        80: "rgba(220, 34, 65, 0.86)",
        64: "rgba(220, 34, 65, 0.64)",
        48: "rgba(220, 34, 65, 0.48)",
        32: "rgba(220, 34, 65, 0.32)",
        24: "rgba(220, 34, 65, 0.24)",
        16: "rgba(220, 34, 65, 0.16)",
        8: "rgba(220, 34, 65, 0.08)",
      },
      red: {
        100: "rgba(254, 229, 230, 1)",
        200: "rgba(253, 206, 209, 1)",
        300: "rgba(251, 166, 172, 1)",
        400: "rgba(248, 116, 128, 1)",
        500: "rgba(239, 59, 80, 1)",
        600: "rgba(220, 34, 65, 1)",
        700: "rgba(186, 22, 53, 1)",
        800: "rgba(156, 21, 52, 1)",
        900: "rgba(133, 22, 50, 1)",
      },
      greenalpha: {
        300: "rgba(43, 59, 61, 1)",
        200: "rgba(17, 132, 69, 1)",
        100: "rgba(17, 168, 85, 1)",
        80: "rgba(17, 168, 85, 0.86)",
        64: "rgba(17, 168, 85, 0.64)",
        48: "rgba(17, 168, 85, 0.48)",
        32: "rgba(17, 168, 85, 0.32)",
        24: "rgba(17, 168, 85, 0.24)",
        16: "rgba(17, 168, 85, 0.16)",
        8: "rgba(17, 168, 85, 0.08)",
      },
      green: {
        100: "rgba(219, 253, 234, 1)",
        200: "rgba(185, 249, 212, 1)",
        300: "rgba(131, 242, 180, 1)",
        400: "rgba(69, 227, 140, 1)",
        500: "rgba(30, 212, 112, 1)",
        600: "rgba(17, 168, 85, 1)",
        700: "rgba(17, 132, 69, 1)",
        800: "rgba(19, 104, 58, 1)",
        900: "rgba(18, 85, 51, 1)",
      },
      whitealpha: {
        64: "rgba(255, 255, 255, 0.64)",
      },
      darkalpha: {
        48: "rgba(0, 0, 0, 0.48)",
      },
    },
  },
  plugins: [],
};
