const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller');

router.get('/:id', UserController.get);

router.put('/', UserController.editUser);

router.post('/',  UserController.save);

module.exports = router;
