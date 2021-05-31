module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library",
        "jest-dom",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "testing-library/render-result-naming-convention": "off",
        "no-unused-vars": "off",
    },
    "overrides": [
        {
          "files": [
            "**/*.test.js",
            "**/*.test.jsx"
          ],
          "env": {
            "jest": true
          }
        }
    ]
};
