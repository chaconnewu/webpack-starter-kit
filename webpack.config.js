// var ClosureCompilerPlugin = require('webpack-closure-compiler');
var path = require('path');

var config = {
  entry: path.resolve(__dirname, './src/client/app.js'),
  output: {
    path: path.resolve(__dirname, './src/client/'),
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        exclude: /(node_modules|bower_components)/,
        loader: 'babel' // The module to load. "babel" is short for "babel-loader"
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  externals: {
    'react': 'React'
  },
  plugins: [
    // new ClosureCompilerPlugin()
  ]
};
module.exports = config;
