const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on  port 3000');
});

module.exports = app;
