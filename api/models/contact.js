'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the contact'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Contacts', ContactSchema);
