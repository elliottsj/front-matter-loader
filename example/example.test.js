const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

test('extracts frontmatter and body as an object', () =>
  new Promise(resolve => {
    webpack(config, (error, stats) => {
      const bundlePath = path.resolve(
        stats.compilation.compiler.outputPath,
        stats.toJson().assetsByChunkName.main,
      );
      expect(require(bundlePath)).toEqual({
        // eslint-disable-line global-require
        attributes: {
          title: 'Example',
          description: 'This is an example',
        },
        body: '\nHere is some example content\n',
        frontmatter: 'title: Example\ndescription: This is an example',
      });
      resolve();
    });
  }));
