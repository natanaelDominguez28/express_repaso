const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', (req, res)=>res.render('index'));

module.exports = router;