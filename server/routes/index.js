const express = require('express');
const router = express.Router();
const users = require('./api/user.route');
const foods = require('./api/food.route');
const diets= require('./api/diet.route');

router.use('/user', users);
router.use('/food', foods);
router.use('/diet', diets);
router.use('/', users);

module.exports = router;
