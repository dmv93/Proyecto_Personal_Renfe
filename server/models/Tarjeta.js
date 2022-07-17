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
        type: sequelize.INTEGER        
    }
})