const {Sequelize} = require('sequelize');
const { username, password, database, host, dialect, port} = require('../db.config');
const db = {};
const sequelize = new Sequelize(database,username,password,{
    host: host,
    dialect: dialect,
    port: port, 

});



db.user = require('./UserModel')(sequelize, Sequelize);

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.Sequelize.Op = Sequelize.Op;

module.exports = db;