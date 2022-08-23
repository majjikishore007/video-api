import app from './app.js';
import { sequelize } from './database/index.js';

const main = async () => {
  await sequelize.sync({ force: false });
  app.listen(4000, () => {
    console.log('ya server in running on port 400');
  });
};

main();
