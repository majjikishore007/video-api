const { Sequelize } = require('sequelize');

const { DATABASE, DB_USER, PASSWORD } = require('../config/index');

// connecting db on local
const sequelize = new Sequelize(DATABASE, DB_USER, PASSWORD, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection with DB established');
  } catch (err) {
    console.error('Unable to connect with DB', err);
  }
})();

module.exports = sequelize;
