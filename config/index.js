require('dotenv').config();
module.exports = {
  DB_USER: process.env.DB_USER,
  DATABASE: process.env.DATABASE,
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
};
