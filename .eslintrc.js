module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
  },
  globals: {
    fetch: false,
  },
};

// {
//   "extends": [
//     "airbnb",
//     "prettier",
//     "plugin:jest/recommended",
//     "plugin:jest-formatting/recommended"
//   ],
//   "plugins": ["prettier", "jest", "jest-formatting", "react-native"],
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "rules": {
//     "react-native/no-unused-styles": 2,
//     "react-native/split-platform-components": 2,
//     "react-native/no-inline-styles": 2,
//     "react-native/no-color-literals": 2,
//     "react-native/no-raw-text": 2,
//     "react-native/no-single-element-style-arrays": 2,
//     "react/jsx-filename-extension": [
//       1,
//       {
//         "extensions": [".js", ".jsx"]
//       }
//     ]
//   }
// }
