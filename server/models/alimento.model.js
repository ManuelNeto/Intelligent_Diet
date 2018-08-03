var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var Alimento = new Schema({
    name: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    selecionado: {
        type: Boolean,
        default: false,
        required: false
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
