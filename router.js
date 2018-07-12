const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fileHandler = require('./file-handler.js');


router.get('/', (req, res) => {
    console.log("success");
    res.render('index.ejs')
}); 

router.post('/upload', (req, res) => {

});

module.exports = router;