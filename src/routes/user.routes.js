const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// /user/register
router.get('/register', usersController.registerForm);
router.post('/register', usersController.create);


module.exports = router;