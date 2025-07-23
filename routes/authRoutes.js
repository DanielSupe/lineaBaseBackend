const express = require('express');
const router = express.Router();

module.exports = (authController) => {
    router.post('/login', authController.LoginUserController);
    router.post('/register', authController.registerUserController);
    // router.get('/logout', authController.logout);

    return router;
}