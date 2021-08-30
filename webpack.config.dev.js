const baseConfig = require('./webpack.config');

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
});