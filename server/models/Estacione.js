const mongoose = require('mongoose')

const { Schema, model } = mongoose

//const AutoIncrement = require("mongoose-sequence"(mongoose))

const estacionSchema = mongoose.Schema ({
    lineas: [{
        estacion: String,
        id: String,
        zona: String,
        linea: String
    }]
})

const estacione = model('estaciones', estacionSchema);


module.exports = estacione;

