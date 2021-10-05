const { Console } = require('console');
const express = require('express');
const path = require('path');
const router = express.Router();
const create_agg = require("../middleware/create_arch_elements.js");
//const benefits = require('../js/benefits.js');

var base = path.normalize(__dirname + '/..');

router.get('/', function(req, res) {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('index');
    res.end
})

router.get('/tool', function(req, res) {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('forms');
    res.end;
})

router.get('/info', function(req, res) {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('info');
    res.end;
})

router.post('/forms', function(req, res, next){
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    console.log(req.body) //form submission value are available here
    router.use(create_agg)
    res.render('forms')
})

// router.get('/snippets', function(req, res){
//     console.log('Requested url '+ req.url);
//     console.log('request for snippet received');
//     res.sendFile(req.url);
//     res.end;
// });

// router.get('/data', function(req, res){
//     console.log('Requested url '+ req.url);
//     console.log('request for snippet received');
//     res.sendFile(req.url);
//     res.end;
// });

module.exports = router;