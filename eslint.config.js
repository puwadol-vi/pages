import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      ...reactHooks.configs.recommended.rules,
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]
