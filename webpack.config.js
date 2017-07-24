const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/public/jsx/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/js')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ]
};
