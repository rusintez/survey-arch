/**
 * Question schema 
 */

/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var File     = require('schema/file');

/**
 * Expose
 */

module.exports = new mongoose.Schema({
  body:       { type: String },
  choices:    [{ type: String }],
  image:      { type: File }
});