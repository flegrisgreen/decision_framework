const express = require('express')
const router = express.Router()

// @desc Login
// @route GET /
router.get('/', (req, res) => {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('info');
    res.end
})

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('info');
    res.end
})

router.get('/register', (req, res) => {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('register');
    res.end
})

router.get('/login', (req, res) => {
    console.log('Request type: '+ req.method)
    console.log('Requested url '+ req.url);
    
    res.render('login');
    res.end
})
module.exports = router