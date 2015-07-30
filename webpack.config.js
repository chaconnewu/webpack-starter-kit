var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './src/client/app.js',
  output: {
    filename: './src/client/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  externals: {
    'react': 'React'
  },
  plugins: [
    new ClosureCompilerPlugin()
  ]
};
