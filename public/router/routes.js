const express = require('express');
const path = require('path');
const router = express.Router();
//const benefits = require('../js/benefits.js');

var base = path.normalize(__dirname + '/..');

router.get('/', function(req, res) {
    console.log('Requested path '+req.path);
    console.log('Requested url '+ req.url);
    
    res.render('index');
    res.end
})

router.get('/not_home', function(req, res) {
    console.log('Requested path '+req.path);
    console.log('Requested url '+ req.url);
    
    res.send("This is not the home file");
    res.end;
})

router.get('/info', function(req, res) {
    console.log('Requested path '+req.path);
    console.log('Requested url '+ req.url);
    
    res.render('info');
    res.end;
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