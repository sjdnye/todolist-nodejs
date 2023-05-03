// ------------------------------- mysql --------------------
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize("todo_db", "root", "1051mysql1990", {
//     dialect: 'mysql',
//     host: 'Localhost'
// })

// module.exports = sequelize;

// ------------------------------- mongodb ------------------

const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/todo_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => console.log(err));