module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  //plugins for REACT 
  plugins: ["eslint-plugin-react", "eslint-plugin-react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    // You can do more rule customizations here...
    // "react/jsx-key": "warn",
    // "react/jsx-key": "error",
    "react/jsx-key": "off",
  },
};
