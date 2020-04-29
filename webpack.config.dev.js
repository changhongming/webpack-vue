const path = require('path');
const webpackComCnf = require('./webpack.config.js');

module.exports = {
  ...webpackComCnf,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    clientLogLevel: 'error'
  }
};
