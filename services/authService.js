require('dotenv').config();

module.exports = (UserModel) => {
        const createdUser = async (userData) => {
            const hashedPassword = await bcrypt.hash(userData.password, process.env.saltRounds);
            	const user = await UserModel.create({ ...userData, password: hashedPassword });
                return user;
        };

        const findbyEmail = async (email) => {
            const user = await UserModel.findOne({ where: { email } });
            return user;
        };

        const findUserById = async (id) => {
            const user = await UserModel.findByPk(id);
            return user;
        }
    


    return{
        createdUser,
        findbyEmail,
        findUserById
    }
};