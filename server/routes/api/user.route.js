const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller');

router.get('/:id', UserController.get);

router.get('/', UserController.getAll);

router.put('/', UserController.editUser);

router.post('/',  UserController.save);

module.exports = router;
