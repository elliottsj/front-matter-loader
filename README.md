# front-matter-loader

[![npm version](https://img.shields.io/npm/v/front-matter-loader.svg)](https://www.npmjs.com/package/front-matter-loader)

webpack loader to extract frontmatter using [jxson/front-matter](https://github.com/jxson/front-matter)

## Installation

```shell
npm install front-matter-loader
```

## Usage

Given a file with frontmatter, e.g. _example.md_:

```md
---
title: Example
description: This is an example
---

Here is some example content
```

The frontmatter can be extracted like this (using [json-loader](https://github.com/webpack-contrib/json-loader)):

```js
var exampleFrontmatter = require('json-loader!front-matter-loader!./example.md');

console.log(exampleFrontmatter.attributes.title);
// => 'Example'
console.log(exampleFrontmatter.attributes.description);
// => 'This is an example'
console.log(exampleFrontmatter.body);
// => 'Here is some example content'
```

To extract only the frontmatter attributes of the target file, use the `onlyAttributes` query parameter:

```js
var exampleAttributes = require('json-loader!front-matter-loader?onlyAttributes!./example.md');
console.log(exampleAttributes.title);
// => 'Example'
console.log(exampleAttributes.description);
// => 'This is an example'
```

To extract only the body content of the target file, use the `onlyBody` query parameter:

```js
var exampleContent = require('raw-loader!front-matter-loader?onlyBody!./example.md');
```

For a complete example using a webpack config, see [example/](example/).
