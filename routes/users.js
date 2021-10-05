const express = require('express');

const router = express.Router();

//Load user model
const User = require('../config/models/User');

//Login page
router.get('/login', (req,res) => res.render('login', { layout: 'login' }));

// Register page
router.get('/register', (req, res) => res.render('register', { layout: 'login' }));

//Register handle
router.post('/register', (req, res) => {
    console.log(req.body)
    const { name, email, pwd, pwd2} = req.body
    let errors = []

    if (!name || !email || !pwd || !pwd2) {
        errors.push({ msg: 'Please enter all fields' });
      }
    
    if (pwd != pwd2) {
    errors.push({ msg: 'Passwords do not match' });
    }
    
    if (pwd.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
    }
    
      if (errors.length > 0) {
        res.render('register', {
          errors,
          name,
          email,
          pwd,
          pwd2
        });
      } else {
        User.findOne({ email: email }).then(user => {
          if (user) {
            errors.push({ msg: 'Email already exists' });
            res.render('register', {
              errors,
              name,
              email,
              pwd,
              pw2
            });
          } else {
            const newUser = new User({
              name,
              email,
              pwd
            })}            
        });   
        }
});

module.exports = router