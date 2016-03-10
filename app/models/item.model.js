// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var itemSchema = new Schema({
  name: { 
  	type: String, 
  	required: true, 
  	unique: true 
  },
  priority: Number,
  assigned_users: [{
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User'
  }],
  comments:[{
  	body: String,
  	posted_by: {
  		type: mongoose.Schema.Types.ObjectId,
  		ref: 'User'
  	}
    date_added: Date
  }],
  description: String,
  created_at: Date,
  updated_at: Date,
  due_date: Date,

  /////////////////

  tags: [String],
  attachments: [String],
  activity: [{
  	action: String,
  	time: Date
  }],
  subtasks: [String]
});

// the schema is useless so far
// we need to create a model using it
var Item = mongoose.model('Item', itemSchema);


// make this available to our users in our Node applications
module.exports = Item;