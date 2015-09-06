/**
 * Survey's express router
 */

/**
 * Module dependencies
 */

var express = require('express');
var log     = require('services/log');
var survey  = require('services/survey');
var respond = require('utils/respond');

/**
 * Init
 */

var router = express.Router();

router.get('/', function(req, res, next) {
  survey.find(req.query, respond(req, res, next));
});

router.get('/:id', function(req, res, next) {
  survey.findOne({ _id: req.params.id }, respond(req, res, next));
});

router.post('/', function(req, res, next) {
  survey.create(req.body, respond(req, res, next));
});

router.post('/:id', function(req, res, next) {
  survey.update(req.params.id, req.body, respond(req, res, next));
});

router.delete('/:id', function(req, res, next) {
  survey.remove(req.params.id, respond(req, res, next));
});

/**
 * Expose
 */

exports = module.exports = router;