/**
 * Survey service
 */

/**
 * Module dependencies
 */

var model = require('models/survey');
var log   = require('services/log');

/**
 * find
 *
 * @param {Object} query
 * @param {Function} cb(err, results)
 */

exports.find = function(query, cb) {
  model.find(query, function(err, results) {
    if (err) {
      log.error(err);
      return cb(Error('Something went wrong'));
    }
    cb(null, results);
  });
}

/**
 * find one
 *
 * @param {Object} query
 * @param {Function} cb(err, result)
 */

exports.findOne = function(query, cb) {
  query.limit = 1;
  model.find(query, function(err, results) {
    if (err) {
      log.error(err);
      return cb(Error('Something went wrong'));
    }
    if (!results.length) {
      log.error('Not results found for %j', query);
      return cb(Error('Not found'));
    }
    cb(null, results[0]);
  });
}

/**
 * create
 *
 * @param {Object} params
 * @param {Function} cb(err, result)
 */

exports.create = function(params, cb) {
  model.create(params, function(err, result) {
    if (err) {
      log.error(err);
      return cb(Error('Something went wrong'));
    }
    cb(null, result);
  });
}

/**
 * update
 *
 * @param {String} id, mongodb _id
 * @param {Object} params
 * @param {Function} cb(err, result)
 */

exports.update = function(id, params, cb) {
  model.update(id, params, function(err, result) {
    if (err) {
      log.error(err);
      return cb(Error('Something wnet wrong'));
    }
    if (!result) {
      log.error('Record %s not found during an update', id);
      return cb(Error('Not found'));
    }
    cb(null, result);
  });
}

/**
 * remove
 * 
 * @param {String} id
 * @param {Function} cb(err, result)
 */

exports.remove = function(id, cb) {
  model.remove(id, function(err, result) {
    if (err) {
      log.error(err);
      return cb(Error('Something wnet wrong'));
    }
    if (!result) {
      log.error('Record %s not found during removal', id);
      return cb(Error('Not found'));
    }
    cb(null, result);
  });
}
