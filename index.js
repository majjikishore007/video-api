const app = require('./app.js');
const { sequelize } = require('./database/index.js');
const { API_KEY, PORT } = require('./config/index.js');
const fetch = require('node-fetch');
const { makeRefactor } = require('./controllers/youtube.js');

const BASE_URL = 'https://youtube.googleapis.com/youtube';

// fetching the lastest  videoes
const getData = async () => {
  fetch(
    `${BASE_URL}/v3/search?part=snippet&q=cricket&maxResults=100order=date&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      // makeRefactor(data.items);
    })
    .catch((err) => {
      console.log(err);
    });
};

const main = async () => {
  getData();
  await sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log('ya server in running on port ', PORT);
  });
};

main();
