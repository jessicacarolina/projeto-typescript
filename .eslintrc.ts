module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: ['airbnb-base', 'prettier',  "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"],
    plugins: [ "@typescript-eslint",'prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'camelcase': 'off',
        'no-console': 'off',
        'func-style':'error',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'func-names': 'off',
        'no-multi-spaces': 'off',
        'spaced-comment': ["error", "always", { "markers": ["/"] }],
        'comma-dangle': ['error', 'always-multiline'],
        'padded-blocks': 'off',
        'linebreak-style': 'off',
        'class-methods-use-this': 'off',
        'indent': ['error', 2],
        'max-len': ['error', 120, 2, { ignoreComments: true }],
        'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
        'no-nested-ternary': 'off',
        'no-underscore-dangle': ['error', {'allow': ['_super', '_lookupFactory']}],
        'object-shorthand': ['error', 'methods']
    }
}


