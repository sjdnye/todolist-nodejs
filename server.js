const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');

const app = express();

const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errorController = require('./controllers/error');



//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middlewares

//Statics
const { setStatics } = require('./utils/statics');
setStatics(app);
//End of statics

//Routes
app.use(indexRoutes)
app.use('/admin', adminRoutes);

//End of routes

//404
app.use(errorController.get404)



sequelize.sync()
    .then(
        result => {
            app.listen(3000, () => console.log("Server is running..."));
        }
    ).catch(err => console.log(err));