/**
 * Application logger
 */

/**
 * Module dependencies
 */

var debug   = require('debug');
var config  = require('config');

/**
 * Verbose log
 */

var log = debug(config.log.label);

/**
 * Error log
 */

var err = debug(config.log.label + ':error');

/**
 * Expose
 */

module.exports = log;
module.exports.error = err;