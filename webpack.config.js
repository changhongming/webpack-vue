// webpack.config.js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTemplate = path.join(__dirname, 'src', 'view', 'index.html')


module.exports = {
  mode: 'development',
  entry: {
    'app': './src/app.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      chunks: ['app', 'vendor'],
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        // commons: {
        //   chunks: 'initial',
        //   name: 'commons',
        //   minChunks: 2,
        //   priority: 1,
        // },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          priority: 2,
          enforce: true
        }
      },
    }
  }
}
