module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended", // Extend TypeScript rules
    "plugin:react/recommended" // Extend React rules
  ],
  env: {
    browser: true, // Add this line to include browser globals
    jest: true // If you are using Jest for testing
  },
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule
    "@typescript-eslint/no-explicit-any": "warn",
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
    "no-unused-vars": "off",
  }
}
