const path = require('path')
const Html = require('html-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: ['./public/index.js', 'webpack-hot-middleware/client'],
    second: ['./public/second.js', 'webpack-hot-middleware/client'],
  },
  devtool: "cheap-eval-source-map",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new Clean(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new Html({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
