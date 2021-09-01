const path = require('path');

module.exports = {
  entry: './components/index.tsx',
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist')
    // clean: true  // webpack 5
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  }
};