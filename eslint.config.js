import antfu from '@antfu/eslint-config'
// import { FlatCompat } from '@eslint/eslintrc'

// const compat = new FlatCompat()

export default antfu(
  {
    unocss: true,
  },
  // ...compat.config({
  //   extends: [
  //     '.eslintrc-auto-import.json',
  //   ],
  // }),
)
