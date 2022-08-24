const Sequelize = require('sequelize');
const { DATABASE, DB_USER, PASSWORD } = require('../config');
/**
 *  host: 'db',
    user: 'docker',
    password: '123456',
    database: 'docker',
 */
//GET ENV VARIABLES FROM
console.log('passwoed', PASSWORD, DB_USER);
exports.sequelize = new Sequelize(DATABASE, DB_USER, PASSWORD, {
  host: 'db',
  dialect: 'postgres',
});

