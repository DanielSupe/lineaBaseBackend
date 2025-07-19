const createUserRoutes = require('./routes/userRoutes');
const createUserController = ()=>{}
const createUserService = ()=>{}

const userService = createUserService(db.User);
const userController = createUserController(userService);
const userRoutes = createUserRoutes(userController);

module.exports = {
    userRoutes,
};