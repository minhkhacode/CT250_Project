const express = require('express');
const { usersController } = require('../controllers/index.js');
const router = express.Router();

router.route('/')
    .get(usersController.getAllUsersInfor)
    .delete(usersController.deleteAllUsers)

router.route('/:id')
    .get(usersController.getUserById)
    .put(usersController.updateUserInfor)
    .delete(usersController.deleteUser);

router.post('/create', usersController.createNewUser);

module.exports = router;
