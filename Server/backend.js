require('dotenv').config()

const express = require('express');
const db = require('mongoose');
const theRoutes = require("./routes/webRoutes")

//Creating server
const app = express();

//Middleware
app.use(express.json());

//Using routes
app.use('/admin', theRoutes);

//Connecting to Database
db.connect(process.env.DB_CON)
    .then(() => {
        //Listening to a Port
        app.listen(process.env.PORT, ()=>{
            console.log('Connected on MongoDB in port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })