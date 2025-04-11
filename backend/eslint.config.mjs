import baseConfig from '../eslint.config.mjs'

export default [
  ...baseConfig,
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    rules: {},
  },
]
