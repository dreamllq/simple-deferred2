module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': ['vue', '@typescript-eslint'],
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'spaced-comment': ['error', 'always'],
    'block-spacing': 'error',
    'brace-style': 'warn',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true 
      }
    ],
    'switch-colon-spacing': [
      'error',
      {
        before: true,
        after: true 
      }
    ],
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': 'error',
    'computed-property-spacing': ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        before: false, 
        after: true 
      }
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true 
      }
    ],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'no-whitespace-before-property': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'no-dupe-keys': 'error',
    'eqeqeq': 'warn',
    'object-curly-newline': [
      'warn',
      {
        'ObjectExpression': { 'multiline': true },
        'ObjectPattern': { 'multiline': true },
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 3 
        }
      }
    ],
    'object-property-newline': 'error',
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 3 
      }
    ],
    'array-bracket-newline': [
      'warn',
      {
        multiline: true,
        minItems: 3 
      }
    ],
    'arrow-body-style': ['warn', 'as-needed'],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'no-sparse-arrays': 'error',
    'indent': ['error', 2],
    'func-call-spacing': ['error', 'never'],
    'comma-dangle': ['warn', 'never'],
    'no-prototype-builtins': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'warn',
    'vue/html-closing-bracket-newline': 'off',
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1 
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      { autofix: true }
    ],
    'vue/html-quotes': [
      'error',
      'single',
      { avoidEscape: true }
    ],
    'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below' 
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      { registeredComponentsOnly: false }
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/require-valid-default-prop': 'warn',
    'vue/no-duplicate-attributes': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
