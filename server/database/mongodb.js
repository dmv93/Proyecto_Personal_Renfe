const mongoose = require('mongoose')
const connection = 'mongodb://localhost:27017/renfe'

//Conectamos Mongo

mongoose.connect(connection)
.then(() => {
    console.log('Conexión con la base de datos de MongoDB satisfactoria');
})
.catch(() => {
    console.error(err);
})
module.exports = mongoose;
