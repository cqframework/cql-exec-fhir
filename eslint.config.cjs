const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = defineConfig([
  globalIgnores(['lib']),
  {
    extends: compat.extends('eslint:recommended', 'prettier'),

    languageOptions: {
      globals: Object.assign({}, globals.node, globals.mocha),

      ecmaVersion: 6,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true
        }
      }
    },

    rules: {
      'linebreak-style': ['error', 'unix'],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],

      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none'
        }
      ]
    }
  }
]);
