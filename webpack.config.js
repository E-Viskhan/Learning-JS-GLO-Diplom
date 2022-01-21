const path = require('path');

module.exports = {
  entry: {
    'client/dist/js/main': path.resolve(__dirname, 'client/src/index.js'),
    'admin/dist/js/admin': path.resolve(__dirname, 'admin/src/admin.js'),
    'admin/dist/js/login': path.resolve(__dirname, 'admin/src/login.js'),
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  }
};