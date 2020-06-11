const express = require('express');
const router = express.Router();

router.get('/pmbracelet', (req, res) => res.render('pmbracelet'));
router.get('/pwbracelet', (req, res) => res.render('pwbracelet'));
router.get('/pmring', (req, res) => res.render('pmring'));
router.get('/pwring', (req, res) => res.render('pwring'));
router.get('/gmpendant', (req, res) => res.render('gmpendant'));
router.get('/pwpendant', (req, res) => res.render('pwpendant'));
router.get('/gmearring', (req, res) => res.render('gmearring'));
router.get('/gwearring', (req, res) => res.render('gwearring'));
router.get('/pwnecklace', (req, res) => res.render('pwnecklace'));
router.get('/pwbangle', (req, res) => res.render('pwbangle'));
router.get('/gwchain', (req, res) => res.render('gwchain'));
router.get('/gwnosepin', (req, res) => res.render('gwnosepin'));
router.get('/gwpendantset', (req, res) => res.render('gwpendantset'));



module.exports = router;