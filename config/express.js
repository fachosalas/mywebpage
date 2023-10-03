/*
    File name: express.js
    Student's Name: Hugo Salas
    Student ID: 301263940
    Date: Oct 3rd, 2023
*/

const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
// const { path } = require('../server.js');

module.exports = () => {
    const app = express();

    if (process.env.NODE_ENV === "development"){
        app.use(morgan('Dev'));
    }else if (process.env.NODE_ENV === "production"){
        app.use(morgan('Prod'))
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json());
    app.use(methodOverride());

    // app.get('/style.css', (req,res) =>{
    //     res.setHeader('Content-type', 'text/css');
    //     res.sendFile(__dirname + './public/style/css')
    // })

    //Set Templeteing engine
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    // app.use('')
    app.use('/', require('../app/routes/index.server.routes.js'));
    
    // app.use('/', require())
    app.use(express.static('./node_modules'));
    app.use(express.static('./app/public'));

    return app;


}