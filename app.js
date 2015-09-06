/**
 * Survey app standalone server
 */

/**
 * Module dependencies
 */

var http    = require('http');
var config  = require('config');
var log     = require('services/log');
var app     = require('./');

/**
 * Start server
 */

http.createServer(app).listen(config.server.port, function() {
  log('Server is listening on %s', config.server.port);
});