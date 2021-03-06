/*!
 * sop-styl
 * Copyright (c) 2015 Someoddpilot
 */

var stylus = require("stylus");
var path   = require("path");
var nodes  = stylus.nodes;

exports = module.exports = plugin;

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, "../package.json")).version;

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style){
    style.include(__dirname);

    style.include(path.join(__dirname, "../node_modules/nib/lib"));

    style.define("has-canvas", nodes.false);
  };
}
