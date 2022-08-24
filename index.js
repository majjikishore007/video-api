const app = require('./app.js');
const { sequelize } = require('./database/index.js');
const { API_KEY, PORT } = require('./config/index.js');
const fetch = require('node-fetch');
const { dumpData } = require('./controllers/youtube.js');
var cron = require('node-cron');

const BASE_URL = 'https://youtube.googleapis.com/youtube';

// for fetching the data from api
// runs every 10 seconds
cron.schedule('*/10 * * * * *', () => {
  console.log('fetcing data..........');
  //getData();
});

// fetching the lastest  videoes
const getData = async () => {
  fetch(
    `${BASE_URL}/v3/search?part=snippet&q=cricket&maxResults=100&order=date&key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      dumpData(data.items);
    })
    .catch((err) => {
      console.log(err);
    });
};
const main = async () => {
  await sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log('ya server in running on port ', PORT);
  });
};

main();
