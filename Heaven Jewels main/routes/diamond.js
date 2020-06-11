const express = require('express');
const router = express.Router();

router.get('/dmbracelet', (req, res) => res.render('dmbracelet'));
router.get('/dwbracelet', (req, res) => res.render('dwbracelet'));
router.get('/dmring', (req, res) => res.render('dmring'));
router.get('/dwring', (req, res) => res.render('dwring'));

router.get('/dwearring', (req, res) => res.render('dwearring'));
router.get('/dwnecklace', (req, res) => res.render('dwnecklace'));
router.get('/dwbangle', (req, res) => res.render('dwbangle'));

router.get('/dwnosepin', (req, res) => res.render('dwnosepin'));




module.exports = router;