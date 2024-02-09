module.exports = {
  extends: ["react-app", "plugin:storybook/recommended"],
  rules: {
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
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
}
