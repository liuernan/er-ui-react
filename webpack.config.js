const path = require('path');

module.exports = {
  entry: './components/index.tsx',
  output: {
    library: { // There is also an old syntax for this available (click to show)
      type: "umd", // universal module definition
      // the type of the exported library
      name: "er-ui-react", // string | string[]
      // the name of the exported library

      /* Advanced output.library configuration (click to show) */
    },
    filename: 'index.js',
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
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {  // https://github.com/JetBrains/svg-sprite-loader
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
};