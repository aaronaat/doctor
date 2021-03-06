const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/doctor.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
  contentBase: './dist'
},
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'doctor',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }

  ]
}
};
