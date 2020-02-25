const fs = require("fs")
const path = require("path")

if (process.versions.v8.includes("electron")) {
  process.env.NODE_PATH = path.resolve(__dirname, "node_modules")
  require("module").Module._initPaths()
}

module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-base/rules/strict",
    "eslint-config-airbnb/rules/react",
    "plugin:prettier/recommended",
    "prettier/babel",
    "prettier/react",
    "plugin:jsx-classname/recommended",
    "plugin:jsx-classname/tailwindcss",
  ],
  rules: {
    "babel/camelcase": "error",
    "babel/new-cap": "error",
    "babel/no-invalid-this": "error",
    "babel/no-unused-expressions": "error",
    "babel/valid-typeof": "error",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "func-names": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    "new-cap": "off",
    "no-alert": "off",
    "no-invalid-this": "off",
    "no-param-reassign": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "no-unused-expressions": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        tabWidth: 2,
        semi: false,
        singleQuote: false,
        quoteProps: "consistent",
        arrowParens: "always",
      },
    ],
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "valid-typeof": "off",
  },
  plugins: ["import", "prettier", "babel", "react", "jsx-classname"],
  settings: {},
}

const webpackConfig = path.resolve("webpack.config.js")

if (fs.existsSync(webpackConfig)) {
  Object.assign(module.exports.settings, {
    "import/resolver": {
      webpack: {
        config: webpackConfig,
      },
    },
  })
}
