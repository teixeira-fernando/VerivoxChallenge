module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Given: "readonly",
    When: "readonly",
    Then: "readonly",
    expect: "readonly",
    $$: "readonly",
    $: "readonly",
    browser: "readonly",
    describe: "readonly",
    it: "readonly",
    before: "readonly"
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "warn",
    "class-methods-use-this": "off",
    "no-unused-expressions": "warn",
    "max-len": "warn"
  },
};
