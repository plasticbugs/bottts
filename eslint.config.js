import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        React: 'readonly',
        SVGSVGElement: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      
      // TypeScript specific
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // React specific
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off', // Using TypeScript instead
      'react/display-name': 'off',
      
      // General
      'prefer-const': 'error',
      'no-var': 'error',
    },
    settings: {
      react: {
        version: '19.1',
      },
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      'storybook-static/',
      'src/bot/',
      'src/options/',
      'src/index.tsx'
    ],
  },
]