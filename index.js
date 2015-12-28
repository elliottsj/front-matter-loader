'use strict'

var loaderUtils = require('loader-utils')
var fm = require('front-matter')

module.exports = function (source) {
	this.cacheable && this.cacheable()
	var query = loaderUtils.parseQuery(this.query)

	var frontmatter = fm(source)
	if (query.onlyAttributes) {
		return JSON.stringify(frontmatter.attributes)
	} else if (query.onlyBody) {
		return frontmatter.body
	} else {
		return JSON.stringify(frontmatter)
	}
}
