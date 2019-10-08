module.exports = {
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'standard',
    'standard-react',
    'prettier/standard',
  ],
  plugins: [
    'react',
    'jest',
    'standard',
    'babel',
  ],
  env: {
    'jest/globals': true,
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    quotes: [
      'error',
      'single',
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'no-console': [
      'warn',
      {
        allow: [
          'info',
          'table',
          'warn',
          'error',
        ],
      },
    ],
    'jest/no-jest-import': 'off',
    'babel/semi': 0,
    'react/prop-types': 0,
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', {
      groups: [
        ['builtin', 'external'],
        ['internal', 'parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
    }],
    'react/jsx-fragments': [1, 'syntax'],
  },
}
