const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');

const Tarjeta = sequelize.define('tarjeta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fk_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true       
    },
    duracion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zona: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alta: {
        type: Sequelize.DATE,
        // createdAt: Sequelize.DATE,
        allowNull: false,
        
    },
    caducidad: {
        type: Sequelize.DATE,
        // updatedAt: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Tarjeta;