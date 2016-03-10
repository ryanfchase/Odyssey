// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var boardSchema = new Schema({
  name: String,
  username: { 
  	type: String, 
  	required: true, 
  	unique: true 
  },
  admin: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User'
  },
  items: [{
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Item'
  }]
  description: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Board = mongoose.model('Board', boardSchema);


// make this available to our users in our Node applications
module.exports = Board;