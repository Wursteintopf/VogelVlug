module.exports = {
  extends: [
    'next/babel',
    'next/core-web-vitals',
    'eslint:recommended',
    'standard',
    'standard-jsx',
  ],
  rules: {
    'react/no-children-prop': 'off',
  }
}