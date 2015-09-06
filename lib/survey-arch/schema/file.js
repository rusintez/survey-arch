/**
 * File schema 
 */

/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * Expose
 */

module.exports = new mongoose.Schema({
  filename:   { type: String },
  mimeType:   { type: String }
});