const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

test('extracts frontmatter and body as an object', () =>
  new Promise((resolve) => {
    webpack(config, (error, stats) => {
      if (error) {
        throw error;
      }
      const bundlePath = path.resolve(
        stats.compilation.compiler.outputPath,
        stats.toJson().assetsByChunkName.main[0]
      );
      expect(require(bundlePath)).toMatchInlineSnapshot(`
        Object {
          "attributes": Object {
            "description": "This is an example",
            "title": "Example",
          },
          "body": "Here is some example content
        ",
          "bodyBegin": 6,
          "frontmatter": "title: Example
        description: This is an example",
        }
      `);
      resolve();
    });
  }));
