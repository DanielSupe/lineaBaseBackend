require('dotenv').config();

module.exports = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  host: process.env.HOST,
  dialect: process.env.DIALECT || 'mysql',
  port: process.env.PORTDB || 3306, // Default MySQL port
};