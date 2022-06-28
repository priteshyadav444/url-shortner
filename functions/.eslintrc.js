module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    "indent": "off",
    "arraysInObjects": "off",
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "double"],
    "linebreak-style": 0,
  },
};
