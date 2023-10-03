/*
    File name: server.js
    Student's Name: Hugo Salas
    Student ID: 301263940
    Date: Oct 3rd, 2023
*/

process.env.NODE_ENV  = "development";

const express = require('./config/express');

const app = express();

app.listen(process.env.PORT||8081);

module.exports = app;

console.log("Server is running....")