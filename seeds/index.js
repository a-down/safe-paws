// const userSeeds = require('../seeds/users-seeds.json')
const { Services, Staff, StaffServices } = require('../models')
// const petsSeeds = require('./pets-seeds.json')
const servicesSeeds = require('./services-seeds.json')
const staffSeeds = require('./staff-seeds.json')
// const bookingsSeeds = require('./booking-seeds.json')
const sequelize = require('../connection/config');
const staffServicesSeeds = require('./staff-services-seeds.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // await User.bulkCreate(userSeeds)
  // await Pets.bulkCreate(petsSeeds)
  await Services.bulkCreate(servicesSeeds)
  await Staff.bulkCreate(staffSeeds)
  await StaffServices.bulkCreate(staffServicesSeeds)
  // await Bookings.bulkCreate(bookingsSeeds)


  process.exit(0);
};

seedAll();
