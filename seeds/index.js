const userSeeds = require('./users-seeds.json')
const { User } = require('../models')
const sequelize = require('../connection/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await User.bulkCreate(userSeeds)


  process.exit(0);
};

seedAll();
