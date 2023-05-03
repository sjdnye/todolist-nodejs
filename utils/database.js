const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("todo_db", "root", "1051mysql1990", {
    dialect: 'mysql',
    host: 'Localhost'
})

module.exports = sequelize;