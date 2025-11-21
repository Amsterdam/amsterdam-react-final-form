import storybook from "eslint-plugin-storybook";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
  ...storybook.configs["flat/recommended"],
  ...tseslint.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        // Jest globals
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        test: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "arrow-body-style": ["error", "as-needed"],
      "block-spacing": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "import/no-anonymous-default-export": "off",
      "no-multiple-empty-lines": ["error"],
      "object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
      "padded-blocks": ["error", "never"],
      "quotes": ["error", "double", { "avoidEscape": true }],
      "space-unary-ops": ["error"],
      "space-infix-ops": ["error"],
      "semi": ["error", "never"],
      "template-curly-spacing": ["error", "always"],
      "no-unused-vars": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];

