const handleServiceError = require("../utils/handleServiceError");

module.exports = (UserModel) => {
    const createUser = async (userData) => {
        try {
            const existing = await UserModel.findOne({ where: { email: userData.email } });
            if (existing) {
                throw new Error('the email is already in use');
            }

            const user = await UserModel.create(userData);
            return user;
        } catch (error) {
            handleServiceError('createUser', error);
        }
    };

    return {
        createUser
    }
}