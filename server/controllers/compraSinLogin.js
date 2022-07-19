require('express');
const moongose = require('mongoose');
const mongo = require('mongodb');
const compraSin = require('../models/CompraSinLogin')
const url = 'mongodb://localhost:27017/renfe';
const MongoClient = mongo.MongoClient
const mydb = 'renfe';

//colecciones de mongo
const coleccionEstaciones = 'estaciones'
const coleccionCompra = 'Compra_sin_login'


const compraSi = {

    //para trabajar las estaciones de nuestra coleccion
    verInfoColeccionEstaciones: (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);
            //buscamos todos los valores
            dbo.collection(coleccionEstaciones).find().toArray(function (err, result) {
                if (err) throw err
                if (result) {
                    res.json(result[0].lineas)
                } else {
                    res.json({ message: "Error en la lectura de la base de datos", status: false })
                }
            })
        })
    },

    //para rellenar la coleccion de compra sin login
    guardarDatosCompra: (req, res) => {
        console.log(req.body)
        const { origen, destino, viaje } = req.body;
        let insert = {
            origen,
            destino,
            precio: viaje,
        };
        //al nuevo documento le planchamos lo recogido del body
        let user = new compraSin(insert);

        //guardamos en la coleccion el documento
        user.save(function (err) {
            if (err) throw err;
            console.log("Inserción correcta");
            // mongoose.disconnect();
        });

    }
}

module.exports = compraSi;