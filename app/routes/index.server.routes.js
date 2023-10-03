/*
    File name: index.server.routes.js
    Student's Name: Hugo Salas
    Student ID: 301263940
    Date: Oct 3rd, 2023
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home',{title:'Home'})
})

router.get('/about', (req,res,next) => {
    res.render('about',{title:'About'})
})

router.get('/project', (req, res, next) => {
    res.render('project',{title:'Project'})
})

router.get('/services', (req,res,next) => {
    res.render('services',{title:'Services'})
})

router.get('/contact', (req,res,next) => {
    res.render('contact',{title:'Contact'})
})

// router.get('/style.css', (req,res,next)=>{
//     res.render('/stylesheets')
// })


module.exports = router;