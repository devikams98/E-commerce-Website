const express = require('express');
const router = express.Router();

router.get('/gmbracelet', (req, res) => res.render('gmbracelet'));
router.get('/gwbracelet', (req, res) => res.render('gwbracelet'));
router.get('/gmring', (req, res) => res.render('gmring'));
router.get('/gwring', (req, res) => res.render('gwring'));
router.get('/gmpendant', (req, res) => res.render('gmpendant'));
router.get('/gwpendant', (req, res) => res.render('gwpendant'));
router.get('/gmearring', (req, res) => res.render('gmearring'));
router.get('/gwearring', (req, res) => res.render('gwearring'));
router.get('/gwnecklace', (req, res) => res.render('gwnecklace'));
router.get('/gwbangle', (req, res) => res.render('gwbangle'));
router.get('/gwchain', (req, res) => res.render('gwchain'));
router.get('/gwnosepin', (req, res) => res.render('gwnosepin'));
router.get('/gwpendantset', (req, res) => res.render('gwpendantset'));



module.exports = router;