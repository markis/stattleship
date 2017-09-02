const dts = require('dts-bundle');

dts.bundle({
	name: '@markis/stattleship',
  main: 'tmp/index.d.ts',
  out: '../index.d.ts',
  indent: '  '
});

module.exports = {
  input: './tmp/index.js',
  external: [
    'https',
    'querystring'
  ],
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  sourcemap: true
};