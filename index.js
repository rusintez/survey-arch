/**
 * Survey app routes and middleware setup
 */

/**
 * Module dependencies
 */

var express     = require('express');
var bodyParser  = require('body-parser');
var log         = require('services/log');
var surveys     = require('routes/surveys');

/**
 * Initialize
 */

var app = express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/surveys', surveys);

/**
 * Expose
 */

module.exports = app;