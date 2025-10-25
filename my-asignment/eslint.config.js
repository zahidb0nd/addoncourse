import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";

export default [
  // ESLint's core recommended rules
  js.configs.recommended,

  // React-specific configurations
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Your custom rules for React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Jest-specific configurations
  {
    files: ["src/**/*.{test.js,test.jsx}"],
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },

  // Prettier configuration
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // This disables ESLint rules that conflict with Prettier
  eslintConfigPrettier,
];
