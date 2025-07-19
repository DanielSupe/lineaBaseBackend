
module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define(
        'user',
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            number: {
                type: Sequelize.STRING,

            },
            password: {
                type: Sequelize.STRING(500),
            },
        },
        {
            freezeTableName: true,
        }
    );

    UserModel.associate = (models) =>{
        UserModel.hasMany(models.post, {
            foreignKey: 'userId',
        }
        )
    }

    // UserModel.sync({alter:true});
    return UserModel;
};
