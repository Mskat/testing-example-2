const path = require('path');

const config = {
  entry: './scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};

module.exports = config;