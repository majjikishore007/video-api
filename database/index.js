const Sequelize = require('sequelize');
const { DATABASE, DB_USER, PASSWORD } = require('../config/index.js');

exports.sequelize = new Sequelize(
  DATABASE, // db name,
  DB_USER, // username
  PASSWORD, // password
  {
    host: 'localhost',
    dialect: 'postgres',
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    logging: true,
  }
);
