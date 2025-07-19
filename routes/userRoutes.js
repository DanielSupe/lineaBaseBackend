const express = require('express');
const router = express.Router();


module.exports = (userController) => {

  router.get('/', userController.getAllUsers);
  router.get('/:id', userController.getUserById);
  router.put('/:id', userController.updateUser);
  router.delete('/:id', userController.deleteUser);

  return router;
};