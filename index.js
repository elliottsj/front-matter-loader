'use strict'

var fm = require('front-matter')

module.exports = function (source) {
	this.cacheable && this.cacheable()
	return JSON.stringify(fm(source))
}
