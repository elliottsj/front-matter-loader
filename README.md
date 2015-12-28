# front-matter-loader
[![npm version](https://img.shields.io/npm/v/front-matter-loader.svg)](https://www.npmjs.com/package/front-matter-loader)

Webpack loader to extract frontmatter using [jxson/front-matter](https://github.com/jxson/front-matter)

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

The frontmatter can be extracted like this:

```js
var exampleFrontmatter = require('json!front-matter!./example.md')

console.log(exampleFrontmatter.attributes.title)
// => 'Example'
console.log(exampleFrontmatter.attributes.description)
// => 'This is an example'
console.log(exampleFrontmatter.body)
// => 'Here is some example content'
```

If you have another loader preconfigured to load files with frontmatter (e.g. [markdown-loader](https://github.com/peerigon/markdown-loader)), you can [disable preconfigured loaders using `!!`](https://webpack.github.io/docs/loaders.html#loader-order):

```js
var exampleFrontmatter = require('!!json!front-matter!./example.md')
```

To extract only the frontmatter attributes of the target file, use the `onlyAttributes` query parameter:

```js
var exampleAttributes = require('json!front-matter?onlyAttributes!./example.md')
console.log(exampleAttributes.title)
// => 'Example'
console.log(exampleAttributes.description)
// => 'This is an example'
```

To extract only the body content of the target file, use the `onlyBody` query parameter:

```js
var exampleContent = require('raw!front-matter?onlyBody!./example.md')
```
