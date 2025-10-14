// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.cts', '**/*.mts'], 
    languageOptions: {
      globals: {
        process: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }], 
      '@typescript-eslint/no-explicit-any': 'warn', 
    }
  },
  {
    ignores: ['dist', 'node_modules', '*.js'],
  }
];