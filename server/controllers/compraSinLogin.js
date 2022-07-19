require('express');
const moongose = require('mongoose');
const mongo = require('mongodb');

// const mongoose = require('moongose')
const compraSin = require('../models/CompraSinLogin')

const url = 'mongodb://localhost:27017/renfe';
const MongoClient = mongo.MongoClient
const mydb = 'renfe';

const coleccionEstaciones = 'estaciones'
const coleccionCompra = 'Compra_sin_login'

const compraSi = {

    verInfoColeccionEstaciones: (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);
            // var query = {"zona": "B2"}
            dbo.collection(coleccionEstaciones).find().toArray(function (err, result) {
                if (err) throw err
                if (result) {
                    res.json(result[0].lineas)
                    // console.log(result)  
                } else {
                    res.json({ message: "Error en la lectura de la base de datos", status: false })
                }
            })
        })
    },

    guardarDatosCompra: (req, res) => {
        console.log(req.body)
        const { origen, destino, viaje } = req.body;
        let insert =  {
            origen,
            destino,
            precio: viaje,
        };
        let user = new compraSin(insert);

        user.save(function (err) {
            if (err) throw err;
            console.log("Inserción correcta");
            // mongoose.disconnect();
        });

    }
}

module.exports = compraSi;