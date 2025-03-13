/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  printWidth: 79,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
