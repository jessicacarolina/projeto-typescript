module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
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
    /*

      "import/no-extraneous-dependencies": [
          "error", {
              "devDependencies": false,
              "optionalDependencies": false,
              "peerDependencies": false,
              "packageDir": "./"
            }
        ],
      "no-unused-vars": ["error", { "argsIgnorePattern": "next"}]
    },*/
