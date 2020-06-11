const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('index.ejs'));


//afterlogin page
router.get('/users/afterlogin',ensureAuthenticated, (req, res) =>
 res.render('afterlogin.ejs' , {
     name: req.user.name
 }));


module.exports = router;