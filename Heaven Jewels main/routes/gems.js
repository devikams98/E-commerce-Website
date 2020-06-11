const express = require('express');
const router = express.Router();

router.get('/blue', (req, res) => res.render('blue'));
router.get('/emerald', (req, res) => res.render('emerald'));
router.get('/gemanklet', (req, res) => res.render('gemanklet'));
router.get('/hasso', (req, res) => res.render('hasso'));
router.get('/gembracelet', (req, res) => res.render('gembracelet'));
router.get('/gemminchi', (req, res) => res.render('gemminchi'));
router.get('/gemearring', (req, res) => res.render('gemearring'));
router.get('/rubby', (req, res) => res.render('rubby'));
router.get('/gemnecklace', (req, res) => res.render('gemnecklace'));
router.get('/gembangle', (req, res) => res.render('gembangle'));
router.get('/gwchain', (req, res) => res.render('gwchain'));
router.get('/gemnosepin', (req, res) => res.render('gemnosepin'));
router.get('/gwpendantset', (req, res) => res.render('gwpendantset'));
router.get('/yellow', (req, res) => res.render('yellow'));




module.exports = router;