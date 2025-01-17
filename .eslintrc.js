// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'vue/no-v-for-template-key-on-child': ['error'],
    'vue/no-v-for-template-key': ['off'],
    'linebreak-style': ['error', 'windows'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.return value
      ],
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'object-curly-newline': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // legacy from air-bnb-config v13 - would have to fix all otherwise
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    // unfortunately our audio and video files do not have the required format
    // (.vtt files) included -->
    'vuejs-accessibility/media-has-caption': 0,
    // need html comments in one line otherwise vuepress (docgen?) is not parsing them
    'max-len': ['error', {
      code: 110,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '(^\\s*<!--\\s+?@slot.*$|^\\s*@binding.*$)',
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {},
    },
  ],
};
