const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');



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

app.listen(3000, () => console.log("Server is running..."));