const path = require('path');

const frontMatterLoader = require.resolve('..');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build'),
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['json-loader', frontMatterLoader],
      },
    ],
  },
};
