/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    colors: {
      black: "var(--ds-color-black)",
      white: "var(--ds-color-white)",
      gray: {
        100: "var(--ds-color-gray-100)",
        200: "var(--ds-color-gray-200)",
        300: "var(--ds-color-gray-300)",
        400: "var(--ds-color-gray-400)",
        500: "var(--ds-color-gray-500)",
        600: "var(--ds-color-gray-600)",
        700: "var(--ds-color-gray-700)",
        800: "var(--ds-color-gray-800)",
        900: "var(--ds-color-gray-900)",
      },
      primary: {
        100: "var(--ds-color-primary-100)",
        200: "var(--ds-color-primary-200)",
        300: "var(--ds-color-primary-300)",
        400: "var(--ds-color-primary-400)",
        500: "var(--ds-color-primary-500)",
        600: "var(--ds-color-primary-600)",
        700: "var(--ds-color-primary-700)",
        800: "var(--ds-color-primary-800)",
        900: "var(--ds-color-primary-900)",
      },
    },
    spacing: {
      0: "var(--ds-spacing-0)",
      1: "var(--ds-spacing-1)",
      2: "var(--ds-spacing-2)",
      3: "var(--ds-spacing-3)",
      4: "var(--ds-spacing-4)",
      5: "var(--ds-spacing-5)",
      6: "var(--ds-spacing-6)",
      7: "var(--ds-spacing-7)",
      8: "var(--ds-spacing-8)",
    },
    borderRadius: {
      sm: "var(--ds-border-radius-sm)",
      md: "var(--ds-border-radius-md)",
      lg: "var(--ds-border-radius-lg)",
    },
    borderWidth: {
      sm: "var(--ds-border-width-sm)",
      md: "var(--ds-border-width-md)",
      lg: "var(--ds-border-width-lg)",
    },
    width: {
      sm: "var(--ds-size-sm)",
      md: "var(--ds-size-md)",
      lg: "var(--ds-size-lg)",
    },
    height: {
      sm: "var(--ds-size-sm)",
      md: "var(--ds-size-md)",
      lg: "var(--ds-size-lg)",
    },
    fontFamily: {
      sans: ["var(--ds-typo-font-family)"],
    },
    fontSize: {
      body: "var(--ds-typo-font-size-body)",
    },
    lineHeight: {
      body: "var(--ds-typo-font-line-height)",
    },
    textColor: {
      body: "var(--ds-typo-font-color)",
    },
    fontWeight: {
      normal: "var(--ds-typo-font-weight-normal)",
      bold: "var(--ds-typo-font-weight-bold)",
    },
  },
  plugins: [],
};

export default preset;
