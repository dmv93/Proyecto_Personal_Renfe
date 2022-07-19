const mongoose = require('mongoose')

const { Schema, model } = mongoose

const AutoIncrement = require('mongoose-sequence')(mongoose)

const compraSinLoginSchema = mongoose.Schema ({
        id: Number,
        origen: String,
        destino: String,
        precio: String
})

compraSinLoginSchema.plugin(AutoIncrement, { inc_field: "id" });

const compraSin = model('Compra_sin_login', compraSinLoginSchema);


module.exports = compraSin;