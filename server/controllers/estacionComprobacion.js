const Estaciones = require('../models/Estacione');

const comprobar = {
    buscar: async (request, response) => {
        Estaciones.find({}).then((buscar) => {
            response.json(buscar);
            console.log(buscar[0].lineas[37])
        });
    }
}

module.exports = comprobar;
