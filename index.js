'use strict';

var fm = require('front-matter');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var options = this.getOptions() || {};

  var frontmatter = fm(source);
  if (options.onlyAttributes) {
    return JSON.stringify(frontmatter.attributes);
  } else if (options.onlyBody) {
    return frontmatter.body;
  } else {
    return JSON.stringify(frontmatter);
  }
};
