'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var questionSchema = Schema( {
  userId: ObjectId,
  questionString: String,
  questionID: ObjectId,
  answered: Boolean,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Question', questionSchema );
