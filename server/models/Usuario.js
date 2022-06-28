const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');

const Usuario = sequelize.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    telefono: {
        type: Sequelize.CHAR,
        allowNull: false,
    },

    pass: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    fecha_nacimiento: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Usuario;
