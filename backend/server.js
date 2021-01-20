const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
var cookieParser = require('cookie-parser');
var app = express();

const mongoose = require("./database/mongoose");
// const routerIndex = require("./routes/router");

// Serve static files from the Angular app
// app.use(express.static(path.join(__dirname, '../../client/build')));
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));



//middleware
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
    );

    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});
app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials: true
}));
app.use(express.json());

app.use(cookieParser());



//testing 
app.get("/*", (req, res) => {
    res.send("this in main page where server started listening it seems url mistack");
});

//port number
const port = 3030;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server Started listening at ://localhost:${port}`);
    }

});
