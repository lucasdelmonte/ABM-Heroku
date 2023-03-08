const express = require('express');
const router = express.Router();
const UserController = require('../../Controllers/controllerUsers');

router.get('/all', UserController.getAllUsers);
router.get('/:_id', UserController.searchById);
router.put('/:userId', UserController.updateUser);
router.post('/', UserController.addNewUser);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;