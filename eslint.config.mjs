import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 12,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      eqeqeq: ['error', 'always'],
    },
  },
];
