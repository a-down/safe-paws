const userSeeds = require('./users-seeds.json')
const { User, Pets, Services, Staff } = require('../models')
const petsSeeds = require('./pets-seeds.json')
const servicesSeeds = require('./services-seeds.json')
const staffSeeds = require('./staff-seeds.json')
const sequelize = require('../connection/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await User.bulkCreate(userSeeds)
  await Pets.bulkCreate(petsSeeds)
  await Services.bulkCreate(servicesSeeds)
  await Staff.bulkCreate(staffSeeds)


  process.exit(0);
};

seedAll();
