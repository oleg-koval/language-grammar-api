module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier", "jest"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true,
    browser: false,
    "jest/globals": true
  },
  rules: {
    "prettier/prettier": "error",
  }
};
