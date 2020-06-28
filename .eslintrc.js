module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'react/no-array-index-key': 0,
    'array-callback-return': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-prototype-builtins': 0,
    'react-hooks/exhaustive-deps': 0
  },
};
