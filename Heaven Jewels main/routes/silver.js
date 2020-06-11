const express = require('express');
const router = express.Router();

router.get('/smbracelet', (req, res) => res.render('smbracelet'));
router.get('/swbracelet', (req, res) => res.render('swbracelet'));
router.get('/smring', (req, res) => res.render('smring'));
router.get('/swring', (req, res) => res.render('swring'));
router.get('/smpendant', (req, res) => res.render('smpendant'));
router.get('/swpendant', (req, res) => res.render('swpendant'));
router.get('/smearring', (req, res) => res.render('smearring'));
router.get('/swearring', (req, res) => res.render('swearring'));
router.get('/swnecklace', (req, res) => res.render('swnecklace'));
router.get('/swbangle', (req, res) => res.render('swbangle'));
router.get('/swanklet', (req, res) => res.render('swanklet'));
router.get('/swnosepin', (req, res) => res.render('swnosepin'));
router.get('/swminchi', (req, res) => res.render('swminchi'));



module.exports = router;