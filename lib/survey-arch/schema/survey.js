/**
 * Survey schema 
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
  title:      { type: String },
  startsAt:   { type: Date },
  endsAt:     { type: Date },
  questions:  [{ type: ObjectId, ref: 'Question' }]
});