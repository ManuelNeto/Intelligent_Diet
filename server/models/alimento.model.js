var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var Alimento = new Schema({
    name: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    quantidade:{
        type: Number,
        required:true
    },
    calorias:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('Alimento', Alimento);
