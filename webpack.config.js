const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main-webpack.js',
    path: path.resolve(__dirname, 'dist'),
  },
};