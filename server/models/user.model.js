var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var User = new Schema({
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required:true
    },
    weight:{
        type: Number,
        required:true
    },
    goal: {
        type: String,
        required: true
    },
    diet: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Diet'
		}
});

module.exports = mongoose.model('User', User);
