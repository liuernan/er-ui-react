const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist')
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "erUI React"
    })
  ]
};