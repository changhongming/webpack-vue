const webpackComCnf = require('./webpack.config.js');

module.exports = {
  ...webpackComCnf,
  mode: 'production',
  devtool: 'none'
};
