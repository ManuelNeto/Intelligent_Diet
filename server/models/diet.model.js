var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var Diet = new Schema({

  score:{
      type: Number
  },
  breakfast: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alimento',
    required: true
  }],

  lunch: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alimento',
    required: true
  }],

  dinner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alimento',
    required: true
  }],

  snack: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alimento',
    required: true
  }]

});

module.exports = mongoose.model('Diet', Diet);
