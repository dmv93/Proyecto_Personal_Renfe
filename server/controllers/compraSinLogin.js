require('express');
const mongo = require('mongodb');
const url = 'mongodb://localhost:27017/renfe';
const MongoClient = mongo.MongoClient
const mydb = 'renfe';

const coleccionEstaciones = 'estaciones'

const compra = {

    verInfoColeccionEstaciones: (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);
            // var query = {"zona": "B2"}
            dbo.collection(coleccionEstaciones).find().toArray(function (err, result) {
                if(err) throw err
                if (result) {
                    res.json(result[0].lineas) 
                    // console.log(result)  
                } else {
                    res.json({ message: "Error en la lectura de la base de datos", status: false})
                }
            })
        })
    }
}

module.exports = compra;