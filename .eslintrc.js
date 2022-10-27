module.exports = {
  extends: '@sourcegraph/eslint-config',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
  },
  ignorePatterns: ['temp', 'scip.ts', 'snapshots'],
  rules: {
    'no-sync': 'off',
    'jsdoc/check-indentation': 'off',
  },
}
