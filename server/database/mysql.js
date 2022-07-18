const mysql = require('mysql');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('renfe', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
  });

  sequelize.authenticate()
  .then(() => {
    console.log('Conexión con la base de datos de MySQL establecida');
  })
  .catch((err) => {
    console.log('No conectado a MySQL: ' + err);
  })

module.exports = sequelize;