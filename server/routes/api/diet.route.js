const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/diet.controller');

router.get('/:id', UserController.get);

//router.get('/', UserController.getAll);

router.post('/',  UserController.save);

module.exports = router;
