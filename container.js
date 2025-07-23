const db = require('./models/index');

// const createUserRoutes = require('./routes/userRoutes');
// const createUserController = require('./controllers/userController');
// const createUserService = require('./services/userService');

const createAuthRoutes = require('./routes/authRoutes');
const createAuthController = require('./controllers/authController');
const createAuthService = require('./services/authService');
//----------user---------
// const userService = createUserService(db.user);
// const userController = createUserController(userService);
// const userRoutes = createUserRoutes(userController);
//----------Auth---------
const authService = createAuthService(db.user);
const authController = createAuthController(authService);
const authRoutes = createAuthRoutes(authController);

module.exports = {
    userRoutes,
    authRoutes
};