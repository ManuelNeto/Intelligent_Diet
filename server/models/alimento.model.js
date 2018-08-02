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
    calorias: {
        type: Number,
        required: true
    },
    proteina: {
        type: Number,
        required: true
    },

    carboidrato: {
        type: Number,
        required: true

    },
    gordura: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Alimento', Alimento);
