const webpackComCnf = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackComCnf.plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  ...webpackComCnf
};

