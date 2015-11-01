# front-matter-loader
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
var exampleFM = require('json!front-matter!./example.md')

console.log(exampleFM.attributes.title)
// => 'Example'
console.log(exampleFM.attributes.description)
// => 'This is an example'
console.log(exampleFM.body)
// => 'Here is some example content'
```

If you have another loader preconfigured to load files with frontmatter (e.g. [markdown-loader](https://github.com/peerigon/markdown-loader)), you can [disable preconfigured loaders using `!!`](https://webpack.github.io/docs/loaders.html#loader-order):

```js
var exampleFM = require('!!json!front-matter!./example.md')
```
